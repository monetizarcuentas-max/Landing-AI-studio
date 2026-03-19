
import React from 'react';
import { headerIconBase64 } from '../assets/header-icon';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      {/* Navbar Container */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={headerIconBase64} alt="Icono" className="h-10 w-auto object-contain" />
          <span className="font-extrabold text-2xl tracking-tight text-gray-900">
            SINERGIA <span className="font-light text-accent">DIGITAL</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
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
