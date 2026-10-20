import { useState } from 'react';
import { 
  FolderGit2, 
  Shield, 
  Code, 
  Terminal, 
  ExternalLink, 
  Eye, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onOpenEditGuide: () => void;
}

export const Projects = ({ onOpenEditGuide }: ProjectsProps) => {
  const { projects } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'cybersecurity' | 'software' | 'tools'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'all') return true;
    return project.category === selectedFilter;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'cybersecurity':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'software':
        return <Code className="w-4 h-4 text-emerald-400" />;
      case 'tools':
      default:
        return <Terminal className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#080d16] relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>&lt;Featured Work /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight">
            Projects &amp; Security Labs
          </h2>
          <p className="text-slate-400 text-base font-sans leading-relaxed">
            Practical implementations bridging defensive cybersecurity tooling and full-stack software development.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                : 'bg-[#0c121e] text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Work ({projects.length})
          </button>
          <button
            onClick={() => setSelectedFilter('cybersecurity')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
              selectedFilter === 'cybersecurity'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                : 'bg-[#0c121e] text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Cybersecurity</span>
          </button>
          <button
            onClick={() => setSelectedFilter('software')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
              selectedFilter === 'software'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                : 'bg-[#0c121e] text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Software Dev</span>
          </button>
          <button
            onClick={() => setSelectedFilter('tools')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
              selectedFilter === 'tools'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                : 'bg-[#0c121e] text-slate-300 border border-slate-800 hover:border-slate-700'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Tools &amp; Scripts</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl bg-[#0b101c] border border-slate-800/80 hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(0,255,102,0.15)] transition-all duration-300 overflow-hidden text-left"
            >
              {/* Card Header & Content */}
              <div className="p-6 space-y-4">
                
                {/* Meta Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0e1628] border border-slate-800 text-[11px] font-mono text-emerald-400">
                    {getCategoryIcon(project.category)}
                    <span className="capitalize">{project.category}</span>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
                    {project.status}
                  </span>
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-300 transition-colors font-sans">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans mt-2 line-clamp-3 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0e1526] text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer with Working Actions */}
              <div className="px-6 py-4 bg-[#090e18] border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Specs</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="View GitHub Placeholder Repo"
                    className="p-1.5 rounded-lg bg-[#0e1628] border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      title="View Live Demo"
                      className="p-1.5 rounded-lg bg-[#0e1628] border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Guidance Callout */}
        <div className="mt-12 p-4 rounded-xl bg-[#0b101d] border border-slate-800 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs font-mono text-slate-300">
              Want to add your real GitHub repositories or completed college projects?
            </p>
          </div>
          <button
            onClick={onOpenEditGuide}
            className="text-xs font-mono text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-400 px-3 py-1.5 rounded-lg shrink-0 transition-colors cursor-pointer"
          >
            How to Edit Projects &gt;
          </button>
        </div>

      </div>

      {/* Project Specs Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenEditGuide={onOpenEditGuide}
      />
    </section>
  );
};
