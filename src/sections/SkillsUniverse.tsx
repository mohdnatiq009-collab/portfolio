import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Palette, 
  FileCode, 
  Database, 
  GitBranch, 
  Bot, 
  ShieldCheck, 
  Radio,
  Sparkles,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types/portfolio';

export const SkillsUniverse: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(SKILLS[0]);

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Technologies' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & Emerging Tech' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  const getSkillIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'Code2': return <Code2 className={className} />;
      case 'Terminal': return <Terminal className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'FileCode': return <FileCode className={className} />;
      case 'Database': return <Database className={className} />;
      case 'GitBranch': return <GitBranch className={className} />;
      case 'Bot': return <Bot className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Radio': return <Radio className={className} />;
      default: return <Code2 className={className} />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
              <span>04</span>
              <span>//</span>
              <span>Interactive Skill System</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skill <span className="gradient-text-vibrant">Universe</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
              Explore the technologies, paradigms, and toolchains I practice daily across software systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-midnight-900/90 border border-white/5 backdrop-blur-md">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Skills Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map(skill => {
              const isSelected = selectedSkill.id === skill.id;

              return (
                <div
                  key={skill.id}
                  onClick={() => setSelectedSkill(skill)}
                  onMouseEnter={() => setSelectedSkill(skill)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 relative group overflow-hidden border ${
                    isSelected
                      ? 'glass-panel border-cyan-400/50 shadow-xl shadow-cyan-500/15 -translate-y-1 ring-1 ring-cyan-400/30'
                      : 'bg-midnight-900/60 hover:bg-midnight-900/90 border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transition-opacity ${
                    isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                  }`} />

                  {/* Icon and Category Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-md group-hover:scale-110 transition-transform`}>
                      <div className="w-full h-full bg-midnight-950 rounded-[11px] flex items-center justify-center text-white">
                        {getSkillIcon(skill.icon, "w-5 h-5")}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                      {skill.category}
                    </span>
                  </div>

                  {/* Title & Level Tag */}
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5 line-clamp-1">
                    "{skill.levelTag}"
                  </p>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5 line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Footer hint */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{skill.relatedProjects.length} linked projects</span>
                    <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                      Inspect <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right: Focused Skill Inspector Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Skill Inspector</span>
                </span>
                <span className="text-xs font-mono uppercase text-slate-400">
                  {selectedSkill.category}
                </span>
              </div>

              {/* Large Icon Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedSkill.color} p-[1.5px] shadow-xl shrink-0`}>
                  <div className="w-full h-full bg-midnight-950 rounded-[14px] flex items-center justify-center text-white">
                    {getSkillIcon(selectedSkill.icon, "w-7 h-7")}
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-extrabold text-white">
                    {selectedSkill.name}
                  </h4>
                  <p className="text-xs font-mono text-cyan-300">
                    {selectedSkill.levelTag}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 rounded-2xl bg-midnight-950/70 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {selectedSkill.description}
              </div>

              {/* Related Projects / Implementations */}
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Related Projects & Concepts</span>
                </div>
                <div className="space-y-2">
                  {selectedSkill.relatedProjects.map(proj => (
                    <div 
                      key={proj}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-medium text-slate-200 flex items-center justify-between"
                    >
                      <span>{proj}</span>
                      <a 
                        href="#projects" 
                        className="text-cyan-400 hover:text-cyan-300 font-mono text-[11px] flex items-center gap-0.5"
                      >
                        View <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category summary */}
              <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-slate-400">
                Part of <span className="text-white font-semibold capitalize">{selectedSkill.category}</span> engineering stack
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
