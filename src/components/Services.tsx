import React from 'react';
import { 
  BarChart3, 
  BrainCircuit, 
  Network, 
  DatabaseZap, 
  Sparkles, 
  Cpu, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { services } = PORTFOLIO_DATA;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-blue-400" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6 text-indigo-400" />;
      case 'Network':
        return <Network className="w-6 h-6 text-purple-400" />;
      case 'DatabaseZap':
        return <DatabaseZap className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-pink-400" />;
      default:
        return <BrainCircuit className="w-6 h-6 text-indigo-400" />;
    }
  };

  const handleRequest = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            What I Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Data & Machine Learning Services
          </h2>
          <p className="mt-3 text-base text-slate-300">
            End-to-end consulting and technical implementation—from architecting automated data cleaning pipelines to deploying production-ready deep learning models.
          </p>
        </div>

        {/* Services Cards Grid (2x3 or 3x2) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group glass-panel rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-950/30"
            >
              <div>
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/10 group-hover:scale-105 group-hover:border-indigo-500/40 transition-all">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </div>
                  {service.deliverables.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & CTA */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/60 text-slate-400 border border-white/5"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleRequest(service)}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-indigo-600/80 border border-white/10 hover:border-indigo-500/40 rounded-xl transition-all"
                >
                  <span>Request {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
