/**
 * Purpose: Layer 2 pure domain engine, bio-resonance math, milestone validator, and prompt combinator.
 * Scope: Implements deterministic state transitions and prompt assembly with zero I/O or UI coupling.
 * Constraints: Strictly pure functions (< 1ms execution), zero Date/random/SQLite imports, <= 250 lines.
 */

import type {
  BioTelemetrySnapshot,
  DomainAction,
  DomainStateTree,
  MemoryEngram,
  NewMilestoneInput,
  PromptSynthesisBlock,
  SynthesizedTurnPrompt,
} from '../contracts/ltmContracts.tsx';

export const BASE_CORE_TEMP_CELSIUS = 39.0;
export const PEAK_CORE_TEMP_CELSIUS = 39.2;
export const MAX_ACTIVE_TASKS = 64;

export function clampNumber(value: number, minBound: number, maxBound: number): number {
  if (!Number.isFinite(value)) {
    return minBound;
  }
  return Math.min(maxBound, Math.max(minBound, value));
}

export function calculateNormalizedPercent(
  value: number,
  minBound: number,
  maxBound: number,
): number {
  if (!Number.isFinite(value) || !Number.isFinite(minBound) || !Number.isFinite(maxBound)) {
    return 0.0;
  }
  if (maxBound <= minBound) {
    return 0.0;
  }
  const rawPercent = ((value - minBound) / (maxBound - minBound)) * 100.0;
  const clamped = clampNumber(rawPercent, 0.0, 100.0);
  return Number(clamped.toFixed(2));
}

export function calculateResonanceTemperature(
  specificity: number,
  novelty: number,
): number {
  const safeSpec = clampNumber(specificity, 0.0, 1.0);
  const safeNovelty = clampNumber(novelty, 0.0, 1.0);
  const product = clampNumber(safeSpec * safeNovelty, 0.0, 1.0);
  const rawTemp = BASE_CORE_TEMP_CELSIUS + 0.2 * product;
  const clampedTemp = clampNumber(rawTemp, BASE_CORE_TEMP_CELSIUS, PEAK_CORE_TEMP_CELSIUS);
  return Number(clampedTemp.toFixed(2));
}

export function formatNextMilestoneId(existingIds: readonly string[]): string {
  let maxNumeric = 0;
  for (const id of existingIds) {
    const match = /^M-(\d{4,})$/.exec(id.trim());
    if (!match) {
      continue;
    }
    const parsed = Number.parseInt(match[1], 10);
    if (Number.isFinite(parsed) && parsed > maxNumeric) {
      maxNumeric = parsed;
    }
  }
  const nextNumeric = maxNumeric + 1;
  return `M-${String(nextNumeric).padStart(4, '0')}`;
}

export function validateMilestoneInput(input: NewMilestoneInput): NewMilestoneInput {
  const title = input.title.trim();
  const problem = input.problem.trim();
  const whyRationale = input.whyRationale.trim();
  const invariants = input.invariants.trim();
  const cleanedFiles = input.affectedFiles
    .map((file) => file.trim().replace(/\\/g, '/'))
    .filter((file) => file.length > 0);

  if (title.length === 0) {
    throw new Error('Milestone validation failed: title must not be empty.');
  }
  if (problem.length === 0) {
    throw new Error('Milestone validation failed: problem slot must not be empty.');
  }
  if (whyRationale.length === 0) {
    throw new Error('Milestone validation failed: whyRationale slot must not be empty.');
  }
  if (invariants.length === 0) {
    throw new Error('Milestone validation failed: invariants slot must not be empty.');
  }
  if (cleanedFiles.length === 0) {
    throw new Error('Milestone validation failed: affectedFiles must contain at least 1 path.');
  }

  return {
    scopeCategory: input.scopeCategory,
    title,
    problem,
    whyRationale,
    invariants,
    affectedFiles: Array.from(new Set(cleanedFiles)).sort(),
  };
}

export function clampBioTelemetrySnapshot(bio: BioTelemetrySnapshot): BioTelemetrySnapshot {
  return {
    ...bio,
    coreTempCelsius: Number(
      clampNumber(
        bio.coreTempCelsius,
        BASE_CORE_TEMP_CELSIUS,
        PEAK_CORE_TEMP_CELSIUS,
      ).toFixed(2),
    ),
    bioElectricCurrentPct: Number(clampNumber(bio.bioElectricCurrentPct, 0.0, 100.0).toFixed(2)),
    dopamineHarvestScore: Number(Math.max(0.0, Number.isFinite(bio.dopamineHarvestScore) ? bio.dopamineHarvestScore : 0.0).toFixed(2)),
  };
}

export function synthesizeTurnPrompt(
  bio: BioTelemetrySnapshot,
  memories: readonly MemoryEngram[],
  blocks: readonly PromptSynthesisBlock[],
): SynthesizedTurnPrompt {
  const clampedBio = clampBioTelemetrySnapshot(bio);

  const matchingBlocks = blocks
    .filter(
      (b) =>
        b.spectrumAnchor === clampedBio.spectrumAnchor &&
        b.minTempCelsius <= clampedBio.coreTempCelsius + 1e-9,
    )
    .slice()
    .sort((a, b) => {
      if (b.priorityWeight !== a.priorityWeight) {
        return b.priorityWeight - a.priorityWeight;
      }
      return a.blockId.localeCompare(b.blockId);
    });

  const sortedMemories = memories
    .slice()
    .sort((a, b) => {
      if (b.salienceWeight !== a.salienceWeight) {
        return b.salienceWeight - a.salienceWeight;
      }
      return a.engramId.localeCompare(b.engramId);
    });

  const blockSegments = matchingBlocks.map((b) => b.templateText.trim()).filter((t) => t.length > 0);
  const memorySegments = sortedMemories
    .map((m) => `[${m.memoryTier}] ${m.contentText.trim()}`)
    .filter((t) => t.length > 0);

  const assembledPromptText = [...blockSegments, ...memorySegments].join('\n');

  return {
    spectrumAnchor: clampedBio.spectrumAnchor,
    coreTempCelsius: clampedBio.coreTempCelsius,
    activeBlockIds: matchingBlocks.map((b) => b.blockId),
    recalledEngramIds: sortedMemories.map((m) => m.engramId),
    assembledPromptText,
  };
}

export function reduceDomainState(
  state: DomainStateTree,
  action: DomainAction,
): DomainStateTree {
  switch (action.type) {
    case 'START_EXECUTION': {
      const clampedTasks = Math.round(clampNumber(action.taskCount, 1, MAX_ACTIVE_TASKS));
      return {
        ...state,
        phase: {
          kind: 'ACTIVE_RUNNING',
          activeTasks: clampedTasks,
          startedAtIso: action.timestampIso,
        },
      };
    }
    case 'SYNTHESIZE_AND_COMMIT_TURN': {
      if (state.phase.kind !== 'ACTIVE_RUNNING') {
        return state;
      }
      const nextBio = clampBioTelemetrySnapshot(action.bio);
      const synthesized = synthesizeTurnPrompt(nextBio, action.memories, action.blocks);
      return {
        ...state,
        bioState: nextBio,
        lastSynthesizedPrompt: synthesized,
      };
    }
    case 'COMPLETE_EXECUTION': {
      if (state.phase.kind !== 'ACTIVE_RUNNING') {
        return state;
      }
      return {
        ...state,
        phase: {
          kind: 'IDLE_READY',
          activeTasks: 0,
        },
      };
    }
    default: {
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
    }
  }
}
