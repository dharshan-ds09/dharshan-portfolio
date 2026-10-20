import { useState, useRef, useEffect, type ReactNode, type KeyboardEvent } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CyberTerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: ReactNode;
}

export const CyberTerminal = ({ isOpen, onClose }: CyberTerminalProps) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'init',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-emerald-400 font-bold">
            [+] Welcome to Dharshan's Cyber &amp; Dev Console v1.0.4
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-emerald-300 font-semibold">'help'</span> to see available commands or click the shortcut buttons below.
          </p>
        </div>
      ),
    },
  ]);
  const [isMaximized, setIsMaximized] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let response: ReactNode;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="text-xs space-y-1.5 text-slate-300 font-mono">
            <p className="text-emerald-400 font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-emerald-300 w-24 inline-block">whoami</span> - Display current user identity &amp; role</p>
            <p><span className="text-emerald-300 w-24 inline-block">skills</span> - List cybersecurity tools &amp; programming stacks</p>
            <p><span className="text-emerald-300 w-24 inline-block">projects</span> - Display highlighted projects</p>
            <p><span className="text-emerald-300 w-24 inline-block">education</span> - Show 2nd-year B.Tech details</p>
            <p><span className="text-emerald-300 w-24 inline-block">scan</span> - Run simulated defensive network scan</p>
            <p><span className="text-emerald-300 w-24 inline-block">contact</span> - Display email and handles</p>
            <p><span className="text-emerald-300 w-24 inline-block">clear</span> - Clear terminal session output</p>
          </div>
        );
        break;

      case 'whoami':
        response = (
          <div className="text-xs space-y-1 font-mono text-slate-300">
            <p><span className="text-emerald-400 font-bold">User:</span> {portfolioData.personal.name}</p>
            <p><span className="text-emerald-400 font-bold">Role:</span> {portfolioData.personal.role} ({portfolioData.personal.subRole})</p>
            <p><span className="text-emerald-400 font-bold">Status:</span> {portfolioData.personal.availability}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="text-xs space-y-2 font-mono text-slate-300">
            {portfolioData.skills.map((cat, i) => (
              <div key={i}>
                <span className="text-emerald-400 font-bold">[{cat.title}]: </span>
                <span>{cat.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="text-xs space-y-2 font-mono text-slate-300">
            <p className="text-emerald-400 font-bold">FEATURED PROJECTS / LABS:</p>
            {portfolioData.projects.map((p, i) => (
              <div key={i} className="pl-2 border-l border-emerald-500/30">
                <p className="text-emerald-300 font-semibold">{p.title}</p>
                <p className="text-slate-400">{p.tagline}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'education':
        response = (
          <div className="text-xs space-y-1 font-mono text-slate-300">
            <p className="text-emerald-400 font-bold">{portfolioData.education[0].degree}</p>
            <p className="text-slate-300">{portfolioData.education[0].institution}</p>
            <p className="text-slate-400">{portfolioData.education[0].status} &bull; {portfolioData.education[0].duration}</p>
          </div>
        );
        break;

      case 'scan':
        response = (
          <div className="text-xs space-y-1 font-mono text-emerald-400">
            <p>[*] Initiating SYN stealth scan against local defensive testbed...</p>
            <p>[+] Host is UP (0.00034s latency).</p>
            <p>[+] PORT 22/tcp  OPEN  OpenSSH 9.6p1 (Hardened)</p>
            <p>[+] PORT 80/tcp  OPEN  Reverse-Proxy (TLS Redirect)</p>
            <p>[+] PORT 443/tcp OPEN  HTTPS (Strict-Transport-Security: ON)</p>
            <p className="text-slate-300">[*] Audit summary: 0 critical vulnerabilities found. Defenses solid!</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="text-xs space-y-1 font-mono text-slate-300">
            <p><span className="text-emerald-400">Email:</span> {portfolioData.socials.email}</p>
            <p><span className="text-emerald-400">GitHub:</span> {portfolioData.socials.github}</p>
            <p><span className="text-emerald-400">LinkedIn:</span> {portfolioData.socials.linkedin}</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        response = (
          <p className="text-xs font-mono text-rose-400">
            Command not recognized: "{cmd}". Type <span className="underline text-emerald-300">'help'</span> for instructions.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInputVal('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const quickCommands = ['help', 'whoami', 'skills', 'projects', 'scan', 'contact', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full ${
          isMaximized ? 'max-w-5xl h-[90vh]' : 'max-w-3xl h-[560px]'
        } flex flex-col bg-[#090d16] border border-emerald-500/40 rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-200 text-left`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#0e1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/90" />
            <div className="w-3 h-3 rounded-full bg-amber-500/90" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
            <span className="text-xs font-mono text-emerald-400 font-semibold ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5" />
              dharshan@interactive-shell: ~
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              aria-label="Toggle maximize"
              className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800 cursor-pointer"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              aria-label="Close terminal"
              className="p-1 rounded text-slate-400 hover:text-rose-400 hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Log Area */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">&gt;</span>
                <span className="text-slate-200 font-semibold">{item.command}</span>
              </div>
              <div className="pl-4 pt-1">{item.output}</div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Quick Command Pills */}
        <div className="px-4 py-2 bg-[#0c121e] border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">Shortcuts:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#090d16] text-emerald-400 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-950/40 transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#080c14] border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono font-bold text-sm pl-1">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'scan', 'skills', or any command..."
            className="flex-1 bg-transparent font-mono text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500 hover:text-slate-950 transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
