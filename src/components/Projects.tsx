import React, { useState } from 'react';
import { Play, Code2, ExternalLink, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { InteractiveProjectModal } from './InteractiveProjectModal';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [modalTab, setModalTab] = useState<'demo' | 'code'>('demo');

  const categories = ['All', 'Machine Learning', 'Deep Learning', 'Big Data', 'Data Cleaning', 'Predictive Analytics'];

  const filteredProjects = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  const handleOpenDemo = (project: ProjectItem) => {
    setSelectedProject(project);
    setModalTab('demo');
  };

  const handleOpenCode = (project: ProjectItem) => {
    setSelectedProject(project);
    setModalTab('code');
  };

  return (
    <section id="projects" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Machine Learning & Big Data Projects
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Interactive demonstrations of real-world predictive models, computer vision systems, distributed data platforms, and automated cleaning pipelines.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/40 flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Visual Image container with fallback */}
                <div className="relative aspect-video overflow-hidden bg-slate-900 border-b border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080d1e] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#050811]/85 text-indigo-300 border border-indigo-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Key Metrics HUD preview */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4 text-slate-200 font-mono">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label} className="bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10">
                          <span className="text-slate-400 text-[10px] block">{m.label}</span>
                          <span className="text-indigo-300 font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 flex items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => handleOpenDemo(project)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-md shadow-indigo-600/30 transition-all duration-200"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleOpenCode(project)}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-white/10 rounded-xl transition-all duration-200"
                  aria-label={`Inspect code for ${project.title}`}
                >
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <InteractiveProjectModal
          project={selectedProject}
          initialTab={modalTab}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
