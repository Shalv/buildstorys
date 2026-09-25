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
    <footer className="bg-[#F1EFEB] text-stone-600 text-xs border-t border-[#E5E1D8]">
      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 py-16 space-y-12">
        
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

            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              Integrated architecture, interior design, planning, craftsmanship and turnkey execution in Bengaluru.
            </p>

            <blockquote className="font-serif italic text-stone-800 text-sm border-l-2 border-[#8C6842] pl-3 py-1">
              &ldquo;{COMPANY_PROFILE.brandPromise}&rdquo;
            </blockquote>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-stone-500">
              <span>15+ Years Practice</span>
              <span>&bull;</span>
              <span>250+ Projects</span>
              <span>&bull;</span>
              <span>1.2M+ Sq. Ft. Delivered</span>
            </div>
          </div>

          {/* Col 2: Services Sub-Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
              Services &amp; Disciplines
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('services/architecture')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Architecture &amp; Sanctions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/interiors')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Bespoke Luxury Interiors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/turnkey')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Turnkey Design-Build Handover
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services/visualisation')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  3D Visualisation &amp; BIM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-[#8C6842] hover:text-stone-950 transition-colors text-left font-mono text-[11px] font-semibold cursor-pointer">
                  View All 9 Services &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Projects & Method */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
              Portfolio &amp; Method
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('projects/architecture')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Architectural Villas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects/interiors')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Residential Interiors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects/commercial')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Commercial &amp; Workspaces
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects/industrial')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Industrial Facilities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  The Build Storys Way (7 Steps)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Before &amp; After Transformations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('estimator')} className="hover:text-[#8C6842] transition-colors text-left cursor-pointer">
                  Cost &amp; Timeline Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-900">
              Studio Location
            </h4>
            <div className="space-y-2 text-stone-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8C6842] shrink-0 mt-0.5" />
                <span>
                  Building No. 2122/5, 1st Floor, 2nd Main Rd, D Block, Opp. BSNL Exchange, Sahakar Nagar, Bengaluru – 560092
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8C6842] shrink-0" />
                <a href="tel:+916366778876" className="hover:text-stone-900 font-mono font-medium">
                  +91 63667 78876
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8C6842] shrink-0" />
                <a href={`mailto:${COMPANY_PROFILE.contact.primaryEmail}`} className="hover:text-stone-900 font-mono">
                  {COMPANY_PROFILE.contact.primaryEmail}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-2 rounded-full bg-white hover:bg-[#F8F7F4] text-stone-900 border border-[#E5E1D8] hover:border-[#8C6842] text-[11px] font-semibold uppercase tracking-wider transition-colors block w-full text-center shadow-2xs cursor-pointer"
                >
                  Visit Sahakar Nagar Studio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_PROFILE.legalName}. All rights reserved. Registered Council of Architecture &amp; RERA Compliant.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('testimonials')} className="hover:text-stone-800 cursor-pointer">
              Reviews &amp; FAQs
            </button>
            <button onClick={() => onNavigate('insights')} className="hover:text-stone-800 cursor-pointer">
              Design Journal
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-stone-800 cursor-pointer">
              Ethos
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#8C6842] hover:text-stone-900 font-bold transition-colors cursor-pointer"
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
