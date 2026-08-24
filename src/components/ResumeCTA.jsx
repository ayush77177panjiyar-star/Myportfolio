import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Sparkles, ExternalLink, X, Eye, ZoomIn, ZoomOut } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeCTA({ isDark }) {
  const { personal, about, internships } = portfolioData;
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handlePrint = () => {
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
              View my official resume covering C/C++ programming, web development, AI-assisted coding tools, internships, and hackathons.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                <span>View Official Resume Document</span>
              </button>

              <a
                href={personal.resumeImage}
                download="Ayush_Kumar_Resume.png"
                className={`px-6 py-3.5 rounded-xl font-bold text-sm border transition flex items-center gap-2 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-gray-200 hover:bg-gray-700'
                    : 'bg-white border-gray-300 text-slate-800 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Fullscreen Interactive Resume Lightbox Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn">
          
          {/* Header Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
            <div className="text-white text-xs sm:text-sm font-semibold bg-gray-900/80 px-4 py-2 rounded-2xl border border-gray-800 backdrop-blur-md flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Ayush Kumar — Official Resume</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-gray-900/80 p-1.5 rounded-2xl border border-gray-800 backdrop-blur-md text-white">
                <button
                  onClick={() => setZoom(prev => Math.max(0.5, prev - 0.25))}
                  className="p-1.5 rounded-xl hover:bg-gray-800 transition"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={() => setZoom(prev => Math.min(2.5, prev + 0.25))}
                  className="p-1.5 rounded-xl hover:bg-gray-800 transition"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>

              <a
                href={personal.resumeImage}
                download="Ayush_Kumar_Resume.png"
                className="p-2.5 bg-gray-900/80 hover:bg-gray-800 text-white rounded-2xl border border-gray-800 backdrop-blur-md transition flex items-center gap-1 text-xs font-semibold"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                onClick={() => { setShowResumeModal(false); setZoom(1); }}
                className="p-2.5 bg-rose-600/80 hover:bg-rose-600 text-white rounded-2xl border border-rose-500/50 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Central Image View */}
          <div className="relative max-w-4xl max-h-[85vh] overflow-auto flex items-center justify-center p-2 rounded-2xl mt-8">
            <img
              src={personal.resumeImage}
              alt="Ayush Kumar Official Resume"
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }}
              className="max-h-[80vh] w-auto object-contain rounded-xl shadow-2xl border border-gray-800"
            />
          </div>

        </div>
      )}
    </section>
  );
}
