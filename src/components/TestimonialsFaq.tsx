import React, { useState } from 'react';
import { 
  Star, 
  Quote, 
  ChevronDown, 
  HelpCircle, 
  ShieldCheck, 
  Lock,
  Layers,
  Award,
  MapPin
} from 'lucide-react';
import { TESTIMONIALS_DATA, FAQ_DATA } from '../data/websiteData';

export const TestimonialsFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-20">
        
        {/* Why Choose Build Storys Section */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              Single-Source Reliability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Why Discerning Clients Choose Build Storys
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              The traditional construction process is fraught with disputes between architects and contractors. We re-engineered the experience into a unified, stress-free journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E5E0] shadow-xs space-y-3 hover:border-[#9A7049] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#9A7049] border border-[#E7E5E0] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#1C1917]">
                Single-Point Accountability
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                One team, one contract, and complete responsibility from initial architectural sketches to physical handover.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E5E0] shadow-xs space-y-3 hover:border-[#9A7049] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#9A7049] border border-[#E7E5E0] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#1C1917]">
                Locked Transparent BOQ
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                Every material specification, timber grade, and hardware item is itemized and locked upfront with zero surprise costs.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E5E0] shadow-xs space-y-3 hover:border-[#9A7049] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#9A7049] border border-[#E7E5E0] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#1C1917]">
                3D-to-Build Fidelity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                What you approve in photorealistic 3D visualization is exactly what is delivered on site, down to millimeter tolerances.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E7E5E0] shadow-xs space-y-3 hover:border-[#9A7049] transition-all">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#9A7049] border border-[#E7E5E0] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#1C1917]">
                15+ Years Track Record
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
                Over 250 completed residential, commercial, and industrial milestones delivered across Bengaluru and beyond.
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-56 sm:h-72">
            <img
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2400&q=90"
              alt="Completed Build Storys residence with warm interior lighting at dusk"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,11,.82)_0%,rgba(10,11,11,.25)_60%,transparent_100%)]" />
            <div className="relative z-10 h-full flex items-center px-8 sm:px-12">
              <p className="font-serif italic text-xl sm:text-3xl text-white max-w-md leading-snug">
                &ldquo;The space felt like ours before we'd even moved in.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Client Testimonials Section matching buildstorys.com */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
                Client Reviews
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Client Experiences
              </h3>
            </div>
            <div className="flex items-center gap-1 text-amber-500 text-xs font-mono">
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <Star className="w-4 h-4 fill-amber-500" />
              <span className="text-stone-700 ml-2 font-semibold">Verified Client Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="group relative overflow-hidden rounded-lg bg-[#14171B] text-white shadow-lg min-h-[420px] flex flex-col justify-end"
              >
                {t.image && (
                  <img
                    src={t.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 grayscale-[15%] transition-all duration-700 group-hover:opacity-85 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,11,.15)_0%,rgba(10,11,11,.35)_35%,rgba(10,11,11,.96)_100%)]" />

                <div className="relative z-10 p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#e7caa5] bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                      {t.clientType} {t.clientCode}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <Quote className="w-5 h-5 text-[#C5A880]" />

                  <p className="text-sm text-white/90 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-serif font-bold text-white">
                        {t.clientName}
                      </h4>
                      <div className="flex items-center gap-1 text-[11px] text-white/60 font-mono mt-0.5">
                        <MapPin className="w-3 h-3 text-[#B89366]" />
                        <span>{t.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions matching buildstorys.com 6 FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
                Frequently Asked Questions
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                Clear Answers Before You Begin
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Explore key details about our architecture, interior design, 3D visualization and turnkey execution.
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden aspect-4/5 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1200&q=90"
                alt="Architect reviewing construction drawings on site"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(10,11,11,.85)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="font-serif text-2xl italic">15+ years, 250+ handovers.</div>
                <div className="text-[11px] uppercase tracking-[.2em] text-white/70 mt-1">Ask us anything before you sign.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={faq.id}
                  className="rounded-lg bg-white border border-stone-200 overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#B89366] bg-stone-100 px-2 py-0.5 rounded">
                        {faq.faqNumber}
                      </span>
                      <span className="font-serif text-base font-bold text-stone-900">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#B89366]' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
