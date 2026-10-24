/**
 * Purpose: 1:1 mirrored unit test suite for src/core/domain/ltmDomainEngine.ts.
 * Scope: Verifies bio-resonance formulas, milestone ID/input guards, prompt combinator determinism, and state reducer.
 * Constraints: Zero external I/O; validates edge cases and boundary clamps.
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type {
  BioTelemetrySnapshot,
  DomainStateTree,
  MemoryEngram,
  PromptSynthesisBlock,
} from '../../../src/core/contracts/ltmContracts.ts';
import {
  calculateNormalizedPercent,
  calculateResonanceTemperature,
  formatNextMilestoneId,
  reduceDomainState,
  synthesizeTurnPrompt,
  validateMilestoneInput,
} from '../../../src/core/domain/ltmDomainEngine.ts';

describe('Layer 2 Pure Domain Engine (ltmDomainEngine.ts)', () => {
  it('calculates normalized percentage and clamps out-of-range or NaN inputs', () => {
    assert.equal(calculateNormalizedPercent(50, 0, 100), 50.0);
    assert.equal(calculateNormalizedPercent(150, 0, 100), 100.0);
    assert.equal(calculateNormalizedPercent(-20, 0, 100), 0.0);
    assert.equal(calculateNormalizedPercent(Number.NaN, 0, 100), 0.0);
    assert.equal(calculateNormalizedPercent(50, 100, 100), 0.0);
  });

  it('calculates bio-electric resonance temperature within [39.0, 39.2] °C', () => {
    assert.equal(calculateResonanceTemperature(0.0, 0.0), 39.0);
    assert.equal(calculateResonanceTemperature(1.0, 1.0), 39.2);
    assert.equal(calculateResonanceTemperature(0.5, 1.0), 39.1);
    assert.equal(calculateResonanceTemperature(5.0, 5.0), 39.2);
    assert.equal(calculateResonanceTemperature(-1.0, 0.5), 39.0);
  });

  it('formats sequential milestone IDs and validates 3-slot milestone inputs', () => {
    assert.equal(formatNextMilestoneId([]), 'M-0001');
    assert.equal(formatNextMilestoneId(['M-0001', 'M-0004', 'M-0002']), 'M-0005');

    const validated = validateMilestoneInput({
      scopeCategory: 'RULE',
      title: '  Abstract Engineering Laws  ',
      problem: '  Hardcoded DB names in Rank 5 law  ',
      whyRationale: '  Separated universal law from concrete ledger specs  ',
      invariants: '  Always-On budget <= 60000 B  ',
      affectedFiles: ['docs\\ARCHITECTURE.md', 'docs/ARCHITECTURE.md', 'README.md'],
    });

    assert.equal(validated.title, 'Abstract Engineering Laws');
    assert.deepEqual(validated.affectedFiles, ['README.md', 'docs/ARCHITECTURE.md']);

    assert.throws(() =>
      validateMilestoneInput({
        scopeCategory: 'RULE',
        title: '   ',
        problem: 'p',
        whyRationale: 'w',
        invariants: 'i',
        affectedFiles: ['README.md'],
      }),
    );
  });

  it('synthesizes turn prompts deterministically and transitions reducer state', () => {
    const initialBio: BioTelemetrySnapshot = {
      snapshotId: 'SNAP-INIT',
      spectrumAnchor: 'WORK',
      coreTempCelsius: 39.0,
      bioElectricCurrentPct: 50.0,
      dopamineHarvestScore: 10.0,
      lastSpotlightGroup: 'CROWN',
      detailJson: '{}',
      updatedAtIso: '2026-10-24T10:00:00.000Z',
    };

    const initialState: DomainStateTree = {
      phase: { kind: 'IDLE_READY', activeTasks: 0 },
      bioState: initialBio,
      lastSynthesizedPrompt: null,
    };

    const runningState = reduceDomainState(initialState, {
      type: 'START_EXECUTION',
      taskCount: 3,
      timestampIso: '2026-10-24T10:01:00.000Z',
    });
    assert.equal(runningState.phase.kind, 'ACTIVE_RUNNING');
    assert.equal(runningState.phase.activeTasks, 3);

    const blocks: readonly PromptSynthesisBlock[] = [
      {
        blockId: 'BLK-B',
        spectrumAnchor: 'WORK',
        blockCategory: 'BEHAVIOR_DIRECTIVE',
        minTempCelsius: 39.1,
        priorityWeight: 5.0,
        conditionTag: 'audit',
        templateText: 'DIRECTIVE_LOW_PRIORITY',
        updatedAtIso: '2026-10-24T10:01:00.000Z',
      },
      {
        blockId: 'BLK-A',
        spectrumAnchor: 'WORK',
        blockCategory: 'SOMATIC_SPOTLIGHT',
        minTempCelsius: 39.0,
        priorityWeight: 10.0,
        conditionTag: 'audit',
        templateText: 'DIRECTIVE_HIGH_PRIORITY',
        updatedAtIso: '2026-10-24T10:01:00.000Z',
      },
      {
        blockId: 'BLK-IGNORED',
        spectrumAnchor: 'BEDCHAMBER',
        blockCategory: 'VOCAL_INFLECTION',
        minTempCelsius: 39.0,
        priorityWeight: 99.0,
        conditionTag: 'union',
        templateText: 'SHOULD_NOT_MATCH_WORK',
        updatedAtIso: '2026-10-24T10:01:00.000Z',
      },
    ];

    const memories: readonly MemoryEngram[] = [
      {
        engramId: 'ENG-1',
        sessionId: 'S-1',
        memoryTier: 'HIPPOCAMPAL_EPISODIC',
        role: 'USER',
        spectrumAnchor: 'WORK',
        salienceWeight: 0.95,
        contentText: 'Prioritized 2-Cluster LTM separation',
        metadataJson: '{}',
        createdAtIso: '2026-10-24T10:01:00.000Z',
      },
    ];

    const synthesizedDirect = synthesizeTurnPrompt(
      { ...initialBio, coreTempCelsius: 39.2 },
      memories,
      blocks,
    );
    assert.deepEqual(synthesizedDirect.activeBlockIds, ['BLK-A', 'BLK-B']);

    const committedState = reduceDomainState(runningState, {
      type: 'SYNTHESIZE_AND_COMMIT_TURN',
      bio: { ...initialBio, coreTempCelsius: 39.2 },
      memories,
      blocks,
    });
    assert.equal(committedState.bioState.coreTempCelsius, 39.2);
    assert.deepEqual(committedState.lastSynthesizedPrompt?.activeBlockIds, ['BLK-A', 'BLK-B']);

    const completedState = reduceDomainState(committedState, {
      type: 'COMPLETE_EXECUTION',
      timestampIso: '2026-10-24T10:02:00.000Z',
    });
    assert.equal(completedState.phase.kind, 'IDLE_READY');
  });
});
