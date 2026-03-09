import React from 'react';
import { motion } from 'motion/react';

const nodes = [
  {
    id: 'meta',
    label: 'Meta Ads',
    finalX: 68,
    finalY: 88,
    icon: (
      <svg viewBox="0 0 36 36" fill="currentColor" className="w-8 h-8 text-white drop-shadow-lg transform transition-transform group-hover:scale-110">
        <path d="M28.18,12.31a8.42,8.42,0,0,0-5.69,2.21L18.66,18l-3.83-3.48a8.44,8.44,0,1,0,1.2,12.48l3.83-3.48,3.83,3.48a8.44,8.44,0,1,0-1.2-12.48ZM10.5,25.5A4.5,4.5,0,1,1,15,21a4.5,4.5,0,0,1-4.5,4.5Zm15,0A4.5,4.5,0,1,1,30,21a4.5,4.5,0,0,1-4.5,4.5Z" />
      </svg>
    ),
    bg: 'from-blue-500 to-blue-700',
    shadow: 'rgba(59,130,246,0.5)'
  },
  {
    id: 'landing',
    label: 'Landing Page',
    finalX: 368,
    finalY: 88,
    icon: <span className="material-symbols-outlined text-white text-3xl drop-shadow-lg transform transition-transform group-hover:scale-110">web</span>,
    bg: 'from-indigo-500 to-purple-600',
    shadow: 'rgba(99,102,241,0.5)'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    finalX: 218,
    finalY: 218,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white drop-shadow-lg transform transition-transform group-hover:scale-110">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
      </svg>
    ),
    bg: 'from-green-400 to-green-600',
    shadow: 'rgba(34,197,94,0.5)'
  },
  {
    id: 'ia',
    label: 'Calificación IA',
    finalX: 68,
    finalY: 348,
    icon: (
      <div className="relative flex items-center justify-center transform transition-transform group-hover:scale-110">
        <span className="material-symbols-outlined text-white text-3xl drop-shadow-lg">forum</span>
        <span className="material-symbols-outlined text-accent text-xl absolute -bottom-2 -right-2 drop-shadow-lg font-bold">settings</span>
      </div>
    ),
    bg: 'from-blue-600 to-indigo-800',
    shadow: 'rgba(79,70,229,0.5)'
  },
  {
    id: 'calendar',
    label: 'Reunión Confirmada',
    finalX: 368,
    finalY: 348,
    icon: (
      <div className="relative flex items-center justify-center transform transition-transform group-hover:scale-110">
        <span className="material-symbols-outlined text-white text-3xl drop-shadow-lg">calendar_month</span>
        <span className="material-symbols-outlined text-green-400 text-xl absolute -bottom-2 -right-2 drop-shadow-lg font-bold bg-dark/50 rounded-full">check_circle</span>
      </div>
    ),
    bg: 'from-orange-400 to-orange-600',
    shadow: 'rgba(249,115,22,0.5)'
  }
];

const paths = [
  "M 100 120 Q 250 80 400 120",
  "M 400 120 Q 380 200 250 250",
  "M 250 250 Q 120 300 100 380",
  "M 100 380 Q 250 420 400 380"
];

const T = 13.5; // Total loop duration

const getNodeAnimation = (i: number, finalX: number, finalY: number) => {
  const start = (i * 2.5) / T;
  const peak = (i * 2.5 + 0.5) / T;
  const settle = (i * 2.5 + 1.5) / T;
  const fade = 12.5 / T;
  
  if (i === 0) {
    return {
      times: [0, peak, settle, fade, 1],
      opacity: [0, 1, 1, 1, 0],
      scale: [0, 1.8, 1, 1, 0],
      x: [218, 218, finalX, finalX, finalX],
      y: [218, 218, finalY, finalY, finalY],
    };
  }

  return {
    times: [0, start, peak, settle, fade, 1],
    opacity: [0, 0, 1, 1, 1, 0],
    scale: [0, 0, 1.8, 1, 1, 0],
    x: [218, 218, 218, finalX, finalX, finalX],
    y: [218, 218, 218, finalY, finalY, finalY],
  };
};

const getPathAnimation = (i: number) => {
  const nodeIdx = i + 1;
  const startDraw = (nodeIdx * 2.5 + 0.5) / T;
  const endDraw = (nodeIdx * 2.5 + 1.5) / T;
  const fade = 12.5 / T;

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
              transition={{ duration: T, repeat: Infinity, ease: "easeInOut" }}
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
              className="absolute top-0 left-0 flex flex-col items-center gap-3 group z-10"
              animate={getNodeAnimation(i, node.finalX, node.finalY)}
              transition={{ duration: T, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* 3D Icon Container */}
              <div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${node.bg} p-[1px] relative transform-gpu`}
                style={{
                  boxShadow: `0 15px 25px ${node.shadow}, inset 0 4px 8px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.3)`
                }}
              >
                <div className="w-full h-full bg-dark/30 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  {node.icon}
                </div>
              </div>
              
              {/* Label */}
              <motion.span 
                className="text-[10px] font-bold text-white/90 uppercase tracking-wider bg-dark/80 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-lg text-center leading-tight"
              >
                {node.label}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
