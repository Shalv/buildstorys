import React from 'react';
import { 
  Building2, 
  Sparkles, 
  MapPin, 
  ArrowRight,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

interface CompanyProfileProps {
  onOpenConsultation: () => void;
}

export const CompanyProfile: React.FC<CompanyProfileProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header: "Creating places worth remembering." from buildstorys.com */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
                <span>{COMPANY_PROFILE.manifesto.subheading}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                {COMPANY_PROFILE.manifesto.heading}
              </h2>
              <div className="w-16 h-0.5 bg-[#C5A880] mt-4" />
            </div>

            <div className="space-y-5 text-stone-600 text-base leading-relaxed">
              <p className="font-medium text-stone-800 text-lg sm:text-xl font-serif">
                {COMPANY_PROFILE.companyDescription}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-stone-200 text-xs font-medium text-stone-800 shadow-2xs">
                  <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                  <span>Sahakar Nagar, Bengaluru</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white border border-stone-200 text-xs font-medium text-stone-800 shadow-2xs">
                  <Building2 className="w-3.5 h-3.5 text-[#B89366]" />
                  <span>{COMPANY_PROFILE.legalName}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden aspect-4/5">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90"
                alt="Build Storys design studio reviewing architectural plans and material samples"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-40 rounded-lg overflow-hidden border-4 border-[#FAF8F5] shadow-xl aspect-square">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=600&q=90"
                alt="Detail of custom joinery and material finish"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid: CLARITY, CRAFT, CHARACTER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_PROFILE.pillars.map((pillar) => (
            <div 
              key={pillar.code}
              className="p-8 rounded-lg bg-white border border-stone-200 shadow-xs hover:border-[#C5A880] transition-colors group"
            >
              <span className="font-mono text-xs font-bold text-[#B89366] tracking-widest block mb-4">
                {pillar.code}
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2 group-hover:text-[#B89366] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline Callout Banner from buildstorys.com */}
        <div className="relative rounded-xl bg-[#14171B] text-white p-8 sm:p-12 overflow-hidden shadow-xl border border-stone-800">
          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              <Compass className="w-3.5 h-3.5" />
              <span>{COMPANY_PROFILE.manifesto.tagline}</span>
            </div>
            
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl italic font-normal text-white leading-snug">
              &ldquo;{COMPANY_PROFILE.brandPromise}&rdquo;
            </blockquote>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {COMPANY_PROFILE.heroSupportingStatement}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#C5A880] text-[#14171B] hover:bg-[#D8BE9B] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                <span>START A CONVERSATION</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Dual Disciplines Bar from buildstorys.com: Design Spaces. Inspire Life. */}
        <div className="rounded-lg bg-stone-100 p-8 border border-stone-200 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              Core Practice
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Design Spaces. Inspire Life.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="group relative bg-white rounded-md border border-stone-200 overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=90"
                  alt="Contemporary architecture facade designed by Build Storys"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-stone-900">
                    {COMPANY_PROFILE.duoDisciplines.architecture.name}
                  </h4>
                  <span className="text-xs font-mono text-[#B89366] bg-[#B89366]/10 px-2 py-0.5 rounded">
                    DISCIPLINE 01
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wider text-stone-500 font-semibold">
                  {COMPANY_PROFILE.duoDisciplines.architecture.tagline}
                </p>
                <p className="text-xs text-stone-600 pt-1">
                  Residential villas, apartments, gated communities, commercial complexes, retail showrooms, and industrial plants.
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-md border border-stone-200 overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=90"
                  alt="Warm modern interior living space designed by Build Storys"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-xl font-bold text-stone-900">
                    {COMPANY_PROFILE.duoDisciplines.interiors.name}
                  </h4>
                  <span className="text-xs font-mono text-[#B89366] bg-[#B89366]/10 px-2 py-0.5 rounded">
                    DISCIPLINE 02
                  </span>
                </div>
                <p className="text-xs font-mono tracking-wider text-stone-500 font-semibold">
                  {COMPANY_PROFILE.duoDisciplines.interiors.tagline}
                </p>
                <p className="text-xs text-stone-600 pt-1">
                  Modular kitchens, wardrobes, living &amp; bedroom suites, mood lighting, acoustic ceilings, and custom carpentry.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
