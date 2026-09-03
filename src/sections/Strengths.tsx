import React from 'react';
import { 
  Brain, 
  Target, 
  Flame, 
  Wrench, 
  BookOpen, 
  RefreshCw, 
  Users, 
  MessageSquare, 
  Palette,
  Sparkles
} from 'lucide-react';
import { STRENGTHS } from '../data/portfolioData';

export const Strengths: React.FC = () => {
  const getStrengthIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Brain': return <Brain className={className} />;
      case 'Target': return <Target className={className} />;
      case 'Flame': return <Flame className={className} />;
      case 'Wrench': return <Wrench className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Users': return <Users className={className} />;
      case 'MessageSquare': return <MessageSquare className={className} />;
      case 'Palette': return <Palette className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  const coreStrengths = STRENGTHS.filter(s => s.isCore);
  const supportingQualities = STRENGTHS.filter(s => !s.isCore);

  return (
    <section id="strengths" className="py-24 relative overflow-hidden bg-midnight-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>07</span>
            <span>//</span>
            <span>Personal Brand & Qualities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Core Strengths & <span className="gradient-text-blue">Work Ethic</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            The values and behavioral habits that drive consistency, code quality, and positive collaboration.
          </p>
        </div>

        {/* Part 1: Core 4 Strengths */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>Primary Engineering Strengths</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreStrengths.map((item, idx) => {
              const colors = [
                "from-blue-500 to-cyan-500 text-cyan-400 border-cyan-500/30",
                "from-purple-500 to-indigo-500 text-purple-400 border-purple-500/30",
                "from-amber-500 to-orange-500 text-amber-400 border-amber-500/30",
                "from-emerald-500 to-teal-500 text-emerald-400 border-emerald-500/30"
              ];
              const colorClass = colors[idx % colors.length];

              return (
                <div
                  key={item.name}
                  className="glass-panel glass-panel-hover rounded-3xl p-6 border border-white/5 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                        {getStrengthIcon(item.icon, `w-6 h-6 ${colorClass.split(' ')[2]}`)}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400 border border-white/5">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                    <span>Dimension 0{idx + 1}</span>
                    <span className="text-cyan-400 font-semibold">Verified in CV</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Supporting Professional Qualities */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-500"></span>
            <span>Supporting Professional Qualities</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {supportingQualities.map((item) => (
              <div
                key={item.name}
                className="p-4 rounded-2xl bg-midnight-950/70 border border-white/5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/5 text-slate-300 group-hover:text-cyan-400 transition-colors shrink-0">
                    {getStrengthIcon(item.icon, "w-4 h-4")}
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
