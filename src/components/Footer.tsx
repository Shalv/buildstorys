import React from 'react';
import { Compass, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
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
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#1A1E24] flex items-center justify-center text-[#C5A880] border border-stone-800">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-wider block">
                  BUILD STORYS
                </span>
                <span className="text-[10px] font-mono tracking-widest text-stone-500 uppercase block">
                  {COMPANY_PROFILE.legalName}
                </span>
              </div>
            </div>

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

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Residential Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Commercial Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Retail Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Industrial Architecture
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Residential Interior Design
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Commercial Interiors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  Turnkey Interior Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Projects & Process */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Portfolio &amp; Method
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
                  The Courtyard House
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
                  The Modern Villa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
                  The Urban Residence
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projects')} className="hover:text-white transition-colors">
                  The Commercial Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-white transition-colors">
                  The Build Storys Way (7 Steps)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-white transition-colors">
                  Transformations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('associations')} className="hover:text-white transition-colors">
                  Client &amp; Brand Associations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact */}
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
                <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <a href="tel:+916366778826" className="hover:text-white">
                  +91 63667 78826
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
                  onClick={onOpenConsultation}
                  className="px-4 py-2 rounded bg-[#1A1E24] hover:bg-[#252930] text-[#C5A880] border border-stone-800 text-[11px] font-semibold uppercase tracking-wider transition-colors block w-full text-center"
                >
                  Book Studio Visit
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_PROFILE.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-stone-400">Sahakar Nagar, Bengaluru</span>
            <button 
              onClick={scrollToTop}
              className="hover:text-stone-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
