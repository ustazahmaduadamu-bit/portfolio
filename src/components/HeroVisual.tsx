import React, { useEffect, useRef, useState } from 'react';
import { Activity, Cpu, Sparkles, User, BrainCircuit, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const HeroVisual: React.FC = () => {
  const [viewMode, setViewMode] = useState<'portrait' | 'neural'>('portrait');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);

  // Neural network animation canvas (runs when neural view is active)
  useEffect(() => {
    if (viewMode !== 'neural') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const layerConfigs = [4, 6, 6, 3];
    const layers: { x: number; y: number; r: number; val: number; pulse: number }[][] = [];

    layerConfigs.forEach((nodeCount, lIdx) => {
      const layerNodes = [];
      const x = (width / (layerConfigs.length + 1)) * (lIdx + 1);
      const spacing = height / (nodeCount + 1);

      for (let nIdx = 0; nIdx < nodeCount; nIdx++) {
        layerNodes.push({
          x,
          y: spacing * (nIdx + 1),
          r: lIdx === 0 || lIdx === layerConfigs.length - 1 ? 7 : 6,
          val: Math.random(),
          pulse: Math.random() * Math.PI * 2
        });
      }
      layers.push(layerNodes);
    });

    interface Signal {
      fromL: number;
      fromN: number;
      toL: number;
      toN: number;
      progress: number;
      speed: number;
      color: string;
    }
    const signals: Signal[] = [];

    const spawnSignal = () => {
      const fromL = Math.floor(Math.random() * (layers.length - 1));
      const toL = fromL + 1;
      const fromN = Math.floor(Math.random() * layers[fromL].length);
      const toN = Math.floor(Math.random() * layers[toL].length);
      const colors = ['#60A5FA', '#818CF8', '#C084FC', '#38BDF8'];
      signals.push({
        fromL,
        fromN,
        toL,
        toN,
        progress: 0,
        speed: (Math.random() * 0.015 + 0.01) * (isHovered ? 1.8 : 1),
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (signals.length < 18 && Math.random() < 0.2) {
        spawnSignal();
      }

      for (let l = 0; l < layers.length - 1; l++) {
        const currLayer = layers[l];
        const nextLayer = layers[l + 1];

        for (let i = 0; i < currLayer.length; i++) {
          for (let j = 0; j < nextLayer.length; j++) {
            const n1 = currLayer[i];
            const n2 = nextLayer[j];

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = 'rgba(99, 102, 241, 0.12)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;

        const startNode = layers[sig.fromL]?.[sig.fromN];
        const endNode = layers[sig.toL]?.[sig.toN];

        if (!startNode || !endNode || sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const currX = startNode.x + (endNode.x - startNode.x) * sig.progress;
        const currY = startNode.y + (endNode.y - startNode.y) * sig.progress;

        const grad = ctx.createRadialGradient(currX, currY, 0, currX, currY, 6);
        grad.addColorStop(0, sig.color);
        grad.addColorStop(1, 'rgba(99, 102, 241, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(currX, currY, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(currX, currY, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      layers.forEach((layer, lIdx) => {
        layer.forEach((node) => {
          node.pulse += 0.03;
          const pulseGlow = Math.sin(node.pulse) * 3 + 4;

          const aura = ctx.createRadialGradient(node.x, node.y, 1, node.x, node.y, node.r + pulseGlow + 4);
          if (lIdx === 0) {
            aura.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
            aura.addColorStop(1, 'rgba(56, 189, 248, 0)');
          } else if (lIdx === layers.length - 1) {
            aura.addColorStop(0, 'rgba(168, 85, 247, 0.5)');
            aura.addColorStop(1, 'rgba(168, 85, 247, 0)');
          } else {
            aura.addColorStop(0, 'rgba(129, 140, 248, 0.35)');
            aura.addColorStop(1, 'rgba(129, 140, 248, 0)');
          }

          ctx.fillStyle = aura;
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r + pulseGlow + 3, 0, Math.PI * 2);
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = lIdx === 0 ? '#38BDF8' : lIdx === layers.length - 1 ? '#C084FC' : '#818CF8';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [viewMode, isHovered]);

  const photoSrc = imgError 
    ? PORTFOLIO_DATA.personal.photoFallback 
    : PORTFOLIO_DATA.personal.photo;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-[540px] sm:h-[580px] lg:h-[620px] rounded-3xl glass-panel p-2.5 sm:p-3 overflow-hidden flex flex-col justify-between border border-indigo-500/30 shadow-2xl shadow-indigo-950/50 group"
    >
      {/* Background ambient lighting aura */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />

      {/* Top Floating Bar with view switcher */}
      <div className="relative z-20 flex items-center justify-between p-3">
        {/* Availability indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050811]/85 border border-emerald-500/30 text-emerald-300 text-xs font-medium backdrop-blur-md shadow-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Lead Data Scientist</span>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1 bg-[#050811]/85 p-1 rounded-xl border border-white/10 backdrop-blur-md shadow-md">
          <button
            type="button"
            onClick={() => setViewMode('portrait')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'portrait'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Portrait</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('neural')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              viewMode === 'neural'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>AI Neural</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      {viewMode === 'portrait' ? (
        /* Ahmad Mohammed's Portrait View */
        <div className="relative flex-1 w-full rounded-2xl overflow-hidden my-1 flex flex-col justify-end bg-gradient-to-b from-slate-900 via-slate-950 to-[#04060e] border border-white/10">
          {/* Portrait Image */}
          <img
            src={photoSrc}
            alt="Ahmad Mohammed - Data Scientist & Machine Learning Expert"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Vignette Gradients for optical readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#04060e] via-[#04060e]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

          {/* Floating High-Tech Top Overlay Badge */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="p-2.5 rounded-xl bg-[#080d1e]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-300 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              <span>Production AI Practitioner</span>
            </div>
          </div>

          {/* Overlaid Bottom Identity & Verification Card */}
          <div className="relative z-10 p-5 m-3 rounded-2xl bg-[#070c1a]/90 border border-white/10 backdrop-blur-xl shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Ahmad Mohammed
                </h3>
                <p className="text-xs text-indigo-400 font-medium">
                  Data Scientist & Machine Learning Expert
                </p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white text-xs shadow-md">
                AM
              </div>
            </div>

            {/* Quick Proof Metrics Row */}
            <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900/60 p-2 rounded-lg border border-white/5">
                <span className="text-[10px] text-slate-400 block">Experience</span>
                <span className="font-mono font-bold text-slate-200">50+ Deployed Projects</span>
              </div>
              <div className="bg-slate-900/60 p-2 rounded-lg border border-white/5">
                <span className="text-[10px] text-slate-400 block">Architecture</span>
                <span className="font-mono font-bold text-emerald-400">100% Data-Driven</span>
              </div>
            </div>

            {/* Core Tech Stack inline tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Python', 'PyTorch', 'Apache Spark', 'TensorFlow', 'XGBoost'].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-indigo-300 border border-indigo-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Neural Network Interactive Canvas View */
        <div className="relative flex-1 w-full my-1 rounded-2xl overflow-hidden bg-[#060a17] border border-white/10 flex flex-col justify-between p-4">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

          {/* Floating HUD elements */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="p-2.5 rounded-lg bg-[#080d1e]/85 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Activity className="w-3.5 h-3.5 text-indigo-400" />
                <span>Loss Convergence</span>
              </div>
              <div className="text-xs font-mono font-semibold text-slate-200">
                0.024 <span className="text-[10px] text-emerald-400 font-normal">(-89.4%)</span>
              </div>
            </div>

            <div className="p-2.5 rounded-lg bg-[#080d1e]/85 border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <Cpu className="w-3.5 h-3.5 text-purple-400" />
                <span>Inference Latency</span>
              </div>
              <div className="text-xs font-mono font-semibold text-slate-200">
                18.4ms <span className="text-[10px] text-indigo-300 font-normal">CUDA:0</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 p-3 rounded-xl bg-[#080d1e]/90 border border-white/10 backdrop-blur-md text-xs text-slate-300">
            <div className="font-semibold text-white mb-0.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Multi-Layer Synaptic Deep Learning Simulation</span>
            </div>
            <p className="text-[11px] text-slate-400">
              Interactive forward-pass tensor weights with stochastic gradient descent optimization.
            </p>
          </div>
        </div>
      )}

      {/* Bottom Subtext */}
      <div className="relative z-20 px-3 py-1 flex items-center justify-between text-[11px] text-slate-400">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          <span>Verified ML Specialist Profile</span>
        </span>
        <span className="font-mono text-slate-500">Ahmad Mohammed · 2026</span>
      </div>
    </div>
  );
};
