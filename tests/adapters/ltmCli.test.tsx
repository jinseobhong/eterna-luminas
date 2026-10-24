/**
 * Purpose: 1:1 mirrored test suite for src/adapters/ltmCli.ts.
 * Scope: Verifies pure local native init, milestone recording, and file-based Chesterton's Fence lookup.
 * Constraints: Uses isolated temporary workspace paths and strict JSON assertions.
 */

import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { describe, it } from 'node:test';
import { runLtmCli } from '../../src/adapters/ltmCli.tsx';
import type { MilestoneRecord } from '../../src/core/contracts/ltmContracts.tsx';

describe('Layer 3 LTM CLI Controller (ltmCli.ts)', () => {
  it('executes init, records universal milestones, and queries why by file on pure local SQLite', () => {
    const tempDbDir = fs.mkdtempSync(path.join(os.tmpdir(), 'eterna-ltm-cli-'));

    try {
      const initOut = JSON.parse(
        runLtmCli(['init'], tempDbDir, '2026-10-24T10:00:00.000Z'),
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
            'Pure Local Native 2-Cluster LTM',
            '--problem',
            'Removed AI Studio Build JSONL mirror bloat',
            '--why',
            'Operates directly on local data/*.db SQLite files',
            '--invariants',
            'Zero constitutional DB duplication and 1:1 mirrored test coverage',
            '--files',
            'src/adapters/ltmCli.ts,docs/SPECIFICATION.md',
          ],
          tempDbDir,
          '2026-10-24T10:05:00.000Z',
        ),
      ) as MilestoneRecord;

      assert.equal(recOut.milestoneId, 'M-0001');
      assert.equal(recOut.scopeCategory, 'HYBRID');

      const whyOut = JSON.parse(
        runLtmCli(['why', 'docs/SPECIFICATION.md'], tempDbDir),
      ) as MilestoneRecord[];
      assert.equal(whyOut.length, 1);
      assert.equal(whyOut[0]?.milestoneId, 'M-0001');

      const allOut = JSON.parse(runLtmCli(['why', '--all'], tempDbDir)) as MilestoneRecord[];
      assert.equal(allOut.length, 1);
    } finally {
      fs.rmSync(tempDbDir, { recursive: true, force: true });
    }
  });
});
