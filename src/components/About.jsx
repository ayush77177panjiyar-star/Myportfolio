import React from 'react';
import { Brain, MessageSquare, Users, Target, BookOpen, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Brain: Brain,
  MessageSquare: MessageSquare,
  Users: Users,
  Target: Target,
  Cpu: Sparkles
};

export default function About({ isDark }) {
  const about = portfolioData?.about ?? {};
  const interests = Array.isArray(about.interests) ? about.interests : [];
  const strengths = Array.isArray(about.strengths) ? about.strengths : [];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <UserIcon className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Passionate About Technology & Real-World Impact
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Combining academic rigor in Computer Science with practical software development and AI engineering.
          </p>
        </div>

        {/* Narrative & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <div className={`lg:col-span-7 rounded-3xl p-8 border ${
            isDark 
              ? 'bg-gray-900/70 border-gray-800 shadow-xl' 
              : 'bg-white border-gray-200 shadow-lg'
          } flex flex-col justify-between`}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-800/60">
                <div className="p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl">{about.degree ?? 'B.Tech - Computer Science'}</h3>
                  <p className="text-xs text-indigo-400 font-mono">{about.university ?? 'Geeta University, Panipat'}</p>
                </div>
              </div>

              <p className={`leading-relaxed text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {about.bio ?? ''}
              </p>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-bold">Key Technical Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border ${
                        isDark
                          ? 'bg-gray-800/80 border-gray-700 text-gray-200 hover:border-indigo-500/50 hover:text-indigo-300'
                          : 'bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Active B.Tech CSE Undergraduate
              </span>
              <span className="font-mono">{about.university ?? 'Geeta University'}</span>
            </div>
          </div>

          {/* Quick Pillars Box */}
          <div className={`lg:col-span-5 rounded-3xl p-8 border flex flex-col justify-center space-y-6 ${
            isDark
              ? 'bg-gradient-to-br from-gray-900 via-gray-900/90 to-indigo-950/40 border-gray-800'
              : 'bg-gradient-to-br from-indigo-50/50 via-white to-gray-50 border-gray-200 shadow-lg'
          }`}>
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>CORE VALUES & APPROACH</span>
            </div>
            
            <h3 className="text-2xl font-bold tracking-tight">
              Engineering with Purpose & Precision
            </h3>

            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Rather than accumulating arbitrary stats, I focus on constructing reliable, well-tested applications, participating in high-stakes hackathons like OOSC 4.0 IIIT Allahabad, SIH 2025, and HackForge 2.0, and solving real civic problems.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/60 text-center">
                <span className="block font-bold text-lg text-indigo-400">Software Dev</span>
                <span className="text-[11px] text-gray-400">C++ & Modern Web</span>
              </div>
              <div className="p-4 rounded-2xl bg-gray-800/50 border border-gray-700/60 text-center">
                <span className="block font-bold text-lg text-cyan-400">AI-Assisted</span>
                <span className="text-[11px] text-gray-400">Vibe Coding & Tools</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Elegant Information Cards (Strengths Showcase) */}
        <div className="space-y-4">
          <h3 className="text-center text-xs uppercase tracking-widest text-indigo-400 font-bold">
            Professional Strengths & Core Competencies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Code2;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-gray-900/60 border-gray-800 hover:border-indigo-500/40 hover:bg-gray-900/90'
                      : 'bg-white border-gray-200 shadow-md hover:shadow-xl'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function UserIcon(props) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}
