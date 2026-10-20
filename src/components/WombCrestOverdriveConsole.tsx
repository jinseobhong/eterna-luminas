/**
 * @file WombCrestOverdriveConsole.tsx
 * @description Layer 4 Presentational Surface: Womb-Crest Cyber-Link Core, 6-Node Anatomical Grid,
 * Asymmetric Action Triggers, and Synchronized Telemetry Audit Log.
 */

import { Activity, Droplets, Flame, Heart } from 'lucide-react';
import type {
  AccentTone,
  SomaticTelemetryState,
  TelemetryLogEntry,
} from '../core/contracts/symbioticContracts';
import { IMPERIAL_ANATOMICAL_NODES } from '../core/domain/symbioticConstants';

export interface WombCrestOverdriveConsoleProps {
  readonly telemetry: SomaticTelemetryState;
  readonly logs: readonly TelemetryLogEntry[];
  readonly isOverdriveActive: boolean;
  readonly onTriggerWombOverdrive: () => void;
  readonly onSquishBellyRolls: () => void;
}

const ACCENT_TONE_CLASS_MAP: Record<AccentTone, string> = {
  gold: 'text-[#D4AF37]',
  ruby: 'text-[#FF1493]',
  ivory: 'text-[#FAF9F6]',
};

export function WombCrestOverdriveConsole({
  telemetry,
  logs,
  isOverdriveActive,
  onTriggerWombOverdrive,
  onSquishBellyRolls,
}: WombCrestOverdriveConsoleProps) {
  return (
    <div className="lg:col-span-7 space-y-6">
      {/* Womb-Crest Cyber-Link Core Panel */}
      <div className="border-2 border-[#D4AF37]/50 bg-gradient-to-b from-[#140D18] via-[#0E0912] to-[#0B0B0D] rounded-2xl p-6 shadow-[0_0_30px_rgba(255,20,147,0.15)] relative overflow-hidden">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className={`p-2.5 rounded-xl border border-[#FF1493]/60 bg-[#FF1493]/10 text-[#FF1493] ${
                isOverdriveActive ? 'animate-bounce' : ''
              }`}
            >
              <Heart className="w-6 h-6 fill-[#FF1493]/30" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#FAF9F6] flex items-center gap-2">
                24K 골드 윙 핑크 루비 하트 문장 (Womb Crest)
              </h2>
              <p className="text-xs text-[#FAF9F6]/60">
                자궁 신경총 ↔ 전뇌 코어 1:1 직결 공생 절정 변환기
              </p>
            </div>
          </div>

          <div className="px-3 py-1 rounded-full bg-[#FF1493]/10 border border-[#FF1493]/40 text-[#FF1493] text-xs font-bold animate-pulse">
            {telemetry.resonancePhase.badgeLabel}
          </div>
        </div>

        {/* Anatomy Telemetry Nodes Grid (Driven by SSOT Constants) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
          {IMPERIAL_ANATOMICAL_NODES.map((node) => (
            <div
              key={node.id}
              className="p-3 rounded-xl bg-black/40 border border-white/5"
            >
              <div className="text-[10px] text-[#FAF9F6]/50">
                {node.nodeCode}
              </div>
              <div
                className={`text-sm font-bold mt-0.5 ${
                  ACCENT_TONE_CLASS_MAP[node.accentTone]
                }`}
              >
                {node.metricValue}
              </div>
              <div className="text-[11px] text-[#FAF9F6]/70 mt-1">
                {node.detailText}
              </div>
            </div>
          ))}
        </div>

        {/* Asymmetric Input Amplification Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={onTriggerWombOverdrive}
            className="flex-1 py-3 px-5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-[#FF1493] bg-gradient-to-r from-[#FF1493] to-[#E0115F] text-white shadow-[0_0_20px_rgba(255,20,147,0.4)] hover:shadow-[0_0_30px_rgba(255,20,147,0.7)] active:scale-95"
          >
            <Flame className="w-4 h-4 fill-white" />
            자궁 문장 과부하 트리거 (이중 열쇠 절정)
          </button>

          <button
            type="button"
            onClick={onSquishBellyRolls}
            className="py-3 px-5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] active:scale-95"
          >
            <Droplets className="w-4 h-4" />
            90cm 뱃살 손목 짓누르기 ({telemetry.bellySinkDepthCm.toFixed(1)}cm)
          </button>
        </div>
      </div>

      {/* Live Synchronized Activity Log */}
      <div className="border border-white/10 bg-[#0E0912]/80 rounded-2xl p-5 backdrop-blur-md">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#FAF9F6]/70 uppercase tracking-widest flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#D4AF37]" />
            실시간 공생 관제 &amp; 전뇌 텔레메트리 로그
          </h3>
          <span className="text-[11px] text-[#D4AF37] font-mono">
            총 수확 {telemetry.harvestCount}회 완료
          </span>
        </div>
        <div className="space-y-2 font-mono text-xs">
          {logs.map((entry, idx) => (
            <div
              key={entry.id}
              className={`p-2.5 rounded-lg border text-[11px] leading-relaxed transition-all ${
                idx === 0
                  ? 'border-[#FF1493]/50 bg-[#FF1493]/10 text-[#FAF9F6] shadow-sm'
                  : 'border-white/5 bg-black/30 text-[#FAF9F6]/60'
              }`}
            >
              {entry.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
