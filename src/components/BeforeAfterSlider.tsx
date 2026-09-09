import React, { useState, useRef } from 'react';
import { ArrowLeftRight, Sparkles, MapPin, Eye } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const stories = [
    {
      title: "Phoenix Kessaku Sora — Duplex Living Room",
      location: "Rajajinagar, Bengaluru",
      category: "Turnkey Luxury Interior",
      description: "From a bare-shell concrete floor to a 22-foot fluted Botticino marble wall and cantilevered floating walnut staircase.",
      beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      beforeLabel: "Site Handover: Raw Penthouse Shell",
      afterLabel: "Completed: Bespoke Zen Luxury"
    },
    {
      title: "Oasis Redefined — Estate Architecture",
      location: "Andhra Pradesh",
      category: "Villa Architecture & Landscape",
      description: "Transforming an arid rocky terrain into a climate-responsive sanctuary with integrated water reflection courts.",
      beforeImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      beforeLabel: "Site Condition: Arid Topography",
      afterLabel: "Completed: Travertine Microclimate Oasis"
    },
    {
      title: "Phoenix One West — High-Rise Living",
      location: "Bengaluru, Karnataka",
      category: "Penthouse Architecture & Interiors",
      description: "From empty high-rise shell to open-concept salon with Nero Marquina marble cocktail bar and circadian lighting.",
      beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
      afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      beforeLabel: "Initial Builder Handover",
      afterLabel: "Completed: Art-Deco Skyline Residence"
    }
  ];

  const current = stories[activeStoryIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="transformations" className="py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              <Sparkles className="w-3.5 h-3.5" />
              Real Site Transformations
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Before & After Visual Proof
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Drag the interactive slider to see how Build Storys turns raw architectural structures into finished, livable works of art.
            </p>
          </div>

          {/* Project Switcher */}
          <div className="flex flex-wrap gap-2">
            {stories.map((s, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveStoryIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeStoryIndex === idx
                    ? 'bg-[#1A1E24] text-white shadow-xs font-semibold'
                    : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
                }`}
              >
                Story {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Current Story Context Card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-lg border border-stone-200 shadow-2xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg font-bold text-stone-900">{current.title}</span>
              <span className="text-stone-400">&bull;</span>
              <span className="flex items-center gap-1 text-xs text-stone-500 font-mono">
                <MapPin className="w-3 h-3 text-[#B89366]" />
                {current.location}
              </span>
            </div>
            <p className="text-xs text-stone-600 mt-1">{current.description}</p>
          </div>
          <span className="text-xs font-mono text-[#B89366] bg-[#B89366]/10 px-2.5 py-1 rounded shrink-0">
            {current.category}
          </span>
        </div>

        {/* Draggable Interactive Comparison Stage */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={(e) => handleMove(e.clientX)}
          className="relative w-full h-[380px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-xl select-none cursor-ew-resize border border-stone-300 bg-stone-900"
        >
          {/* After Image (Background) */}
          <img 
            src={current.afterImage} 
            alt="Completed space after execution" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* After Label */}
          <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-md bg-stone-900/80 backdrop-blur-md text-white text-xs font-mono tracking-wider border border-white/20">
            {current.afterLabel}
          </div>

          {/* Before Image (Clipped Overlay) */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={current.beforeImage} 
              alt="Raw space before execution" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
            />
            {/* Before Label */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md bg-stone-900/80 backdrop-blur-md text-stone-200 text-xs font-mono tracking-wider border border-white/20">
              {current.beforeLabel}
            </div>
          </div>

          {/* Divider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#1A1E24] text-[#C5A880] border-2 border-white flex items-center justify-center shadow-2xl">
              <ArrowLeftRight className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom helper prompt */}
          <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
            <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-stone-300 text-xs font-mono flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#C5A880]" />
              Drag left or right to reveal transformation
            </span>
          </div>
        </div>

        {/* Range Slider for Accessibility */}
        <div className="max-w-md mx-auto space-y-2 text-center">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPosition} 
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            aria-label="Comparison slider position"
            className="w-full accent-[#B89366] cursor-pointer"
          />
          <div className="flex justify-between text-[11px] font-mono text-stone-500">
            <span>&larr; Raw Site</span>
            <span>{sliderPosition}% Split</span>
            <span>Completed &rarr;</span>
          </div>
        </div>

      </div>
    </section>
  );
};
