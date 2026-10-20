import { 
  Shield, 
  Terminal, 
  ArrowRight, 
  Download, 
  Mail, 
  Cpu, 
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onToggleTerminal: () => void;
  onOpenEditGuide: () => void;
}

export const Hero = ({ onToggleTerminal, onOpenEditGuide }: HeroProps) => {
  const { personal, socials } = portfolioData;

  const handleDownloadResume = () => {
    const resumeText = `=====================================================
${personal.name} - Resume Placeholder
${personal.role} | ${personal.subRole}
Contact: ${socials.email}
Location: ${personal.location}
=====================================================

To replace this placeholder with your actual PDF resume:
1. Place your resume PDF in the /public folder (e.g. /public/resume.pdf).
2. Update the resume link in src/data/portfolioData.ts.
3. Your visitors will be able to download your real resume!
=====================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dharshan_Resume_Placeholder.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background cyber grid & gradient glows */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-600/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Beacon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-[0_0_15px_rgba(0,255,102,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span>2nd-Year B.Tech &bull; {personal.status}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 font-sans leading-tight">
                Securing Systems. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400">
                  Engineering Resilient Code.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-mono text-emerald-400/90 flex items-center gap-2 pt-1">
                <span>&gt;</span>
                <span>{personal.name}</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400 text-sm sm:text-base font-normal">
                  {personal.subRole}
                </span>
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-sans">
              {personal.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-mono font-semibold text-sm hover:bg-emerald-400 transition-all duration-200 shadow-[0_0_20px_rgba(0,255,102,0.3)] hover:shadow-[0_0_25px_rgba(0,255,102,0.5)] cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0e1526] text-emerald-400 font-mono font-medium text-sm border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/30 transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={handleDownloadResume}
                title="Download editable resume placeholder"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-900/80 text-slate-300 font-mono text-sm border border-slate-800 hover:border-slate-700 hover:text-slate-100 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Resume (Placeholder)</span>
              </button>
            </div>

            {/* Quick Links & Social Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider text-[11px]">Connect:</span>
              
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0d1424] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0d1424] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              {socials.tryhackme && (
                <a
                  href={socials.tryhackme}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0d1424] border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>TryHackMe</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview Box */}
          <div className="lg:col-span-5">
            <div className="relative group rounded-xl bg-[#0b101c] border border-emerald-500/30 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(0,255,102,0.15)]">
              
              {/* Terminal Window Header */}
              <div className="bg-[#0e1627] px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">dharshan@cyber-node:~</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                    B.Tech Y2
                  </span>
                </div>
              </div>

              {/* Terminal Body Content */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-3 text-left">
                <div className="text-slate-400">
                  <span className="text-emerald-400 font-bold">$</span> cat dharshan_profile.json
                </div>

                <div className="bg-[#080d17] p-3.5 rounded-lg border border-slate-800/80 text-slate-300 space-y-1.5 text-xs font-mono">
                  <p>
                    <span className="text-emerald-400">"candidate"</span>: <span className="text-amber-300">"{personal.name}"</span>,
                  </p>
                  <p>
                    <span className="text-emerald-400">"academic_year"</span>: <span className="text-amber-300">"2nd Year B.Tech (2024-2028)"</span>,
                  </p>
                  <p>
                    <span className="text-emerald-400">"primary_interests"</span>: [
                  </p>
                  <p className="pl-4 text-emerald-300">
                    "Cybersecurity &amp; Threat Analysis",<br />
                    "Network Forensics &amp; Packet Analysis",<br />
                    "Full-Stack Web Development (React / Node.js)",<br />
                    "Secure Software Engineering"
                  </p>
                  <p className="text-slate-300">],</p>
                  <p>
                    <span className="text-emerald-400">"security_mindset"</span>: <span className="text-teal-300">"Defense-in-depth"</span>,
                  </p>
                  <p>
                    <span className="text-emerald-400">"current_status"</span>: <span className="text-emerald-400">"Active Student &amp; Explorer"</span>
                  </p>
                </div>

                {/* Quick Diagnostics */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-[#0e1628] border border-slate-800 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">CYBER FOCUS</div>
                      <div className="text-xs font-bold text-slate-200">OWASP &amp; Networks</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0e1628] border border-slate-800 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[10px] text-slate-400">DEV STACK</div>
                      <div className="text-xs font-bold text-slate-200">TypeScript &bull; Python</div>
                    </div>
                  </div>
                </div>

                {/* Terminal Actions */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
                  <button
                    onClick={onToggleTerminal}
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-mono cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Launch interactive CLI console &gt;</span>
                  </button>

                  <button
                    onClick={onOpenEditGuide}
                    className="text-[11px] text-slate-400 hover:text-slate-200 underline font-mono cursor-pointer"
                  >
                    Edit placeholders
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
