import React from 'react';
import { Trophy, ExternalLink, Github, Sparkles, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements({ isDark, openModal }) {
  const achievements = Array.isArray(portfolioData?.achievements) ? portfolioData.achievements : [];
  const hackforge = achievements[0] ?? null;
  const oosc = achievements.find(a => a.id === 'oosc-4') ?? achievements[1] ?? null;
  const hackforgeImages = Array.isArray(hackforge?.images) ? hackforge.images : [];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-gray-950/40">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Hackathon Achievements 🏆</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Recognized Excellence & Hackathon Performance
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Real competition results achieved through intense collaboration, architectural planning, and stage pitching.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* HackForge 2.0 Card */}
          {hackforge && (
            <div className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
              isDark 
                ? 'bg-gray-900/80 border-gray-800 shadow-xl hover:border-amber-500/40' 
                : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl'
            }`}>
              <div>
                {/* Badge & Title */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold font-mono">
                    🏆 {hackforge.title ?? 'Top 15 — HackForge 2.0'}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">{hackforge.organization ?? 'Geeta University'}</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  HackForge 2.0 Stage Presentation & Pitch
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {hackforge.description ?? ''}
                </p>

                {/* Real Photographs Grid */}
                {hackforgeImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {hackforgeImages.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => openModal && openModal(img.url, `HackForge 2.0 - ${img.caption}`)}
                        className="relative group rounded-2xl overflow-hidden aspect-[4/3] bg-gray-950 cursor-pointer border border-gray-800"
                      >
                        <img
                          src={img.url}
                          alt={img.caption ?? 'HackForge 2.0'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-[10px] text-white font-medium line-clamp-2">{img.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-800/60 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs text-amber-400 font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Auditorium Pitching & Team Collaboration
                </span>
                <button
                  onClick={() => openModal && openModal('/assets/hackforge-certificate.jpg', 'HackForge 2.0 Certificate')}
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                >
                  <span>View Official Certificate</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* OOSC 4.0 — IIIT Allahabad Card */}
          {oosc && (
            <div className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between ${
              isDark 
                ? 'bg-gray-900/80 border-gray-800 shadow-xl hover:border-indigo-500/40' 
                : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl'
            }`}>
              <div>
                {/* Badge & Title */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-bold font-mono">
                    {oosc.badge ?? 'OOSC 4.0 — IIIT Allahabad'}
                  </span>
                  <span className="text-xs text-indigo-400 font-mono">First Elimination Round</span>
                </div>

                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  Civil AI Project Achievement
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {oosc.description ?? ''}
                </p>

                {/* Highlights Checklist */}
                <div className="space-y-3 mb-6 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Hackathon Highlights</h4>
                  <ul className="space-y-2 text-xs">
                    {(oosc.highlights ?? []).map((h, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800/60 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {oosc.github && (
                    <a
                      href={oosc.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs font-semibold text-white hover:bg-gray-700 transition flex items-center gap-2"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                  
                  {oosc.liveDemo && (
                    <a
                      href={oosc.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-500 transition shadow-md shadow-indigo-600/30 flex items-center gap-2"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
