import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Pause, Play, Volume2, VolumeX } from 'lucide-react';

export interface VideoHeroBannerProps {
  videoSrc: string;
  fallbackVideoSrc?: string;
  poster: string;
  badge?: string;
  title: string;
  italicTitle?: string;
  description: string;
  breadcrumbs?: Array<{ label: string; action?: () => void }>;
  metrics?: Array<{ value: string; label: string }>;
  primaryCta?: { text: string; action: () => void };
  secondaryCta?: { text: string; action: () => void };
  overlayOpacity?: string;
}

const deriveChapter = (title: string) => {
  const text = title.toLowerCase();
  if (text.includes('architecture') || text.includes('purpose')) return { no: '01', label: 'Form / Place', notes: ['Context', 'Light', 'Proportion'] };
  if (text.includes('service') || text.includes('craft')) return { no: '02', label: 'Material / Detail', notes: ['Architecture', 'Interiors', 'Turnkey'] };
  if (text.includes('project') || text.includes('portfolio')) return { no: '03', label: 'Selected / Work', notes: ['Residential', 'Commercial', 'Industrial'] };
  if (text.includes('process') || text.includes('way')) return { no: '04', label: 'Method / Making', notes: ['Understand', 'Envision', 'Execute'] };
  if (text.includes('transform')) return { no: '05', label: 'Before / After', notes: ['Potential', 'Intervention', 'Experience'] };
  if (text.includes('cost') || text.includes('estimate')) return { no: '06', label: 'Scope / Clarity', notes: ['Area', 'Budget', 'Timeline'] };
  if (text.includes('trust') || text.includes('association')) return { no: '07', label: 'Built / Trust', notes: ['Partnership', 'Quality', 'Continuity'] };
  if (text.includes('client') || text.includes('remember')) return { no: '08', label: 'Voices / Memory', notes: ['Listen', 'Collaborate', 'Deliver'] };
  if (text.includes('insight') || text.includes('journal')) return { no: '09', label: 'Field / Notes', notes: ['Ideas', 'Materials', 'Living'] };
  if (text.includes('contact') || text.includes('conversation')) return { no: '10', label: 'Begin / Here', notes: ['Visit', 'Call', 'Brief'] };
  return { no: '00', label: 'Build / Storys', notes: ['Clarity', 'Craft', 'Character'] };
};

export const VideoHeroBanner: React.FC<VideoHeroBannerProps> = ({
  videoSrc, fallbackVideoSrc = '/video/architecture-hero.mp4', poster, badge = 'BUILD STORYS',
  title, italicTitle, description, breadcrumbs, metrics, primaryCta, secondaryCta
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const chapter = useMemo(() => deriveChapter(title), [title]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) { video.play().catch(() => undefined); setIsPlaying(true); }
    else { video.pause(); setIsPlaying(false); }
  };
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="chapter-hero relative min-h-[72svh] lg:min-h-[82svh] bg-[#090b0b] text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={poster} alt="" className="h-full w-full object-cover scale-[1.03]" />
        <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={poster}
          onCanPlay={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <source src={videoSrc} type="video/mp4" />
          {fallbackVideoSrc && <source src={fallbackVideoSrc} type="video/mp4" />}
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,7,.86)_0%,rgba(5,7,7,.44)_52%,rgba(5,7,7,.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,7,.18),transparent_45%,rgba(5,7,7,.9))]" />
        <div className="architectural-grain absolute inset-0 opacity-[.1]" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 hidden xl:flex w-20 border-r border-white/15 items-center justify-center">
        <span className="-rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[.42em] text-white/50">{chapter.label} · Bengaluru</span>
      </div>

      <div className="relative z-10 max-w-[1500px] min-h-[72svh] lg:min-h-[82svh] mx-auto px-5 sm:px-10 xl:px-28 py-8 lg:py-12 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[.22em] text-white/55">
            {breadcrumbs?.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                {index > 0 && <ChevronRight className="w-3 h-3 text-[#d1ad7e]" />}
                {crumb.action ? <button onClick={crumb.action} className="hover:text-white transition-colors">{crumb.label}</button> : <span className="text-[#e4c399]">{crumb.label}</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="text-right">
            <div className="font-serif text-5xl sm:text-7xl leading-none text-white/15">{chapter.no}</div>
            <div className="mt-1 text-[9px] uppercase tracking-[.3em] text-[#d1ad7e]">Chapter</div>
          </div>
        </div>

        <div className="max-w-5xl py-12">
          <div className="chapter-reveal flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[.3em] text-[#e4c399]">
            <span className="w-10 h-px bg-[#d1ad7e]" /> {badge.replace(/^\/\/\s*/, '')}
          </div>
          <h1 className="chapter-reveal chapter-delay-1 mt-6 font-serif text-[clamp(3.2rem,7vw,7.4rem)] leading-[.88] tracking-[-.04em] font-normal max-w-5xl">
            {title}
            {italicTitle && <span className="block ml-[7vw] italic text-[#e8cda8] font-light">{italicTitle}</span>}
          </h1>
          <div className="chapter-reveal chapter-delay-2 mt-8 lg:mt-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <p className="lg:col-span-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">{description}</p>
            <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
              {primaryCta && <button onClick={primaryCta.action} className="premium-cta group">{primaryCta.text}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></button>}
              {secondaryCta && <button onClick={secondaryCta.action} className="premium-cta premium-cta--ghost">{secondaryCta.text}</button>}
            </div>
          </div>
        </div>

        <div className="chapter-reveal chapter-delay-3 border-t border-white/20 pt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {(metrics?.slice(0, 3) || chapter.notes.map((label, i) => ({ value: `0${i + 1}`, label }))).map((metric) => (
              <div key={metric.label} className="min-w-24">
                <div className="font-serif text-2xl text-[#e8cda8]">{metric.value}</div>
                <div className="text-[9px] uppercase tracking-[.2em] text-white/45">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 hidden sm:inline text-[9px] uppercase tracking-[.24em] text-white/45">Ambient film</span>
            <button onClick={toggleMute} className="film-control" aria-label={isMuted ? 'Unmute film' : 'Mute film'}>{isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}</button>
            <button onClick={togglePlayback} className="film-control" aria-label={isPlaying ? 'Pause film' : 'Play film'}>{isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</button>
          </div>
        </div>
      </div>
    </section>
  );
};
