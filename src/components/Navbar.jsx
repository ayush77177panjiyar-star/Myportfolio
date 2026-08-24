import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code2, Award, Briefcase, GraduationCap, FolderGit2, Mail, User, ShieldCheck } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Code2 },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: ShieldCheck },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderGit2 },
  { name: 'Achievements', href: '#achievements', icon: Award },
  { name: 'Certifications', href: '#certifications', icon: Award },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section calculation
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isDark 
          ? 'bg-[#090D16]/85 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-white/85 backdrop-blur-md border-b border-gray-200 shadow-sm py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] transition-transform duration-300 group-hover:scale-105">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-lg ${
                isDark ? 'bg-[#090D16] text-white' : 'bg-white text-indigo-600'
              }`}>
                AK
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg tracking-tight transition-colors ${
                isDark ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                Ayush Kumar
              </span>
              <span className="text-[10px] tracking-wider uppercase text-indigo-400 font-semibold">
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-900/40 dark:bg-gray-900/60 p-1.5 rounded-full border border-gray-800/60 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-500/20'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800/60'
                        : 'text-gray-700 hover:text-slate-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions (Theme Toggle & CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-200 ${
                isDark 
                  ? 'bg-gray-800/80 border-gray-700 text-amber-400 hover:bg-gray-700/80 hover:border-amber-400/50' 
                  : 'bg-gray-100 border-gray-200 text-indigo-600 hover:bg-gray-200'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border ${
                isDark ? 'bg-gray-800 border-gray-700 text-amber-400' : 'bg-gray-100 border-gray-200 text-indigo-600'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg border ${
                isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-100 border-gray-200 text-slate-900'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-gray-800 bg-[#090D16]/95 backdrop-blur-xl px-4 pt-3 pb-6 transition-all">
          <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white font-semibold'
                      : isDark
                        ? 'text-gray-300 hover:bg-gray-800'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-75" />
                  {item.name}
                </a>
              );
            })}
          </div>
          <div className="mt-4 pt-3 border-t border-gray-800/60 max-w-md mx-auto">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-2.5 text-center text-xs font-semibold rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
