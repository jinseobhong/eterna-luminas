/**
 * Purpose: Layer 3 CLI controller for pure local native 2-Cluster LTM initialization and milestone management.
 * Scope: Powers npm run ltm:init, npm run ltm:why, and npm run ltm:milestone against data/*.db.
 * Constraints: Deterministic JSON output, fail-fast argument validation, <= 250 lines.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { MilestoneScopeCategory } from '../core/contracts/ltmContracts.ts';
import { LtmDualClusterManager } from './ltmSqliteCluster.ts';

const VALID_SCOPES: readonly MilestoneScopeCategory[] = [
  'RULE',
  'LEDGER_DOC',
  'LTM_SCHEMA',
  'SOURCE_CODE',
  'HYBRID',
];

function parseNamedFlag(args: readonly string[], flag: string): string {
  const idx = args.indexOf(flag);
  if (idx === -1 || idx + 1 >= args.length) {
    return '';
  }
  return args[idx + 1] ?? '';
}

function validateScopeCategory(raw: string): MilestoneScopeCategory {
  const upper = (raw.trim().toUpperCase() || 'HYBRID') as MilestoneScopeCategory;
  if (!VALID_SCOPES.includes(upper)) {
    throw new Error(
      `Invalid --scope '${raw}'. Expected one of: ${VALID_SCOPES.join(', ')}.`,
    );
  }
  return upper;
}

export function runLtmCli(
  argv: readonly string[],
  dbDir: string,
  nowIso: string = new Date().toISOString(),
): string {
  const command = (argv[0] ?? 'init').trim();
  const cluster = new LtmDualClusterManager(dbDir);

  try {
    switch (command) {
      case 'init': {
        const milestones = cluster.listMilestones();
        return JSON.stringify(
          {
            status: 'OK',
            command,
            milestoneCount: milestones.length,
            dbDir,
          },
          null,
          2,
        );
      }
      case 'why': {
        const targetArg = (argv[1] ?? '').trim();
        if (!targetArg || targetArg === '--all') {
          return JSON.stringify(cluster.listMilestones(), null, 2);
        }
        const matched = cluster.getMilestonesByFile(targetArg);
        return JSON.stringify(matched, null, 2);
      }
      case 'milestone': {
        const scopeCategory = validateScopeCategory(parseNamedFlag(argv, '--scope'));
        const title = parseNamedFlag(argv, '--title');
        const problem = parseNamedFlag(argv, '--problem');
        const whyRationale = parseNamedFlag(argv, '--why');
        const invariants = parseNamedFlag(argv, '--invariants');
        const filesRaw = parseNamedFlag(argv, '--files');
        const affectedFiles = filesRaw
          .split(',')
          .map((f) => f.trim())
          .filter((f) => f.length > 0);

        const recorded = cluster.recordMilestone(
          {
            scopeCategory,
            title,
            problem,
            whyRationale,
            invariants,
            affectedFiles,
          },
          nowIso,
        );

        const verified = cluster
          .listMilestones()
          .find((m) => m.milestoneId === recorded.milestoneId);
        if (!verified) {
          throw new Error(`Milestone verification failed for ${recorded.milestoneId}.`);
        }
        return JSON.stringify(verified, null, 2);
      }
      default:
        throw new Error(
          `Unknown LTM CLI command '${command}'. Supported: init | why | milestone.`,
        );
    }
  } finally {
    cluster.close();
  }
}

const currentFilePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(currentFilePath)) {
  const workspaceRoot = path.resolve(import.meta.dirname, '../..');
  const defaultDbDir = path.join(workspaceRoot, 'data');
  const output = runLtmCli(process.argv.slice(2), defaultDbDir);
  process.stdout.write(`${output}\n`);
}
