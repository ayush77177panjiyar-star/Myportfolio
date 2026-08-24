import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ isDark }) {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH 📬</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Have an internship opportunity, project inquiry, or technical collaboration? Send a direct message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Social & Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`rounded-3xl p-8 border space-y-6 ${
              isDark 
                ? 'bg-gray-900/80 border-gray-800 shadow-xl' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-2xl font-bold tracking-tight">Contact Information</h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Feel free to connect via LinkedIn, inspect my open-source code on GitHub, or send an email.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-800 hover:border-indigo-500/40 transition group"
                >
                  <div className="p-3 rounded-xl bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono block">Direct Email</span>
                    <span className="text-sm font-semibold group-hover:text-indigo-400 transition">{personal.email}</span>
                  </div>
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-800 hover:border-indigo-500/40 transition group"
                >
                  <div className="p-3 rounded-xl bg-gray-800 text-gray-300 group-hover:bg-indigo-600 group-hover:text-white transition">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono block">GitHub Profile</span>
                    <span className="text-sm font-semibold group-hover:text-indigo-400 transition">github.com/ayush77177panjiyar-star</span>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-800 hover:border-indigo-500/40 transition group"
                >
                  <div className="p-3 rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono block">LinkedIn Profile</span>
                    <span className="text-sm font-semibold group-hover:text-blue-400 transition">linkedin.com/in/ayush-kumar-paniyar</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-800/40 border border-gray-800">
                  <div className="p-3 rounded-xl bg-emerald-600/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-mono block">Location</span>
                    <span className="text-sm font-semibold text-gray-200">{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl p-8 border ${
              isDark 
                ? 'bg-gray-900/80 border-gray-800 shadow-xl' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-2xl font-bold tracking-tight mb-6">Send Me a Message</h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-400">Message Sent Successfully!</h4>
                  <p className="text-xs text-gray-300">
                    Thank you for reaching out, Ayush will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition ${
                          isDark
                            ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Your Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition ${
                          isDark
                            ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship Inquiry / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition ${
                        isDark
                          ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Message</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition resize-none ${
                        isDark
                          ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.01] transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
