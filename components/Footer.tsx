
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-transparent">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-8 opacity-80">
          <span className="font-extrabold text-xl tracking-tight text-white">
            SINERGIA <span className="font-light text-accent">DIGITAL</span>
          </span>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-white/40 font-medium">
            <a href="#" className="hover:text-white transition-colors">{t('footer.home')}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t('footer.pricing')}</a>
            <a href="#contact" className="hover:text-white transition-colors">{t('footer.contact')}</a>
        </nav>

        <p className="text-[12px] text-white/30 text-center leading-relaxed">
          {t('footer.copy1')}<br/>
          {t('footer.copy2')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
