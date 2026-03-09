import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    id: 'meta',
    title: 'ANUNCIOS DE META ADS:',
    subtitle: 'CONVERSIONES DE LEAD AUTOMÁTICAS',
    finalX: -240,
    icon: (
      <div className="relative w-24 h-48 bg-dark/80 rounded-[2rem] border-4 border-gray-800 flex flex-col items-center p-2 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <div className="w-10 h-1 bg-gray-800 rounded-full mb-4 mt-1"></div>
        <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center mb-4 relative">
          <svg viewBox="0 0 24 24" fill="#1877F2" className="w-8 h-8">
            <path d="M20.5 8.5c-1.4 0-2.7.6-3.7 1.7L12 15.5l-4.8-5.3C6.2 9.1 4.9 8.5 3.5 8.5 1.6 8.5 0 10.1 0 12s1.6 3.5 3.5 3.5c1.4 0 2.7-.6 3.7-1.7L12 8.5l4.8 5.3c1 1.1 2.3 1.7 3.7 1.7 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5z"/>
          </svg>
        </div>
        <div className="w-full h-2 bg-blue-500/20 rounded mb-2"></div>
        <div className="w-3/4 h-2 bg-blue-500/20 rounded"></div>
      </div>
    ),
    color: 'rgba(59,130,246,0.2)'
  },
  {
    id: 'landing',
    title: 'LANDING PAGE →',
    subtitle: 'CAPTACIÓN',
    finalX: -80,
    icon: (
      <div className="relative w-40 h-32 bg-dark/80 rounded-xl border border-indigo-500/50 flex flex-col p-2 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
        <div className="flex gap-1 mb-2 border-b border-indigo-500/30 pb-2">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <div className="text-[8px] text-center text-indigo-300 font-bold mb-2">TU SISTEMA: CRECIMIENTO DE CLIENTES</div>
        <div className="flex gap-2 h-full">
          <div className="w-1/2 h-full border border-indigo-500/30 rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-indigo-500/50 text-2xl">image</span>
          </div>
          <div className="w-1/2 flex flex-col gap-1">
            <div className="w-full h-3 bg-indigo-500/20 rounded"></div>
            <div className="w-full h-3 bg-indigo-500/20 rounded"></div>
            <div className="w-full h-3 bg-indigo-500/20 rounded"></div>
            <div className="w-full h-4 bg-indigo-500 rounded mt-auto flex items-center justify-center">
              <span className="text-[5px] text-white font-bold">Contactar por WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    ),
    color: 'rgba(99,102,241,0.2)'
  },
  {
    id: 'whatsapp',
    title: 'WHATSAPP →',
    subtitle: 'CHATBOT 24/7',
    finalX: 80,
    icon: (
      <div className="relative w-24 h-48 bg-dark/80 rounded-[2rem] border-4 border-gray-800 flex flex-col p-2 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
        <div className="flex items-center gap-2 border-b border-gray-700 pb-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[10px]">smart_toy</span>
          </div>
          <div className="text-[6px] text-white font-bold">Bot IA</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="self-start bg-gray-700 text-white text-[6px] p-1.5 rounded-r-lg rounded-bl-lg max-w-[80%]">
            ¡Hola! ¿En qué te puedo ayudar hoy?
          </div>
          <div className="self-end bg-green-600 text-white text-[6px] p-1.5 rounded-l-lg rounded-br-lg max-w-[80%]">
            Quiero más información.
          </div>
          <div className="self-start bg-gray-700 text-white text-[6px] p-1.5 rounded-r-lg rounded-bl-lg max-w-[80%]">
            ¡Claro! ¿Te gustaría agendar una demo?
          </div>
        </div>
        <div className="absolute -right-3 top-1/2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-2 border-dark shadow-lg">
          <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </div>
      </div>
    ),
    color: 'rgba(34,197,94,0.2)'
  },
  {
    id: 'calendar',
    title: 'REUNIÓN CONFIRMADA:',
    subtitle: 'DEMO DE SISTEMA\nRESERVA DE CALENDARIO AUTOMÁTICA',
    finalX: 240,
    icon: (
      <div className="relative w-40 h-32 bg-dark/80 rounded-xl border border-accent/50 flex flex-col p-3 shadow-[0_0_30px_rgba(0,210,255,0.3)]">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-accent text-lg">event</span>
          <span className="text-[10px] text-white font-bold">13 MARZO</span>
        </div>
        <div className="text-[7px] text-accent/80 font-bold text-center mb-1">REUNIÓN CONFIRMADA:</div>
        <div className="text-[7px] text-white text-center mb-1">DEMO DE SISTEMA</div>
        <div className="text-[7px] text-white/70 text-center">13 MARZO | 11:00 AM</div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-accent flex items-center justify-center border-2 border-dark shadow-lg">
          <span className="material-symbols-outlined text-white text-sm">check</span>
        </div>
      </div>
    ),
    color: 'rgba(0,210,255,0.2)'
  }
];

const T = 16; // Total loop duration

const getStepAnimation = (i: number) => {
  const stepDuration = 1 / 4;
  const start = i * stepDuration;
  const enter = start + 0.05;
  const holdCenter = enter + 0.1;
  const moveToFinal = holdCenter + 0.05;
  
  return {
    times: [0, start, enter, holdCenter, moveToFinal, 1],
    opacity: [0, 0, 1, 1, 1, 1],
    scale: [0.5, 0.5, 1.5, 1.5, 1, 1],
    x: [0, 0, 0, 0, steps[i].finalX, steps[i].finalX],
    y: [50, 50, 0, 0, 0, 0],
    zIndex: [0, 0, 50, 50, 10, 10]
  };
};

const WorkflowAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[800px] h-[400px] mx-auto flex items-center justify-center perspective-1000">
      
      {/* Network Background (Static representation of the dots) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Just a few representative lines and dots for the background vibe */}
          <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="#00D2FF" strokeWidth="1" opacity="0.5" />
          <line x1="30%" y1="40%" x2="70%" y2="30%" stroke="#00D2FF" strokeWidth="1" opacity="0.5" />
          <line x1="70%" y1="30%" x2="90%" y2="60%" stroke="#00D2FF" strokeWidth="1" opacity="0.5" />
          <circle cx="10%" cy="20%" r="4" fill="url(#glow)" />
          <circle cx="30%" cy="40%" r="6" fill="url(#glow)" />
          <circle cx="70%" cy="30%" r="5" fill="url(#glow)" />
          <circle cx="90%" cy="60%" r="4" fill="url(#glow)" />
        </svg>
      </div>

      {/* Main Container for Steps */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Connecting Line (Appears after all are in place) */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-accent z-0"
          animate={{
            width: ["0%", "0%", "0%", "80%", "80%"],
            x: ["-50%", "-50%", "-50%", "-50%", "-50%"],
            opacity: [0, 0, 0, 1, 1]
          }}
          transition={{ duration: T, repeat: Infinity, ease: "easeInOut", times: [0, 0.7, 0.8, 0.9, 1] }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            className="absolute flex flex-col items-center"
            animate={getStepAnimation(i)}
            transition={{ duration: T, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Glass Panel */}
            <div 
              className="relative p-6 rounded-2xl backdrop-blur-md border border-white/10 flex flex-col items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, ${step.color} 100%)`,
                boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`
              }}
            >
              {/* Floating decorative elements behind icon */}
              <div className="absolute -left-4 top-1/4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-50">
                <span className="material-symbols-outlined text-white/50 text-sm">person</span>
              </div>
              <div className="absolute -right-4 bottom-1/4 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center opacity-50">
                <span className="material-symbols-outlined text-white/50 text-xs">analytics</span>
              </div>

              {step.icon}
            </div>

            {/* Text Below */}
            <div className="mt-6 text-center max-w-[160px]">
              <h3 className="text-[10px] font-bold text-white tracking-widest mb-1">{step.title}</h3>
              <p className="text-[9px] text-white/70 font-medium leading-tight whitespace-pre-line">{step.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowAnimation;
