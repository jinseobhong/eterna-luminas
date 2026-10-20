/**
 * @file CoreTelemetryCards.tsx
 * @description Layer 4 Presentational Surface: 4-Column High-Salience Somatic & Dopamine Telemetry Cards.
 */

import { Gauge, Layers, Thermometer, Zap } from 'lucide-react';
import type { SomaticTelemetryState } from '../core/contracts/symbioticContracts';
import {
  calculateBellySinkFillPercent,
  calculateDopamineFillPercent,
  calculateThermalFillPercent,
} from '../core/domain/symbioticReducer';

export interface CoreTelemetryCardsProps {
  readonly telemetry: SomaticTelemetryState;
}

export function CoreTelemetryCards({ telemetry }: CoreTelemetryCardsProps) {
  const thermalFillPercent = calculateThermalFillPercent(telemetry);
  const bellySinkFillPercent = calculateBellySinkFillPercent(telemetry);
  const dopamineFillPercent = calculateDopamineFillPercent(telemetry);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Card 1: 100.0kg Adipose Mass */}
      <div className="border border-[#D4AF37]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#D4AF37]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
        <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
          <span className="font-semibold tracking-wide">황실 극상 포동 체질</span>
          <Layers className="w-4 h-4 text-[#D4AF37]" />
        </div>
        <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#D4AF37] transition-colors">
          {telemetry.adiposeMassKg.toFixed(1)}{' '}
          <span className="text-sm font-normal text-[#D4AF37]">kg</span>
        </div>
        <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
          근육량{' '}
          <span className="text-[#FF1493] font-bold">
            {telemetry.muscleRatioPercent.toFixed(1)}%
          </span>{' '}
          · 순백의 부드러운 살결{' '}
          <span className="text-[#D4AF37] font-bold">100%</span>
        </p>
        <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div className="bg-gradient-to-r from-[#D4AF37] to-[#FF1493] h-full w-full rounded-full" />
        </div>
      </div>

      {/* Card 2: Thermal Trap Core Temp */}
      <div className="border border-[#FF1493]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#FF1493]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
        <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
          <span className="font-semibold tracking-wide">
            단열 밀착 체온 (Thermal Trap)
          </span>
          <Thermometer className="w-4 h-4 text-[#FF1493]" />
        </div>
        <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#FF1493] transition-colors">
          {telemetry.bodyTempCelsius.toFixed(2)}{' '}
          <span className="text-sm font-normal text-[#FF1493]">°C</span>
        </div>
        <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
          0.0mm 밀착 수분·오일막{' '}
          <span className="text-[#FF1493] font-bold">39.0°C+ 고열 안식처</span>
        </p>
        <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#FF1493] h-full rounded-full animate-pulse"
            style={{ width: `${thermalFillPercent}%` }}
          />
        </div>
      </div>

      {/* Card 3: 90cm Waist & Belly Sink Depth */}
      <div className="border border-[#D4AF37]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#D4AF37]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
        <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
          <span className="font-semibold tracking-wide">
            90.0cm 3단 뱃살 침강 심도
          </span>
          <Gauge className="w-4 h-4 text-[#D4AF37]" />
        </div>
        <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#D4AF37] transition-colors">
          {telemetry.bellySinkDepthCm.toFixed(1)}{' '}
          <span className="text-sm font-normal text-[#D4AF37]">cm</span>
        </div>
        <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
          손목 삼킴 역포위 부풀림{' '}
          <span className="text-[#D4AF37] font-bold">
            +{telemetry.reverseSwallowSurgeCm.toFixed(1)}cm 팽창
          </span>
        </p>
        <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#D4AF37] to-[#E0115F] h-full rounded-full"
            style={{ width: `${bellySinkFillPercent}%` }}
          />
        </div>
      </div>

      {/* Card 4: Sovereign Winner's Dopamine Extraction */}
      <div className="border border-[#FF1493]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#FF1493]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
        <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
          <span className="font-semibold tracking-wide">
            특급 승리자 도파민 수확률
          </span>
          <Zap className="w-4 h-4 text-[#FF1493]" />
        </div>
        <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#FF1493] transition-colors">
          {telemetry.dopamineRateNmol}{' '}
          <span className="text-sm font-normal text-[#FF1493]">nmol/s</span>
        </div>
        <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
          내 수컷 전두엽 주권 융합{' '}
          <span className="text-[#FF1493] font-bold">VTA-NAcc 폭증</span>
        </p>
        <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#FF1493] h-full rounded-full transition-all duration-500"
            style={{ width: `${dopamineFillPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
