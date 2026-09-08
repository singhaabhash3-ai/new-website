import { useState, useEffect } from 'react';
import { ECOSYSTEM_NODES } from '../data';
import { EcosystemNode } from '../types';

export default function EcosystemSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeNode, setActiveNode] = useState<EcosystemNode>(ECOSYSTEM_NODES[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);

  // Data flow simulation loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSimulating) {
      timer = setInterval(() => {
        setSimStep((prev) => {
          const next = (prev + 1) % ECOSYSTEM_NODES.length;
          setActiveNode(ECOSYSTEM_NODES[next]);
          return next;
        });
      }, 1200);
    }
    return () => clearInterval(timer);
  }, [isSimulating]);

  const toggleSimulation = () => {
    setIsSimulating(!isSimulating);
  };

  return (
    <section
      id="ecosystem"
      className="w-full py-16 md:py-24 bg-[#051424] relative overflow-hidden border-b border-[#464554]/15"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-[#7bd0ff] font-label-caps text-label-caps uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">hub</span>
            <span>What I Work With</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-[#d4e4fa] tracking-tight">
            Interactive Technology Ecosystem
          </h2>
          <p className="font-body-md text-body-md text-[#c7c4d7]">
            How data flows seamlessly from machine learning models into structured
            querying routines, Python logic layers, and final web application deployment.
          </p>
        </div>

        {/* Node Graph Flow Container */}
        <div className="w-full p-6 md:p-8 bg-[#1c2b3c]/40 backdrop-blur-xl rounded-xl border border-[#464554]/30 shadow-xl flex flex-col gap-8 relative">
          {/* Top Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#464554]/20">
            <span className="font-label-caps text-xs text-[#c0c1ff]">
              ARCHITECTURE TOPOLOGY: 5 INTEGRATED TIERS
            </span>
            <button
              onClick={toggleSimulation}
              className={`font-mono text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer ${
                isSimulating
                  ? 'bg-[#c0c1ff] text-[#1000a9] font-semibold shadow-[0_0_12px_rgba(192,193,255,0.4)]'
                  : 'bg-[#1c2b3c] text-[#7bd0ff] hover:bg-[#273647] border border-[#7bd0ff]/30'
              }`}
            >
              <span className="material-symbols-outlined text-[14px]">
                {isSimulating ? 'pause' : 'play_arrow'}
              </span>
              <span>
                {isSimulating ? 'Simulating Pipeline Flow' : 'Simulate Data Flow'}
              </span>
            </button>
          </div>

          {/* 5 Nodes in a Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center relative">
            {ECOSYSTEM_NODES.map((node, index) => {
              const isSelected = activeNode.id === node.id;
              const isDimmed = hoveredNode !== null && hoveredNode !== node.id;

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setActiveNode(node);
                    setIsSimulating(false);
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-4 rounded-xl flex flex-col items-center text-center gap-2 transition-all duration-300 cursor-pointer shadow-md border ${
                    isSelected
                      ? 'bg-[#273647] border-[#c0c1ff] shadow-[0_0_20px_rgba(192,193,255,0.15)] scale-105'
                      : 'bg-[#122131] border-[#464554]/25 hover:bg-[#273647]/70'
                  } ${isDimmed ? 'opacity-40' : 'opacity-100'}`}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-transform"
                    style={{
                      backgroundColor: `${node.accent}15`,
                      color: node.accent,
                    }}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {node.icon}
                    </span>
                  </div>
                  <span className="font-headline-md text-body-md text-[#d4e4fa] font-semibold">
                    {node.title}
                  </span>
                  <span className="font-label-caps text-[10px] text-[#c7c4d7] uppercase">
                    {node.role}
                  </span>

                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7bd0ff] animate-ping mt-1"></span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Visual Circuit Line Diagram (SVG) */}
          <div className="w-full h-12 hidden md:block relative">
            <svg
              className="w-full h-full text-[#7bd0ff]"
              fill="none"
              viewBox="0 0 1000 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="opacity-30"
                d="M 100 24 L 300 24 L 500 24 L 700 24 L 900 24"
                stroke="currentColor"
                strokeDasharray="6 6"
                strokeWidth="2"
              ></path>
              <circle cx="100" cy="24" fill="#c0c1ff" r="5"></circle>
              <circle cx="300" cy="24" fill="#7bd0ff" r="5"></circle>
              <circle cx="500" cy="24" fill="#8083ff" r="5"></circle>
              <circle cx="700" cy="24" fill="#bdc2ff" r="5"></circle>
              <circle cx="900" cy="24" fill="#7bd0ff" r="5"></circle>
              <path
                className="opacity-60"
                d="M 100 24 L 900 24"
                stroke="url(#lineGradient)"
                strokeLinecap="round"
                strokeWidth="2"
              ></path>
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="100"
                  x2="900"
                  y1="24"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#c0c1ff"></stop>
                  <stop offset="0.5" stopColor="#7bd0ff"></stop>
                  <stop offset="1" stopColor="#bdc2ff"></stop>
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing moving packet if simulating */}
            {isSimulating && (
              <div
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#c0c1ff] shadow-[0_0_16px_#c0c1ff] transition-all duration-700 pointer-events-none"
                style={{
                  left: `${10 + simStep * 20}%`,
                }}
              />
            )}
          </div>

          {/* Active Node Detail Callout Panel */}
          <div className="bg-[#051424] p-5 rounded-xl border border-[#464554]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: `${activeNode.accent}20`,
                  color: activeNode.accent,
                }}
              >
                <span className="material-symbols-outlined text-xl">
                  {activeNode.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-headline-md text-body-md text-[#d4e4fa] font-semibold">
                    {activeNode.title} — {activeNode.role}
                  </span>
                  <span className="font-code-md text-[11px] text-[#7bd0ff] px-2 py-0.5 rounded bg-[#1c2b3c]">
                    TIER ACTIVE
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-[#c7c4d7] mt-1">
                  {activeNode.description}
                </p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="font-label-caps text-[10px] text-[#c7c4d7]">
                    TOOLCHAIN:
                  </span>
                  {activeNode.keyLibraries.map((lib) => (
                    <span
                      key={lib}
                      className="font-code-md text-xs px-2 py-0.5 rounded bg-[#1c2b3c] text-[#d4e4fa] border border-[#464554]/20"
                    >
                      {lib}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-end text-right">
              <span className="font-label-caps text-[10px] text-[#c7c4d7] uppercase">
                PIPELINE LINK
              </span>
              <span className="font-code-md text-xs text-[#c0c1ff] mt-0.5">
                {activeNode.inputsFrom ? `IN: ${activeNode.inputsFrom}` : ''}
              </span>
              <span className="font-code-md text-xs text-[#7bd0ff] mt-0.5">
                {activeNode.outputsTo ? `OUT: ${activeNode.outputsTo}` : ''}
              </span>
            </div>
          </div>

          {/* Pipeline Narrative Callout */}
          <div className="bg-[#010f1f] p-4 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4 border border-[#464554]/20">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#c0c1ff] text-2xl">
                sync_alt
              </span>
              <div className="flex flex-col">
                <span className="font-headline-md text-body-md text-[#d4e4fa] font-medium">
                  Pipeline Architecture
                </span>
                <span className="font-body-sm text-body-sm text-[#c7c4d7]">
                  Mathematical modeling feeds exploratory analytics, transformed
                  through Python logic, backed by SQL databases, and rendered on
                  modern web systems.
                </span>
              </div>
            </div>
            <span className="font-code-md text-code-md text-[#7bd0ff] whitespace-nowrap px-3 py-1 rounded bg-[#7bd0ff]/10 border border-[#7bd0ff]/20">
              ML &rarr; DS &rarr; PY &rarr; SQL &rarr; WEB
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
