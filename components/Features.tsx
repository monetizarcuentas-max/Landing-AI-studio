
import React from 'react';
import { FeatureCard } from '../types';

const features: FeatureCard[] = [
  {
    icon: 'campaign',
    title: 'Meta Ads Pro',
    description: 'Gestionamos campañas quirúrgicas en FB/IG para atraer prospectos que realmente tienen intención de compra.'
  },
  {
    icon: 'keyboard_voice',
    title: 'Escucha de Audios',
    description: 'Tu Agente IA procesa notas de voz de WhatsApp, extrayendo intención y datos clave sin que tú muevas un dedo.'
  },
  {
    icon: 'memory',
    title: 'Cerebro IA Gemini',
    description: 'Una inteligencia entrenada con tu ADN de negocio para responder con coherencia técnica y cierre comercial.'
  },
  {
    icon: 'query_stats',
    title: 'Dashboard Real-Time',
    description: 'Visualiza cada conversión y el ROI de tus campañas en un panel interactivo diseñado para la toma de decisiones.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="px-6 max-w-screen-xl mx-auto mb-16">
        <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-white mb-6">
                Tecnología de <span className="gradient-text-blue">Conversión 24/7</span>
            </h2>
            <p className="text-white/50 text-xl leading-relaxed">
                Desplegamos una arquitectura de IA multimodal que entiende, escucha y vende por ti mientras te enfocas en lo que importa: tu negocio.
            </p>
        </div>
      </div>

      <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 px-6 pb-12 lg:max-w-screen-xl lg:mx-auto">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="min-w-[80vw] sm:min-w-[40vw] lg:min-w-0 snap-center glass-card p-10 rounded-4xl flex flex-col hover:border-primary/40 transition-all group"
          >
            <div className="w-16 h-16 glassmorphic-icon rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-4xl">{feature.icon}</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
            <p className="text-white/50 leading-relaxed text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
