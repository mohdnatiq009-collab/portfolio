import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Compass, 
  Sparkles, 
  ChevronRight, 
  Code2, 
  Cpu, 
  Database,
  Layers,
  ArrowRight
} from 'lucide-react';
import { JOURNEY_TIMELINE } from '../data/portfolioData';

interface JourneyProps {
  onOpenComic: () => void;
}

export const Journey: React.FC<JourneyProps> = ({ onOpenComic }) => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(JOURNEY_TIMELINE.length - 1);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Comic Trigger */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>02</span>
              <span>//</span>
              <span>Interactive Feature</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              My Developer <span className="gradient-text-blue">Journey</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              From ICSE academic discipline to computer science engineering and cutting-edge software explorations.
            </p>
          </div>

          <button
            onClick={onOpenComic}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400/50 shadow-lg text-xs font-semibold tracking-wide transition-all group"
          >
            <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
            <span>View 8-Panel Comic Storyboard</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Visual Story Sequence Indicator */}
        <div className="mb-12 p-3 sm:p-4 rounded-2xl glass-panel border border-white/5 flex items-center justify-between overflow-x-auto gap-2 text-xs font-mono">
          {["Student", "Learner", "Problem Solver", "Builder", "Developer", "Future Engineer"].map((stage, idx, arr) => (
            <React.Fragment key={stage}>
              <div className="flex items-center gap-2 shrink-0">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  idx === 4 
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/40' 
                    : 'bg-slate-800 text-slate-300'
                }`}>
                  0{idx + 1}
                </span>
                <span className={idx === 4 ? 'text-cyan-300 font-bold' : 'text-slate-400'}>
                  {stage}
                </span>
              </div>
              {idx < arr.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0 hidden sm:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Interactive Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Milestone Cards List */}
          <div className="lg:col-span-7 flex flex-col gap-4 relative">
            
            {/* Timeline Vertical Track Line */}
            <div className="absolute top-6 bottom-6 left-[27px] w-[2px] bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-500/30 hidden sm:block pointer-events-none" />

            {JOURNEY_TIMELINE.map((item, index) => {
              const isSelected = selectedMilestone === index;
              return (
                <div
                  key={item.period}
                  onClick={() => setSelectedMilestone(index)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 relative group flex items-start gap-4 ${
                    isSelected
                      ? 'glass-panel border-cyan-500/40 shadow-xl shadow-cyan-500/10 -translate-y-0.5'
                      : 'bg-midnight-900/50 hover:bg-midnight-900/90 border border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Timeline Dot & Icon */}
                  <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 ${
                    isSelected
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-cyan-300/40 shadow-lg shadow-cyan-500/30'
                      : 'bg-slate-900 text-slate-400 border-white/10 group-hover:text-cyan-400 group-hover:border-cyan-500/20'
                  }`}>
                    {getIcon(item.iconName)}
                  </div>

                  {/* Milestone Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className={`font-mono text-xs font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                        isSelected 
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' 
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.period}
                      </span>
                      {item.active && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active Focus
                        </span>
                      )}
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-200 group-hover:text-cyan-300'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-slate-400 font-medium mb-2">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Selection Indicator Arrow */}
                  <div className={`shrink-0 transition-opacity ${isSelected ? 'opacity-100 text-cyan-400' : 'opacity-0 text-slate-500'}`}>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              );
            })}

          </div>

          {/* Right: Focused Milestone Deep Dive */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Milestone Spotlight</span>
                </span>
                <span className="text-xs font-mono text-slate-400 font-bold">
                  {JOURNEY_TIMELINE[selectedMilestone].period}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-black text-white mb-1">
                {JOURNEY_TIMELINE[selectedMilestone].title}
              </h4>
              <p className="text-xs font-mono text-cyan-300 mb-4">
                {JOURNEY_TIMELINE[selectedMilestone].subtitle}
              </p>

              <div className="p-4 rounded-2xl bg-midnight-950/70 border border-white/5 mb-6 text-sm text-slate-300 leading-relaxed">
                {JOURNEY_TIMELINE[selectedMilestone].description}
              </div>

              {/* Current Focus Highlights */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Focus Areas
                </div>
                <div className="flex flex-wrap gap-2">
                  {JOURNEY_TIMELINE[selectedMilestone].tags.map(t => (
                    <span 
                      key={t}
                      className="px-3 py-1 rounded-xl text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-cyan-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Interactive prompt to explore comic or next */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Step {selectedMilestone + 1} of {JOURNEY_TIMELINE.length}
                </span>
                <button
                  onClick={() => setSelectedMilestone((prev) => (prev + 1) % JOURNEY_TIMELINE.length)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Next Milestone</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
