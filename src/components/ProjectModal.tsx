import { X, ExternalLink, Shield, CheckCircle, Layers } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenEditGuide: () => void;
}

export const ProjectModal = ({
  project,
  onClose,
  onOpenEditGuide,
}: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0b101c] border border-emerald-500/40 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0e1628] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
              {project.category} &bull; {project.status}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Title & Tagline */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans">
              {project.title}
            </h3>
            <p className="text-sm font-sans text-emerald-400/90 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Overview &amp; Purpose
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed font-sans bg-[#070b13] p-3.5 rounded-lg border border-slate-800/80">
              {project.description}
            </p>
          </div>

          {/* Key Security & Engineering Features */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Key Features &amp; Implementation Details
            </h4>
            <ul className="space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#0e1628] border border-slate-700 text-xs font-mono text-emerald-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder Notice */}
          <div className="p-3.5 rounded-lg bg-emerald-950/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 flex items-start justify-between gap-4">
            <div>
              <span className="font-bold text-emerald-400">Customization Note:</span> This is a structured template placeholder. You can replace the repository URL, description, and details in <code className="text-amber-300">src/data/portfolioData.ts</code>.
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenEditGuide();
              }}
              className="text-emerald-400 underline hover:text-emerald-300 shrink-0 cursor-pointer"
            >
              How to edit &gt;
            </button>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="bg-[#0e1628] px-6 py-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#070b13] border border-slate-700 hover:border-emerald-400 text-slate-200 text-xs font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-emerald-400" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 text-xs font-mono transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 text-slate-950" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-mono bg-slate-800 text-slate-300 hover:text-slate-100 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
