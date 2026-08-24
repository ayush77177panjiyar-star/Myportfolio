import React, { useState } from 'react';
import { Award, Eye, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categories = ['All', 'Internship', 'Technical', 'AI', 'Hackathon', 'Other'];

export default function Certificates({ isDark, openModalWithIndex }) {
  const certifications = Array.isArray(portfolioData?.certifications) ? portfolioData.certifications : [];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter(c => c?.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-gray-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>CERTIFICATIONS GALLERY 📜</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verified Educational & Professional Credentials
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Click any certificate card to open the interactive fullscreen viewer with high-resolution inspection and zoom capabilities.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md shadow-indigo-600/20 scale-105'
                  : isDark
                    ? 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
                    : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        {filteredCerts.length === 0 ? (
          <div className="text-center py-12 p-8 rounded-3xl bg-gray-900/60 border border-gray-800 max-w-md mx-auto space-y-2">
            <Award className="w-10 h-10 text-gray-500 mx-auto" />
            <p className="text-sm font-semibold text-gray-300">No certificates found in "{activeCategory}" category.</p>
            <p className="text-xs text-gray-500">Switch tabs to view other verified certificates and offer letters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => openModalWithIndex && openModalWithIndex(certifications.findIndex(c => c.id === cert.id))}
                className={`group rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 ${
                  isDark 
                    ? 'bg-gray-900/80 border-gray-800 hover:border-indigo-500/50 shadow-xl' 
                    : 'bg-white border-gray-200 shadow-md hover:shadow-2xl'
                }`}
              >
                {/* Image Preview Box */}
                <div className="relative aspect-[4/3] bg-gray-950 overflow-hidden border-b border-gray-800">
                  <img
                    src={cert.image}
                    alt={cert.title ?? 'Certificate'}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-indigo-600/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                      {cert.category ?? 'Credential'}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-xl flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>View Full Certificate</span>
                    </span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-bold text-lg leading-snug group-hover:text-indigo-400 transition-colors">
                    {cert.title ?? ''}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-800/60 font-mono">
                    <span className="font-semibold text-gray-300">{cert.organization ?? ''}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {cert.date ?? ''}
                    </span>
                  </div>

                  {cert.credentialId && (
                    <div className="text-[11px] font-mono text-gray-500 truncate pt-1">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
