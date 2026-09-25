import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface CostEstimatorProps {
  onApplyEstimateToConsultation: (details: {
    service: string;
    area: string;
    budget: string;
  }) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({
  onApplyEstimateToConsultation
}) => {
  const [serviceType, setServiceType] = useState('Turnkey Interior Solutions');
  const [areaSqFt, setAreaSqFt] = useState(2500);
  const [finishGrade, setFinishGrade] = useState<'Contemporary' | 'Premium Luxury' | 'Ultra Luxury Bespoke'>('Premium Luxury');

  // Rate estimates per sq. ft.
  const rateMatrix: Record<string, { Contemporary: number; 'Premium Luxury': number; 'Ultra Luxury Bespoke': number; timelineWeeks: number }> = {
    'Turnkey Interior Solutions': { Contemporary: 2200, 'Premium Luxury': 3500, 'Ultra Luxury Bespoke': 5200, timelineWeeks: 14 },
    'Residential Architecture': { Contemporary: 2800, 'Premium Luxury': 4200, 'Ultra Luxury Bespoke': 6500, timelineWeeks: 36 },
    'Villa Architecture': { Contemporary: 3200, 'Premium Luxury': 4800, 'Ultra Luxury Bespoke': 7200, timelineWeeks: 48 },
    'Commercial & Office Interiors': { Contemporary: 1800, 'Premium Luxury': 2900, 'Ultra Luxury Bespoke': 4400, timelineWeeks: 12 },
    'Retail Storefront & Architecture': { Contemporary: 2400, 'Premium Luxury': 3800, 'Ultra Luxury Bespoke': 5800, timelineWeeks: 10 }
  };

  const currentRates = rateMatrix[serviceType] || rateMatrix['Turnkey Interior Solutions'];
  const ratePerSqFt = currentRates[finishGrade];
  const totalCost = areaSqFt * ratePerSqFt;

  // Format INR in Lakhs / Crores
  const formatCostINR = (amount: number) => {
    if (amount >= 10000000) {
      return `₹${(amount / 10000000).toFixed(2)} Crores`;
    }
    return `₹${(amount / 100000).toFixed(1)} Lakhs`;
  };

  const getBudgetCategory = (amount: number) => {
    if (amount < 5000000) return '₹25 Lakhs – ₹50 Lakhs';
    if (amount < 10000000) return '₹50 Lakhs – ₹1 Crore';
    if (amount < 25000000) return '₹1 Crore – ₹2.5 Crores';
    if (amount < 50000000) return '₹2.5 Crores – ₹5 Crores';
    return '₹5 Crores+';
  };

  return (
    <section className="py-16 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
            <Calculator className="w-3.5 h-3.5" />
            Preliminary Planning Calculator
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Estimate Your Project Timeline & Budget
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Configure your project scope below for an instant ballpark calculation based on verified Bengaluru benchmark execution costs.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="rounded-2xl bg-white border border-stone-200 shadow-lg p-6 sm:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-stone-700 uppercase mb-2">
                  1. Select Discipline & Project Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.keys(rateMatrix).map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setServiceType(svc)}
                      className={`px-3 py-2 text-left rounded-md text-xs font-medium border transition-all ${
                        serviceType === svc
                          ? 'bg-[#1A1E24] text-white border-[#1A1E24]'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label className="font-bold text-stone-700 uppercase">
                    2. Built-Up / Floor Area:
                  </label>
                  <span className="font-bold text-base text-[#B89366]">
                    {areaSqFt.toLocaleString()} sq. ft.
                  </span>
                </div>
                <input 
                  type="range"
                  min="800"
                  max="20000"
                  step="100"
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(Number(e.target.value))}
                  className="w-full accent-[#B89366] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-stone-400">
                  <span>800 sq. ft.</span>
                  <span>10,000 sq. ft.</span>
                  <span>20,000+ sq. ft.</span>
                </div>
              </div>

              {/* Specification Grade */}
              <div>
                <label className="block text-xs font-mono font-bold text-stone-700 uppercase mb-2">
                  3. Specification & Material Grade
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['Contemporary', 'Premium Luxury', 'Ultra Luxury Bespoke'] as const).map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setFinishGrade(grade)}
                      className={`p-3 rounded-md text-left border text-xs transition-all ${
                        finishGrade === grade
                          ? 'bg-[#1A1E24] text-white border-[#1A1E24]'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                      }`}
                    >
                      <div className="font-semibold">{grade}</div>
                      <div className="text-[10px] opacity-75 mt-0.5">
                        {grade === 'Contemporary' && 'Teak veneer, quartz & branded hardware'}
                        {grade === 'Premium Luxury' && 'Italian marble, walnut millwork & automation'}
                        {grade === 'Ultra Luxury Bespoke' && 'Botticino slabs, acoustic ceiling & artisanal brass'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Calculation Output Box (Light Luxury) */}
            <div className="lg:col-span-5 bg-[#FAF8F5] text-stone-900 p-7 sm:p-8 rounded-2xl border border-[#E7E5E0] space-y-6 shadow-sm">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#9A7049] uppercase tracking-wider font-bold">
                  Estimated Investment Range
                </span>
                <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917]">
                  {formatCostINR(totalCost)}
                </div>
                <div className="text-[11px] text-stone-500 font-mono">
                  ~₹{ratePerSqFt.toLocaleString()} / sq. ft. all-inclusive estimate
                </div>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#E7E5E0] text-xs">
                <div className="flex items-center justify-between text-stone-600">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#9A7049]" />
                    Estimated Timeline:
                  </span>
                  <span className="font-semibold text-stone-900 font-mono">
                    ~{currentRates.timelineWeeks} - {currentRates.timelineWeeks + 4} Weeks
                  </span>
                </div>

                <div className="flex items-center justify-between text-stone-600">
                  <span className="font-mono">Accountability Model:</span>
                  <span className="text-emerald-700 font-bold font-mono">100% Turnkey Delivery</span>
                </div>

                <div className="flex items-center justify-between text-stone-600">
                  <span className="font-mono">Bill of Quantities:</span>
                  <span className="text-stone-800 font-semibold font-mono">Locked Price Guarantee</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onApplyEstimateToConsultation({
                    service: serviceType,
                    area: areaSqFt.toString(),
                    budget: getBudgetCategory(totalCost)
                  })}
                  className="w-full py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#9A7049] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span>Transfer Estimate to Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-stone-500 font-mono text-center">
                *Subject to site topography, structural drawings, and final material curation.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
