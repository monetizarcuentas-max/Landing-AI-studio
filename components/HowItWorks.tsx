import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="px-6 max-w-screen-xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="text-white/50 text-xl leading-relaxed">
            Un proceso simple y transparente para transformar tu captación de clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Analizamos tu negocio',
              desc: 'Entendemos tu proceso de ventas actual y detectamos cuellos de botella.'
            },
            {
              step: '02',
              title: 'Diseñamos el sistema',
              desc: 'Creamos la estrategia de captación y el flujo de conversación ideal.'
            },
            {
              step: '03',
              title: 'Automatizamos',
              desc: 'Implementamos el bot de WhatsApp, la IA y conectamos tu agenda.'
            },
            {
              step: '04',
              title: 'Recibes consultas',
              desc: 'Tu empresa empieza a recibir turnos y consultas calificadas automáticamente.'
            }
          ].map((item, idx) => (
            <div key={idx} className="relative">
              <div className="text-6xl font-black text-white/5 mb-4">{item.step}</div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
