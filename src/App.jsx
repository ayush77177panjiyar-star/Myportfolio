import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import FeaturedProject from './components/FeaturedProject';
import OtherProjects from './components/OtherProjects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import CertificateModal from './components/CertificateModal';
import Skills from './components/Skills';
import EducationTimeline from './components/EducationTimeline';
import AchievementWall from './components/AchievementWall';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [modalState, setModalState] = useState({
    isOpen: false,
    currentIndex: 0,
    customItem: null
  });

  const certifications = Array.isArray(portfolioData?.certifications) ? portfolioData.certifications : [];

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const openCustomModal = (url, title) => {
    setModalState({
      isOpen: true,
      currentIndex: -1,
      customItem: { url, title }
    });
  };

  const openModalWithIndex = (index) => {
    if (index >= 0 && index < certifications.length) {
      setModalState({
        isOpen: true,
        currentIndex: index,
        customItem: null
      });
    }
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleNextCert = () => {
    if (modalState.currentIndex >= 0 && modalState.currentIndex < certifications.length - 1) {
      setModalState(prev => ({ ...prev, currentIndex: prev.currentIndex + 1 }));
    }
  };

  const handlePrevCert = () => {
    if (modalState.currentIndex > 0) {
      setModalState(prev => ({ ...prev, currentIndex: prev.currentIndex - 1 }));
    }
  };

  const currentModalItem = modalState.customItem 
    ? modalState.customItem 
    : (certifications[modalState.currentIndex] ?? null);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-[#090D16] text-slate-100' : 'bg-slate-50 text-slate-900'} font-['Plus_Jakarta_Sans',sans-serif]`}>
      
      {/* Navigation Bar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Hero Section */}
      <Hero isDark={isDark} />

      {/* About Me */}
      <About isDark={isDark} />

      {/* Skills Matrix */}
      <Skills isDark={isDark} />

      {/* Work Experience / Internships */}
      <Experience isDark={isDark} openModal={openCustomModal} />

      {/* Main Featured Project: Civil AI */}
      <FeaturedProject isDark={isDark} />

      {/* Other Projects */}
      <OtherProjects isDark={isDark} />

      {/* Achievements & Hackathons */}
      <Achievements isDark={isDark} openModal={openCustomModal} />

      {/* Certifications Gallery */}
      <Certificates isDark={isDark} openModalWithIndex={openModalWithIndex} />

      {/* Education & Journey Timeline */}
      <EducationTimeline isDark={isDark} />

      {/* Achievement & Credential Wall */}
      <AchievementWall isDark={isDark} openModal={openCustomModal} />

      {/* Resume Section */}
      <ResumeCTA isDark={isDark} />

      {/* Contact Section */}
      <Contact isDark={isDark} />

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Global Certificate & Media Lightbox Modal */}
      <CertificateModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        currentItem={currentModalItem}
        onNext={modalState.currentIndex >= 0 && modalState.currentIndex < certifications.length - 1 ? handleNextCert : null}
        onPrev={modalState.currentIndex > 0 ? handlePrevCert : null}
      />

    </div>
  );
}
