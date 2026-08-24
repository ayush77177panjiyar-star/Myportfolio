import React from 'react';
import { Github, Linkedin, ArrowRight, Download, Terminal, Code2, Sparkles, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ isDark }) {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Developer Background Grid & Glows */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-grid-pattern opacity-40' : 'bg-grid-pattern-light opacity-30'}`} />
      
      {/* Ambient Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Developer Elements */}
      <div className="hidden lg:block absolute left-8 top-1/3 p-3 rounded-2xl glass-panel border border-indigo-500/20 text-indigo-400 text-xs font-mono animate-float">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>cpp_dev.h</span>
        </div>
      </div>
      
      <div className="hidden lg:block absolute right-12 top-1/4 p-3 rounded-2xl glass-panel border border-cyan-500/20 text-cyan-400 text-xs font-mono animate-float" style={{ animationDelay: '2s' }}>
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span>Frontend Architecture</span>
        </div>
      </div>

      <div className="hidden lg:block absolute right-1/4 bottom-16 p-3 rounded-2xl glass-panel border border-emerald-500/20 text-emerald-400 text-xs font-mono animate-float" style={{ animationDelay: '4s' }}>
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span>Generative AI</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>B.Tech CSE Student & Aspiring Software Developer</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block text-gray-300 font-medium text-lg sm:text-xl lg:text-2xl mb-2">
                {personal.greeting}
              </span>
              <span className={`block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Aspiring Software Developer
              </span>
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent block mt-1">
                Building Real-World Solutions
              </span>
            </h1>

            {/* Description */}
            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {personal.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] transition-all duration-200 flex items-center gap-2"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#resume"
                className={`px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] ${
                  isDark
                    ? 'bg-gray-900/60 border-gray-700 text-gray-200 hover:bg-gray-800 hover:border-gray-600'
                    : 'bg-white border-gray-300 text-slate-800 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-900/80 border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500/50' 
                      : 'bg-white border-gray-200 text-gray-700 hover:text-slate-900 shadow-sm'
                  }`}
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all duration-200 hover:scale-110 ${
                    isDark 
                      ? 'bg-gray-900/80 border-gray-800 text-gray-300 hover:text-white hover:border-indigo-500/50' 
                      : 'bg-white border-gray-200 text-gray-700 hover:text-slate-900 shadow-sm'
                  }`}
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </a>
              </div>

              <div className="h-6 w-[1px] bg-gray-800 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Geeta University, Panipat</span>
              </div>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 opacity-60 blur-xl group-hover:opacity-90 transition duration-500" />
              
              {/* Card Container */}
              <div className={`relative rounded-3xl overflow-hidden p-2 border ${
                isDark ? 'bg-gray-900/90 border-gray-800' : 'bg-white border-gray-200 shadow-xl'
              }`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-950">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  
                  {/* Photo Overlay Info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10 backdrop-blur-md">
                    <p className="text-white font-bold text-base tracking-tight">{personal.name}</p>
                    <p className="text-indigo-400 text-xs font-medium mt-0.5">B.Tech Computer Science & Engineering</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono border border-indigo-500/30">C++</span>
                      <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">JavaScript</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
