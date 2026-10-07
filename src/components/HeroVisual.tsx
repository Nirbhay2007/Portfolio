import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Server, Lock, Database, UserCheck, Activity, Cpu } from 'lucide-react';

interface NodeItem {
  id: string;
  name: string;
  subtext: string;
  badge: string;
  icon: typeof UserCheck;
  status: 'ACTIVE' | 'VERIFIED' | 'SECURED';
  x: number; // percentage
  y: number; // percentage
}

const NODES: NodeItem[] = [
  {
    id: 'client',
    name: 'CLIENT / USER',
    subtext: 'Encrypted Session',
    badge: 'TLS 1.3',
    icon: UserCheck,
    status: 'ACTIVE',
    x: 20,
    y: 25,
  },
  {
    id: 'gateway',
    name: 'API GATEWAY',
    subtext: 'FastAPI / Route Guards',
    badge: '10 req / 15m',
    icon: Server,
    status: 'ACTIVE',
    x: 75,
    y: 25,
  },
  {
    id: 'auth',
    name: 'AUTH & SECURITY',
    subtext: 'JWT Claims & HMAC-SHA256',
    badge: 'bcrypt • Zero Trust',
    icon: Lock,
    status: 'VERIFIED',
    x: 75,
    y: 75,
  },
  {
    id: 'database',
    name: 'DATABASE VAULT',
    subtext: 'PostgreSQL & SQLAlchemy',
    badge: 'AES-256 Storage',
    icon: Database,
    status: 'SECURED',
    x: 20,
    y: 75,
  },
];

export const HeroVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x: x * 15, y: y * 15 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Canvas drawing for interactive connection lines and data particle packets
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const resize = () => {
      if (!canvas.parentElement) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.parentElement.clientWidth * dpr;
      canvas.height = canvas.parentElement.clientHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Sequence connecting the loop: Client -> Gateway -> Auth -> Database -> Client
    const connections = [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 0 },
    ];

    const render = () => {
      t += 0.008;
      const width = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const height = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

      ctx.clearRect(0, 0, width, height);

      // Node coordinate resolver
      const getCoords = (node: NodeItem) => ({
        x: (node.x / 100) * width,
        y: (node.y / 100) * height,
      });

      // Draw faint technical grid in background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connection circuits
      connections.forEach((conn, index) => {
        const fromNode = NODES[conn.from];
        const toNode = NODES[conn.to];
        const p1 = getCoords(fromNode);
        const p2 = getCoords(toNode);

        // Circuit line
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(0, 229, 255, 0.16)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 6]);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.setLineDash([]);

        // Animated data packet particles
        const packetCount = 2;
        for (let p = 0; p < packetCount; p++) {
          const progress = (t * 1.5 + (p / packetCount) + index * 0.25) % 1;
          const px = p1.x + (p2.x - p1.x) * progress;
          const py = p1.y + (p2.y - p1.y) * progress;

          // Particle glow
          const grad = ctx.createRadialGradient(px, py, 1, px, py, 10);
          grad.addColorStop(0, 'rgba(0, 229, 255, 0.9)');
          grad.addColorStop(0.4, 'rgba(0, 229, 255, 0.3)');
          grad.addColorStop(1, 'rgba(0, 229, 255, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, 10, 0, Math.PI * 2);
          ctx.fill();

          // Particle core
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Central security core indicator
      const centerX = width * 0.475;
      const centerY = height * 0.5;

      ctx.beginPath();
      ctx.arc(centerX, centerY, 36, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.18)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX, centerY, 48, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 8]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] select-none"
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
        transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.3, 1)',
      }}
    >
      {/* Background ambient radial aura */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent pointer-events-none rounded-3xl blur-2xl" />

      {/* Canvas for connection lines and data particle flow */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Central Architectural Hub Badge */}
      <div className="absolute top-1/2 left-[47.5%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
        <div className="px-3 py-1.5 rounded-full bg-[#0b0f19]/90 border border-cyan-500/30 backdrop-blur-md flex items-center gap-2 shadow-lg shadow-cyan-950/40">
          <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="font-mono text-[10px] text-cyan-300 font-semibold tracking-wider uppercase">
            SECURE FLOW // PIPELINE
          </span>
        </div>
      </div>

      {/* Interactive System Nodes */}
      {NODES.map((node) => {
        const Icon = node.icon;
        const isHovered = activeNode === node.id;

        return (
          <div
            key={node.id}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            className="absolute z-20 transition-all duration-300"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className={`group cursor-pointer rounded-xl p-3 sm:p-3.5 border transition-all duration-300 backdrop-blur-md ${
                isHovered
                  ? 'bg-[#121827] border-cyan-400 shadow-xl shadow-cyan-500/20 scale-105'
                  : 'bg-[#0d121c]/90 border-white/[0.09] hover:border-cyan-500/40'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isHovered
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'bg-white/[0.05] text-slate-300 group-hover:text-cyan-400 group-hover:bg-cyan-500/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold tracking-tight text-white">
                      {node.name}
                    </span>
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 rounded border ${
                        node.status === 'VERIFIED'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : node.status === 'SECURED'
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                          : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                      }`}
                    >
                      {node.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono tracking-tight">
                    {node.subtext}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Micro-telemetry watermark */}
      <div className="absolute bottom-2 right-4 pointer-events-none font-mono text-[9px] text-slate-600 tracking-widest flex items-center gap-1.5">
        <Cpu className="w-3 h-3 text-slate-600" />
        <span>CONCEPTUAL ARCHITECTURE DIAGRAM // ZERO TRUST</span>
      </div>
    </div>
  );
};

export default HeroVisual;
