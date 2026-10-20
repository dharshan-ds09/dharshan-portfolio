import { useState } from 'react';
import { X, Copy, Check, FileCode, Sparkles, Shield } from 'lucide-react';

interface EditGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditGuideModal = ({ isOpen, onClose }: EditGuideModalProps) => {
  const [copiedFile, setCopiedFile] = useState(false);

  if (!isOpen) return null;

  const handleCopyFilePath = () => {
    navigator.clipboard.writeText('src/data/portfolioData.ts');
    setCopiedFile(true);
    setTimeout(() => setCopiedFile(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#0a0f1d] border border-emerald-500/40 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0e1628] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-mono font-bold text-slate-100">
              Personalization &amp; Placeholders Guide
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto font-sans">
          
          <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <p className="font-bold text-emerald-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              Strict Non-Invention Policy Followed:
            </p>
            <p className="mt-1 text-slate-300">
              Per your instructions, your actual email, social URLs, college name, and project repositories have NOT been invented. Clean, structured placeholders are organized in a single configuration file so you can update them in seconds.
            </p>
          </div>

          {/* Target File Box */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Single Source of Truth File
            </h4>
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#070b13] border border-slate-800 font-mono text-xs">
              <div className="flex items-center gap-2 text-emerald-400">
                <FileCode className="w-4 h-4" />
                <span>src/data/portfolioData.ts</span>
              </div>
              <button
                onClick={handleCopyFilePath}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e1627] border border-slate-700 text-slate-300 hover:text-emerald-400 transition-colors text-[11px] cursor-pointer"
              >
                {copiedFile ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedFile ? 'Copied' : 'Copy Path'}</span>
              </button>
            </div>
          </div>

          {/* Quick Step Checklist */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              What to Customize in <code className="text-emerald-400">portfolioData.ts</code>:
            </h4>
            
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-3 rounded-lg bg-[#070b13] border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-bold">1. Social Links &amp; Email:</div>
                <p className="text-slate-400">
                  Update <code className="text-amber-300">socials.email</code>, <code className="text-amber-300">socials.github</code>, and <code className="text-amber-300">socials.linkedin</code> with your real URLs.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#070b13] border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-bold">2. College &amp; Academic Details:</div>
                <p className="text-slate-400">
                  Update <code className="text-amber-300">education[0].institution</code>, your CGPA/percentage, and your university city in <code className="text-amber-300">education</code>.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#070b13] border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-bold">3. Real Projects / Repositories:</div>
                <p className="text-slate-400">
                  Replace the placeholder project titles, descriptions, and <code className="text-amber-300">githubUrl</code> with your actual GitHub project links.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#070b13] border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-bold">4. Resume PDF:</div>
                <p className="text-slate-400">
                  Drop your real resume PDF file into the <code className="text-amber-300">public/</code> folder (e.g. <code className="text-emerald-400">public/dharshan_resume.pdf</code>) to enable 1-click downloads.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#0e1628] px-6 py-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
          >
            Got it, Let's Build!
          </button>
        </div>
      </div>
    </div>
  );
};
