import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Sparkles,
  ExternalLink,
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const { personal } = PORTFOLIO_DATA;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject || '');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync initialSubject if prop updates
  React.useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
    setSubmitted(false);
    setError(null);
  };

  const openWhatsAppWithForm = () => {
    const text = encodeURIComponent(
      `Hello Ahmad,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
    );
    window.open(`https://wa.me/2348037774708?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Background ambient gradient */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a Data Challenge? Let's Solve It Together.
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Whether you have a massive raw dataset requiring cleaning, need custom machine learning or deep learning architectures, or seek consultation on AI initiatives, let's connect.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contacts & Social Row */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/5 space-y-6">
              <h3 className="text-lg font-bold text-white">Direct Communication Channels</h3>

              {/* WhatsApp Card */}
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-[#090f22] border border-white/5 hover:border-emerald-500/40 hover:bg-[#0c162f] transition-all flex items-start gap-4 block"
              >
                <div className="p-3 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Direct WhatsApp</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors font-mono">
                    {personal.phoneDisplay}
                  </div>
                  <div className="text-xs text-emerald-400/80 mt-0.5 flex items-center gap-1">
                    <span>Click to chat instantly</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${personal.email}`}
                className="group p-4 rounded-xl bg-[#090f22] border border-white/5 hover:border-indigo-500/40 hover:bg-[#0c162f] transition-all flex items-start gap-4 block"
              >
                <div className="p-3 rounded-xl bg-indigo-950/60 text-indigo-400 border border-indigo-500/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Electronic Mail</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-400 transition-colors font-mono break-all">
                    {personal.email}
                  </div>
                  <div className="text-xs text-indigo-400/80 mt-0.5 flex items-center gap-1">
                    <span>Click to open email client</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </div>
              </a>

              {/* Response Time and Availability Info */}
              <div className="pt-2 border-t border-white/5 space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  <span>Typical response time: Under 4 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Available for freelance, consulting, and full-time contracts</span>
                </div>
              </div>
            </div>

            {/* Social Media Row with Circular Icon Buttons */}
            <div className="glass-panel rounded-2xl p-6 border border-white/5">
              <h4 className="text-sm font-semibold text-white mb-3">Connect on Professional & Social Platforms</h4>
              <p className="text-xs text-slate-400 mb-4">
                Follow my latest research, open-source repositories, and machine learning updates.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile of Ahmad Mohammed"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500 hover:bg-indigo-950/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <Linkedin className="w-5 h-5 text-indigo-400" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repositories of Ahmad Mohammed"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500 hover:bg-indigo-950/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <Github className="w-5 h-5 text-slate-200" />
                </a>

                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X / Twitter profile of Ahmad Mohammed"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500 hover:bg-indigo-950/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <Twitter className="w-5 h-5 text-cyan-400" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook profile of Ahmad Mohammed"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500 hover:bg-indigo-950/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <Facebook className="w-5 h-5 text-blue-400" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile of Ahmad Mohammed"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500 hover:bg-indigo-950/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <Instagram className="w-5 h-5 text-pink-400" />
                </a>

                {/* WhatsApp Circular */}
                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct WhatsApp chat with Ahmad Mohammed"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 hover:border-emerald-500 hover:bg-emerald-950/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </a>

                {/* Email Circular */}
                <a
                  href={`mailto:${personal.email}`}
                  aria-label="Send direct email to Ahmad Mohammed"
                  className="w-11 h-11 rounded-full bg-slate-900 border border-white/10 hover:border-indigo-500 hover:bg-indigo-950/50 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
                >
                  <Mail className="w-5 h-5 text-indigo-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl shadow-black/40">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="font-semibold text-white">{name}</span>. Ahmad will review your data inquiry and respond within 4 business hours.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={openWhatsAppWithForm}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs sm:text-sm font-semibold text-white shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Also Send Via WhatsApp</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs sm:text-sm font-medium text-slate-200 transition-all"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/5">
                    <h3 className="text-lg font-bold text-white">Send a Project Inquiry</h3>
                    <span className="text-xs text-slate-400">* Required fields</span>
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-500/40 text-xs text-rose-300">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. Alex Rivera"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900/80 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alex.rivera@enterprise.com"
                        className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900/80 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Machine Learning Architecture Consultation"
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900/80 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Project Details & Data Scope *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your dataset size, business objective, timeline, or machine learning challenges..."
                      className="w-full px-4 py-2.5 text-xs sm:text-sm bg-slate-900/80 border border-white/10 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-slate-400">
                      Your confidential data information is treated with strict NDA security.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
