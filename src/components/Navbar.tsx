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
  Building2,
  Layers,
  HelpCircle,
  Calculator,
  Sliders,
  BookOpen,
  ChevronRight
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
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const projectsDropdownRef = useRef<HTMLDivElement>(null);
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
        projectsDropdownRef.current && 
        !projectsDropdownRef.current.contains(event.target as Node)
      ) {
        setProjectsDropdownOpen(false);
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
    setProjectsDropdownOpen(false);
    setMoreDropdownOpen(false);
  };

  const isServicesActive = activeSection === 'services' || activeSection.startsWith('services/');
  const isProjectsActive = activeSection === 'projects' || activeSection.startsWith('projects/');

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

      {/* Main architectural navbar */}
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
            className="flex items-center text-left group focus:outline-none shrink-0"
          >
            <img
              src="/images/build-storys-logo.webp"
              alt="Build Storys — Crafting Spaces, Building Stories"
              className={`w-auto transition-all duration-300 ${isScrolled ? 'h-18 sm:h-19' : 'h-18 sm:h-19'}`}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-stone-700">
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

            {/* Services Heading with Sub-Headings Dropdown */}
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
                  isServicesActive
                    ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                    : 'text-stone-600'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-stone-200 py-2 animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                  <div className="px-3.5 py-1.5 border-b border-stone-100 flex items-center justify-between">
                    <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-400">
                      Disciplines &amp; Sub-Pages
                    </p>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="text-[10px] font-mono text-[#B89366] hover:underline"
                    >
                      View All (9) &rarr;
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => handleNavClick('services/architecture')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Architecture &amp; Sanctions</div>
                      <div className="text-[11px] text-stone-500">Residential Villas, Commercial &amp; Sanctions</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>

                  <button 
                    onClick={() => handleNavClick('services/interiors')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Bespoke Luxury Interiors</div>
                      <div className="text-[11px] text-stone-500">Italian Marble, Teak Millwork &amp; Lighting</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>

                  <button 
                    onClick={() => handleNavClick('services/turnkey')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Turnkey Solutions</div>
                      <div className="text-[11px] text-stone-500">Single-Source Locked BOQ Handover</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>

                  <button 
                    onClick={() => handleNavClick('services/visualisation')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">3D Visualisation &amp; BIM</div>
                      <div className="text-[11px] text-stone-500">Photorealistic CGI &amp; VR Walkthroughs</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>
                </div>
              )}
            </div>

            {/* Projects Heading with Sub-Headings Dropdown */}
            <div 
              ref={projectsDropdownRef}
              className="relative"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <button 
                id="nav-projects-dropdown-toggle"
                onClick={() => handleNavClick('projects')}
                className={`flex items-center gap-1 hover:text-stone-950 transition-colors py-1 ${
                  isProjectsActive 
                    ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                    : 'text-stone-600'
                }`}
              >
                <span>Projects</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-stone-200 py-2 animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                  <div className="px-3.5 py-1.5 border-b border-stone-100 flex items-center justify-between">
                    <p className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-400">
                      Portfolio Sectors
                    </p>
                    <button
                      onClick={() => handleNavClick('projects')}
                      className="text-[10px] font-mono text-[#B89366] hover:underline"
                    >
                      All Projects (250+) &rarr;
                    </button>
                  </div>

                  <button 
                    onClick={() => handleNavClick('projects/architecture')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Architecture &amp; Villas</div>
                      <div className="text-[11px] text-stone-500">Bioclimatic Private Residences</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>

                  <button 
                    onClick={() => handleNavClick('projects/interiors')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Luxury Interiors</div>
                      <div className="text-[11px] text-stone-500">Phoenix Kessaku, Sobha City, Prestige</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>

                  <button 
                    onClick={() => handleNavClick('projects/commercial')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Commercial &amp; Retail</div>
                      <div className="text-[11px] text-stone-500">Executive Headquarters &amp; Flagships</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>

                  <button 
                    onClick={() => handleNavClick('projects/industrial')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] hover:text-stone-950 flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Industrial Facilities</div>
                      <div className="text-[11px] text-stone-500">PEB Manufacturing Campuses</div>
                    </div>
                    <ArrowRight className="w-3 h-3 text-stone-300 group-hover:text-[#B89366] transition-colors" />
                  </button>
                </div>
              )}
            </div>

            {/* Direct Quick Links for high-value pages */}
            <button 
              id="nav-link-process"
              onClick={() => handleNavClick('process')}
              className={`hover:text-stone-950 transition-colors py-1 ${
                activeSection === 'process' 
                  ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                  : 'text-stone-600'
              }`}
            >
              Process
            </button>

            <button 
              id="nav-link-transformations"
              onClick={() => handleNavClick('transformations')}
              className={`hover:text-stone-950 transition-colors py-1 ${
                activeSection === 'transformations' 
                  ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                  : 'text-stone-600'
              }`}
            >
              Transformations
            </button>

            {/* "More" dropdown for other dedicated pages */}
            <div 
              ref={moreDropdownRef}
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button 
                id="nav-more-dropdown-toggle"
                className={`flex items-center gap-1 hover:text-stone-950 transition-colors py-1 ${
                  ['estimator', 'associations', 'testimonials', 'insights'].includes(activeSection)
                    ? 'text-stone-950 font-semibold border-b-2 border-[#C5A880]' 
                    : 'text-stone-600'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-stone-200 py-2 animate-in fade-in-50 zoom-in-95 duration-150 z-50">
                  <button 
                    onClick={() => handleNavClick('estimator')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5 group"
                  >
                    <Calculator className="w-4 h-4 text-[#B89366]" />
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Cost Estimator</div>
                      <div className="text-[11px] text-stone-500">Live Bangalore budget calculator</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleNavClick('associations')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5 group"
                  >
                    <Building2 className="w-4 h-4 text-[#B89366]" />
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Client Associations</div>
                      <div className="text-[11px] text-stone-500">Gated communities &amp; brands</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleNavClick('testimonials')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5 group"
                  >
                    <HelpCircle className="w-4 h-4 text-[#B89366]" />
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Testimonials &amp; FAQ</div>
                      <div className="text-[11px] text-stone-500">Verified reviews &amp; legal clarity</div>
                    </div>
                  </button>

                  <button 
                    onClick={() => handleNavClick('insights')}
                    className="w-full text-left px-3.5 py-2.5 text-xs text-stone-700 hover:bg-[#FAF8F5] flex items-center gap-2.5 group"
                  >
                    <BookOpen className="w-4 h-4 text-[#B89366]" />
                    <div>
                      <div className="font-semibold text-stone-900 group-hover:text-[#B89366]">Insights &amp; Blog</div>
                      <div className="text-[11px] text-stone-500">Architectural research essays</div>
                    </div>
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
              className="lg:hidden p-2 rounded text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-1 focus:ring-stone-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Subheadings */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bg-white border-b border-stone-200 shadow-2xl max-h-[85vh] overflow-y-auto px-5 py-5 space-y-4 animate-in slide-in-from-top-2 duration-200 z-50">
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
              <span>About Studio &amp; Ethos</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            {/* Services with collapsible subheadings in mobile */}
            <div className="py-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleNavClick('services')}
                  className="text-stone-900 font-semibold text-sm"
                >
                  Services (Overview)
                </button>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-1 text-stone-500 hover:text-stone-900"
                  aria-label="Toggle services subheadings"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="mt-2 pl-3 border-l-2 border-[#C5A880] space-y-2 text-xs font-mono text-stone-600">
                  <button onClick={() => handleNavClick('services/architecture')} className="block py-1 hover:text-[#B89366]">
                    &bull; Architecture &amp; Sanctions
                  </button>
                  <button onClick={() => handleNavClick('services/interiors')} className="block py-1 hover:text-[#B89366]">
                    &bull; Bespoke Luxury Interiors
                  </button>
                  <button onClick={() => handleNavClick('services/turnkey')} className="block py-1 hover:text-[#B89366]">
                    &bull; Turnkey Solutions
                  </button>
                  <button onClick={() => handleNavClick('services/visualisation')} className="block py-1 hover:text-[#B89366]">
                    &bull; 3D Visualisation &amp; BIM
                  </button>
                </div>
              )}
            </div>

            {/* Projects with collapsible subheadings in mobile */}
            <div className="py-2">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-stone-900 font-semibold text-sm"
                >
                  Projects (Overview)
                </button>
                <button
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="p-1 text-stone-500 hover:text-stone-900"
                  aria-label="Toggle projects subheadings"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {mobileProjectsOpen && (
                <div className="mt-2 pl-3 border-l-2 border-[#C5A880] space-y-2 text-xs font-mono text-stone-600">
                  <button onClick={() => handleNavClick('projects/architecture')} className="block py-1 hover:text-[#B89366]">
                    &bull; Architecture &amp; Villas
                  </button>
                  <button onClick={() => handleNavClick('projects/interiors')} className="block py-1 hover:text-[#B89366]">
                    &bull; Luxury Interiors
                  </button>
                  <button onClick={() => handleNavClick('projects/commercial')} className="block py-1 hover:text-[#B89366]">
                    &bull; Commercial &amp; Retail
                  </button>
                  <button onClick={() => handleNavClick('projects/industrial')} className="block py-1 hover:text-[#B89366]">
                    &bull; Industrial Facilities
                  </button>
                </div>
              )}
            </div>

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
              <span>Before &amp; After Transformations</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => handleNavClick('estimator')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Cost &amp; Timeline Estimator</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => handleNavClick('associations')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Client &amp; Brand Associations</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => handleNavClick('testimonials')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Client Notes &amp; FAQs</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => handleNavClick('insights')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Design Insights &amp; Journal</span>
              <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left py-2.5 text-stone-900 flex items-center justify-between"
            >
              <span>Contact &amp; Studio Location</span>
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
