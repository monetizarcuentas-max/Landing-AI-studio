import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Solution: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="px-6 max-w-screen-xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            {t('solution.title1')} <span className="gradient-text-primary">{t('solution.title2')}</span>
          </h2>
          <p className="text-white/50 text-xl leading-relaxed">
            {t('solution.subtitle')}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative">
          {/* Animated background line for desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-white/5 -z-10">
            <div className="h-full bg-gradient-to-r from-primary to-accent w-full animate-[pulse_3s_ease-in-out_infinite]"></div>
          </div>

          {[
            { icon: 'campaign', label: t('solution.1.label'), sublabel: t('solution.1.sub') },
            { icon: 'web', label: t('solution.2.label'), sublabel: t('solution.2.sub') },
            { icon: 'forum', label: t('solution.3.label'), sublabel: t('solution.3.sub') },
            { icon: 'event_available', label: t('solution.4.label'), sublabel: t('solution.4.sub') }
          ].map((step, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-4 group relative flex-1">
                <div className="w-20 h-20 glass-card rounded-full flex items-center justify-center border-white/10 group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.3)] transition-all duration-300 group-hover:-translate-y-2 bg-transparent">
                  <span className="material-symbols-outlined text-white text-3xl group-hover:text-accent transition-colors">{step.icon}</span>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">{step.label}</h3>
                  <p className="text-xs text-white/50">{step.sublabel}</p>
                </div>
              </div>
              {idx < arr.length - 1 && (
                <div className="hidden md:flex items-center justify-center text-accent/50 animate-pulse">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              )}
              {idx < arr.length - 1 && (
                <div className="md:hidden flex items-center justify-center text-accent/50 my-2 animate-pulse">
                  <span className="material-symbols-outlined">arrow_downward</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
