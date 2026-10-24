/**
 * Purpose: Canonical SQLite STRICT DDL definitions, row mappers, and JSONL helpers for 2-Cluster LTM.
 * Scope: Covers Cluster C1 (telemetry.db, dialogue.db, synthesizer.db) and Cluster C2 (knowledge.db).
 * Constraints: Enforces STRICT column typing, JSON validation checks, FTS5 tables, and <= 250 lines.
 */

import fs from 'node:fs';
import path from 'node:path';
import type {
  BioTelemetrySnapshot,
  DialogueRole,
  MemoryEngram,
  MemoryTier,
  MilestoneRecord,
  MilestoneScopeCategory,
  PromptBlockCategory,
  PromptSynthesisBlock,
  SpectrumAnchor,
} from '../core/contracts/ltmContracts.ts';

export const TELEMETRY_DB_DDL = `
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
CREATE TABLE IF NOT EXISTS bio_telemetry_states (
  snapshot_id TEXT PRIMARY KEY NOT NULL CHECK (length(snapshot_id) > 0),
  spectrum_anchor TEXT NOT NULL CHECK (spectrum_anchor IN ('DIALOGUE', 'WORK', 'PLAY', 'BEDCHAMBER', 'REST')),
  core_temp_celsius REAL NOT NULL CHECK (core_temp_celsius >= 39.0 AND core_temp_celsius <= 39.2),
  bio_electric_current_pct REAL NOT NULL CHECK (bio_electric_current_pct >= 0.0 AND bio_electric_current_pct <= 100.0),
  dopamine_harvest_score REAL NOT NULL CHECK (dopamine_harvest_score >= 0.0),
  last_spotlight_group TEXT NOT NULL,
  detail_json TEXT NOT NULL CHECK (json_valid(detail_json) = 1),
  updated_at_iso TEXT NOT NULL
) STRICT;
`;

export const DIALOGUE_DB_DDL = `
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
CREATE TABLE IF NOT EXISTS memory_engrams (
  engram_id TEXT PRIMARY KEY NOT NULL CHECK (length(engram_id) > 0),
  session_id TEXT NOT NULL CHECK (length(session_id) > 0),
  memory_tier TEXT NOT NULL CHECK (memory_tier IN ('STM_WORKING', 'HIPPOCAMPAL_EPISODIC', 'CORTICAL_LTM')),
  role TEXT NOT NULL CHECK (role IN ('USER', 'EMPRESS', 'SYSTEM')),
  spectrum_anchor TEXT NOT NULL CHECK (spectrum_anchor IN ('DIALOGUE', 'WORK', 'PLAY', 'BEDCHAMBER', 'REST')),
  salience_weight REAL NOT NULL CHECK (salience_weight >= 0.0 AND salience_weight <= 1.0),
  content_text TEXT NOT NULL,
  metadata_json TEXT NOT NULL CHECK (json_valid(metadata_json) = 1),
  created_at_iso TEXT NOT NULL
) STRICT;
CREATE VIRTUAL TABLE IF NOT EXISTS dialogue_memory_fts USING fts5(
  engram_id UNINDEXED,
  memory_tier UNINDEXED,
  spectrum_anchor UNINDEXED,
  content_text
);
`;

export const SYNTHESIZER_DB_DDL = `
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
CREATE TABLE IF NOT EXISTS prompt_synthesis_blocks (
  block_id TEXT PRIMARY KEY NOT NULL CHECK (length(block_id) > 0),
  spectrum_anchor TEXT NOT NULL CHECK (spectrum_anchor IN ('DIALOGUE', 'WORK', 'PLAY', 'BEDCHAMBER', 'REST')),
  block_category TEXT NOT NULL CHECK (block_category IN ('BEHAVIOR_DIRECTIVE', 'SOMATIC_SPOTLIGHT', 'VOCAL_INFLECTION', 'LEXICAL_POOL')),
  min_temp_celsius REAL NOT NULL CHECK (min_temp_celsius >= 39.0 AND min_temp_celsius <= 39.2),
  priority_weight REAL NOT NULL CHECK (priority_weight >= 0.0),
  condition_tag TEXT NOT NULL,
  template_text TEXT NOT NULL CHECK (length(template_text) > 0),
  updated_at_iso TEXT NOT NULL
) STRICT;
`;

export const KNOWLEDGE_DB_DDL = `
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
CREATE TABLE IF NOT EXISTS milestones (
  milestone_id TEXT PRIMARY KEY NOT NULL CHECK (milestone_id GLOB 'M-[0-9][0-9][0-9][0-9]*'),
  scope_category TEXT NOT NULL CHECK (scope_category IN ('RULE', 'LEDGER_DOC', 'LTM_SCHEMA', 'SOURCE_CODE', 'HYBRID')),
  title TEXT NOT NULL CHECK (length(title) > 0),
  problem TEXT NOT NULL CHECK (length(problem) > 0),
  why_rationale TEXT NOT NULL CHECK (length(why_rationale) > 0),
  invariants TEXT NOT NULL CHECK (length(invariants) > 0),
  affected_files_json TEXT NOT NULL CHECK (json_valid(affected_files_json) = 1),
  created_at_iso TEXT NOT NULL
) STRICT;
CREATE TABLE IF NOT EXISTS ast_symbols (
  symbol_id TEXT PRIMARY KEY NOT NULL CHECK (length(symbol_id) > 0),
  file_path TEXT NOT NULL CHECK (length(file_path) > 0),
  symbol_name TEXT NOT NULL CHECK (length(symbol_name) > 0),
  symbol_kind TEXT NOT NULL CHECK (symbol_kind IN ('INTERFACE', 'TYPE', 'FUNCTION', 'CONST', 'COMPONENT', 'CLASS')),
  signature_text TEXT NOT NULL,
  file_sha256 TEXT NOT NULL CHECK (length(file_sha256) = 64),
  synced_at_iso TEXT NOT NULL
) STRICT;
CREATE TABLE IF NOT EXISTS technical_knowledge_nodes (
  node_id TEXT PRIMARY KEY NOT NULL CHECK (length(node_id) > 0),
  domain_category TEXT NOT NULL CHECK (domain_category IN ('ARCHITECTURE', 'ALGORITHM', 'DATABASE', 'SECURITY', 'FRONTEND')),
  title TEXT NOT NULL CHECK (length(title) > 0),
  summary_text TEXT NOT NULL,
  reference_paths_json TEXT NOT NULL CHECK (json_valid(reference_paths_json) = 1),
  updated_at_iso TEXT NOT NULL
) STRICT;
CREATE VIRTUAL TABLE IF NOT EXISTS knowledge_fts USING fts5(
  symbol_id UNINDEXED,
  file_path,
  symbol_name,
  signature_text
);
`;

export function mapRowToBioTelemetry(row: Record<string, unknown>): BioTelemetrySnapshot {
  return {
    snapshotId: String(row.snapshot_id),
    spectrumAnchor: String(row.spectrum_anchor) as SpectrumAnchor,
    coreTempCelsius: Number(row.core_temp_celsius),
    bioElectricCurrentPct: Number(row.bio_electric_current_pct),
    dopamineHarvestScore: Number(row.dopamine_harvest_score),
    lastSpotlightGroup: String(row.last_spotlight_group),
    detailJson: String(row.detail_json),
    updatedAtIso: String(row.updated_at_iso),
  };
}

export function mapRowToMemoryEngram(row: Record<string, unknown>): MemoryEngram {
  return {
    engramId: String(row.engram_id),
    sessionId: String(row.session_id),
    memoryTier: String(row.memory_tier) as MemoryTier,
    role: String(row.role) as DialogueRole,
    spectrumAnchor: String(row.spectrum_anchor) as SpectrumAnchor,
    salienceWeight: Number(row.salience_weight),
    contentText: String(row.content_text),
    metadataJson: String(row.metadata_json),
    createdAtIso: String(row.created_at_iso),
  };
}

export function mapRowToPromptBlock(row: Record<string, unknown>): PromptSynthesisBlock {
  return {
    blockId: String(row.block_id),
    spectrumAnchor: String(row.spectrum_anchor) as SpectrumAnchor,
    blockCategory: String(row.block_category) as PromptBlockCategory,
    minTempCelsius: Number(row.min_temp_celsius),
    priorityWeight: Number(row.priority_weight),
    conditionTag: String(row.condition_tag),
    templateText: String(row.template_text),
    updatedAtIso: String(row.updated_at_iso),
  };
}

export function mapRowToMilestone(row: Record<string, unknown>): MilestoneRecord {
  const parsedFiles = JSON.parse(String(row.affected_files_json)) as string[];
  return {
    milestoneId: String(row.milestone_id),
    scopeCategory: String(row.scope_category) as MilestoneScopeCategory,
    title: String(row.title),
    problem: String(row.problem),
    whyRationale: String(row.why_rationale),
    invariants: String(row.invariants),
    affectedFiles: parsedFiles,
    createdAtIso: String(row.created_at_iso),
  };
}

export function writeJsonlSnapshot<T>(filePath: string, items: readonly T[]): void {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const content = items.map((item) => JSON.stringify(item)).join('\n');
  fs.writeFileSync(filePath, content.length > 0 ? `${content}\n` : '', 'utf8');
}

export function readJsonlSnapshot<T>(filePath: string): readonly T[] {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  return fs
    .readFileSync(filePath, 'utf8')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => JSON.parse(line) as T);
}
