import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TrustPolicy: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-6 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400 mb-2 inline-block">
            {t('trust.badge')}
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            {t('trust.title')}
          </h2>
        </div>

        <div className="relative group">
          {/* Glow effect behind the card */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-blue-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
          
          <div className="relative glass-card p-6 md:p-10 rounded-[2.5rem] border border-white/10 bg-[#0A1128]/80 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center animate-[fadeInUp_1s_ease-out_forwards]">
            
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-blue-500/20 flex items-center justify-center mb-6 border border-white/5 shadow-[0_0_20px_rgba(0,210,255,0.2)]">
              <span className="material-symbols-outlined text-2xl bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                lock
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-6 w-full mb-8">
              {[
                {
                  icon: 'manage_accounts',
                  text: t('trust.1')
                },
                {
                  icon: 'settings_power',
                  text: t('trust.2')
                },
                {
                  icon: 'contract_delete',
                  text: t('trust.3')
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover/item:scale-110 group-hover/item:bg-white/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(0,210,255,0.15)] group-hover/item:border-accent/30">
                    <span className="material-symbols-outlined text-white/70 group-hover/item:text-accent transition-colors text-xl">
                      {item.icon}
                    </span>
                  </div>
                  <p className="text-white/80 font-medium text-sm leading-relaxed max-w-[200px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

            <p className="text-base md:text-lg text-white/90 font-medium italic">
              {t('trust.quote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPolicy;
