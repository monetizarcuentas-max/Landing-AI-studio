
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center glow-primary">
            <span className="material-symbols-outlined text-white text-2xl fill-1">smart_toy</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white hidden sm:block">AutoBot B2B</span>
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
