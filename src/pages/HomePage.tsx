import React, { useState } from 'react';
import { StoryBeginsHero } from '../components/StoryBeginsHero';
import { LivingProjectGallery } from '../components/LivingProjectGallery';
import { MaterialToSpaceSection } from '../components/MaterialToSpaceSection';
import { ArchitectSketchbookSection } from '../components/ArchitectSketchbookSection';
import { ExhibitionCuratorBar, ArtDirectionType } from '../components/ExhibitionCuratorBar';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CostEstimator } from '../components/CostEstimator';
import { 
  COMPANY_PROFILE, 
  Project 
} from '../data/websiteData';
import { 
  Building, 
  Armchair, 
  Key, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Compass, 
  Calculator, 
  Quote,
  PenTool,
  Calendar,
  Layers3
} from 'lucide-react';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectProject: (project: Project) => void;
  onNavigate: (page: string) => void;
  onApplyEstimate: (details: { service: string; area: string; budget: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onSelectProject,
  onNavigate,
  onApplyEstimate
}) => {
  const [artDirection, setArtDirection] = useState<ArtDirectionType>('material-memory');

  return (
    <div className="space-y-16 pb-20">
      
      {/* 0. Digital Exhibition Curator Bar */}
      <ExhibitionCuratorBar
        currentDirection={artDirection}
        onChangeDirection={(dir) => setArtDirection(dir)}
      />

      {/* 1. Chapter 01: “The Story Begins” Signature Hero */}
      <StoryBeginsHero
        onOpenConsultation={onOpenConsultation}
        onExploreProjects={() => {
          const el = document.getElementById('exhibition-gallery-rooms');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('projects');
        }}
        onExploreProcess={() => {
          const el = document.getElementById('exhibition-sketchbook-process');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else onNavigate('process');
        }}
        onSelectDiscipline={(disc) => {
          if (disc === 'styling') {
            onNavigate('services/interiors');
          } else {
            onNavigate(`services/${disc}`);
          }
        }}
        artDirection={artDirection}
      />

      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-24">

        {/* 2. Chapter 02: Living Project Gallery (Curated Exhibition Rooms) */}
        <LivingProjectGallery
          onSelectProject={onSelectProject}
          onConsultSimilar={(projName) => onOpenConsultation()}
          onNavigate={onNavigate}
        />

        {/* 3. Chapter 03: Tactile Materiality (Material to Space Interactive Transition) */}
        <MaterialToSpaceSection
          onSelectProject={onSelectProject}
          onOpenConsultation={onOpenConsultation}
        />

        {/* 4. Chapter 04: The Atelier Sketchbook & The 7-Step Method */}
        <ArchitectSketchbookSection
          onOpenConsultation={onOpenConsultation}
          onNavigate={onNavigate}
        />

        {/* 5. Chapter 05: Transformations — Raw Site to Living Memory */}
        <section className="space-y-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E1D8] pb-4">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
                // CHAPTER 05 // METAMORPHOSIS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141312] mt-1">
                Before &amp; After: <span className="italic text-[#8C6842]">Spatial Evolution</span>
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm">
                Drag the divider to observe how bare structural earth transforms into finished living sanctuaries.
              </p>
            </div>
            <button
              onClick={() => onNavigate('transformations')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#141312] hover:text-[#8C6842] uppercase tracking-wider cursor-pointer"
            >
              <span>Explore All Transformations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <BeforeAfterSlider />
        </section>

        {/* 6. Chapter 06: Spatial Feasibility & Cost Precision Estimator */}
        <section className="space-y-6 py-4">
          <div className="border-b border-[#E5E1D8] pb-4 space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
              // CHAPTER 06 // FEASIBILITY &amp; TIMELINE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#141312] mt-1">
              Precision Cost &amp; Timeline Estimator
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Calculate projected turnkey investments, plot setbacks, and stage timelines based on current Bengaluru construction benchmarks.
            </p>
          </div>

          <CostEstimator onApplyEstimateToConsultation={onApplyEstimate} />
        </section>

        {/* 7. Chapter 07: Atelier Invitation — "Tell us the story you want to build" (Nordic Luxury) */}
        <section className="rounded-3xl bg-white p-8 sm:p-14 text-stone-900 border border-[#E5E1D8] shadow-xs flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden blueprint-grid-light">
          
          {/* Subtle architectural crosshair marks */}
          <div className="absolute top-4 left-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
          <div className="absolute top-4 right-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
          <div className="absolute bottom-4 left-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
          <div className="absolute bottom-4 right-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>

          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F4] text-xs font-mono text-[#8C6842] border border-[#E5E1D8] uppercase tracking-widest font-bold">
              <PenTool className="w-3.5 h-3.5 text-[#8C6842]" />
              <span>SAHAKAR NAGAR DESIGN ATELIER // BENGALURU</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#141312] leading-tight">
              Tell us the story you want to build.
            </h2>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
              Touch genuine granite and teak samples in our physical library, review zoning feasibility for your plot, or bring your survey drawings for a 45-minute vision session with our Principal Architect.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-stone-500 pt-2">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8C6842]" />
                <span>Sahakar Nagar, Bengaluru</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#8C6842]" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="pill-cta-primary group cursor-pointer"
            >
              <span>Begin Vision Session</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="pill-cta-ghost cursor-pointer"
            >
              <span>Studio Directions &amp; Hours</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
