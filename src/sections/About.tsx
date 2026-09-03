import React from 'react';
import { 
  Lightbulb, 
  Rocket, 
  Brain, 
  Target, 
  GraduationCap, 
  Code, 
  Database, 
  Cpu,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const brandPillars = [
    {
      icon: Lightbulb,
      title: "Problem Solver",
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/20",
      bgColor: "bg-amber-500/10",
      description: "Tackling engineering challenges by breaking them into logical components and building tangible solutions."
    },
    {
      icon: Rocket,
      title: "Continuous Learner",
      color: "from-blue-500 to-cyan-500",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/20",
      bgColor: "bg-cyan-500/10",
      description: "Actively acquiring new technologies—from core data structures to Large Language Models and cloud principles."
    },
    {
      icon: Brain,
      title: "Logical Thinker",
      color: "from-purple-500 to-indigo-500",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/20",
      bgColor: "bg-purple-500/10",
      description: "Reasoning from first principles, writing algorithmic solutions, and optimizing code maintainability."
    },
    {
      icon: Target,
      title: "Focused & Dedicated",
      color: "from-emerald-500 to-teal-500",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500/20",
      bgColor: "bg-emerald-500/10",
      description: "Bringing discipline to coursework, practical projects, and daily development routines."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-midnight-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>01</span>
            <span>//</span>
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Driven by Curiosity, <span className="gradient-text-blue">Grounded in Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-2">
            A serious Computer Science student dedicated to transforming computational concepts into practical, reliable software.
          </p>
        </div>

        {/* Grid: Story & Highlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Authentic Bio & Career Objective */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Who I Am</span>
                <span className="w-8 h-[1px] bg-cyan-400 inline-block"></span>
              </h3>
              
              <p className="text-base text-slate-300 leading-relaxed mb-5">
                {PERSONAL_INFO.bio}
              </p>

              <div className="p-5 rounded-2xl bg-midnight-950/70 border border-white/5 mb-6">
                <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Career Objective</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{PERSONAL_INFO.careerObjective}"
                </p>
              </div>

              {/* Verified Key Highlights from CV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>B.Tech CSE at Lovely Professional University (2025–2029)</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Active explorer of AI, LLMs & Cybersecurity</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hands-on with IoT hardware & debugging tools</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strong academic and continuous learning record</span>
                </div>
              </div>

            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                <div className="text-2xl font-black text-cyan-400 font-mono">B.Tech</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Computer Science</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                <div className="text-2xl font-black text-blue-400 font-mono">3+</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Core Languages</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                <div className="text-2xl font-black text-purple-400 font-mono">3</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Certifications</div>
              </div>
              <div className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                <div className="text-2xl font-black text-emerald-400 font-mono">2029</div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Graduation Year</div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Personal Brand Pillar Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {brandPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="glass-panel glass-panel-hover rounded-2xl p-5 border border-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${pillar.bgColor} ${pillar.borderColor} border shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${pillar.textColor}`} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
