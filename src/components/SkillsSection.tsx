import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data';
import { SkillCategory } from '../types';

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<SkillCategory | null>(null);

  return (
    <section
      id="skills"
      className="w-full py-16 md:py-24 bg-[#051424] relative border-b border-[#464554]/15"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-1.5 text-[#7bd0ff] font-label-caps text-label-caps uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">memory</span>
              <span>Skill Inventory</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#d4e4fa] tracking-tight">
              Targeted Technical Capabilities
            </h2>
            <p className="font-body-md text-body-md text-[#c7c4d7] max-w-xl">
              Core foundations calibrated around intelligence pipelines,
              high-efficiency scripting, relational querying, and interactive
              interfaces.
            </p>
          </div>

          <div className="font-code-md text-code-md text-[#c7c4d7]/80 px-3 py-1.5 rounded-lg bg-[#1c2b3c]/40 border border-[#464554]/20 self-start md:self-auto">
            CATEGORIES: 04 // ACTIVE STACK
          </div>
        </div>

        {/* 4 Explicit Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILL_CATEGORIES.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(skill)}
              className="group relative bg-[#1c2b3c]/50 hover:bg-[#1c2b3c]/90 backdrop-blur-md p-6 rounded-xl border border-[#464554]/25 hover:border-[#c0c1ff]/30 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md cursor-pointer"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-lg bg-[#c0c1ff]/10 flex items-center justify-center text-[#c0c1ff] group-hover:scale-105 transition-transform border border-white/5">
                    <span className="material-symbols-outlined text-2xl">
                      {skill.icon}
                    </span>
                  </div>
                  <span className="font-label-caps text-label-caps text-[#c0c1ff] px-2 py-0.5 rounded bg-[#c0c1ff]/10 border border-[#c0c1ff]/20">
                    {skill.badge}
                  </span>
                </div>

                <h3 className="font-headline-md text-headline-md text-[#d4e4fa] pt-2">
                  {skill.title}
                </h3>
                <p className="font-body-sm text-body-sm text-[#c7c4d7] line-clamp-3">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label-caps text-label-caps px-2 py-1 rounded bg-[#010f1f] text-[#c7c4d7] border border-[#464554]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Minimal indicator meter */}
              <div className="pt-6 mt-4 border-t border-[#464554]/15">
                <div className="flex items-center justify-between mb-1.5 text-[#c7c4d7] font-label-caps text-label-caps">
                  <span>{skill.meterLabel}</span>
                  <span className="font-code-md text-[#c0c1ff]">
                    {skill.meterStatus}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#010f1f] rounded-full overflow-hidden flex gap-1 p-0.5">
                  <div className="h-full w-1/3 bg-[#c0c1ff] rounded-full"></div>
                  <div className="h-full w-1/3 bg-[#c0c1ff] rounded-full"></div>
                  <div className="h-full w-1/3 bg-[#c0c1ff]/30 rounded-full"></div>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-[11px] font-mono text-[#7bd0ff] group-hover:underline flex items-center justify-end gap-1">
                    <span>Inspect scope</span>
                    <span className="material-symbols-outlined text-[12px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#122131] border border-[#464554]/40 rounded-xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-[#c7c4d7] hover:text-white p-1 rounded-lg bg-[#1c2b3c] hover:bg-[#273647] cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-[#c0c1ff]/10 flex items-center justify-center text-[#c0c1ff]">
                <span className="material-symbols-outlined text-2xl">
                  {selectedSkill.icon}
                </span>
              </div>
              <div>
                <span className="font-label-caps text-[11px] text-[#7bd0ff] uppercase">
                  {selectedSkill.badge} // DOMAIN KNOWLEDGE
                </span>
                <h3 className="font-headline-lg text-[#d4e4fa]">
                  {selectedSkill.title}
                </h3>
              </div>
            </div>

            <p className="font-body-md text-[#c7c4d7] mb-5">
              {selectedSkill.description}
            </p>

            <div className="mb-5">
              <h4 className="font-label-caps text-xs text-[#c0c1ff] uppercase tracking-wider mb-2.5">
                Core Syllabi &amp; Implementation Topics
              </h4>
              <ul className="space-y-2">
                {selectedSkill.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-[#d4e4fa] bg-[#010f1f]/80 p-2.5 rounded-lg border border-[#464554]/25"
                  >
                    <span className="text-[#7bd0ff] font-mono font-bold">
                      &gt;
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#464554]/20 text-xs font-mono text-[#c7c4d7]">
              <span>STATUS: {selectedSkill.meterStatus}</span>
              <button
                onClick={() => setSelectedSkill(null)}
                className="px-4 py-1.5 rounded bg-[#1c2b3c] hover:bg-[#273647] text-white cursor-pointer font-sans"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
