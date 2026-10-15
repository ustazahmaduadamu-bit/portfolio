import React, { useState } from 'react';
import { 
  Database, 
  Sparkles, 
  Search, 
  Cpu, 
  BrainCircuit, 
  Activity, 
  Rocket, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA, WorkflowStep } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  const { workflow } = PORTFOLIO_DATA;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = workflow[activeStepIndex];

  const stepIcons = [
    <Database className="w-4 h-4" />,
    <Sparkles className="w-4 h-4" />,
    <Search className="w-4 h-4" />,
    <Layers className="w-4 h-4" />,
    <BrainCircuit className="w-4 h-4" />,
    <Activity className="w-4 h-4" />,
    <Rocket className="w-4 h-4" />
  ];

  return (
    <section id="workflow" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Methodology & Lifecycle
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Data Science Workflow
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A battle-tested 7-stage engineering pipeline transforming raw data into reliable, production-ready intelligent systems.
          </p>
        </div>

        {/* Timeline Navigation Strip */}
        <div className="mt-12 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center min-w-[760px] relative">
            {/* Connecting bar */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${(activeStepIndex / (workflow.length - 1)) * 100}%` }}
            />

            {workflow.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;

              return (
                <button
                  key={step.number}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex-1 flex flex-col items-center relative z-10 group focus:outline-none"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/30 scale-110 shadow-lg shadow-indigo-600/40'
                        : isPast
                        ? 'bg-indigo-950 border border-indigo-500/50 text-indigo-300'
                        : 'bg-slate-900 border border-white/10 text-slate-400 group-hover:border-white/30'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`mt-2 text-xs font-medium tracking-tight whitespace-nowrap transition-colors ${
                      isActive ? 'text-indigo-400 font-bold' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="mt-8 glass-panel rounded-2xl p-6 sm:p-8 lg:p-10 border border-indigo-500/20 shadow-2xl shadow-indigo-950/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left detail column */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-500/30">
                  Stage {currentStep.number} of 07
                </span>
                <span className="text-xs font-mono text-slate-400">Phase: {currentStep.title}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {currentStep.number} — {currentStep.title}: {currentStep.tagline}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentStep.description}
              </p>

              {/* Deliverables */}
              <div className="pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Phase Deliverables:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentStep.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Tools & Navigation column */}
            <div className="lg:col-span-4 p-6 rounded-xl bg-[#070c1a] border border-white/5 space-y-5">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Tools & Frameworks
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentStep.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-indigo-300 border border-indigo-500/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(prev - 1, 0))}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-900 border border-white/5 text-slate-300 hover:text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === workflow.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(prev + 1, workflow.length - 1))}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 disabled:pointer-events-none transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
