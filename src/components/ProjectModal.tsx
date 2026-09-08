import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#122131] border border-[#464554]/40 rounded-xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 left-1/4 w-80 h-32 bg-[#c0c1ff]/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#c7c4d7] hover:text-white p-1.5 rounded-lg bg-[#1c2b3c] hover:bg-[#273647] cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Header Badges */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-code-md text-xs text-[#7bd0ff] px-2.5 py-1 rounded bg-[#1c2b3c] border border-[#7bd0ff]/30">
            {project.frameNumber}
          </span>
          <span className="font-label-caps text-xs text-[#c0c1ff] px-2.5 py-1 rounded bg-[#010f1f]">
            {project.stackTag}
          </span>
          <span className="font-code-md text-xs text-[#7bd0ff] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-pulse"></span>
            {project.buildStatus}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="font-headline-lg text-[#d4e4fa] mb-2 font-semibold">
          {project.title}
        </h3>

        {/* Full Description */}
        <p className="font-body-md text-[#c7c4d7] mb-6 leading-relaxed">
          {project.fullDesc}
        </p>

        {/* Architecture Overview */}
        <div className="bg-[#051424] p-4 rounded-xl border border-[#464554]/30 mb-6">
          <h4 className="font-label-caps text-xs text-[#c0c1ff] uppercase tracking-wider mb-2">
            Architecture Blueprint
          </h4>
          <p className="font-body-sm text-[#d4e4fa] mb-4">
            {project.architectureDetails.overview}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.architectureDetails.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-[#1c2b3c]/60 p-3 rounded-lg border border-[#464554]/20 flex flex-col"
              >
                <span className="font-label-caps text-[10px] text-[#c7c4d7] uppercase">
                  {metric.label}
                </span>
                <span className="font-code-md text-sm text-[#7bd0ff] font-semibold mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Modules */}
        <div className="mb-6">
          <h4 className="font-label-caps text-xs text-[#c0c1ff] uppercase tracking-wider mb-2.5">
            Key Engineering Modules
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {project.architectureDetails.keyModules.map((mod, i) => (
              <div
                key={i}
                className="p-2.5 rounded-lg bg-[#1c2b3c]/40 text-xs font-mono text-[#d4e4fa] border border-[#464554]/20 flex items-center gap-1.5"
              >
                <span className="text-[#c0c1ff]">&bull;</span>
                <span>{mod}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#464554]/25">
          <div className="flex items-center gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-label-caps text-xs px-2.5 py-1 rounded bg-[#010f1f] text-[#c7c4d7]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-code-md text-xs px-4 py-2 rounded-lg bg-[#1c2b3c] hover:bg-[#273647] text-[#d4e4fa] transition-colors border border-[#464554]/30"
            >
              <span className="material-symbols-outlined text-[16px]">
                terminal
              </span>
              <span>Source Repository</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#c0c1ff] text-[#1000a9] hover:bg-[#8083ff] text-xs font-semibold cursor-pointer transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
