
import React from 'react';
import isologo from '../public/isologo.png';

const Navbar: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      {/* Navbar Container */}
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={isologo} alt="Sinergia Digital Logo" className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
          <span className="font-extrabold text-2xl tracking-tight text-gray-900">
            SINERGIA <span className="font-light text-accent">DIGITAL</span>
          </span>
        </div>
        <button 
          onClick={scrollToContact}
          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 glow-primary"
        >
          Agendar Consulta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
