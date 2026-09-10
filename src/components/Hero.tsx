import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown, Pause, Play, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
  onExploreProcess: () => void;
  onSelectDiscipline?: (discipline: string) => void;
}

const HERO_FILM = '/video/architecture-hero.mp4';
const HERO_POSTER = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=3840&q=95';

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreProjects,
  onSelectDiscipline
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleDisciplineClick = (disciplineKey: string) => {
    if (onSelectDiscipline) {
      onSelectDiscipline(disciplineKey);
    } else {
      onExploreProjects();
    }
  };

  return (
    <section 
      id="hero-stage"
      className="relative min-h-[92vh] lg:min-h-[96vh] bg-[#050505] text-white overflow-hidden flex flex-col justify-between"
      aria-label="Build Storys Architecture & Interiors Hero"
    >
      {/* 1. Cinematic Background Video Film Plate */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src={HERO_POSTER}
          alt="Atmospheric architectural light and material craft"
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105"
        />

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={HERO_POSTER}
          onCanPlay={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-85' : 'opacity-0'
          }`}
        >
          <source src={HERO_FILM} type="video/mp4" />
        </video>

        {/* Dual Gradient Masks */}
        {/* Left / Side letterbox gradient to ensure high readability */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.85)_0%,rgba(5,5,5,0.45)_45%,rgba(5,5,5,0.15)_100%)]" />

        {/* Bottom 9-stop architectural fade into the lower stage */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.3)_0%,rgba(5,5,5,0.05)_30%,rgba(5,5,5,0.25)_55%,rgba(5,5,5,0.6)_72%,rgba(5,5,5,0.88)_86%,rgba(5,5,5,0.98)_95%,#050505_100%)]" />

        {/* Film grain subtle overlay */}
        <div className="hero-film-grain absolute inset-0 opacity-[0.14]" />
      </div>

      {/* 2. Main Stage Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-8 flex-1 flex flex-col justify-between">
        
        {/* Top Eyebrow & Headline block */}
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow discipline badge */}
          <div className="hero-reveal inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E7CAA5] text-[11px] font-mono uppercase tracking-[0.24em]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
            <span>Architecture &bull; Interiors &bull; Turnkey</span>
          </div>

          {/* Two-line Display Headline */}
          <h1 className="hero-reveal hero-delay-1 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[0.96]">
            Spaces That Inspire.
            <span className="block font-serif italic font-light text-[#E7CAA5] mt-1 sm:mt-2">
              Stories That Endure.
            </span>
          </h1>

          {/* Subcopy */}
          <p className="hero-reveal hero-delay-2 max-w-xl text-stone-300 text-sm sm:text-base md:text-lg leading-relaxed font-sans font-light">
            Bespoke residential &amp; commercial environments tailored to human proportion, site light, and timeless material craft. Sahakar Nagar, Bengaluru.
          </p>

          {/* Action Button Pair */}
          <div className="hero-reveal hero-delay-3 pt-2 flex flex-wrap items-center gap-4">
            <button
              id="hero-start-project-btn"
              onClick={onOpenConsultation}
              className="pill-cta-primary group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 text-stone-900 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              id="hero-view-projects-btn"
              onClick={onExploreProjects}
              className="pill-cta-ghost group cursor-pointer"
            >
              <span>View Selected Works</span>
              <ArrowRight className="w-4 h-4 text-stone-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Middle / Lower Stats & Film Controls Bar */}
        <div className="hero-reveal hero-delay-3 pt-8 pb-4 flex flex-wrap items-end justify-between gap-6 border-b border-white/15">
          {/* Key studio metrics */}
          <div className="flex items-center gap-6 sm:gap-12">
            <div>
              <div className="font-serif text-2xl sm:text-3xl text-[#E7CAA5] font-light">
                {COMPANY_PROFILE.experienceYears}+
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-400 mt-0.5">
                Years of Craft
              </div>
            </div>

            <div className="h-8 w-px bg-white/15" />

            <div>
              <div className="font-serif text-2xl sm:text-3xl text-[#E7CAA5] font-light">
                {COMPANY_PROFILE.projectsCompleted}+
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-400 mt-0.5">
                Spaces Delivered
              </div>
            </div>

            <div className="h-8 w-px bg-white/15 hidden sm:block" />

            <div className="hidden sm:block">
              <div className="font-serif text-2xl sm:text-3xl text-[#E7CAA5] font-light">
                01
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-stone-400 mt-0.5">
                Integrated Studio
              </div>
            </div>
          </div>

          {/* Film Controls & Scroll Cue */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSound}
              className="film-control cursor-pointer"
              title={isMuted ? 'Unmute Film' : 'Mute Film'}
              aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#C5A880]" />}
            </button>

            <button
              onClick={togglePlayback}
              className="film-control cursor-pointer"
              title={isPlaying ? 'Pause Film' : 'Play Film'}
              aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#C5A880]" />}
            </button>

            <button
              onClick={onExploreProjects}
              className="hidden sm:inline-flex items-center gap-2 pl-3 text-xs font-mono uppercase tracking-widest text-stone-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#C5A880] animate-bounce" />
            </button>
          </div>
        </div>

        {/* 3. Bottom Architectural Expertise Strip */}
        <div className="pt-6">
          <div className="text-[10px] font-mono tracking-[0.28em] uppercase text-stone-400 mb-3 flex items-center gap-2">
            <span className="w-4 h-px bg-[#C5A880]/60" />
            <span>Core Architectural Disciplines</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {/* 1. Architecture */}
            <button
              id="hero-disc-architecture"
              onClick={() => handleDisciplineClick('architecture')}
              className="group p-3 sm:p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#C5A880]/60 backdrop-blur-md text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880] group-hover:scale-110 group-hover:border-[#C5A880] transition-all">
                {/* Monoline blueprint house & plumb SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V20h14V9.5" />
                  <path d="M12 3v17" strokeDasharray="2 2" strokeWidth="1" />
                  <path d="M9 20v-5h6v5" />
                </svg>
              </div>
              <div className="overflow-hidden">
                <div className="font-mono text-[10px] text-stone-400 group-hover:text-[#C5A880] tracking-wider uppercase transition-colors">
                  Discipline 01
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-white truncate">
                  Architecture
                </div>
              </div>
            </button>

            {/* 2. Interiors */}
            <button
              id="hero-disc-interiors"
              onClick={() => handleDisciplineClick('interiors')}
              className="group p-3 sm:p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#C5A880]/60 backdrop-blur-md text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880] group-hover:scale-110 group-hover:border-[#C5A880] transition-all">
                {/* Monoline architectural armchair SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 19v2" />
                  <path d="M18 19v2" />
                  <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6H4v-6z" />
                  <path d="M6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
                  <line x1="9" y1="13" x2="15" y2="13" />
                </svg>
              </div>
              <div className="overflow-hidden">
                <div className="font-mono text-[10px] text-stone-400 group-hover:text-[#C5A880] tracking-wider uppercase transition-colors">
                  Discipline 02
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-white truncate">
                  Interiors
                </div>
              </div>
            </button>

            {/* 3. Turnkey */}
            <button
              id="hero-disc-turnkey"
              onClick={() => handleDisciplineClick('turnkey')}
              className="group p-3 sm:p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#C5A880]/60 backdrop-blur-md text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880] group-hover:scale-110 group-hover:border-[#C5A880] transition-all">
                {/* Monoline key & caliper precision SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-1.5 1.5L14 9" />
                  <path d="M15.5 4.5l3 3" />
                  <circle cx="7.5" cy="15.5" r="5.5" />
                  <path d="M7.5 13.5v4" />
                  <path d="M5.5 15.5h4" />
                </svg>
              </div>
              <div className="overflow-hidden">
                <div className="font-mono text-[10px] text-stone-400 group-hover:text-[#C5A880] tracking-wider uppercase transition-colors">
                  Discipline 03
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-white truncate">
                  Turnkey
                </div>
              </div>
            </button>

            {/* 4. Styling / Curation */}
            <button
              id="hero-disc-styling"
              onClick={() => handleDisciplineClick('styling')}
              className="group p-3 sm:p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#C5A880]/60 backdrop-blur-md text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-lg bg-black/40 border border-white/10 flex items-center justify-center shrink-0 text-[#C5A880] group-hover:scale-110 group-hover:border-[#C5A880] transition-all">
                {/* Monoline faceted curation diamond / sparkle SVG */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
              <div className="overflow-hidden">
                <div className="font-mono text-[10px] text-stone-400 group-hover:text-[#C5A880] tracking-wider uppercase transition-colors">
                  Discipline 04
                </div>
                <div className="font-sans text-xs sm:text-sm font-semibold text-white truncate">
                  Styling &amp; Art
                </div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
