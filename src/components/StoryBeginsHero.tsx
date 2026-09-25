import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ArrowDown, 
  Pause, 
  Play, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Layers, 
  Maximize2, 
  RotateCcw,
  Compass,
  CheckCircle2,
  Calendar,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

interface StoryBeginsHeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
  onExploreProcess: () => void;
  onSelectDiscipline?: (discipline: string) => void;
  artDirection?: 'material-memory' | 'architectural-cinema' | 'living-gallery';
}

interface GenesisStage {
  id: string;
  stepNumber: string;
  title: string;
  subTitle: string;
  editorialQuote: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  materialTag: string;
  architecturalNotation: string;
  accentColor: string;
}

const GENESIS_STAGES: GenesisStage[] = [
  {
    id: 'idea',
    stepNumber: '01',
    title: 'THE IDEA',
    subTitle: 'Intention & Charcoal Line',
    editorialQuote: 'A single hand-drawn line carves volume out of silence and sun.',
    mediaUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=90',
    mediaType: 'image',
    materialTag: 'Charcoal on 180gsm Tracing Parchment',
    architecturalNotation: 'GRID REF: 01-A // ORIENTATION: +12° NORTHEAST',
    accentColor: '#9C4A28' // Burnt Terracotta
  },
  {
    id: 'material',
    stepNumber: '02',
    title: 'RAW MATERIAL',
    subTitle: 'Stone, Timber & Honest Earth',
    editorialQuote: 'Sadarahalli granite, hand-cut teak, and sand-cast brass waiting for purpose.',
    mediaUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2400&q=90',
    mediaType: 'image',
    materialTag: 'Honed Bangalore Granite · Reclaimed Teak · Raw Brass',
    architecturalNotation: 'TEXTURE SPEC: MOHS 6.5 // THERMAL MASS ACTIVE',
    accentColor: '#8C6842' // Patinated Nordic Bronze
  },
  {
    id: 'structure',
    stepNumber: '03',
    title: 'THE STRUCTURE',
    subTitle: 'Lines Become Walls',
    editorialQuote: 'Disciplined engineering balances gravity, creating shelter open to wind and light.',
    mediaUrl: '/video/architecture-hero.mp4',
    mediaType: 'video',
    materialTag: 'Board-Formed Concrete & Post-Tensioned Slabs',
    architecturalNotation: 'SPAN: 8.40m BEAMLESS // BIOCLIMATIC LUNG',
    accentColor: '#737069' // Smoked Basalt
  },
  {
    id: 'memory',
    stepNumber: '04',
    title: 'LIVING MEMORY',
    subTitle: 'Where Life Happens',
    editorialQuote: 'Morning shadows fall across the courtyard. The architecture recedes; the story lives.',
    mediaUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
    mediaType: 'image',
    materialTag: 'The Courtyard House · Completed Residence, Bengaluru',
    architecturalNotation: 'STATUS: INHABITED // 4,800 SQ. FT. DELIVERED',
    accentColor: '#A67C52' // Champagne Bronze
  }
];

export const StoryBeginsHero: React.FC<StoryBeginsHeroProps> = ({
  onOpenConsultation,
  onExploreProjects,
  onExploreProcess,
  onSelectDiscipline,
  artDirection = 'material-memory'
}) => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoPlayTimerRef = useRef<any>(null);

  // Check system prefers-reduced-motion
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsReducedMotion(true);
      setIsAutoplay(false);
    }
  }, []);

  const activeStage = GENESIS_STAGES[currentStageIdx];

  // Stage transition timer
  useEffect(() => {
    if (!isAutoplay || isReducedMotion) return;

    const intervalTime = 6000; // 6 seconds per stage
    const tickTime = 60;
    let elapsed = 0;

    const interval = setInterval(() => {
      elapsed += tickTime;
      setProgress((elapsed / intervalTime) * 100);

      if (elapsed >= intervalTime) {
        setProgress(0);
        setCurrentStageIdx((prev) => (prev + 1) % GENESIS_STAGES.length);
      }
    }, tickTime);

    return () => clearInterval(interval);
  }, [currentStageIdx, isAutoplay, isReducedMotion]);

  const handleSelectStage = (idx: number) => {
    setCurrentStageIdx(idx);
    setProgress(0);
  };

  const toggleAutoplay = () => {
    setIsAutoplay((prev) => !prev);
    setProgress(0);
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section 
      id="exhibition-genesis-hero"
      className="relative min-h-[94vh] lg:min-h-[96vh] bg-[#FAF8F5] text-stone-900 overflow-hidden flex flex-col justify-between blueprint-grid-light"
      aria-label="Build Storys Architectural Genesis Hero"
    >
      {/* 1. Cinematic Background Layer with Tactile Material Dissolve */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Render each stage's media with smooth crossfade */}
        {GENESIS_STAGES.map((stage, idx) => {
          const isActive = idx === currentStageIdx;
          return (
            <div
              key={stage.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {stage.mediaType === 'video' && !isReducedMotion ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90"
                  className="w-full h-full object-cover scale-105"
                >
                  <source src={stage.mediaUrl} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={stage.mediaUrl}
                  alt={stage.title}
                  className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] ease-linear"
                  style={{
                    transform: isActive && !isReducedMotion ? 'scale(1.08)' : 'scale(1.02)'
                  }}
                />
              )}
            </div>
          );
        })}

        {/* Luminous Architectural Daylight Scrims */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(250,248,245,0.97)_0%,rgba(250,248,245,0.85)_46%,rgba(250,248,245,0.3)_100%)]" />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(250,248,245,0.4)_0%,transparent_35%,rgba(250,248,245,0.88)_82%,#FAF8F5_100%)]" />

        {/* Architectural Film Grain & Grid Overlay */}
        <div className="hero-film-grain absolute inset-0 opacity-[0.08] z-10" />

        {/* Technical Blueprint drafting lines */}
        <div className="absolute top-12 right-12 z-20 hidden lg:block font-mono text-[10px] text-stone-600">
          <div className="border border-stone-300 p-3 rounded-xl bg-white/85 backdrop-blur-md space-y-1 shadow-xs">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9A7049]" />
              <span className="font-bold text-stone-800">ATELIER SPECIFICATION // BS-2026</span>
            </div>
            <div>BENGALURU: 13.0624° N, 77.5855° E</div>
            <div>ELEVATION: 920M ABOVE MSL &bull; BBMP ZONING</div>
          </div>
        </div>
      </div>

      {/* 2. Top Exhibition Notation & Coordinates */}
      <div className="relative z-20 w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-10 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E1D8] text-[#8C6842] font-mono text-[10px] tracking-widest uppercase font-bold shadow-2xs">
            CHAPTER 01 // GENESIS
          </span>
          <span className="text-stone-600 text-[11px] hidden sm:inline">
            From raw elements to where life happens.
          </span>
        </div>

        {/* Reduced motion & Still switch */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsReducedMotion(prev => !prev)}
            className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase border transition-all flex items-center gap-1.5 shadow-2xs ${
              isReducedMotion 
                ? 'bg-[#141312] text-white border-[#141312]' 
                : 'bg-white/90 text-stone-700 border-[#E5E1D8] hover:border-stone-500'
            }`}
            title="Toggle Still Image Mode / Reduced Motion"
          >
            <SlidersHorizontal className="w-3 h-3 text-[#8C6842]" />
            <span className="hidden xs:inline">{isReducedMotion ? 'Still Mode (Active)' : 'Cinematic Motion'}</span>
          </button>
        </div>
      </div>

      {/* 3. Main Stage Content: Striking Editorial Typography */}
      <div className="relative z-20 w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl space-y-6">
          
          {/* Eyebrow with current genesis stage */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E5E1D8] text-[#8C6842] text-[11px] font-mono uppercase tracking-[0.2em] shadow-2xs">
            <span 
              className="w-2 h-2 rounded-full transition-colors duration-500" 
              style={{ backgroundColor: activeStage.accentColor }}
            />
            <span className="font-bold">
              STAGE {activeStage.stepNumber} &bull; {activeStage.title}
            </span>
          </div>

          {/* Master Display Headline: "Spaces become stories." */}
          <div className="space-y-1">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#141312] leading-[0.94]">
              Spaces become
              <span className="block font-serif italic font-light text-[#8C6842] mt-1">
                stories.
              </span>
            </h1>
          </div>

          {/* Editorial Subline & Active Stage Narrative */}
          <div className="max-w-xl space-y-3">
            <p className="text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light">
              Every home begins with raw elements—stone, timber, light, lines and human intention—and transforms into a place where life happens.
            </p>

            {/* Tactile Material Annotation Card */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E1D8] shadow-xs flex items-start gap-3">
              <div 
                className="w-1.5 h-10 rounded-full shrink-0" 
                style={{ backgroundColor: activeStage.accentColor }} 
              />
              <div className="space-y-0.5 text-xs font-mono">
                <div className="text-stone-900 font-bold uppercase tracking-wider">
                  {activeStage.subTitle}
                </div>
                <div className="text-stone-600 italic font-sans text-xs">
                  “{activeStage.editorialQuote}”
                </div>
                <div className="text-[10px] text-stone-500 font-mono pt-1">
                  SPEC: {activeStage.materialTag}
                </div>
              </div>
            </div>
          </div>

          {/* Primary High-Conversion Action Button Pair */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="pill-cta-primary group cursor-pointer"
            >
              <span>Begin Architectural Consultation</span>
              <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreProjects}
              className="pill-cta-ghost group cursor-pointer"
            >
              <span>Enter Exhibition Rooms (250+)</span>
              <ArrowDown className="w-4 h-4 text-[#8C6842] transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* 4. Bottom Interactive 4-Phase Genesis Scrubber & Studio Benchmark */}
      <div className="relative z-20 w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 pb-8 space-y-4">
        
        {/* The 4-Phase Progress Indicator Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          {GENESIS_STAGES.map((stg, idx) => {
            const isCurrent = idx === currentStageIdx;
            return (
              <button
                key={stg.id}
                onClick={() => handleSelectStage(idx)}
                className={`group text-left p-3.5 rounded-2xl border backdrop-blur-md transition-all relative overflow-hidden cursor-pointer ${
                  isCurrent
                    ? 'bg-white border-[#8C6842] ring-2 ring-[#8C6842]/30 shadow-md'
                    : 'bg-white/80 border-[#E5E1D8] hover:border-stone-400 hover:bg-white shadow-2xs'
                }`}
              >
                {/* Active linear timer progress bar */}
                {isCurrent && isAutoplay && !isReducedMotion && (
                  <div
                    className="absolute top-0 left-0 bottom-0 bg-[#8C6842]/10 transition-all duration-75 pointer-events-none"
                    style={{ width: `${progress}%` }}
                  />
                )}

                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-stone-500 mb-1">
                  <span className={isCurrent ? 'text-[#9A7049] font-bold' : ''}>
                    PHASE {stg.stepNumber}
                  </span>
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: stg.accentColor }} />
                  )}
                </div>

                <div className="relative z-10 font-serif text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#9A7049] transition-colors truncate">
                  {stg.title}
                </div>

                <div className="relative z-10 text-[10px] font-mono text-stone-500 truncate mt-0.5">
                  {stg.subTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Lower Meta Bar: Studio Proof & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-stone-200 text-xs font-mono text-stone-600">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[#8C6842] font-serif text-xl font-bold">15+</span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-sans font-medium">Years Practice</span>
            </div>

            <div className="w-px h-4 bg-stone-300" />

            <div className="flex items-center gap-2">
              <span className="text-[#8C6842] font-serif text-xl font-bold">250+</span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-sans font-medium">Spaces Delivered</span>
            </div>

            <div className="w-px h-4 bg-stone-300 hidden sm:block" />

            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[#8C6842] font-serif text-lg font-bold">Sahakar Nagar</span>
              <span className="text-[10px] uppercase tracking-wider text-stone-500 font-sans font-medium">Bengaluru Atelier</span>
            </div>
          </div>

          {/* Autoplay & Audio Controls */}
          <div className="flex items-center gap-2">
            {!isReducedMotion && (
              <button
                onClick={toggleAutoplay}
                className="film-control !w-8 !h-8"
                title={isAutoplay ? 'Pause Genesis Sequence' : 'Autoplay Genesis Sequence'}
              >
                {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#8C6842]" />}
              </button>
            )}

            {activeStage.mediaType === 'video' && !isReducedMotion && (
              <button
                onClick={toggleSound}
                className="film-control !w-8 !h-8"
                title={isMuted ? 'Unmute Soundscape' : 'Mute Soundscape'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#8C6842]" />}
              </button>
            )}

            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 text-[11px] font-mono tracking-wider uppercase transition-colors shadow-2xs"
            >
              <span>Scroll to Exhibition</span>
              <ArrowDown className="w-3 h-3 text-[#8C6842]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
