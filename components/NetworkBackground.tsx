import React, { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  opacity: number;
}

interface Link {
  source: number;
  target: number;
  opacity: number;
}

const NetworkBackground: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    // Generate static nodes for the background
    const generatedNodes: Node[] = [];
    const numNodes = 40;
    
    // Create a pseudo-random but consistent distribution
    for (let i = 0; i < numNodes; i++) {
      generatedNodes.push({
        id: i,
        x: (Math.sin(i * 1234.5) * 0.5 + 0.5) * 100, // 0 to 100%
        y: (Math.cos(i * 5432.1) * 0.5 + 0.5) * 100, // 0 to 100%
        radius: (Math.sin(i * 987) * 0.5 + 0.5) * 3 + 1.5, // 1.5 to 4.5
        opacity: (Math.cos(i * 321) * 0.5 + 0.5) * 0.6 + 0.2, // 0.2 to 0.8
      });
    }

    // Connect nodes that are close to each other
    const generatedLinks: Link[] = [];
    for (let i = 0; i < numNodes; i++) {
      for (let j = i + 1; j < numNodes; j++) {
        const dx = generatedNodes[i].x - generatedNodes[j].x;
        const dy = generatedNodes[i].y - generatedNodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Connect if distance is less than 20% of screen
        if (distance < 20) {
          // Only keep some links to avoid clutter
          if (Math.sin(i * j) > 0.2) {
            generatedLinks.push({
              source: i,
              target: j,
              opacity: (20 - distance) / 20 * 0.5, // Closer = more opaque
            });
          }
        }
      }
    }

    setNodes(generatedNodes);
    setLinks(generatedLinks);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#000B18]">
      {/* Deep tech gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,210,255,0.15)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,27,58,0.8)_0%,transparent_50%)]"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-30" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, rgba(0, 210, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 210, 255, 0.05) 1px, transparent 1px)',
             backgroundSize: '80px 80px' 
           }}>
      </div>

      {/* Network SVG */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Draw Links */}
        {links.map((link, i) => {
          const source = nodes[link.source];
          const target = nodes[link.target];
          return (
            <line
              key={`link-${i}`}
              x1={`${source.x}%`}
              y1={`${source.y}%`}
              x2={`${target.x}%`}
              y2={`${target.y}%`}
              stroke="#00D2FF"
              strokeWidth="1"
              strokeOpacity={link.opacity * 0.7}
              className="animate-pulse-slow"
              style={{ animationDelay: `${(i % 5) * 0.5}s` }}
            />
          );
        })}

        {/* Draw Nodes */}
        {nodes.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.radius}
            fill="#00D2FF"
            fillOpacity={node.opacity}
            filter="url(#glow)"
            className="animate-float"
            style={{ animationDelay: `${(node.id % 5) * 0.5}s` }}
          />
        ))}
        
        {/* Extra floating large blurry nodes for depth */}
        <circle cx="20%" cy="30%" r="150" fill="#00D2FF" fillOpacity="0.03" filter="blur(40px)" className="animate-pulse-slow" />
        <circle cx="80%" cy="70%" r="200" fill="#00D2FF" fillOpacity="0.02" filter="blur(50px)" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </svg>
      
      {/* Overlay gradient to fade out bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#000B18]"></div>
    </div>
  );
};

export default NetworkBackground;
