import React, { useState } from 'react';
import { SEVEN_STEP_PROCESS, ProcessStep } from '../data/websiteData';
import { 
  ArrowRight, 
  Layers, 
  Compass, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  FileText, 
  PenTool, 
  Maximize2,
  Calendar,
  Building2
} from 'lucide-react';

interface ArchitectSketchbookSectionProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

interface StepVisualNarrative {
  stepCode: string;
  stageName: string;
  discipline: string;
  sketchUrl: string;
  siteNote: string;
  deliverableDocument: string;
  keyMetric: string;
}

const STEP_NARRATIVES: StepVisualNarrative[] = [
  {
    stepCode: 'STEP 01',
    stageName: 'Sun-Path & Site Discovery',
    discipline: 'Bioclimatic Analysis',
    sketchUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
    siteNote: 'Bangalore plot azimuth +14°, microclimate wind vectors from southwest. BBMP setback clearance verified.',
    deliverableDocument: 'Comprehensive Site Zoning & Solar-Orientation Dossier',
    keyMetric: 'Week 1-2 · 100% Feasibility Verified'
  },
  {
    stepCode: 'STEP 02',
    stageName: 'Tracing Paper Concept',
    discipline: 'Spatial Morphology',
    sketchUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
    siteNote: 'Charcoal zoning studies on 180gsm tracing paper. Establishing central light courtyard and privacy buffers.',
    deliverableDocument: 'Volumetric Master Plan & 3 Distinct Spatial Schemes',
    keyMetric: 'Week 3-4 · Principal Architect Review'
  },
  {
    stepCode: 'STEP 03',
    stageName: '3D BIM Digital Twin',
    discipline: 'Virtual Simulation',
    sketchUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    siteNote: 'Clash detection for MEP ducts, plumbing risers, and structural beams before pouring a single drop of concrete.',
    deliverableDocument: 'Photorealistic VR Walkthrough & Clash-Free BIM Model',
    keyMetric: 'Week 5-6 · Zero Virtual Errors'
  },
  {
    stepCode: 'STEP 04',
    stageName: 'Zero-Escalation BOQ',
    discipline: 'Cost Engineering',
    sketchUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
    siteNote: 'Line-by-line itemized quantity takeoffs. Every door hinge, travertine tile batch, and structural steel ton defined.',
    deliverableDocument: 'Legally Binding Fixed-Price Turnkey Contract',
    keyMetric: '0% Unapproved Cost Escalations'
  },
  {
    stepCode: 'STEP 05',
    stageName: 'Material Sourcing & Tactility',
    discipline: 'Artisanal Procurement',
    sketchUrl: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=85',
    siteNote: 'Hand-selecting granite slabs at quarry, seasoning timber batches, and testing brass patina recipes at foundry.',
    deliverableDocument: 'Physical Material Sample Board & Testing Certificates',
    keyMetric: 'Hand-Inspected Batch Approvals'
  },
  {
    stepCode: 'STEP 06',
    stageName: 'Precision Construction',
    discipline: 'Civil & Interior Execution',
    sketchUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1200&q=85',
    siteNote: 'Laser-level masonry, concrete cube strength compression tests at 7/14/28 days, daily photographic client log.',
    deliverableDocument: 'Weekly Stage Progress Reports & Snag-Free Milestones',
    keyMetric: 'ISO-Standard Structural Audits'
  },
  {
    stepCode: 'STEP 07',
    stageName: 'Living Handover & Assurance',
    discipline: 'Lifecycle Warranty',
    sketchUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
    siteNote: 'Deep snag cleaning, full MEP commissioning, handing over physical brass keys and digital operation manual.',
    deliverableDocument: '10-Year Structural Guarantee & Studio Care Protocol',
    keyMetric: '100% On-Time Keys Handover'
  }
];

export const ArchitectSketchbookSection: React.FC<ArchitectSketchbookSectionProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeNarrative = STEP_NARRATIVES[activeStepIndex];
  const activeProcessData = SEVEN_STEP_PROCESS[activeStepIndex] || SEVEN_STEP_PROCESS[0];

  return (
    <section 
      id="exhibition-sketchbook-process"
      className="space-y-12 py-8"
      aria-label="The Architect's Sketchbook & Execution Narrative"
    >
      {/* Chapter Eyebrow & Editorial Headline */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E5E1D8] pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#8C6842]" />
            <span>CHAPTER 04 // THE ATELIER SKETCHBOOK</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141312] leading-tight">
            How a Story is Built: <br className="hidden sm:inline" />
            <span className="italic text-[#8C6842]">The 7-Step Method.</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Follow the journey from initial plot sun-path sketches and tracing-paper overlays to physical material benchmarks and keys in hand.
          </p>
        </div>

        <button
          onClick={() => onNavigate('process')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141312] hover:bg-[#8C6842] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors self-start lg:self-auto cursor-pointer shadow-xs"
        >
          <span>Examine All 7 Deliverables</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Sketchbook Tab Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {STEP_NARRATIVES.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          return (
            <button
              key={step.stepCode}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                isActive
                  ? 'bg-white border-[#8C6842] shadow-md ring-1 ring-[#8C6842]'
                  : 'bg-[#F8F7F4] border-[#E5E1D8] hover:border-stone-400 hover:bg-white'
              }`}
            >
              {isActive && (
                <div className="w-full h-1 bg-[#8C6842] absolute top-0 left-0" />
              )}
              <div className="text-[10px] font-mono text-[#8C6842] font-bold">
                {step.stepCode}
              </div>
              <div className="font-serif text-xs sm:text-sm font-bold text-stone-900 truncate mt-1">
                {step.stageName}
              </div>
              <div className="text-[9px] font-mono text-stone-400 truncate mt-0.5">
                {step.discipline}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Sketchbook Stage Canvas: Tracing Paper Effect & Visual Narrative */}
      <div className="rounded-3xl border border-[#E5E1D8] bg-white p-6 sm:p-10 lg:p-12 shadow-md blueprint-grid-light relative overflow-hidden">
        
        {/* Architectural drafting marks */}
        <div className="absolute top-4 left-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
        <div className="absolute top-4 right-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
        <div className="absolute bottom-4 left-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
        <div className="absolute bottom-4 right-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Drawing / Field Sketch Frame (7 cols) */}
          <div className="lg:col-span-7 relative">
            
            {/* Main Stage Image Frame */}
            <div className="relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden bg-stone-900 shadow-md border border-[#E5E1D8]">
              <img
                src={activeNarrative.sketchUrl}
                alt={activeNarrative.stageName}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Step code badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[#E7CAA5] font-mono text-xs font-bold uppercase">
                {activeNarrative.stepCode} // {activeNarrative.discipline}
              </div>

              {/* Live field observation note pinned on image */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#E7CAA5] font-bold uppercase">
                  <PenTool className="w-3 h-3 text-[#8C6842]" />
                  <span>Principal Architect Field Note:</span>
                </div>
                <p className="text-xs text-stone-200 font-sans italic">
                  “{activeNarrative.siteNote}”
                </p>
              </div>
            </div>

            {/* Tracing Paper Floating Badge */}
            <div className="absolute -top-3 -right-3 hidden sm:block p-3 rounded-xl tracing-paper text-stone-900 text-[10px] font-mono shadow-md border border-[#E5E1D8]">
              <div className="font-bold text-[#8C6842]">DRAFTING SHEET REF // BS-0{activeStepIndex + 1}</div>
              <div className="text-stone-500">SCALE: 1:100 @ A1</div>
            </div>

          </div>

          {/* Narrative & Milestone Specification Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-stone-100 text-[10px] font-mono text-[#8C6842] font-bold uppercase">
                <Clock className="w-3 h-3" />
                <span>TIMELINE: {activeProcessData.duration}</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#141312] leading-tight">
                {activeProcessData.title}
              </h3>

              <div className="font-serif italic text-lg text-[#8C6842]">
                {activeProcessData.tagline}
              </div>

              <p className="text-stone-600 text-sm leading-relaxed font-sans pt-1">
                {activeProcessData.summary}
              </p>
            </div>

            {/* Step Activities List */}
            <div className="space-y-2 pt-2 border-t border-[#E5E1D8]">
              <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                Atelier Procedures:
              </div>
              <ul className="space-y-2">
                {activeProcessData.activities.map((act, actIdx) => (
                  <li key={actIdx} className="flex items-start gap-2.5 text-xs text-stone-700 font-sans">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6842] shrink-0 mt-0.5" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Deliverable Specification Box */}
            <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1">
              <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 uppercase">
                <span className="font-bold text-stone-800">Formal Deliverable:</span>
                <span className="text-[#8C6842] font-bold">{activeNarrative.keyMetric}</span>
              </div>
              <div className="text-xs font-medium text-stone-900 font-sans">
                {activeNarrative.deliverableDocument}
              </div>
            </div>

            {/* Direct Consultation Action */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="flex-1 px-5 py-3 rounded-full bg-[#141312] hover:bg-[#8C6842] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Initiate Step 01 for Your Plot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
