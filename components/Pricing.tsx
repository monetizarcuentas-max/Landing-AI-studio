
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-6 relative bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-4">
                Planes de <span className="gradient-text-primary">Automatización</span>
            </h2>
            <p className="text-white/50 text-xl">Soluciones escalables para cada etapa de tu negocio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="relative group">
                <div className="relative glass-card p-10 rounded-4xl border-white/10 flex flex-col h-full hover:border-white/20 transition-colors">
                    <p className="text-xl font-bold text-white mb-2">Plan Básico</p>
                    <p className="text-sm text-white/50 mb-6">Ideal para empezar a automatizar.</p>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-4xl font-extrabold text-white">USD 400</span>
                        <span className="text-sm font-medium text-white/40">- 600</span>
                    </div>
                    <ul className="space-y-4 flex-1 mb-10">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Bot de WhatsApp</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Respuestas automáticas</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Link de agenda</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Conexión con Google Calendar</span>
                        </li>
                    </ul>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold transition-all"
                    >
                        Elegir Plan
                    </button>
                </div>
            </div>

            {/* Plan Profesional */}
            <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-4xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative border border-primary/30 bg-white/5 p-10 rounded-4xl flex flex-col h-full">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Más Elegido</div>
                    <p className="text-xl font-bold text-white mb-2">Plan Profesional</p>
                    <p className="text-sm text-white/50 mb-6">Para empresas que buscan calificar prospectos.</p>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-4xl font-extrabold text-white">USD 700</span>
                        <span className="text-sm font-medium text-white/40">- 900</span>
                    </div>
                    <ul className="space-y-4 flex-1 mb-10">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">Bot con IA</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">Calificación automática de clientes</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">Landing page</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">Conexión con agenda</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/90 font-medium">Recordatorios automáticos</span>
                        </li>
                    </ul>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-2xl font-extrabold hover:from-primary/90 hover:to-accent/90 transition-all shadow-xl shadow-primary/20 glow-primary"
                    >
                        Elegir Plan
                    </button>
                </div>
            </div>

            {/* Plan Completo */}
            <div className="relative group">
                <div className="relative glass-card p-10 rounded-4xl border-white/10 flex flex-col h-full hover:border-white/20 transition-colors">
                    <p className="text-xl font-bold text-white mb-2">Plan Completo</p>
                    <p className="text-sm text-white/50 mb-6">El sistema definitivo de captación.</p>
                    <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-4xl font-extrabold text-white">USD 1000</span>
                        <span className="text-sm font-medium text-white/40">- 1200</span>
                    </div>
                    <ul className="space-y-4 flex-1 mb-10">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Bot IA avanzado</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Landing page optimizada</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Sistema de captación con anuncios</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Automatización completa</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-sm text-white/70">Capacitación al cliente</span>
                        </li>
                    </ul>
                    <button 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold transition-all"
                    >
                        Elegir Plan
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
