import React from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { BeforeAfterSlider, REALISTIC_TRANSFORMATIONS } from '../components/BeforeAfterSlider';
import { Sparkles, ArrowRight, CheckCircle2, MapPin, Building2, SlidersHorizontal, ShieldCheck } from 'lucide-react';

interface TransformationsPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

export const TransformationsPage: React.FC<TransformationsPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="space-y-16 pb-20 bg-[#F8F7F4] text-stone-900 min-h-screen">
      {/* 1. Nordic Luxury Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/1459/1459-360.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
        badge="// CHAPTER 05: SPATIAL METAMORPHOSIS"
        title="Realistic Site Transformations"
        italicTitle="From bare concrete shells to architectural sanctuaries."
        description="Witness the power of architectural engineering and thoughtful interior craft. From removing load-bearing partitions and introducing bioclimatic daylight shafts to executing turnkey luxury duplexes in Bengaluru’s premier enclaves."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Transformations & Proof' }
        ]}
        metrics={[
          { value: '+45%', label: 'Avg Daylight Gain' },
          { value: '14 Wks', label: 'Turnaround Execution' },
          { value: '100%', label: 'Turnkey Delivery' },
          { value: '0%', label: 'Cost Escalation' }
        ]}
        primaryCta={{
          text: 'Request Renovation / Fit-Out Audit',
          action: onOpenConsultation
        }}
        secondaryCta={{
          text: 'Explore All Projects (250+)',
          action: () => onNavigate('projects')
        }}
      />

      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* 2. Interactive Before & After Slider Component with Nordic Luxury & Realistic Data */}
        <BeforeAfterSlider />

        {/* 3. Documented Renovation Case Studies Archive */}
        <section className="space-y-8 pt-8 border-t border-[#E5E1D8]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E1D8] pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
                Documented Execution Archive
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#141312]">
                Structural &amp; Interior Metamorphosis Dossiers
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-stone-600 bg-white px-3 py-1.5 rounded-full border border-[#E5E1D8] shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>100% Real Site Deliveries in Bengaluru</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {REALISTIC_TRANSFORMATIONS.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-white rounded-3xl border border-[#E5E1D8] overflow-hidden shadow-xs hover:shadow-xl hover:border-stone-400 transition-all p-6 sm:p-8 space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Category and Metrics Bar */}
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-md bg-[#F8F7F4] border border-[#E5E1D8] text-xs font-mono font-bold text-[#8C6842]">
                      {caseStudy.category}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-medium">
                      {caseStudy.builtUpArea} &bull; {caseStudy.timeline}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-normal text-[#141312] group-hover:text-[#8C6842] transition-colors">
                      {caseStudy.title}
                    </h4>
                    <p className="text-xs font-mono text-stone-500 flex items-center gap-1.5 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8C6842]" />
                      <span>{caseStudy.location}</span>
                    </p>
                  </div>

                  {/* Dual image preview side-by-side (Realistic) */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="relative rounded-2xl overflow-hidden h-44 bg-stone-100 border border-[#E5E1D8]">
                      <img 
                        src={caseStudy.beforeImage} 
                        alt={`${caseStudy.title} Before`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold text-stone-900 border border-[#E5E1D8] shadow-2xs">
                        BEFORE SITE
                      </span>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden h-44 bg-stone-100 border border-[#E5E1D8]">
                      <img 
                        src={caseStudy.afterImage} 
                        alt={`${caseStudy.title} Handover`} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-[#141312] text-[#F8F7F4] font-bold text-[10px] font-mono shadow-2xs">
                        HANDOVER // AFTER
                      </span>
                    </div>
                  </div>

                  {/* Challenge & Solution details */}
                  <div className="space-y-3 pt-1">
                    <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-amber-800 font-bold block">
                        Site Challenge
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-sans">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold block">
                        Engineering &amp; Design Intervention
                      </span>
                      <p className="text-xs text-stone-700 leading-relaxed font-sans">
                        {caseStudy.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer specs & CTA */}
                <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {caseStudy.materials.slice(0, 3).map((mat) => (
                      <span key={mat} className="px-2.5 py-0.5 rounded-md bg-[#F8F7F4] text-[10px] font-mono text-stone-600 border border-[#E5E1D8]">
                        {mat}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-mono font-bold text-[#141312] hover:text-[#8C6842] flex items-center gap-1.5 uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Transform Your Property</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8C6842]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Consultation Prompt Callout (Nordic Luxury) */}
        <div className="rounded-3xl bg-white border border-[#E5E1D8] p-8 sm:p-12 shadow-xs text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F4] border border-[#E5E1D8] text-[#8C6842] text-xs font-mono font-bold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Have a Raw Shell or Aging Residence?</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-[#141312] font-normal">
            Tell us about your space. We&apos;ll craft its story.
          </h3>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
            Our principal architects provide structural site feasibility visits across Bangalore. Get a line-item BOQ, 3D daylight study, and turnkey schedule before committing.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="pill-cta-primary group cursor-pointer"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('estimator')}
              className="pill-cta-ghost cursor-pointer"
            >
              <span>Calculate Renovation Cost</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
