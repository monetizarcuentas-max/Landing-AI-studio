import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'nav.book': 'Agendar Consulta',
    'hero.badge': 'Automatización B2B',
    'hero.title1': 'Convierte más consultas en clientes ',
    'hero.title2': 'automáticamente',
    'hero.subtitle': 'Automatizamos WhatsApp, respuestas con IA y agendamiento de citas para que tu empresa nunca pierda una oportunidad.',
    'hero.cta': 'Solicitar diagnóstico gratuito',
    // We can add more translations here later
  },
  en: {
    'nav.book': 'Book Consultation',
    'hero.badge': 'B2B Automation',
    'hero.title1': 'Convert more inquiries into clients ',
    'hero.title2': 'automatically',
    'hero.subtitle': 'We automate WhatsApp, AI responses, and appointment scheduling so your company never misses an opportunity.',
    'hero.cta': 'Request free diagnosis',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
