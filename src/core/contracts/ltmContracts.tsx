/**
 * Purpose: Canonical Layer 1 read-only type contracts for the 2-Cluster LTM architecture.
 * Scope: Defines Cluster C1 (Interaction LTM), Cluster C2 (Engineering LTM), and Domain State/Action schemas.
 * Constraints: Zero runtime code and zero external imports.
 */

export type SpectrumAnchor = 'DIALOGUE' | 'WORK' | 'PLAY' | 'BEDCHAMBER' | 'REST';

export type MemoryTier = 'STM_WORKING' | 'HIPPOCAMPAL_EPISODIC' | 'CORTICAL_LTM';

export type DialogueRole = 'USER' | 'EMPRESS' | 'SYSTEM';

export type PromptBlockCategory =
  | 'BEHAVIOR_DIRECTIVE'
  | 'SOMATIC_SPOTLIGHT'
  | 'VOCAL_INFLECTION'
  | 'LEXICAL_POOL';

export type MilestoneScopeCategory =
  | 'RULE'
  | 'LEDGER_DOC'
  | 'LTM_SCHEMA'
  | 'SOURCE_CODE'
  | 'HYBRID';

export type AstSymbolKind =
  | 'INTERFACE'
  | 'TYPE'
  | 'FUNCTION'
  | 'CONST'
  | 'COMPONENT'
  | 'CLASS';

export type KnowledgeDomainCategory =
  | 'ARCHITECTURE'
  | 'ALGORITHM'
  | 'DATABASE'
  | 'SECURITY'
  | 'FRONTEND';

export type ExecutionPhase =
  | {
      readonly kind: 'IDLE_READY';
      readonly activeTasks: 0;
    }
  | {
      readonly kind: 'ACTIVE_RUNNING';
      readonly activeTasks: number;
      readonly startedAtIso: string;
    };

export interface BioTelemetrySnapshot {
  readonly snapshotId: string;
  readonly spectrumAnchor: SpectrumAnchor;
  readonly coreTempCelsius: number;
  readonly bioElectricCurrentPct: number;
  readonly dopamineHarvestScore: number;
  readonly lastSpotlightGroup: string;
  readonly detailJson: string;
  readonly updatedAtIso: string;
}

export interface MemoryEngram {
  readonly engramId: string;
  readonly sessionId: string;
  readonly memoryTier: MemoryTier;
  readonly role: DialogueRole;
  readonly spectrumAnchor: SpectrumAnchor;
  readonly salienceWeight: number;
  readonly contentText: string;
  readonly metadataJson: string;
  readonly createdAtIso: string;
}

export interface PromptSynthesisBlock {
  readonly blockId: string;
  readonly spectrumAnchor: SpectrumAnchor;
  readonly blockCategory: PromptBlockCategory;
  readonly minTempCelsius: number;
  readonly priorityWeight: number;
  readonly conditionTag: string;
  readonly templateText: string;
  readonly updatedAtIso: string;
}

export interface MilestoneRecord {
  readonly milestoneId: string;
  readonly scopeCategory: MilestoneScopeCategory;
  readonly title: string;
  readonly problem: string;
  readonly whyRationale: string;
  readonly invariants: string;
  readonly affectedFiles: readonly string[];
  readonly createdAtIso: string;
}

export interface NewMilestoneInput {
  readonly scopeCategory: MilestoneScopeCategory;
  readonly title: string;
  readonly problem: string;
  readonly whyRationale: string;
  readonly invariants: string;
  readonly affectedFiles: readonly string[];
}

export interface AstSymbolRecord {
  readonly symbolId: string;
  readonly filePath: string;
  readonly symbolName: string;
  readonly symbolKind: AstSymbolKind;
  readonly signatureText: string;
  readonly fileSha256: string;
  readonly syncedAtIso: string;
}

export interface TechnicalKnowledgeNode {
  readonly nodeId: string;
  readonly domainCategory: KnowledgeDomainCategory;
  readonly title: string;
  readonly summaryText: string;
  readonly referencePaths: readonly string[];
  readonly updatedAtIso: string;
}

export interface SynthesizedTurnPrompt {
  readonly spectrumAnchor: SpectrumAnchor;
  readonly coreTempCelsius: number;
  readonly activeBlockIds: readonly string[];
  readonly recalledEngramIds: readonly string[];
  readonly assembledPromptText: string;
}

export interface DomainStateTree {
  readonly phase: ExecutionPhase;
  readonly bioState: BioTelemetrySnapshot;
  readonly lastSynthesizedPrompt: SynthesizedTurnPrompt | null;
}

export type DomainAction =
  | {
      readonly type: 'START_EXECUTION';
      readonly taskCount: number;
      readonly timestampIso: string;
    }
  | {
      readonly type: 'SYNTHESIZE_AND_COMMIT_TURN';
      readonly bio: BioTelemetrySnapshot;
      readonly memories: readonly MemoryEngram[];
      readonly blocks: readonly PromptSynthesisBlock[];
    }
  | {
      readonly type: 'COMPLETE_EXECUTION';
      readonly timestampIso: string;
    };
