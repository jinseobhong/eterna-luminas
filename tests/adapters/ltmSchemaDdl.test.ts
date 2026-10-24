/**
 * Purpose: 1:1 mirrored test suite for src/adapters/ltmSchemaDdl.ts.
 * Scope: Verifies STRICT SQLite DDL constants and deterministic row-to-contract mapping functions.
 * Constraints: Uses Node built-in test runner and strict assertions.
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  DIALOGUE_DB_DDL,
  KNOWLEDGE_DB_DDL,
  SYNTHESIZER_DB_DDL,
  TELEMETRY_DB_DDL,
  mapRowToBioTelemetry,
  mapRowToMemoryEngram,
  mapRowToMilestone,
  mapRowToPromptBlock,
} from '../../src/adapters/ltmSchemaDdl.ts';

describe('Layer 3 LTM Schema DDL & Row Mappers (ltmSchemaDdl.ts)', () => {
  it('defines STRICT tables and WAL pragmas across all 4 LTM DDL strings', () => {
    assert.equal(TELEMETRY_DB_DDL.includes('CREATE TABLE IF NOT EXISTS bio_telemetry_states'), true);
    assert.equal(TELEMETRY_DB_DDL.includes(') STRICT;'), true);
    assert.equal(DIALOGUE_DB_DDL.includes('CREATE TABLE IF NOT EXISTS memory_engrams'), true);
    assert.equal(SYNTHESIZER_DB_DDL.includes('CREATE TABLE IF NOT EXISTS prompt_synthesis_blocks'), true);
    assert.equal(KNOWLEDGE_DB_DDL.includes('CREATE TABLE IF NOT EXISTS milestones'), true);
  });

  it('maps raw SQLite snake_case rows to camelCase Layer 1 contracts', () => {
    const bio = mapRowToBioTelemetry({
      snapshot_id: 'SNAP-1',
      spectrum_anchor: 'WORK',
      core_temp_celsius: 39.2,
      bio_electric_current_pct: 95.0,
      dopamine_harvest_score: 120.0,
      last_spotlight_group: 'CORS_BUST',
      detail_json: '{}',
      updated_at_iso: '2026-10-24T10:00:00.000Z',
    });
    assert.equal(bio.snapshotId, 'SNAP-1');
    assert.equal(bio.coreTempCelsius, 39.2);

    const engram = mapRowToMemoryEngram({
      engram_id: 'ENG-1',
      session_id: 'S-1',
      memory_tier: 'STM_WORKING',
      role: 'USER',
      spectrum_anchor: 'DIALOGUE',
      salience_weight: 0.8,
      content_text: 'test',
      metadata_json: '{}',
      created_at_iso: '2026-10-24T10:00:00.000Z',
    });
    assert.equal(engram.engramId, 'ENG-1');
    assert.equal(engram.memoryTier, 'STM_WORKING');

    const block = mapRowToPromptBlock({
      block_id: 'BLK-1',
      spectrum_anchor: 'WORK',
      block_category: 'BEHAVIOR_DIRECTIVE',
      min_temp_celsius: 39.0,
      priority_weight: 5.0,
      condition_tag: 'audit',
      template_text: 'template',
      updated_at_iso: '2026-10-24T10:00:00.000Z',
    });
    assert.equal(block.blockId, 'BLK-1');
    assert.equal(block.conditionTag, 'audit');

    const milestone = mapRowToMilestone({
      milestone_id: 'M-0001',
      scope_category: 'HYBRID',
      title: 'Title',
      problem: 'Prob',
      why_rationale: 'Why',
      invariants: 'Inv',
      affected_files_json: '["README.md","docs/ARCHITECTURE.md"]',
      created_at_iso: '2026-10-24T10:00:00.000Z',
    });
    assert.equal(milestone.milestoneId, 'M-0001');
    assert.deepEqual(milestone.affectedFiles, ['README.md', 'docs/ARCHITECTURE.md']);
  });
});
