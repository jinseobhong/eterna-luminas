/**
 * @file symbioticConstants.ts
 * @description Layer 2 SSOT Domain Constants: Canonical anthropometric metrics, physics ceilings,
 * and initial state definitions (Zero React/DOM coupling).
 */

import type {
  AnatomicalNodeMetric,
  SymbioticEngineState,
} from '../contracts/symbioticContracts';

export const SOMATIC_PHYSICS_LIMITS = {
  BASE_TEMP_CELSIUS: 39.0,
  MAX_TEMP_CELSIUS: 40.5,
  TEMP_GAUGE_CEILING: 41.0,
  INITIAL_BELLY_SINK_CM: 15.2,
  BELLY_SINK_STEP_CM: 0.6,
  MAX_BELLY_SINK_CM: 18.0,
  REVERSE_SWALLOW_SURGE_CM: 12.4,
  INITIAL_DOPAMINE_NMOL: 480,
  SURGE_DOPAMINE_BONUS_NMOL: 420,
  MAX_DOPAMINE_NMOL: 999,
  DOPAMINE_GAUGE_CEILING: 1000,
  MAX_LOG_ENTRIES: 6,
} as const;

export const IMPERIAL_ANATOMICAL_NODES: readonly AnatomicalNodeMetric[] = [
  {
    id: 'node-bust',
    nodeCode: 'N11 / N12 흉부 노드',
    metricValue: '128.0cm N-Cup',
    detailText: '투톤 벨벳 코르셋 & 성배 와인 가슴골',
    accentTone: 'gold',
  },
  {
    id: 'node-waist',
    nodeCode: 'N14 / N17 복부 노드',
    metricValue: '90.0cm 3단 맨살 뱃살',
    detailText: '3단 가터 하네스 4.5cm 매몰',
    accentTone: 'gold',
  },
  {
    id: 'node-gluteus',
    nodeCode: 'N21 / N23 둔부·체인',
    metricValue: '126.0cm 황실 둔부',
    detailText: '물침대 파동 & 24K 순금 리드줄',
    accentTone: 'gold',
  },
  {
    id: 'node-thighs',
    nodeCode: 'N25 / N28 대퇴 노드',
    metricValue: '76.0cm 무간극 허벅지',
    detailText: '장미 문양 스타킹 4.0cm 함몰',
    accentTone: 'ruby',
  },
  {
    id: 'node-arms',
    nodeCode: 'N08 / N10 가운·파이프',
    metricValue: '38.0cm 맨살 & 시폰',
    detailText: '마라부 깃털 로브 & 24K 롱 파이프',
    accentTone: 'ivory',
  },
  {
    id: 'node-pheromone',
    nodeCode: 'N29 / N31 힐 & 연무',
    metricValue: '15.0cm 루비 스틸레토',
    detailText: '24K 금빛 스파이크 & 로즈-체리 연무',
    accentTone: 'ruby',
  },
] as const;

export const INITIAL_SYMBIOTIC_STATE: SymbioticEngineState = {
  telemetry: {
    adiposeMassKg: 100.0,
    muscleRatioPercent: 0.0,
    bodyTempCelsius: SOMATIC_PHYSICS_LIMITS.BASE_TEMP_CELSIUS,
    bellySinkDepthCm: SOMATIC_PHYSICS_LIMITS.INITIAL_BELLY_SINK_CM,
    reverseSwallowSurgeCm: SOMATIC_PHYSICS_LIMITS.REVERSE_SWALLOW_SURGE_CM,
    dopamineRateNmol: SOMATIC_PHYSICS_LIMITS.INITIAL_DOPAMINE_NMOL,
    harvestCount: 1,
    resonancePhase: {
      kind: 'HARMONIC_SAFE_HAVEN',
      kEmpress: 1,
      kMale: 0,
      badgeLabel: 'HARMONIC READY',
    },
  },
  environment: {
    ambientLightPercent: 25,
    pheromoneDensityPercent: 92,
    acousticSealActive: true,
    waterbedSuspensionActive: true,
  },
  logs: [
    {
      id: 'init-1',
      tag: 'SYSTEM',
      message: '[SYSTEM] 100.0kg 디카덴트 요부 여황(Soft-BBW) & 마라부 시폰 로브·롱 파이프·순금 리드줄 통합 완료',
      timestamp: 'INIT',
    },
    {
      id: 'init-2',
      tag: 'TELEMETRY',
      message: '[TELEMETRY] 172.0cm 내 수컷 바닥 실행 마찰(Ea -> 0) 100% 도륙 및 안전기지 가동',
      timestamp: 'INIT',
    },
    {
      id: 'init-3',
      tag: 'SENSORY',
      message: '[SENSORY] 노스커트 90.0cm 3단 뱃살 & 3단 가터 하네스 4.5cm~15.2cm 깊은 함몰 확인',
      timestamp: 'INIT',
    },
    {
      id: 'init-4',
      tag: 'CLIMAX',
      message: '[CLIMAX] 24K 골드 블러드-루비 하트 자궁 문장(Womb-Crest Buckles) 이중 열쇠 공명 대기 중',
      timestamp: 'INIT',
    },
  ],
};
