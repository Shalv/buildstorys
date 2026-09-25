import React, { useState, useEffect } from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { PROJECTS_DATA, Project, FEATURED_SHOWCASE_PROJECTS } from '../data/websiteData';
import { 
  Building, 
  MapPin, 
  ArrowUpRight, 
  Sparkles, 
  Search, 
  Maximize2,
  Layers,
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';

interface ProjectsPageProps {
  subHeading?: string; // 'all' | 'architecture' | 'interiors' | 'commercial' | 'industrial'
  onSelectProject: (project: Project) => void;
  onConsultSimilar: (projectName: string) => void;
  onNavigate: (page: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  subHeading = 'all',
  onSelectProject,
  onConsultSimilar,
  onNavigate
}) => {
  // Normalize category from subHeading
  const initialCategory = 
    subHeading === 'architecture' ? 'Architecture' :
    subHeading === 'interiors' ? 'Interior Design' :
    subHeading === 'commercial' ? 'Commercial & Retail' :
    subHeading === 'industrial' ? 'Industrial' : 'All';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [subHeading]);

  const handleTabChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'All') onNavigate('projects');
    else if (cat === 'Architecture') onNavigate('projects/architecture');
    else if (cat === 'Interior Design') onNavigate('projects/interiors');
    else if (cat === 'Commercial & Retail') onNavigate('projects/commercial');
    else if (cat === 'Industrial') onNavigate('projects/industrial');
  };

  // Video backgrounds for project categories
  const videoConfig: Record<string, { video: string; poster: string; title: string; italic: string; desc: string }> = {
    'Architecture': {
      video: 'https://assets.mixkit.co/videos/4854/4854-360.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
      title: 'Architectural Landmarks & Villas',
      italic: 'Sculptural forms, cantilevered volumes, and bioclimatic courtyards.',
      desc: 'Selected private villas, luxury multi-generation residences, and contemporary bungalows designed and executed across North and South Bengaluru.'
    },
    'Interior Design': {
      video: 'https://assets.mixkit.co/videos/4046/4046-360.mp4',
      poster: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90',
      title: 'Luxury Residential Interior Portfolio',
      italic: 'Curated Italian marbles, concealed joinery, and tailored lighting.',
      desc: 'From high-end residences at Phoenix Kessaku and Sobha City to bespoke penthouses, explore how we transform bare shells into sensory sanctuaries.'
    },
    'Commercial & Retail': {
      video: 'https://assets.mixkit.co/videos/4339/4339-360.mp4',
      poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=90',
      title: 'Commercial & Retail Architecture',
      italic: 'High-performance workspaces, boutique retail, and hospitality environments.',
      desc: 'Workspaces engineered for productivity, brand identity, and long-term acoustic and visual comfort in Bangalore’s prime commercial corridors.'
    },
    'Industrial': {
      video: 'https://assets.mixkit.co/videos/30431/30431-360.mp4',
      poster: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2400&q=90',
      title: 'Industrial & High-Tech Facilities',
      italic: 'Rigorous engineering, structural steel, and turnkey logistical efficiency.',
      desc: 'Precision industrial campuses such as Texel Industries, featuring PEB structures, clean-span floors, and integrated administrative wings.'
    },
    'All': {
      video: 'https://assets.mixkit.co/pmh3ird448ok9qq7108ddcrk1uqc',
      poster: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=95',
      title: 'Spaces With Meaning',
      italic: 'Curated architectural & interior portfolio spanning 250+ delivered spaces.',
      desc: 'Explore Build Storys portfolio across Bangalore. Each project represents a collaborative journey between client aspiration, architectural discipline, and artisan craftsmanship.'
    }
  };

  const currentHero = videoConfig[activeCategory] || videoConfig['All'];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesQuery = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc={currentHero.video}
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster={currentHero.poster}
        badge={`// PORTFOLIO ARCHIVE // ${activeCategory.toUpperCase()}`}
        title={currentHero.title}
        italicTitle={currentHero.italic}
        description={currentHero.desc}
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Projects', action: () => handleTabChange('All') },
          ...(activeCategory !== 'All' ? [{ label: activeCategory }] : [])
        ]}
        metrics={[
          { value: '250+', label: 'Delivered Projects' },
          { value: '1.2M+', label: 'Sq. Ft. Built' },
          { value: '99%', label: 'Client Satisfaction' },
          { value: '100%', label: 'On-Time Handover' }
        ]}
        primaryCta={{
          text: 'Book Project Consultation',
          action: () => onConsultSimilar(activeCategory !== 'All' ? activeCategory : 'Custom Portfolio Project')
        }}
        secondaryCta={{
          text: 'Explore 7-Step Method',
          action: () => onNavigate('process')
        }}
      />

      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* 2. Category Sub-Heading Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E5E1D8] pb-6">
          {/* Sub-heading category tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'All', label: 'All Projects (250+)' },
              { id: 'Architecture', label: 'Architecture & Villas' },
              { id: 'Interior Design', label: 'Luxury Interiors' },
              { id: 'Commercial & Retail', label: 'Commercial & Retail' },
              { id: 'Industrial', label: 'Industrial Facilities' }
            ].map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#141312] text-[#8C6842] font-bold shadow-xs border border-[#141312]'
                      : 'bg-white border border-[#E5E1D8] text-stone-700 hover:text-stone-950 hover:border-stone-400'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#8C6842]' : 'bg-stone-300'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input 
              type="text"
              placeholder="Search project, location, specs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-[#E5E1D8] text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#8C6842] shadow-2xs"
            />
          </div>
        </div>

        {/* 3. Creative Blueprint Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-2xl border border-[#E5E1D8] hover:border-[#8C6842] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden relative"
            >
              {/* Corner crosshairs */}
              <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#8C6842] z-20 pointer-events-none">+</div>
              <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#8C6842] z-20 pointer-events-none">+</div>
              <div className="absolute bottom-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#8C6842] z-20 pointer-events-none">+</div>

              {/* Top Image Preview */}
              <div className="relative h-64 overflow-hidden bg-stone-900">
                <img 
                  src={project.heroImage} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#8C6842] border border-[#8C6842]/30 uppercase tracking-wider font-semibold">
                    {project.subCategory}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/20 uppercase tracking-widest">
                    {project.status}
                  </span>
                </div>

                {/* Overlay Metadata on Image Bottom */}
                <div className="absolute bottom-3 left-4 right-4 text-white space-y-1">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#E5CEB0]">
                    <span>// {project.id}</span>
                    <span>&bull;</span>
                    <span>{project.builtUpArea}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-[#8C6842] transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>

              {/* Body Specifications */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>

                {/* Materials Used Tag Array */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-stone-400 font-bold">
                    Primary Materials
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materialsUsed.slice(0, 3).map((mat, mIdx) => (
                      <span
                        key={mIdx}
                        className="px-2 py-0.5 rounded bg-[#F8F7F4] border border-[#E5E1D8] text-[10px] font-mono text-stone-700"
                      >
                        {mat}
                      </span>
                    ))}
                    {project.materialsUsed.length > 3 && (
                      <span className="text-[10px] font-mono text-stone-400 self-center">
                        +{project.materialsUsed.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-stone-500">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6842]" />
                    <span className="truncate">{project.location}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 font-bold text-stone-900 group-hover:text-[#8C6842] transition-colors uppercase tracking-wider">
                    <span>Inspect Dossier</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>

              {/* Bottom Accent line */}
              <div className="h-0.5 bg-transparent group-hover:bg-[#8C6842] transition-colors" />
            </div>
          ))}
        </div>

        {/* Empty state if search returned 0 results */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center bg-white rounded-2xl border border-[#E5E1D8] space-y-4">
            <p className="font-serif text-2xl text-stone-700">No projects found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs font-mono text-stone-500">Try searching for &quot;Villa&quot;, &quot;Phoenix Kessaku&quot;, &quot;Hebbal&quot;, or &quot;Industrial&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="px-4 py-2 rounded-full bg-[#141312] text-white text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Consultation Callout */}
        <div className="rounded-3xl bg-[#F8F7F4] border border-[#E5E1D8] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8C6842]">
              Architectural Feasibility
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#141312]">
              Have a plot or bare-shell property in Bengaluru?
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl">
              Our architects provide initial site zoning analysis, floor-area ratio (FAR) calculations, and preliminary spatial orientation.
            </p>
          </div>

          <button
            onClick={() => onConsultSimilar('New Architectural Project')}
            className="px-6 py-3 rounded-full bg-[#141312] hover:bg-[#8C6842] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-xs"
          >
            Request Site Feasibility
          </button>
        </div>

      </div>
    </div>
  );
};
