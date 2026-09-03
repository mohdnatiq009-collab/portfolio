import React from 'react';
import { 
  Award, 
  CalendarCheck, 
  Users2, 
  Wrench, 
  Sparkles, 
  Flame, 
  FileCode2, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  BadgeCheck
} from 'lucide-react';
import { ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-amber-400" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5 text-blue-400" />;
      case 'Users2': return <Users2 className="w-5 h-5 text-cyan-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-rose-400" />;
      default: return <BadgeCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2': return <FileCode2 className="w-6 h-6 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-purple-400" />;
      default: return <BadgeCheck className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-midnight-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span>09</span>
            <span>//</span>
            <span>Verified Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Achievements & <span className="gradient-text-amber">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Documented milestones and official certifications recognized in computer science coursework and technical engagement.
          </p>
        </div>

        {/* Certifications Row (Prominent 3 Cards) */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-5 flex items-center gap-2">
            <BadgeCheck className="w-4 h-4 text-amber-400" />
            <span>Official Technical Certifications</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-7 border border-white/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top gradient bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.badgeColor}`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {getCertIcon(cert.icon)}
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/5">
                      Verified Certification
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {cert.field}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                      Curriculum Competencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map(s => (
                        <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Completed
                  </span>
                  <span>Supported by CV</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic & Collaborative Achievements Grid (6 Cards) */}
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-5 flex items-center gap-2">
            <Award className="w-4 h-4 text-slate-400" />
            <span>Academic & Engagement Recognitions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-midnight-950/70 border border-white/5 hover:border-white/20 transition-all duration-200 group flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 shrink-0 group-hover:scale-105 transition-transform">
                  {getAchievementIcon(item.icon)}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
