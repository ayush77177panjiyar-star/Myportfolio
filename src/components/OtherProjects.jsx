import React from 'react';
import { ExternalLink, Github, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function OtherProjects({ isDark }) {
  const { otherProjects } = portfolioData;

  return (
    <section className="py-16 relative overflow-hidden bg-gray-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12 space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-bold">
            MORE PROJECTS & WEB APPLICATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Additional Genuine Code Repositories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                isDark 
                  ? 'bg-gray-900/70 border-gray-800 shadow-xl hover:border-indigo-500/40' 
                  : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400">
                    <Code className="w-5 h-5" />
                  </div>
                  {project.liveDemo && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
                      Live Deployed
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold mb-1 tracking-tight">{project.name}</h3>
                <p className="text-xs text-indigo-400 font-mono mb-4">{project.tagline}</p>
                
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-gray-800/80 border border-gray-700 text-[11px] font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-800/60 flex items-center justify-between gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-xs font-semibold text-white hover:bg-gray-700 transition flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                {project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-semibold text-white hover:bg-indigo-500 transition shadow-md shadow-indigo-600/30 flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="text-xs text-gray-500 font-mono">Repo Active</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
