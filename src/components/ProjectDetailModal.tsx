import React, { useEffect } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Layers, 
  UserCheck, 
  Maximize2, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { Project } from '../data/websiteData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onBookConsultationForProject: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onBookConsultationForProject
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#FAF8F5] text-stone-900 rounded-xl shadow-2xl overflow-hidden border border-stone-300 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#1A1E24] text-[#C5A880] text-xs font-mono uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <div className="text-xs text-stone-500 font-mono hidden sm:inline-flex items-center gap-1">
              <span>{project.subCategory}</span>
              <ChevronRight className="w-3 h-3 text-stone-400" />
              <span className="text-stone-800 font-medium">{project.name}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
          
          {/* Hero Banner & Title */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                {project.name}
              </h2>
              <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-full">
                Status: {project.status} ({project.completionYear})
              </span>
            </div>

            <p className="text-base text-stone-600 font-serif italic max-w-3xl">
              “{project.tagline}”
            </p>

            {/* Architectural Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-lg border border-stone-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                  Location
                </div>
                <div className="text-sm font-semibold text-stone-900 mt-1">{project.location}</div>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-stone-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                  <UserCheck className="w-3.5 h-3.5 text-[#B89366]" />
                  Client / Property
                </div>
                <div className="text-sm font-semibold text-stone-900 mt-1 truncate" title={project.clientOrPropertyType}>
                  {project.clientOrPropertyType}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-stone-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B89366]" />
                  Scale / Area
                </div>
                <div className="text-sm font-semibold text-stone-900 mt-1">
                  {project.builtUpArea} {project.siteArea ? `(Site: ${project.siteArea})` : ''}
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-lg border border-stone-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#B89366]" />
                  Year Delivered
                </div>
                <div className="text-sm font-semibold text-stone-900 mt-1">{project.completionYear}</div>
              </div>
            </div>
          </div>

          {/* Main Hero Showcase Image */}
          <div className="rounded-xl overflow-hidden border border-stone-300 shadow-md bg-stone-900 max-h-[480px]">
            <img 
              src={project.heroImage} 
              alt={project.name} 
              className="w-full h-full object-cover object-center max-h-[480px]"
            />
          </div>

          {/* Design Challenge & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-1 rounded">
                The Design Challenge
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                {project.designChallenge}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-xl border border-stone-200 shadow-sm space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                Build Storys’ Solution
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Services Delivered & Materials Used */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Services Delivered */}
            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-stone-200 space-y-3">
              <h4 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#B89366]" />
                Services Delivered
              </h4>
              <ul className="space-y-2">
                {project.servicesDelivered.map((srv, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                    <CheckCircle className="w-4 h-4 text-[#B89366] shrink-0 mt-0.5" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials Used */}
            <div className="bg-[#FAF8F5] p-6 rounded-xl border border-stone-200 space-y-3">
              <h4 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B89366]" />
                Primary Materials & Finishes
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.materialsUsed.map((mat, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded bg-white border border-stone-300 text-xs font-medium text-stone-800 shadow-2xs"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Results */}
          <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-xl border border-stone-800 space-y-4">
            <h4 className="font-serif text-xl font-bold text-[#D8BE9B]">
              Project Results & Performance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880] mt-1.5 shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery View */}
          {project.galleryImages.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Exterior & Interior Gallery
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden border border-stone-200 h-52 bg-stone-200 shadow-2xs">
                    <img 
                      src={img} 
                      alt={`${project.name} perspective ${i + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Before and After (if available) */}
          {project.beforeImage && project.afterImage && (
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Transformation Before & After
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase font-bold text-stone-500">Site Before</span>
                  <div className="rounded-lg overflow-hidden border border-stone-200 h-60 bg-stone-200">
                    <img src={project.beforeImage} alt="Site before" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-mono uppercase font-bold text-emerald-700">Completed Space</span>
                  <div className="rounded-lg overflow-hidden border border-emerald-400 h-60 bg-stone-200">
                    <img src={project.afterImage} alt="Completed space" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Consultation CTA */}
          <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl border">
            <div>
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Inspired by {project.name}?
              </h4>
              <p className="text-xs text-stone-600">
                Schedule a consultation with our principal architect to discuss your vision and obtain an initial feasibility estimate.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookConsultationForProject(project.name);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#1A1E24] hover:bg-[#2A2E35] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-md"
            >
              <span>Book Consultation for this Project</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
