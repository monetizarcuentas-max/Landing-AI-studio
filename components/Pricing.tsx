
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="text-4xl font-extrabold text-white text-center md:text-left">
                Inversión <span className="text-primary">Estratégica</span>
            </h2>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="material-symbols-outlined text-primary text-sm">cycle</span>
                <span className="text-xs font-bold text-primary uppercase">Estructura Modular</span>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1: Implementation */}
            <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative glass-card p-10 rounded-4xl border-white/10 flex flex-col h-full hover:border-primary/40 transition-colors">
                    <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Paso 1: Implementación</p>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-6xl font-extrabold text-white">$800</span>
                        <span className="text-sm font-medium text-white/40">Setup Inicial</span>
                    </div>
                    <ul className="space-y-5 flex-1 mb-10">
                        <li className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            <span className="text-sm text-white/70">Arquitectura de Agente IA (WhatsApp/IG)</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            <span className="text-sm text-white/70">Diseño de Lógica de Asistencia y Atención</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">verified_user</span>
                            <span className="text-sm text-white/70">Configuración de Campañas Meta Ads</span>
                        </li>
                    </ul>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest text-center">Requisito para el Paso 2</div>
                </div>
            </div>

            {/* Step 2: Maintenance */}
            <div className="relative group">
                <div className="absolute inset-0 bg-primary/40 blur-2xl rounded-4xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative border border-primary/30 bg-white/5 p-10 rounded-4xl flex flex-col h-full">
                    <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-primary mb-6">Paso 2: Mantenimiento & Evolución</p>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-6xl font-extrabold text-white">$377</span>
                        <span className="text-sm font-medium text-white/40">/mes</span>
                    </div>
                    <ul className="space-y-5 flex-1 mb-10">
                        <li className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">auto_mode</span>
                            <span className="text-sm text-white/90 font-medium">Alimentación Continua del Cerebro IA</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">auto_mode</span>
                            <span className="text-sm text-white/90 font-medium">Gestión y Optimización de Anuncios</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">auto_mode</span>
                            <span className="text-sm text-white/90 font-medium">Soporte Técnico de Automatización</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary">auto_mode</span>
                            <span className="text-sm text-white/90 font-medium">Actualización de Base de Conocimientos</span>
                        </li>
                    </ul>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-primary text-white py-4 rounded-2xl font-extrabold hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
                    >
                        Comenzar Proceso
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
