import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ isDark }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-300 ${
      isDark ? 'bg-[#060911] border-gray-800 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white">Ayush Kumar</span>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 text-[10px] font-mono border border-indigo-500/30">CSE</span>
            </a>
            <p className="text-xs text-gray-400 max-w-sm">
              Computer Science & Engineering student at Geeta University. Aspiring software developer specializing in C++, JavaScript, Frontend Architecture, and AI applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-medium">
            <a href="#about" className="hover:text-indigo-400 transition">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition">Skills</a>
            <a href="#experience" className="hover:text-indigo-400 transition">Experience</a>
            <a href="#projects" className="hover:text-indigo-400 transition">Projects</a>
            <a href="#achievements" className="hover:text-indigo-400 transition">Achievements</a>
            <a href="#certifications" className="hover:text-indigo-400 transition">Certifications</a>
            <a href="#contact" className="hover:text-indigo-400 transition">Contact</a>
          </div>

          {/* Socials & Top Button */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-white hover:border-indigo-500 transition"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-gray-800/80 border border-gray-700 text-gray-300 hover:text-white hover:border-indigo-500 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} Ayush Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
