import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            ¿Por qué estás perdiendo clientes todos los días?
          </h2>
          <p className="text-white/50 text-xl leading-relaxed">
            Las empresas invierten en marketing, pero fallan en el seguimiento y la atención inmediata.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: 'schedule',
              title: 'Tardan en responder',
              desc: 'Tus clientes potenciales se enfrían si no reciben respuesta en los primeros 5 minutos.'
            },
            {
              icon: 'person_off',
              title: 'Pierden consultas',
              desc: 'Mensajes de WhatsApp que quedan sin leer o se pierden entre cientos de chats.'
            },
            {
              icon: 'trending_down',
              title: 'Sin seguimiento',
              desc: 'No hay un sistema que retome el contacto con clientes que preguntaron pero no compraron.'
            },
            {
              icon: 'event_busy',
              title: 'Caos en la agenda',
              desc: 'Turnos superpuestos, olvidos y cancelaciones de último momento sin reprogramación.'
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border-white/10 flex flex-col items-center text-center hover:border-accent/40 transition-colors">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-accent text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
