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
            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs space-y-3 hover:border-[#C5A880] transition-all">
              <div className="w-10 h-10 rounded bg-[#14171B] text-[#C5A880] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Single-Point Accountability
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                One team, one contract, and complete responsibility from initial architectural sketches to physical handover.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs space-y-3 hover:border-[#C5A880] transition-all">
              <div className="w-10 h-10 rounded bg-[#14171B] text-[#C5A880] flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Locked Transparent BOQ
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every material specification, timber grade, and hardware item is itemized and locked upfront with zero surprise costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs space-y-3 hover:border-[#C5A880] transition-all">
              <div className="w-10 h-10 rounded bg-[#14171B] text-[#C5A880] flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                3D-to-Build Fidelity
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                What you approve in photorealistic 3D visualization is exactly what is delivered on site, down to millimeter tolerances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs space-y-3 hover:border-[#C5A880] transition-all">
              <div className="w-10 h-10 rounded bg-[#14171B] text-[#C5A880] flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                15+ Years Track Record
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Over 250 completed residential, commercial, and industrial milestones delivered across Bengaluru and beyond.
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
                className="bg-white p-7 rounded-lg border border-stone-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#C5A880] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-[#B89366] bg-[#B89366]/10 px-2.5 py-1 rounded">
                      {t.clientType} {t.clientCode}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <Quote className="w-5 h-5 text-[#C5A880]" />

                  <p className="text-sm text-stone-700 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-serif font-bold text-stone-900">
                      {t.clientName}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-stone-500 font-mono mt-0.5">
                      <MapPin className="w-3 h-3 text-[#B89366]" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions matching buildstorys.com 6 FAQs */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              Frequently Asked Questions
            </span>
            <h3 className="font-serif text-3xl font-bold text-stone-900">
              Clear Answers Before You Begin
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Explore key details about our architecture, interior design, 3D visualization and turnkey execution.
            </p>
          </div>

          <div className="space-y-3">
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
