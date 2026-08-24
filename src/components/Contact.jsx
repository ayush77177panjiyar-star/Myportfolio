import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

export default function Contact({ isDark }) {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Form Validation Handler
  const validateForm = () => {
    const errors = {};
    const nameTrimmed = formData.name.trim();
    const emailTrimmed = formData.email.trim();
    const messageTrimmed = formData.message.trim();

    // Name: min 2 chars
    if (!nameTrimmed || nameTrimmed.length < 2) {
      errors.name = 'Name must be at least 2 characters long.';
    }

    // Email format regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailTrimmed || !emailRegex.test(emailTrimmed)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Message: min 5 chars
    if (!messageTrimmed || messageTrimmed.length < 5) {
      errors.message = 'Message must be at least 5 characters long.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate inputs
    if (!validateForm()) {
      return;
    }

    // Check if Supabase keys are configured
    if (!isSupabaseConfigured) {
      setSubmitError("Supabase configuration is missing. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment settings.");
      return;
    }

    setLoading(true);

    try {
      const payload = [
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject?.trim() || null,
          message: formData.message.trim()
        }
      ];

      // Step 1: Try insert with .select()
      let { data, error } = await supabase
        .from('hire_requests')
        .insert(payload)
        .select();

      // If error occurs (e.g. 401 or 42501 due to RLS SELECT policies blocking read access), fallback to insert without .select()
      if (error && (error.code === '42501' || error.status === 401 || error.message?.includes('401'))) {
        console.warn('Retrying insert without .select() in case RLS blocks SELECT query...');
        const retryResult = await supabase
          .from('hire_requests')
          .insert(payload);
        error = retryResult.error;
      }

      if (error) {
        console.error('Supabase hire_requests submission error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        setSubmitError("Something went wrong while sending your message. Please try again.");
      } else {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFieldErrors({});
      }
    } catch (err) {
      console.error('Unexpected contact form submission error:', err);
      setSubmitError("Something went wrong while sending your message. Please try again.");
    } finally {
      setLoading(false);
    }
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
            Have a software development opportunity, project inquiry, or technical collaboration? Send a direct message!
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

                {personal.github && (
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
                )}

                {personal.linkedin && (
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
                )}

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

          {/* Contact / Hire Me Form Column */}
          <div className="lg:col-span-7">
            <div className={`rounded-3xl p-8 border ${
              isDark 
                ? 'bg-gray-900/80 border-gray-800 shadow-xl' 
                : 'bg-white border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-2xl font-bold tracking-tight mb-6">Send Me a Message / Hire Me</h3>

              {/* Success Notification Banner */}
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-fadeIn">
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-400">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto">
                    Thanks for reaching out! Your message has been received. I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* General Submit Error Banner */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-xs">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Your Name *</label>
                      <input
                        type="text"
                        disabled={loading}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: null });
                        }}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition ${
                          fieldErrors.name
                            ? 'bg-rose-500/5 border-rose-500/50 text-white focus:border-rose-500'
                            : isDark
                              ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                              : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{fieldErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Your Email *</label>
                      <input
                        type="email"
                        disabled={loading}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: null });
                        }}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition ${
                          fieldErrors.email
                            ? 'bg-rose-500/5 border-rose-500/50 text-white focus:border-rose-500'
                            : isDark
                              ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                              : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono mt-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{fieldErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field (Optional) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Subject (Optional)</label>
                    <input
                      type="text"
                      disabled={loading}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Internship / Project Opportunity"
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition ${
                        isDark
                          ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                          : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                      }`}
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Message *</label>
                    <textarea
                      rows={5}
                      disabled={loading}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: null });
                      }}
                      placeholder="Write your message here..."
                      className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition resize-none ${
                        fieldErrors.message
                          ? 'bg-rose-500/5 border-rose-500/50 text-white focus:border-rose-500'
                          : isDark
                            ? 'bg-gray-800/80 border-gray-700 text-white focus:border-indigo-500'
                            : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-600'
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1 font-mono mt-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{fieldErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl font-bold text-sm shadow-lg transition flex items-center justify-center gap-2 ${
                      loading
                        ? 'bg-indigo-600/50 text-white/70 cursor-not-allowed'
                        : 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-indigo-600/30 hover:scale-[1.01]'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
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
