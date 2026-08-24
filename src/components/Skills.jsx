import React from 'react';
import { Code2, Globe, Wrench, Cpu, Users, ShieldCheck, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills({ isDark }) {
  const { skills } = portfolioData;

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
      textColor: "text-blue-400",
      items: skills.programming
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-indigo-500/20 to-cyan-500/20",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400",
      items: skills.webDev
    },
    {
      title: "Tools & Version Control",
      icon: Wrench,
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-400",
      items: skills.tools
    },
    {
      title: "AI & Modern Tech",
      icon: Cpu,
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
      textColor: "text-emerald-400",
      items: skills.ai
    },
    {
      title: "Soft & Leadership Skills",
      icon: Users,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
      items: skills.soft
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TECHNICAL & PROFESSIONAL SKILLS ⚡</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Comprehensive Skill Set
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Categorized technical capabilities, engineering tools, and core interpersonal skills.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, idx) => {
            const IconComp = group.icon;
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  isDark
                    ? 'bg-gray-900/70 border-gray-800 shadow-xl hover:border-indigo-500/40'
                    : 'bg-white border-gray-200 shadow-lg hover:shadow-2xl'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${group.color} border ${group.borderColor} ${group.textColor}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-xl tracking-tight">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all duration-200 hover:scale-105 ${
                        isDark
                          ? 'bg-gray-800/80 border-gray-700 text-gray-200 hover:border-indigo-500/50 hover:bg-gray-800'
                          : 'bg-gray-100 border-gray-200 text-gray-800 hover:bg-gray-200'
                      }`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
