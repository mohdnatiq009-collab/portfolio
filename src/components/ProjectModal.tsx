import React, { useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  Workflow, 
  Lightbulb,
  AlertCircle,
  HelpCircle,
  Clock
} from 'lucide-react';
import { ProjectDetail } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-midnight-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div className="relative w-full max-w-3xl rounded-3xl glass-panel border border-white/15 bg-midnight-900 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-500/20 to-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between pb-5 border-b border-white/10 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-400 bg-white/5">
                {project.badge}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-slate-300 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto pr-2 space-y-6 pt-5 text-slate-300 text-sm leading-relaxed">
          
          {/* Problem & Solution Dual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400 mb-2 font-bold">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* If Code Bug Finder: Interactive 4-step Flow */}
          {project.flowSteps && (
            <div className="p-5 rounded-2xl glass-panel border border-cyan-500/20">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2 font-bold">
                <Workflow className="w-4 h-4" />
                <span>Interactive Visual Flow</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {project.flowSteps.map((fStep, sIdx) => (
                  <div key={fStep.step} className="p-3.5 rounded-xl bg-slate-900/90 border border-white/5 relative">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                        {fStep.step}
                      </span>
                      {sIdx < 3 && (
                        <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden md:block" />
                      )}
                    </div>
                    <div className="font-bold text-white text-xs mb-1">{fStep.title}</div>
                    <div className="text-[11px] text-slate-400 leading-normal">{fStep.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How It Works Section */}
          <div className="p-5 rounded-2xl bg-midnight-950/80 border border-white/5">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-2 font-bold">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>How It Works & System Flow</span>
            </div>
            <ul className="space-y-3">
              {project.howItWorks.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-blue-600/30 border border-blue-500/40 text-cyan-300 text-[11px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Applied */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-purple-400" />
              <span>Technologies & Methodologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          {project.futureImprovements && project.futureImprovements.length > 0 && (
            <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20">
              <div className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2 flex items-center gap-2 font-bold">
                <Lightbulb className="w-4 h-4 text-purple-400" />
                <span>Planned Future Improvements</span>
              </div>
              <ul className="space-y-2">
                {project.futureImprovements.map((imp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-5 border-t border-white/10 shrink-0 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">
            Project ID: {project.id}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
