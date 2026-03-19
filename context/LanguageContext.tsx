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
    
    'workflow.meta.title': 'ANUNCIOS META ADS',
    'workflow.meta.sub': 'CONVERSIONES AUTOMÁTICAS',
    'workflow.landing.title': 'LANDING PAGE',
    'workflow.landing.sub': 'CAPTACIÓN',
    'workflow.landing.system': 'TU SISTEMA',
    'workflow.landing.contact': 'Contactar',
    'workflow.whatsapp.title': 'WHATSAPP',
    'workflow.whatsapp.sub': 'CHATBOT 24/7',
    'workflow.whatsapp.bot': 'Bot IA',
    'workflow.whatsapp.msg1': '¡Hola! ¿En qué te ayudo?',
    'workflow.whatsapp.msg2': 'Más info.',
    'workflow.whatsapp.msg3': '¡Claro! ¿Agendamos?',
    'workflow.calendar.title': 'REUNIÓN CONFIRMADA',
    'workflow.calendar.sub': 'RESERVA AUTOMÁTICA',
    'workflow.calendar.date': '13 MARZO',
    'workflow.calendar.demo': 'DEMO DE SISTEMA',

    'problem.title': '¿Por qué estás perdiendo clientes todos los días?',
    'problem.subtitle': 'Las empresas invierten en marketing, pero fallan en el seguimiento y la atención inmediata.',
    'problem.1.title': 'Tardan en responder',
    'problem.1.desc': 'Tus clientes potenciales se enfrían si no reciben respuesta en los primeros 5 minutos.',
    'problem.2.title': 'Pierden consultas',
    'problem.2.desc': 'Mensajes de WhatsApp que quedan sin leer o se pierden entre cientos de chats.',
    'problem.3.title': 'Sin seguimiento',
    'problem.3.desc': 'No hay un sistema que retome el contacto con clientes que preguntaron pero no compraron.',
    'problem.4.title': 'Caos en la agenda',
    'problem.4.desc': 'Turnos superpuestos, olvidos y cancelaciones de último momento sin reprogramación.',

    'solution.title1': 'El sistema de captación ',
    'solution.title2': 'automatizado',
    'solution.subtitle': 'Implementamos un flujo continuo que convierte desconocidos en reuniones agendadas, sin intervención humana.',
    'solution.1.label': 'Anuncios de Meta Ads',
    'solution.1.sub': 'Conversiones de lead automáticas',
    'solution.2.label': 'Landing Page',
    'solution.2.sub': 'Captación',
    'solution.3.label': 'WhatsApp',
    'solution.3.sub': 'Chatbot 24/7',
    'solution.4.label': 'Reunión Confirmada',
    'solution.4.sub': 'Demo de sistema reserva de calendario automática',

    'pricing.title1': 'Planes de ',
    'pricing.title2': 'Automatización',
    'pricing.subtitle': 'Soluciones escalables para cada etapa de tu negocio.',
    'pricing.basic.title': 'Plan Básico',
    'pricing.basic.desc': 'Ideal para empezar a automatizar.',
    'pricing.pro.badge': 'Más Elegido',
    'pricing.pro.title': 'Plan Profesional',
    'pricing.pro.desc': 'Para empresas que buscan calificar prospectos.',
    'pricing.full.title': 'Plan Completo',
    'pricing.full.desc': 'El sistema definitivo de captación.',
    'pricing.feat.bot': 'Bot de WhatsApp',
    'pricing.feat.auto': 'Respuestas Automáticas',
    'pricing.feat.qualify': 'Calificación de Clientes',
    'pricing.feat.ads': 'Meta Ads',
    'pricing.feat.support': 'Soporte Técnico',
    'pricing.feat.ai': 'WhatsApp con IA',
    'pricing.feat.landing': 'Landing Page',
    'pricing.feat.calendar': 'Conexión con Agenda',
    'pricing.feat.reminders': 'Recordatorios Automáticos',
    'pricing.feat.training': 'Capacitación al Cliente',
    'pricing.btn': 'Elegir Plan',

    'how.title': '¿Cómo funciona?',
    'how.subtitle': 'Un proceso simple y transparente para transformar tu captación de clientes.',
    'how.1.title': 'Analizamos tu negocio',
    'how.1.desc': 'Entendemos tu proceso de ventas actual y detectamos cuellos de botella.',
    'how.2.title': 'Diseñamos el sistema',
    'how.2.desc': 'Creamos la estrategia de captación y el flujo de conversación ideal.',
    'how.3.title': 'Automatizamos',
    'how.3.desc': 'Implementamos el bot de WhatsApp, la IA y conectamos tu agenda.',
    'how.4.title': 'Recibes consultas',
    'how.4.desc': 'Tu empresa empieza a recibir turnos y consultas calificadas automáticamente.',

    'target.title': 'Para quién es este servicio',
    'target.subtitle': 'Nuestra solución está diseñada para empresas de servicios que dependen de la agendación de citas y la atención rápida al cliente.',
    'target.i1': 'Clínicas y Consultorios',
    'target.i2': 'Inmobiliarias',
    'target.i3': 'Abogados y Estudios',
    'target.i4': 'Consultores B2B',
    'target.i5': 'Academias y Formación',
    'target.i6': 'Servicios para el Hogar',
    'target.c1.title': 'Nuevo turno agendado',
    'target.c1.time': 'Hace 2 minutos',
    'target.c2.title': 'Consulta respondida por IA',
    'target.c2.time': 'Hace 5 minutos',
    'target.c3.title': 'Recordatorio enviado',
    'target.c3.time': 'Hace 15 minutos',

    'trust.badge': 'Política de transparencia',
    'trust.title': 'Propiedad total para el cliente',
    'trust.1': 'Las cuentas siempre quedan a nombre del cliente',
    'trust.2': 'El sistema sigue funcionando incluso si cancelas el mantenimiento',
    'trust.3': 'Sin contratos de permanencia',
    'trust.quote': '"Trabajamos para que te quedes por el valor que entregamos, no por obligación."',

    'contact.success.title': '¡Gracias por tu interés!',
    'contact.success.d1': 'Serás redirigido a nuestro WhatsApp.',
    'contact.success.d2': 'Allí podremos coordinar tu diagnóstico gratuito.',
    'contact.success.btn': 'Volver al formulario',
    'contact.title': 'Agenda una llamada y te mostramos cómo automatizar la captación de clientes en tu empresa.',
    'contact.subtitle': 'Completa el formulario para agendar un diagnóstico gratuito.',
    'contact.label.name': 'Nombre Responsable',
    'contact.placeholder.name': 'Ej. Juan Pérez',
    'contact.label.service': 'El servicio que necesito es:',
    'contact.opt.basic': 'Plan Básico',
    'contact.opt.pro': 'Plan Profesional',
    'contact.opt.full': 'Plan Completo',
    'contact.opt.unsure': 'No estoy seguro, necesito asesoría',
    'contact.btn': 'Agendar Gratis por WhatsApp',
    'contact.note': 'Serás redirigido a nuestro WhatsApp para coordinar la reunión.',

    'footer.home': 'Inicio',
    'footer.pricing': 'Precios',
    'footer.contact': 'Contacto',
    'footer.copy1': '© 2024 Sinergia Digital - Líderes en Automatización de Captación.',
    'footer.copy2': 'Transformando prospectos en clientes mediante inteligencia artificial.'
  },
  en: {
    'nav.book': 'Book Consultation',
    'hero.badge': 'B2B Automation',
    'hero.title1': 'Convert more inquiries into clients ',
    'hero.title2': 'automatically',
    'hero.subtitle': 'We automate WhatsApp, AI responses, and appointment scheduling so your company never misses an opportunity.',
    'hero.cta': 'Request free diagnosis',

    'workflow.meta.title': 'META ADS CAMPAIGNS',
    'workflow.meta.sub': 'AUTOMATIC CONVERSIONS',
    'workflow.landing.title': 'LANDING PAGE',
    'workflow.landing.sub': 'LEAD CAPTURE',
    'workflow.landing.system': 'YOUR SYSTEM',
    'workflow.landing.contact': 'Contact',
    'workflow.whatsapp.title': 'WHATSAPP',
    'workflow.whatsapp.sub': '24/7 CHATBOT',
    'workflow.whatsapp.bot': 'AI Bot',
    'workflow.whatsapp.msg1': 'Hi! How can I help?',
    'workflow.whatsapp.msg2': 'More info.',
    'workflow.whatsapp.msg3': 'Sure! Shall we book?',
    'workflow.calendar.title': 'CONFIRMED MEETING',
    'workflow.calendar.sub': 'AUTOMATIC BOOKING',
    'workflow.calendar.date': 'MARCH 13',
    'workflow.calendar.demo': 'SYSTEM DEMO',

    'problem.title': 'Why are you losing clients every day?',
    'problem.subtitle': 'Companies invest in marketing, but fail in follow-up and immediate attention.',
    'problem.1.title': 'Slow to respond',
    'problem.1.desc': 'Your potential clients go cold if they don\'t receive a response within the first 5 minutes.',
    'problem.2.title': 'Lost inquiries',
    'problem.2.desc': 'WhatsApp messages left unread or lost among hundreds of chats.',
    'problem.3.title': 'No follow-up',
    'problem.3.desc': 'There is no system to reconnect with clients who asked but didn\'t buy.',
    'problem.4.title': 'Calendar chaos',
    'problem.4.desc': 'Overlapping appointments, forgotten meetings, and last-minute cancellations without rescheduling.',

    'solution.title1': 'The automated ',
    'solution.title2': 'capture system',
    'solution.subtitle': 'We implement a continuous flow that converts strangers into booked meetings, without human intervention.',
    'solution.1.label': 'Meta Ads Campaigns',
    'solution.1.sub': 'Automatic lead conversions',
    'solution.2.label': 'Landing Page',
    'solution.2.sub': 'Lead Capture',
    'solution.3.label': 'WhatsApp',
    'solution.3.sub': '24/7 Chatbot',
    'solution.4.label': 'Confirmed Meeting',
    'solution.4.sub': 'System demo automatic calendar booking',

    'pricing.title1': 'Automation ',
    'pricing.title2': 'Plans',
    'pricing.subtitle': 'Scalable solutions for every stage of your business.',
    'pricing.basic.title': 'Basic Plan',
    'pricing.basic.desc': 'Ideal to start automating.',
    'pricing.pro.badge': 'Most Popular',
    'pricing.pro.title': 'Professional Plan',
    'pricing.pro.desc': 'For companies looking to qualify prospects.',
    'pricing.full.title': 'Complete Plan',
    'pricing.full.desc': 'The ultimate capture system.',
    'pricing.feat.bot': 'WhatsApp Bot',
    'pricing.feat.auto': 'Automatic Responses',
    'pricing.feat.qualify': 'Lead Qualification',
    'pricing.feat.ads': 'Meta Ads',
    'pricing.feat.support': 'Technical Support',
    'pricing.feat.ai': 'AI WhatsApp',
    'pricing.feat.landing': 'Landing Page',
    'pricing.feat.calendar': 'Calendar Connection',
    'pricing.feat.reminders': 'Automatic Reminders',
    'pricing.feat.training': 'Client Training',
    'pricing.btn': 'Choose Plan',

    'how.title': 'How does it work?',
    'how.subtitle': 'A simple and transparent process to transform your client acquisition.',
    'how.1.title': 'We analyze your business',
    'how.1.desc': 'We understand your current sales process and detect bottlenecks.',
    'how.2.title': 'We design the system',
    'how.2.desc': 'We create the capture strategy and the ideal conversation flow.',
    'how.3.title': 'We automate',
    'how.3.desc': 'We implement the WhatsApp bot, AI, and connect your calendar.',
    'how.4.title': 'You receive inquiries',
    'how.4.desc': 'Your company starts receiving appointments and qualified inquiries automatically.',

    'target.title': 'Who is this service for',
    'target.subtitle': 'Our solution is designed for service companies that rely on appointment scheduling and fast customer service.',
    'target.i1': 'Clinics and Practices',
    'target.i2': 'Real Estate',
    'target.i3': 'Lawyers and Firms',
    'target.i4': 'B2B Consultants',
    'target.i5': 'Academies and Training',
    'target.i6': 'Home Services',
    'target.c1.title': 'New appointment booked',
    'target.c1.time': '2 minutes ago',
    'target.c2.title': 'Inquiry answered by AI',
    'target.c2.time': '5 minutes ago',
    'target.c3.title': 'Reminder sent',
    'target.c3.time': '15 minutes ago',

    'trust.badge': 'Transparency Policy',
    'trust.title': 'Full ownership for the client',
    'trust.1': 'Accounts always remain in the client\'s name',
    'trust.2': 'The system keeps working even if you cancel maintenance',
    'trust.3': 'No lock-in contracts',
    'trust.quote': '"We work so you stay for the value we deliver, not out of obligation."',

    'contact.success.title': 'Thank you for your interest!',
    'contact.success.d1': 'You will be redirected to our WhatsApp.',
    'contact.success.d2': 'There we can coordinate your free diagnosis.',
    'contact.success.btn': 'Back to form',
    'contact.title': 'Schedule a call and we will show you how to automate client acquisition in your company.',
    'contact.subtitle': 'Complete the form to schedule a free diagnosis.',
    'contact.label.name': 'Manager Name',
    'contact.placeholder.name': 'E.g. John Doe',
    'contact.label.service': 'The service I need is:',
    'contact.opt.basic': 'Basic Plan',
    'contact.opt.pro': 'Professional Plan',
    'contact.opt.full': 'Complete Plan',
    'contact.opt.unsure': 'I am not sure, I need advice',
    'contact.btn': 'Schedule Free via WhatsApp',
    'contact.note': 'You will be redirected to our WhatsApp to coordinate the meeting.',

    'footer.home': 'Home',
    'footer.pricing': 'Pricing',
    'footer.contact': 'Contact',
    'footer.copy1': '© 2024 Sinergia Digital - Leaders in Acquisition Automation.',
    'footer.copy2': 'Transforming prospects into clients through artificial intelligence.'
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
