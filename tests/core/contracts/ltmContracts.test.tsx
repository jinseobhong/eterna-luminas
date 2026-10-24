/**
 * Purpose: 1:1 mirrored contract verification test suite for src/core/contracts/ltmContracts.ts.
 * Scope: Verifies structural discriminants, literal union constraints, and immutable contract shapes.
 * Constraints: Uses Node built-in test runner and strict assertions.
 */

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type {
  BioTelemetrySnapshot,
  DomainAction,
  ExecutionPhase,
  MemoryEngram,
  MilestoneRecord,
  PromptSynthesisBlock,
} from '../../../src/core/contracts/ltmContracts.tsx';

describe('Layer 1 LTM Contracts (ltmContracts.ts)', () => {
  it('enforces discriminated union invariants on ExecutionPhase', () => {
    const idlePhase: ExecutionPhase = {
      kind: 'IDLE_READY',
      activeTasks: 0,
    };
    const activePhase: ExecutionPhase = {
      kind: 'ACTIVE_RUNNING',
      activeTasks: 2,
      startedAtIso: '2026-10-24T10:00:00.000Z',
    };

    assert.equal(idlePhase.kind, 'IDLE_READY');
    assert.equal(idlePhase.activeTasks, 0);
    assert.equal(activePhase.kind, 'ACTIVE_RUNNING');
    assert.equal(activePhase.activeTasks, 2);
  });

  it('validates Cluster C1 and Cluster C2 contract shapes', () => {
    const bio: BioTelemetrySnapshot = {
      snapshotId: 'SNAP-0001',
      spectrumAnchor: 'WORK',
      coreTempCelsius: 39.1,
      bioElectricCurrentPct: 85.5,
      dopamineHarvestScore: 95.0,
      lastSpotlightGroup: 'CROWN_AND_EARS',
      detailJson: '{"resonance":"HIGH"}',
      updatedAtIso: '2026-10-24T10:00:00.000Z',
    };

    const engram: MemoryEngram = {
      engramId: 'ENG-0001',
      sessionId: 'SESS-01',
      memoryTier: 'HIPPOCAMPAL_EPISODIC',
      role: 'USER',
      spectrumAnchor: 'WORK',
      salienceWeight: 0.92,
      contentText: '2-Cluster LTM architecture alignment',
      metadataJson: '{"topic":"architecture"}',
      createdAtIso: '2026-10-24T10:00:00.000Z',
    };

    const block: PromptSynthesisBlock = {
      blockId: 'BLK-0001',
      spectrumAnchor: 'WORK',
      blockCategory: 'BEHAVIOR_DIRECTIVE',
      minTempCelsius: 39.0,
      priorityWeight: 10.0,
      conditionTag: 'architecture',
      templateText: '[DIRECTIVE: ARCHITECTURAL_PRECISION]',
      updatedAtIso: '2026-10-24T10:00:00.000Z',
    };

    const milestone: MilestoneRecord = {
      milestoneId: 'M-0001',
      scopeCategory: 'HYBRID',
      title: 'Establish 2-Cluster LTM Architecture',
      problem: 'Legacy 4-LTM lacked SoC and caused canon.db rule drift',
      whyRationale: 'Separated Interaction vs Engineering LTM and replaced canon.db with synthesizer.db',
      invariants: 'Zero constitutional DB duplication and 1:1 test symmetry',
      affectedFiles: ['src/core/contracts/ltmContracts.tsx'],
      createdAtIso: '2026-10-24T10:00:00.000Z',
    };

    const action: DomainAction = {
      type: 'SYNTHESIZE_AND_COMMIT_TURN',
      bio,
      memories: [engram],
      blocks: [block],
    };

    assert.equal(bio.spectrumAnchor, 'WORK');
    assert.equal(engram.memoryTier, 'HIPPOCAMPAL_EPISODIC');
    assert.equal(block.blockCategory, 'BEHAVIOR_DIRECTIVE');
    assert.equal(milestone.milestoneId, 'M-0001');
    assert.equal(action.type, 'SYNTHESIZE_AND_COMMIT_TURN');
  });
});
