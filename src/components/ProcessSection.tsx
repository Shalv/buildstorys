import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileCheck,
  ChevronRight
} from 'lucide-react';
import { SEVEN_STEP_PROCESS } from '../data/websiteData';

interface ProcessSectionProps {
  onOpenConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultation }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = SEVEN_STEP_PROCESS[activeStepIndex];

  return (
    <section id="process" className="py-20 lg:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header matching buildstorys.com */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              Execution Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              The Build Storys Way
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We translate your requirements into thoughtful space planning, layouts and a clear direction. Every step is coordinated to maintain quality and design intent.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono bg-white text-stone-700 px-3 py-1.5 rounded border border-stone-200 shadow-2xs">
              Step {activeStepIndex + 1} of 7
            </span>
          </div>
        </div>

        {/* Step Buttons Horizontal Track */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {SEVEN_STEP_PROCESS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#14171B] text-white border-[#14171B] shadow-sm'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-[#C5A880] hover:bg-stone-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-[#C5A880] text-black' : 'bg-stone-100 text-stone-600'
                  }`}>
                    {step.stepCode}
                  </span>
                  <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-[#C5A880]' : 'text-stone-400'}`} />
                </div>
                <div className="font-serif text-sm font-bold truncate">{step.title}</div>
                <div className={`text-[10px] font-mono truncate mt-0.5 ${isSelected ? 'text-stone-300' : 'text-stone-500'}`}>
                  {step.duration}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <div className="rounded-lg bg-white border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: Step Definition */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#14171B] text-[#C5A880]">
                  STEP {currentStep.stepCode}
                </span>
                <span className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                  {currentStep.duration}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {currentStep.title}
              </h3>

              <p className="font-serif text-base italic text-stone-700 border-l-2 border-[#C5A880] pl-4">
                &ldquo;{currentStep.tagline}&rdquo;
              </p>

              <p className="text-sm text-stone-600 leading-relaxed">
                {currentStep.summary}
              </p>

              {/* Milestone Deliverable Box */}
              <div className="p-4 rounded-md bg-[#FAF8F5] border border-stone-200 flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-[#B89366] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono uppercase font-semibold text-stone-500 tracking-wider">
                    Phase Outcome:
                  </div>
                  <div className="text-xs font-bold text-stone-900 mt-0.5">
                    {currentStep.deliverable}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Key Activities & In-Depth Actions */}
            <div className="lg:col-span-5 bg-[#FAF8F5] rounded-lg p-6 border border-stone-200/80 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="text-xs font-mono uppercase font-semibold text-stone-700 tracking-wider">
                  Core Activities &amp; Milestones
                </div>
                <Sparkles className="w-3.5 h-3.5 text-[#B89366]" />
              </div>

              <ul className="space-y-3">
                {currentStep.activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#B89366] shrink-0 mt-0.5" />
                    <span className="leading-normal">{act}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-stone-200">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded bg-[#14171B] text-[#C5A880] hover:bg-stone-900 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-2xs"
                >
                  <span>Start at Step {currentStep.stepCode}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Step Progression Navigator */}
          <div className="flex items-center justify-between pt-6 border-t border-stone-200 text-xs">
            <button
              onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : SEVEN_STEP_PROCESS.length - 1))}
              className="text-stone-600 hover:text-stone-950 font-medium flex items-center gap-1"
            >
              &larr; Previous Step
            </button>

            <div className="flex gap-1.5">
              {SEVEN_STEP_PROCESS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStepIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeStepIndex === i ? 'bg-[#B89366] w-6' : 'bg-stone-300'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveStepIndex((prev) => (prev < SEVEN_STEP_PROCESS.length - 1 ? prev + 1 : 0))}
              className="text-[#B89366] hover:text-[#9c784e] font-semibold flex items-center gap-1"
            >
              Next Step &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
