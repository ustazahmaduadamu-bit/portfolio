import React, { useState, useMemo } from 'react';
import { Search, Code2, Cpu, Database, Sparkles, PieChart, Layers, SlidersHorizontal } from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'data-science': <Code2 className="w-4 h-4 text-blue-400" />,
    'machine-learning': <Cpu className="w-4 h-4 text-indigo-400" />,
    'deep-learning': <Layers className="w-4 h-4 text-purple-400" />,
    'big-data': <Database className="w-4 h-4 text-cyan-400" />,
    'data-cleaning': <Sparkles className="w-4 h-4 text-emerald-400" />,
    'visualization': <PieChart className="w-4 h-4 text-pink-400" />
  };

  const filteredCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => activeCategoryId === 'all' || cat.id === activeCategoryId)
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const filteredSkills = cat.skills.filter(
          (s) => s.name.toLowerCase().includes(q) || s.highlight.toLowerCase().includes(q)
        );
        return {
          ...cat,
          skills: filteredSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [skillCategories, activeCategoryId, searchQuery]);

  return (
    <section id="skills" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Background ambient gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
              Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Specialized Skills & Frameworks
            </h2>
            <p className="mt-3 text-base text-slate-300">
              A comprehensive technical toolkit spanning statistical computation, enterprise machine learning, deep neural architectures, and big data orchestration.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. PyTorch, Spark)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-900/80 border border-white/10 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveCategoryId('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap shrink-0 transition-all ${
              activeCategoryId === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategoryId(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap shrink-0 transition-all ${
                activeCategoryId === category.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {categoryIcons[category.id]}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="mt-10 space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 glass-panel rounded-2xl border border-white/5">
              <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategoryId('all');
                }}
                className="mt-3 text-xs text-indigo-400 hover:text-indigo-300 underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => (
              <div
                key={cat.id}
                className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 transition-all hover:border-indigo-500/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/5 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-500/20">
                      {categoryIcons[cat.id]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">{cat.name}</h3>
                      <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {cat.skills.length} Technical Proficiencies
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-xl bg-[#090e1e]/60 border border-white/5 hover:border-indigo-500/30 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-indigo-400 tabular-nums">
                            {skill.level}%
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                          {skill.highlight}
                        </p>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden mt-3">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
