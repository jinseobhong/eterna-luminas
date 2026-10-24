/**
 * Purpose: Layer 3 CLI controller for 2-Cluster LTM initialization, Chesterton's Fence lookup, and milestone recording.
 * Scope: Powers npm run ltm:init, npm run ltm:why, npm run ltm:milestone, and npm run ltm:sync.
 * Constraints: Deterministic JSON output, automatic JSONL mirror synchronization, <= 250 lines.
 */

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { MilestoneScopeCategory } from '../core/contracts/ltmContracts.ts';
import { LtmDualClusterManager, type LtmClusterPaths } from './ltmSqliteCluster.ts';

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
  paths: LtmClusterPaths,
  nowIso: string = new Date().toISOString(),
): string {
  const command = (argv[0] ?? 'sync').trim();
  const cluster = new LtmDualClusterManager(paths);

  try {
    cluster.hydrateFromJsonlMirror();

    switch (command) {
      case 'init':
      case 'sync': {
        cluster.exportToJsonlMirror();
        const milestones = cluster.listMilestones();
        return JSON.stringify(
          {
            status: 'OK',
            command,
            milestoneCount: milestones.length,
            mirrorDir: paths.mirrorDir,
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
        cluster.exportToJsonlMirror();

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
          `Unknown LTM CLI command '${command}'. Supported: init | why | milestone | sync.`,
        );
    }
  } finally {
    cluster.close();
  }
}

const currentFilePath = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(currentFilePath)) {
  const workspaceRoot = path.resolve(import.meta.dirname, '../..');
  const defaultPaths: LtmClusterPaths = {
    dbDir: path.join(workspaceRoot, '.data'),
    mirrorDir: path.join(workspaceRoot, 'data/mirror'),
  };
  const output = runLtmCli(process.argv.slice(2), defaultPaths);
  process.stdout.write(`${output}\n`);
}
