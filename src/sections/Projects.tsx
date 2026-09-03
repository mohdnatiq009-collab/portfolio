import React, { useState } from 'react';
import { 
  Radio, 
  Code2, 
  Workflow, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Terminal,
  Database,
  Cpu,
  ShieldCheck,
  Search,
  Crosshair,
  AlertTriangle
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectDetail } from '../types/portfolio';
import { ProjectModal } from '../components/ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured' | 'academic'>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectDetail | null>(null);

  const displayedProjects = PROJECTS.filter(p => {
    if (filter === 'featured') return p.featured;
    if (filter === 'academic') return !p.featured;
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-midnight-900/40">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>05</span>
              <span>//</span>
              <span>Main Portfolio Feature</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Projects & <span className="gradient-text-blue">Innovations</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Engineering concepts and software implementations tackling real-world distress safety, debugging assistance, and systems programming.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-midnight-950/80 border border-white/5 backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'featured'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Featured (2)
            </button>
            <button
              onClick={() => setFilter('academic')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'academic'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Coursework & Labs (4)
            </button>
          </div>
        </div>

        {/* Featured Projects Hero Grid (2 Main Showcase Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* PROJECT 1: Modern Safety Device with Exact Location */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden group hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
                  IoT / Hardware / Safety Technology
                </span>
                <span className="text-[11px] font-mono text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                  ★ Flagship Project
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
                Modern Safety Device with Exact Location
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                "A smart safety concept designed to provide emergency alerts along with the user's exact location."
              </p>

              {/* Key Features List */}
              <div className="space-y-2.5 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Verified Features
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Exact location tracking</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Emergency alerts</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Safety-focused technology</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Hardware-based execution</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer with Modal Trigger */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {["GPS Tracking", "Emergency SOS", "IoT Hardware"].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(PROJECTS[0])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <span>View Project Deep-Dive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* PROJECT 2: Code Bug Finder with Interactive Visual Flow */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl relative overflow-hidden group hover:border-purple-400/60 transition-all duration-300 flex flex-col justify-between">
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500" />
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  Software / Programming
                </span>
                <span className="text-[11px] font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full font-semibold">
                  ★ Developer Utility
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-purple-300 transition-colors mb-2">
                Code Bug Finder
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                "A software project concept focused on identifying common coding errors and supporting debugging and problem solving."
              </p>

              {/* Interactive Visual Flow: Problem -> Analysis -> Detection -> Feedback */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-1.5 font-bold">
                  <Workflow className="w-3.5 h-3.5 text-purple-400" />
                  <span>Interactive Visual Pipeline</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <div className="p-3 rounded-xl bg-midnight-950/80 border border-white/5 text-center group-hover:border-purple-500/30 transition-colors">
                    <AlertTriangle className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                    <div className="font-mono text-[11px] font-bold text-white">01 Problem</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Runtime/Syntax</div>
                  </div>

                  <div className="p-3 rounded-xl bg-midnight-950/80 border border-white/5 text-center group-hover:border-purple-500/30 transition-colors">
                    <Search className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    <div className="font-mono text-[11px] font-bold text-white">02 Analysis</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Parse Token Flow</div>
                  </div>

                  <div className="p-3 rounded-xl bg-midnight-950/80 border border-white/5 text-center group-hover:border-purple-500/30 transition-colors">
                    <Crosshair className="w-4 h-4 text-rose-400 mx-auto mb-1" />
                    <div className="font-mono text-[11px] font-bold text-white">03 Detection</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Pinpoint Bug Line</div>
                  </div>

                  <div className="p-3 rounded-xl bg-midnight-950/80 border border-white/5 text-center group-hover:border-purple-500/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                    <div className="font-mono text-[11px] font-bold text-white">04 Feedback</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Fix Explanation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer with Modal Trigger */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {["Static Analysis", "Syntax Parsing", "Debugging Assistance"].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 text-slate-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(PROJECTS[1])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/20 hover:scale-105 transition-all"
              >
                <span>Explore Visual Flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Coursework & Systems Engineering Projects Grid (Sub-Section) */}
        {filter !== 'featured' && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h4 className="text-lg font-bold text-white font-mono">
                Foundational Coursework & Systems Practice
              </h4>
              <span className="h-[1px] flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {PROJECTS.filter(p => !p.featured).map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setActiveModalProject(proj)}
                  className="cursor-pointer glass-panel rounded-2xl p-5 border border-white/5 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-cyan-400">
                      <span>{proj.badge}</span>
                      <span className="text-slate-500 group-hover:text-white transition-colors">↗</span>
                    </div>

                    <h5 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                      {proj.title}
                    </h5>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1">
                    {proj.technologies.slice(0, 2).map(tech => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </section>
  );
};
