import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Code2, 
  Copy, 
  Check, 
  Sliders, 
  Activity, 
  Cpu, 
  Database, 
  CheckCircle2, 
  AlertTriangle,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface InteractiveProjectModalProps {
  project: ProjectItem | null;
  initialTab?: 'demo' | 'code';
  onClose: () => void;
}

export const InteractiveProjectModal: React.FC<InteractiveProjectModalProps> = ({
  project,
  initialTab = 'demo',
  onClose
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'demo' | 'code'>(initialTab);
  const [copied, setCopied] = useState(false);

  // 1. Churn State
  const [tenure, setTenure] = useState(14);
  const [monthlyCharge, setMonthlyCharge] = useState(85);
  const [tickets, setTickets] = useState(3);
  const [contract, setContract] = useState<'month' | 'one_year' | 'two_year'>('month');

  // Compute Churn Risk
  const calculateChurnRisk = () => {
    let risk = 30;
    if (contract === 'month') risk += 32;
    if (contract === 'two_year') risk -= 22;
    if (tenure < 12) risk += 18;
    if (tenure > 36) risk -= 20;
    if (tickets >= 4) risk += 25;
    if (tickets === 0) risk -= 10;
    if (monthlyCharge > 90) risk += 12;
    return Math.min(Math.max(risk, 4), 98);
  };
  const churnRisk = calculateChurnRisk();

  // 2. Classifier State
  const [selectedImageSample, setSelectedImageSample] = useState<'urban' | 'medical' | 'satellite'>('urban');
  const [selectedLayer, setSelectedLayer] = useState<'conv1' | 'conv3' | 'conv5'>('conv3');

  // 3. Big Data Spark State
  const [ingestionRate, setIngestionRate] = useState(150); // k records/sec
  const [isSparkRunning, setIsSparkRunning] = useState(true);

  // 4. Data Cleaning State
  const [cleaningView, setCleaningView] = useState<'dirty' | 'clean'>('clean');

  // 5. Sales Forecast State
  const [adSpend, setAdSpend] = useState(180); // $k
  const [seasonality, setSeasonality] = useState<'Q1' | 'Q2' | 'Q3' | 'Q4'>('Q4');

  const getSalesForecast = () => {
    const base = 28.5;
    const adBoost = adSpend * 0.08;
    const seasonMult = seasonality === 'Q4' ? 1.45 : seasonality === 'Q2' ? 1.15 : 0.95;
    const total = (base + adBoost) * seasonMult;
    return {
      revenue: total.toFixed(1),
      ciLow: (total * 0.92).toFixed(1),
      ciHigh: (total * 1.08).toFixed(1)
    };
  };
  const salesResult = getSalesForecast();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-[#080d1e] border border-indigo-500/30 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#060a17]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 border border-indigo-500/30">
              {project.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight truncate max-w-md">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab switchers */}
            <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-white/5 mr-2">
              <button
                type="button"
                onClick={() => setActiveTab('demo')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'demo'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>Interactive Demo</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeTab === 'code'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Python Code</span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {activeTab === 'demo' ? (
            <div className="space-y-6">
              {/* Project Abstract banner */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {project.fullDescription}
                </p>
                <div className="flex sm:flex-col gap-3 shrink-0">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-left">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider">{m.label}</div>
                      <div className="text-sm font-mono font-bold text-indigo-300">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DEMO 1: CUSTOMER CHURN PREDICTOR */}
              {project.demoType === 'churn' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Controls Panel */}
                    <div className="p-5 rounded-xl bg-[#0a1024] border border-white/5 space-y-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-indigo-400" />
                        <span>Simulate Customer Profile</span>
                      </h4>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Tenure:</span>
                          <span className="font-mono text-indigo-400 font-semibold">{tenure} Months</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="60"
                          value={tenure}
                          onChange={(e) => setTenure(Number(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Monthly Charges:</span>
                          <span className="font-mono text-indigo-400 font-semibold">${monthlyCharge}/mo</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="150"
                          value={monthlyCharge}
                          onChange={(e) => setMonthlyCharge(Number(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Support Tickets (Last 60d):</span>
                          <span className="font-mono text-indigo-400 font-semibold">{tickets} Tickets</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="8"
                          value={tickets}
                          onChange={(e) => setTickets(Number(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>

                      <div>
                        <span className="text-xs text-slate-300 block mb-1.5">Contract Agreement:</span>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'month', label: 'Month-to-Month' },
                            { id: 'one_year', label: '1-Year' },
                            { id: 'two_year', label: '2-Year' }
                          ].map((opt) => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setContract(opt.id as any)}
                              className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all ${
                                contract === opt.id
                                  ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200'
                                  : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Gauge & Predictions */}
                    <div className="p-5 rounded-xl bg-[#0a1024] border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          ML Inferred Output
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-slate-200">Attrition Likelihood:</span>
                          <span
                            className={`text-2xl font-mono font-extrabold ${
                              churnRisk > 60
                                ? 'text-rose-400'
                                : churnRisk > 30
                                ? 'text-amber-400'
                                : 'text-emerald-400'
                            }`}
                          >
                            {churnRisk}%
                          </span>
                        </div>

                        {/* Visual Progress Meter */}
                        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mt-3">
                          <div
                            className={`h-full transition-all duration-300 rounded-full ${
                              churnRisk > 60
                                ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                                : churnRisk > 30
                                ? 'bg-gradient-to-r from-blue-500 to-amber-500'
                                : 'bg-gradient-to-r from-teal-500 to-emerald-500'
                            }`}
                            style={{ width: `${churnRisk}%` }}
                          />
                        </div>

                        <div className="mt-4 p-3 rounded-lg bg-slate-950/60 border border-white/5 text-xs text-slate-300">
                          <div className="font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
                            {churnRisk > 60 ? (
                              <AlertTriangle className="w-4 h-4 text-rose-400" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )}
                            Recommended Action
                          </div>
                          {churnRisk > 60
                            ? 'High flight risk. Immediate account manager outreach with 15% discount contract extension recommended.'
                            : churnRisk > 30
                            ? 'Moderate risk profile. Target with loyalty benefits and proactive onboarding check-in.'
                            : 'Healthy retention cohort. Eligible for service tier upsell and annual contract lock.'}
                        </div>
                      </div>

                      {/* SHAP Feature Contribution indicators */}
                      <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
                        <div className="text-[11px] font-mono text-slate-400">SHAP Variable Attribution:</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between text-slate-300">
                            <span>Contract Type ({contract})</span>
                            <span className={contract === 'month' ? 'text-rose-400' : 'text-emerald-400'}>
                              {contract === 'month' ? '+0.32 SHAP' : '-0.24 SHAP'}
                            </span>
                          </div>
                          <div className="flex justify-between text-slate-300">
                            <span>Tenure ({tenure}m)</span>
                            <span className={tenure < 12 ? 'text-rose-400' : 'text-emerald-400'}>
                              {tenure < 12 ? '+0.18 SHAP' : '-0.19 SHAP'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 2: DEEP LEARNING CLASSIFIER */}
              {project.demoType === 'classifier' && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-900/60 rounded-xl border border-white/5">
                    <span className="text-xs text-slate-300 font-medium">Select Test Image Sample:</span>
                    <div className="flex gap-2">
                      {[
                        { id: 'urban', label: 'Urban Traffic Scan' },
                        { id: 'medical', label: 'Thoracic Scan' },
                        { id: 'satellite', label: 'Aerial Satellite' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedImageSample(item.id as any)}
                          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                            selectedImageSample === item.id
                              ? 'bg-indigo-600 text-white'
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-slate-950 flex flex-col justify-end p-4">
                      <img
                        src={project.image}
                        alt="CNN Feature maps visualization"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                      <div className="relative z-10 bg-black/75 backdrop-blur-md p-3 rounded-lg border border-white/10 text-xs">
                        <div className="text-white font-semibold flex items-center justify-between">
                          <span>Layer: Conv2D_Block_4</span>
                          <span className="text-indigo-400 font-mono">512 Channels</span>
                        </div>
                        <div className="text-slate-400 text-[11px] mt-0.5">
                          Activation Map: Mish + Spatial Batch Normalization
                        </div>
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-[#0a1024] border border-white/5 space-y-4">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Softmax Class Prediction
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-xs text-slate-200 mb-1">
                            <span>Primary: Autonomous Vehicle Obstacle</span>
                            <span className="font-mono text-emerald-400 font-semibold">97.8%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[97.8%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs text-slate-200 mb-1">
                            <span>Secondary: Pedestrian Crossing</span>
                            <span className="font-mono text-slate-400">1.8%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 w-[1.8%]" />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-xs text-slate-200 mb-1">
                            <span>Tertiary: Static Signage</span>
                            <span className="font-mono text-slate-400">0.4%</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 w-[0.4%]" />
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                        <span>Tensor FLOPs: 4.1 GFLOPs</span>
                        <span className="text-emerald-400 font-mono">Latency: 21.8ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 3: BIG DATA CLUSTER */}
              {project.demoType === 'bigdata' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-[#0a1024] border border-white/5 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-white">Spark Streaming Ingestion Simulation</h4>
                        <p className="text-xs text-slate-400">Adjust broker throughput to evaluate cluster partition shuffles</p>
                      </div>
                      <div className="text-xs font-mono px-3 py-1 bg-indigo-950 text-indigo-300 rounded border border-indigo-500/30">
                        Status: ACTIVE CLUSTER (4 EXECUTORS)
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs text-slate-300 mb-1">
                        <span>Ingestion Rate:</span>
                        <span className="font-mono text-indigo-400 font-semibold">{ingestionRate}K msgs/sec</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="500"
                        step="10"
                        value={ingestionRate}
                        onChange={(e) => setIngestionRate(Number(e.target.value))}
                        className="w-full accent-indigo-500 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                      {['Worker 01', 'Worker 02', 'Worker 03', 'Worker 04'].map((worker, i) => {
                        const load = Math.min(Math.round((ingestionRate / 5) + (i * 4) + 12), 99);
                        return (
                          <div key={worker} className="p-3 rounded-lg bg-slate-900 border border-white/5">
                            <div className="text-xs font-medium text-slate-300">{worker}</div>
                            <div className="text-lg font-mono font-bold text-white mt-1">{load}% CPU</div>
                            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1.5">
                              <div
                                className={`h-full ${load > 85 ? 'bg-rose-500' : 'bg-indigo-500'}`}
                                style={{ width: `${load}%` }}
                              />
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono mt-1">
                              Shuffle: {(load * 0.4).toFixed(1)} GB
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* DEMO 4: DATA CLEANING PIPELINE */}
              {project.demoType === 'datacleaning' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-3 bg-slate-900/60 rounded-xl border border-white/5">
                    <span className="text-xs text-slate-300 font-medium">Pipeline Transformation Stage:</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setCleaningView('dirty')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                          cleaningView === 'dirty'
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        Raw Dirty Ingestion (Before)
                      </button>
                      <button
                        type="button"
                        onClick={() => setCleaningView('clean')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                          cleaningView === 'clean'
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        Cleaned & Validated (After)
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#060a17]">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-900/80 text-slate-400 border-b border-white/10">
                        <tr>
                          <th className="p-3">Record ID</th>
                          <th className="p-3">User Age</th>
                          <th className="p-3">Annual Income</th>
                          <th className="p-3">Signup Date</th>
                          <th className="p-3">Validation Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-slate-200">
                        {cleaningView === 'dirty' ? (
                          <>
                            <tr className="bg-rose-950/20">
                              <td className="p-3">#8841</td>
                              <td className="p-3 text-rose-400">NaN (Missing)</td>
                              <td className="p-3">$74,000</td>
                              <td className="p-3 text-rose-400">2023-99-99 (Invalid)</td>
                              <td className="p-3 text-rose-400">Schema Error</td>
                            </tr>
                            <tr className="bg-rose-950/20">
                              <td className="p-3">#8842</td>
                              <td className="p-3 text-rose-400">-14 (Outlier)</td>
                              <td className="p-3 text-rose-400">"UNKNOWN"</td>
                              <td className="p-3">12/04/2023</td>
                              <td className="p-3 text-rose-400">Type Mismatch</td>
                            </tr>
                            <tr className="bg-rose-950/20">
                              <td className="p-3">#8841</td>
                              <td className="p-3">34</td>
                              <td className="p-3">$74,000</td>
                              <td className="p-3">2023-04-12</td>
                              <td className="p-3 text-rose-400">Duplicate Primary Key</td>
                            </tr>
                          </>
                        ) : (
                          <>
                            <tr className="bg-emerald-950/20">
                              <td className="p-3">#8841</td>
                              <td className="p-3 text-emerald-400">34.2 (KNN Imputed)</td>
                              <td className="p-3">$74,000.00</td>
                              <td className="p-3 text-emerald-400">2023-04-12 (Normalized)</td>
                              <td className="p-3 text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Passed Great Expectations
                              </td>
                            </tr>
                            <tr className="bg-emerald-950/20">
                              <td className="p-3">#8842</td>
                              <td className="p-3 text-emerald-400">29.0 (IQR Fence Clamped)</td>
                              <td className="p-3 text-emerald-400">$62,400.00 (Median Filled)</td>
                              <td className="p-3">2023-12-04</td>
                              <td className="p-3 text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Schema Verified
                              </td>
                            </tr>
                            <tr className="bg-emerald-950/20">
                              <td className="p-3">#8843</td>
                              <td className="p-3">41.0</td>
                              <td className="p-3">$89,200.00</td>
                              <td className="p-3">2023-11-20</td>
                              <td className="p-3 text-emerald-400 flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Unique Deduped
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* DEMO 5: SALES PREDICTION */}
              {project.demoType === 'sales' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-xl bg-[#0a1024] border border-white/5 space-y-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Sliders className="w-4 h-4 text-indigo-400" />
                        <span>Predictive Parameter Tweaker</span>
                      </h4>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Target Seasonal Quarter:</span>
                          <span className="font-mono text-indigo-400 font-semibold">{seasonality}</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {(['Q1', 'Q2', 'Q3', 'Q4'] as const).map((q) => (
                            <button
                              key={q}
                              type="button"
                              onClick={() => setSeasonality(q)}
                              className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                                seasonality === q
                                  ? 'bg-indigo-600 border-indigo-400 text-white'
                                  : 'bg-slate-900 border-white/5 text-slate-400 hover:text-white'
                              }`}
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-slate-300 mb-1">
                          <span>Marketing Campaign Budget:</span>
                          <span className="font-mono text-indigo-400 font-semibold">${adSpend}K</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="400"
                          step="10"
                          value={adSpend}
                          onChange={(e) => setAdSpend(Number(e.target.value))}
                          className="w-full accent-indigo-500 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="p-5 rounded-xl bg-[#0a1024] border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                          Projected Revenue Forecast
                        </div>
                        <div className="text-3xl font-mono font-extrabold text-white">
                          ${salesResult.revenue}M
                        </div>
                        <div className="text-xs font-mono text-indigo-300 mt-1">
                          95% Confidence Band: [${salesResult.ciLow}M — ${salesResult.ciHigh}M]
                        </div>

                        <div className="mt-4 p-3 rounded-lg bg-slate-950/60 border border-white/5 text-xs text-slate-300">
                          LightGBM + SARIMAX indicates high seasonal elasticity during {seasonality}. Every $10k in ad spend yields approx +$800k in gross bookings.
                        </div>
                      </div>

                      <div className="mt-4 text-[11px] text-slate-400 font-mono">
                        Model MAPE: 3.2% · Autoregressive Order: (2, 1, 2)
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Python Code Tab */
            <div className="relative">
              <div className="flex items-center justify-between pb-3 text-xs text-slate-400 font-mono">
                <span>Production Python Pipeline</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-md transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-[#050811] border border-white/10 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[500px]">
                <code>{project.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/10 bg-[#060a17] text-xs">
          <div className="flex flex-wrap gap-2 text-slate-400">
            <span className="font-semibold text-slate-300">Stack:</span>
            {project.technologies.map((t) => (
              <span key={t} className="text-indigo-300 font-mono">
                {t}
              </span>
            ))}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
