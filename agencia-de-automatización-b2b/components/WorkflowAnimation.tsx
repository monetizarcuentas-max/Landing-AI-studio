import React from 'react';

const WorkflowAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square mx-auto flex items-center justify-center perspective-1000">
      {/* Background glow */}
      <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full animate-glow"></div>
      
      {/* Main Container */}
      <div className="relative w-full h-full glass-card rounded-[2.5rem] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden bg-dark/80 backdrop-blur-2xl">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
        </div>

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#00D2FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#00D2FF" stopOpacity="0.2" />
            </linearGradient>
            <filter id="glow-line">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Left to Center Paths */}
          <path id="path1" d="M 92 142 Q 250 142 250 250" fill="none" stroke="rgba(0, 210, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
          <path id="path2" d="M 92 358 Q 250 358 250 250" fill="none" stroke="rgba(0, 210, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
          
          {/* Center to Right Paths */}
          <path id="path3" d="M 250 250 Q 250 142 408 142" fill="none" stroke="rgba(0, 210, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
          <path id="path4" d="M 250 250 Q 250 358 408 358" fill="none" stroke="rgba(0, 210, 255, 0.2)" strokeWidth="2" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />

          {/* Animated Data Packets (Glowing Circles moving along paths) */}
          <circle r="4" fill="#00D2FF" filter="url(#glow-line)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 92 142 Q 250 142 250 250" />
          </circle>
          <circle r="4" fill="#00D2FF" filter="url(#glow-line)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 92 358 Q 250 358 250 250" begin="1s" />
          </circle>
          <circle r="4" fill="#00D2FF" filter="url(#glow-line)">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M 250 250 Q 250 142 408 142" begin="1.5s" />
          </circle>
          <circle r="4" fill="#00D2FF" filter="url(#glow-line)">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M 250 250 Q 250 358 408 358" begin="0.5s" />
          </circle>
          
          {/* Extra packets for more activity */}
          <circle r="3" fill="#ffffff" filter="url(#glow-line)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 92 142 Q 250 142 250 250" begin="1.5s" />
          </circle>
          <circle r="3" fill="#ffffff" filter="url(#glow-line)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M 92 358 Q 250 358 250 250" begin="2.2s" />
          </circle>
        </svg>

        {/* Nodes Container */}
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
          
          {/* Node 1: Meta Ads (Top Left) */}
          <div className="absolute top-[110px] left-[60px] flex flex-col items-center gap-3 animate-float" style={{ animationDelay: '0s' }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-[1px] shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              <div className="w-full h-full bg-dark/90 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-400 text-3xl">ads_click</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider bg-dark/80 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">Meta Ads</span>
          </div>

          {/* Node 2: WhatsApp (Bottom Left) */}
          <div className="absolute top-[326px] left-[60px] flex flex-col items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 p-[1px] shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              <div className="w-full h-full bg-dark/90 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-green-400 text-3xl">forum</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider bg-dark/80 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">WhatsApp</span>
          </div>

          {/* Node 3: AI Brain (Center) */}
          <div className="absolute top-[210px] left-[210px] flex flex-col items-center gap-3 animate-pulse-slow">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent to-primary p-[2px] shadow-[0_0_40px_rgba(0,210,255,0.5)]">
              <div className="w-full h-full bg-dark/80 backdrop-blur-xl rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-accent/10 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                <span className="material-symbols-outlined text-accent text-4xl relative z-10">psychology</span>
              </div>
            </div>
            <span className="text-xs font-bold text-accent uppercase tracking-widest bg-dark/90 px-3 py-1.5 rounded-lg border border-accent/30 shadow-[0_0_15px_rgba(0,210,255,0.2)]">Cerebro IA</span>
          </div>

          {/* Node 4: CRM (Top Right) */}
          <div className="absolute top-[110px] right-[60px] flex flex-col items-center gap-3 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-[1px] shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              <div className="w-full h-full bg-dark/90 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-purple-400 text-3xl">leaderboard</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider bg-dark/80 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">CRM / Ventas</span>
          </div>

          {/* Node 5: Calendar (Bottom Right) */}
          <div className="absolute top-[326px] right-[60px] flex flex-col items-center gap-3 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 p-[1px] shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              <div className="w-full h-full bg-dark/90 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-orange-400 text-3xl">event_available</span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider bg-dark/80 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">Agenda</span>
          </div>
          
          {/* Floating Action Badges */}
          <div className="absolute top-[180px] left-[130px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1 flex items-center gap-1 animate-float" style={{ animationDelay: '2s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-[8px] font-bold text-white uppercase">Lead Captado</span>
          </div>
          
          <div className="absolute top-[280px] right-[120px] bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-2 py-1 flex items-center gap-1 animate-float" style={{ animationDelay: '1.2s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
            <span className="text-[8px] font-bold text-white uppercase">Cita Agendada</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkflowAnimation;
