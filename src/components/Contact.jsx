import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Copy, Check, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ isDark }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (personal?.email) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>LET'S CONNECT 📬</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's Connect
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Have a project, opportunity, or idea in mind? I'd love to hear from you.
            <br className="hidden sm:inline" />
            {' '}Feel free to reach out to me directly via email.
          </p>
        </div>

        {/* Main CTA Container */}
        <div className="max-w-4xl mx-auto">
          {/* Primary Email CTA Box */}
          <div className={`rounded-3xl p-8 sm:p-12 border relative overflow-hidden text-center space-y-8 ${
            isDark 
              ? 'bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-indigo-950/40 border-gray-800 shadow-2xl backdrop-blur-md' 
              : 'bg-gradient-to-b from-white via-indigo-50/40 to-white border-gray-200 shadow-xl'
          }`}>
            
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto shadow-inner">
              <Mail className="w-8 h-8" />
            </div>

            <div className="space-y-3 max-w-xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Send Me a Direct Email
              </h3>
              <p className={`text-sm sm:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Whether you have project opportunities, software internships, freelance work, or just want to say hi, my inbox is always open.
              </p>
            </div>

            {/* Email Address Pill Display */}
            <div className={`inline-flex flex-wrap items-center justify-center gap-3 p-3 px-5 rounded-2xl border transition ${
              isDark 
                ? 'bg-gray-950/70 border-gray-800 text-white' 
                : 'bg-gray-100/80 border-gray-300 text-gray-900'
            }`}>
              <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <span className="text-sm sm:text-base font-mono font-semibold tracking-wide select-all">
                {personal.email}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${personal.email}`}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-indigo-600/30 hover:scale-[1.02] hover:shadow-indigo-600/40 transition-all duration-200 flex items-center gap-2.5"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>

              <button
                onClick={handleCopyEmail}
                className={`px-6 py-4 rounded-xl font-bold text-sm sm:text-base border transition-all duration-200 flex items-center gap-2 hover:scale-[1.02] ${
                  copied
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                    : isDark
                      ? 'bg-gray-800/80 border-gray-700 text-gray-200 hover:bg-gray-700/80'
                      : 'bg-white border-gray-300 text-slate-800 hover:bg-gray-50 shadow-sm'
                }`}
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400 animate-fadeIn" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 text-indigo-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Social & Location Quick Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            
            {/* GitHub Card */}
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl border flex items-center gap-4 transition group ${
                  isDark 
                    ? 'bg-gray-900/60 border-gray-800/80 hover:border-indigo-500/40 hover:bg-gray-900/90' 
                    : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-md'
                }`}
              >
                <div className="p-3 rounded-xl bg-gray-800/80 text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition">
                  <Github className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-gray-400 uppercase font-mono block">GitHub</span>
                  <span className="text-xs font-semibold truncate block group-hover:text-indigo-400 transition">
                    ayush77177panjiyar-star
                  </span>
                </div>
              </a>
            )}

            {/* LinkedIn Card */}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-2xl border flex items-center gap-4 transition group ${
                  isDark 
                    ? 'bg-gray-900/60 border-gray-800/80 hover:border-blue-500/40 hover:bg-gray-900/90' 
                    : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] text-gray-400 uppercase font-mono block">LinkedIn</span>
                  <span className="text-xs font-semibold truncate block group-hover:text-blue-400 transition">
                    ayush-kumar-paniyar
                  </span>
                </div>
              </a>
            )}

            {/* Location Card */}
            <div className={`p-5 rounded-2xl border flex items-center gap-4 ${
              isDark 
                ? 'bg-gray-900/60 border-gray-800/80 text-gray-200' 
                : 'bg-white border-gray-200 text-gray-800'
            }`}>
              <div className="p-3 rounded-xl bg-emerald-600/10 text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-gray-400 uppercase font-mono block">Location</span>
                <span className="text-xs font-semibold truncate block text-gray-300">
                  {personal.location}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
