import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Problem: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-transparent">
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            {t('problem.title')}
          </h2>
          <p className="text-white/50 text-xl leading-relaxed">
            {t('problem.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: 'schedule',
              title: t('problem.1.title'),
              desc: t('problem.1.desc')
            },
            {
              icon: 'person_off',
              title: t('problem.2.title'),
              desc: t('problem.2.desc')
            },
            {
              icon: 'trending_down',
              title: t('problem.3.title'),
              desc: t('problem.3.desc')
            },
            {
              icon: 'event_busy',
              title: t('problem.4.title'),
              desc: t('problem.4.desc')
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border-white/10 flex flex-col items-center text-center hover:border-accent/40 transition-colors">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-accent text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
