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
  ChevronDown,
  Sun,
  Moon,
  Clock,
  Eye,
  Sliders,
  Check,
  ShieldCheck,
  Layers3,
  PenTool
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

  // Architecture artistic opening state: Sun-Path & Light Time
  const [solarTime, setSolarTime] = useState<number>(14); // 8 to 18 hours

  // Interior artistic opening state: Selected Material Specimen
  const [selectedInteriorMaterial, setSelectedInteriorMaterial] = useState<number>(0);

  // Turnkey artistic opening state: Construction Sequencing Step
  const [activeTurnkeyStep, setActiveTurnkeyStep] = useState<number>(0);

  // Visualisation artistic opening state: Wireframe vs CGI Slider
  const [cgiSlider, setCgiSlider] = useState<number>(50);

  useEffect(() => {
    setActiveTab(currentCategory);
  }, [subHeading]);

  // Video and atmospheric configuration for each discipline
  const videoConfig: Record<string, { video: string; poster: string; title: string; italic: string; desc: string }> = {
    'Architecture': {
      video: 'https://assets.mixkit.co/videos/27543/27543-360.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
      title: 'Architecture & Villa Planning',
      italic: 'Shaped by light, Bangalore breezes & structural honesty.',
      desc: 'Bespoke independent villas, multi-generational residences, and commercial complexes. Designed from solar path studies, BBMP/BDA bylaws, and monolithic cantilevers.'
    },
    'Interior Design': {
      video: 'https://assets.mixkit.co/videos/39177/39177-360.mp4',
      poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90',
      title: 'Bespoke Luxury Interiors',
      italic: 'From material micro-texture to spatial memory.',
      desc: 'Italian Bottochino marbles, smoked oak millwork, hand-cast brass hardware, and architectural lighting engineered to transform rooms into sensory sanctuaries.'
    },
    'Turnkey': {
      video: 'https://assets.mixkit.co/videos/16556/16556-360.mp4',
      poster: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=2400&q=90',
      title: 'Turnkey Design-Build Handover',
      italic: 'The rhythm of execution with zero unapproved cost escalations.',
      desc: 'A unified single-source contract. From soil excavation and RCC casting to bespoke cabinetry, snag-free handover, and 10-year structural warranty.'
    },
    'Visualisation': {
      video: 'https://assets.mixkit.co/videos/15840/15840-360.mp4',
      poster: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90',
      title: '3D Visualisation & BIM Twins',
      italic: 'Experience the unbuilt world before pouring a cubic yard of concrete.',
      desc: 'Photorealistic architectural CGI, volumetric sunlight simulations, virtual reality walk-throughs, and clash-detection BIM engineering.'
    },
    'All': {
      video: 'https://assets.mixkit.co/videos/4170/4170-360.mp4',
      poster: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
      title: 'Integrated Disciplines & Atelier Services',
      italic: 'Bridging the critical gap between blueprint vision and physical reality.',
      desc: 'Explore Build Storys comprehensive studio capabilities in Sahakar Nagar, Bengaluru. Every discipline is led by licensed senior architects and supported by master builders.'
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

  // Interior macro materials
  const interiorMaterials = [
    {
      name: 'Italian Bottochino Marble',
      texture: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      spaceImg: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      note: 'Bookmatched seamless slabs with acoustic anti-reverberation underlay.'
    },
    {
      name: 'Smoked Natural Oak',
      texture: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80',
      spaceImg: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      note: 'Artisanal fluted vertical millwork concealing master dressing suites.'
    },
    {
      name: 'Champagne Brushed Brass',
      texture: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1000&q=80',
      spaceImg: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      note: 'Custom shadowline baseboards, concealed door pivots, and ambient lighting trims.'
    }
  ];

  // Turnkey chronological rhythm steps
  const turnkeyMilestones = [
    {
      phase: 'PHASE 01',
      title: 'Geotechnical & Earthwork',
      duration: 'Week 1 – 4',
      metric: 'Zero-Escalation Foundation',
      note: 'Soil bearing test, anti-termite barrier, RCC footing casting with laser levelling.'
    },
    {
      phase: 'PHASE 02',
      title: 'Superstructure & Post-Tensioned Slabs',
      duration: 'Week 5 – 18',
      metric: 'C35 Concrete Cube Tests',
      note: 'Monolithic cantilevers, acoustic thermal brickwork, and concealed conduit embedding.'
    },
    {
      phase: 'PHASE 03',
      title: 'Artisanal Joinery & Turnkey Finishing',
      duration: 'Week 19 – 32',
      metric: '100% Itemized BOQ Match',
      note: 'Italian stone laying, bespoke millwork installation, and MEP system commissioning.'
    },
    {
      phase: 'PHASE 04',
      title: 'Snag-Free Handover & 10-Yr Guarantee',
      duration: 'Week 33 – 36',
      metric: 'Keys in Hand Guarantee',
      note: 'Deep clinical cleaning, architectural lighting calibration, and official warranty handover.'
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Dedicated Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc={currentHero.video}
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster={currentHero.poster}
        badge={`// ATELIER SERVICE // ${activeTab.toUpperCase()}`}
        title={currentHero.title}
        italicTitle={currentHero.italic}
        description={currentHero.desc}
        breadcrumbs={[
          { label: 'Exhibition Home', action: () => onNavigate('home') },
          { label: 'Disciplines', action: () => handleTabChange('All') },
          ...(activeTab !== 'All' ? [{ label: activeTab }] : [])
        ]}
        metrics={[
          { value: '4', label: 'Core Disciplines' },
          { value: '250+', label: 'Delivered Spaces' },
          { value: '100%', label: 'In-House Control' },
          { value: '10 Yr', label: 'Structural Assurance' }
        ]}
        primaryCta={{
          text: `Inquire ${activeTab !== 'All' ? activeTab : 'Service'}`,
          action: () => onSelectServiceForConsultation(activeTab !== 'All' ? activeTab : 'Comprehensive Architecture')
        }}
        secondaryCta={{
          text: 'Explore Portfolio Rooms',
          action: () => onNavigate('projects')
        }}
      />

      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* 2. Sub-Heading Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E1D8] pb-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'All', label: 'All Disciplines (09)' },
              { id: 'Architecture', label: 'Architecture & Villas' },
              { id: 'Interior Design', label: 'Luxury Interiors' },
              { id: 'Turnkey', label: 'Turnkey Solutions' },
              { id: 'Visualisation', label: '3D Visualisation & BIM' }
            ].map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#141312] text-[#8C6842] font-bold shadow-xs border border-[#141312]'
                      : 'bg-white border border-[#E5E1D8] text-stone-700 hover:text-stone-950 hover:border-stone-400'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#8C6842]' : 'bg-stone-300'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <span className="text-xs font-mono text-stone-500">
            Showing {filteredServices.length} Atelier Capabilities
          </span>
        </div>

        {/* 3. SIGNATURE ARTISTIC OPENING TAILORED TO EACH SEARCH INTENT */}

        {/* Option A: Architecture & Villa Artistic Opening -> Light & Shadow Bioclimatic Study (Nordic Luxury) */}
        {activeTab === 'Architecture' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white text-stone-900 border border-[#E5E1D8] shadow-xs space-y-8 relative overflow-hidden blueprint-grid-light">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E5E1D8] pb-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#8C6842] font-bold">
                  // ARTISTIC REVEAL: LIGHT &amp; SHADOW
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#141312]">
                  Sculpted by Bangalore’s Sun Path &amp; Seasonal Breezes
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed">
                  Architecture is not just concrete—it is the canvas upon which sunlight dances throughout the day. Drag the sun path controller below to observe how our overhangs and light shafts filter southern glare.
                </p>
              </div>

              {/* Live Solar Metric */}
              <div className="flex items-center gap-3 bg-[#F8F7F4] px-4 py-2.5 rounded-full border border-[#E5E1D8] text-xs font-mono text-stone-800 shadow-2xs">
                <Sun className="w-4 h-4 text-amber-600 animate-spin" />
                <span>SOLAR ANGLE: {solarTime}:00 IST // AZIMUTH +{((solarTime - 8) * 18).toFixed(0)}°</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Dynamic Light Simulation Display */}
              <div className="lg:col-span-8 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-stone-100 border border-[#E7E5E0]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                  alt="Architectural Light Study"
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{
                    filter: `brightness(${0.75 + (solarTime <= 13 ? (solarTime - 8) * 0.06 : (18 - solarTime) * 0.06)}) contrast(${1.02 + (solarTime === 12 ? 0.15 : 0)}) sepia(${solarTime >= 16 ? 0.25 : 0.03})`
                  }}
                />

                {/* Overlaid dynamic shadow veil */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-all duration-300"
                  style={{
                    background: solarTime < 11
                      ? 'linear-gradient(115deg, rgba(200,90,50,0.12) 0%, transparent 60%)'
                      : solarTime > 15
                      ? 'linear-gradient(245deg, rgba(200,90,50,0.2) 0%, rgba(20,20,25,0.2) 100%)'
                      : 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 70%)'
                  }}
                />

                {/* Sunlight callout */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-xs font-mono text-stone-900 border border-[#E7E5E0] shadow-2xs font-semibold">
                  {solarTime < 11 ? 'MORNING LIGHT: Diffused 45° E, Courtyard Warmed' : solarTime > 15 ? 'GOLDEN DUSK: Western Pergola Deep Shading' : 'ZENITH NOON: 100% Direct Glare Cut by Cantilevers'}
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#E7E5E0] text-xs font-mono text-stone-700 flex items-center justify-between shadow-sm">
                  <span>BBMP ZONING SETBACK: 1.5M CLEARANCE VERIFIED</span>
                  <span className="text-[#9A7049] font-bold">PASSIVE THERMAL COMFORT: ACTIVE</span>
                </div>
              </div>

              {/* Solar Slider Controls */}
              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-3 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E7E5E0]">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-stone-600">Time of Day:</span>
                    <span className="text-[#9A7049] font-bold">{solarTime}:00 IST</span>
                  </div>

                  <input
                    type="range"
                    min="8"
                    max="18"
                    step="1"
                    value={solarTime}
                    onChange={(e) => setSolarTime(Number(e.target.value))}
                    className="w-full accent-[#9A7049] cursor-pointer"
                  />

                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>08:00 AM (Dawn)</span>
                    <span>12:00 PM (Noon)</span>
                    <span>18:00 PM (Dusk)</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono text-stone-700">
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E5E0]">
                    <span className="text-stone-500 block text-[10px] font-bold uppercase">BIOCLIMATIC PERFORMANCE:</span>
                    <span>Stack-ventilation reduces indoor summer temperature by up to 4.5°C naturally.</span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectServiceForConsultation('Residential Villa Architecture')}
                  className="w-full py-3.5 rounded-xl bg-[#1C1917] hover:bg-[#9A7049] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                >
                  Consult on Villa Sun-Path for Your Plot
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Option B: Interior Design Artistic Opening -> Material Micro-Texture to Complete Room */}
        {activeTab === 'Interior Design' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-stone-200 pb-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C85A32] font-bold">
                  // ARTISTIC REVEAL: SENSORY INTERIORS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-stone-900">
                  From Micro-Tactility to Complete Room Atmosphere
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed">
                  Great interior architecture begins with touch. Select a material swatch below to see how our bespoke joinery, stone veining, and custom brass hardware orchestrate whole living sanctuaries.
                </p>
              </div>

              <div className="text-xs font-mono text-stone-500">
                ACTIVE PALETTE: <span className="font-bold text-stone-900">{interiorMaterials[selectedInteriorMaterial].name}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Swatch Selector (4 cols) */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-stone-400 font-bold mb-2">
                  Select Architectural Swatch:
                </div>
                {interiorMaterials.map((mat, idx) => {
                  const isSelected = idx === selectedInteriorMaterial;
                  return (
                    <div
                      key={mat.name}
                      onClick={() => setSelectedInteriorMaterial(idx)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center gap-4 ${
                        isSelected
                          ? 'bg-[#FAF8F5] border-[#C85A32] ring-1 ring-[#C85A32] shadow-sm'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-stone-300">
                        <img src={mat.texture} alt={mat.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="font-serif text-base font-bold text-stone-900">
                          {mat.name}
                        </div>
                        <div className="text-[11px] font-sans text-stone-600 line-clamp-2">
                          {mat.note}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <button
                  onClick={() => onSelectServiceForConsultation('Luxury Interior Architecture')}
                  className="w-full py-3 rounded-lg bg-stone-900 hover:bg-[#C85A32] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors mt-4"
                >
                  Schedule Material Consultation
                </button>
              </div>

              {/* Resulting Living Space Display (8 cols) */}
              <div className="lg:col-span-8 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-stone-900 shadow-lg border border-stone-200">
                <img
                  src={interiorMaterials[selectedInteriorMaterial].spaceImg}
                  alt={interiorMaterials[selectedInteriorMaterial].name}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-black/70 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest border border-white/20">
                  [REVEALED SANCTUARY] {interiorMaterials[selectedInteriorMaterial].name}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                  <div className="space-y-1">
                    <div className="text-xs font-mono text-[#E7CAA5] uppercase">
                      Bespoke Joinery &amp; Integrated Lighting
                    </div>
                    <div className="font-serif text-xl sm:text-2xl font-light">
                      {interiorMaterials[selectedInteriorMaterial].note}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Option C: Turnkey Design-Build Artistic Opening -> Construction Rhythm & Sequencing (Light Luxury) */}
        {activeTab === 'Turnkey' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white text-stone-900 border border-[#E7E5E0] shadow-sm space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E7E5E0] pb-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9A7049] font-bold">
                  // ARTISTIC REVEAL: EXECUTION RHYTHM
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917]">
                  The Symphony of Construction: Foundation to Living Handover
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed">
                  Turnkey is the discipline of choreographing hundreds of skilled artisans, structural engineers, and material consignments without friction, delays, or unapproved budget creep.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#FAF8F5] border border-emerald-300 px-3.5 py-1.5 rounded-xl text-emerald-800 text-xs font-mono font-bold shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>0% UNAPPROVED COST ESCALATIONS</span>
              </div>
            </div>

            {/* 4 Milestones Sequencing Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {turnkeyMilestones.map((m, mIdx) => {
                const isSelected = mIdx === activeTurnkeyStep;
                return (
                  <div
                    key={m.phase}
                    onClick={() => setActiveTurnkeyStep(mIdx)}
                    className={`cursor-pointer p-5 rounded-2xl border transition-all space-y-3 ${
                      isSelected
                        ? 'bg-[#FAF8F5] border-[#9A7049] ring-2 ring-[#9A7049]/20 shadow-md'
                        : 'bg-white border-[#E7E5E0] hover:border-stone-400 hover:bg-stone-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#9A7049] font-bold">{m.phase}</span>
                      <span className="text-stone-500">{m.duration}</span>
                    </div>

                    <div className="font-serif text-lg font-normal text-[#1C1917]">
                      {m.title}
                    </div>

                    <div className="p-2 rounded bg-white border border-[#E7E5E0] text-[10px] font-mono text-[#9A7049] font-bold">
                      BENCHMARK: {m.metric}
                    </div>

                    <p className="text-xs text-stone-600 font-sans leading-relaxed">
                      {m.note}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E5E0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-stone-700">
                Turnkey Single-Source Accountability: Architecture, Approvals, Civil Works, Joinery, and Handover under one unified contract.
              </div>
              <button
                onClick={() => onSelectServiceForConsultation('Turnkey Design-Build')}
                className="px-6 py-3 rounded-xl bg-[#1C1917] hover:bg-[#9A7049] text-white text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-colors cursor-pointer shadow-sm"
              >
                Request Fixed-Price Turnkey BOQ
              </button>
            </div>
          </div>
        )}

        {/* Option D: Visualisation Artistic Opening -> Wireframe CAD to Photorealistic CGI (Light Luxury) */}
        {activeTab === 'Visualisation' && (
          <div className="p-6 sm:p-10 rounded-3xl bg-white text-stone-900 border border-[#E7E5E0] shadow-sm space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E7E5E0] pb-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9A7049] font-bold">
                  // ARTISTIC REVEAL: VIRTUAL TWIN
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1917]">
                  From Geometric Wireframe to Volumetric Light
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed">
                  Drag the slider below to witness how architectural wireframe vectors resolve into photorealistic raytraced spatial walkthroughs.
                </p>
              </div>

              <div className="text-xs font-mono text-stone-600 bg-[#FAF8F5] px-3.5 py-1.5 rounded-xl border border-[#E7E5E0]">
                ENGINE: <span className="text-[#9A7049] font-bold">Unreal Engine 5 + BIM Revit Digital Twin</span>
              </div>
            </div>

            {/* Interactive Wireframe to CGI Canvas */}
            <div className="relative h-[360px] sm:h-[460px] rounded-2xl overflow-hidden bg-stone-100 border border-[#E7E5E0] select-none">
              
              {/* Layer 1: Wireframe / CAD blueprint */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85"
                  alt="CAD Wireframe"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-xs font-mono text-stone-900 border border-[#E7E5E0] shadow-2xs font-bold">
                  [CAD / BIM VECTOR WIREFRAME]
                </div>
              </div>

              {/* Layer 2: Photorealistic Raytraced CGI */}
              <div
                className="absolute inset-0 transition-[clip-path] duration-75"
                style={{
                  clipPath: `polygon(${cgiSlider}% 0, 100% 0, 100% 100%, ${cgiSlider}% 100%)`
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85"
                  alt="Finished CGI"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-lg bg-[#1C1917] text-white text-xs font-mono font-bold shadow-2xs">
                  [PHOTOREALISTIC RAYTRACED CGI]
                </div>
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.4)]"
                style={{ left: `${cgiSlider}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-stone-900 shadow-2xl flex items-center justify-center text-xs font-mono font-bold border-2 border-stone-300">
                  <Sliders className="w-3.5 h-3.5 text-stone-800" />
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={cgiSlider}
                onChange={(e) => setCgiSlider(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
              />

              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-stone-800 flex items-center justify-between p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#E7E5E0] shadow-sm pointer-events-none">
                <span>&larr; CAD Vectors ({cgiSlider}%)</span>
                <span className="font-bold text-[#9A7049]">DRAG TO REVEAL PHOTOREALISM</span>
                <span>Raytraced Volumetrics &rarr;</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Creative Architectural Discipline Cards Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B89366] font-bold">
              // ATELIER SERVICE DOSSIERS
            </span>
            <span className="text-xs font-mono text-stone-500">
              Select any capability to review deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service: ServiceItem) => {
              const isExpanded = expandedCardId === service.id;
              return (
                <div 
                  key={service.id}
                  className="group bg-white rounded-2xl border border-stone-200/90 hover:border-[#C85A32] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] hover:shadow-xl flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Architectural Crosshair Corners */}
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C85A32] z-20 pointer-events-none">+</div>
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C85A32] z-20 pointer-events-none">+</div>

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
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#E7CAA5] border border-white/20 uppercase tracking-widest font-semibold">
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
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
                      {service.description}
                    </p>

                    {/* Capability Chips */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                        Key Competencies:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.majorCapabilities.map((cap, i) => (
                          <span 
                            key={i}
                            className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-stone-200 text-[11px] font-mono text-stone-700 hover:border-[#C85A32] transition-colors"
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
                        className="w-full flex items-center justify-between text-xs font-mono font-bold text-stone-700 hover:text-[#C85A32] transition-colors py-1 focus:outline-none cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-[#C85A32]" />
                          <span>{service.typicalDeliverables.length} Formal Deliverables</span>
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#C85A32]' : 'text-stone-400'}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3 bg-[#FAF8F5] rounded-xl border border-stone-200 space-y-2 animate-in fade-in-50 duration-200">
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
                    <div className="pt-3 flex items-center justify-between border-t border-stone-100">
                      <button
                        onClick={() => onSelectServiceForConsultation(service.service)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 group-hover:text-[#C85A32] transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        <span>Inquire Discipline</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>

                      <button
                        onClick={() => onNavigate('projects')}
                        className="text-[11px] font-mono text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
                      >
                        View Projects &rarr;
                      </button>
                    </div>
                  </div>

                  {/* Bottom Terracotta Accent line on hover */}
                  <div className="h-1 bg-transparent group-hover:bg-[#C85A32] transition-colors" />
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Direct Atelier Consultation Callout (Light Luxury) */}
        <div className="rounded-3xl bg-white text-stone-900 p-8 sm:p-12 border border-[#E7E5E0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9A7049] font-bold">
              Sahakar Nagar Design Studio // Bengaluru
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917]">
              Ready to shape your plot or residence into a living story?
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm font-sans leading-relaxed">
              Book a 45-minute vision session with our Principal Architect. Bring your survey plot drawings, bylaws questions, or interior moodboards.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => onSelectServiceForConsultation('Comprehensive Architecture & Turnkey')}
              className="pill-cta-primary group cursor-pointer"
            >
              <span>Book Vision Session</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('estimator')}
              className="pill-cta-ghost cursor-pointer"
            >
              <span>Estimate Budget &rarr;</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
