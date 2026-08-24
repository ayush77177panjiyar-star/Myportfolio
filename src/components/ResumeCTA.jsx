import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Sparkles, ExternalLink, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeCTA({ isDark }) {
  const { personal, about, internships, achievements } = portfolioData;
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleDownload = () => {
    // Generate simple readable text resume output or trigger print/pdf
    window.print();
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`rounded-3xl p-8 sm:p-12 border text-center max-w-4xl mx-auto relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-b from-gray-900 via-gray-900 to-indigo-950/50 border-gray-800 shadow-2xl' 
            : 'bg-gradient-to-b from-indigo-50 via-white to-gray-50 border-gray-200 shadow-xl'
        }`}>
          {/* Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Want to explore my journey in detail?
            </h2>

            <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              View my complete experience, software projects, certifications, technical skills, and hackathon achievements in a clean format.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Digital Resume</span>
              </button>

              <button
                onClick={handleDownload}
                className={`px-6 py-3.5 rounded-xl font-bold text-sm border transition flex items-center gap-2 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700'
                    : 'bg-white border-gray-300 text-slate-800 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download / Print Resume (PDF)</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Digital Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left text-gray-200 space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{personal.name}</h3>
                <p className="text-xs text-indigo-400 font-mono">{personal.headline}</p>
              </div>
              <button
                onClick={() => setShowResumeModal(false)}
                className="p-2 rounded-xl bg-gray-800 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Summary */}
            <div className="space-y-4 text-xs sm:text-sm">
              <section className="space-y-1">
                <h4 className="font-bold uppercase tracking-wider text-indigo-400 font-mono">Education</h4>
                <p className="text-white font-semibold">{about.degree}</p>
                <p className="text-gray-400">{about.university}</p>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold uppercase tracking-wider text-indigo-400 font-mono">Internships</h4>
                {internships.map(i => (
                  <div key={i.id} className="p-3 rounded-xl bg-gray-800/60 border border-gray-700/60">
                    <p className="font-bold text-white">{i.role} — {i.organization}</p>
                    <p className="text-gray-400 text-xs font-mono">{i.duration} | ID: {i.internId || i.certId}</p>
                  </div>
                ))}
              </section>

              <section className="space-y-2">
                <h4 className="font-bold uppercase tracking-wider text-indigo-400 font-mono">Featured Projects</h4>
                <div className="p-3 rounded-xl bg-gray-800/60 border border-gray-700/60">
                  <p className="font-bold text-white">Civil_AI Platform (OOSC 4.0 IIIT Allahabad)</p>
                  <p className="text-gray-300 text-xs mt-1">AI statutory copilot with Gemini 2.5 Flash. Includes Legal Guider repo module.</p>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-bold uppercase tracking-wider text-indigo-400 font-mono">Hackathons & Achievements</h4>
                <p className="text-gray-300">🏆 Top 15 — HackForge 2.0 (Geeta University Auditorium Pitch)</p>
                <p className="text-gray-300">🚀 OOSC 4.0 — IIIT Allahabad First Elimination Round Project</p>
              </section>
            </div>

            <div className="pt-4 border-t border-gray-800 flex justify-end gap-3">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold text-xs flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save PDF</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
