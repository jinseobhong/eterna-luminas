/**
 * Purpose: Layer 3 2-Cluster SQLite LTM persistence adapter and deterministic JSONL snapshot bridge.
 * Scope: Manages Cluster C1 (telemetry, dialogue, synthesizer) and Cluster C2 (knowledge) on node:sqlite.
 * Constraints: Isolates writes per DB, supports read-only ATTACH joins in C1, and keeps <= 250 lines.
 */

import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync, type SQLInputValue } from 'node:sqlite';
import type {
  BioTelemetrySnapshot,
  MemoryEngram,
  MilestoneRecord,
  NewMilestoneInput,
  PromptSynthesisBlock,
  SpectrumAnchor,
} from '../core/contracts/ltmContracts.ts';
import {
  clampBioTelemetrySnapshot,
  formatNextMilestoneId,
  validateMilestoneInput,
} from '../core/domain/ltmDomainEngine.ts';
import {
  DIALOGUE_DB_DDL,
  KNOWLEDGE_DB_DDL,
  SYNTHESIZER_DB_DDL,
  TELEMETRY_DB_DDL,
  mapRowToBioTelemetry,
  mapRowToMemoryEngram,
  mapRowToMilestone,
  mapRowToPromptBlock,
  readJsonlSnapshot,
  writeJsonlSnapshot,
} from './ltmSchemaDdl.ts';

export interface LtmClusterPaths {
  readonly dbDir: string;
  readonly mirrorDir: string;
}

function runAtomicMutation(db: DatabaseSync, sql: string, params: readonly SQLInputValue[]): void {
  db.exec('BEGIN IMMEDIATE;');
  try {
    db.prepare(sql).run(...params);
    db.exec('COMMIT;');
  } catch (err) {
    db.exec('ROLLBACK;');
    throw err;
  }
}

export class LtmDualClusterManager {
  public readonly telemetryDbPath: string;
  public readonly dialogueDbPath: string;
  public readonly synthesizerDbPath: string;
  public readonly knowledgeDbPath: string;
  public readonly mirrorDir: string;

  private readonly telemetryDb: DatabaseSync;
  private readonly dialogueDb: DatabaseSync;
  private readonly synthesizerDb: DatabaseSync;
  private readonly knowledgeDb: DatabaseSync;

  public constructor(paths: LtmClusterPaths) {
    fs.mkdirSync(paths.dbDir, { recursive: true });
    fs.mkdirSync(paths.mirrorDir, { recursive: true });

    this.mirrorDir = paths.mirrorDir;
    this.telemetryDbPath = path.resolve(paths.dbDir, 'telemetry.db');
    this.dialogueDbPath = path.resolve(paths.dbDir, 'dialogue.db');
    this.synthesizerDbPath = path.resolve(paths.dbDir, 'synthesizer.db');
    this.knowledgeDbPath = path.resolve(paths.dbDir, 'knowledge.db');

    this.telemetryDb = new DatabaseSync(this.telemetryDbPath);
    this.dialogueDb = new DatabaseSync(this.dialogueDbPath);
    this.synthesizerDb = new DatabaseSync(this.synthesizerDbPath);
    this.knowledgeDb = new DatabaseSync(this.knowledgeDbPath);

    this.telemetryDb.exec(TELEMETRY_DB_DDL);
    this.dialogueDb.exec(DIALOGUE_DB_DDL);
    this.synthesizerDb.exec(SYNTHESIZER_DB_DDL);
    this.knowledgeDb.exec(KNOWLEDGE_DB_DDL);
  }

  public upsertBioTelemetry(snapshot: BioTelemetrySnapshot): void {
    const s = clampBioTelemetrySnapshot(snapshot);
    runAtomicMutation(
      this.telemetryDb,
      `INSERT OR REPLACE INTO bio_telemetry_states (
        snapshot_id, spectrum_anchor, core_temp_celsius, bio_electric_current_pct,
        dopamine_harvest_score, last_spotlight_group, detail_json, updated_at_iso
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [s.snapshotId, s.spectrumAnchor, s.coreTempCelsius, s.bioElectricCurrentPct, s.dopamineHarvestScore, s.lastSpotlightGroup, s.detailJson, s.updatedAtIso],
    );
  }

  public getBioTelemetry(snapshotId: string): BioTelemetrySnapshot | null {
    const row = this.telemetryDb
      .prepare('SELECT * FROM bio_telemetry_states WHERE snapshot_id = ?;')
      .get(snapshotId) as Record<string, unknown> | undefined;
    return row ? mapRowToBioTelemetry(row) : null;
  }

  public upsertMemoryEngram(e: MemoryEngram): void {
    runAtomicMutation(
      this.dialogueDb,
      `INSERT OR REPLACE INTO memory_engrams (
        engram_id, session_id, memory_tier, role, spectrum_anchor,
        salience_weight, content_text, metadata_json, created_at_iso
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [e.engramId, e.sessionId, e.memoryTier, e.role, e.spectrumAnchor, e.salienceWeight, e.contentText, e.metadataJson, e.createdAtIso],
    );
  }

  public queryMemoriesByAnchor(anchor: SpectrumAnchor): readonly MemoryEngram[] {
    const rows = this.dialogueDb
      .prepare('SELECT * FROM memory_engrams WHERE spectrum_anchor = ? ORDER BY salience_weight DESC, engram_id ASC;')
      .all(anchor) as Record<string, unknown>[];
    return rows.map(mapRowToMemoryEngram);
  }

  public upsertPromptSynthesisBlock(b: PromptSynthesisBlock): void {
    runAtomicMutation(
      this.synthesizerDb,
      `INSERT OR REPLACE INTO prompt_synthesis_blocks (
        block_id, spectrum_anchor, block_category, min_temp_celsius,
        priority_weight, condition_tag, template_text, updated_at_iso
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [b.blockId, b.spectrumAnchor, b.blockCategory, b.minTempCelsius, b.priorityWeight, b.conditionTag, b.templateText, b.updatedAtIso],
    );
  }

  public queryPromptBlocks(anchor: SpectrumAnchor, coreTempCelsius: number): readonly PromptSynthesisBlock[] {
    const rows = this.synthesizerDb
      .prepare('SELECT * FROM prompt_synthesis_blocks WHERE spectrum_anchor = ? AND min_temp_celsius <= ? ORDER BY priority_weight DESC, block_id ASC;')
      .all(anchor, coreTempCelsius + 1e-9) as Record<string, unknown>[];
    return rows.map(mapRowToPromptBlock);
  }

  public querySynthesizerWithAttachedContext(snapshotId: string, sessionId: string): readonly PromptSynthesisBlock[] {
    const telePath = this.telemetryDbPath.replace(/'/g, "''");
    const dialPath = this.dialogueDbPath.replace(/'/g, "''");
    this.synthesizerDb.exec(`ATTACH DATABASE '${telePath}' AS tele;`);
    this.synthesizerDb.exec(`ATTACH DATABASE '${dialPath}' AS dial;`);
    try {
      const rows = this.synthesizerDb
        .prepare(
          `SELECT s.* FROM main.prompt_synthesis_blocks AS s
           INNER JOIN tele.bio_telemetry_states AS t
             ON s.spectrum_anchor = t.spectrum_anchor AND s.min_temp_celsius <= t.core_temp_celsius + 1e-9
           WHERE t.snapshot_id = ?
             AND (s.condition_tag = '*' OR EXISTS (
               SELECT 1 FROM dial.memory_engrams AS m
               WHERE m.session_id = ? AND instr(lower(m.content_text), lower(s.condition_tag)) > 0
             ))
           ORDER BY s.priority_weight DESC, s.block_id ASC;`,
        )
        .all(snapshotId, sessionId) as Record<string, unknown>[];
      return rows.map(mapRowToPromptBlock);
    } finally {
      this.synthesizerDb.exec('DETACH DATABASE dial;');
      this.synthesizerDb.exec('DETACH DATABASE tele;');
    }
  }

  public recordMilestone(input: NewMilestoneInput, createdAtIso: string): MilestoneRecord {
    const validated = validateMilestoneInput(input);
    const existingRows = this.knowledgeDb
      .prepare('SELECT milestone_id FROM milestones ORDER BY milestone_id ASC;')
      .all() as { milestone_id: string }[];
    const record: MilestoneRecord = {
      milestoneId: formatNextMilestoneId(existingRows.map((r) => r.milestone_id)),
      scopeCategory: validated.scopeCategory,
      title: validated.title,
      problem: validated.problem,
      whyRationale: validated.whyRationale,
      invariants: validated.invariants,
      affectedFiles: validated.affectedFiles,
      createdAtIso,
    };
    this.upsertMilestoneRecord(record);
    return record;
  }

  public upsertMilestoneRecord(r: MilestoneRecord): void {
    runAtomicMutation(
      this.knowledgeDb,
      `INSERT OR REPLACE INTO milestones (
        milestone_id, scope_category, title, problem,
        why_rationale, invariants, affected_files_json, created_at_iso
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
      [r.milestoneId, r.scopeCategory, r.title, r.problem, r.whyRationale, r.invariants, JSON.stringify(r.affectedFiles), r.createdAtIso],
    );
  }

  public getMilestonesByFile(filePath: string): readonly MilestoneRecord[] {
    const norm = filePath.trim().replace(/\\/g, '/').replace(/^\.\//, '');
    const rows = this.knowledgeDb
      .prepare(
        `SELECT m.* FROM milestones AS m
         WHERE EXISTS (SELECT 1 FROM json_each(m.affected_files_json) AS f WHERE f.value = ?)
         ORDER BY m.milestone_id DESC;`,
      )
      .all(norm) as Record<string, unknown>[];
    return rows.map(mapRowToMilestone);
  }

  public listMilestones(): readonly MilestoneRecord[] {
    const rows = this.knowledgeDb
      .prepare('SELECT * FROM milestones ORDER BY milestone_id ASC;')
      .all() as Record<string, unknown>[];
    return rows.map(mapRowToMilestone);
  }

  public exportToJsonlMirror(): void {
    const tele = (this.telemetryDb.prepare('SELECT * FROM bio_telemetry_states ORDER BY snapshot_id ASC;').all() as Record<string, unknown>[]).map(mapRowToBioTelemetry);
    const dial = (this.dialogueDb.prepare('SELECT * FROM memory_engrams ORDER BY engram_id ASC;').all() as Record<string, unknown>[]).map(mapRowToMemoryEngram);
    const synth = (this.synthesizerDb.prepare('SELECT * FROM prompt_synthesis_blocks ORDER BY block_id ASC;').all() as Record<string, unknown>[]).map(mapRowToPromptBlock);
    writeJsonlSnapshot(path.join(this.mirrorDir, 'telemetry_states.jsonl'), tele);
    writeJsonlSnapshot(path.join(this.mirrorDir, 'dialogue_engrams.jsonl'), dial);
    writeJsonlSnapshot(path.join(this.mirrorDir, 'synthesizer_blocks.jsonl'), synth);
    writeJsonlSnapshot(path.join(this.mirrorDir, 'knowledge_milestones.jsonl'), this.listMilestones());
  }

  public hydrateFromJsonlMirror(): void {
    readJsonlSnapshot<BioTelemetrySnapshot>(path.join(this.mirrorDir, 'telemetry_states.jsonl')).forEach((t) => this.upsertBioTelemetry(t));
    readJsonlSnapshot<MemoryEngram>(path.join(this.mirrorDir, 'dialogue_engrams.jsonl')).forEach((e) => this.upsertMemoryEngram(e));
    readJsonlSnapshot<PromptSynthesisBlock>(path.join(this.mirrorDir, 'synthesizer_blocks.jsonl')).forEach((b) => this.upsertPromptSynthesisBlock(b));
    readJsonlSnapshot<MilestoneRecord>(path.join(this.mirrorDir, 'knowledge_milestones.jsonl')).forEach((m) => this.upsertMilestoneRecord(m));
  }

  public close(): void {
    this.telemetryDb.close();
    this.dialogueDb.close();
    this.synthesizerDb.close();
    this.knowledgeDb.close();
  }
}
