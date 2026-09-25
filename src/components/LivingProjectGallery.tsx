import React, { useState } from 'react';
import { 
  Project, 
  PROJECTS_DATA, 
  FEATURED_SHOWCASE_PROJECTS 
} from '../data/websiteData';
import { 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  Maximize2, 
  Layers, 
  Calendar, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  SlidersHorizontal,
  ChevronRight
} from 'lucide-react';

interface LivingProjectGalleryProps {
  onSelectProject: (project: Project) => void;
  onConsultSimilar: (projectName: string) => void;
  onNavigate: (page: string) => void;
}

// Gallery room custom color palettes & curatorial notes
const PROJECT_ROOM_CONFIG: Record<string, { accentColor: string; roomNumber: string; curatorialTheme: string; bgTone: string }> = {
  'courtyard-house': {
    accentColor: '#9C4A28', // Burnt Terracotta
    roomNumber: 'ROOM 01',
    curatorialTheme: 'Light as Primary Material',
    bgTone: '#FBF9F6'
  },
  'modern-villa': {
    accentColor: '#8C6842', // Patinated Bronze & Travertine
    roomNumber: 'ROOM 02',
    curatorialTheme: 'Monumental Volumes, Domestic Softness',
    bgTone: '#F8F7F4'
  },
  'urban-residence': {
    accentColor: '#4A5B49', // Forest Slate
    roomNumber: 'ROOM 03',
    curatorialTheme: 'Urban Density vs. Inner Sanctuary',
    bgTone: '#F6F8F6'
  },
  'commercial-studio': {
    accentColor: '#36454F', // Blueprint Charcoal
    roomNumber: 'ROOM 04',
    curatorialTheme: 'Collaborative Flow & Industrial Tactility',
    bgTone: '#F5F7F8'
  },
  'default': {
    accentColor: '#8C6842',
    roomNumber: 'ROOM 05',
    curatorialTheme: 'Architectural Craftsmanship',
    bgTone: '#F8F7F4'
  }
};

export const LivingProjectGallery: React.FC<LivingProjectGalleryProps> = ({
  onSelectProject,
  onConsultSimilar,
  onNavigate
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Architecture' | 'Interior Design' | 'Commercial & Retail'>('All');
  const [activePreviewImage, setActivePreviewImage] = useState<Record<string, string>>({});

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS_DATA.slice(0, 6)
    : PROJECTS_DATA.filter(p => p.category === selectedFilter).slice(0, 6);

  const handleThumbnailClick = (projectId: string, imageUrl: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActivePreviewImage(prev => ({ ...prev, [projectId]: imageUrl }));
  };

  return (
    <section 
      id="exhibition-gallery-rooms" 
      className="space-y-12 py-8"
      aria-label="Build Storys Living Gallery Rooms"
    >
      {/* Chapter Eyebrow & Filter Navigation */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E5E1D8] pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#8C6842]" />
            <span>CHAPTER 02 // EXHIBITION ROOMS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141312] leading-tight">
            Curated Spaces. <br className="hidden sm:inline" />
            <span className="italic text-[#8C6842]">Each a Room of its Own.</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every Build Storys project is designed with its own architectural voice, customized material palette, and spatial relationship to Bangalore's climate.
          </p>
        </div>

        {/* Gallery Discipline Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
          {(['All', 'Architecture', 'Interior Design', 'Commercial & Retail'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full transition-all border cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#141312] text-white border-[#141312] font-bold shadow-sm'
                  : 'bg-white text-stone-700 border-[#E5E1D8] hover:border-stone-400'
              }`}
            >
              {cat === 'All' ? 'All Rooms (250+)' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* The Gallery Rooms: Alternating Asymmetrical & Disciplined Exhibition Grid */}
      <div className="space-y-16">
        {filteredProjects.map((project, idx) => {
          const config = PROJECT_ROOM_CONFIG[project.id] || PROJECT_ROOM_CONFIG['default'];
          const currentMainImg = activePreviewImage[project.id] || project.heroImage;
          const isEven = idx % 2 === 0;

          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-3xl border border-stone-200/80 p-6 sm:p-10 lg:p-12 transition-all duration-500 hover:border-stone-400 hover:shadow-2xl relative overflow-hidden"
              style={{ backgroundColor: config.bgTone }}
            >
              {/* Corner crosshairs for architectural drafting discipline */}
              <div className="absolute top-4 left-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
              <div className="absolute top-4 right-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
              <div className="absolute bottom-4 left-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-stone-300 pointer-events-none">+</div>

              {/* Room Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200/80 pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <span 
                    className="px-3 py-1 rounded text-xs font-mono font-bold tracking-widest uppercase text-white shadow-sm"
                    style={{ backgroundColor: config.accentColor }}
                  >
                    {config.roomNumber}
                  </span>
                  <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                    {project.subCategory}
                  </span>
                </div>

                <div className="flex items-center gap-6 text-xs font-mono text-stone-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" style={{ color: config.accentColor }} />
                    <span>{project.location}</span>
                  </div>
                  <div>AREA: <span className="font-semibold text-stone-800">{project.builtUpArea}</span></div>
                  <div>YEAR: <span className="font-semibold text-stone-800">{project.completionYear}</span></div>
                </div>
              </div>

              {/* Main Exhibition Layout: Asymmetrical Photo & Story Column */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Photo & Material Gallery Frame (7 cols) */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  
                  {/* Master View Image */}
                  <div className="relative h-[340px] sm:h-[440px] rounded-2xl overflow-hidden bg-stone-900 shadow-md">
                    <img
                      src={currentMainImg}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                    {/* Curatorial theme badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-widest">
                      THEME: {config.curatorialTheme}
                    </div>

                    {/* Bottom image caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                      <div className="space-y-0.5">
                        <div className="text-[11px] font-mono text-[#E7CAA5] tracking-wider uppercase">
                          {project.clientOrPropertyType}
                        </div>
                        <div className="font-serif text-xl sm:text-2xl font-light">
                          {project.tagline}
                        </div>
                      </div>

                      <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono uppercase">
                        <Maximize2 className="w-3 h-3" />
                        <span>Inspect Dossier</span>
                      </div>
                    </div>
                  </div>

                  {/* Tactile Thumbnail Strip */}
                  <div className="flex items-center gap-3 overflow-x-auto pb-1">
                    {[project.heroImage, ...(project.galleryImages || [])].slice(0, 4).map((img, thumbIdx) => {
                      const isThumbActive = (activePreviewImage[project.id] || project.heroImage) === img;
                      return (
                        <button
                          key={thumbIdx}
                          onClick={(e) => handleThumbnailClick(project.id, img, e)}
                          className={`relative h-16 w-24 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                            isThumbActive
                              ? 'border-[#C85A32] scale-105 shadow-md'
                              : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      );
                    })}
                  </div>

                </div>

                {/* Editorial Story Column (5 cols) */}
                <div className={`lg:col-span-5 space-y-6 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  
                  <div className="space-y-3">
                    <span 
                      className="text-xs font-mono font-bold tracking-widest uppercase block"
                      style={{ color: config.accentColor }}
                    >
                      EXHIBITION DOSSIER // {project.category.toUpperCase()}
                    </span>

                    <h3 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 group-hover:text-[#8C6D46] transition-colors leading-tight">
                      {project.name}
                    </h3>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
                      {project.designChallenge}
                    </p>
                  </div>

                  {/* Architectural Solution Highlight */}
                  <div className="p-4 rounded-xl bg-white/80 border border-stone-200/90 space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                      Architectural Intervention:
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed font-sans">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tactile Material Specification Tags */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                      Material Palette:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.materialsUsed.slice(0, 4).map((mat, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-1 rounded bg-stone-100 text-stone-800 text-[11px] font-mono border border-stone-200"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Living Result */}
                  {project.results && project.results.length > 0 && (
                    <div className="flex items-start gap-2 text-xs text-stone-600 font-mono">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{project.results[0]}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="px-5 py-2.5 rounded-full bg-[#141312] hover:bg-[#8C6842] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                    >
                      <span>Examine Full Dossier</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onConsultSimilar(project.name);
                      }}
                      className="px-4 py-2.5 rounded-full bg-white hover:bg-stone-50 border border-[#E5E1D8] text-stone-800 text-xs font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Design Similar Project
                    </button>
                  </div>

                </div>

              </div>
            </article>
          );
        })}
      </div>

      {/* Gallery Footer Action (Nordic Luxury) */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#F1EFEB] text-[#141312] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E5E1D8] shadow-xs">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-xs font-mono uppercase text-[#8C6842] tracking-widest font-bold">
            250+ Architectural Projects Delivered Across Bengaluru
          </div>
          <h4 className="font-serif text-2xl font-normal text-[#141312]">
            Explore the complete archive of residential villas, penthouses and commercial spaces.
          </h4>
        </div>

        <button
          onClick={() => onNavigate('projects')}
          className="px-6 py-3 rounded-full bg-[#141312] hover:bg-[#8C6842] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <span>View Entire 250+ Project Archive</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};
