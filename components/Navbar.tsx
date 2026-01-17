
import React from 'react';

const Navbar: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-dark/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center glow-blue">
            <span className="material-symbols-outlined text-white text-2xl fill-1">psychology</span>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white hidden sm:block">Agencia IA</span>
        </div>
        <button 
          onClick={scrollToContact}
          className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full text-sm font-bold transition-all active:scale-95 shadow-lg shadow-primary/20"
        >
          Agendar Auditoría
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
