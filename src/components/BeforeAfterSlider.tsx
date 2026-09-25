import React, { useState, useRef, useEffect } from 'react';
import { 
  ArrowLeftRight, 
  Sparkles, 
  MapPin, 
  Eye, 
  SlidersHorizontal, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Compass, 
  Building,
  Maximize2
} from 'lucide-react';

export interface TransformationStory {
  id: string;
  title: string;
  location: string;
  category: string;
  builtUpArea: string;
  timeline: string;
  challenge: string;
  solution: string;
  keyMetric: { value: string; label: string };
  materials: string[];
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export const REALISTIC_TRANSFORMATIONS: TransformationStory[] = [
  {
    id: "phoenix-kessaku",
    title: "Phoenix Kessaku Sora — Bare Shell to Zen Luxury Salon",
    location: "Rajajinagar, Bengaluru",
    category: "Turnkey High-End Interior",
    builtUpArea: "5,400 sq. ft. Duplex",
    timeline: "16 Weeks Turnkey Delivery",
    challenge: "Handed over by builder as an empty, echo-heavy concrete duplex shell with cold grey screed floors, chaotic overhead conduit wirings, and zero spatial zoning.",
    solution: "Engineered a double-height 22-foot Botticino fluted marble feature wall, integrated acoustic micro-perforated oak ceiling baffles, and installed a cantilevered floating staircase with concealed brass lighting.",
    keyMetric: { value: "+100%", label: "Acoustic Warmth & Zero Resonance" },
    materials: ["Botticino Marble", "Natural Teak & Smoked Oak", "Brushed Champagne Brass", "Circadian Cove Lighting"],
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    beforeLabel: "SITE HANDOVER: RAW CONCRETE SHELL",
    afterLabel: "COMPLETED: BESPOKE DUPLEX SALON"
  },
  {
    id: "courtyard-house",
    title: "The Courtyard House — Infill Plot to Sunlit Sanctuary",
    location: "Sahakarnagar, Bengaluru",
    category: "Villa Architecture & Turnkey Build",
    builtUpArea: "4,800 sq. ft. Independent Villa",
    timeline: "14 Months Ground-Up Delivery",
    challenge: "A tight 40x60 north-facing urban plot flanked by multistory residential walls on three sides, risking severe gloominess and lack of fresh natural ventilation.",
    solution: "Conceived an inward-facing bioclimatic plan centered around a two-story skylit open courtyard. Stack effect draws hot air up and cool air through water reflection coping.",
    keyMetric: { value: "+45%", label: "Natural Daylight Gain Across All Rooms" },
    materials: ["Sadarahalli Grey Granite", "Exposed Terracotta Jaali", "Burma Teak Louvers", "Low-E Double Glazing"],
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    afterImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85",
    beforeLabel: "FOUNDATION & FRAMEWORK: RAW RCC",
    afterLabel: "HANDOVER: BIOCLIMATIC COURTYARD VILLA"
  },
  {
    id: "sadashivanagar-estate",
    title: "Heritage Modernization — Load-Bearing to Open Pavilion",
    location: "Sadashivanagar, Bengaluru",
    category: "Structural Retrofit & Modernization",
    builtUpArea: "6,800 sq. ft. Estate Residence",
    timeline: "6 Months Structural Transformation",
    challenge: "A dark 1980s compartmentalized residence with claustrophobic low ceilings, damp internal brick masonry, and thick load-bearing partitions obstructing sunlight and garden views.",
    solution: "Undertook structural needle-beaming and inserted concealed structural steel portals to remove 4 load-bearing walls, creating a seamless 42-foot column-free living pavilion connecting into the terrace.",
    keyMetric: { value: "42 Ft", label: "Column-Free Clear Structural Span" },
    materials: ["Honed Roman Travertine", "Thermally Broken Slim Aluminium", "Acoustic Walnut Paneling", "Board-Formed Concrete"],
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    afterImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    beforeLabel: "ORIGINAL STATE: DARK BRICK PARTITIONS",
    afterLabel: "MODERNIZED: OPEN-SPAN GARDEN PAVILION"
  },
  {
    id: "koramangala-atelier",
    title: "Creative Executive Atelier — Industrial Shell to Warm Studio",
    location: "Koramangala 4th Block, Bengaluru",
    category: "Commercial Architecture & Interior",
    builtUpArea: "3,800 sq. ft. Studio",
    timeline: "8 Weeks Fast-Track Fitout",
    challenge: "Industrial concrete shell with raw fire sprinklers, exposed structural slab defects, uneven subflooring, and severe exterior street noise from Koramangala boulevard.",
    solution: "Installed 42dB double-glazed acoustic smoked glass suites, self-leveling terrazzo flooring with brass dividing strips, and custom ergonomic fluted oak work alcoves.",
    keyMetric: { value: "42 dB", label: "Acoustic Street-Noise Decibel Attenuation" },
    materials: ["Smoked Fluted Glass", "In-Situ Terrazzo with Brass", "American White Oak", "Acoustic PET Felt Baffles"],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1600&q=85",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    beforeLabel: "RAW COMMERCIAL SLAB & UTILITIES",
    afterLabel: "COMPLETED: HIGH-PERFORMANCE ATELIER"
  }
];

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'slider' | 'beforeOnly' | 'afterOnly'>('slider');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const current = REALISTIC_TRANSFORMATIONS[activeStoryIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(Math.round(percentage));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const effectivePosition = viewMode === 'beforeOnly' ? 100 : viewMode === 'afterOnly' ? 0 : sliderPosition;

  return (
    <section 
      id="transformations" 
      className="py-16 sm:py-24 bg-[#F8F7F4] text-stone-900 border-b border-[#E5E1D8] relative"
    >
      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Section Header: Nordic Luxury Architectural Typography */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E5E1D8] pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E1D8] text-[#8C6842] text-xs font-mono font-bold tracking-widest uppercase shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#8C6842]" />
              <span>CHAPTER 05 // REALISTIC SITE METAMORPHOSIS</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#141312] leading-tight">
              Before &amp; After Proof. <br className="hidden sm:inline" />
              <span className="italic text-[#8C6842] font-light">From Raw Site to Lived Memory.</span>
            </h2>
            
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Architecture isn&apos;t just pretty renderings—it is structural mastery, problem-solving, and disciplined execution. Drag the interactive split line to see actual transformation outcomes delivered in Bengaluru.
            </p>
          </div>

          {/* Project Story Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {REALISTIC_TRANSFORMATIONS.map((story, idx) => (
              <button
                key={story.id}
                onClick={() => {
                  setActiveStoryIndex(idx);
                  setSliderPosition(50);
                  setViewMode('slider');
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  activeStoryIndex === idx
                    ? 'bg-[#141312] text-[#F8F7F4] shadow-sm font-semibold'
                    : 'bg-white border border-[#E5E1D8] text-stone-700 hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: activeStoryIndex === idx ? '#8C6842' : '#D8D3C8' }} />
                <span>CASE 0{idx + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Current Story Context Dossier Card (Nordic Luxury) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E1D8] shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E5E1D8] pb-5">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase bg-[#F1EFEB] text-[#8C6842] border border-[#E5E1D8]">
                  {current.category}
                </span>
                <span className="text-stone-300 font-mono text-xs">&bull;</span>
                <span className="flex items-center gap-1.5 text-xs text-stone-600 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#8C6842]" />
                  {current.location}
                </span>
                <span className="text-stone-300 font-mono text-xs">&bull;</span>
                <span className="text-xs text-stone-600 font-mono font-medium">
                  {current.builtUpArea}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#141312] mt-2">
                {current.title}
              </h3>
            </div>

            {/* Metric Highlight Pill */}
            <div className="shrink-0 bg-[#F8F7F4] border border-[#E5E1D8] px-4 py-3 rounded-xl flex items-center gap-3">
              <div className="font-serif text-2xl sm:text-3xl font-semibold text-[#8C6842]">
                {current.keyMetric.value}
              </div>
              <div className="text-[10px] font-mono text-stone-600 max-w-[140px] uppercase leading-tight">
                {current.keyMetric.label}
              </div>
            </div>
          </div>

          {/* Architectural Challenge vs. Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-rose-800 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-700" />
                Raw Site Challenge
              </span>
              <p className="text-stone-700 font-sans">{current.challenge}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700" />
                Architectural Solution &amp; Execution
              </span>
              <p className="text-stone-700 font-sans">{current.solution}</p>
            </div>
          </div>

          {/* Materials Palette Tag Bar */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-[#E5E1D8] text-[11px] font-mono text-stone-500">
            <span className="uppercase text-stone-400 font-bold mr-1">Materials Specified:</span>
            {current.materials.map((mat) => (
              <span key={mat} className="px-2.5 py-1 rounded-md bg-[#F8F7F4] border border-[#E5E1D8] text-stone-800">
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Comparison View Mode Controller */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex rounded-xl p-1 bg-white border border-[#E5E1D8] shadow-2xs text-xs font-mono">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                viewMode === 'slider' ? 'bg-[#141312] text-white font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#8C6842]" />
              <span>Interactive Split</span>
            </button>
            <button
              onClick={() => setViewMode('beforeOnly')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'beforeOnly' ? 'bg-[#141312] text-white font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Raw Site (Before)
            </button>
            <button
              onClick={() => setViewMode('afterOnly')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'afterOnly' ? 'bg-[#141312] text-white font-medium' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Completed Space (After)
            </button>
          </div>

          <div className="text-xs font-mono text-stone-500 flex items-center gap-2">
            <span className="hidden sm:inline">Timeline:</span>
            <span className="px-2.5 py-1 rounded bg-white border border-[#E5E1D8] text-stone-800 font-semibold">
              {current.timeline}
            </span>
          </div>
        </div>

        {/* Draggable Interactive Comparison Stage */}
        <div 
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full h-[400px] sm:h-[540px] lg:h-[620px] rounded-3xl overflow-hidden shadow-md select-none cursor-ew-resize border border-[#E5E1D8] bg-stone-100"
        >
          {/* After Image (Background: Full Width) */}
          <img 
            src={current.afterImage} 
            alt={current.afterLabel} 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* After Label (Right Side) */}
          <div className="absolute top-5 right-5 z-10 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-[#141312] text-xs font-mono font-bold tracking-wider border border-[#E5E1D8] shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>{current.afterLabel}</span>
          </div>

          {/* Before Image (Clipped Overlay with matching dimensions) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none transition-[width] duration-75"
            style={{ width: `${effectivePosition}%` }}
          >
            <img 
              src={current.beforeImage} 
              alt={current.beforeLabel} 
              className="absolute inset-0 h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw' }}
            />
            {/* Before Label (Left Side) */}
            <div className="absolute top-5 left-5 z-10 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-stone-900 text-xs font-mono font-bold tracking-wider border border-[#E5E1D8] shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              <span>{current.beforeLabel}</span>
            </div>
          </div>

          {/* Divider Line & Center Control Handle (only in slider mode) */}
          {viewMode === 'slider' && (
            <div 
              className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)] z-20 pointer-events-none"
              style={{ left: `${effectivePosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-[#141312] border-2 border-[#8C6842] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                <ArrowLeftRight className="w-5 h-5 text-[#8C6842]" />
              </div>
            </div>
          )}

          {/* Bottom helper prompt */}
          <div className="absolute bottom-5 inset-x-0 flex justify-center pointer-events-none">
            <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-stone-800 text-xs font-mono flex items-center gap-2 border border-[#E5E1D8] shadow-sm">
              <Eye className="w-3.5 h-3.5 text-[#8C6842]" />
              <span>Drag left or right to inspect execution quality</span>
            </span>
          </div>
        </div>

        {/* Accessible Percentage Range Slider */}
        <div className="max-w-md mx-auto space-y-2 text-center">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={effectivePosition} 
            onChange={(e) => {
              setViewMode('slider');
              setSliderPosition(Number(e.target.value));
            }}
            aria-label="Comparison slider position"
            className="w-full accent-[#8C6842] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] font-mono text-stone-600">
            <span>&larr; Raw Site Shell ({effectivePosition}%)</span>
            <span className="text-stone-400">Drag to compare</span>
            <span>Completed Architecture &rarr;</span>
          </div>
        </div>

      </div>
    </section>
  );
};
