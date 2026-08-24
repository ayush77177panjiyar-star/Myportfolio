import React from 'react';
import { ExternalLink, Github, Sparkles, ShieldCheck, FileText, Scale, Landmark, MessageSquareText, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const featureIcons = [FileText, ShieldCheck, Scale, Landmark, MessageSquareText, Sparkles];

export default function FeaturedProject({ isDark }) {
  const { featuredProject } = portfolioData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Tag */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MAIN FEATURED PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Civil_AI Civic Copilot Platform
          </h2>
          <p className={`text-base max-w-2xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            AI-Powered Civic & Statutory Legal Assistance Platform for Indian Citizens
          </p>
        </div>

        {/* Large Featured Project Container */}
        <div className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
          isDark 
            ? 'bg-gray-900/80 border-gray-800 shadow-2xl shadow-indigo-950/20' 
            : 'bg-white border-gray-200 shadow-xl'
        }`}>
          
          {/* Top Banner with Badges */}
          <div className="bg-gradient-to-r from-indigo-900/80 via-purple-900/40 to-gray-900 p-6 sm:p-8 border-b border-gray-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-bold font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                {featuredProject.hackathonBadge}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold font-mono">
                {featuredProject.statusBadge}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gray-900/90 border border-gray-700 text-xs font-semibold text-white hover:bg-gray-800 transition flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>

              <a
                href={featuredProject.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-xs font-bold text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02] transition flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo (Render)</span>
              </a>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* Problem & Solution Dual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Problem */}
              <div className="p-6 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-sm uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>The Civic Problem</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {featuredProject.problemStatement}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>The Civil_AI Solution</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  {featuredProject.solution}
                </p>
              </div>
            </div>

            {/* Legal Guider Ecosystem Integration Banner */}
            <div className="p-5 rounded-2xl bg-indigo-950/60 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 mt-0.5 sm:mt-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-indigo-200">{featuredProject.legalGuiderNote.title}</h4>
                  <p className="text-xs text-gray-300 mt-1 max-w-2xl">
                    {featuredProject.legalGuiderNote.description}
                  </p>
                </div>
              </div>
              <a
                href={featuredProject.legalGuiderNote.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/50 text-xs font-mono font-semibold transition whitespace-nowrap flex items-center gap-1.5"
              >
                <span>View Legal_guider Repo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Key Features Grid (6 Modules) */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight">Key Civic Empowerment Modules</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredProject.keyFeatures.map((feat, idx) => {
                  const IconComp = featureIcons[idx % featureIcons.length];
                  return (
                    <div
                      key={idx}
                      className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                        isDark 
                          ? 'bg-gray-900/60 border-gray-800 hover:border-indigo-500/40 hover:bg-gray-800/80' 
                          : 'bg-gray-50 border-gray-200 hover:bg-white shadow-sm'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-base mb-2">{feat.title}</h4>
                      <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tech Stack & Contribution Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-gray-800/60">
              
              <div className="md:col-span-7 space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold">Technology Architecture Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl bg-gray-800/80 border border-gray-700 text-gray-200 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-indigo-400 font-bold">My Core Contribution</h4>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {featuredProject.contribution}
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
