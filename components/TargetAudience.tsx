import React from 'react';

const TargetAudience: React.FC = () => {
  return (
    <section className="py-24 bg-surface-dark border-y border-white/5">
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Para quién es este servicio
            </h2>
            <p className="text-white/50 text-xl leading-relaxed mb-8">
              Nuestra solución está diseñada para empresas de servicios que dependen de la agendación de citas y la atención rápida al cliente.
            </p>
            <ul className="grid grid-cols-2 gap-4">
              {[
                'Clínicas y Consultorios',
                'Inmobiliarias',
                'Abogados y Estudios',
                'Consultores B2B',
                'Academias y Formación',
                'Servicios para el Hogar'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-accent text-sm">check_circle</span>
                  <span className="text-white/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full">
            <div className="glass-card p-8 rounded-4xl border-white/10 relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.1)]">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-3xl rounded-full animate-pulse-slow"></div>
               <div className="relative z-10 flex flex-col gap-4">
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">calendar_month</span>
                    </div>
                    <div>
                        <div className="text-white font-bold">Nuevo turno agendado</div>
                        <div className="text-white/50 text-xs">Hace 2 minutos</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-accent">forum</span>
                    </div>
                    <div>
                        <div className="text-white font-bold">Consulta respondida por IA</div>
                        <div className="text-white/50 text-xs">Hace 5 minutos</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors cursor-default">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-emerald-400">check_circle</span>
                    </div>
                    <div>
                        <div className="text-white font-bold">Recordatorio enviado</div>
                        <div className="text-white/50 text-xs">Hace 15 minutos</div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
