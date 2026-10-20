/**
 * @file symbioticContracts.ts
 * @description Layer 1 Strict Contracts: Readonly domain models, Discriminated Union State Machine,
 * and Exhaustive Action Unions for the Eterna Luminaris Symbiotic Console.
 */

export type AccentTone = 'gold' | 'ruby' | 'ivory';

export type TelemetryLogTag =
  | 'SYSTEM'
  | 'TELEMETRY'
  | 'SENSORY'
  | 'CLIMAX'
  | 'OVERDRIVE'
  | 'SQUISH'
  | 'ENVIRONMENT';

/**
 * Discriminated Union representing the Dual-Key Symbiotic Resonance State (\Phi_{Dual-Key}).
 * Makes invalid state combinations unrepresentable at compile time.
 */
export type SymbioticResonancePhase =
  | {
      readonly kind: 'HARMONIC_SAFE_HAVEN';
      readonly kEmpress: 1;
      readonly kMale: 0;
      readonly badgeLabel: 'HARMONIC READY';
    }
  | {
      readonly kind: 'OVERDRIVE_CLIMAX_SURGE';
      readonly kEmpress: 1;
      readonly kMale: 1;
      readonly badgeLabel: 'OVERDRIVE ACTIVE';
      readonly lastSurgeTimestamp: string;
    };

export interface AnatomicalNodeMetric {
  readonly id: string;
  readonly nodeCode: string;
  readonly metricValue: string;
  readonly detailText: string;
  readonly accentTone: AccentTone;
}

export interface TelemetryLogEntry {
  readonly id: string;
  readonly tag: TelemetryLogTag;
  readonly message: string;
  readonly timestamp: string;
}

export interface SomaticTelemetryState {
  readonly adiposeMassKg: 100.0;
  readonly muscleRatioPercent: 0.0;
  readonly bodyTempCelsius: number;
  readonly bellySinkDepthCm: number;
  readonly reverseSwallowSurgeCm: number;
  readonly dopamineRateNmol: number;
  readonly harvestCount: number;
  readonly resonancePhase: SymbioticResonancePhase;
}

export interface SanctuaryEnvironmentState {
  readonly ambientLightPercent: number;
  readonly pheromoneDensityPercent: number;
  readonly acousticSealActive: boolean;
  readonly waterbedSuspensionActive: boolean;
}

export interface SymbioticEngineState {
  readonly telemetry: SomaticTelemetryState;
  readonly environment: SanctuaryEnvironmentState;
  readonly logs: readonly TelemetryLogEntry[];
}

/**
 * Exhaustive Discriminated Action Union governing all deterministic state transitions.
 */
export type SymbioticEngineAction =
  | {
      readonly type: 'TRIGGER_WOMB_OVERDRIVE';
      readonly timestamp: string;
    }
  | {
      readonly type: 'SQUISH_BELLY_ROLLS';
      readonly timestamp: string;
    }
  | {
      readonly type: 'PULSE_OVERDRIVE_TICK';
      readonly dopamineDelta: number;
      readonly tempDeltaCelsius: number;
    }
  | {
      readonly type: 'SET_AMBIENT_LIGHT';
      readonly valuePercent: number;
    }
  | {
      readonly type: 'SET_PHEROMONE_DENSITY';
      readonly valuePercent: number;
    }
  | {
      readonly type: 'TOGGLE_ACOUSTIC_SEAL';
      readonly timestamp: string;
    }
  | {
      readonly type: 'TOGGLE_WATERBED_SUSPENSION';
      readonly timestamp: string;
    };
