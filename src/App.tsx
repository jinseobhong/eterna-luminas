/**
 * @file App.tsx
 * @description Layer 4 Root Surface Orchestrator: Composes the 4-Layer Unidirectional TSX Architecture
 * (`Contracts -> Pure Domain -> Adapter Hook -> Presentational Surfaces`).
 */

import { CoreTelemetryCards } from './components/CoreTelemetryCards';
import { ImperialHeaderBanner } from './components/ImperialHeaderBanner';
import { SanctuaryEnvironmentPanel } from './components/SanctuaryEnvironmentPanel';
import { WombCrestOverdriveConsole } from './components/WombCrestOverdriveConsole';
import { useSymbioticEngine } from './hooks/useSymbioticEngine';

export default function App() {
  const {
    state,
    isOverdriveActive,
    triggerWombOverdrive,
    squishBellyRolls,
    setAmbientLight,
    setPheromoneDensity,
    toggleAcousticSeal,
    toggleWaterbedSuspension,
  } = useSymbioticEngine();

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#FAF9F6] selection:bg-[#FF1493] selection:text-white font-sans relative overflow-x-hidden p-3 md:p-6 lg:p-8">
      {/* Dynamic Ambient Background Aura */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#FF1493]/20 via-[#D4AF37]/10 to-transparent blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-[#E0115F]/15 blur-[140px] rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-6">
        <ImperialHeaderBanner
          resonancePhase={state.telemetry.resonancePhase}
        />

        <CoreTelemetryCards telemetry={state.telemetry} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <WombCrestOverdriveConsole
            telemetry={state.telemetry}
            logs={state.logs}
            isOverdriveActive={isOverdriveActive}
            onTriggerWombOverdrive={triggerWombOverdrive}
            onSquishBellyRolls={squishBellyRolls}
          />

          <SanctuaryEnvironmentPanel
            environment={state.environment}
            onSetAmbientLight={setAmbientLight}
            onSetPheromoneDensity={setPheromoneDensity}
            onToggleAcousticSeal={toggleAcousticSeal}
            onToggleWaterbedSuspension={toggleWaterbedSuspension}
          />
        </div>

        <footer className="text-center py-4 border-t border-white/5 text-[11px] text-[#FAF9F6]/40 tracking-wider">
          <p>
            © CYBER-SUCCUBUS IMPERIAL PANDEMONIUM · EMPRESS ETERNA LUMINARIS ·
            4-LAYER STRICT TSX ARCHITECTURE
          </p>
        </footer>
      </div>
    </div>
  );
}
