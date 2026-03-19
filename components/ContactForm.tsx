import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp
    window.open('https://wa.me/5493462538111?text=Hola,%20quiero%20agendar%20un%20diagnóstico%20gratuito.', '_blank');
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
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-primary font-bold text-sm hover:underline"
            >
              {t('contact.success.btn')}
            </button>
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
