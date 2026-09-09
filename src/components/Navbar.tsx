import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Sparkles,
  Compass,
  Building2,
  Layers,
  HelpCircle,
  Calculator,
  Sliders,
  BookOpen
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenConsultation, 
  activeSection, 
  onNavigate 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesDropdownRef.current && 
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setServicesDropdownOpen(false);
      }
      if (
        moreDropdownRef.current && 
        !moreDropdownRef.current.contains(event.target as Node)
      ) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMoreDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro-bar for quick contact */}
      <div className="bg-[#14171B] text-[#D1D5DB] text-xs py-1.5 px-4 sm:px-8 border-b border-[#252930]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-stone-300 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span className="truncate">Sahakar Nagar, Bengaluru</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-stone-400 font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              {COMPANY_PROFILE.experienceYears} Years &bull; {COMPANY_PROFILE.projectsCompleted} Projects
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+916366778876" 
              className="flex items-center gap-1.5 text-stone-200 hover:text-[#C5A880] transition-colors font-mono font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span>+91 63667 78876</span>
            </a>
            <span className="text-stone-700 hidden sm:inline">|</span>
            <a 
              href={`mailto:${COMPANY_PROFILE.contact.primaryEmail}`} 
              className="hidden sm:flex items-center gap-1.5 text-stone-300 hover:text-[#C5A880] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
              <span>{COMPANY_PROFILE.contact.primaryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main minimized architectural navbar */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3' 
          : 'bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-stone-200/60 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
          
          {/* Brand Identity / Logo */}
          <button 
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none shrink-0"
          >
            <div className="w-9 h-9 rounded bg-[#14171B] flex items-center justify-center text-[#C5A880] border border-[#2A2E35] group-hover:border-[#C5A880] transition-colors shadow-xs">
              <Compass className="w-4 h-4 transition-transform group-hover:rotate-45 duration-500" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif tracking-widest text-lg sm:text-xl font-bold text-stone-900 uppercase leading-none">
                  BUILD STORYS
                </span>
              </div>
              <p className="text-[9px] tracking-widest text-stone-500 uppercase font-mono mt-0.5">
                INFRASTRUCTURE &bull; BENGALURU
              </p>
            </div>
          </button>

          {/* Minimized Desktop Menu (5 Core Links + Clean More Dropdown) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-700">
            <button 
              id="nav-link-home"
              onClick={() => handleNavClick('home')}
              className={`hover:text-stone-950 transition-colors py-1 ${
                activeSection === 'home' 
                  ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                  : 'text-stone-600'
              }`}
            >
              Home
            </button>

            <button 
              id="nav-link-about"
              onClick={() => handleNavClick('about')}
              className={`hover:text-stone-950 transition-colors py-1 ${
                activeSection === 'about' 
                  ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                  : 'text-stone-600'
              }`}
            >
              About
            </button>

            {/* Services with Hover / Click Dropdown */}
            <div 
              ref={servicesDropdownRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                id="nav-services-dropdown-toggle"
                onClick={() => handleNavClick('services')}
                className={`flex items-center gap-1 hover:text-stone-950 transition-colors py-1 ${
                  activeSection === 'services' 
                    ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                    : 'text-stone-600'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Minimized Services Flyout */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-stone-200 py-2 animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                  <div className="px-3 py-1.5 border-b border-stone-100">
                    <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-400">
                      Core Disciplines
                    </p>
                  </div>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Architecture</div>
                      <div className="text-[11px] text-stone-500">Residential, Commercial, Industrial, Farmhouse</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Interior Design</div>
                      <div className="text-[11px] text-stone-500">Villas, Duplexes, Offices, Retail Spaces</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Turnkey Solutions</div>
                      <div className="text-[11px] text-stone-500">Complete Design & Build Handover</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>
                </div>
              )}
            </div>

            <button 
              id="nav-link-projects"
              onClick={() => handleNavClick('projects')}
              className={`hover:text-stone-950 transition-colors py-1 ${
                activeSection === 'projects' 
                  ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                  : 'text-stone-600'
              }`}
            >
              Projects
            </button>

            {/* Subtle "More" dropdown for secondary utility sections */}
            <div 
              ref={moreDropdownRef}
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button 
                id="nav-more-dropdown-toggle"
                className="flex items-center gap-1 hover:text-stone-950 transition-colors py-1 text-stone-600 text-sm"
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-stone-200 py-2 animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                  <button 
                    onClick={() => handleNavClick('process')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#B89366]" />
                    <span>The Build Storys Way (7 Steps)</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('transformations')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5"
                  >
                    <Sliders className="w-3.5 h-3.5 text-[#B89366]" />
                    <span>Before & After Transformations</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('estimator')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5"
                  >
                    <Calculator className="w-3.5 h-3.5 text-[#B89366]" />
                    <span>Cost & Timeline Estimator</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('associations')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#B89366]" />
                    <span>Client & Brand Associations</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('testimonials')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-[#B89366]" />
                    <span>Client Notes & FAQs</span>
                  </button>
                  <button 
                    onClick={() => handleNavClick('insights')}
                    className="w-full text-left px-3 py-2 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-[#B89366]" />
                    <span>Design Insights & Blog</span>
                  </button>
                </div>
              )}
            </div>

            <button 
              id="nav-link-contact"
              onClick={() => handleNavClick('contact')}
              className={`hover:text-stone-950 transition-colors py-1 ${
                activeSection === 'contact' 
                  ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                  : 'text-stone-600'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action CTA Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="nav-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#14171B] hover:bg-[#252930] active:scale-95 rounded transition-all duration-200 shadow-xs border border-[#2A2E35] group"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880] group-hover:scale-110 transition-transform" />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Minimized Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[88px] bg-white border-b border-stone-200 shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200 z-50">
          <div className="space-y-1 divide-y divide-stone-100 text-sm font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>About Build Storys</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Services (Architecture & Interiors)</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('projects')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Projects Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>The Build Storys Way (7 Steps)</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('transformations')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Transformations</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('associations')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Client & Brand Associations</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Client Notes & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Contact & Studio Location</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#14171B] rounded text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              Book Consultation
            </button>
            <div className="flex justify-between items-center text-xs text-stone-500 pt-1">
              <span>Sahakar Nagar, Bengaluru</span>
              <a href="tel:+916366778876" className="text-[#B89366] font-mono font-medium">+91 63667 78876</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
