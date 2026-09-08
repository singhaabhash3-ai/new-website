import { useState } from 'react';
import { TRAJECTORY_FOCUS } from '../data';

export default function TrajectorySection() {
  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);

  return (
    <section
      id="focus"
      className="w-full py-16 md:py-24 bg-[#051424] relative border-b border-[#464554]/15"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-1.5 text-[#7bd0ff] font-label-caps text-label-caps uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">radar</span>
            <span>Trajectory</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-[#d4e4fa] tracking-tight">
            Currently Learning &amp; Building
          </h2>
          <p className="font-body-md text-body-md text-[#c7c4d7] max-w-xl">
            Active technical focus areas shaping my day-to-day study, lab
            sessions, and implementation projects.
          </p>
        </div>

        {/* 5 Exact Structured Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {TRAJECTORY_FOCUS.map((focus) => {
            const isSelected = selectedFocus === focus.id;

            return (
              <div
                key={focus.id}
                onClick={() =>
                  setSelectedFocus(isSelected ? null : focus.id)
                }
                className={`group bg-[#1c2b3c]/50 hover:bg-[#1c2b3c]/80 backdrop-blur-md p-5 rounded-xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md cursor-pointer ${
                  isSelected
                    ? 'border-[#c0c1ff] bg-[#1c2b3c]'
                    : 'border-[#464554]/25'
                }`}
              >
                <div className="flex flex-col gap-2.5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: `${focus.accentColor}15`,
                      color: focus.accentColor,
                    }}
                  >
                    <span className="material-symbols-outlined text-xl">
                      {focus.icon}
                    </span>
                  </div>

                  <h3 className="font-headline-md text-body-lg text-[#d4e4fa] font-semibold pt-1">
                    {focus.title}
                  </h3>

                  <p className="font-body-sm text-body-sm text-[#c7c4d7] leading-relaxed">
                    {focus.description}
                  </p>

                  {/* Detail on expand or select */}
                  {isSelected && (
                    <div className="mt-2 pt-2 border-t border-[#464554]/20 text-[11px] text-[#7bd0ff] font-mono">
                      <span>{focus.currentMilestone}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-6 mt-auto">
                  <span
                    className="font-code-md text-[11px] font-medium"
                    style={{ color: focus.accentColor }}
                  >
                    {focus.tag}
                  </span>
                  <span className="text-[10px] text-[#c7c4d7]/60 font-mono">
                    {isSelected ? 'ACTIVE' : 'EXPAND'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
