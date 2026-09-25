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
    <section className="chapter-hero relative min-h-[72svh] lg:min-h-[80svh] bg-[#FAF8F5] text-stone-900 overflow-hidden border-b border-[#E7E5E0]">
      <div className="absolute inset-0">
        <img src={poster} alt="" className="h-full w-full object-cover scale-[1.03]" />
        <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={poster}
          onCanPlay={() => setIsLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <source src={videoSrc} type="video/mp4" />
          {fallbackVideoSrc && <source src={fallbackVideoSrc} type="video/mp4" />}
        </video>
        {/* Luminous light luxury architectural scrims */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,245,0.96)_0%,rgba(250,248,245,0.86)_52%,rgba(250,248,245,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,245,0.5)_0%,transparent_45%,rgba(250,248,245,0.95)_100%)]" />
        <div className="hero-film-grain absolute inset-0 opacity-[0.06]" />
      </div>

      <div className="absolute left-0 top-0 bottom-0 hidden xl:flex w-20 border-r border-[#E7E5E0] items-center justify-center bg-[#FAF8F5]/60 backdrop-blur-xs">
        <span className="-rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[.42em] text-stone-500 font-mono font-medium">{chapter.label} · Bengaluru</span>
      </div>

      <div className="relative z-10 max-w-[1500px] min-h-[72svh] lg:min-h-[80svh] mx-auto px-5 sm:px-10 xl:px-28 py-8 lg:py-12 flex flex-col justify-between">
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[.22em] text-stone-600 font-mono">
            {breadcrumbs?.map((crumb, index) => (
              <React.Fragment key={crumb.label}>
                {index > 0 && <ChevronRight className="w-3 h-3 text-[#9A7049]" />}
                {crumb.action ? <button onClick={crumb.action} className="hover:text-stone-900 transition-colors cursor-pointer">{crumb.label}</button> : <span className="text-[#9A7049] font-bold">{crumb.label}</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="text-right">
            <div className="font-serif text-5xl sm:text-7xl leading-none text-stone-300 font-light">{chapter.no}</div>
            <div className="mt-1 text-[9px] uppercase tracking-[.3em] text-[#9A7049] font-mono font-semibold">Chapter</div>
          </div>
        </div>

        <div className="max-w-5xl py-10">
          <div className="chapter-reveal flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[.3em] text-[#9A7049] font-mono font-bold">
            <span className="w-10 h-px bg-[#9A7049]" /> {badge.replace(/^\/\/\s*/, '')}
          </div>
          <h1 className="chapter-reveal chapter-delay-1 mt-5 font-serif text-[clamp(2.8rem,6.5vw,6.5rem)] leading-[0.92] tracking-[-.03em] font-normal text-[#1C1917] max-w-5xl">
            {title}
            {italicTitle && <span className="block ml-[4vw] sm:ml-[6vw] italic text-[#9A7049] font-light mt-1">{italicTitle}</span>}
          </h1>
          <div className="chapter-reveal chapter-delay-2 mt-7 lg:mt-9 grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <p className="lg:col-span-7 max-w-2xl text-base sm:text-lg leading-relaxed text-stone-700 font-sans font-light">{description}</p>
            <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
              {primaryCta && (
                <button onClick={primaryCta.action} className="pill-cta-primary group cursor-pointer">
                  <span>{primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
              {secondaryCta && (
                <button onClick={secondaryCta.action} className="pill-cta-ghost cursor-pointer">
                  <span>{secondaryCta.text}</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="chapter-reveal chapter-delay-3 border-t border-[#E7E5E0] pt-5 flex flex-col sm:flex-row sm:items-end justify-between gap-5">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {(metrics?.slice(0, 4) || chapter.notes.map((label, i) => ({ value: `0${i + 1}`, label }))).map((metric) => (
              <div key={metric.label} className="min-w-24">
                <div className="font-serif text-2xl text-[#9A7049] font-semibold">{metric.value}</div>
                <div className="text-[9px] uppercase tracking-[.2em] text-stone-500 font-mono">{metric.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 hidden sm:inline text-[9px] uppercase tracking-[.24em] text-stone-500 font-mono">Ambient film</span>
            <button onClick={toggleMute} className="film-control" aria-label={isMuted ? 'Unmute film' : 'Mute film'}>
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <button onClick={togglePlayback} className="film-control" aria-label={isPlaying ? 'Pause film' : 'Play film'}>
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
