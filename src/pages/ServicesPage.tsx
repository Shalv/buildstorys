import React, { useState, useEffect } from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { SERVICES_DATA, ServiceItem, PROJECTS_DATA } from '../data/websiteData';
import { 
  Building, 
  Armchair, 
  Key, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Compass,
  Maximize2,
  ChevronDown
} from 'lucide-react';

interface ServicesPageProps {
  subHeading?: string; // 'all' | 'architecture' | 'interiors' | 'turnkey' | 'visualisation'
  onSelectServiceForConsultation: (serviceName: string) => void;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  subHeading = 'all',
  onSelectServiceForConsultation,
  onNavigate
}) => {
  // Normalize subHeading
  const currentCategory = 
    subHeading === 'architecture' ? 'Architecture' :
    subHeading === 'interiors' ? 'Interior Design' :
    subHeading === 'turnkey' ? 'Turnkey' :
    subHeading === 'visualisation' ? 'Visualisation' : 'All';

  const [activeTab, setActiveTab] = useState<string>(currentCategory);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  useEffect(() => {
    setActiveTab(currentCategory);
  }, [subHeading]);

  // Video backgrounds tailored specifically to each discipline
  const videoConfig: Record<string, { video: string; poster: string; title: string; italic: string; desc: string }> = {
    'Architecture': {
      video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-facade-with-geometric-lines-41312-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
      title: 'Architectural Design & Planning',
      italic: 'Bioclimatic living, structural clarity & timeless facades.',
      desc: 'From custom residential villas and multi-family sanctuaries to commercial headquarters and industrial complexes, our architectural studio designs buildings responding to Bangalore’s sun, wind, and urban microclimates.'
    },
    'Interior Design': {
      video: 'https://assets.mixkit.co/videos/preview/mixkit-bright-and-modern-living-room-interior-41584-large.mp4',
      poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90',
      title: 'Bespoke Luxury Interiors',
      italic: 'Material tactility, artisanal millwork & ambient illumination.',
      desc: 'Crafting spatial narratives for luxury penthouses, duplex villas, and high-performance workspaces. We hand-select Italian marbles, custom teak woodwork, architectural lighting, and acoustic linings.'
    },
    'Turnkey': {
      video: 'https://assets.mixkit.co/videos/preview/mixkit-architect-drawing-blueprints-with-a-ruler-41306-large.mp4',
      poster: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=2400&q=90',
      title: 'Turnkey Design-Build Handover',
      italic: 'Single-source responsibility from concept sketch to keys in hand.',
      desc: 'We eliminate contractor friction with a unified contract, transparent itemized BOQ, strict material benchmarking, and rigorous on-site quality engineering across Karnataka.'
    },
    'Visualisation': {
      video: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-architectural-digital-rendering-41315-large.mp4',
      poster: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90',
      title: '3D Visualisation & BIM Simulation',
      italic: 'Experience the unbuilt world with photorealistic CGI & virtual reality.',
      desc: 'Before breaking ground, visualize every lighting angle, shadow depth, material transition, and MEP clash through advanced BIM models and cinematic digital walkthroughs.'
    },
    'All': {
      video: '/video/architecture-hero.mp4',
      poster: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
      title: 'Disciplines & Execution Services',
      italic: 'Integrated expertise across architecture, interiors, and turnkey delivery.',
      desc: 'Explore Build Storys comprehensive capabilities. Every discipline is led by licensed senior architects and supported by master builders for uncompromising quality.'
    }
  };

  const currentHero = videoConfig[activeTab] || videoConfig['All'];

  const filteredServices = activeTab === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeTab);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'All') onNavigate('services');
    else if (tab === 'Architecture') onNavigate('services/architecture');
    else if (tab === 'Interior Design') onNavigate('services/interiors');
    else if (tab === 'Turnkey') onNavigate('services/turnkey');
    else if (tab === 'Visualisation') onNavigate('services/visualisation');
  };

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Dedicated Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc={currentHero.video}
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster={currentHero.poster}
        badge={`// SERVICES // ${activeTab.toUpperCase()}`}
        title={currentHero.title}
        italicTitle={currentHero.italic}
        description={currentHero.desc}
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Services', action: () => handleTabChange('All') },
          ...(activeTab !== 'All' ? [{ label: activeTab }] : [])
        ]}
        metrics={[
          { value: '4', label: 'Core Disciplines' },
          { value: '250+', label: 'Delivered Spaces' },
          { value: '100%', label: 'In-House Execution' },
          { value: '10 Yr', label: 'Structural Warranty' }
        ]}
        primaryCta={{
          text: `Inquire ${activeTab !== 'All' ? activeTab : 'Service'}`,
          action: () => onSelectServiceForConsultation(activeTab !== 'All' ? activeTab : 'Comprehensive Architecture')
        }}
        secondaryCta={{
          text: 'Explore Portfolio Projects',
          action: () => onNavigate('projects')
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* 2. Sub-Heading Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'All', label: 'All Services (09)' },
              { id: 'Architecture', label: 'Architecture & Sanctions' },
              { id: 'Interior Design', label: 'Luxury Interiors' },
              { id: 'Turnkey', label: 'Turnkey Solutions' },
              { id: 'Visualisation', label: '3D Visualisation & BIM' }
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#14171B] text-[#C5A880] font-bold shadow-sm border border-[#2A2E35]'
                      : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-950 hover:border-stone-400'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#C5A880]' : 'bg-stone-300'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-stone-500">
            Showing {filteredServices.length} Disciplines
          </span>
        </div>

        {/* 3. Creative Architectural Discipline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem, idx: number) => {
            const isExpanded = expandedCardId === service.id;
            return (
              <div 
                key={service.id}
                className="group bg-white rounded-xl border border-stone-200/90 hover:border-[#C5A880] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] flex flex-col justify-between overflow-hidden relative"
              >
                {/* Architectural Crosshair Corners */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>

                {/* Card Image with Creative Overlay */}
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img 
                    src={service.image} 
                    alt={service.service}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                  {/* Top Badge Stamp */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#C5A880] border border-[#C5A880]/30 uppercase tracking-widest font-semibold">
                      {service.serviceNumber}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/20 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  {/* Title on Image Bottom */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight drop-shadow-sm group-hover:text-[#E7CAA5] transition-colors">
                      {service.service}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Capability Chips */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                      Key Competencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.majorCapabilities.map((cap, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-stone-200 text-[11px] font-mono text-stone-700 hover:border-[#C5A880] transition-colors"
                        >
                          &bull; {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Drawer Toggle */}
                  <div className="pt-3 border-t border-stone-100">
                    <button
                      onClick={() => setExpandedCardId(isExpanded ? null : service.id)}
                      className="w-full flex items-center justify-between text-xs font-mono font-bold text-stone-700 hover:text-[#B89366] transition-colors py-1 focus:outline-none"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#B89366]" />
                        <span>{service.typicalDeliverables.length} Key Deliverables</span>
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#B89366]' : 'text-stone-400'}`} />
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-3 bg-[#FAF8F5] rounded-lg border border-stone-200 space-y-2 animate-in fade-in-50 duration-200">
                        {service.typicalDeliverables.map((del, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex items-center justify-between border-t border-stone-100">
                    <button
                      onClick={() => onSelectServiceForConsultation(service.service)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 group-hover:text-[#B89366] transition-colors uppercase tracking-wider"
                    >
                      <span>Inquire Discipline</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={() => onNavigate('projects')}
                      className="text-[11px] font-mono text-stone-500 hover:text-stone-900 transition-colors"
                    >
                      View Work &rarr;
                    </button>
                  </div>
                </div>

                {/* Bottom Brass Accent line */}
                <div className="h-0.5 bg-transparent group-hover:bg-[#C5A880] transition-colors" />
              </div>
            );
          })}
        </div>

        {/* 4. Cross-discipline Turnkey Delivery Guarantee Banner */}
        <div className="mt-12 bg-stone-900 rounded-2xl p-8 sm:p-12 text-white border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A880]">
              Custom Project Scoping
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Require a customized architectural or turnkey solution?
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm">
              Schedule a 45-minute vision session with our Principal Architect at the Sahakar Nagar Studio or via virtual video walkthrough.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onSelectServiceForConsultation('Full Architecture & Turnkey')}
              className="px-6 py-3 rounded bg-[#C5A880] hover:bg-[#D5B890] text-stone-950 text-xs font-bold uppercase tracking-wider transition-all"
            >
              Book Vision Session
            </button>
            <button
              onClick={() => onNavigate('estimator')}
              className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-all text-center"
            >
              Calculate Budget &rarr;
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
