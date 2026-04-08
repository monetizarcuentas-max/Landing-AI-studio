
import React from 'react';
import { headerIconBase64 } from '../assets/header-icon';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLinkedInClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/android/i.test(userAgent)) {
      // Force Android App via Intent
      window.location.href = "intent://in/sinergiadigitalautomatizaciones#Intent;package=com.linkedin.android;scheme=linkedin;end;";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      // Force iOS App
      window.location.href = "linkedin://in/sinergiadigitalautomatizaciones";
    } else {
      // Desktop fallback
      window.open("https://www.linkedin.com/in/sinergiadigitalautomatizaciones/", "_blank");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      {/* Navbar Container */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <img src={headerIconBase64} alt="Icono" className="h-10 w-auto object-contain" />
          <span className="font-extrabold text-2xl tracking-tight text-gray-900">
            SINERGIA <span className="font-light text-accent">DIGITAL</span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sinergiadigitalautomatizaciones/"
            onClick={handleLinkedInClick}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-[#0A66C2] transition-colors"
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition-colors"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <button 
            onClick={scrollToContact}
            className="hidden sm:block bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 glow-primary"
          >
            {t('nav.book')}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
