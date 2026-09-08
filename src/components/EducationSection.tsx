export default function EducationSection() {
  const coursework = [
    'AI / ML Core',
    'Data Structures & Algorithms',
    'Discrete Mathematics',
    'Relational Databases (SQL)',
    'Object-Oriented Programming (Python)',
    'Computer Organization & Architecture',
    'Probability & Statistics for DS',
  ];

  return (
    <section
      id="education"
      className="w-full py-16 md:py-24 bg-[#0d1c2d]/30 relative border-b border-[#464554]/15"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-1.5 text-[#c0c1ff] font-label-caps text-label-caps uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">school</span>
            <span>Academic Milestones</span>
          </div>
          <h2 className="font-headline-xl text-headline-xl text-[#d4e4fa] tracking-tight">
            Education Timeline
          </h2>
          <p className="font-body-md text-body-md text-[#c7c4d7] max-w-xl">
            Formal university foundations in algorithmic science, computational
            mathematics, and intelligent automation.
          </p>
        </div>

        {/* Minimalist Clean Timeline Container */}
        <div className="max-w-3xl relative pl-8 md:pl-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-[#273647]"></div>

          {/* Node Item */}
          <div className="relative flex items-start gap-4">
            {/* Pulse Dot */}
            <div className="absolute -left-8 md:-left-10 top-1 flex items-center justify-center">
              <span className="relative flex h-7 w-7">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c0c1ff] opacity-30"></span>
                <span className="relative inline-flex rounded-full h-7 w-7 bg-[#273647] items-center justify-center shadow-md border border-[#c0c1ff]/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c0c1ff]"></span>
                </span>
              </span>
            </div>

            {/* Academic Card */}
            <div className="w-full bg-[#1c2b3c]/60 backdrop-blur-md p-6 md:p-8 rounded-xl border border-[#464554]/25 flex flex-col gap-3 shadow-md hover:border-[#c0c1ff]/30 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-label-caps text-label-caps text-[#c0c1ff] uppercase px-2.5 py-1 rounded bg-[#c0c1ff]/10 border border-[#c0c1ff]/20">
                  Undergraduate Degree
                </span>
                <div className="flex items-center gap-1.5 text-[#7bd0ff] font-code-md text-body-sm">
                  <span className="w-2 h-2 rounded-full bg-[#7bd0ff] animate-pulse"></span>
                  <span>Currently in 3rd Semester</span>
                </div>
              </div>

              <h3 className="font-headline-lg text-headline-lg text-[#d4e4fa] pt-1 font-semibold">
                B.Tech — Computer Science &amp; Engineering
              </h3>

              <p className="font-body-md text-body-md text-[#7bd0ff] font-medium">
                Specialization: Artificial Intelligence &amp; Data Science
              </p>

              <div className="flex items-center gap-2 pt-1 text-[#c7c4d7]">
                <span className="material-symbols-outlined text-lg text-[#c0c1ff]">
                  location_city
                </span>
                <span className="font-body-md text-body-md text-[#d4e4fa]">
                  REVA University, Bangalore
                </span>
              </div>

              {/* Coursework Modules */}
              <div className="pt-4 mt-2 border-t border-[#464554]/20">
                <span className="font-label-caps text-xs text-[#c7c4d7] block mb-2.5 uppercase tracking-wider">
                  Foundational Syllabi &amp; Technical Coursework
                </span>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="font-label-caps text-label-caps px-2.5 py-1 rounded bg-[#010f1f] text-[#c7c4d7] border border-[#464554]/20 hover:text-[#d4e4fa] hover:border-[#c0c1ff]/30 transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
