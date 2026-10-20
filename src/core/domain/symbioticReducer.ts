/**
 * @file symbioticReducer.ts
 * @description Layer 2 Pure Domain Engine: Deterministic state transitions `(State, Action) => NextState`
 * with compile-time exhaustiveness verification and pure telemetry ratio calculators.
 */

import type {
  SomaticTelemetryState,
  SymbioticEngineAction,
  SymbioticEngineState,
  TelemetryLogEntry,
} from '../contracts/symbioticContracts';
import { SOMATIC_PHYSICS_LIMITS } from './symbioticConstants';

function prependAuditLogs(
  existingLogs: readonly TelemetryLogEntry[],
  newEntries: readonly TelemetryLogEntry[]
): readonly TelemetryLogEntry[] {
  return [...newEntries, ...existingLogs].slice(
    0,
    SOMATIC_PHYSICS_LIMITS.MAX_LOG_ENTRIES
  );
}

export function calculateThermalFillPercent(
  telemetry: SomaticTelemetryState
): number {
  return Math.min(
    100,
    Math.max(
      0,
      (telemetry.bodyTempCelsius / SOMATIC_PHYSICS_LIMITS.TEMP_GAUGE_CEILING) *
        100
    )
  );
}

export function calculateBellySinkFillPercent(
  telemetry: SomaticTelemetryState
): number {
  return Math.min(
    100,
    Math.max(
      0,
      (telemetry.bellySinkDepthCm / SOMATIC_PHYSICS_LIMITS.MAX_BELLY_SINK_CM) *
        100
    )
  );
}

export function calculateDopamineFillPercent(
  telemetry: SomaticTelemetryState
): number {
  return Math.min(
    100,
    Math.max(
      0,
      (telemetry.dopamineRateNmol /
        SOMATIC_PHYSICS_LIMITS.DOPAMINE_GAUGE_CEILING) *
        100
    )
  );
}

export function symbioticEngineReducer(
  state: SymbioticEngineState,
  action: SymbioticEngineAction
): SymbioticEngineState {
  switch (action.type) {
    case 'TRIGGER_WOMB_OVERDRIVE': {
      const nextHarvestCount = state.telemetry.harvestCount + 1;
      const nextDopamine = Math.min(
        SOMATIC_PHYSICS_LIMITS.MAX_DOPAMINE_NMOL,
        state.telemetry.dopamineRateNmol + 140
      );

      const newLogs: readonly TelemetryLogEntry[] = [
        {
          id: `overdrive-${action.timestamp}-${nextHarvestCount}`,
          tag: 'OVERDRIVE',
          message: `[OVERDRIVE] 자궁 문장 과부하 트리거 가동! 100.0kg 살결 파동 및 전뇌 절정 동기화 (${action.timestamp})`,
          timestamp: action.timestamp,
        },
        {
          id: `harvest-${action.timestamp}-${nextHarvestCount}`,
          tag: 'CLIMAX',
          message: `[HARVEST] 내 수컷의 군주적 결단에서 특급 승리자 도파민 +${SOMATIC_PHYSICS_LIMITS.SURGE_DOPAMINE_BONUS_NMOL}nmol/s 수확 완료!`,
          timestamp: action.timestamp,
        },
      ];

      return {
        ...state,
        telemetry: {
          ...state.telemetry,
          dopamineRateNmol: nextDopamine,
          harvestCount: nextHarvestCount,
          resonancePhase: {
            kind: 'OVERDRIVE_CLIMAX_SURGE',
            kEmpress: 1,
            kMale: 1,
            badgeLabel: 'OVERDRIVE ACTIVE',
            lastSurgeTimestamp: action.timestamp,
          },
        },
        logs: prependAuditLogs(state.logs, newLogs),
      };
    }

    case 'SQUISH_BELLY_ROLLS': {
      const nextSinkDepth = Number(
        Math.min(
          SOMATIC_PHYSICS_LIMITS.MAX_BELLY_SINK_CM,
          state.telemetry.bellySinkDepthCm +
            SOMATIC_PHYSICS_LIMITS.BELLY_SINK_STEP_CM
        ).toFixed(1)
      );

      const squishLog: TelemetryLogEntry = {
        id: `squish-${action.timestamp}-${nextSinkDepth}`,
        tag: 'SQUISH',
        message: `[SQUISH] 내 수컷의 손바닥이 90.0cm 3단 뱃살을 깊숙이 쥐어짜며 ${nextSinkDepth}cm 역포위 침강 (${action.timestamp})`,
        timestamp: action.timestamp,
      };

      return {
        ...state,
        telemetry: {
          ...state.telemetry,
          bellySinkDepthCm: nextSinkDepth,
        },
        logs: prependAuditLogs(state.logs, [squishLog]),
      };
    }

    case 'PULSE_OVERDRIVE_TICK': {
      if (state.telemetry.resonancePhase.kind !== 'OVERDRIVE_CLIMAX_SURGE') {
        return state;
      }

      const nextDopamine = Math.min(
        SOMATIC_PHYSICS_LIMITS.MAX_DOPAMINE_NMOL,
        state.telemetry.dopamineRateNmol + action.dopamineDelta
      );
      const nextTemp = Number(
        Math.min(
          SOMATIC_PHYSICS_LIMITS.MAX_TEMP_CELSIUS,
          state.telemetry.bodyTempCelsius + action.tempDeltaCelsius
        ).toFixed(2)
      );

      return {
        ...state,
        telemetry: {
          ...state.telemetry,
          dopamineRateNmol: nextDopamine,
          bodyTempCelsius: nextTemp,
        },
      };
    }

    case 'SET_AMBIENT_LIGHT': {
      return {
        ...state,
        environment: {
          ...state.environment,
          ambientLightPercent: Math.min(100, Math.max(5, action.valuePercent)),
        },
      };
    }

    case 'SET_PHEROMONE_DENSITY': {
      return {
        ...state,
        environment: {
          ...state.environment,
          pheromoneDensityPercent: Math.min(
            100,
            Math.max(10, action.valuePercent)
          ),
        },
      };
    }

    case 'TOGGLE_ACOUSTIC_SEAL': {
      const nextSealState = !state.environment.acousticSealActive;
      const envLog: TelemetryLogEntry = {
        id: `acoustic-${action.timestamp}`,
        tag: 'ENVIRONMENT',
        message: `[ENVIRONMENT] 벨벳 방음 차폐막 ${nextSealState ? '100% 밀폐 가동' : '해제'} (${action.timestamp})`,
        timestamp: action.timestamp,
      };

      return {
        ...state,
        environment: {
          ...state.environment,
          acousticSealActive: nextSealState,
        },
        logs: prependAuditLogs(state.logs, [envLog]),
      };
    }

    case 'TOGGLE_WATERBED_SUSPENSION': {
      const nextWaterbedState = !state.environment.waterbedSuspensionActive;
      const envLog: TelemetryLogEntry = {
        id: `waterbed-${action.timestamp}`,
        tag: 'ENVIRONMENT',
        message: `[ENVIRONMENT] 100.0kg 무중력 물침대 완충 모드 ${nextWaterbedState ? '활성화' : '대기'} (${action.timestamp})`,
        timestamp: action.timestamp,
      };

      return {
        ...state,
        environment: {
          ...state.environment,
          waterbedSuspensionActive: nextWaterbedState,
        },
        logs: prependAuditLogs(state.logs, [envLog]),
      };
    }

    default: {
      const _exhaustiveCheck: never = action;
      return _exhaustiveCheck;
    }
  }
}
