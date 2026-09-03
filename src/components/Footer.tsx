import React from 'react';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-midnight-950 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full bg-midnight-900 rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                    MN
                  </span>
                </div>
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Mohammad Natiq
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Computer Science & Engineering student at Lovely Professional University. Dedicated to turning ideas into reliable, practical digital software.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-mono text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>"{PERSONAL_INFO.philosophy}"</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">Home</a>
              <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">About Me</a>
              <a href="#journey" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">Developer Journey</a>
              <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">Skill Universe</a>
              <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">Projects</a>
              <a href="#how-i-think" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">How I Think</a>
              <a href="#learning" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">Learning Lab</a>
              <a href="#resume" className="text-slate-400 hover:text-cyan-400 transition-colors py-1">Digital Resume</a>
            </div>
          </div>

          {/* Connect & Social Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold mb-4">
              Direct Channels
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn / Mohammad Natiq</span>
              </a>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noreferrer" 
                className="text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub Profile</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to top</span>
            </button>
          </div>

        </div>

        {/* Copyright & Sub-row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 Mohammad Natiq. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed & Built for Software Engineering</span>
            <span>•</span>
            <span className="text-cyan-400 font-bold">LPU Class of 2029</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
