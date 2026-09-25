import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ConsultationForm } from './components/ConsultationForm';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProcessPage } from './pages/ProcessPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { EstimatorPage } from './pages/EstimatorPage';
import { AssociationsPage } from './pages/AssociationsPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { Project, COMPANY_PROFILE } from './data/websiteData';
import { MessageSquare, PhoneCall, Sparkles } from 'lucide-react';

export default function App() {
  // Route is tracked purely in memory now — the URL bar is never touched,
  // so no #/route ever appears and refreshing always returns to Home.
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [prefilledProject, setPrefilledProject] = useState<string>('');
  const [prefilledScope, setPrefilledScope] = useState<{ area?: string; budget?: string }>({});

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultationModal = (service = '', project = '', scope = {}) => {
    setPrefilledService(service);
    setPrefilledProject(project);
    setPrefilledScope(scope);
    setIsConsultationModalOpen(true);
  };

  const handleApplyEstimate = (details: { service: string; area: string; budget: string }) => {
    setPrefilledService(details.service);
    setPrefilledScope({ area: details.area, budget: details.budget });
    setIsConsultationModalOpen(true);
  };

  // Route Dispatcher
  const renderCurrentPage = () => {
    const route = currentRoute.toLowerCase();

    // Home
    if (route === 'home' || route === '') {
      return (
        <HomePage
          onOpenConsultation={() => handleOpenConsultationModal()}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onNavigate={handleNavigate}
          onApplyEstimate={handleApplyEstimate}
        />
      );
    }

    // About Studio
    if (route === 'about') {
      return (
        <AboutPage
          onOpenConsultation={() => handleOpenConsultationModal()}
          onNavigate={handleNavigate}
        />
      );
    }

    // Services & Sub-Headings
    if (route.startsWith('services')) {
      const parts = route.split('/');
      const subHeading = parts[1] || 'all'; // 'architecture' | 'interiors' | 'turnkey' | 'visualisation' | 'all'
      return (
        <ServicesPage
          subHeading={subHeading}
          onSelectServiceForConsultation={(serviceName) => handleOpenConsultationModal(serviceName)}
          onNavigate={handleNavigate}
        />
      );
    }

    // Projects & Sub-Headings
    if (route.startsWith('projects')) {
      const parts = route.split('/');
      const subHeading = parts[1] || 'all'; // 'architecture' | 'interiors' | 'commercial' | 'industrial' | 'all'
      return (
        <ProjectsPage
          subHeading={subHeading}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onConsultSimilar={(projName) => handleOpenConsultationModal('', projName)}
          onNavigate={handleNavigate}
        />
      );
    }

    // The Build Storys Way (7 Steps)
    if (route === 'process') {
      return (
        <ProcessPage
          onOpenConsultation={() => handleOpenConsultationModal()}
          onNavigate={handleNavigate}
        />
      );
    }

    // Before & After Transformations
    if (route === 'transformations') {
      return (
        <TransformationsPage
          onOpenConsultation={() => handleOpenConsultationModal()}
          onNavigate={handleNavigate}
        />
      );
    }

    // Cost & Timeline Estimator
    if (route === 'estimator') {
      return (
        <EstimatorPage
          onApplyEstimate={handleApplyEstimate}
          onNavigate={handleNavigate}
        />
      );
    }

    // Client & Brand Associations
    if (route === 'associations') {
      return (
        <AssociationsPage
          onOpenConsultation={() => handleOpenConsultationModal()}
          onNavigate={handleNavigate}
        />
      );
    }

    // Testimonials & FAQs
    if (route === 'testimonials') {
      return (
        <TestimonialsPage
          onOpenConsultation={() => handleOpenConsultationModal()}
          onNavigate={handleNavigate}
        />
      );
    }

    // Design Insights & Journal
    if (route === 'insights') {
      return (
        <InsightsPage
          onOpenConsultation={() => handleOpenConsultationModal()}
          onNavigate={handleNavigate}
        />
      );
    }

    // Contact & Studio Visit
    if (route === 'contact') {
      return (
        <ContactPage
          onNavigate={handleNavigate}
          preselectedService={prefilledService}
          prefilledScope={prefilledScope}
        />
      );
    }

    // Fallback to Home
    return (
      <HomePage
        onOpenConsultation={() => handleOpenConsultationModal()}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onNavigate={handleNavigate}
        onApplyEstimate={handleApplyEstimate}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#141312] selection:bg-[#8C6842] selection:text-white">
      
      {/* Primary Sticky Architectural Navigation */}
      <Navbar 
        onOpenConsultation={() => handleOpenConsultationModal()}
        activeSection={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Routed Page Content */}
      <main className="flex-1 w-full">
        <div key={currentRoute} className="editorial-page page-enter w-full" data-route={currentRoute.split('/')[0]}>
          {renderCurrentPage()}
        </div>
      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate}
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
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ConsultationForm 
              initialService={prefilledService}
              initialProject={prefilledProject}
              prefilledScope={prefilledScope}
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
