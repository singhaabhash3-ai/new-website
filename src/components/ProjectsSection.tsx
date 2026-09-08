import { useState } from 'react';
import { PROJECTS } from '../data';
import { ProjectItem } from '../types';
import ProjectCardCanvas from './ProjectCardCanvas';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
        );

  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 bg-[#0d1c2d]/40 relative border-b border-[#464554]/15"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-1.5 text-[#c0c1ff] font-label-caps text-label-caps uppercase tracking-wider">
              <span className="material-symbols-outlined text-sm">widgets</span>
              <span>Featured Projects</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-[#d4e4fa] tracking-tight">
              Curated Web &amp; Software Explorations
            </h2>
            <p className="font-body-md text-body-md text-[#c7c4d7] max-w-xl">
              Selected engineering architectures and software solutions
              developed to practice scalable implementation.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-label-caps text-label-caps text-[#c7c4d7] px-3 py-1.5 rounded-full bg-[#1c2b3c]/60 border border-[#464554]/20 self-start md:self-auto">
              ACTIVE PIPELINE // 03 MODULES
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 border-b border-[#464554]/20 pb-4 overflow-x-auto">
          {['ALL', 'Web Development', 'Python', 'SQL', 'AI / ML'].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-label-caps text-xs px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#c0c1ff] text-[#1000a9] font-semibold'
                    : 'bg-[#1c2b3c]/40 text-[#c7c4d7] hover:bg-[#1c2b3c] hover:text-[#d4e4fa]'
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* 3 Project Placeholder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;
            const dotColor = isFirst
              ? 'bg-[#c0c1ff]'
              : isSecond
              ? 'bg-[#7bd0ff]'
              : 'bg-[#bdc2ff]';
            const iconColor = isFirst
              ? 'text-[#c0c1ff]/40 group-hover:text-[#c0c1ff]'
              : isSecond
              ? 'text-[#7bd0ff]/40 group-hover:text-[#7bd0ff]'
              : 'text-[#bdc2ff]/40 group-hover:text-[#bdc2ff]';
            const iconName = isFirst
              ? 'code_blocks'
              : isSecond
              ? 'dataset'
              : 'model_training';

            return (
              <div
                key={project.id}
                className="group bg-[#1c2b3c]/60 hover:bg-[#1c2b3c] backdrop-blur-md rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-lg hover:-translate-y-1 border border-[#464554]/25 hover:border-[#c0c1ff]/30"
              >
                <div>
                  {/* Cyber Grid Frame */}
                  <div className="relative h-48 bg-[#010f1f] p-4 flex flex-col justify-between overflow-hidden border-b border-[#464554]/25">
                    {/* Live Animated Canvas in Background */}
                    <ProjectCardCanvas type={project.canvasType} />

                    {/* Radial Dot Pattern */}
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c0c1ff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                    {/* Frame Top Header */}
                    <div className="relative z-10 flex items-center justify-between text-[#c7c4d7] font-code-md text-label-caps">
                      <span>{project.frameNumber}</span>
                      <span className="text-[#c0c1ff] flex items-center gap-1.5 font-medium">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${dotColor} animate-pulse`}
                        ></span>
                        READY
                      </span>
                    </div>

                    {/* Frame Center Icon */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                      <span
                        className={`material-symbols-outlined text-4xl ${iconColor} transition-colors`}
                      >
                        {iconName}
                      </span>
                      <span className="font-code-md text-body-sm text-[#c7c4d7]/70 mt-2 font-medium">
                        SYS_PREVIEW_CANVAS
                      </span>
                    </div>

                    {/* Frame Bottom Info */}
                    <div className="relative z-10 flex items-center justify-between font-label-caps text-[10px] text-[#c7c4d7]/50">
                      <span>{project.stackTag}</span>
                      <span>{project.buildStatus}</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col gap-2">
                    <h3 className="font-headline-md text-headline-md text-[#d4e4fa] font-semibold">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-body-md text-[#c7c4d7]">
                      {project.shortDesc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-[#010f1f] text-[#7bd0ff] border border-[#7bd0ff]/20">
                        {project.primaryTag}
                      </span>
                      <span
                        className={`font-label-caps text-label-caps px-2 py-0.5 rounded bg-[#010f1f] border ${
                          isFirst
                            ? 'text-[#c0c1ff] border-[#c0c1ff]/20'
                            : isSecond
                            ? 'text-[#bdc2ff] border-[#bdc2ff]/20'
                            : 'text-[#c0c1ff] border-[#c0c1ff]/20'
                        }`}
                      >
                        {project.secondaryTag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 mt-4 border-t border-[#464554]/15 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 font-body-sm text-body-sm text-[#c0c1ff] hover:text-[#e1e0ff] transition-colors font-medium cursor-pointer"
                  >
                    <span>View Project &rarr;</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-code-md text-body-sm text-[#c7c4d7] hover:text-[#d4e4fa] transition-colors"
                  >
                    <span>GitHub &rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
