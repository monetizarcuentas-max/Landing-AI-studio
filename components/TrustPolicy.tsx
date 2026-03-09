import React from 'react';

const TrustPolicy: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-amber-400 mb-4 inline-block">
            Política de transparencia
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            Propiedad total para el cliente
          </h2>
        </div>

        <div className="relative group">
          {/* Glow effect behind the card */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-amber-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
          
          <div className="relative glass-card p-10 md:p-14 rounded-[2.5rem] border border-white/10 bg-[#0A1128]/80 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center animate-[fadeInUp_1s_ease-out_forwards]">
            
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-amber-500/20 flex items-center justify-center mb-10 border border-white/5 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              <span className="material-symbols-outlined text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-amber-400">
                lock
              </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8 w-full mb-10">
              {[
                {
                  icon: 'manage_accounts',
                  text: 'Las cuentas siempre quedan a nombre del cliente'
                },
                {
                  icon: 'settings_power',
                  text: 'El sistema sigue funcionando incluso si cancelas el mantenimiento'
                },
                {
                  icon: 'contract_delete',
                  text: 'Sin contratos de permanencia'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-5 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover/item:scale-110 group-hover/item:bg-white/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(251,191,36,0.15)] group-hover/item:border-amber-400/30">
                    <span className="material-symbols-outlined text-white/70 group-hover/item:text-amber-400 transition-colors text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  <p className="text-white/80 font-medium text-sm leading-relaxed max-w-[200px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

            <p className="text-lg md:text-xl text-white/90 font-medium italic">
              "Trabajamos para que te quedes por el valor que entregamos, no por obligación."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPolicy;
