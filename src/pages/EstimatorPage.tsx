import React from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { CostEstimator } from '../components/CostEstimator';
import { Calculator, Sparkles, Clock, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';

interface EstimatorPageProps {
  onApplyEstimate: (details: { service: string; area: string; budget: string }) => void;
  onNavigate: (page: string) => void;
}

export const EstimatorPage: React.FC<EstimatorPageProps> = ({ onApplyEstimate, onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/1439/1439-360.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=2400&q=90"
        badge="// PRELIMINARY PLANNING & BUDGETING"
        title="Cost & Timeline Estimator"
        italicTitle="Transparent square-foot benchmarks for Bangalore builds."
        description="Plan your investment with clarity. Calculate real-time architectural construction and turnkey interior budgets based on verified current Bangalore market rates, finish grades, and structural scope."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Cost Estimator' }
        ]}
        metrics={[
          { value: '₹2,200', label: 'Starting Interior / Sq. Ft.' },
          { value: '₹2,800', label: 'Starting Architecture / Sq. Ft.' },
          { value: '100%', label: 'Itemized Transparent BOQ' },
          { value: '0%', label: 'Unforeseen Cost Surprises' }
        ]}
        primaryCta={{
          text: 'Schedule In-Studio BOQ Review',
          action: () => onApplyEstimate({ service: 'Full Turnkey Estimate', area: '2500 sq ft', budget: '₹75 Lakhs' })
        }}
        secondaryCta={{
          text: 'Review 7-Step Process',
          action: () => onNavigate('process')
        }}
      />

      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* 2. Interactive Calculator Component */}
        <CostEstimator onApplyEstimateToConsultation={onApplyEstimate} />

        {/* 3. Transparency & Locked BOQ Guarantees — Creative Assurance Cards */}
        <section className="bg-white rounded-3xl border border-[#E5E1D8] p-8 sm:p-12 space-y-8 shadow-xs">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
              Financial Integrity &amp; Transparency
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141312]">
              Why Our Estimates Match Final Handover Costs
            </h3>
            <p className="text-stone-600 text-sm sm:text-base">
              The industry average cost overrun in Bangalore is 28%. At Build Storys, our variance rate across the last 50 turnkey handovers is under 2%.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-3 relative group">
              <div className="w-10 h-10 rounded-xl bg-white text-[#8C6842] border border-[#E5E1D8] flex items-center justify-center shadow-2xs">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#141312]">
                Itemized Line-by-Line BOQ
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                Before collecting advance payments, we supply a multi-page Bill of Quantities specifying exact brands (e.g. Saint Gobain glass, Hafele hardware, Ultratech cement).
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-3 relative group">
              <div className="w-10 h-10 rounded-xl bg-white text-[#8C6842] border border-[#E5E1D8] flex items-center justify-center shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#141312]">
                Weekly Milestone Releases
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                Payments are mapped to tangible completed physical milestones (foundation, casting, brickwork, plastering, millwork) verified by site engineers.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-3 relative group">
              <div className="w-10 h-10 rounded-xl bg-white text-[#8C6842] border border-[#E5E1D8] flex items-center justify-center shadow-2xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-xl font-normal text-[#141312]">
                Defect Liability &amp; Warranty
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                10-year structural warranty on core concrete &amp; waterproofing, plus 12-month complimentary post-handover maintenance on all interior hardware.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
