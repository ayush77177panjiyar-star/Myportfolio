import React from 'react';
import { Trophy, Award, Briefcase, Rocket, Eye, Sparkles } from 'lucide-react';

export default function AchievementWall({ isDark, openModal }) {
  const wallItems = [
    {
      id: 'wall-1',
      title: 'HackForge 2.0 Official Top 15 Certificate of Appreciation',
      type: '🏆 Achievement',
      category: 'Hackathon Award',
      organization: 'Geeta University (Team Hack Titans)',
      image: '/assets/hackforge-certificate.jpg',
      caption: 'Awarded to Ayush Kumar from Team Hack Titans for securing Top 15 in HackForge 2.0 (14-15 April 2026).',
      size: 'large'
    },
    {
      id: 'wall-2',
      title: 'HackForge 2.0 Team "Hack Titans" Participant ID Cards',
      type: '🚀 Hackathon',
      category: 'Participant Credentials',
      organization: 'Geeta University',
      image: '/assets/hackforge-id-cards.png',
      caption: 'Official participant badges for Team Hack Titans (Ayush, Abhay, Aaditya, Krishna).',
      size: 'medium'
    },
    {
      id: 'wall-3',
      title: 'CodSoft C++ Programming Internship Offer Letter',
      type: '💼 Internship',
      category: 'C++ Virtual Internship',
      organization: 'CodSoft (ID: BY25RY271995)',
      image: '/assets/codsoft-offer-letter.png',
      caption: '1-Month C++ Programming Virtual Internship Offer Letter from CodSoft.',
      size: 'medium'
    },
    {
      id: 'wall-4',
      title: 'Saiket Systems Front-end Internship Certificate',
      type: '💼 Internship',
      category: 'Front-end Development',
      organization: 'Saiket Systems (SKS/A2/C101286)',
      image: '/assets/saiket-certificate.png',
      caption: 'Official Internship Completion Certificate from Saiket Systems.',
      size: 'medium'
    },
    {
      id: 'wall-5',
      title: 'TalentGro Global Internship Certificate',
      type: '💼 Internship',
      category: 'Web Design & Development',
      organization: 'TalentGro Global (TG2607DC2U5A)',
      image: '/assets/talentgro-certificate.png',
      caption: 'Official Web Design & Development Internship Certificate.',
      size: 'medium'
    },
    {
      id: 'wall-6',
      title: 'Tech Fest YUGANTRAN 2.0 Certificate of Participation',
      type: '📜 Certificate',
      category: 'Tech Fest',
      organization: 'Geeta University School of CSE',
      image: '/assets/yugantran-certificate.png',
      caption: 'Certificate of Achievement for participation in Tech Fest Yugantran 2.0.',
      size: 'medium'
    },
    {
      id: 'wall-7',
      title: 'HackForge 2.0 Stage Presentation & Pitch',
      type: '🏆 Achievement',
      category: 'Auditorium Pitching',
      organization: 'Geeta University',
      image: '/assets/hackforge-stage.png',
      caption: 'Ayush presenting project analytics on auditorium stage during HackForge 2.0 finals.',
      size: 'large'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-950/60 border-y border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CREDENTIAL & ACHIEVEMENT WALL 🏛️</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verified Digital Wall of Honor
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A comprehensive visual showcase highlighting hackathon stage pitching, team collaboration, and verified internship credentials.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {wallItems.map((item) => {
            const isLarge = item.size === 'large';
            return (
              <div
                key={item.id}
                onClick={() => openModal(item.image, item.title)}
                className={`group relative rounded-3xl overflow-hidden bg-gray-950 border border-gray-800 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-500/50 ${
                  isLarge ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                {/* Image Background */}
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-indigo-600/90 text-white text-[11px] font-bold font-mono uppercase tracking-wider backdrop-blur-md">
                      {item.type}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-900/80 border border-gray-700 text-gray-300 text-[11px] font-mono backdrop-blur-md">
                      {item.organization}
                    </span>
                  </div>

                  {/* Eye Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-2xl flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>Inspect Credential</span>
                    </span>
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <h3 className="text-white font-bold text-lg leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2">
                      {item.caption}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
