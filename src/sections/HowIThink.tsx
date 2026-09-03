import React, { useState } from 'react';
import { 
  Compass, 
  Split, 
  Hammer, 
  TrendingUp, 
  Lightbulb, 
  FileSpreadsheet, 
  Code, 
  CheckCheck, 
  Sparkles, 
  Rocket,
  ArrowRight,
  Workflow
} from 'lucide-react';
import { HOW_I_THINK, BUILD_WITH_ME } from '../data/portfolioData';

export const HowIThink: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeBuildStage, setActiveBuildStage] = useState<number>(2); // Default on CODE

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Split': return <Split className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      default: return <Workflow className="w-6 h-6" />;
    }
  };

  const getBuildIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb': return <Lightbulb className="w-4 h-4" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-4 h-4" />;
      case 'Code': return <Code className="w-4 h-4" />;
      case 'CheckCheck': return <CheckCheck className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Rocket': return <Rocket className="w-4 h-4" />;
      default: return <Workflow className="w-4 h-4" />;
    }
  };

  return (
    <section id="how-i-think" className="py-24 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/5 via-indigo-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            <span>06</span>
            <span>//</span>
            <span>Problem-Solving Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            How I Approach <span className="gradient-text-blue">Problems</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            A disciplined, four-stage cognitive framework designed to transform ambiguous engineering challenges into robust, production-grade solutions.
          </p>
        </div>

        {/* 4-Step Interactive Thinking Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {HOW_I_THINK.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden border ${
                  isSelected
                    ? 'glass-panel border-cyan-400/60 shadow-2xl shadow-cyan-500/20 -translate-y-2 ring-1 ring-cyan-400/40 bg-midnight-900/90'
                    : 'bg-midnight-900/40 hover:bg-midnight-900/80 border-white/5 hover:border-white/20'
                }`}
              >
                {/* Subtle top indicator bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${step.color} transition-opacity ${
                  isSelected ? 'opacity-100' : 'opacity-20 group-hover:opacity-70'
                }`} />

                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`font-mono text-2xl font-black transition-colors ${
                      isSelected ? 'text-cyan-400' : 'text-slate-600 group-hover:text-slate-400'
                    }`}>
                      {step.step}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center p-[1px] bg-gradient-to-br ${step.color} shadow-lg transition-transform group-hover:scale-105`}>
                      <div className="w-full h-full bg-midnight-950 rounded-[15px] flex items-center justify-center text-white">
                        {getStepIcon(step.icon)}
                      </div>
                    </div>
                  </div>

                  {/* Title & Heading */}
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                    {step.title}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {step.heading}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Status Pill */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Phase 0{idx + 1}</span>
                  <span className={isSelected ? 'text-cyan-400 font-semibold' : 'text-slate-600'}>
                    {isSelected ? '● Active View' : 'Click to Focus'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* UNIQUE FEATURE: "BUILD WITH ME" DEVELOPMENT MINDSET */}
        {/* ================================================== */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1">
                <Workflow className="w-4 h-4" />
                <span>Development Mindset</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "Build With Me" <span className="gradient-text-blue">Pipeline</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md">
              The iterative engineering journey connecting initial ideas to tested, deployable software.
            </p>
          </div>

          {/* Animated Connecting Stage Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
            {BUILD_WITH_ME.map((stage, sIdx) => {
              const isCurrent = activeBuildStage === sIdx;

              return (
                <div
                  key={stage.stage}
                  onClick={() => setActiveBuildStage(sIdx)}
                  className={`cursor-pointer rounded-2xl p-4 sm:p-5 transition-all duration-300 relative border flex flex-col justify-between ${
                    isCurrent
                      ? 'glass-panel border-cyan-400 bg-midnight-950 shadow-xl shadow-cyan-500/20 -translate-y-1'
                      : 'bg-midnight-900/50 hover:bg-midnight-900/90 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                        isCurrent 
                          ? 'bg-cyan-500 text-slate-950 font-bold' 
                          : 'bg-white/5 text-slate-400'
                      }`}>
                        {getBuildIcon(stage.icon)}
                      </div>
                      <span className="font-mono text-[10px] text-slate-500">
                        0{sIdx + 1}
                      </span>
                    </div>

                    <h4 className={`text-base font-black tracking-wider font-mono mb-1 ${
                      isCurrent ? 'text-cyan-300' : 'text-white'
                    }`}>
                      {stage.stage}
                    </h4>

                    <div className="text-[11px] font-semibold text-slate-300 mb-1">
                      {stage.label}
                    </div>

                    <p className="text-[10px] text-slate-400 leading-tight">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Pulsing indicator when active */}
                  {isCurrent && (
                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      <span>Current Stage</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Connection Pipeline visual footnote */}
          <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-500 text-center">
            <span>IDEA</span>
            <span className="text-cyan-500">→</span>
            <span>PLAN</span>
            <span className="text-cyan-500">→</span>
            <span className="text-cyan-300 font-bold">CODE</span>
            <span className="text-cyan-500">→</span>
            <span>TEST</span>
            <span className="text-cyan-500">→</span>
            <span>IMPROVE</span>
            <span className="text-cyan-500">→</span>
            <span className="text-emerald-400 font-bold">BUILD</span>
          </div>

        </div>

      </div>
    </section>
  );
};
