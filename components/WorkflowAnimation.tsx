import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    id: 'meta',
    title: 'ANUNCIOS META ADS',
    subtitle: 'CONVERSIONES AUTOMÁTICAS',
    icon: (
      <div className="relative w-16 h-28 md:w-24 md:h-48 bg-dark/90 rounded-lg border border-gray-700 flex flex-col p-1.5 md:p-2 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-1 md:gap-1.5 mb-1.5 md:mb-2">
          <div className="w-3 h-3 md:w-5 md:h-5 bg-blue-500/20 rounded border border-blue-500/30 shrink-0"></div>
          <div className="flex flex-col gap-0.5 w-full">
            <div className="w-6 md:w-12 h-0.5 md:h-1 bg-gray-600 rounded-full"></div>
            <div className="w-4 md:w-8 h-0.5 md:h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full flex-1 bg-blue-500/20 border border-blue-500/30 rounded flex items-center justify-center mb-1.5 md:mb-2">
          <span className="material-symbols-outlined text-blue-400 text-lg md:text-2xl">campaign</span>
        </div>
        {/* Footer */}
        <div className="flex flex-col gap-1 md:gap-1.5">
          <div className="w-3/4 h-0.5 md:h-1 bg-gray-600 rounded-full"></div>
          <div className="flex justify-between items-end">
             <div className="flex flex-col gap-0.5 w-1/2">
               <div className="w-full h-0.5 md:h-1 bg-gray-700 rounded-full"></div>
               <div className="w-2/3 h-0.5 md:h-1 bg-gray-700 rounded-full"></div>
             </div>
             <div className="w-5 md:w-8 h-1 md:h-2 bg-gray-600 rounded-full"></div>
          </div>
        </div>
      </div>
    ),
    color: 'rgba(59,130,246,0.15)'
  },
  {
    id: 'landing',
    title: 'LANDING PAGE',
    subtitle: 'CAPTACIÓN',
    icon: (
      <div className="relative w-16 h-28 md:w-24 md:h-48 bg-dark/90 rounded-lg md:rounded-xl border border-indigo-500/40 flex flex-col p-1.5 md:p-2 shadow-[0_0_15px_rgba(99,102,241,0.2)] overflow-hidden">
        <div className="flex gap-1 md:gap-1.5 mb-1.5 md:mb-2 border-b border-indigo-500/30 pb-1 md:pb-1.5 shrink-0">
          <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 rounded-full bg-red-500/80"></div>
          <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-1.5 h-1.5 md:w-1.5 md:h-1.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-[4px] md:text-[6px] text-center text-indigo-300 font-bold mb-1.5 md:mb-2 tracking-wide shrink-0">TU SISTEMA</div>
        <div className="flex flex-col gap-1.5 md:gap-2 h-full">
          <div className="w-full h-1/2 border border-indigo-500/30 rounded md:rounded-lg flex items-center justify-center bg-indigo-500/5">
            <span className="material-symbols-outlined text-indigo-400/50 text-sm md:text-xl">image</span>
          </div>
          <div className="w-full h-1/2 flex flex-col gap-1 md:gap-1.5">
            <div className="w-full h-1 md:h-1.5 bg-indigo-500/20 rounded-sm"></div>
            <div className="w-3/4 h-1 md:h-1.5 bg-indigo-500/20 rounded-sm"></div>
            <div className="w-full h-3 md:h-4 bg-green-500/90 rounded mt-auto flex items-center justify-center shadow-lg shadow-green-500/20">
              <span className="text-[3px] md:text-[5px] text-white font-bold">Contactar</span>
            </div>
          </div>
        </div>
      </div>
    ),
    color: 'rgba(99,102,241,0.15)'
  },
  {
    id: 'whatsapp',
    title: 'WHATSAPP',
    subtitle: 'CHATBOT 24/7',
    icon: (
      <div className="relative w-16 h-28 md:w-24 md:h-48 bg-dark/90 rounded-xl md:rounded-[2rem] border-2 md:border-4 border-gray-800 flex flex-col p-1 md:p-2 shadow-[0_0_15px_rgba(34,197,94,0.2)] overflow-hidden">
        <div className="flex items-center gap-1 md:gap-2 border-b border-gray-700 pb-1 md:pb-1.5 mb-1 md:mb-2 mt-0.5 md:mt-1 px-0.5 md:px-1 shrink-0">
          <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-green-500 flex items-center justify-center shadow-md shadow-green-500/30 shrink-0">
            <span className="material-symbols-outlined text-white text-[6px] md:text-[10px]">smart_toy</span>
          </div>
          <div className="text-[4px] md:text-[6px] text-white font-bold">Bot IA</div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2 px-0.5 md:px-1">
          <div className="self-start bg-gray-700 text-white text-[4px] md:text-[6px] p-1 md:p-1.5 rounded-r-lg rounded-bl-lg md:rounded-r-xl md:rounded-bl-xl max-w-[85%] leading-tight shadow-sm">
            ¡Hola! ¿En qué te ayudo?
          </div>
          <div className="self-end bg-green-600 text-white text-[4px] md:text-[6px] p-1 md:p-1.5 rounded-l-lg rounded-br-lg md:rounded-l-xl md:rounded-br-xl max-w-[85%] leading-tight shadow-sm">
            Más info.
          </div>
          <div className="self-start bg-gray-700 text-white text-[4px] md:text-[6px] p-1 md:p-1.5 rounded-r-lg rounded-bl-lg md:rounded-r-xl md:rounded-bl-xl max-w-[85%] leading-tight shadow-sm">
            ¡Claro! ¿Agendamos?
          </div>
        </div>
      </div>
    ),
    color: 'rgba(34,197,94,0.15)'
  },
  {
    id: 'calendar',
    title: 'REUNIÓN CONFIRMADA',
    subtitle: 'RESERVA AUTOMÁTICA',
    icon: (
      <div className="relative w-16 h-28 md:w-24 md:h-48 bg-dark/90 rounded-lg md:rounded-xl border border-accent/40 flex flex-col p-1.5 md:p-2.5 shadow-[0_0_15px_rgba(0,210,255,0.2)] overflow-hidden">
        <div className="flex items-center justify-center gap-1 md:gap-1.5 mb-1.5 md:mb-3 border-b border-accent/20 pb-1 md:pb-1.5 w-full shrink-0">
          <span className="material-symbols-outlined text-accent text-[10px] md:text-sm">event</span>
          <span className="text-[5px] md:text-[7px] text-white font-bold tracking-wider">13 MARZO</span>
        </div>
        <div className="text-[4px] md:text-[6px] text-accent/90 font-bold text-center mb-1 md:mb-1.5 tracking-wide">REUNIÓN CONFIRMADA</div>
        <div className="text-[4px] md:text-[6px] text-white font-medium text-center mb-1.5 md:mb-2">DEMO DE SISTEMA</div>
        <div className="text-[4px] md:text-[6px] text-white/80 text-center bg-white/5 py-1 md:py-1.5 px-1 md:px-2 rounded border border-white/5 w-full mt-auto mb-1 md:mb-1.5">11:00 AM</div>
        <div className="absolute -bottom-2 -right-2 md:-bottom-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-accent flex items-center justify-center border md:border-2 border-dark shadow-[0_0_10px_rgba(0,210,255,0.5)]">
          <span className="material-symbols-outlined text-dark text-[8px] md:text-[10px] font-bold">check</span>
        </div>
      </div>
    ),
    color: 'rgba(0,210,255,0.15)'
  }
];

const WorkflowAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center py-4 md:py-10 px-0">
      
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

      <div 
        className="flex flex-row items-center justify-center gap-1 md:gap-1 lg:gap-2 w-full scale-[0.85] sm:scale-90 lg:scale-95 xl:scale-100 origin-center"
        style={{ transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)' }}
      >
        {steps.map((step, i) => (
          <React.Fragment key={step.id}>
            <motion.div
              className="flex flex-col items-center z-10 w-full max-w-[70px] md:max-w-[130px] lg:max-w-[150px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2, ease: "easeOut" }}
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                className="w-full flex flex-col items-center"
              >
                {/* Glass Panel */}
                <div 
                  className="relative p-2 md:p-4 lg:p-5 rounded-xl md:rounded-3xl backdrop-blur-xl border border-white/10 flex flex-col items-center justify-center w-full"
                  style={{ 
                    background: `linear-gradient(145deg, rgba(255,255,255,0.05) 0%, ${step.color} 100%)`,
                    boxShadow: `0 10px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
                  }}
                >
                  {step.icon}
                </div>

                {/* Text Below */}
                <div className="mt-2 md:mt-3 lg:mt-4 text-center w-full px-0.5 md:px-1">
                  <h3 className="text-[5px] md:text-[8px] lg:text-[10px] font-extrabold text-white tracking-widest mb-0.5 md:mb-1 uppercase leading-tight">{step.title}</h3>
                  <p className="text-[4px] md:text-[7px] lg:text-[8px] text-white/70 font-medium leading-tight whitespace-pre-line uppercase">{step.subtitle}</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Arrow connecting steps */}
            {i < steps.length - 1 && (
              <motion.div
                className="flex items-center justify-center text-accent/60 z-0 shrink-0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: (i * 0.2) + 0.2 }}
              >
                <span className="material-symbols-outlined text-[12px] md:text-lg lg:text-xl">arrow_forward</span>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WorkflowAnimation;
