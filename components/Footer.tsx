
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-dark">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 opacity-80">
          <span className="font-extrabold text-xl tracking-tight text-white">
            SINERGIA <span className="font-light text-accent">DIGITAL</span>
          </span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-white transition-colors">Inicio</a>
            <a href="#contact" className="hover:text-white transition-colors">Precios</a>
            <a href="#contact" className="hover:text-white transition-colors">Contacto</a>
        </nav>

        <p className="text-[12px] text-white/30 text-center leading-relaxed">
          © 2024 Sinergia Digital - Líderes en Automatización de Captación.<br/>
          Transformando prospectos en clientes mediante inteligencia artificial.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
