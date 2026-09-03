import React, { useState } from 'react';
import { 
  FileText, 
  FileDown, 
  Eye, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  X
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedinIcon } from '../components/BrandIcons';

export const ResumeSection: React.FC = () => {
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-midnight-900/50">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>10</span>
            <span>//</span>
            <span>Official Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Digital <span className="gradient-text-blue">Resume / CV</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
            Curated, recruiter-friendly digital CV reflecting current academic progress, core technical proficiencies, and verified achievements.
          </p>
        </div>

        {/* Digital Resume Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive CV Preview Document */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden bg-midnight-950/80">
            
            {/* Top Sheet Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-sm font-mono text-cyan-400 font-semibold mt-1">
                  {PERSONAL_INFO.role} • {PERSONAL_INFO.subRole}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowPdfModal(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>View CV</span>
                </button>

                <a
                  href={PERSONAL_INFO.cvFile}
                  download="Mohammad_Natiq_Professional_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>

            {/* CV Details Grid */}
            <div className="space-y-6 text-xs sm:text-sm text-slate-300">
              
              {/* Profile */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Profile Overview</span>
                </h4>
                <p className="text-slate-300 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5 text-xs sm:text-sm">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              {/* Education Summary */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Education</span>
                </h4>
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="font-bold text-white text-xs sm:text-sm">Lovely Professional University</div>
                      <div className="text-cyan-400 font-mono text-xs">B.Tech in Computer Science & Engineering</div>
                    </div>
                    <div className="text-right font-mono text-[11px] text-slate-400">
                      <div>Punjab • 2025–2029</div>
                      <div className="text-emerald-400 font-semibold">Undergraduate</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs">
                      <span className="font-medium text-white">Class XII — TS Board</span>
                      <span className="font-mono text-slate-400 text-[11px]">2023–2024</span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center text-xs">
                      <span className="font-medium text-white">Class X — ICSE Board</span>
                      <span className="font-mono text-slate-400 text-[11px]">2020–2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Technical Proficiencies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Technical Skills</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400 font-mono block text-[11px] mb-1">Programming:</span>
                    <span className="text-white font-medium">Python, C, C++</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-slate-400 font-mono block text-[11px] mb-1">Web & Database:</span>
                    <span className="text-white font-medium">HTML, CSS, JavaScript, MySQL</span>
                  </div>
                </div>
              </div>

              {/* Certifications Highlight */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Certifications</span>
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-medium">
                    Python Certification
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium">
                    Cybersecurity Certification
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-medium">
                    Artificial Intelligence Certification
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Quick Verification Card & Contacts */}
          <div className="lg:col-span-4 space-y-5">
            
            {/* Download CTA Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 shadow-xl text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25">
                <FileText className="w-7 h-7" />
              </div>

              <h4 className="text-lg font-bold text-white mb-1">
                Official CV Document
              </h4>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Download the complete verified curriculum vitae of Mohammad Natiq in standard PDF format.
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.cvFile}
                  download="Mohammad_Natiq_Professional_CV.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download CV (PDF)</span>
                </a>

                <button
                  onClick={() => setShowPdfModal(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Interactive Fullscreen Preview</span>
                </button>
              </div>
            </div>

            {/* Direct Verified Contact Links */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-xl space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-3">
                Verified Contact Details
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center gap-3 transition-colors text-xs text-slate-300 group"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-500 font-mono">Email Address</div>
                  <div className="text-white font-medium truncate">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center gap-3 transition-colors text-xs text-slate-300 group"
              >
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-500 font-mono">Mobile Number</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center gap-3 transition-colors text-xs text-slate-300 group"
              >
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-500 font-mono">LinkedIn Profile</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.linkedinDisplay}</div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white" />
              </a>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3 text-xs text-slate-300">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-500 font-mono">Current Campus</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Fullscreen PDF Preview Modal */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-midnight-950/85 backdrop-blur-xl">
          <div className="fixed inset-0" onClick={() => setShowPdfModal(false)} />
          <div className="relative w-full max-w-4xl h-[85vh] rounded-3xl glass-panel bg-midnight-900 border border-white/20 shadow-2xl flex flex-col z-10 overflow-hidden">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-midnight-950">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="font-bold text-sm text-white">Mohammad Natiq — Professional CV</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.cvFile}
                  download="Mohammad_Natiq_CV.pdf"
                  className="text-xs px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 flex items-center gap-1"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  Download
                </a>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <iframe
              src={PERSONAL_INFO.cvFile}
              title="Mohammad Natiq CV"
              className="w-full h-full bg-slate-900"
            />
          </div>
        </div>
      )}
    </section>
  );
};
