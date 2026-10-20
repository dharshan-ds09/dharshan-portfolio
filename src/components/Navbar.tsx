import { useState, useEffect, type MouseEvent } from 'react';
import { Terminal, Menu, X, FileText, Settings, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenEditGuide: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}

export const Navbar = ({
  onOpenEditGuide,
  onToggleTerminal,
  isTerminalOpen,
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-emerald-500/20 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400 transition-colors shadow-[0_0_15px_rgba(0,255,102,0.15)]">
              <Terminal className="w-5 h-5 text-emerald-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-lg text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                <span className="text-emerald-400">&gt;</span> {portfolioData.personal.name}
                <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse ml-0.5" />
              </span>
              <span className="text-[10px] font-mono tracking-wider text-emerald-500/80 -mt-1 uppercase">
                Sec &bull; Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0c121e]/80 border border-slate-800/80 px-4 py-1.5 rounded-full shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 shadow-[0_0_12px_rgba(0,255,102,0.2)]'
                      : 'text-slate-300 hover:text-emerald-300 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Terminal toggle + Edit Guide + Resume CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Terminal quick-launch */}
            <button
              onClick={onToggleTerminal}
              title="Toggle Cyber CLI Console"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                isTerminalOpen
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(0,255,102,0.25)]'
                  : 'bg-[#0f172a]/70 text-slate-300 border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>CLI</span>
            </button>

            {/* Customization Guide Modal trigger */}
            <button
              onClick={onOpenEditGuide}
              title="How to replace placeholders with your real info"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0f172a]/70 text-slate-300 border border-slate-800 hover:border-emerald-500/40 hover:text-emerald-300 transition-all"
            >
              <Settings className="w-3.5 h-3.5 text-emerald-400" />
              <span>Config Guide</span>
            </button>

            {/* Resume button */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="relative group overflow-hidden px-4 py-1.5 rounded-lg text-xs font-mono font-semibold bg-emerald-500 text-slate-950 border border-emerald-400 hover:bg-emerald-400 transition-all shadow-[0_0_15px_rgba(0,255,102,0.3)] flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-slate-950" />
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTerminal}
              aria-label="Toggle CLI"
              className="p-2 rounded-lg bg-[#0e1526] border border-slate-800 text-emerald-400"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-lg bg-[#0e1526] border border-slate-800 text-slate-200 hover:text-emerald-400 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-emerald-500/20 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-2 rounded-lg text-sm font-mono transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-emerald-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditGuide();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400"
            >
              <Settings className="w-4 h-4 text-emerald-400" />
              <span>Placeholder Guide (Edit Info)</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all"
            >
              <FileText className="w-4 h-4 text-slate-950" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
