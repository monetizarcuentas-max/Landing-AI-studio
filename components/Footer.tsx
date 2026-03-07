
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-dark">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 opacity-80">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center glow-primary">
            <span className="material-symbols-outlined text-white text-base fill-1">smart_toy</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight text-white uppercase">AutoBot B2B</span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-white transition-colors">Inicio</a>
            <a href="#contact" className="hover:text-white transition-colors">Precios</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </nav>

        <p className="text-[12px] text-white/30 text-center leading-relaxed">
          © 2024 AutoBot B2B - Líderes en Automatización de Captación.<br/>
          Transformando prospectos en clientes mediante inteligencia artificial.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
