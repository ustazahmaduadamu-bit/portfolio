import React, { useState } from 'react';
import { 
  Brain, 
  Cpu, 
  Layers, 
  GitBranch, 
  Wand2, 
  TrendingUp, 
  Sparkles, 
  PieChart, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { PORTFOLIO_DATA, ExpertiseArea } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { expertiseAreas } = PORTFOLIO_DATA;
  const [selectedArea, setSelectedArea] = useState<ExpertiseArea>(expertiseAreas[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      case 'Wand2':
        return <Wand2 className="w-5 h-5 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-teal-400" />;
      default:
        return <Brain className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="experience" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Technical Expertise
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Eight foundational competencies where I have engineered production systems, established scalable architectures, and driven data-backed decisions.
          </p>
        </div>

        {/* 8-Card Interactive Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {expertiseAreas.map((area) => {
            const isSelected = selectedArea.id === area.id;
            return (
              <div
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`cursor-pointer glass-panel rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between group ${
                  isSelected
                    ? 'border-indigo-500 bg-[#0f172a]/90 shadow-lg shadow-indigo-950/40 -translate-y-1'
                    : 'border-white/5 hover:border-indigo-500/30 hover:bg-[#0c1428]/80'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-105 transition-transform">
                      {getIcon(area.icon)}
                    </div>
                    <span className="text-[11px] font-mono text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/20">
                      {area.impactMetric}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {area.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-slate-400 group-hover:text-slate-200 transition-colors">
                    {area.keyTechniques.length} Core Techniques
                  </span>
                  <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-indigo-400 rotate-45' : 'text-slate-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Area Deep-Dive Spotlight */}
        <div className="mt-10 glass-panel rounded-2xl p-6 sm:p-8 border border-indigo-500/30 bg-[#090f22]/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-white/5 gap-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-indigo-950 border border-indigo-500/30">
                {getIcon(selectedArea.icon)}
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400">Deep Dive Spotlight</span>
                <h3 className="text-xl font-bold text-white">{selectedArea.title} Architecture</h3>
              </div>
            </div>
            <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/50 text-emerald-400 border border-emerald-500/30 w-fit">
              Benchmark: {selectedArea.impactMetric}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedArea.summary} Engineered with rigorous cross-validation standards, high resilience against production distribution shifts, and transparent explainability hooks.
            </p>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2.5">
              <div className="text-xs font-semibold text-slate-300 mb-2">Mastered Methodologies & Techniques:</div>
              {selectedArea.keyTechniques.map((tech) => (
                <div key={tech} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
