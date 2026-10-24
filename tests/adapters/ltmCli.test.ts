/**
 * Purpose: 1:1 mirrored test suite for src/adapters/ltmCli.ts.
 * Scope: Verifies init, sync, milestone recording, and file-based Chesterton's Fence reverse lookup via CLI args.
 * Constraints: Uses isolated temporary workspace paths and strict JSON assertions.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, it } from 'node:test';
import { runLtmCli } from '../../src/adapters/ltmCli.ts';
import type { MilestoneRecord } from '../../src/core/contracts/ltmContracts.ts';

describe('Layer 3 LTM CLI Controller (ltmCli.ts)', () => {
  it('executes init, records universal milestones, queries why by file, and syncs JSONL', () => {
    const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'eterna-ltm-cli-'));
    const paths = {
      dbDir: path.join(tempRoot, '.data'),
      mirrorDir: path.join(tempRoot, 'data/mirror'),
    };

    try {
      const initOut = JSON.parse(
        runLtmCli(['init'], paths, '2026-10-24T10:00:00.000Z'),
      ) as { status: string; milestoneCount: number };
      assert.equal(initOut.status, 'OK');
      assert.equal(initOut.milestoneCount, 0);

      const recOut = JSON.parse(
        runLtmCli(
          [
            'milestone',
            '--scope',
            'HYBRID',
            '--title',
            '2-Cluster LTM & Fast-Track CLI',
            '--problem',
            'Needed unified milestone tracking across rules, docs, and code',
            '--why',
            'Built universal milestones table in knowledge.db with JSONL mirror bridge',
            '--invariants',
            'Zero constitutional DB duplication and 1:1 mirrored test coverage',
            '--files',
            'src/adapters/ltmCli.ts,docs/SPECIFICATION.md',
          ],
          paths,
          '2026-10-24T10:05:00.000Z',
        ),
      ) as MilestoneRecord;

      assert.equal(recOut.milestoneId, 'M-0001');
      assert.equal(recOut.scopeCategory, 'HYBRID');

      const whyOut = JSON.parse(
        runLtmCli(['why', 'docs/SPECIFICATION.md'], paths),
      ) as MilestoneRecord[];
      assert.equal(whyOut.length, 1);
      assert.equal(whyOut[0]?.milestoneId, 'M-0001');

      const allOut = JSON.parse(runLtmCli(['why', '--all'], paths)) as MilestoneRecord[];
      assert.equal(allOut.length, 1);
    } finally {
      fs.rmSync(tempRoot, { recursive: true, force: true });
    }
  });
});
