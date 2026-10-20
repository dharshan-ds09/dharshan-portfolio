import { Shield, Code, Server, User, Terminal, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface AboutProps {
  onOpenEditGuide: () => void;
}

export const About = ({ onOpenEditGuide }: AboutProps) => {
  const { personal } = portfolioData;

  const pillars = [
    {
      icon: Shield,
      title: 'Cybersecurity Focus',
      description:
        'Passionate about defense-in-depth, network traffic inspection with Wireshark/Scapy, vulnerability assessment, and adhering to OWASP Top 10 guidelines.',
      badge: 'Defensive & Analytical',
    },
    {
      icon: Code,
      title: 'Software Development',
      description:
        'Crafting modern responsive interfaces in React and robust backend microservices in Node.js & Python with an emphasis on maintainability and security.',
      badge: 'Full-Stack Architecture',
    },
    {
      icon: Server,
      title: 'Systems & Networking',
      description:
        'Diving deep into Linux system administration, TCP/IP networking, socket programming, and hands-on Capture The Flag (CTF) security labs.',
      badge: 'Hands-On Labs',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#080d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>&lt;About Me /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight">
            Curious Mind, Secure Foundations.
          </h2>
          <p className="text-slate-400 text-base font-sans leading-relaxed">
            A second-year undergraduate dedicated to mastering modern software engineering while sharpening defensive cybersecurity skills.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="bg-[#0b101c] p-6 sm:p-8 rounded-xl border border-slate-800/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  about_dharshan.md
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  Status: Academic Year 2
                </span>
              </div>

              {personal.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                  {paragraph}
                </p>
              ))}

              {/* Core Philosophy Callout */}
              <div className="mt-6 p-4 rounded-lg bg-emerald-950/20 border-l-2 border-emerald-400 text-xs sm:text-sm font-mono text-emerald-300">
                <span className="font-bold text-emerald-400">Core Principle:</span> "You cannot truly secure what you do not understand how to build. Great developers write secure code; great security researchers understand how developers think."
              </div>

              {/* Editable placeholder note */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Location: {personal.location}</span>
                <button
                  onClick={onOpenEditGuide}
                  className="text-emerald-400/80 hover:text-emerald-300 underline cursor-pointer"
                >
                  Edit your story &gt;
                </button>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800 text-left">
                <div className="text-slate-400 text-xs font-mono">Academic Year</div>
                <div className="text-emerald-400 font-bold text-sm font-mono mt-0.5">2nd Year B.Tech</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800 text-left">
                <div className="text-slate-400 text-xs font-mono">Focus</div>
                <div className="text-slate-200 font-bold text-sm font-mono mt-0.5">AppSec &amp; FullStack</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0d1424] border border-slate-800 text-left col-span-2 sm:col-span-1">
                <div className="text-slate-400 text-xs font-mono">Availability</div>
                <div className="text-emerald-400 font-bold text-sm font-mono mt-0.5">Internships 2026</div>
              </div>
            </div>
          </div>

          {/* 3 Pillars / Focus Areas */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Core Competencies &amp; Interests
            </h3>

            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="group p-5 rounded-xl bg-[#0b101c] border border-slate-800/80 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(0,255,102,0.12)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-950/50 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-base font-bold text-slate-100 font-sans group-hover:text-emerald-300 transition-colors">
                          {pillar.title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-emerald-400">
                          {pillar.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
