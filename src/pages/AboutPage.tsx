import React from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { COMPANY_PROFILE, CLIENT_PROPERTY_ASSOCIATIONS } from '../data/websiteData';
import { 
  Compass, 
  MapPin, 
  Building2, 
  Award, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Layers,
  FileCheck
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/21226/21226-360.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
        badge="// STUDIO PROFILE & ETHOS"
        title="Architecture Shaped by Purpose."
        italicTitle="Stories built to outlast generations."
        description="Build Storys Infrastructure brings together architecture, interior design, and master craftsmanship. Headquartered in Sahakar Nagar, Bengaluru, we create residential, commercial, and industrial landmarks that harmonize precision engineering with human soul."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'About Studio' }
        ]}
        metrics={[
          { value: COMPANY_PROFILE.experienceYears, label: 'Years of Atelier Practice' },
          { value: COMPANY_PROFILE.projectsCompleted, label: 'Completed Spaces' },
          { value: COMPANY_PROFILE.sqftDelivered, label: 'Sq. Ft. Built' },
          { value: '100%', label: 'Turnkey Accountability' }
        ]}
        primaryCta={{
          text: 'Book Studio Consultation',
          action: onOpenConsultation
        }}
        secondaryCta={{
          text: 'Explore Portfolio',
          action: () => onNavigate('projects')
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
        
        {/* 2. Studio Manifesto & Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-stone-200 pb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
              <Compass className="w-4 h-4" />
              <span>Design Manifesto</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              {COMPANY_PROFILE.manifesto.heading}
            </h2>
            <div className="w-16 h-1 bg-[#C5A880] rounded-full mt-3" />
            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest pt-2">
              {COMPANY_PROFILE.legalName} &bull; BENGALURU
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
            <p className="font-serif text-xl sm:text-2xl text-stone-900 italic leading-snug">
              &ldquo;{COMPANY_PROFILE.companyDescription}&rdquo;
            </p>
            <p className="text-stone-600 text-sm sm:text-base">
              Founded on the belief that spaces shape emotional well-being and daily rituals, our multidisciplinary team of licensed architects, interior architects, MEP engineers, and master craftsmen eliminates the costly gap between design and physical construction.
            </p>
            
            {/* Quick credential chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                <span>Sahakar Nagar, North Bengaluru</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Council of Architecture Accredited</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#B89366]" />
                <span>Turnkey Class-A Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 4 Core Architectural Pillars — Creative Blueprint Cards */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Methodology & Principles
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                The Four Pillars of Build Storys
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 font-mono">
              [ STANDARD SPECIFICATION // ARCH-ETHOS ]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_PROFILE.pillars.map((pillar, idx) => (
              <div 
                key={pillar.code}
                className="relative group bg-white rounded-xl p-6 border border-stone-200/90 hover:border-[#C5A880] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] flex flex-col justify-between overflow-hidden"
              >
                {/* Architectural corner registration marks */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">
                  +
                </div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">
                  +
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">
                  +
                </div>

                {/* Subtle top brass accent */}
                <div className="w-10 h-0.5 bg-stone-200 group-hover:bg-[#C5A880] group-hover:w-full transition-all duration-500 mb-6" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-stone-200 text-[10px] font-mono font-bold text-[#B89366]">
                      {pillar.code}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Quality Benchmark</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Single-Point Accountability Model */}
        <section className="bg-[#14171B] rounded-2xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Subtle grid background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#C5A880 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#E1C29B] text-xs font-mono uppercase tracking-widest">
                <span>Integrated Turnkey Model</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Architects & Contractors Under One Roof. Zero Dispute Guarantee.
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Most construction failures happen due to blame games between the design office and the site contractor. At Build Storys, our architectural studio directly manages the construction site, eliminating surprise price hikes, design deviations, and handover delays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3.5">
                  <FileCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-white">Itemized Locked BOQ</div>
                    <div className="text-[11px] text-stone-400">Zero hidden escalation charges</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-3.5">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-white">Milestone Handover</div>
                    <div className="text-[11px] text-stone-400">Committed timeline with weekly site reports</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#1D2128] rounded-xl p-6 border border-stone-700 space-y-4">
                <div className="font-mono text-xs text-[#C5A880] uppercase tracking-wider font-semibold">
                  Studio Headquarters
                </div>
                <h4 className="font-serif text-2xl font-bold text-white">
                  Sahakar Nagar Atelier
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Visit our materials library to touch real Italian marble slabs, solid teak wood joinery, custom brass handles, and architectural acoustic louvers.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2.5 rounded bg-[#C5A880] hover:bg-[#D5B890] text-[#14171B] text-xs font-bold uppercase tracking-wider text-center transition-all"
                  >
                    Schedule Studio Visit
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider text-center border border-white/20 transition-all"
                  >
                    View Map &amp; Hours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Client & Brand Associations Carousel/Grid */}
        <section className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Prestigious Deployments
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Trusted in Bengaluru’s Most Exclusive Addresses
              </h3>
            </div>
            <button
              onClick={() => onNavigate('associations')}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#B89366] hover:text-stone-900 font-mono uppercase tracking-wider"
            >
              <span>View All Associations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENT_PROPERTY_ASSOCIATIONS.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg bg-white border border-stone-200 hover:border-[#C5A880] hover:shadow-md transition-all space-y-2 group cursor-pointer"
                onClick={() => onNavigate('projects')}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span>{item.id}</span>
                  <span className="text-[#C5A880] group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <h5 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                  {item.name}
                </h5>
                <p className="text-[11px] text-stone-500 truncate">{item.category}</p>
                <div className="text-[10px] font-mono text-stone-400 flex items-center gap-1 pt-1">
                  <MapPin className="w-3 h-3 text-[#B89366]" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
