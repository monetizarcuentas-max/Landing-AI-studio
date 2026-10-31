import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const WorkflowAnimation: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-3xl h-[500px] lg:h-[650px] mx-auto flex items-center justify-center pointer-events-none perspective-[1500px] overflow-visible">
      
      {/* 3D Background Space (Depth and Nodes) */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ rotateX: [10, -5, 10], rotateY: [-10, 10, -10] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute inset-0 bg-[#020817] shadow-[inset_0_0_150px_rgba(0,0,0,1)] rounded-3xl opacity-80" style={{ transform: 'translateZ(-200px)' }} />
        {/* Subtle grid pattern */}
        <div className="absolute inset-[-50%] opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #00d2ff 1px, transparent 1px)', backgroundSize: '40px 40px', transform: 'translateZ(-100px) rotateX(45deg)' }} />
      </motion.div>

      {/* Main Container with subtle floating */}
      <motion.div 
        className="relative w-full h-full flex items-center justify-between z-10"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ y: [-10, 10, -10], rotateY: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        
        {/* LEFT COMPONENT: Traffic Injection (Meta Ads) */}
        <div className="absolute left-[0%] top-1/2 -translate-y-1/2 w-48 h-full flex items-center justify-center z-20" style={{ transform: 'translateZ(50px)' }}>
          {/* Incoming Flow Particles & Arrows */}
          <div className="absolute inset-0">
             {[...Array(15)].map((_, i) => (
                <motion.div
                  key={`traffic-particle-${i}`}
                  className="absolute w-6 h-[2px] bg-gradient-to-r from-orange-500 to-cyan-400 rounded-full blur-[1px]"
                  style={{ top: `${20 + Math.random() * 60}%`, left: '-50%' }}
                  animate={{ 
                    left: '120%', 
                    opacity: [0, 1, 1, 0],
                    scale: [0.5, 1.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1 + Math.random() * 1.5, 
                    repeat: Infinity, 
                    delay: Math.random() * 2,
                    ease: "anticipate"
                  }}
                />
             ))}
             {/* Floating IG icons / Ads icons */}
             {[...Array(5)].map((_, i) => (
                 <motion.div 
                   key={`social-icon-${i}`}
                   className="absolute left-[-20%] flex items-center justify-center w-8 h-8 rounded-xl bg-orange-600/20 border border-orange-500/40 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.3)] text-orange-400"
                   style={{ top: `${25 + Math.random() * 50}%` }}
                   initial={{ opacity: 0, x: -30, rotate: -20, scale: 0.5 }}
                   animate={{ opacity: [0, 1, 1, 0], x: 200, rotate: 20, scale: [0.5, 1, 0.8, 0] }}
                   transition={{ duration: 2.5 + Math.random(), repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                 >
                   <span className="material-symbols-outlined text-sm">photo_camera</span>
                 </motion.div>
             ))}
          </div>
        </div>

        {/* CENTER COMPONENT: The "Growth Core" (Transparent Digital Glass & AI) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 z-30" style={{ transform: 'translateZ(100px)' }}>
           {/* Outer Core Ring */}
           <motion.div 
             className="absolute inset-[-20px] rounded-full border-4 border-[#00d2ff]/10 border-t-[#00d2ff]/60 border-b-cyan-400/60"
             animate={{ rotate: 360, rotateX: 20, rotateY: 10 }}
             transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
             style={{ transformStyle: 'preserve-3d' }}
           />
           <motion.div 
             className="absolute inset-[-40px] rounded-full border border-green-500/20 border-r-green-400/60 border-l-transparent"
             animate={{ rotate: -360, rotateX: -20, rotateY: -10 }}
             transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
             style={{ transformStyle: 'preserve-3d' }}
           />
           
           {/* Inner Glass Sphere */}
           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-900/40 to-emerald-900/40 backdrop-blur-xl border border-white/20 shadow-[0_0_80px_rgba(0,210,255,0.2),inset_0_0_40px_rgba(0,210,255,0.4)] overflow-hidden flex items-center justify-center">
              {/* Internal Neural Web */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-60">
                 <motion.path 
                   d="M20,50 Q40,20 50,50 T80,50" 
                   fill="transparent" 
                   stroke="url(#core-grad)" 
                   strokeWidth="1.5" 
                   strokeDasharray="4 4"
                   animate={{ strokeDashoffset: [0, -20] }}
                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                 />
                 <motion.path 
                   d="M20,50 Q40,80 50,50 T80,50" 
                   fill="transparent" 
                   stroke="url(#core-grad)" 
                   strokeWidth="1.5" 
                   strokeDasharray="4 4"
                   animate={{ strokeDashoffset: [0, 20] }}
                   transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                 />
                 <defs>
                   <linearGradient id="core-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                     <stop offset="0%" stopColor="#00d2ff" />
                     <stop offset="100%" stopColor="#10b981" />
                   </linearGradient>
                 </defs>
              </svg>
              
              {/* AI Processing Core */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-[#00d2ff]/10 flex items-center justify-center animate-pulse-slow">
                 <motion.div 
                   className="absolute inset-0 rounded-full bg-green-500/20 blur-md"
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                 />
                 <span className="material-symbols-outlined text-5xl text-white drop-shadow-[0_0_15px_#10b981]">dynamic_form</span>
              </div>
              
              {/* Flash abstract chats */}
              <motion.div className="absolute top-[20%] left-[60%] bg-white/10 backdrop-blur-md rounded-xl p-1 shadow-[0_0_10px_#10b981]" animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}>
                 <div className="w-8 h-1 bg-green-400 rounded-full mb-1"></div>
                 <div className="w-4 h-1 bg-green-400/50 rounded-full"></div>
              </motion.div>
              <motion.div className="absolute top-[60%] left-[20%] bg-white/10 backdrop-blur-md rounded-xl p-1 shadow-[0_0_10px_#00d2ff]" animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}>
                 <div className="w-10 h-1 bg-cyan-400 rounded-full mb-1"></div>
                 <div className="w-6 h-1 bg-cyan-400/50 rounded-full"></div>
              </motion.div>
           </div>
           
           <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono tracking-[0.2em] text-white/50 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
             AI CORE ENGINE
           </div>
        </div>

        {/* RIGHT COMPONENT: Stabilized Output & Dashboard Panel */}
        <div className="absolute right-[0%] top-1/2 -translate-y-1/2 w-72 h-full flex items-center justify-center z-40" style={{ transform: 'translateZ(150px)' }}>
          {/* Connecting Flow from Core */}
          <div className="absolute left-[-150px] w-[150px] top-1/2 -translate-y-1/2 flex items-center h-20">
             {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`out-particle-${i}`}
                  className="absolute w-12 h-[2px] bg-green-400 rounded-full shadow-[0_0_10px_#10b981]"
                  style={{ top: `${40 + Math.random() * 20}%`, left: '0%' }}
                  animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "linear" }}
                />
             ))}
          </div>

          <motion.div 
             className="relative w-full p-5 rounded-2xl border border-green-500/30 bg-[#0B1527]/80 backdrop-blur-2xl shadow-[0_0_60px_rgba(16,185,129,0.15)] flex flex-col gap-4 overflow-hidden"
             style={{ transformStyle: 'preserve-3d' }}
             animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }}
             transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
             {/* Diagonal glass reflection */}
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 pointer-events-none" />
             
             {/* Header */}
             <div className="flex justify-between items-center border-b border-green-500/20 pb-2">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                   <span className="text-[10px] font-mono font-bold text-green-400 uppercase tracking-widest">Live ROI</span>
                 </div>
                 <span className="material-symbols-outlined text-sm text-green-500">query_stats</span>
             </div>

             {/* Live Revenue Metric */}
             <div>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mb-1">Facturación Generada</p>
                <div className="flex items-end gap-1 font-mono">
                  <span className="text-3xl font-black text-white glow-text-green tracking-tighter">
                    <span className="text-green-500 mr-1">$</span>
                    <AnimatedRevenue />
                  </span>
                </div>
             </div>

             {/* Bar Chart Visualization */}
             <div className="space-y-2 mt-2">
                <div className="text-[9px] text-white/50 uppercase tracking-wider flex justify-between">
                   <span>Conversiones Recientes</span>
                   <span className="text-green-400">↑ 48%</span>
                </div>
                <div className="flex items-end gap-2 h-16 pt-2 border-b border-white/10 pb-1">
                   {[40, 65, 45, 80, 55, 95].map((height, i) => (
                      <div key={`bar-${i}`} className="flex-1 bg-green-500/10 rounded-t-sm relative group overflow-hidden" style={{ height: '100%' }}>
                        <motion.div 
                          className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-sm"
                          initial={{ height: '0%' }}
                          animate={{ height: ['0%', `${height}%`, `${height}%`, '10%'] }}
                          transition={{ duration: 4, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                        />
                      </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedRevenue = () => {
  const [val, setVal] = useState(14500);

  useEffect(() => {
    const timer = setInterval(() => {
       // Simulate dynamic revenue increases
       setVal(v => Math.min(v + Math.floor(Math.random() * 250), 99999));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return <>{val.toLocaleString('en-US')}</>;
};

export default WorkflowAnimation;

