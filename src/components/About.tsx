import React from 'react';
import { 
  Database, 
  Sparkles, 
  Cpu, 
  Layers, 
  LineChart, 
  ShieldCheck, 
  FileText, 
  CheckCircle,
  BrainCircuit,
  Binary
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;

  const expertiseIcons = [
    <LineChart className="w-5 h-5 text-blue-400" />,
    <Sparkles className="w-5 h-5 text-indigo-400" />,
    <BrainCircuit className="w-5 h-5 text-purple-400" />,
    <Cpu className="w-5 h-5 text-cyan-400" />,
    <Layers className="w-5 h-5 text-emerald-400" />,
    <ShieldCheck className="w-5 h-5 text-pink-400" />
  ];

  const handleDownloadCV = () => {
    // Generate an executive plain-text summary CV data blob
    const cvText = `AHMAD MOHAMMED
Data Scientist & Machine Learning Expert
Email: ${personal.email} | WhatsApp: ${personal.phoneDisplay}

PROFESSIONAL SUMMARY
Data Scientist specializing in Machine Learning, Deep Learning, Big Data, and Data Cleaning.
Proven record across 50+ projects transforming raw and complex datasets into actionable insights and intelligent systems.

CORE COMPETENCIES
- Machine Learning: XGBoost, LightGBM, Random Forests, Regression, Classification, Clustering
- Deep Learning: PyTorch, TensorFlow, CNNs, RNNs, Transformers, Computer Vision
- Big Data: Apache Spark, Hadoop, Distributed Processing, Kafka, Delta Lake
- Data Cleaning: Data Preprocessing, Imputation, Outlier Detection, Validation, Great Expectations
- Data Visualization: Plotly, Seaborn, Matplotlib, Power BI, Tableau

SELECTED PROJECTS
1. Customer Churn Prediction (AUC: 0.94, Accuracy: 91.2%)
2. Deep Learning Image Classifier (ResNet-50, 96.4% Top-1 Accuracy, 22ms latency)
3. Big Data Analytics Platform (Apache Spark, 2.5 TB/s throughput, 14.2M daily events)
4. Data Cleaning Pipeline (Automated KNN imputation, 87% error reduction)
5. Sales Prediction System (SARIMAX & LightGBM, 96.7% accuracy)`;

    const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ahmad_Mohammed_Data_Scientist_Summary.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl">
          <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering High-Impact Systems From Raw Complexity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            A passionate Data Scientist dedicated to bridging mathematical rigor and enterprise reliability.
          </p>
        </div>

        {/* 2-Column Content Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative Bio & Core Expertise Grid */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p className="text-pretty">
              {about.bioParagraph1}
            </p>
            <p className="text-pretty">
              {about.bioParagraph2}
            </p>

            {/* Core Competencies Matrix */}
            <div className="pt-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>Core Engineering Pillars</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.keyExpertisePoints.map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl glass-panel border border-white/5 hover:border-indigo-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                        {expertiseIcons[idx]}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-100 group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Card & Verified Stats */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-indigo-500/20 shadow-xl shadow-black/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-lg shadow-indigo-600/30 shrink-0 bg-slate-900">
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
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{personal.name}</h3>
                  <p className="text-sm text-indigo-400 font-medium">{personal.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">Machine Learning & Big Data Specialist</p>
                </div>
              </div>

              {/* Verified Metrics Checklist */}
              <div className="py-6 space-y-3.5 border-b border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Delivered Projects
                  </span>
                  <span className="font-mono font-bold text-white">50+ Projects</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-400" />
                    Stack Ecosystem
                  </span>
                  <span className="font-mono font-bold text-white">10+ Technologies</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    Methodology
                  </span>
                  <span className="font-mono font-bold text-white">100% Data Driven</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Production Status
                  </span>
                  <span className="font-mono font-semibold text-emerald-400">Ready for Deployment</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleDownloadCV}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-xs sm:text-sm font-semibold text-slate-200 transition-all"
                >
                  <FileText className="w-4 h-4 text-indigo-400" />
                  <span>Download Summary CV</span>
                </button>
                <a
                  href="#contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs sm:text-sm font-semibold text-white shadow-md shadow-indigo-600/30 transition-all"
                >
                  <span>Inquire Availability</span>
                </a>
              </div>
            </div>

            {/* Quote / Design Principle callout */}
            <div className="p-5 rounded-2xl glass-panel border border-white/5">
              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "Without reliable data preprocessing and systematic validation, even the most sophisticated deep learning architecture is merely hallucinating noise. Clean data is the true catalyst of AI."
              </p>
              <div className="mt-3 text-xs font-semibold text-indigo-400">
                — Ahmad Mohammed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
