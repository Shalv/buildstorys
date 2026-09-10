import React from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { BLOG_POSTS, BlogPost } from '../data/websiteData';
import { BookOpen, Clock, Calendar, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface InsightsPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onOpenConsultation, onNavigate }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/15799/15799-360.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=90"
        badge="// RESEARCH & FIELD ESSAYS"
        title="Architectural Insights & Journal"
        italicTitle="Field notes on Bangalore's architectural evolution."
        description="Perspectives on bioclimatic residential principles, the economics of turnkey vs item-rate contracting, and authentic material durability in South India’s climate."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Design Insights' }
        ]}
        metrics={[
          { value: '3', label: 'Primary Field Journals' },
          { value: '15+', label: 'Years of Empiric Data' },
          { value: '100%', label: 'Written by Senior Architects' },
          { value: 'Open', label: 'Knowledge Sharing' }
        ]}
        primaryCta={{
          text: 'Book Architectural Workshop',
          action: onOpenConsultation
        }}
        secondaryCta={{
          text: 'Explore Built Projects',
          action: () => onNavigate('projects')
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. Journal Essays Grid — Creative Editorial Cards */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Peer-Reviewed Practice Notes
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Selected Essays &amp; Practical Guides
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Curated by Our Principal Architects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post: BlogPost, idx: number) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Corner registration mark */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>

                {/* Article Header Image */}
                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#C5A880] border border-[#C5A880]/40 uppercase tracking-widest font-semibold">
                      {post.category}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/20">
                      VOL. 0{idx + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{post.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="font-serif text-2xl font-bold text-stone-900 leading-snug group-hover:text-[#B89366] transition-colors">
                      {post.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Key Takeaways */}
                  <div className="space-y-2 pt-3 border-t border-stone-100">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#B89366] font-bold">
                      Key Field Takeaways
                    </div>
                    <div className="space-y-1.5">
                      {post.keyTakeaways.map((takeaway, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Read More Action */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={onOpenConsultation}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 group-hover:text-[#B89366] uppercase tracking-wider transition-colors"
                    >
                      <span>Discuss With Author</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <span className="text-[11px] font-mono text-stone-400">
                      Bengaluru Edition
                    </span>
                  </div>
                </div>

                {/* Bottom Brass Line */}
                <div className="h-0.5 bg-transparent group-hover:bg-[#C5A880] transition-colors" />
              </article>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
