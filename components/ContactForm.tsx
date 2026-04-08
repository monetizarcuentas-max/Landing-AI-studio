import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactForm: React.FC = () => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp
    const message = encodeURIComponent(t('contact.whatsapp.msg'));
    window.open(`https://wa.me/5493462607606?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-28 px-6 bg-transparent">
        <div className="max-w-xl mx-auto">
          <div className="glass-card p-12 rounded-4xl border-white/10 shadow-3xl text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-5xl fill-1">check_circle</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white">{t('contact.success.title')}</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              {t('contact.success.d1')} <br/>
              <span className="text-white font-semibold">{t('contact.success.d2')}</span>
            </p>
            <div className="flex flex-col items-center gap-4 mt-2">
              <p className="text-white font-medium mt-4">{t('contact.success.pdf')}</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a 
                  href="https://drive.google.com/file/d/174NytdzPNOmGsS0Zt68OncGH-qB5gMi3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">download</span>
                  PDF (Español)
                </a>
                <a 
                  href="https://drive.google.com/file/d/1AVVl3rM_GTA-4d9Uer7Za9UUj7D2tPEJ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">download</span>
                  PDF (English)
                </a>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-primary font-bold text-sm hover:underline mt-2"
              >
                {t('contact.success.btn')}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 px-6 bg-transparent">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">{t('contact.title')}</h2>
          <p className="text-white/50">{t('contact.subtitle')}</p>
        </div>

        <div className="glass-card p-10 rounded-4xl border-white/10 shadow-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2.5 px-1">{t('contact.label.name')}</label>
                <input 
                    required
                    className="w-full px-5 py-4 rounded-2xl border-white/10 bg-white/5 text-white placeholder-white/20 focus:ring-primary focus:border-primary transition-all outline-none" 
                    placeholder={t('contact.placeholder.name')} 
                    type="text"
                />
            </div>

            <div>
                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2.5 px-1">{t('contact.label.service')}</label>
                <div className="relative">
                    <select className="w-full px-5 py-4 rounded-2xl border-white/10 bg-white/5 text-white focus:ring-primary focus:border-primary appearance-none outline-none cursor-pointer [&::-ms-expand]:hidden">
                        <option className="bg-dark">{t('contact.opt.basic')}</option>
                        <option className="bg-dark">{t('contact.opt.pro')}</option>
                        <option className="bg-dark">{t('contact.opt.full')}</option>
                        <option className="bg-dark">{t('contact.opt.unsure')}</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">expand_more</span>
                </div>
            </div>

            <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] glow-primary shadow-xl shadow-primary/30"
            >
                {t('contact.btn')}
                <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-[11px] text-white/30">{t('contact.note')}</p>
          </form>
          <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
            <a
              href="https://www.linkedin.com/in/sinergiadigitalautomatizaciones/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {t('contact.linkedin')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
