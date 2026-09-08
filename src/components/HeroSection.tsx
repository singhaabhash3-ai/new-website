import { useState } from 'react';
import HeroShader from './HeroShader';
import { PERSONAL_INFO } from '../data';

interface HeroSectionProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export default function HeroSection({
  onScrollToProjects,
  onScrollToContact,
}: HeroSectionProps) {
  const terminalCommands = [
    'python3 -m pipeline.init',
    'python3 evaluate_model.py --weights latest',
    'sql -h db.reva.internal -u aabhash --status',
    'npm run dev -- --host 0.0.0.0',
  ];

  const [commandIndex, setCommandIndex] = useState(0);

  const cycleCommand = () => {
    setCommandIndex((prev) => (prev + 1) % terminalCommands.length);
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#051424] flex flex-col justify-center min-h-[840px] py-16 md:py-24"
    >
      {/* WebGL Animated Constellation Shader Canvas */}
      <HeroShader />

      {/* Atmospheric Vignette and Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051424]/30 via-[#051424]/80 to-[#051424] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 md:px-8 flex flex-col items-start gap-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c2b3c]/70 backdrop-blur-md shadow-sm border border-[#464554]/20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7bd0ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7bd0ff]"></span>
          </span>
          <span className="font-label-caps text-label-caps text-[#d4e4fa] uppercase tracking-wider">
            B.Tech CSE • AI &amp; Data Science • REVA University
          </span>
        </div>

        {/* Title & Headline */}
        <div className="flex flex-col gap-2 max-w-3xl">
          <h1 className="font-display-hero text-display-hero text-[#d4e4fa] tracking-tight">
            {PERSONAL_INFO.name}
          </h1>
          <p className="font-headline-xl text-headline-xl bg-gradient-to-r from-[#c0c1ff] via-[#7bd0ff] to-[#e1e0ff] bg-clip-text text-transparent tracking-tight">
            {PERSONAL_INFO.role}
          </p>
        </div>

        {/* Supporting Statement */}
        <p className="font-body-lg text-body-lg text-[#c7c4d7] max-w-2xl leading-relaxed">
          {PERSONAL_INFO.headline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            onClick={onScrollToProjects}
            className="inline-flex items-center justify-center gap-2 font-headline-md text-body-md bg-[#c0c1ff] text-[#1000a9] hover:bg-[#8083ff] hover:text-[#0d0096] px-6 py-3 rounded-lg transition-all duration-300 shadow-[0_0_24px_rgba(192,193,255,0.25)] hover:shadow-[0_0_32px_rgba(192,193,255,0.45)] hover:-translate-y-0.5 font-medium cursor-pointer"
          >
            <span>View My Projects</span>
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>

          <button
            onClick={onScrollToContact}
            className="inline-flex items-center justify-center gap-2 font-headline-md text-body-md bg-[#1c2b3c]/60 backdrop-blur-md text-[#d4e4fa] hover:bg-[#273647] border border-[#464554]/25 px-6 py-3 rounded-lg transition-all duration-300 shadow-sm hover:-translate-y-0.5 font-medium cursor-pointer"
          >
            <span>Contact Me</span>
            <span className="material-symbols-outlined text-[18px]">mail</span>
          </button>
        </div>

        {/* Terminal Status Bar Strip */}
        <div className="w-full mt-8 p-4 rounded-xl bg-[#010f1f]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 border border-[#464554]/20 shadow-inner">
          <div
            onClick={cycleCommand}
            className="flex items-center gap-3 cursor-pointer group"
            title="Click to toggle terminal process"
          >
            <div className="flex items-center gap-1.5 px-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#273647] group-hover:bg-[#ffb4ab] transition-colors"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#273647] group-hover:bg-[#7bd0ff] transition-colors"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#273647] group-hover:bg-[#c0c1ff] transition-colors"></span>
            </div>
            <span className="font-code-md text-code-md text-[#7bd0ff] tracking-tight flex items-center gap-1.5">
              <span className="text-[#c7c4d7] font-bold">$</span>
              <span>{terminalCommands[commandIndex]}</span>
              <span className="inline-block w-2 h-4 bg-[#7bd0ff] animate-pulse ml-0.5"></span>
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5">
              <span className="font-label-caps text-label-caps text-[#c7c4d7]">
                INSTITUTION:
              </span>
              <span className="font-code-md text-body-sm text-[#d4e4fa]">
                REVA UNIV
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-label-caps text-label-caps text-[#c7c4d7]">
                SEMESTER:
              </span>
              <span className="font-code-md text-body-sm text-[#c0c1ff] font-semibold">
                03
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-label-caps text-label-caps text-[#c7c4d7]">
                ENV:
              </span>
              <span className="font-code-md text-body-sm text-[#7bd0ff] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-ping"></span>
                ACTIVE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
