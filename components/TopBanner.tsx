import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const TopBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-[#20d3e0] text-black py-2 overflow-hidden flex whitespace-nowrap z-50 relative">
      <div className="animate-marquee flex font-bold text-sm tracking-wide shrink-0 min-w-full">
        <span className="pr-12">{t('banner.urgency')}</span>
        <span className="pr-12">{t('banner.urgency')}</span>
      </div>
      <div className="animate-marquee flex font-bold text-sm tracking-wide shrink-0 min-w-full" aria-hidden="true">
        <span className="pr-12">{t('banner.urgency')}</span>
        <span className="pr-12">{t('banner.urgency')}</span>
      </div>
    </div>
  );
};

export default TopBanner;
