import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Compass, 
  Sparkles, 
  MapPin, 
  Code2, 
  Terminal, 
  Cpu, 
  FileCode, 
  Globe, 
  Palette, 
  Database,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenComic: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenComic }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-brand-purple/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 shadow-lg shadow-emerald-950/40 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-emerald-300">
                Available for Internships & Projects
              </span>
            </div>

            {/* Main Greeting & Name */}
            <div className="mb-4">
              <p className="text-cyan-400 font-mono text-sm sm:text-base font-medium tracking-wide mb-2 flex items-center gap-2">
                <span>👋</span>
                <span>Hi, I'm</span>
              </p>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Mohammad <br className="hidden sm:block" />
                <span className="gradient-text-blue">Natiq</span>
              </h1>
            </div>

            {/* Roles */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 font-mono text-xs sm:text-sm">
              <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium">
                {PERSONAL_INFO.role}
              </span>
              <span className="text-slate-500">•</span>
              <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
                {PERSONAL_INFO.subRole}
              </span>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-6">
              {PERSONAL_INFO.intro}
            </p>

            {/* Personal Brand Philosophy Callout */}
            <div className="w-full sm:w-auto p-4 rounded-2xl glass-panel border-l-4 border-l-cyan-400 mb-8 shadow-xl">
              <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Personal Philosophy</span>
              </div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 font-mono">
                "{PERSONAL_INFO.philosophy}"
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary 1: View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Primary 2: Download CV */}
              <a
                href={PERSONAL_INFO.cvFile}
                download="Mohammad_Natiq_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              {/* Smaller Button: Explore Journey */}
              <a
                href="#journey"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl font-medium text-xs text-slate-400 hover:text-cyan-300 hover:bg-white/5 transition-colors"
              >
                <Compass className="w-4 h-4" />
                <span>Explore My Journey</span>
              </a>
            </div>

            {/* University Location Snippet */}
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

          </div>

          {/* Right Column: Modern Profile Card with Floating Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative mt-6 lg:mt-0">
            
            {/* Outer Background Rings */}
            <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border border-blue-500/20 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-dashed border-cyan-500/20 pointer-events-none" />

            {/* Profile Card Container */}
            <div className="relative group z-10 w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Gradient Border Frame */}
              <div className="p-1 rounded-3xl bg-gradient-to-b from-cyan-400 via-blue-600 to-purple-600 shadow-2xl shadow-blue-500/20">
                
                {/* Inner Card */}
                <div className="bg-midnight-900 rounded-[22px] p-4 sm:p-5 overflow-hidden backdrop-blur-xl">
                  
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner">
                    <img 
                      src={PERSONAL_INFO.portraitUrl}
                      alt="Mohammad Natiq — Computer Science & Engineering Student"
                      className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for bottom text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-950 via-transparent to-transparent opacity-80" />

                    {/* Badge at Bottom of photo */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel border border-white/15 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-xs font-bold leading-none">
                            Mohammad Natiq
                          </p>
                          <p className="text-[10px] text-cyan-300 font-mono mt-1">
                            B.Tech CSE • 2025–2029
                          </p>
                        </div>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-semibold bg-blue-500/20 text-cyan-300 border border-blue-400/30">
                          LPU Punjab
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">
                      // aspiring_dev.c
                    </span>
                    <button
                      onClick={onOpenComic}
                      className="text-amber-300 hover:text-amber-200 text-[11px] font-medium flex items-center gap-1 group/btn"
                    >
                      <span>Story Storyboard</span>
                      <Sparkles className="w-3 h-3 group-hover/btn:rotate-12 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>

              {/* Floating Technology Badges around photo */}
              
              {/* Badge 1: Python (Top Left) */}
              <div className="absolute -top-3 -left-4 sm:-left-8 px-3 py-1.5 rounded-xl glass-panel border border-blue-500/30 shadow-xl flex items-center gap-1.5 animate-float-slow bg-midnight-900/90 z-20">
                <Code2 className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-xs font-mono font-bold text-blue-300">Python</span>
              </div>

              {/* Badge 2: C / C++ (Top Right) */}
              <div className="absolute -top-4 -right-3 sm:-right-6 px-3 py-1.5 rounded-xl glass-panel border border-indigo-500/30 shadow-xl flex items-center gap-1.5 animate-float-reverse bg-midnight-900/90 z-20">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span className="text-xs font-mono font-bold text-indigo-300">C / C++</span>
              </div>

              {/* Badge 3: JavaScript (Middle Left) */}
              <div className="absolute top-1/3 -left-6 sm:-left-12 px-3 py-1.5 rounded-xl glass-panel border border-amber-500/30 shadow-xl flex items-center gap-1.5 animate-float-reverse bg-midnight-900/90 z-20">
                <FileCode className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-mono font-bold text-amber-300">JavaScript</span>
              </div>

              {/* Badge 4: MySQL (Middle Right) */}
              <div className="absolute top-2/5 -right-5 sm:-right-10 px-3 py-1.5 rounded-xl glass-panel border border-cyan-500/30 shadow-xl flex items-center gap-1.5 animate-float-slow bg-midnight-900/90 z-20">
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-cyan-300">MySQL</span>
              </div>

              {/* Badge 5: HTML / CSS (Bottom Left) */}
              <div className="absolute -bottom-3 -left-3 sm:-left-6 px-3 py-1.5 rounded-xl glass-panel border border-orange-500/30 shadow-xl flex items-center gap-1.5 animate-float-slow bg-midnight-900/90 z-20">
                <Globe className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-xs font-mono font-bold text-orange-300">HTML & CSS</span>
              </div>

              {/* Badge 6: IoT & AI (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-8 px-3 py-1.5 rounded-xl glass-panel border border-purple-500/30 shadow-xl flex items-center gap-1.5 animate-float-reverse bg-midnight-900/90 z-20">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-mono font-bold text-purple-300">IoT & AI</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
