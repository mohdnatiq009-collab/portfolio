import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Play, RefreshCw, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS, JOURNEY_TIMELINE } from '../data/portfolioData';

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'whoami',
      output: (
        <div className="text-cyan-300 font-mono text-xs sm:text-sm">
          {PERSONAL_INFO.name} — {PERSONAL_INFO.role} ({PERSONAL_INFO.location})
        </div>
      )
    },
    {
      command: 'philosophy',
      output: (
        <div className="text-amber-300 font-mono text-xs sm:text-sm">
          "{PERSONAL_INFO.philosophy}"
        </div>
      )
    }
  ]);
  const [copied, setCopied] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    'help', 
    'whoami', 
    'role', 
    'skills', 
    'projects', 
    'education', 
    'contact', 
    'philosophy', 
    'journey', 
    'clear'
  ];

  const handleCommandExecution = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output: React.ReactNode;

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400">whoami</span> — Display Mohammad Natiq's identity and background</p>
            <p><span className="text-emerald-400">role</span> — Current academic and career focus</p>
            <p><span className="text-emerald-400">skills</span> — Overview of programming, web, databases, and tools</p>
            <p><span className="text-emerald-400">projects</span> — Summary of IoT Safety and Bug Finder concepts</p>
            <p><span className="text-emerald-400">education</span> — Details on Lovely Professional University & schooling</p>
            <p><span className="text-emerald-400">philosophy</span> — Core personal brand statement</p>
            <p><span className="text-emerald-400">journey</span> — Key career timeline milestones</p>
            <p><span className="text-emerald-400">contact</span> — Email, phone, and LinkedIn details</p>
            <p><span className="text-emerald-400">clear</span> — Clear terminal output history</p>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p className="text-cyan-300 font-bold">{PERSONAL_INFO.name}</p>
            <p>{PERSONAL_INFO.bio}</p>
            <p className="text-slate-400 text-[11px]">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'role':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p className="text-purple-300">{PERSONAL_INFO.role}</p>
            <p className="text-blue-300">{PERSONAL_INFO.subRole}</p>
            <p className="text-slate-400 text-[11px]">Undergraduate Class of 2025–2029 (Lovely Professional University)</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p className="text-cyan-300 font-bold">Technical Stack:</p>
            <p><span className="text-slate-400">Programming:</span> Python | C | C++</p>
            <p><span className="text-slate-400">Web:</span> HTML | CSS | JavaScript</p>
            <p><span className="text-slate-400">Database:</span> MySQL</p>
            <p><span className="text-slate-400">Tools:</span> Git | GitHub | AI & LLMs | Cybersecurity | IoT</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-2">
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <p className="text-cyan-300 font-bold">1. Modern Safety Device with Exact Location</p>
              <p className="text-[11px] text-slate-400">IoT / Hardware / Safety Technology — Real-time GPS coordinates and cellular distress alerts.</p>
            </div>
            <div className="p-2 rounded bg-white/5 border border-white/5">
              <p className="text-purple-300 font-bold">2. Code Bug Finder</p>
              <p className="text-[11px] text-slate-400">Software / Programming — Automatic pattern recognition and actionable debugging feedback.</p>
            </div>
          </div>
        );
        break;

      case 'education':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1.5">
            <p className="text-cyan-300 font-bold">Lovely Professional University (2025–2029)</p>
            <p className="text-slate-400">B.Tech in Computer Science & Engineering • Punjab</p>
            <p className="text-slate-300 mt-2">Class XII — TS Board (2023–2024)</p>
            <p className="text-slate-300">Class X — ICSE Board (2020–2021)</p>
          </div>
        );
        break;

      case 'philosophy':
      case 'passion':
        output = (
          <div className="text-amber-300 font-mono text-xs sm:text-sm italic">
            "{PERSONAL_INFO.philosophy}" — Building useful, reliable solutions that create real-world impact.
          </div>
        );
        break;

      case 'journey':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            {JOURNEY_TIMELINE.map(item => (
              <p key={item.period}>
                <span className="text-cyan-400 font-bold">[{item.period}]</span> {item.title}
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p><span className="text-cyan-400">Email:</span> {PERSONAL_INFO.email}</p>
            <p><span className="text-cyan-400">Mobile:</span> {PERSONAL_INFO.phone}</p>
            <p><span className="text-cyan-400">LinkedIn:</span> {PERSONAL_INFO.linkedinDisplay}</p>
            <p><span className="text-cyan-400">Location:</span> {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-xs font-mono text-rose-400">
            command not found: "{trimmed}". Type <span className="text-cyan-300 underline font-bold cursor-pointer" onClick={() => handleCommandExecution('help')}>help</span> to view available commands.
          </div>
        );
        break;
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommandExecution(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-midnight-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>Developer Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Interactive <span className="gradient-text-blue">Terminal</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg mt-2">
            Try entering CLI commands below to query portfolio info directly from the terminal console.
          </p>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="text-[11px] font-mono text-slate-500 mr-1">Quick Run:</span>
          {availableCommands.map(cmd => (
            <button
              key={cmd}
              onClick={() => handleCommandExecution(cmd)}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-midnight-900 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-850 transition-all duration-150"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="rounded-3xl glass-panel border border-white/15 bg-midnight-950/95 shadow-2xl overflow-hidden cursor-text"
        >
          {/* Terminal Window Chrome */}
          <div className="px-4 py-3 bg-midnight-900/90 border-b border-white/10 flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-slate-400">
                natiq@developer-terminal:~
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <span>bash — 80x24</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setHistory([]);
                }}
                className="hover:text-slate-300 transition-colors"
                title="Clear terminal screen"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Body Screen */}
          <div className="p-5 sm:p-6 min-h-[300px] max-h-[460px] overflow-y-auto font-mono text-xs sm:text-sm space-y-4">
            
            <div className="text-slate-500 text-xs pb-2 border-b border-white/5">
              Type <span className="text-cyan-400 font-bold">help</span> to view all commands, or click any command above.
            </div>

            {/* Render Output History */}
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5 animate-in fade-in duration-150">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-slate-500">$</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-4 text-slate-300">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Live Command Line Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold shrink-0">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type a command (e.g. skills, whoami, projects)..."
                className="w-full bg-transparent text-white font-mono text-xs sm:text-sm focus:outline-none placeholder:text-slate-600 caret-cyan-400"
                autoComplete="off"
                spellCheck="false"
              />
              <button 
                type="submit" 
                className="shrink-0 p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-300"
                title="Run command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
