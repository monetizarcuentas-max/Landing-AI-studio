
import React, { useState, useEffect } from 'react';

const COUNTRIES = [
  { name: 'México', code: '+52', placeholder: '55 1234 5678' },
  { name: 'España', code: '+34', placeholder: '612 345 678' },
  { name: 'Colombia', code: '+57', placeholder: '300 123 4567' },
  { name: 'Argentina', code: '+54', placeholder: '9 11 1234 5678', hint: 'Sin 0 ni 15. Formato: 9 + cod. area + numero' },
  { name: 'Chile', code: '+56', placeholder: '9 1234 5678' },
];

const ContactForm: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneCode, setPhoneCode] = useState(COUNTRIES[0].code);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = COUNTRIES.find(c => c.name === e.target.value) || COUNTRIES[0];
    setSelectedCountry(country);
    setPhoneCode(country.code);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    // Scroll to top of the section to see the message
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-28 px-6 bg-dark">
        <div className="max-w-xl mx-auto">
          <div className="glass-card p-12 rounded-4xl border-white/10 shadow-3xl text-center flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-5xl fill-1">check_circle</span>
            </div>
            <h2 className="text-4xl font-extrabold text-white">¡Gracias por tu interés!</h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Recibimos tu solicitud correctamente. <br/>
              <span className="text-white font-semibold">En unos momentos nos pondremos en contacto con vos.</span>
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-primary font-bold text-sm hover:underline"
            >
              Enviar otra consulta
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-28 px-6 bg-dark">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">¿Hablamos de tus objetivos?</h2>
          <p className="text-white/50">Agenda una auditoría gratuita de 15 minutos para ver cómo la IA puede escalar tu atención.</p>
        </div>

        <div className="glass-card p-10 rounded-4xl border-white/10 shadow-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2.5 px-1">Nombre Responsable</label>
                    <input 
                        required
                        className="w-full px-5 py-4 rounded-2xl border-white/10 bg-white/5 text-white placeholder-white/20 focus:ring-primary focus:border-primary transition-all outline-none" 
                        placeholder="Ej. Juan Pérez" 
                        type="text"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2.5 px-1">País</label>
                    <div className="relative">
                        <select 
                            className="w-full px-5 py-4 rounded-2xl border-white/10 bg-white/5 text-white focus:ring-primary focus:border-primary appearance-none outline-none cursor-pointer"
                            onChange={handleCountryChange}
                            value={selectedCountry.name}
                        >
                            {COUNTRIES.map(c => (
                                <option key={c.name} className="bg-dark" value={c.name}>{c.name}</option>
                            ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">expand_more</span>
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2.5 px-1">Whatsapp Corporativo</label>
                <div className="flex gap-3">
                    <input 
                        readOnly
                        className="w-24 px-5 py-4 rounded-2xl border-white/10 bg-white/10 text-white/60 font-bold outline-none cursor-default" 
                        value={phoneCode}
                        type="text"
                    />
                    <input 
                        required
                        className="flex-1 px-5 py-4 rounded-2xl border-white/10 bg-white/5 text-white placeholder-white/20 focus:ring-primary focus:border-primary outline-none" 
                        placeholder={selectedCountry.placeholder}
                        type="tel"
                    />
                </div>
                {selectedCountry.hint && (
                    <p className="mt-2 px-1 text-[10px] text-accent/70 font-medium italic">
                        {selectedCountry.hint}
                    </p>
                )}
            </div>

            <div>
                <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2.5 px-1">El servicio que necesito es:</label>
                <div className="relative">
                    <select className="w-full px-5 py-4 rounded-2xl border-white/10 bg-white/5 text-white focus:ring-primary focus:border-primary appearance-none outline-none cursor-pointer">
                        <option className="bg-dark">Meta Ads + Asistencia IA</option>
                        <option className="bg-dark">Automatización de Atención al Cliente</option>
                        <option className="bg-dark">Consultoría Estratégica (Formulario)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">expand_more</span>
                </div>
            </div>

            <button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] glow-blue shadow-xl shadow-primary/30"
            >
                Solicitar Auditoría Gratuita
                <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <p className="text-center text-[11px] text-white/30">Tu solicitud de consultoría será respondida a la brevedad.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
