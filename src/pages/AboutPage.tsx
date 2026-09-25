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

      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-20">
        
        {/* 2. Studio Manifesto & Philosophy */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start border-b border-[#E5E1D8] pb-16">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
              <Compass className="w-4 h-4" />
              <span>Design Manifesto</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141312] leading-tight">
              {COMPANY_PROFILE.manifesto.heading}
            </h2>
            <div className="w-16 h-1 bg-[#8C6842] rounded-full mt-3" />
            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest pt-2">
              {COMPANY_PROFILE.legalName} &bull; BENGALURU
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
            <p className="font-serif text-xl sm:text-2xl text-[#141312] italic leading-snug">
              &ldquo;{COMPANY_PROFILE.companyDescription}&rdquo;
            </p>
            <p className="text-stone-600 text-sm sm:text-base">
              Founded on the belief that spaces shape emotional well-being and daily rituals, our multidisciplinary team of licensed architects, interior architects, MEP engineers, and master craftsmen eliminates the costly gap between design and physical construction.
            </p>
            
            {/* Quick credential chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E5E1D8] text-xs font-mono text-stone-800 shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#8C6842]" />
                <span>Sahakar Nagar, North Bengaluru</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E5E1D8] text-xs font-mono text-stone-800 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Council of Architecture Accredited</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#E5E1D8] text-xs font-mono text-stone-800 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-[#8C6842]" />
                <span>Turnkey Class-A Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. The 4 Core Architectural Pillars — Creative Blueprint Cards */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E1D8] pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
                Methodology & Principles
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141312] mt-1">
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
                className="relative group bg-white rounded-2xl p-6 border border-[#E5E1D8] hover:border-[#8C6842] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Architectural corner registration marks */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#8C6842] transition-colors">
                  +
                </div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#8C6842] transition-colors">
                  +
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#8C6842] transition-colors">
                  +
                </div>

                {/* Subtle top brass accent */}
                <div className="w-10 h-0.5 bg-stone-200 group-hover:bg-[#8C6842] group-hover:w-full transition-all duration-500 mb-6" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#F8F7F4] border border-[#E5E1D8] text-[10px] font-mono font-bold text-[#8C6842]">
                      {pillar.code}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#141312] group-hover:text-[#8C6842] transition-colors">
                    {pillar.title}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5E1D8] flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Quality Benchmark</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Single-Point Accountability Model (Nordic Luxury) */}
        <section className="bg-white rounded-3xl text-stone-900 p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-[#E5E1D8] shadow-xs">
          {/* Subtle grid background */}
          <div 
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#8C6842 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F4] border border-[#E5E1D8] text-[#8C6842] text-xs font-mono uppercase tracking-widest font-bold">
                <span>Integrated Turnkey Model</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#141312]">
                Architects &amp; Contractors Under One Roof. Zero Dispute Guarantee.
              </h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
                Most construction failures happen due to blame games between the design office and the site contractor. At Build Storys, our architectural studio directly manages the construction site, eliminating surprise price hikes, design deviations, and handover delays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-[#F8F7F4] border border-[#E5E1D8] rounded-xl p-4 shadow-2xs">
                  <FileCheck className="w-5 h-5 text-[#8C6842] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-[#141312] font-mono">Itemized Locked BOQ</div>
                    <div className="text-[11px] text-stone-500 font-sans mt-0.5">Zero hidden escalation charges</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-[#F8F7F4] border border-[#E5E1D8] rounded-xl p-4 shadow-2xs">
                  <Clock className="w-5 h-5 text-[#8C6842] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-xs uppercase tracking-wider text-[#141312] font-mono">Milestone Handover</div>
                    <div className="text-[11px] text-stone-500 font-sans mt-0.5">Committed timeline with weekly site reports</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#F8F7F4] rounded-2xl p-6 sm:p-8 border border-[#E5E1D8] space-y-4 shadow-2xs">
                <div className="font-mono text-xs text-[#8C6842] uppercase tracking-wider font-bold">
                  Studio Headquarters // Bengaluru
                </div>
                <h4 className="font-serif text-2xl font-normal text-[#141312]">
                  Sahakar Nagar Atelier
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Visit our materials library to touch real Italian marble slabs, solid teak wood joinery, custom brass handles, and architectural acoustic louvers.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={onOpenConsultation}
                    className="pill-cta-primary group cursor-pointer"
                  >
                    <span>Schedule Studio Visit</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="pill-cta-ghost cursor-pointer"
                  >
                    <span>View Map &amp; Hours</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Client & Brand Associations Carousel/Grid */}
        <section className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E5E1D8] pb-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
                Prestigious Deployments
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141312] mt-1">
                Trusted in Bengaluru’s Most Exclusive Addresses
              </h3>
            </div>
            <button
              onClick={() => onNavigate('associations')}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#8C6842] hover:text-stone-900 font-mono uppercase tracking-wider cursor-pointer"
            >
              <span>View All Associations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CLIENT_PROPERTY_ASSOCIATIONS.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl bg-white border border-[#E5E1D8] hover:border-[#8C6842] hover:shadow-md transition-all space-y-2 group cursor-pointer"
                onClick={() => onNavigate('projects')}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span>{item.id}</span>
                  <span className="text-[#8C6842] group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
                <h5 className="font-serif text-base font-bold text-[#141312] group-hover:text-[#8C6842] transition-colors">
                  {item.name}
                </h5>
                <p className="text-[11px] text-stone-500 truncate">{item.category}</p>
                <div className="text-[10px] font-mono text-stone-400 flex items-center gap-1 pt-1">
                  <MapPin className="w-3 h-3 text-[#8C6842]" />
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
