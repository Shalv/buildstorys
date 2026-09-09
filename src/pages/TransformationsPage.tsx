import React from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { PROJECTS_DATA } from '../data/websiteData';
import { Sparkles, Sliders, ArrowRight, CheckCircle2, MapPin, Building } from 'lucide-react';

interface TransformationsPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

export const TransformationsPage: React.FC<TransformationsPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const transformedProjects = PROJECTS_DATA.filter(p => p.beforeImage && p.afterImage);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-architect-working-at-his-desk-in-an-office-41305-large.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
        badge="// SPATIAL METAMORPHOSIS"
        title="Before & After Transformations"
        italicTitle="From derelict shells to bespoke architectural sanctuaries."
        description="Witness the power of architectural intervention. From structural load-bearing wall removals and daylight courtyard additions to total luxury interior fit-outs in Bangalore’s prime enclaves."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Transformations' }
        ]}
        metrics={[
          { value: '+45%', label: 'Average Daylight Gain' },
          { value: '14 Wks', label: 'Average Interior Turnaround' },
          { value: '100%', label: 'Turnkey Handover' },
          { value: '0', label: 'Structural Cracks / Defects' }
        ]}
        primaryCta={{
          text: 'Inquire Renovation / Fitout',
          action: onOpenConsultation
        }}
        secondaryCta={{
          text: 'Explore Projects',
          action: () => onNavigate('projects')
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. Interactive Before & After Slider Component */}
        <BeforeAfterSlider />

        {/* 3. Renovation Case Studies with Creative Metrics Cards */}
        <section className="space-y-8 pt-8 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Documented Case Studies
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Structural &amp; Interior Metamorphosis Archive
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Verified Turnkey Deliveries
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformedProjects.map((proj) => (
              <div
                key={proj.id}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C5A880] transition-all p-6 sm:p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded bg-[#FAF8F5] border border-stone-200 text-xs font-mono font-bold text-[#B89366]">
                      {proj.id}
                    </span>
                    <span className="text-xs font-mono text-stone-500">{proj.builtUpArea} &bull; {proj.completionYear}</span>
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-bold text-stone-900">
                      {proj.name}
                    </h4>
                    <p className="text-xs font-mono text-stone-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                      <span>{proj.location}</span>
                    </p>
                  </div>

                  {/* Dual image preview side-by-side */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="relative rounded-lg overflow-hidden h-40 bg-stone-900 border border-stone-200">
                      <img src={proj.beforeImage} alt={`${proj.name} Before`} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-stone-300">
                        BEFORE
                      </span>
                    </div>
                    <div className="relative rounded-lg overflow-hidden h-40 bg-stone-900 border border-[#C5A880]/50">
                      <img src={proj.afterImage} alt={`${proj.name} After`} className="w-full h-full object-cover" />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#C5A880] text-black font-bold text-[10px] font-mono">
                        AFTER (HANDOVER)
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B89366] font-bold block">
                        Design Challenge
                      </span>
                      <p className="text-xs text-stone-600 mt-0.5">
                        {proj.designChallenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold block">
                        Architectural Solution
                      </span>
                      <p className="text-xs text-stone-700 font-medium mt-0.5">
                        {proj.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.materialsUsed.slice(0, 2).map((m, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-[#FAF8F5] text-[10px] font-mono text-stone-600 border border-stone-200">
                        {m}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-mono font-bold text-stone-900 hover:text-[#B89366] flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Transform Similar Space</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
