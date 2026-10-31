import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';

const Solution: React.FC = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flowNodes = [
    { icon: 'campaign', label: t('solution.1.label'), sublabel: t('solution.1.sub') },
    { icon: 'forum', label: t('solution.2.label'), sublabel: t('solution.2.sub') },
    { icon: 'web', label: t('solution.3.label'), sublabel: t('solution.3.sub') },
    { icon: 'event_available', label: t('solution.4.label'), sublabel: t('solution.4.sub') }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Holographic Grid & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,210,255,0.15)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="px-6 max-w-screen-2xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-white mb-6"
          >
            {t('solution.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-pulse">{t('solution.title2')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg lg:text-xl leading-relaxed"
          >
            {t('solution.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LÍNEA DE FLUJO (Left Side) */}
          <div className="lg:col-span-7 xl:col-span-8 relative">
            {/* Horizontal flow line for desktop */}
            <div className="hidden lg:block absolute top-[20%] left-10 right-10 h-[2px] bg-white/10 -z-10">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary via-accent to-primary"
                initial={{ width: "0%", opacity: 0 }}
                whileInView={{ width: "100%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Pulsing light particle on the line */}
              <motion.div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_15px_#00d2ff]"
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-4">
              {flowNodes.map((step, idx) => (
                <React.Fragment key={idx}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-4 group relative flex-1 text-left lg:text-center w-full"
                  >
                    {/* Glowing Node */}
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                      <div className="w-16 h-16 lg:w-20 lg:h-20 glass-card rounded-full flex items-center justify-center border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)] relative z-10 overflow-hidden">
                        {/* Node border glow */}
                        <motion.div 
                          className="absolute inset-0 border border-transparent rounded-full"
                          animate={{ borderColor: ['rgba(0, 210, 255, 0.2)', 'rgba(0, 210, 255, 0.8)', 'rgba(0, 210, 255, 0.2)'] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                        />
                        <span className="material-symbols-outlined text-white text-2xl lg:text-3xl relative z-20 group-hover:text-accent transition-colors">
                          {step.icon}
                        </span>
                      </div>
                    </div>
                    {/* Node Text */}
                    <div className="flex-1 lg:flex-none">
                      <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-widest mb-2 lg:mb-3">{step.label}</h3>
                      <p className="text-xs md:text-sm text-white/50 leading-relaxed max-w-[200px] lg:mx-auto">{step.sublabel}</p>
                    </div>
                  </motion.div>
                  
                  {/* Mobile downward arrow */}
                  {idx < flowNodes.length - 1 && (
                    <div className="lg:hidden w-full flex justify-center text-accent/50">
                      <motion.span 
                        animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="material-symbols-outlined"
                      >
                        arrow_downward
                      </motion.span>
                    </div>
                  )}
                  {/* Desktop right arrow (fallback if line is not enough, but line usually suffices. Adding subtle arrows) */}
                  {idx < flowNodes.length - 1 && (
                    <div className="hidden lg:flex shrink-0 items-start mt-8 text-accent text-opacity-50">
                       <span className="material-symbols-outlined text-sm">double_arrow</span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* ELEMENTOS DE ANIMACIÓN HOLOGRÁFICA (Right Side) */}
          <div className="lg:col-span-5 xl:col-span-4 relative mt-16 lg:mt-0 flex justify-center items-center perspective-[1000px]">
             {/* Holographic background flare */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 blur-[80px] rounded-full"></div>
             
             {/* Container for Holographic UI */}
             <motion.div 
               className="relative w-full max-w-sm h-auto flex flex-col gap-6"
               initial={{ rotateY: -10, opacity: 0, x: 50 }}
               whileInView={{ rotateY: 0, opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
             >
                {/* 1. Chat Animation */}
                <div className="glass-card p-4 rounded-2xl border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md bg-white/[0.02]">
                   <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-2">
                     <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                       <span className="material-symbols-outlined text-accent text-sm">smart_toy</span>
                     </div>
                     <span className="text-xs font-mono text-white/70">Flujo Conversacional</span>
                   </div>
                   <div className="space-y-3">
                     <motion.div 
                       initial={{ opacity: 0, x: 20 }} animate={mounted ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.5 }}
                       className="bg-[#2a3942] rounded-xl rounded-tr-none px-3 py-2 text-xs text-white self-end ml-10 border border-white/5 shadow-md"
                     >
                       ¡Hola! Vi su anuncio, me interesa.
                     </motion.div>
                     <motion.div 
                       initial={{ opacity: 0, x: -20 }} animate={mounted ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1.5 }}
                       className="bg-primary/20 rounded-xl rounded-tl-none px-3 py-2 text-xs text-white border border-primary/30 shadow-[0_0_10px_rgba(0,210,255,0.1)] mr-10"
                     >
                       ¡Hola! ¡Gracias por escribir! ¿Quieres conocer nuestros planes?
                     </motion.div>
                     <motion.div 
                       initial={{ opacity: 0, x: 20 }} animate={mounted ? { opacity: 1, x: 0 } : {}} transition={{ delay: 2.5 }}
                       className="bg-[#2a3942] rounded-xl rounded-tr-none px-3 py-2 text-xs text-white self-end ml-10 border border-white/5 shadow-md"
                     >
                       Sí, ¡Quiero agendar!
                     </motion.div>
                     <motion.div 
                       initial={{ opacity: 0, x: -20 }} animate={mounted ? { opacity: 1, x: 0 } : {}} transition={{ delay: 3.5 }}
                       className="bg-primary/20 rounded-xl rounded-tl-none px-3 py-2 text-xs text-white border border-primary/30 shadow-[0_0_10px_rgba(0,210,255,0.1)] mr-10"
                     >
                       Perfecto, escoge tu fecha aquí abajo 👇
                     </motion.div>
                   </div>
                </div>

                {/* 2. Calendar Animation & Dashboard Convergence */}
                <div className="flex gap-4">
                  {/* Calendar Node */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ delay: 4 }}
                    className="flex-1 glass-card p-4 rounded-2xl border-white/10 shadow-2xl backdrop-blur-md bg-white/[0.02] flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/10"
                      animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 5 }}
                    />
                    <span className="material-symbols-outlined text-3xl text-accent mb-2">event_available</span>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest">Cita Confirmada</div>
                    <div className="text-xl font-bold text-white mt-1 flex items-center gap-1">
                      14:00 <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                    </div>
                  </motion.div>

                  {/* Dashboard Node */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={mounted ? { opacity: 1, y: 0 } : {}} transition={{ delay: 4.5 }}
                    className="flex-[1.5] glass-card p-4 rounded-2xl border border-primary/30 shadow-[0_0_30px_rgba(0,210,255,0.15)] relative overflow-hidden backdrop-blur-md bg-primary/5"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    <div className="flex justify-between items-center mb-3">
                       <span className="text-[10px] font-mono text-primary uppercase">Métricas</span>
                       <div className="flex gap-1">
                         <span className="material-symbols-outlined text-[10px] text-white/50">smartphone</span>
                         <span className="material-symbols-outlined text-[10px] text-white/50">event</span>
                         <span className="material-symbols-outlined text-[10px] text-green-400">attach_money</span>
                       </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-[10px] text-white/60">Conversiones</span>
                           <span className="text-xs font-mono font-bold text-primary">120+</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                           <motion.div 
                             className="h-full bg-primary"
                             initial={{ width: 0 }} animate={mounted ? { width: '85%' } : {}} transition={{ delay: 5, duration: 1.5 }}
                           />
                        </div>
                      </div>

                      <div className="pt-2 border-t border-white/5">
                        <div className="text-[10px] text-white/60 mb-1">Facturación Generada</div>
                        <div className="flex justify-between items-end">
                           <motion.span 
                             className="text-lg font-bold text-white flex items-center"
                           >
                             $14,500
                           </motion.span>
                           <motion.span 
                             className="material-symbols-outlined text-green-400 animate-pulse"
                           >
                             monitoring
                           </motion.span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;

