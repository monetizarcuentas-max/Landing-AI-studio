import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-transparent">
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            {t('how.title')}
          </h2>
          <p className="text-white/50 text-xl leading-relaxed">
            {t('how.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: t('how.1.title'),
              desc: t('how.1.desc')
            },
            {
              step: '02',
              title: t('how.2.title'),
              desc: t('how.2.desc')
            },
            {
              step: '03',
              title: t('how.3.title'),
              desc: t('how.3.desc')
            },
            {
              step: '04',
              title: t('how.4.title'),
              desc: t('how.4.desc')
            }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-black text-white/5 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
