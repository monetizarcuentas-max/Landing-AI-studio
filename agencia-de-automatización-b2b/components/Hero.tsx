import React from 'react';
import WorkflowAnimation from './WorkflowAnimation';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-32 px-6 immersive-gradient overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full -mr-80 -mt-80 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -ml-40 -mb-40 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-accent/20 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
            <span className="material-symbols-outlined text-accent text-sm animate-spin-slow">auto_awesome</span>
            <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.2em] uppercase">Automatización B2B</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight text-white">
            Convierte más consultas en clientes <span className="gradient-text-primary">automáticamente</span>
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
            Automatizamos WhatsApp, respuestas con IA y agendamiento de citas para que tu empresa <span className="text-white font-semibold">nunca pierda una oportunidad.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-bold py-5 px-10 rounded-2xl glow-primary flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-slow"
            >
              Solicitar diagnóstico gratuito
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Element - Animated Workflow */}
        <div className="hidden lg:block flex-1 relative w-full h-[500px] perspective-1000">
          <div 
            className="relative w-full h-full flex items-center justify-center transition-transform duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[2deg]"
            style={{ transform: 'rotateY(-12deg) rotateX(5deg) rotateZ(2deg)' }}
          >
            <WorkflowAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
