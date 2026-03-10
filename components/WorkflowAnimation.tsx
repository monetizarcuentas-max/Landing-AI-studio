import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    id: 'meta',
    title: 'ANUNCIOS DE META ADS:',
    subtitle: 'CONVERSIONES DE LEAD AUTOMÁTICAS',
    icon: (
      <div className="relative w-24 h-48 bg-dark/90 rounded-[2rem] border-4 border-gray-800 flex flex-col items-center p-2 shadow-[0_0_30px_rgba(59,130,246,0.2)] overflow-hidden">
        <div className="w-10 h-1 bg-gray-700 rounded-full mb-4 mt-1"></div>
        <div className="w-14 h-14 rounded-full border border-blue-500/50 flex items-center justify-center mb-3 relative bg-blue-500/10">
          <svg viewBox="0 0 300 200" fill="#1877F2" className="w-10 h-10">
            <path d="M280.9,78.2c-15.5-22.3-40.4-35.3-67.6-35.3c-29.3,0-55.9,15.1-71.1,39.9c-15.2-24.8-41.8-39.9-71.1-39.9 C43.9,42.9,19,55.9,3.5,78.2C-0.8,84.4-1.2,92.5,2.6,99.1c3.8,6.6,10.9,10.7,18.5,10.7h0.1c8.3,0,15.8-4.3,20-11.4 c9.3-15.8,26.1-25.5,44.5-25.5c18.4,0,35.2,9.7,44.5,25.5c4.2,7.1,11.7,11.4,20,11.4h0.1c8.3,0,15.8-4.3,20-11.4 c9.3-15.8,26.1-25.5,44.5-25.5c18.4,0,35.2,9.7,44.5,25.5c4.2,7.1,11.7,11.4,20,11.4h0.1c7.6,0,14.7-4.1,18.5-10.7 C285.6,92.5,285.2,84.4,280.9,78.2z"/>
          </svg>
        </div>
        <div className="text-[7px] text-center text-white/90 font-medium leading-tight px-1">
          Consigue Clientes de<br/>Manera Automática
        </div>
        <div className="mt-auto w-full flex flex-col gap-1.5 mb-2">
          <div className="w-full h-1.5 bg-blue-500/30 rounded-full"></div>
          <div className="w-2/3 h-1.5 bg-blue-500/20 rounded-full mx-auto"></div>
        </div>
      </div>
    ),
    color: 'rgba(59,130,246,0.15)'
  },
  {
    id: 'landing',
    title: 'LANDING PAGE →',
    subtitle: 'CAPTACIÓN',
    icon: (
      <div className="relative w-40 h-32 bg-dark/90 rounded-xl border border-indigo-500/40 flex flex-col p-2.5 shadow-[0_0_30px_rgba(99,102,241,0.2)] overflow-hidden">
        <div className="flex gap-1.5 mb-2.5 border-b border-indigo-500/30 pb-2">
          <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-[8px] text-center text-indigo-300 font-bold mb-2.5 tracking-wide">TU SISTEMA: CRECIMIENTO DE CLIENTES</div>
        <div className="flex gap-2.5 h-full">
          <div className="w-1/2 h-full border border-indigo-500/30 rounded-lg flex items-center justify-center bg-indigo-500/5">
            <span className="material-symbols-outlined text-indigo-400/50 text-2xl">image</span>
          </div>
          <div className="w-1/2 flex flex-col gap-1.5">
            <div className="w-full h-2 bg-indigo-500/20 rounded-sm"></div>
            <div className="w-full h-2 bg-indigo-500/20 rounded-sm"></div>
            <div className="w-3/4 h-2 bg-indigo-500/20 rounded-sm"></div>
            <div className="w-full h-5 bg-green-500/90 rounded mt-auto flex items-center justify-center shadow-lg shadow-green-500/20">
              <span className="text-[6px] text-white font-bold">Contactar por WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    ),
    color: 'rgba(99,102,241,0.15)'
  },
  {
    id: 'whatsapp',
    title: 'WHATSAPP →',
    subtitle: 'CHATBOT 24/7',
    icon: (
      <div className="relative w-24 h-48 bg-dark/90 rounded-[2rem] border-4 border-gray-800 flex flex-col p-2 shadow-[0_0_30px_rgba(34,197,94,0.2)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gray-700 pb-2 mb-2 mt-1 px-1">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-500/30">
            <span className="material-symbols-outlined text-white text-[12px]">smart_toy</span>
          </div>
          <div className="text-[8px] text-white font-bold">Bot IA</div>
        </div>
        <div className="flex flex-col gap-2 px-1">
          <div className="self-start bg-gray-700 text-white text-[7px] p-2 rounded-r-xl rounded-bl-xl max-w-[85%] leading-tight shadow-sm">
            ¡Hola! ¿En qué te puedo ayudar hoy?
          </div>
          <div className="self-end bg-green-600 text-white text-[7px] p-2 rounded-l-xl rounded-br-xl max-w-[85%] leading-tight shadow-sm">
            Quiero más información.
          </div>
          <div className="self-start bg-gray-700 text-white text-[7px] p-2 rounded-r-xl rounded-bl-xl max-w-[85%] leading-tight shadow-sm">
            ¡Claro! ¿Te gustaría agendar una demo?
          </div>
        </div>
      </div>
    ),
    color: 'rgba(34,197,94,0.15)'
  },
  {
    id: 'calendar',
    title: 'REUNIÓN CONFIRMADA:',
    subtitle: 'DEMO DE SISTEMA\nRESERVA DE CALENDARIO AUTOMÁTICA',
    icon: (
      <div className="relative w-40 h-32 bg-dark/90 rounded-xl border border-accent/40 flex flex-col p-3 shadow-[0_0_30px_rgba(0,210,255,0.2)]">
        <div className="flex items-center gap-2 mb-3 border-b border-accent/20 pb-2">
          <span className="material-symbols-outlined text-accent text-xl">event</span>
          <span className="text-[10px] text-white font-bold tracking-wider">13 MARZO</span>
        </div>
        <div className="text-[8px] text-accent/90 font-bold text-center mb-1.5 tracking-wide">REUNIÓN CONFIRMADA:</div>
        <div className="text-[8px] text-white font-medium text-center mb-2.5">DEMO DE SISTEMA</div>
        <div className="text-[8px] text-white/80 text-center bg-white/5 py-1.5 rounded-md border border-white/5">13 MARZO | 11:00 AM</div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-dark shadow-[0_0_15px_rgba(0,210,255,0.5)]">
          <span className="material-symbols-outlined text-dark text-sm font-bold">check</span>
        </div>
      </div>
    ),
    color: 'rgba(0,210,255,0.15)'
  }
];

const T = 14; // Total loop duration

const getStepAnimation = (i: number) => {
  const t0 = (i * 1.5) / T;
  const t1 = (i * 1.5 + 0.8) / T;
  const t2 = 12 / T;
  const t3 = 12.5 / T;

  return {
    times: [0, t0, t1, t2, t3, 1],
    opacity: [0, 0, 1, 1, 0, 0],
    x: [40, 40, 0, 0, -40, -40],
  };
};

const getArrowAnimation = (i: number) => {
  const t0 = (i * 1.5 + 0.8) / T;
  const t1 = (i * 1.5 + 1.2) / T;
  const t2 = 12 / T;
  const t3 = 12.5 / T;

  return {
    times: [0, t0, t1, t2, t3, 1],
    opacity: [0, 0, 1, 1, 0, 0],
    scale: [0.5, 0.5, 1, 1, 0.5, 0.5],
  };
};

const WorkflowAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-row items-center justify-start lg:justify-center gap-4 lg:gap-6 py-10 overflow-x-auto snap-x snap-mandatory px-6 lg:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>
      
      {/* Background Network */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[800px] min-h-[800px]">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <line x1="20%" y1="30%" x2="40%" y2="60%" stroke="#00D2FF" strokeWidth="1" opacity="0.4" />
          <line x1="40%" y1="60%" x2="60%" y2="40%" stroke="#00D2FF" strokeWidth="1" opacity="0.4" />
          <line x1="60%" y1="40%" x2="80%" y2="70%" stroke="#00D2FF" strokeWidth="1" opacity="0.4" />
          <line x1="30%" y1="80%" x2="50%" y2="20%" stroke="#00D2FF" strokeWidth="1" opacity="0.2" />
          <circle cx="20%" cy="30%" r="4" fill="url(#glow)" />
          <circle cx="40%" cy="60%" r="6" fill="url(#glow)" />
          <circle cx="60%" cy="40%" r="5" fill="url(#glow)" />
          <circle cx="80%" cy="70%" r="4" fill="url(#glow)" />
          <circle cx="30%" cy="80%" r="3" fill="url(#glow)" />
          <circle cx="50%" cy="20%" r="5" fill="url(#glow)" />
        </svg>
      </div>

      {steps.map((step, i) => (
        <React.Fragment key={step.id}>
          <motion.div
            className="flex flex-col items-center z-10 min-w-[260px] lg:min-w-0 w-full lg:max-w-[220px] xl:max-w-[260px] snap-center shrink-0"
            animate={getStepAnimation(i)}
            transition={{ duration: T, repeat: Infinity, ease: "easeOut" }}
          >
            {/* Glass Panel */}
            <div 
              className="relative p-5 lg:p-6 rounded-3xl backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center w-full"
              style={{ 
                background: `linear-gradient(145deg, rgba(255,255,255,0.05) 0%, ${step.color} 100%)`,
                boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
              }}
            >
              {step.icon}
            </div>

            {/* Text Below */}
            <div className="mt-5 text-center w-full px-2">
              <h3 className="text-[11px] lg:text-xs font-extrabold text-white tracking-widest mb-1.5 uppercase">{step.title}</h3>
              <p className="text-[10px] lg:text-[11px] text-white/70 font-medium leading-relaxed whitespace-pre-line uppercase">{step.subtitle}</p>
            </div>
          </motion.div>

          {/* Arrow connecting steps */}
          {i < steps.length - 1 && (
            <motion.div
              className="flex items-center justify-center text-accent/60 z-0 shrink-0"
              animate={getArrowAnimation(i)}
              transition={{ duration: T, repeat: Infinity, ease: "easeOut" }}
            >
              <span className="material-symbols-outlined text-3xl">arrow_forward</span>
            </motion.div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkflowAnimation;
