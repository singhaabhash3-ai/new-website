import { PERSONAL_INFO } from '../data';

interface FooterProps {
  onOpenProfileModal?: () => void;
}

export default function Footer({ onOpenProfileModal }: FooterProps) {
  return (
    <>
      {/* SECTION 9: FOOTER IN-CONTENT RECAP */}
      <section className="w-full py-8 bg-[#010f1f] border-t border-[#464554]/15">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-headline-md text-headline-md text-[#d4e4fa] font-semibold">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-label-caps text-label-caps text-[#c7c4d7]">
              AI &amp; Data Science • Python • SQL • Web Development
            </span>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              className="font-code-md text-body-sm text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              Email: {PERSONAL_INFO.email}
            </a>
            <div className="flex items-center gap-3">
              <a
                className="font-code-md text-body-sm text-[#c7c4d7] hover:text-[#7bd0ff] transition-colors"
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <span className="text-[#464554]">&bull;</span>
              <a
                className="font-code-md text-body-sm text-[#c7c4d7] hover:text-[#7bd0ff] transition-colors"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER: OBSIDIAN ENGINE DESIGN SYSTEM */}
      <footer className="w-full bg-[#010f1f] border-t border-[#464554]/20 mt-auto">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2">
                <span className="font-headline-md text-headline-md text-[#d4e4fa] font-semibold">
                  {PERSONAL_INFO.name}
                </span>
                <button
                  onClick={onOpenProfileModal}
                  className="font-label-caps text-label-caps text-[#c7c4d7] px-2 py-0.5 rounded bg-[#122131] border border-[#464554]/25 uppercase hover:text-white hover:border-[#c0c1ff]/40 transition-colors cursor-pointer"
                  title="View Student Profile"
                >
                  AI ARCHITECTURE
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-[#c7c4d7]">
                Engineering scalable machine learning systems &amp; refined
                software platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                className="font-code-md text-code-md text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors flex items-center gap-2"
                href={`mailto:${PERSONAL_INFO.email}`}
              >
                <span className="material-symbols-outlined text-base">
                  mail
                </span>
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-[#122131] flex items-center justify-center text-[#c7c4d7] hover:text-[#d4e4fa] hover:bg-[#1c2b3c] transition-all border border-[#464554]/25 cursor-pointer"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    hub
                  </span>
                </a>
                <a
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-lg bg-[#122131] flex items-center justify-center text-[#c7c4d7] hover:text-[#d4e4fa] hover:bg-[#1c2b3c] transition-all border border-[#464554]/25 cursor-pointer"
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    terminal
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#464554]/15 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span className="font-body-sm text-body-sm text-[#c7c4d7]">
              &copy; 2026 {PERSONAL_INFO.name}. All rights reserved.
            </span>
            <span className="font-label-caps text-label-caps text-[#c7c4d7] tracking-wider uppercase">
              Obsidian Engine Design System
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
