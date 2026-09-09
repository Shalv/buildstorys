import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyProfile } from './components/CompanyProfile';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProcessSection } from './components/ProcessSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CostEstimator } from './components/CostEstimator';
import { ClientAssociations } from './components/ClientAssociations';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { BlogInsights } from './components/BlogInsights';
import { ConsultationForm } from './components/ConsultationForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Project, COMPANY_PROFILE } from './data/websiteData';
import { MessageSquare, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledProject, setPrefilledProject] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Mapping compound IDs to DOM elements
    const elementId = sectionId.startsWith('services-') 
      ? 'services' 
      : sectionId.startsWith('projects-') 
        ? 'projects' 
        : sectionId;

    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultationModal = (service = '', project = '') => {
    setPrefilledService(service);
    setPrefilledProject(project);
    setIsConsultationModalOpen(true);
  };

  const handleApplyEstimate = (details: { service: string; area: string; budget: string }) => {
    setPrefilledService(details.service);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-[#C5A880] selection:text-white">
      
      {/* Primary Sticky Architectural Navigation */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultationModal()}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 1. Architectural Hero Banner with Key Metrics */}
        <section id="home">
          <Hero 
            onOpenConsultation={() => handleOpenConsultationModal()}
            onExploreProjects={() => scrollToSection('projects')}
            onExploreProcess={() => scrollToSection('process')}
          />
        </section>

        {/* 2. Company Profile & Design Philosophy */}
        <CompanyProfile 
          onOpenConsultation={() => handleOpenConsultationModal()}
        />

        {/* 3. Featured Projects Showcase */}
        <ProjectsSection 
          onSelectProject={(proj) => setSelectedProject(proj)}
          onConsultSimilar={(projectName) => handleOpenConsultationModal('', projectName)}
        />

        {/* 4. Comprehensive Services Breakdown */}
        <ServicesSection 
          onSelectServiceForConsultation={(serviceName) => handleOpenConsultationModal(serviceName)}
        />

        {/* 5. Seven-Step Delivery Method */}
        <ProcessSection 
          onOpenConsultation={() => handleOpenConsultationModal()}
        />

        {/* 6. Before-and-After Transformation Slider */}
        <BeforeAfterSlider />

        {/* 7. Interactive Project & Budget Estimator */}
        <CostEstimator 
          onApplyEstimateToConsultation={handleApplyEstimate}
        />

        {/* 8. Prestigious Client & Property Associations */}
        <ClientAssociations />

        {/* 9. Client Testimonials & Frequently Asked Questions */}
        <TestimonialsFaq />

        {/* 10. Architectural Insights & Field Notes */}
        <BlogInsights 
          onOpenConsultation={() => handleOpenConsultationModal()}
        />

        {/* 11. Full Consultation Form with Automated Triggers */}
        <section id="consultation" className="bg-stone-100/60 border-t border-stone-200">
          <ConsultationForm 
            initialService={prefilledService}
            initialProject={prefilledProject}
          />
        </section>

        {/* 12. Sahakar Nagar Studio Location & Contact */}
        <ContactSection />

      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={scrollToSection}
        onOpenConsultation={() => handleOpenConsultationModal()}
      />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onBookConsultationForProject={(projName) => {
            setSelectedProject(null);
            handleOpenConsultationModal('', projName);
          }}
        />
      )}

      {/* Standalone Consultation Modal */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ConsultationForm 
              initialService={prefilledService}
              initialProject={prefilledProject}
              onCloseModal={() => setIsConsultationModalOpen(false)}
              isModal={true}
            />
          </div>
        </div>
      )}

      {/* Floating Quick Action Widget (WhatsApp & Call) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${COMPANY_PROFILE.contact.whatsappNumber}?text=Hello%20Build%20Storys,%20I%20would%20like%20to%20inquire%20about%20an%20architectural%20or%20interior%20project`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xl hover:scale-105 active:scale-95 transition-all group"
          title="Direct WhatsApp with Lead Architect"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline font-mono">Chat on WhatsApp</span>
        </a>

        <a
          href="tel:+916366778876"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-[#1A1E24] hover:bg-[#2A2E35] text-[#C5A880] border border-stone-700 shadow-xl hover:scale-105 active:scale-95 transition-all sm:hidden"
          title="Call Studio"
        >
          <PhoneCall className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
