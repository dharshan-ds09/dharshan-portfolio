import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CyberTerminal } from './components/CyberTerminal';
import { EditGuideModal } from './components/EditGuideModal';
import { Terminal, Settings } from 'lucide-react';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isEditGuideOpen, setIsEditGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 flex flex-col font-sans">
      
      {/* Sticky Navigation */}
      <Navbar
        onOpenEditGuide={() => setIsEditGuideOpen(true)}
        onToggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)}
        isTerminalOpen={isTerminalOpen}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onToggleTerminal={() => setIsTerminalOpen(true)}
          onOpenEditGuide={() => setIsEditGuideOpen(true)}
        />
        <About onOpenEditGuide={() => setIsEditGuideOpen(true)} />
        <Skills />
        <Projects onOpenEditGuide={() => setIsEditGuideOpen(true)} />
        <Education onOpenEditGuide={() => setIsEditGuideOpen(true)} />
        <Contact onOpenEditGuide={() => setIsEditGuideOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (CLI & Guide Quick-Access) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={() => setIsEditGuideOpen(true)}
          title="Personalization Guide"
          className="p-3 rounded-full bg-[#0e1627] border border-slate-700 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] group"
        >
          <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform" />
        </button>

        <button
          onClick={() => setIsTerminalOpen(true)}
          title="Open Interactive Cyber Shell"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-slate-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:scale-105"
        >
          <Terminal className="w-4 h-4 text-slate-950" />
          <span>CLI Shell</span>
        </button>
      </div>

      {/* Interactive Modals */}
      <CyberTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <EditGuideModal
        isOpen={isEditGuideOpen}
        onClose={() => setIsEditGuideOpen(false)}
      />

    </div>
  );
}

export default App;
