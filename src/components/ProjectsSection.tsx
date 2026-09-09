import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  Search, 
  Maximize2,
  Layers,
  ArrowRight,
  Filter
} from 'lucide-react';
import { 
  PROJECTS_DATA, 
  FEATURED_SHOWCASE_PROJECTS,
  Project 
} from '../data/websiteData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onConsultSimilar: (projectName: string) => void;
  onNavigateProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onConsultSimilar,
  onNavigateProjects
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'All', label: 'All Projects (250+)' },
    { id: 'Architecture', label: 'Architecture & Villas' },
    { id: 'Interior Design', label: 'Luxury Interiors' },
    { id: 'Commercial & Retail', label: 'Commercial & Retail' },
    { id: 'Industrial', label: 'Industrial' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesQuery = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="py-20 lg:py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section 1: Signature Showcase from buildstorys.com */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
                // FEATURED ATELIER PORTFOLIO
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
                Spaces with meaning.
              </h2>
            </div>
            <p className="text-stone-600 text-sm max-w-md leading-relaxed">
              Architecture and interior design across Bangalore, shaped by precision engineering, bioclimatic orientation, and artisanal materials.
            </p>
          </div>

          {/* 4 Signature Projects with Creative Blueprint Card Styling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_SHOWCASE_PROJECTS.map((item) => {
              const fullProject = PROJECTS_DATA.find((p) => p.id === item.id) || PROJECTS_DATA[0];
              return (
                <div 
                  key={item.id}
                  onClick={() => onSelectProject(fullProject)}
                  className="group cursor-pointer rounded-2xl bg-white border border-stone-200/90 overflow-hidden hover:border-[#C5A880] shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] transition-all duration-300 flex flex-col justify-between relative"
                >
                  {/* Corner registration ticks */}
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>

                  <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-900">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#C5A880] border border-[#C5A880]/30 font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/20 uppercase">
                        {fullProject.status}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <span className="text-xs font-mono text-[#E5CEB0] tracking-wider block">
                        {item.headline}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold group-hover:text-[#E7CAA5] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs font-mono">
                      <span className="flex items-center gap-1.5 text-stone-500">
                        <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                        <span>{item.location}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold text-stone-900 group-hover:text-[#B89366] transition-colors uppercase tracking-wider">
                        <span>Inspect Project Dossier</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Bottom Accent line */}
                  <div className="h-0.5 bg-transparent group-hover:bg-[#C5A880] transition-colors" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Complete Portfolio Filter */}
        <div className="pt-8 border-t border-stone-200 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Explore All Portfolio Projects
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm">
                From luxury apartments in Phoenix Kessaku and Sobha City to modern villas and Texel industrial facilities.
              </p>
            </div>

            {/* Search bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search by name, area, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-lg bg-white border border-stone-300 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#B89366] shadow-xs"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-[#14171B] text-[#C5A880] font-bold shadow-xs'
                    : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Filtered Projects Grid with Creative Blueprint Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer bg-white rounded-xl border border-stone-200 hover:border-[#C5A880] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-xl overflow-hidden flex flex-col justify-between relative"
              >
                {/* Corner registration marks */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>

                <div className="relative h-56 overflow-hidden bg-stone-900">
                  <img 
                    src={project.heroImage} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#C5A880] border border-[#C5A880]/30 font-semibold uppercase">
                      {project.subCategory}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/20 uppercase">
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] font-mono text-[#E5CEB0]">{project.builtUpArea}</div>
                    <h4 className="font-serif text-xl font-bold leading-tight group-hover:text-[#E7CAA5] transition-colors">
                      {project.name}
                    </h4>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                    <span className="flex items-center gap-1 text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                      <span className="truncate">{project.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-stone-900 group-hover:text-[#B89366] transition-colors uppercase">
                      <span>Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
