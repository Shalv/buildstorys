import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreProjects: () => void;
  onExploreProcess: () => void;
}

const HERO_FILM = '/video/architecture-hero.mp4';
const HERO_POSTER = 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=3840&q=95';

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreProjects }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play(); setIsPlaying(true); }
    else { video.pause(); setIsPlaying(false); }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="hero-cinema relative min-h-[calc(100svh-108px)] bg-[#0a0b0b] text-white overflow-hidden" aria-label="Build Storys introduction">
      <div className="absolute inset-0">
        <img src={HERO_POSTER} alt="Contemporary luxury residence designed around light and landscape" className="h-full w-full object-cover" />
        <video ref={videoRef} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay muted loop playsInline preload="metadata" poster={HERO_POSTER} onCanPlay={() => setLoaded(true)}>
          <source src={HERO_FILM} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,.82)_0%,rgba(5,7,7,.38)_52%,rgba(5,7,7,.16)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,7,.25)_0%,transparent_38%,rgba(5,7,7,.78)_100%)]" />
        <div className="hero-film-grain absolute inset-0 opacity-[.09] pointer-events-none" />
      </div>

      <div className="relative z-10 min-h-[calc(100svh-108px)] max-w-[1600px] mx-auto px-5 sm:px-10 lg:px-16 flex flex-col justify-between">
        <div className="pt-[12vh] lg:pt-[15vh] max-w-5xl">
          <div className="hero-reveal flex items-center gap-4 text-[11px] sm:text-xs uppercase tracking-[.32em] text-[#e1c29b] font-mono">
            <span className="h-px w-10 bg-[#d5ae7a]" /> Architecture · Interiors · Turnkey
          </div>
          <h1 className="hero-reveal hero-delay-1 mt-6 font-serif text-[clamp(3.2rem,8.5vw,8.5rem)] font-normal leading-[.82] tracking-[-.045em] max-w-6xl">
            Spaces that live.<span className="block ml-[8vw] italic font-light text-[#e7caa5]">Storys that last.</span>
          </h1>
          <div className="hero-reveal hero-delay-2 mt-8 lg:mt-12 flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-20">
            <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/75">{COMPANY_PROFILE.heroSupportingStatement}</p>
            <div className="flex flex-wrap gap-3">
              <button onClick={onOpenConsultation} className="premium-cta group">Start a project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></button>
              <button onClick={onExploreProjects} className="premium-cta premium-cta--ghost">View selected work</button>
            </div>
          </div>
        </div>
        <div className="hero-reveal hero-delay-3 py-6 sm:py-8 border-t border-white/20 flex items-end justify-between gap-5">
          <div className="flex gap-8 sm:gap-14">
            {[[COMPANY_PROFILE.experienceYears, 'Years of craft'], [COMPANY_PROFILE.projectsCompleted, 'Spaces delivered'], ['01', 'Integrated studio']].map(([value, label]) => (
              <div key={label} className="hidden sm:block"><div className="font-serif text-2xl text-[#e7caa5]">{value}</div><div className="mt-1 text-[10px] uppercase tracking-[.22em] text-white/55">{label}</div></div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={toggleSound} className="film-control" aria-label={isMuted ? 'Unmute background film' : 'Mute background film'}>{isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}</button>
            <button onClick={togglePlayback} className="film-control" aria-label={isPlaying ? 'Pause background film' : 'Play background film'}>{isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</button>
            <button onClick={onExploreProjects} className="ml-2 flex items-center gap-3 text-[10px] uppercase tracking-[.25em] text-white/70 hover:text-white transition-colors">Explore <ArrowDown className="w-4 h-4 animate-bounce" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};
