import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface EducationProps {
  onOpenEditGuide: () => void;
}

export const Education = ({ onOpenEditGuide }: EducationProps) => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="py-20 bg-[#070b13] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>&lt;Academic Milestones /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight">
            Education &amp; Continuous Learning
          </h2>
          <p className="text-slate-400 text-base font-sans leading-relaxed">
            Academic foundations, key computer science coursework, and industry cybersecurity certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Education Timeline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Academic Degrees &amp; Coursework
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l border-emerald-500/20 space-y-8">
              {education.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080c14] border-2 border-emerald-400 shadow-[0_0_12px_rgba(0,255,102,0.5)] group-hover:scale-125 transition-transform" />

                  {/* Card Content */}
                  <div className="p-6 rounded-xl bg-[#0b101c] border border-slate-800/80 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(0,255,102,0.1)] transition-all">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400">
                        {item.status}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-100 font-sans mt-2">
                      {item.degree}
                    </h4>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-sans text-slate-400 mt-1">
                      <span className="text-emerald-300 font-mono font-medium">
                        {item.institution}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>

                    {item.grade && (
                      <div className="mt-3 inline-block text-xs font-mono px-2.5 py-1 rounded bg-[#070b13] border border-slate-800 text-slate-300">
                        Performance: <span className="text-emerald-400 font-bold">{item.grade}</span>
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="mt-4 space-y-1.5">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Relevant Coursework */}
                    {item.coursework && item.coursework.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-slate-800/80">
                        <div className="text-[11px] font-mono uppercase text-slate-400 mb-2">
                          Key Relevant Coursework:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#070b13] text-slate-300 border border-slate-800"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Continuous Learning */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              Certifications &amp; Security Labs
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0b101c] border border-slate-800 hover:border-emerald-500/40 transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                            cert.status === 'Completed'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : cert.status === 'In Progress'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                          }`}
                        >
                          {cert.status}
                        </span>
                        {cert.date && (
                          <span className="text-[11px] font-mono text-slate-500">
                            {cert.date}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-100 font-sans pt-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-emerald-400/90">
                        {cert.issuer}
                      </p>
                    </div>

                    <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  </div>
                </div>
              ))}

              {/* CTF Practice Highlight Box */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-[#0c1322] to-[#080d17] border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    CTF &amp; Lab Practice
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Regularly solving web exploitation, network enumeration, and privilege escalation rooms on platforms like TryHackMe, PicoCTF, and Hack The Box.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span>Profile handles configured in config file</span>
                </div>
              </div>

              {/* Edit Guidance Note */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Update College, Marks &amp; Certs</span>
                <button
                  onClick={onOpenEditGuide}
                  className="text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
                >
                  Configure education &gt;
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
