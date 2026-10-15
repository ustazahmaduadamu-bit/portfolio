import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, Database, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Simple count up effect hook
const useCounter = (end: number, duration: number = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Number((ease * end).toFixed(end % 1 === 0 ? 0 : 1)));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

const StatItem: React.FC<{ label: string; value: number; suffix: string }> = ({ label, value, suffix }) => {
  const count = useCounter(value);
  return (
    <div className="flex flex-col items-center sm:items-start p-4 rounded-xl glass-panel border border-white/5 transition-all hover:border-indigo-500/30">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-mono tabular-nums">
        {count}
        <span className="text-indigo-400">{suffix}</span>
      </div>
      <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">{label}</div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const { headline, subheadline, availability, stats } = PORTFOLIO_DATA.personal;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient gradient glow spheres */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-24 right-1/4 w-[28rem] h-[28rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle geometric grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-indigo-950/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{availability}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Turning Data Into{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                Intelligent Solutions.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty font-normal">
              {subheadline}
            </p>

            {/* Core Specialties inline tags */}
            <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Specialties:</span>
              <span>Machine Learning</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Deep Learning</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Big Data Analytics</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Predictive Modeling</span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-slate-600 rounded-xl transition-all duration-200"
              >
                <span>Let's Connect</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Data/AI Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroVisual />
          </div>
        </div>

        {/* Full-width Stats Strip below the hero split */}
        <div className="mt-14 lg:mt-20 pt-8 border-t border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <StatItem key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
