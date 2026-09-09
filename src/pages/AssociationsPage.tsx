import React from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { CLIENT_PROPERTY_ASSOCIATIONS } from '../data/websiteData';
import { Building2, ShieldCheck, MapPin, ArrowRight, Award, CheckCircle2 } from 'lucide-react';

interface AssociationsPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

export const AssociationsPage: React.FC<AssociationsPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-modern-glass-office-building-in-a-city-41310-large.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90"
        badge="// RECOGNITION & COMMUNITIES"
        title="Client & Brand Associations"
        italicTitle="Trusted across Bengaluru’s most iconic developments."
        description="Over 15 years, Build Storys has earned the confidence of elite residential societies, Fortune 500 tech enterprises, and manufacturing leaders. Explore our extensive track record across Bangalore."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Associations' }
        ]}
        metrics={[
          { value: '250+', label: 'Delivered Projects' },
          { value: '30+', label: 'Gated Communities' },
          { value: '99%', label: 'Repeat & Referral Clients' },
          { value: '15+', label: 'Years Serving Bengaluru' }
        ]}
        primaryCta={{
          text: 'Inquire for Your Community',
          action: onOpenConsultation
        }}
        secondaryCta={{
          text: 'Explore Featured Projects',
          action: () => onNavigate('projects')
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. Association Category Breakdown — Creative Plaques Grid */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Community Footprint
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Verified Projects Delivered in These Enclaves
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              [ DIRECT REGISTRY // 2010 – 2025 ]
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {CLIENT_PROPERTY_ASSOCIATIONS.map((assoc) => (
              <div
                key={assoc.id}
                onClick={() => onNavigate('projects')}
                className="group cursor-pointer bg-white rounded-xl p-6 border border-stone-200/90 hover:border-[#C5A880] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] flex flex-col justify-between relative overflow-hidden"
              >
                {/* Corner registration mark */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">+</div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-stone-200 text-[10px] font-mono text-[#B89366] font-bold">
                      {assoc.id}
                    </span>
                    <Building2 className="w-4 h-4 text-stone-400 group-hover:text-[#C5A880] transition-colors" />
                  </div>

                  <h4 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                    {assoc.name}
                  </h4>

                  <p className="text-xs text-stone-600">
                    {assoc.category}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                    <span className="truncate">{assoc.location}</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-stone-300 group-hover:text-[#B89366] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Developer & Material Partnership Guarantee */}
        <section className="bg-stone-900 rounded-2xl p-8 sm:p-12 text-white border border-stone-800 space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              Global Supply Alliances
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Direct Tier-1 Material Sourcing
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              We source raw timber, imported Italian marble slabs, and architectural facade systems directly from primary mills and quarries, bypassing retail middle-men to deliver superior specification value.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-800">
            {['Italian Marble Quarry Alliance', 'FSC-Certified Burmese Teak', 'Blum & Hafele Hardware', 'Saint-Gobain Low-E Glazing'].map((spec, i) => (
              <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/10 text-xs font-mono text-stone-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>{spec}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
