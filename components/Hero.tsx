
import React from 'react';

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-accent/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
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

        {/* Hero Visual Element - SaaS Mockup */}
        <div className="hidden lg:block flex-1 relative w-full h-[500px] animate-float perspective-1000">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-glow"></div>
          
          <div 
            className="relative w-full h-full transition-transform duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[2deg]"
            style={{ transform: 'rotateY(-12deg) rotateX(5deg) rotateZ(2deg)' }}
          >
            {/* Main Dashboard Card */}
            <div className="absolute inset-0 glass-card rounded-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col bg-dark/80 backdrop-blur-2xl">
              {/* Browser Header */}
              <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="mx-auto bg-black/20 rounded-md px-16 py-1.5 text-[10px] text-white/30 font-mono border border-white/5">
                  autobot-b2b.app/dashboard
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="flex-1 p-6 flex flex-col gap-6 bg-gradient-to-br from-dark/80 to-surface-dark/90">
                {/* Top Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Leads Hoy', value: '142', icon: 'trending_up', color: 'text-emerald-400' },
                    { label: 'Respuestas IA', value: '1,053', icon: 'smart_toy', color: 'text-accent' },
                    { label: 'Citas Agendadas', value: '28', icon: 'event_available', color: 'text-primary' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-white/50 text-xs font-medium">{stat.label}</span>
                        <span className={`material-symbols-outlined text-sm ${stat.color}`}>{stat.icon}</span>
                      </div>
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Flow Diagram */}
                <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-6 flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                  <h3 className="text-sm font-bold text-white/80 mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-accent text-sm">account_tree</span>
                    Flujo de Captación Activo
                  </h3>
                  
                  <div className="flex-1 flex items-center justify-between relative px-4">
                    {/* Connecting Line */}
                    <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-0.5 bg-white/10">
                      <div className="h-full bg-gradient-to-r from-primary to-accent w-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                    </div>

                    {/* Nodes */}
                    {[
                      { icon: 'ads_click', label: 'Meta Ads', delay: '0s' },
                      { icon: 'forum', label: 'WhatsApp', delay: '0.5s' },
                      { icon: 'smart_toy', label: 'IA Bot', delay: '1s' },
                      { icon: 'event', label: 'Agenda', delay: '1.5s' }
                    ].map((node, i) => (
                      <div key={i} className="relative z-10 flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-dark border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(107,33,168,0.5)] relative">
                          <div className="absolute inset-0 rounded-full border border-accent/50 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: node.delay }}></div>
                          <span className="material-symbols-outlined text-white text-xl">{node.icon}</span>
                        </div>
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider bg-dark/80 px-2 py-1 rounded-md backdrop-blur-sm">{node.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-6 top-20 glass-card p-3 rounded-2xl border-white/20 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-400 text-sm">check</span>
              </div>
              <div>
                <div className="text-xs font-bold text-white">Nueva Cita</div>
                <div className="text-[10px] text-white/50">Hace 2 min</div>
              </div>
            </div>

            <div className="absolute -left-8 bottom-32 glass-card p-3 rounded-2xl border-white/20 shadow-xl flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-sm">forum</span>
              </div>
              <div>
                <div className="text-xs font-bold text-white">IA Respondiendo</div>
                <div className="text-[10px] text-white/50">Escribiendo...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
