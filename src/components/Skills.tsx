import { useState } from 'react';
import { 
  ShieldAlert, 
  Code2, 
  Globe, 
  Terminal, 
  Search, 
  Cpu 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skills } = portfolioData;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Terminal':
      default:
        return <Terminal className="w-5 h-5 text-emerald-400" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level.toLowerCase()) {
      case 'proficient':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40';
      case 'practicing':
        return 'bg-teal-500/15 text-teal-300 border-teal-500/40';
      case 'familiar':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/40';
      case 'exploring':
      case 'theoretical':
      default:
        return 'bg-purple-500/15 text-purple-300 border-purple-500/40';
    }
  };

  const filteredCategories = skills
    .filter((cat) => selectedCategory === 'all' || cat.title.toLowerCase().includes(selectedCategory.toLowerCase()))
    .map((cat) => {
      const filteredSkills = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (s.badge && s.badge.toLowerCase().includes(searchQuery.toLowerCase())) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...cat, skills: filteredSkills };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-[#070b13] relative border-t border-slate-900">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>&lt;Technical Arsenal /&gt;</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 font-sans tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-slate-400 text-base font-sans leading-relaxed">
            Practical competencies developed through hands-on coursework, security research, and project engineering.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0c121e] border border-slate-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                selectedCategory === 'all'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setSelectedCategory('cybersecurity')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                selectedCategory === 'cybersecurity'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Cybersecurity
            </button>
            <button
              onClick={() => setSelectedCategory('languages')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                selectedCategory === 'languages'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setSelectedCategory('web')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                selectedCategory === 'web'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setSelectedCategory('tools')}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                selectedCategory === 'tools'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Tools &amp; DevOps
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skill (e.g. Python, Nmap)..."
              className="w-full bg-[#0c121e] border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/50"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-[#0b101d] rounded-xl border border-slate-800/80 p-6 space-y-4 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(0,255,102,0.1)] transition-all duration-300 text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30">
                    {getIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 font-sans">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {category.skills.length} items
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e1628] border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/50 transition-all cursor-default"
                  >
                    <span className="text-xs font-mono font-medium text-slate-200 group-hover:text-emerald-300">
                      {skill.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${getLevelBadgeClass(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="col-span-2 text-center py-12 text-slate-500 font-mono text-sm">
              No matching skills found for "{searchQuery}".
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
          <span className="text-slate-500">Proficiency scale:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Proficient (Active / Daily)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400" /> Practicing (Labs / Projects)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-400" /> Familiar (Coursework)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-purple-400" /> Exploring (In Progress)
          </span>
        </div>

      </div>
    </section>
  );
};
