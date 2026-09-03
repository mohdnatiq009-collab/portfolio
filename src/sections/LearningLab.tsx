import React from 'react';
import { 
  Binary, 
  Globe, 
  Database, 
  Server, 
  LayoutGrid, 
  Bot, 
  BrainCircuit, 
  ShieldAlert,
  Sparkles,
  Flame,
  CheckCircle2
} from 'lucide-react';
import { LEARNING_LAB } from '../data/portfolioData';

export const LearningLab: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Binary': return <Binary className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'LayoutGrid': return <LayoutGrid className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'BrainCircuit': return <BrainCircuit className="w-5 h-5" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getStatusBadge = (status: 'Building' | 'Practicing' | 'Exploring' | 'Learning') => {
    switch (status) {
      case 'Building':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Building
          </span>
        );
      case 'Practicing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Practicing
          </span>
        );
      case 'Learning':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Learning
          </span>
        );
      case 'Exploring':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Exploring
          </span>
        );
    }
  };

  return (
    <section id="learning" className="py-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
              <span>08</span>
              <span>//</span>
              <span>Active Horizon</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Currently <span className="gradient-text-blue">Learning</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Authentic progress indicators across algorithmic foundations, system architectures, and modern AI. Zero fake percentages—pure transparent growth.
            </p>
          </div>

          {/* Status Legend */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 bg-midnight-900/80 p-2 rounded-2xl border border-white/5">
            <span className="text-[11px] text-slate-500 mr-1">Status States:</span>
            {['Practicing', 'Building', 'Learning', 'Exploring'].map(s => (
              <span key={s} className="px-2 py-0.5 rounded-md bg-white/5 text-slate-300 text-[10px]">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEARNING_LAB.map((item) => (
            <div
              key={item.name}
              className="glass-panel glass-panel-hover rounded-3xl p-5 sm:p-6 border border-white/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon and Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white transition-all shadow-md">
                    {getIcon(item.icon)}
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.name}
                </h3>

                {/* Focus description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.focus}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Active Track</span>
                <span className="text-slate-400">Continuous Growth</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
