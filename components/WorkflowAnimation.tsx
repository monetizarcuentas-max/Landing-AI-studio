import React from 'react';
import { motion } from 'motion/react';

const nodes = [
  {
    id: 'meta',
    label: 'Meta Ads',
    finalX: 60,
    finalY: 60,
    icon: (
      <svg viewBox="0 0 24 24" fill="#1877F2" className="w-10 h-10 drop-shadow-sm">
        <path d="M20.5 8.5c-1.4 0-2.7.6-3.7 1.7L12 15.5l-4.8-5.3C6.2 9.1 4.9 8.5 3.5 8.5 1.6 8.5 0 10.1 0 12s1.6 3.5 3.5 3.5c1.4 0 2.7-.6 3.7-1.7L12 8.5l4.8 5.3c1 1.1 2.3 1.7 3.7 1.7 1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5z"/>
      </svg>
    ),
    bg: 'bg-white',
    depthColor: '#cbd5e1', // slate-300
  },
  {
    id: 'landing',
    label: 'Landing Page',
    finalX: 360,
    finalY: 60,
    icon: <span className="material-symbols-outlined text-white text-4xl drop-shadow-sm">web</span>,
    bg: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    depthColor: '#4338ca', // indigo-700
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    finalX: 210,
    finalY: 210,
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 drop-shadow-sm">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
    bg: 'bg-gradient-to-br from-green-400 to-green-500',
    depthColor: '#15803d', // green-700
  },
  {
    id: 'ia',
    label: 'Calificación IA',
    finalX: 60,
    finalY: 360,
    icon: (
      <div className="relative flex items-center justify-center">
        <span className="material-symbols-outlined text-white text-4xl drop-shadow-sm">forum</span>
        <span className="material-symbols-outlined text-accent text-xl absolute -bottom-1 -right-1 drop-shadow-sm font-bold">settings</span>
      </div>
    ),
    bg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    depthColor: '#3730a3', // indigo-800
  },
  {
    id: 'calendar',
    label: 'Reunión Confirmada',
    finalX: 360,
    finalY: 360,
    icon: (
      <div className="relative flex items-center justify-center">
        <span className="material-symbols-outlined text-white text-4xl drop-shadow-sm">calendar_month</span>
        <span className="material-symbols-outlined text-green-400 text-xl absolute -bottom-1 -right-1 drop-shadow-sm font-bold bg-dark/50 rounded-full">check_circle</span>
      </div>
    ),
    bg: 'bg-gradient-to-br from-orange-400 to-orange-500',
    depthColor: '#c2410c', // orange-700
  }
];

const paths = [
  "M 100 100 Q 250 60 400 100",
  "M 400 100 Q 380 180 250 250",
  "M 250 250 Q 120 300 100 400",
  "M 100 400 Q 250 440 400 400"
];

const T = 8; // Total loop duration

const getNodeAnimation = (i: number) => {
  const step = 1 / 6; 
  const start = i * step;
  const pop = start + 0.05;
  const settle = pop + 0.02;
  const fade = 5.5 * step;

  return {
    times: [0, start, pop, settle, fade, 1],
    opacity: [0, 0, 1, 1, 1, 0],
    scale: [0, 0, 1.1, 1, 1, 0],
    y: [20, 20, -10, 0, 0, 0], 
  };
};

const getPathAnimation = (i: number) => {
  const step = 1 / 6;
  const startDraw = (i + 0.5) * step; 
  const endDraw = (i + 1) * step; 
  const fade = 5.5 * step;

  return {
    times: [0, startDraw, endDraw, fade, 1],
    pathLength: [0, 0, 1, 1, 0],
    opacity: [0, 0, 1, 1, 0]
  };
};

const WorkflowAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center perspective-1000">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full animate-glow"></div>
      
      {/* Main Container */}
      <div className="relative w-full h-full glass-card rounded-[2.5rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden bg-dark/80 backdrop-blur-2xl">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
        </div>

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" style={{ zIndex: 1 }}>
          <defs>
            <filter id="glow-line">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {paths.map((d, i) => (
            <motion.path
              key={`path-${i}`}
              d={d}
              fill="none"
              stroke="#00D2FF"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow-line)"
              animate={getPathAnimation(i)}
              transition={{ duration: T, repeat: Infinity, ease: "linear" }}
            />
          ))}
          
          {/* Dashed background paths (always visible but faint) */}
          {paths.map((d, i) => (
            <path
              key={`bg-path-${i}`}
              d={d}
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          ))}
        </svg>

        {/* Nodes Container */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
          {nodes.map((node, i) => (
            <motion.div
              key={node.id}
              className="absolute flex flex-col items-center gap-3 z-10"
              style={{ left: node.finalX, top: node.finalY }}
              animate={getNodeAnimation(i)}
              transition={{ duration: T, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* 3D Coin Container */}
              <div 
                className={`w-20 h-20 rounded-full ${node.bg} relative flex items-center justify-center transform-gpu`}
                style={{
                  boxShadow: `inset 0 4px 6px rgba(255,255,255,0.4), inset 0 -4px 6px rgba(0,0,0,0.2), 0 8px 0 ${node.depthColor}, 0 15px 20px rgba(0,0,0,0.4)`
                }}
              >
                {node.icon}
              </div>
              
              {/* Label */}
              <span 
                className="text-[11px] font-bold text-white/90 uppercase tracking-wider bg-dark/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-lg text-center leading-tight mt-1"
              >
                {node.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
