import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science & Engineering",
      institution: "Lovely Professional University",
      period: "2025 – 2029",
      location: "Punjab, India",
      status: "In Progress",
      type: "Undergraduate Degree",
      icon: GraduationCap,
      color: "from-blue-600 to-cyan-500",
      highlights: [
        "Core coursework in C, C++, Data Structures, Relational Database Management Systems (MySQL), and Discrete Mathematics.",
        "Hands-on engineering lab projects spanning low-level algorithms and full-stack web prototypes.",
        "Active member of departmental technical learning sessions and collaborative software cohorts."
      ]
    },
    {
      degree: "Class XII (Senior Secondary)",
      major: "Science Stream (Mathematics, Physics, Chemistry)",
      institution: "TS Board",
      period: "2023 – 2024",
      status: "Completed",
      type: "Higher Secondary",
      icon: Award,
      color: "from-purple-600 to-indigo-500",
      highlights: [
        "Rigorous foundation in analytical calculus, physics principles, and systematic reasoning.",
        "Cultivated strong aptitude for quantitative problem solving and computing fundamentals."
      ]
    },
    {
      degree: "Class X (Secondary Education)",
      major: "General Science & Mathematics",
      institution: "ICSE Board",
      period: "2020 – 2021",
      status: "Completed",
      type: "Secondary School",
      icon: BookOpen,
      color: "from-emerald-600 to-teal-500",
      highlights: [
        "Structured curriculum emphasizing scientific inquiry, mathematical rigor, and written communication.",
        "Early exposure to computing logic and disciplined academic study habits."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-midnight-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 uppercase tracking-widest mb-3">
            <span>03</span>
            <span>//</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Formal <span className="gradient-text-blue">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Structured academic milestones fostering engineering discipline, computational theory, and practical problem solving.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {educationData.map((item, idx) => {
            const Icon = item.icon;
            const isUniversity = idx === 0;

            return (
              <div
                key={item.degree}
                className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group ${
                  isUniversity
                    ? 'glass-panel border-cyan-500/30 shadow-xl shadow-cyan-500/10 ring-1 ring-cyan-400/20'
                    : 'bg-midnight-900/60 border border-white/5 hover:border-white/15'
                }`}
              >
                <div>
                  {/* Top Bar with Icon and Period */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-midnight-950 rounded-[15px] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-mono text-xs font-semibold text-slate-300 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full mt-1 ${
                        item.status === 'In Progress'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Degree & Major */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 font-mono mb-2">
                    {item.major}
                  </p>
                  
                  {/* Institution */}
                  <div className="text-sm font-medium text-slate-300 mb-4 pb-4 border-b border-white/5 flex items-center justify-between">
                    <span>{item.institution}</span>
                    {item.location && (
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {item.location}
                      </span>
                    )}
                  </div>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-2.5">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{item.type}</span>
                  <span>{isUniversity ? 'LPU Campus' : 'Board Affiliated'}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
