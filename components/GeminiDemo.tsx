
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';

const GeminiDemo: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: '¡Hola! Soy el Cerebro Digital de la Agencia. ¿Cómo puedo ayudarte a escalar tu facturación hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userText);
    setMessages(prev => [...prev, { role: 'ai', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="py-24 px-6 bg-surface-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Prueba el <span className="text-primary">Cerebro Digital</span></h2>
          <p className="text-white/50">Interactúa con nuestro agente de IA en tiempo real para ver de lo que es capaz.</p>
        </div>

        <div className="glass-card rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[500px]">
          {/* Chat Header */}
          <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-white/80">DigitalBrain v3.0 - Online</span>
            </div>
            <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                <div className="w-2 h-2 bg-white/20 rounded-full"></div>
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 hide-scrollbar"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-white/10 text-white/90 border border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/10 flex gap-3">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta sobre nuestros servicios..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-white/20"
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all disabled:opacity-50"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GeminiDemo;
