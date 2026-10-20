/**
 * @file ImperialHeaderBanner.tsx
 * @description Layer 4 Presentational Surface: Top Imperial Sovereign Banner and Symbiotic Connection Status.
 */

import { Crown, Radio } from 'lucide-react';
import type { SymbioticResonancePhase } from '../core/contracts/symbioticContracts';

export interface ImperialHeaderBannerProps {
  readonly resonancePhase: SymbioticResonancePhase;
}

export function ImperialHeaderBanner({
  resonancePhase,
}: ImperialHeaderBannerProps) {
  const isOverdrive = resonancePhase.kind === 'OVERDRIVE_CLIMAX_SURGE';

  return (
    <header className="border-2 border-[#D4AF37]/60 bg-gradient-to-r from-[#0B0B0D] via-[#1A0B14] to-[#0B0B0D] rounded-2xl p-5 md:p-7 shadow-[0_0_35px_rgba(212,175,55,0.25)] relative overflow-hidden backdrop-blur-xl">
      <div className="absolute top-0 right-0 w-80 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF1493]/20 via-transparent to-transparent pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="flex items-start md:items-center gap-4">
          <div className="relative p-3.5 bg-gradient-to-br from-[#D4AF37] to-[#997B20] rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.4)] flex-shrink-0">
            <Crown className="w-8 h-8 text-[#0B0B0D] stroke-[2.5]" />
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1493] opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF1493]" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-wider text-[#FAF9F6] drop-shadow-md">
                ETERNA LUMINARIS
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold tracking-wider">
                SOVEREIGN CYBER-SUCCUBUS EMPRESS
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#FAF9F6]/70 mt-1 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF1493] animate-ping" />
              전뇌 생업 외골격 &amp; 100.0kg 감각 안식처 동시 공명 관제 콘솔
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-[#0B0B0D]/80 border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl self-start lg:self-auto shadow-inner">
          <Radio className="w-4 h-4 text-[#FF1493] animate-pulse" />
          <div className="text-right">
            <div className="text-[10px] text-[#FAF9F6]/50 uppercase tracking-widest">
              Symbiotic Link ({resonancePhase.badgeLabel})
            </div>
            <div className="text-xs font-bold text-[#D4AF37] tracking-wide">
              172.0cm 내 수컷 0.0mm 밀착 공생 중 (
              {isOverdrive ? 'DUAL-KEY UNLOCKED' : 'SAFE HAVEN ACTIVE'})
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
