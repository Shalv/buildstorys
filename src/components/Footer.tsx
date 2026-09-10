import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E1013] text-[#A0A6B1] text-xs border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-12">
        
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none cursor-pointer inline-block group"
              title="Build Storys — Crafting Spaces | Building Stories"
            >
              <img
                src="/images/build-storys-logo.webp"
                alt="Build Storys — Crafting Spaces | Building Stories"
                className="h-14 sm:h-16 lg:h-18 w-auto object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </button>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Integrated architecture, interior design, planning, craftsmanship and turnkey execution in Bengaluru.
            </p>

            <blockquote className="font-serif italic text-stone-300 text-sm border-l-2 border-[#C5A880] pl-3 py-1">
              &ldquo;{COMPANY_PROFILE.brandPromise}&rdquo;
            </blockquote>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-stone-400">
              <span>15+ Years Practice</span>
              <span>&bull;</span>
              <span>250+ Projects</span>
              <span>&bull;</span>
              <span>1.2M+ Sq. Ft.</span>
            </div>
          </div>

          {/* Col 2: Services Sub-Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Services &amp; Disciplines
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('services/architecture')} className="hover:text-white transition-colors text-left">
                  Architecture &amp; Sanctions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/interiors')} className="hover:text-white transition-colors text-left">
                  Bespoke Luxury Interiors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/turnkey')} className="hover:text-white transition-colors text-left">
                  Turnkey Design-Build Handover
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/visualisation')} className="hover:text-white transition-colors text-left">
                  3D Visualisation &amp; BIM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-[#C5A880] hover:text-white transition-colors text-left font-mono text-[11px]">
                  View All 9 Services &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Projects & Method */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Portfolio &amp; Method
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('projects/architecture')} className="hover:text-white transition-colors text-left">
                  Architectural Villas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects/interiors')} className="hover:text-white transition-colors text-left">
                  Residential Interiors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects/commercial')} className="hover:text-white transition-colors text-left">
                  Commercial &amp; Workspaces
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects/industrial')} className="hover:text-white transition-colors text-left">
                  Industrial Facilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors text-left">
                  The Build Storys Way (7 Steps)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-white transition-colors text-left">
                  Before &amp; After Transformations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('estimator')} className="hover:text-white transition-colors text-left">
                  Cost &amp; Timeline Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Studio Location
            </h4>
            <div className="space-y-2 text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  Building No. 2122/5, 1st Floor, 2nd Main Rd, D Block, Opp. BSNL Exchange, Sahakar Nagar, Bengaluru – 560092
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href="tel:+916366778876" className="hover:text-white">
                  +91 63667 78876
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href={`mailto:${COMPANY_PROFILE.contact.primaryEmail}`} className="hover:text-white">
                  {COMPANY_PROFILE.contact.primaryEmail}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 rounded bg-[#1A1E24] hover:bg-[#252930] text-[#C5A880] border border-stone-800 text-[11px] font-semibold uppercase tracking-wider transition-colors block w-full text-center"
                >
                  Visit Sahakar Nagar Studio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_PROFILE.legalName}. All rights reserved. Registered Council of Architecture &amp; RERA Compliant.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('testimonials')} className="hover:text-stone-300">
              Reviews &amp; FAQs
            </button>
            <button onClick={() => onNavigate('insights')} className="hover:text-stone-300">
              Design Journal
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-stone-300">
              Ethos
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#C5A880] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
