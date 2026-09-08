import { useState } from 'react';
import { PERSONAL_INFO } from '../data';

export default function AboutSection() {
  const [copiedManifest, setCopiedManifest] = useState(false);

  const manifestJson = JSON.stringify(
    {
      student: PERSONAL_INFO.name,
      specialization: 'AI & Data Science',
      university: PERSONAL_INFO.institution,
      semester: PERSONAL_INFO.semester,
      stack_focus: ['Python', 'SQL', 'Web'],
      status: 'Enrolled & Building',
    },
    null,
    2
  );

  const handleCopyManifest = () => {
    navigator.clipboard.writeText(manifestJson);
    setCopiedManifest(true);
    setTimeout(() => setCopiedManifest(false), 2000);
  };

  return (
    <section
      id="about"
      className="w-full py-16 md:py-24 bg-[#0d1c2d]/50 relative border-t border-b border-[#464554]/15"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Student Terminal Identity Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative bg-[#1c2b3c]/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-[#464554]/30 overflow-hidden">
              {/* Ambient gradient highlight */}
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#c0c1ff]/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Terminal Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#464554]/20 bg-[#273647]/30 -mx-6 px-6 -mt-6 pt-4">
                <div className="flex items-center gap-2">
                  <span className="font-label-caps text-label-caps text-[#c0c1ff] uppercase">
                    DEV_ID // SPEC_AI
                  </span>
                </div>
                <span className="font-code-md text-body-sm text-[#7bd0ff] flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-pulse"></span>{' '}
                  VERIFIED
                </span>
              </div>

              {/* Avatar Monogram */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#8083ff] to-[#273647] flex items-center justify-center text-[#d4e4fa] font-headline-lg text-headline-lg font-bold shadow-inner border border-white/10">
                  AS
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-[#d4e4fa] font-semibold">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-[#c7c4d7]">
                    Aspiring AI &amp; Software Engineer
                  </p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="font-code-md text-label-caps text-[#c0c1ff] px-2 py-0.5 bg-[#c0c1ff]/10 rounded border border-[#c0c1ff]/20">
                      B.Tech CSE
                    </span>
                    <span className="font-code-md text-label-caps text-[#7bd0ff] px-2 py-0.5 bg-[#7bd0ff]/10 rounded border border-[#7bd0ff]/20">
                      Sem 3
                    </span>
                  </div>
                </div>
              </div>

              {/* Terminal Manifest Snippet */}
              <div className="relative bg-[#010f1f] p-4 rounded-lg font-code-md text-code-md flex flex-col gap-1 text-[#c7c4d7] shadow-inner border border-[#464554]/30">
                <div className="text-[#c7c4d7]/60 flex items-center justify-between pb-1 border-b border-[#464554]/20">
                  <span>academic_manifest.json</span>
                  <button
                    onClick={handleCopyManifest}
                    className="text-[#c0c1ff] hover:text-white text-[11px] font-mono flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>{copiedManifest ? 'copied!' : 'copy'}</span>
                    <span className="material-symbols-outlined text-[12px]">
                      {copiedManifest ? 'check' : 'content_copy'}
                    </span>
                  </button>
                </div>
                <div className="text-[#d4e4fa] pt-2">
                  <span className="text-[#7bd0ff]">&ldquo;specialization&rdquo;</span>:{' '}
                  <span className="text-[#c0c1ff]">&ldquo;AI &amp; Data Science&rdquo;</span>,
                </div>
                <div className="text-[#d4e4fa]">
                  <span className="text-[#7bd0ff]">&ldquo;university&rdquo;</span>:{' '}
                  <span className="text-[#c0c1ff]">&ldquo;REVA University&rdquo;</span>,
                </div>
                <div className="text-[#d4e4fa]">
                  <span className="text-[#7bd0ff]">&ldquo;semester&rdquo;</span>:{' '}
                  <span className="text-[#c0c1ff]">&ldquo;3rd Semester&rdquo;</span>,
                </div>
                <div className="text-[#d4e4fa]">
                  <span className="text-[#7bd0ff]">&ldquo;stack_focus&rdquo;</span>: [
                  <span className="text-[#c7c4d7]">&ldquo;Python&rdquo;</span>,{' '}
                  <span className="text-[#c7c4d7]">&ldquo;SQL&rdquo;</span>,{' '}
                  <span className="text-[#c7c4d7]">&ldquo;Web&rdquo;</span>]
                </div>
              </div>

              {/* Circuit Accents Visual */}
              <div className="mt-4 flex items-center justify-between text-[#c7c4d7]/50 font-code-md text-[10px] pt-2 border-t border-[#464554]/15">
                <span>CORE_NODE // 12.0.4</span>
                <span>ENGINE: REVA_CSE_DS</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Info Cards */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#1c2b3c] text-[#c0c1ff] font-label-caps text-label-caps uppercase tracking-wider border border-[#464554]/25">
              <span className="material-symbols-outlined text-sm">terminal</span>
              <span>About Me</span>
            </div>

            <h2 className="font-headline-xl text-headline-xl text-[#d4e4fa] tracking-tight">
              Passionate about engineering intelligent, data-driven systems.
            </h2>

            <div className="p-5 rounded-xl bg-[#1c2b3c]/40 backdrop-blur-md border border-[#464554]/25 shadow-sm">
              <p className="font-body-lg text-body-lg text-[#c7c4d7] leading-relaxed">
                &ldquo;{PERSONAL_INFO.bio}&rdquo;
              </p>
            </div>

            {/* 3 Small Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#1c2b3c]/60 backdrop-blur-sm p-4 rounded-xl border border-[#464554]/25 flex flex-col gap-1 transition-all hover:bg-[#1c2b3c] hover:border-[#c0c1ff]/30 shadow-sm">
                <span className="material-symbols-outlined text-[#c0c1ff] text-2xl">
                  psychology
                </span>
                <span className="font-label-caps text-label-caps text-[#c7c4d7] uppercase mt-1">
                  Education
                </span>
                <span className="font-headline-md text-body-md text-[#d4e4fa] font-medium leading-snug">
                  B.Tech CSE — AI &amp; Data Science
                </span>
              </div>

              <div className="bg-[#1c2b3c]/60 backdrop-blur-sm p-4 rounded-xl border border-[#464554]/25 flex flex-col gap-1 transition-all hover:bg-[#1c2b3c] hover:border-[#7bd0ff]/30 shadow-sm">
                <span className="material-symbols-outlined text-[#7bd0ff] text-2xl">
                  school
                </span>
                <span className="font-label-caps text-label-caps text-[#c7c4d7] uppercase mt-1">
                  University
                </span>
                <span className="font-headline-md text-body-md text-[#d4e4fa] font-medium leading-snug">
                  REVA University
                </span>
              </div>

              <div className="bg-[#1c2b3c]/60 backdrop-blur-sm p-4 rounded-xl border border-[#464554]/25 flex flex-col gap-1 transition-all hover:bg-[#1c2b3c] hover:border-[#bdc2ff]/30 shadow-sm">
                <span className="material-symbols-outlined text-[#bdc2ff] text-2xl">
                  timeline
                </span>
                <span className="font-label-caps text-label-caps text-[#c7c4d7] uppercase mt-1">
                  Current Semester
                </span>
                <span className="font-headline-md text-body-md text-[#d4e4fa] font-medium leading-snug">
                  3rd Semester
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
