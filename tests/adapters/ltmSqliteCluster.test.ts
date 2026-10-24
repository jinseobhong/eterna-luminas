/**
 * Purpose: 1:1 mirrored integration test suite for src/adapters/ltmSqliteCluster.ts.
 * Scope: Verifies 2-Cluster isolation, ATTACH cross-DB joins, file-indexed milestones, and JSONL mirror parity.
 * Constraints: Uses isolated temporary directories and closes all SQLite handles cleanly.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, it } from 'node:test';
import { LtmDualClusterManager } from '../../src/adapters/ltmSqliteCluster.ts';

describe('Layer 3 Dual-Cluster SQLite LTM & JSONL Bridge (ltmSqliteCluster.ts)', () => {
  it('supports L3->L2 sequential queries and ATTACH DATABASE cross-DB joins across Cluster C1', () => {
    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'eterna-ltm-c1-'));
    const dbDir = path.join(tempRoot, '.data');
    const mirrorDir = path.join(tempRoot, 'mirror');

    const cluster = new LtmDualClusterManager({ dbDir, mirrorDir });
    try {
      cluster.upsertBioTelemetry({
        snapshotId: 'CURRENT',
        spectrumAnchor: 'WORK',
        coreTempCelsius: 39.2,
        bioElectricCurrentPct: 92.0,
        dopamineHarvestScore: 150.0,
        lastSpotlightGroup: 'CROWN',
        detailJson: '{"mode":"audit"}',
        updatedAtIso: '2026-10-24T10:00:00.000Z',
      });

      cluster.upsertMemoryEngram({
        engramId: 'ENG-0001',
        sessionId: 'SESS-MAIN',
        memoryTier: 'HIPPOCAMPAL_EPISODIC',
        role: 'USER',
        spectrumAnchor: 'WORK',
        salienceWeight: 0.95,
        contentText: 'Need sqlite cross-database synthesis check',
        metadataJson: '{}',
        createdAtIso: '2026-10-24T10:00:00.000Z',
      });

      cluster.upsertPromptSynthesisBlock({
        blockId: 'BLK-MATCH',
        spectrumAnchor: 'WORK',
        blockCategory: 'BEHAVIOR_DIRECTIVE',
        minTempCelsius: 39.1,
        priorityWeight: 10.0,
        conditionTag: 'sqlite',
        templateText: '[MATCHED_SQLITE_BLOCK]',
        updatedAtIso: '2026-10-24T10:00:00.000Z',
      });

      cluster.upsertPromptSynthesisBlock({
        blockId: 'BLK-UNMATCHED-TAG',
        spectrumAnchor: 'WORK',
        blockCategory: 'LEXICAL_POOL',
        minTempCelsius: 39.0,
        priorityWeight: 20.0,
        conditionTag: 'nonexistent_keyword',
        templateText: '[UNMATCHED_TAG_BLOCK]',
        updatedAtIso: '2026-10-24T10:00:00.000Z',
      });

      const directBlocks = cluster.queryPromptBlocks('WORK', 39.2);
      assert.equal(directBlocks.length, 2);

      const attachedBlocks = cluster.querySynthesizerWithAttachedContext('CURRENT', 'SESS-MAIN');
      assert.equal(attachedBlocks.length, 1);
      assert.equal(attachedBlocks[0]?.blockId, 'BLK-MATCH');
    } finally {
      cluster.close();
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });

  it('records universal milestones, queries by file path, and mirrors via JSONL snapshots', () => {
    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'eterna-ltm-c2-'));
    const dbDirA = path.join(tempRoot, '.data-a');
    const dbDirB = path.join(tempRoot, '.data-b');
    const mirrorDir = path.join(tempRoot, 'mirror');

    const clusterA = new LtmDualClusterManager({ dbDir: dbDirA, mirrorDir });
    try {
      const m1 = clusterA.recordMilestone(
        {
          scopeCategory: 'RULE',
          title: 'Abstract Engineering Laws',
          problem: 'Concrete DB names were hardcoded in Rank 5 law',
          whyRationale: 'Separated universal law from concrete ledger specs',
          invariants: 'Always-On rules <= 60000 B and zero inter-file pointers',
          affectedFiles: ['.agents/rules/IMPERIAL_ENGINEERING_LAWS.md', 'docs/ARCHITECTURE.md'],
        },
        '2026-10-24T10:00:00.000Z',
      );
      assert.equal(m1.milestoneId, 'M-0001');

      const byFile = clusterA.getMilestonesByFile('.agents/rules/IMPERIAL_ENGINEERING_LAWS.md');
      assert.equal(byFile.length, 1);
      assert.equal(byFile[0]?.milestoneId, 'M-0001');

      clusterA.exportToJsonlMirror();
    } finally {
      clusterA.close();
    }

    const clusterB = new LtmDualClusterManager({ dbDir: dbDirB, mirrorDir });
    try {
      clusterB.hydrateFromJsonlMirror();
      const restored = clusterB.getMilestonesByFile('docs/ARCHITECTURE.md');
      assert.equal(restored.length, 1);
      assert.equal(restored[0]?.title, 'Abstract Engineering Laws');
    } finally {
      clusterB.close();
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });
});
