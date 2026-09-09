import React, { useState } from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { TESTIMONIALS_DATA, FAQ_DATA, Testimonial, FaqItem } from '../data/websiteData';
import { Star, Quote, ChevronDown, HelpCircle, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface TestimonialsPageProps {
  onOpenConsultation: () => void;
  onNavigate: (page: string) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenConsultation, onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const [faqCategory, setFaqCategory] = useState<string>('All');

  const categories = ['All', 'Turnkey & Execution', 'Process & Timeline', 'Commercial & Industrial', 'Cost & BOQ'];

  const filteredFaqs = faqCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter(f => f.category === faqCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/preview/mixkit-bright-and-modern-living-room-interior-41584-large.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
        badge="// CLIENT ENDORSEMENTS & CLARITY"
        title="Client Notes & FAQs"
        italicTitle="Real homeowner and developer experiences in Bengaluru."
        description="Discover how our integrated architectural model resolves the chronic headaches of construction: budget escalations, design deviations, and contractor delays. Browse verified client testimonials and architectural FAQs."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Testimonials & FAQ' }
        ]}
        metrics={[
          { value: '4.9 ★', label: 'Average Client Rating' },
          { value: '250+', label: 'Delivered Storys' },
          { value: '99%', label: 'On-Time Completion' },
          { value: '100%', label: 'Direct Reference Availability' }
        ]}
        primaryCta={{
          text: 'Request Client References',
          action: onOpenConsultation
        }}
        secondaryCta={{
          text: 'Explore Projects',
          action: () => onNavigate('projects')
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. Client Testimonials Grid — Creative Certificate Plaque Cards */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Verified Feedback
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Stories From Our Homeowners &amp; Partners
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500">
              Verified Residential &amp; Commercial Clients
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t: Testimonial) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-7 border border-stone-200/90 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Massive Quotation Glyph Background Watermark */}
                <Quote className="absolute -top-3 -right-3 w-24 h-24 text-stone-100 group-hover:text-[#FAF5EE] transition-colors pointer-events-none" />

                {/* Corner registration mark */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">+</div>

                <div className="space-y-4 relative z-10">
                  {/* Star Rating & Code */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C5A880]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#C5A880]" />
                      ))}
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-stone-200 text-[10px] font-mono text-[#B89366] font-bold">
                      {t.clientCode}
                    </span>
                  </div>

                  {/* Client Type Pill */}
                  <div className="inline-block px-2.5 py-1 rounded-full bg-[#14171B]/5 text-[#14171B] text-[10px] font-mono uppercase tracking-wider font-semibold">
                    {t.clientType}
                  </div>

                  {/* Quote */}
                  <p className="font-serif text-base sm:text-lg text-stone-800 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between relative z-10">
                  <div>
                    <h5 className="font-serif text-base font-bold text-stone-900">
                      {t.clientName}
                    </h5>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-stone-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#B89366]" />
                      <span>{t.location}</span>
                    </div>
                  </div>

                  <span className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0" title="Verified Turnkey Handover">
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Categorized Frequently Asked Questions — Creative Accordions */}
        <section className="space-y-8 pt-8 border-t border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Clarity on Every Detail
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                Frequently Asked Architectural Questions
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Direct answers regarding building permissions, BBMP/BDA bylaws, BOQ locking, and project timelines in Bengaluru.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFaqCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                    faqCategory === cat
                      ? 'bg-[#14171B] text-[#C5A880] font-bold shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredFaqs.map((faq: FaqItem) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-stone-200/90 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-[#FAF8F5] transition-colors focus:outline-none"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-mono font-bold text-[#B89366] mt-0.5 shrink-0">
                        {faq.faqNumber}
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#B89366]' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-[#FAF8F5]/50 animate-in fade-in-50 duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};
