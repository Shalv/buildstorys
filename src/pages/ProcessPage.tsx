import React, { useState } from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { SEVEN_STEP_PROCESS, ProcessStep } from '../data/websiteData';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileCheck,
  ChevronRight,
  Clock,
  Layers,
  Compass,
  Building
} from 'lucide-react';

interface ProcessPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);
  const activeStep = SEVEN_STEP_PROCESS[selectedStepIndex];

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-measuring-a-blueprint-in-an-architects-studio-41307-large.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90"
        badge="// METHODOLOGY & LIFECYCLE"
        title="The Build Storys Way"
        italicTitle="The 7-step blueprint from blank sheet to keys in hand."
        description="Architecture and turnkey construction are notorious for hidden variations and delays. We designed a rigid seven-step delivery framework that guarantees architectural integrity, locked cost certainty, and transparent weekly governance."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Execution Process' }
        ]}
        metrics={[
          { value: '07', label: 'Structured Phases' },
          { value: '0%', label: 'Unapproved Cost Escalation' },
          { value: '100%', label: 'Weekly Milestones Reported' },
          { value: '10 Yr', label: 'Post-Handover Warranty' }
        ]}
        primaryCta={{
          text: 'Begin Phase 01: Vision Workshop',
          action: onOpenConsultation
        }}
        secondaryCta={{
          text: 'Calculate Project Timeline',
          action: () => onNavigate('estimator')
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. Interactive Step Timeline Selector */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Sequential Delivery
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Select a Phase to Review Deliverables &amp; Activities
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Phase {selectedStepIndex + 1} of 7 &bull; {activeStep.stepCode}
            </span>
          </div>

          {/* Interactive Phase Track */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {SEVEN_STEP_PROCESS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? 'bg-[#14171B] text-white border-[#14171B] shadow-lg shadow-[#14171B]/20 scale-102'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-[#C5A880] hover:bg-stone-50'
                  }`}
                >
                  {/* Top corner tick */}
                  <div className={`text-[10px] font-mono ${isSelected ? 'text-[#C5A880]' : 'text-stone-300'}`}>+</div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-[#C5A880] text-[#14171B]' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {step.stepCode}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#C5A880] translate-x-0.5' : 'text-stone-400 group-hover:translate-x-0.5'}`} />
                  </div>

                  <div className="font-serif text-base font-bold leading-tight mt-2">{step.title}</div>
                  <div className={`text-[10px] font-mono mt-1 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                    {step.duration}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* 3. Deep Dive into the Active Selected Phase — Creative Blueprint Card */}
        <section className="bg-white rounded-2xl border border-stone-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 sm:p-12 relative overflow-hidden">
          {/* Blueprint watermark pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#C5A880 1px, transparent 1px), linear-gradient(90deg, #C5A880 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Phase Identity */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded bg-[#14171B] text-[#C5A880] font-mono text-xs font-bold uppercase tracking-widest">
                  {activeStep.stepCode}
                </span>
                <span className="text-xs font-mono text-stone-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#B89366]" />
                  <span>Duration: {activeStep.duration}</span>
                </span>
              </div>

              <div>
                <h4 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                  {activeStep.title}
                </h4>
                <p className="text-sm font-mono text-[#B89366] mt-2 font-medium">
                  {activeStep.tagline}
                </p>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed">
                {activeStep.summary}
              </p>

              {/* Primary Deliverable Badge */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#C5A880]/40 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#B89366] font-bold flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" />
                  <span>Certified Phase Deliverable</span>
                </div>
                <div className="font-serif text-lg font-bold text-stone-900">
                  {activeStep.deliverable}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#14171B] hover:bg-[#252930] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all"
                >
                  <span>Book Phase 01 Workshop</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>
            </div>

            {/* Right Column: Execution Activities */}
            <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-stone-100 lg:pl-10">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-stone-400">
                  Detailed Operational Protocols
                </span>
                <h5 className="font-serif text-xl font-bold text-stone-900">
                  Activities Executed During This Stage
                </h5>
              </div>

              <div className="space-y-3">
                {activeStep.activities.map((activity, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200/80 flex items-start gap-4 hover:border-[#C5A880] transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center text-xs font-mono font-bold text-[#B89366] shrink-0 mt-0.5 group-hover:border-[#C5A880]">
                      0{aIdx + 1}
                    </div>
                    <div className="text-xs sm:text-sm text-stone-700 font-medium leading-relaxed">
                      {activity}
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress track navigation */}
              <div className="pt-4 flex items-center justify-between border-t border-stone-100 text-xs font-mono">
                <button
                  disabled={selectedStepIndex === 0}
                  onClick={() => setSelectedStepIndex(selectedStepIndex - 1)}
                  className={`flex items-center gap-1 ${
                    selectedStepIndex === 0 ? 'text-stone-300 cursor-not-allowed' : 'text-stone-700 hover:text-[#B89366]'
                  }`}
                >
                  &larr; Previous Phase
                </button>

                <span className="text-stone-400">
                  {selectedStepIndex + 1} of 7
                </span>

                <button
                  disabled={selectedStepIndex === 6}
                  onClick={() => setSelectedStepIndex(selectedStepIndex + 1)}
                  className={`flex items-center gap-1 ${
                    selectedStepIndex === 6 ? 'text-stone-300 cursor-not-allowed' : 'text-stone-700 hover:text-[#B89366]'
                  }`}
                >
                  Next Phase &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Complete 7-Phase Grid Overview Cards */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <h4 className="font-serif text-2xl font-bold text-stone-900">
              Full 7-Step Lifecycle at a Glance
            </h4>
            <span className="text-xs font-mono text-stone-500">
              Zero-Friction Guarantee
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEVEN_STEP_PROCESS.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedStepIndex(idx)}
                className={`p-6 rounded-xl border transition-all cursor-pointer space-y-3 relative group ${
                  selectedStepIndex === idx
                    ? 'bg-[#FAF8F5] border-[#C5A880] ring-1 ring-[#C5A880]'
                    : 'bg-white border-stone-200 hover:border-stone-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#B89366]">
                    {step.stepCode}
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">{step.duration}</span>
                </div>
                <h5 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                  {step.title}
                </h5>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {step.summary}
                </p>
                <div className="text-[11px] font-mono text-stone-500 pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="truncate">{step.deliverable}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B89366] shrink-0 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
