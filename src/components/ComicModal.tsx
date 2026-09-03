import React, { useEffect } from 'react';
import { X, Sparkles, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ComicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComicModal: React.FC<ComicModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-midnight-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl rounded-3xl glass-panel border border-white/20 bg-midnight-900 shadow-2xl p-4 sm:p-6 z-10 my-4 flex flex-col max-h-[95vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Mohammad Natiq — 8-Panel Visual Storyboard
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                "Code. Learn. Solve. Grow." — Narrative Journey
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.comicStoryUrl}
              download="Mohammad_Natiq_Visual_Story.png"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Save Image</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Comic Image Body */}
        <div className="overflow-y-auto p-2 my-2 flex items-center justify-center rounded-2xl bg-midnight-950 border border-white/5">
          <img 
            src={PERSONAL_INFO.comicStoryUrl}
            alt="Mohammad Natiq 8-Panel Visual Journey Storyboard"
            className="w-full h-auto object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-white/10 shrink-0 flex items-center justify-between text-xs text-slate-400">
          <span className="font-mono text-[11px]">
            1: Introduction • 2: Education • 3: Skills • 4: Learning • 5: Projects • 6: Achievements • 7: Strengths • 8: Goal
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
