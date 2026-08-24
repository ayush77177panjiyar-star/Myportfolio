import React from 'react';
import { Briefcase, Calendar, ShieldCheck, ExternalLink, Award, UserCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience({ isDark, openModal }) {
  const safeInternships = Array.isArray(portfolioData?.internships) ? portfolioData.internships : [];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INTERNSHIPS & PROFESSIONAL EXPERIENCE 💼</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verified Industry Work Experience
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Hands-on internships supported by official completion certificates and credentials.
          </p>
        </div>

        {/* Timeline Cards Container */}
        <div className="space-y-8">
          {safeInternships.map((intern) => {
            const skills = Array.isArray(intern?.skills) ? intern.skills : [];

            return (
              <div
                key={intern.id}
                className={`rounded-3xl p-8 border transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-900/80 border-gray-800 shadow-xl hover:border-indigo-500/40' 
                    : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Information Column */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    {/* Company & Role Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-gray-800/60">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 text-xs font-bold font-mono">
                            {intern.role ?? 'Software Intern'}
                          </span>
                          {intern.accreditation && (
                            <span className="text-[11px] text-gray-400 font-mono flex items-center gap-1">
                              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                              {intern.accreditation}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">{intern.organization ?? ''}</h3>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">{intern.tagline ?? ''}</p>
                      </div>

                      <div className="flex flex-col items-start lg:items-end gap-1 text-xs font-mono text-indigo-400 bg-indigo-500/5 p-3 rounded-2xl border border-indigo-500/10">
                        <div className="flex items-center gap-1.5 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{intern.duration ?? ''}</span>
                        </div>
                        {intern.internId && (
                          <span className="text-gray-400 text-[11px]">ID: {intern.internId}</span>
                        )}
                        {intern.certId && (
                          <span className="text-gray-400 text-[11px]">Cert ID: {intern.certId}</span>
                        )}
                      </div>
                    </div>

                    {/* Mentor & Institutional context if present */}
                    {intern.mentor && (
                      <div className="flex items-center gap-2 text-xs text-gray-300 bg-gray-800/40 p-3 rounded-xl border border-gray-800">
                        <UserCheck className="w-4 h-4 text-cyan-400" />
                        <span>Mentor: <strong>{intern.mentor}</strong></span>
                        <span className="text-gray-500">|</span>
                        <span>{intern.institution ?? 'Geeta University'}</span>
                      </div>
                    )}

                    {/* Description */}
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {intern.description ?? ''}
                    </p>

                    {/* Verified Skills Tags */}
                    {skills.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">Demonstrated Competencies</span>
                        <div className="flex flex-wrap gap-2">
                          {skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-3 py-1 rounded-xl bg-gray-800/90 border border-gray-700 text-xs font-medium text-gray-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Certificate Preview Box Column */}
                  {intern.certificateImage && (
                    <div className="lg:col-span-4 flex flex-col items-center">
                      <div
                        onClick={() => openModal && openModal(intern.certificateImage, `${intern.organization} Internship Certificate`)}
                        className="relative group rounded-2xl overflow-hidden aspect-[4/3] w-full max-w-sm bg-gray-950 border border-gray-800 cursor-pointer shadow-lg hover:border-indigo-500/50 transition-all duration-300"
                      >
                        <img
                          src={intern.certificateImage}
                          alt={`${intern.organization} Certificate`}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex items-end justify-center p-4" />
                        
                        <div className="absolute bottom-3 left-3 right-3 text-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/90 text-white text-xs font-semibold shadow-lg backdrop-blur-md">
                            <Award className="w-3.5 h-3.5" />
                            <span>View Verified Certificate</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
