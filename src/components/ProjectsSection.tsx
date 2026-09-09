import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  Search, 
  Maximize2,
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  PROJECTS_DATA, 
  FEATURED_SHOWCASE_PROJECTS,
  Project 
} from '../data/websiteData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onConsultSimilar: (projectName: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onConsultSimilar
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'All', label: 'All Projects (250+)' },
    { id: 'Architecture', label: 'Architecture' },
    { id: 'Interior Design', label: 'Interior Design' },
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
        
        {/* Section 1: "Spaces with meaning." directly from buildstorys.com */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
                Featured Architecture &amp; Interiors
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
                Spaces with meaning.
              </h2>
            </div>
            <p className="text-stone-600 text-sm max-w-md">
              Architecture and interior design in Bangalore, shaped by precision, innovation and purpose.
            </p>
          </div>

          {/* 4 Signature Projects from buildstorys.com */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_SHOWCASE_PROJECTS.map((item) => {
              const fullProject = PROJECTS_DATA.find((p) => p.id === item.id) || PROJECTS_DATA[0];
              return (
                <div 
                  key={item.id}
                  onClick={() => onSelectProject(fullProject)}
                  className="group cursor-pointer rounded-lg bg-white border border-stone-200/90 overflow-hidden hover:border-[#C5A880] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-stone-900">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[11px] font-mono text-white border border-white/20">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <span className="text-xs font-mono text-[#D8BE9B] tracking-wider block">
                        {item.headline}
                      </span>
                      <h3 className="font-serif text-2xl font-bold">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-100 text-xs text-stone-500">
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                        {item.location}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-stone-900 group-hover:text-[#B89366] transition-colors">
                        <span>View Project Story</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Complete Project Portfolio Filter */}
        <div className="pt-8 border-t border-stone-200 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Explore All Portfolio Projects
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm">
                From luxury apartments in Phoenix Kessaku to modern villas and Texel industrial facilities.
              </p>
            </div>

            {/* Search bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search project or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-md bg-white border border-stone-300 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#B89366] shadow-2xs"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-[#14171B] text-white shadow-xs font-semibold'
                      : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Filtered Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg border border-stone-200 p-8 space-y-3">
              <Building className="w-8 h-8 text-stone-400 mx-auto" />
              <p className="text-stone-600 text-sm font-medium">No projects found matching "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                className="text-xs text-[#B89366] font-semibold underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project: Project) => (
                <div 
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="group cursor-pointer rounded-lg bg-white border border-stone-200/90 overflow-hidden hover:border-[#C5A880] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden bg-stone-900">
                      <img 
                        src={project.heroImage} 
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-stone-200 border border-white/20">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="w-8 h-8 rounded-full bg-white/90 text-stone-900 flex items-center justify-center shadow-md">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-stone-500">
                        <MapPin className="w-3 h-3 text-[#B89366]" />
                        <span>{project.location}</span>
                      </div>
                      <h4 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-stone-400 font-mono text-[11px]">
                      {project.builtUpArea}
                    </span>
                    <span className="font-semibold text-stone-900 group-hover:text-[#B89366] flex items-center gap-1">
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
