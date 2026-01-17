
import React from 'react';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-28 px-6 immersive-gradient overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full -mr-80 -mt-80 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] rounded-full -ml-40 -mb-40"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-accent/20">
            <span className="material-symbols-outlined text-accent text-sm animate-spin-slow">auto_awesome</span>
            <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.2em] uppercase">Tracción & Conversión Magnética</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-white">
            Atraemos con <br/>
            <span className="gradient-text-blue">Meta Ads</span>, <br/>
            cerramos con <span className="relative">IA.</span>
          </h1>
          
          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 md:pr-12 max-w-xl mx-auto md:mx-0">
            Un sistema diseñado para profesionales: captamos prospectos en <span className="text-white font-semibold">Facebook e Instagram</span> y los atendemos mediante un <span className="text-white font-semibold">Cerebro Digital</span> experto que nunca duerme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={scrollToDemo}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-5 px-10 rounded-2xl glow-blue flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
            >
              Ver el Sistema en Acción
              <span className="material-symbols-outlined">play_circle</span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-card hover:bg-white/10 text-white font-bold py-5 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all"
            >
              Saber más
            </button>
          </div>
        </div>

        {/* Hero Visual Element (Abstract AI) */}
        <div className="hidden lg:block flex-shrink-0 w-80 h-80 relative">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative glass-card w-full h-full rounded-full flex items-center justify-center border-white/20">
            <span className="material-symbols-outlined text-8xl text-primary animate-bounce">rocket_launch</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
