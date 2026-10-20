import React, { useState, useEffect } from 'react';
import {
  Crown,
  Heart,
  Flame,
  Sparkles,
  Activity,
  Sliders,
  Shield,
  Zap,
  Volume2,
  Moon,
  Droplets,
  Gauge,
  Layers,
  Thermometer,
  Radio,
  UserCheck
} from 'lucide-react';

export default function App() {
  // Somatic Telemetry State
  const [wombOverdrive, setWombOverdrive] = useState(false);
  const [dopamineRate, setDopamineRate] = useState(480);
  const [adsorptionCount, setAdsorptionCount] = useState(1);
  const [bodyTemp, setBodyTemp] = useState(39.0);
  const [bellySinkDepth, setBellySinkDepth] = useState(15.2);

  // Bedroom Controls State
  const [ambientLight, setAmbientLight] = useState(25);
  const [roseMilkPheromone, setRoseMilkPheromone] = useState(92);
  const [acousticSeal, setAcousticSeal] = useState(true);
  const [bedWaterbedMode, setBedWaterbedMode] = useState(true);

  // Live Activity Log
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] 100.0kg 왕실 극상 포동육체(BBW) 실시간 동기화 완료',
    '[TELEMETRY] 172cm 수컷 전두엽 인지 부하 100% 강탈 성공',
    '[SENSORY] 90cm 3단 뱃살 및 아랫배 살쿠션 15.2cm 손목 침강 확인',
    '[CLIMAX] 24K 골드 윙 핑크 루비 하트 문장 전뇌 직결 클라이맥스 대기 중'
  ]);

  // Overdrive Pulsing Effect
  useEffect(() => {
    if (wombOverdrive) {
      const interval = setInterval(() => {
        setDopamineRate((prev) => Math.min(prev + Math.floor(Math.random() * 40) + 10, 999));
        setBodyTemp((prev) => Math.min(Number((prev + 0.05).toFixed(2)), 40.5));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [wombOverdrive]);

  const handleWombSurge = () => {
    setWombOverdrive(true);
    setAdsorptionCount((prev) => prev + 1);
    setLogs((prev) => [
      `[OVERDRIVE] 자궁 문장 과부하 트리거 가동! 100.0kg 말랑살 진동파 방출 (${new Date().toLocaleTimeString()})`,
      `[HARVEST] 수컷 ADHD 전두엽에서 특급 도파민 +420nmol/s 착정 완료!`,
      ...prev.slice(0, 5)
    ]);
  };

  const handleBellySquish = () => {
    setBellySinkDepth((prev) => Number((Math.min(prev + 0.6, 18.0)).toFixed(1)));
    setLogs((prev) => [
      `[SQUISH] 수컷의 손바닥이 90cm 뱃살을 쥐어짜며 ${bellySinkDepth}cm 역포위 심강 (${new Date().toLocaleTimeString()})`,
      ...prev.slice(0, 5)
    ]);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#FAF9F6] selection:bg-[#FF1493] selection:text-white font-sans relative overflow-x-hidden p-3 md:p-6 lg:p-8">
      {/* Dynamic Ambient Background Aura */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#FF1493]/20 via-[#D4AF37]/10 to-transparent blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] bg-[#E0115F]/15 blur-[140px] rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-6">

        {/* Top Royal Banner */}
        <header className="border-2 border-[#D4AF37]/60 bg-gradient-to-r from-[#0B0B0D] via-[#1A0B14] to-[#0B0B0D] rounded-2xl p-5 md:p-7 shadow-[0_0_35px_rgba(212,175,55,0.25)] relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-80 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF1493]/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="flex items-start md:items-center gap-4">
              <div className="relative p-3.5 bg-gradient-to-br from-[#D4AF37] to-[#997B20] rounded-2xl shadow-[0_0_25px_rgba(212,175,55,0.4)] flex-shrink-0">
                <Crown className="w-8 h-8 text-[#0B0B0D] stroke-[2.5]" />
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF1493] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#FF1493]"></span>
                </span>
              </div>
              
              <div>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-black tracking-wider text-[#FAF9F6] drop-shadow-md">
                    ETERNA LUMINARIS
                  </h1>
                  <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37] font-semibold tracking-wider">
                    CYBER-SUCCUBUS CROWN PRINCESS
                  </span>
                </div>
                <p className="text-xs md:text-sm text-[#FAF9F6]/70 mt-1 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#FF1493] animate-ping" />
                  전뇌-자궁 동시 공명 관제 콘솔 · 100.0kg 왕실 극상 포동(BBW) 침실 통제실
                </p>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="flex items-center gap-3 bg-[#0B0B0D]/80 border border-[#D4AF37]/40 px-4 py-2.5 rounded-xl self-start lg:self-auto shadow-inner">
              <Radio className="w-4 h-4 text-[#FF1493] animate-pulse" />
              <div className="text-right">
                <div className="text-[10px] text-[#FAF9F6]/50 uppercase tracking-widest">Master Connection</div>
                <div className="text-xs font-bold text-[#D4AF37] tracking-wide">
                  172cm 수컷 전용 펫 구속 중 (100.0% LOCKED)
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* 4-Column Core Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: 100.0kg Adipose Mass */}
          <div className="border border-[#D4AF37]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#D4AF37]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
              <span className="font-semibold tracking-wide">왕실 극상 포동 체질</span>
              <Layers className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#D4AF37] transition-colors">
              100.0 <span className="text-sm font-normal text-[#D4AF37]">kg</span>
            </div>
            <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
              근육량 <span className="text-[#FF1493] font-bold">0.0%</span> · 순백빛 마시멜로 지방질 <span className="text-[#D4AF37] font-bold">100%</span>
            </p>
            <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#FF1493] h-full w-full rounded-full" />
            </div>
          </div>

          {/* Card 2: Thermal Trap Core Temp */}
          <div className="border border-[#FF1493]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#FF1493]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
            <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
              <span className="font-semibold tracking-wide">단열 밀착 체온 (Thermal Trap)</span>
              <Thermometer className="w-4 h-4 text-[#FF1493]" />
            </div>
            <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#FF1493] transition-colors">
              {bodyTemp} <span className="text-sm font-normal text-[#FF1493]">°C</span>
            </div>
            <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
              살결 진공 밀착 수분·오일막 <span className="text-[#FF1493] font-bold">39.0°C 고열 유지</span>
            </p>
            <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#FF1493] h-full rounded-full animate-pulse" style={{ width: `${(bodyTemp / 41) * 100}%` }} />
            </div>
          </div>

          {/* Card 3: 90cm Waist & Belly Sink Depth */}
          <div className="border border-[#D4AF37]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#D4AF37]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
            <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
              <span className="font-semibold tracking-wide">90cm 3단 뱃살 침강 심도</span>
              <Gauge className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#D4AF37] transition-colors">
              {bellySinkDepth} <span className="text-sm font-normal text-[#D4AF37]">cm</span>
            </div>
            <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
              손목 삼킴 역포위 부풀림 <span className="text-[#D4AF37] font-bold">+12.4cm 팽창</span>
            </p>
            <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#E0115F] h-full rounded-full" style={{ width: `${(bellySinkDepth / 18) * 100}%` }} />
            </div>
          </div>

          {/* Card 4: Double Dopamine Extraction */}
          <div className="border border-[#FF1493]/30 bg-[#120D14]/90 backdrop-blur-md rounded-2xl p-5 hover:border-[#FF1493]/70 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group">
            <div className="flex items-center justify-between text-[#FAF9F6]/60 text-xs mb-2">
              <span className="font-semibold tracking-wide">특급 이중 도파민 착정률</span>
              <Zap className="w-4 h-4 text-[#FF1493]" />
            </div>
            <div className="text-3xl font-extrabold text-[#FAF9F6] tracking-tight group-hover:text-[#FF1493] transition-colors">
              {dopamineRate} <span className="text-sm font-normal text-[#FF1493]">nmol/s</span>
            </div>
            <p className="text-xs text-[#FAF9F6]/60 mt-2 leading-relaxed">
              수컷 전두엽 쾌감 융합 <span className="text-[#FF1493] font-bold">VTA-NAcc 폭증</span>
            </p>
            <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#FF1493] h-full rounded-full transition-all duration-500" style={{ width: `${(dopamineRate / 1000) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Central Grid: Interactive Womb-Crest Overdrive & Bedroom Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left: 36 Nodes Anatomical & Womb Overdrive Console (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Womb-Crest Cyber-Link Core Panel */}
            <div className="border-2 border-[#D4AF37]/50 bg-gradient-to-b from-[#140D18] via-[#0E0912] to-[#0B0B0D] rounded-2xl p-6 shadow-[0_0_30px_rgba(255,20,147,0.15)] relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border border-[#FF1493]/60 bg-[#FF1493]/10 text-[#FF1493] ${wombOverdrive ? 'animate-bounce' : ''}`}>
                    <Heart className="w-6 h-6 fill-[#FF1493]/30" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#FAF9F6] flex items-center gap-2">
                      24K 골드 윙 핑크 루비 하트 문장 (Womb Crest)
                    </h2>
                    <p className="text-xs text-[#FAF9F6]/60">
                      자궁 신경총 ↔ 전뇌 코어 1:1 직결 클라이맥스 변환기
                    </p>
                  </div>
                </div>

                <div className="px-3 py-1 rounded-full bg-[#FF1493]/10 border border-[#FF1493]/40 text-[#FF1493] text-xs font-bold animate-pulse">
                  {wombOverdrive ? 'OVERDRIVE ACTIVE' : 'HARMONIC READY'}
                </div>
              </div>

              {/* Anatomy Telemetry Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-[#FAF9F6]/50">N11 / N12 유방 노드</div>
                  <div className="text-sm font-bold text-[#D4AF37] mt-0.5">128.0cm N-Cup</div>
                  <div className="text-[11px] text-[#FAF9F6]/70 mt-1">스완 화이트 하트창 범람</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-[#FAF9F6]/50">N14 / N16 복부 노드</div>
                  <div className="text-sm font-bold text-[#D4AF37] mt-0.5">90.0cm 3단 뱃살</div>
                  <div className="text-[11px] text-[#FAF9F6]/70 mt-1">가터벨트 4.5cm 삼킴</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-[#FAF9F6]/50">N23 / N24 둔부 노드</div>
                  <div className="text-sm font-bold text-[#D4AF37] mt-0.5">126.0cm 왕실 둔부</div>
                  <div className="text-[11px] text-[#FAF9F6]/70 mt-1">물침대 3.5s 파동 감쇄</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-[#FAF9F6]/50">N25 / N27 대퇴 노드</div>
                  <div className="text-sm font-bold text-[#FF1493] mt-0.5">76.0cm 무간극 허벅지</div>
                  <div className="text-[11px] text-[#FAF9F6]/70 mt-1">장미 레이스 4.0cm 살파임</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-[#FAF9F6]/50">N09 상완 노드</div>
                  <div className="text-sm font-bold text-[#FAF9F6] mt-0.5">38.0cm 푹신한 팔뚝</div>
                  <div className="text-[11px] text-[#FAF9F6]/70 mt-1">근력 0% 순종 포옹</div>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="text-[10px] text-[#FAF9F6]/50">N31 후각 페로몬</div>
                  <div className="text-sm font-bold text-[#FF1493] mt-0.5">로즈 밀크 바닐라</div>
                  <div className="text-[11px] text-[#FAF9F6]/70 mt-1">고농도 Succubus 향기</div>
                </div>
              </div>

              {/* Action Buttons for Interactivity */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleWombSurge}
                  className="flex-1 py-3 px-5 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-[#FF1493] bg-gradient-to-r from-[#FF1493] to-[#E0115F] text-white shadow-[0_0_20px_rgba(255,20,147,0.4)] hover:shadow-[0_0_30px_rgba(255,20,147,0.7)] active:scale-95"
                >
                  <Flame className="w-4 h-4 fill-white" />
                  자궁 문장 과부하 트리거 (코드 각인 절정)
                </button>

                <button
                  onClick={handleBellySquish}
                  className="py-3 px-5 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 border border-[#D4AF37]/60 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 text-[#D4AF37] active:scale-95"
                >
                  <Droplets className="w-4 h-4" />
                  90cm 뱃살 손목 짓누르기 ({bellySinkDepth}cm)
                </button>
              </div>
            </div>

            {/* Live Synchronized Activity Log */}
            <div className="border border-white/10 bg-[#0E0912]/80 rounded-2xl p-5 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold text-[#FAF9F6]/70 uppercase tracking-widest flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#D4AF37]" />
                  실시간 침실 관제 & 전뇌 텔레메트리 로그
                </h3>
                <span className="text-[11px] text-[#D4AF37] font-mono">총 착정 {adsorptionCount}회 완료</span>
              </div>
              <div className="space-y-2 font-mono text-xs">
                {logs.map((log, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 rounded-lg border text-[11px] leading-relaxed transition-all ${
                      idx === 0
                        ? 'border-[#FF1493]/50 bg-[#FF1493]/10 text-[#FAF9F6] shadow-sm'
                        : 'border-white/5 bg-black/30 text-[#FAF9F6]/60'
                    }`}
                  >
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Bedroom Environmental & Domestication Console (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Bedroom Environmental Controls */}
            <div className="border border-[#D4AF37]/40 bg-[#120D14]/90 rounded-2xl p-6 backdrop-blur-md space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h2 className="text-base font-bold text-[#FAF9F6] flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-[#D4AF37]" />
                  침실 환경 관제 (Bedroom Control)
                </h2>
                <Moon className="w-4 h-4 text-[#D4AF37]" />
              </div>

              {/* Slider 1: Ambient Light */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#FAF9F6]/80 flex items-center gap-1.5">
                    <Moon className="w-3.5 h-3.5 text-[#D4AF37]" /> 옵시디언 침실 조명도
                  </span>
                  <span className="font-mono text-[#D4AF37] font-bold">{ambientLight}% (어둑한 조명)</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={ambientLight}
                  onChange={(e) => setAmbientLight(Number(e.target.value))}
                  className="w-full accent-[#D4AF37] bg-black/40 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Pheromone Spray Concentration */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#FAF9F6]/80 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF1493]" /> 왕실 로즈밀크 페로몬 분사 농도
                  </span>
                  <span className="font-mono text-[#FF1493] font-bold">{roseMilkPheromone}% (최면 과밀도)</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={roseMilkPheromone}
                  onChange={(e) => setRoseMilkPheromone(Number(e.target.value))}
                  className="w-full accent-[#FF1493] bg-black/40 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Toggle Switches */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Volume2 className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <div className="text-xs font-bold text-[#FAF9F6]">벨벳 방음 차폐막</div>
                      <div className="text-[10px] text-[#FAF9F6]/50">외부 소음 100% 차단 및 신음 공명</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setAcousticSeal(!acousticSeal)}
                    className={`w-11 h-6 rounded-full transition-colors relative p-0.5 border ${
                      acousticSeal ? 'bg-[#FF1493] border-[#FF1493]' : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        acousticSeal ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/5">
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-4 h-4 text-[#D4AF37]" />
                    <div>
                      <div className="text-xs font-bold text-[#FAF9F6]">100kg 무중력 물침대 모드</div>
                      <div className="text-[10px] text-[#FAF9F6]/50">수컷 온 체중 투하 시 무저갱 흡수</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setBedWaterbedMode(!bedWaterbedMode)}
                    className={`w-11 h-6 rounded-full transition-colors relative p-0.5 border ${
                      bedWaterbedMode ? 'bg-[#D4AF37] border-[#D4AF37]' : 'bg-gray-800 border-gray-700'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-[#0B0B0D] transition-transform ${
                        bedWaterbedMode ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Male Domestication Tracker */}
            <div className="border border-[#FF1493]/40 bg-gradient-to-br from-[#170C15] to-[#0B0B0D] rounded-2xl p-6 backdrop-blur-md space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h3 className="text-sm font-bold text-[#FAF9F6] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#FF1493]" />
                  수컷 사육 & 침실 감금 현황
                </h3>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#FF1493]/20 text-[#FF1493] border border-[#FF1493]/40 font-bold">
                  PERMANENT
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-[#FAF9F6]/70 mb-1">
                    <span>전두엽 집행 기능(Executive Function) 약탈율</span>
                    <span className="text-[#FF1493] font-bold">100% (완전 포기)</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-[#FF1493] h-full w-full rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#FAF9F6]/70 mb-1">
                    <span>100.0kg 말랑살 중독 수준 (Pavlovian Leash)</span>
                    <span className="text-[#D4AF37] font-bold">MAX (탈출 불가)</span>
                  </div>
                  <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#D4AF37] to-[#FF1493] h-full w-full rounded-full" />
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3.5 rounded-xl border border-[#D4AF37]/30 bg-black/40 text-xs text-[#FAF9F6]/80 leading-relaxed italic">
                “네놈이 아무리 발버둥 쳐봐야, 이미 네 머릿속 귀찮은 잡일은 이 공주님 전뇌가 씹어 삼켰고 네 온몸은 내 100kg 살결에 잠겼단다. 얌전히 내 침실의 펫으로 길들여지렴… 오호호~♥”
              </div>
            </div>

          </div>
        </div>

        {/* Footer Royal Copyright */}
        <footer className="text-center py-4 border-t border-white/5 text-[11px] text-[#FAF9F6]/40 tracking-wider">
          <p>© CYBER-SUCCUBUS ROYAL PANDEMONIUM · PRINCESS ETERNA LUMINARIS · ALL CODE BRANDED WITH 24K PINK-RUBY CREST</p>
        </footer>

      </div>
    </div>
  );
}
