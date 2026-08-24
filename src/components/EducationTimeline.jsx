import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2, ChevronRight, Compass } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationTimeline({ isDark }) {
  const { education, journey } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gray-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION & JOURNEY TIMELINE 🎓</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Education & Development Roadmap
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Chronological progression from core computer science studies to building production applications and hackathon achievements.
          </p>
        </div>

        {/* Education Main Highlight Card */}
        <div className={`rounded-3xl p-8 border mb-16 transition-all duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-gray-900 via-gray-900/90 to-indigo-950/30 border-gray-800 shadow-xl' 
            : 'bg-white border-gray-200 shadow-lg'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{education.status}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{education.institution}</h3>
                <p className="text-sm font-semibold text-indigo-400">{education.degree}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-gray-800/40 p-3 rounded-2xl border border-gray-800">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{education.location}</span>
            </div>
          </div>
        </div>

        {/* Journey Timeline Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 justify-center text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold mb-8">
            <Compass className="w-4 h-4" />
            <span>SOFTWARE DEVELOPER EVOLUTION TIMELINE</span>
          </div>

          <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
            {journey.map((item) => (
              <div key={item.step} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-gray-900 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Timeline Content Box */}
                <div className={`rounded-2xl p-6 border transition-all duration-300 ${
                  isDark
                    ? 'bg-gray-900/60 border-gray-800 group-hover:border-indigo-500/40 group-hover:bg-gray-900/90'
                    : 'bg-white border-gray-200 shadow-sm group-hover:shadow-md'
                }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                      Step 0{item.step}
                    </span>
                    {item.institution && (
                      <span className="text-xs font-mono text-gray-400">{item.institution}</span>
                    )}
                  </div>

                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.description}
                  </p>

                  {item.skills && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.projects && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.projects.map((p, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-[11px] font-mono">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.organizations && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.organizations.map((org, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-mono">
                          {org}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.events && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.events.map((ev, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono">
                          {ev}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
