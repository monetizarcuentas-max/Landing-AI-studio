
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">
                {t('pricing.title1')}<span className="gradient-text-primary">{t('pricing.title2')}</span>
            </h2>
            <p className="text-white/50 text-xl">{t('pricing.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="relative group">
                <div className="relative glass-card p-10 rounded-4xl border-white/10 flex flex-col h-full hover:border-white/20 transition-colors">
                    <p className="text-xl font-bold text-white mb-2">{t('pricing.basic.title')}</p>
                    <p className="text-sm text-white/50 mb-6">{t('pricing.basic.desc')}</p>
                    <div className="flex flex-col mb-8">
                        <span className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1">{t('pricing.implementation')}</span>
                        <span className="text-4xl font-extrabold text-white">USD 457</span>
                        <span className="text-xs text-accent/70 mt-2 font-medium">{t('pricing.opt.basic')}</span>
                    </div>
                    <ul className="space-y-4 flex-1 mb-10">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.basic.1')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.basic.2')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.basic.3')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.basic.4')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.basic.5')}</span>
                        </li>
                    </ul>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold transition-all"
                    >
                        {t('pricing.btn')}
                    </button>
                </div>
            </div>

            {/* Plan Profesional */}
            <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-4xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative border border-primary/30 bg-white/5 p-10 rounded-4xl flex flex-col h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">{t('pricing.pro.badge')}</div>
                    <p className="text-xl font-bold text-white mb-2">{t('pricing.pro.title')}</p>
                    <p className="text-sm text-white/50 mb-6">{t('pricing.pro.desc')}</p>
                    <div className="flex flex-col mb-8">
                        <span className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1">{t('pricing.implementation')}</span>
                        <span className="text-4xl font-extrabold text-white">USD 867</span>
                        <span className="text-xs text-accent/70 mt-2 font-medium">{t('pricing.opt.pro')}</span>
                    </div>
                    <ul className="space-y-4 flex-1 mb-10">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.1')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.2')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.3')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.4')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.5')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.6')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.7')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-accent text-sm mt-0.5">verified</span>
                            <span className="text-sm text-white/90 font-medium">{t('pricing.pro.8')}</span>
                        </li>
                    </ul>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl font-extrabold hover:from-primary/90 hover:to-accent/90 transition-all shadow-xl shadow-primary/20 glow-primary"
                    >
                        {t('pricing.btn')}
                    </button>
                </div>
            </div>

            {/* Plan Completo */}
            <div className="relative group">
                <div className="relative glass-card p-10 rounded-4xl border-white/10 flex flex-col h-full hover:border-white/20 transition-colors">
                    <p className="text-xl font-bold text-white mb-2">{t('pricing.full.title')}</p>
                    <p className="text-sm text-white/50 mb-6">{t('pricing.full.desc')}</p>
                    <div className="flex flex-col mb-8">
                        <span className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1">{t('pricing.implementation')}</span>
                        <span className="text-4xl font-extrabold text-white">USD 1497</span>
                        <span className="text-xs text-accent/70 mt-2 font-medium">{t('pricing.opt.full')}</span>
                    </div>
                    <ul className="space-y-4 flex-1 mb-10">
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.1')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.2')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.3')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.4')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.5')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.6')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.7')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <span className="text-sm text-white/70">{t('pricing.full.8')}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-accent text-sm mt-0.5">verified</span>
                            <span className="text-sm text-white/70">{t('pricing.full.9')}</span>
                        </li>
                    </ul>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold transition-all"
                    >
                        {t('pricing.btn')}
                    </button>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <p className="text-white/40 text-sm max-w-2xl mx-auto">
                {t('pricing.opt.note')}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
