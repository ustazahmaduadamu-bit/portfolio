import React from 'react';
import { 
  ArrowUp, 
  MessageCircle, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter, 
  Facebook, 
  Instagram,
  Heart
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#03060d] text-slate-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Mission column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-indigo-500/40 shadow-md shadow-indigo-600/30 shrink-0 bg-slate-900">
                <img
                  src={personal.photo}
                  alt={personal.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = personal.photoFallback;
                  }}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Ahmad Mohammed
              </span>
            </div>

            <p className="text-sm font-semibold text-indigo-400">
              Data Scientist & Machine Learning Expert
            </p>

            <p className="text-xs sm:text-sm text-slate-300 italic max-w-sm">
              "{personal.headline}"
            </p>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Specializing in Machine Learning, Deep Learning, Big Data, and Data Cleaning — transforming complex datasets into actionable insights and intelligent systems.
            </p>
          </div>

          {/* Quick Links column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Communication column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 block text-[11px]">WhatsApp:</span>
                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-emerald-400 font-mono transition-colors flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personal.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <span className="text-slate-500 block text-[11px]">Email:</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-slate-200 hover:text-indigo-400 font-mono transition-colors flex items-center gap-1.5 break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personal.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="text-slate-500 block text-[11px] mb-2">Connect:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500 text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub repositories"
                    className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500 text-slate-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X / Twitter"
                    className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-indigo-500 text-slate-300 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={personal.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="p-2 rounded-lg bg-slate-900 border border-white/5 hover:border-emerald-500 text-slate-300 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ahmad Mohammed. All rights reserved. Data Scientist & Machine Learning Expert.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
