import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, Sliders, Layers, Compass, CheckCircle2, Maximize2 } from 'lucide-react';
import { Project, PROJECTS_DATA } from '../data/websiteData';

interface MaterialSpecimen {
  id: string;
  name: string;
  category: 'Stone' | 'Timber' | 'Concrete' | 'Metal' | 'Ceramic';
  finish: string;
  quarryOrOrigin: string;
  architecturalPurpose: string;
  tactileTextureImage: string;
  completedSpaceImage: string;
  associatedProjectName: string;
  associatedProjectId: string;
  colorHex: string;
  spatialOutcome: string;
}

const SPECIMENS: MaterialSpecimen[] = [
  {
    id: 'granite',
    name: 'Sadarahalli Grey Granite',
    category: 'Stone',
    finish: 'Honed with Water-Jet Flamed Edges',
    quarryOrOrigin: 'Sadarahalli Quarries, Karnataka',
    architecturalPurpose: 'Thermal mass retention, courtyard flooring & monolithic water-channel coping',
    tactileTextureImage: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85',
    completedSpaceImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    associatedProjectName: 'The Courtyard House',
    associatedProjectId: 'courtyard-house',
    colorHex: '#7C8187',
    spatialOutcome: 'Maintains cool floor temperatures even during peak Bangalore summers with zero artificial cooling.'
  },
  {
    id: 'teak',
    name: 'Seasoned Burma Teak',
    category: 'Timber',
    finish: 'Natural Matte Hardwax Oil',
    quarryOrOrigin: 'Sustainably Managed Certified Groves',
    architecturalPurpose: 'Acoustic ceiling baffles, bespoke privacy louvers & concealed cabinetry',
    tactileTextureImage: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=85',
    completedSpaceImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    associatedProjectName: 'The Modern Villa',
    associatedProjectId: 'modern-villa',
    colorHex: '#B57C48',
    spatialOutcome: 'Softens the monumental concrete architecture with warm acoustic balance and human touch.'
  },
  {
    id: 'concrete',
    name: 'Board-Formed Concrete',
    category: 'Concrete',
    finish: 'Raw Exposed with Pine Grain Embossment',
    quarryOrOrigin: 'Cast In-Situ on Site',
    architecturalPurpose: 'Post-tensioned cantilevered overhangs & monolithic feature envelope',
    tactileTextureImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    completedSpaceImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85',
    associatedProjectName: 'The Minimalist Residence',
    associatedProjectId: 'urban-residence',
    colorHex: '#939598',
    spatialOutcome: 'Creates a maintenance-free external skin that weathers gracefully across decades.'
  },
  {
    id: 'brass',
    name: 'Sand-Cast Unlacquered Brass',
    category: 'Metal',
    finish: 'Brushed Satin with Living Patina',
    quarryOrOrigin: 'Artisanal Foundry, Karnataka',
    architecturalPurpose: 'Pivot door hardware, concealed lighting tracks & bespoke joinery trims',
    tactileTextureImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=85',
    completedSpaceImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    associatedProjectName: 'Luxury Penthouse Atelier',
    associatedProjectId: 'commercial-studio',
    colorHex: '#C5A880',
    spatialOutcome: 'Develops a bespoke patina tailored to the family’s daily touchpoints over generations.'
  },
  {
    id: 'terracotta',
    name: 'Handcrafted Terracotta Jaali',
    category: 'Ceramic',
    finish: 'Natural Sun-Baked Earth',
    quarryOrOrigin: 'Local Clay Kilns, South India',
    architecturalPurpose: 'Bioclimatic shading breezeway & vertical light filtration screens',
    tactileTextureImage: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=1200&q=85',
    completedSpaceImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85',
    associatedProjectName: 'The Urban Residence',
    associatedProjectId: 'urban-residence',
    colorHex: '#C85A32',
    spatialOutcome: 'Filters direct solar radiation while channeling southern breeze into interior living levels.'
  }
];

interface MaterialToSpaceSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const MaterialToSpaceSection: React.FC<MaterialToSpaceSectionProps> = ({
  onSelectProject,
  onOpenConsultation
}) => {
  const [activeSpecimenId, setActiveSpecimenId] = useState<string>('granite');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // 0 (100% material) to 100 (100% space)

  const activeSpecimen = SPECIMENS.find(s => s.id === activeSpecimenId) || SPECIMENS[0];

  const handleRevealProject = () => {
    const proj = PROJECTS_DATA.find(p => p.id === activeSpecimen.associatedProjectId) || PROJECTS_DATA[0];
    onSelectProject(proj);
  };

  return (
    <section 
      id="exhibition-materiality"
      className="space-y-12 py-8"
      aria-label="Material to Space Transition Exhibition"
    >
      {/* Chapter Eyebrow & Editorial Headline */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#E5E1D8] pb-8">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#8C6842] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#8C6842]" />
            <span>CHAPTER 03 // TACTILE MATERIALITY</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141312] leading-tight">
            From Raw Element <br className="hidden sm:inline" />
            <span className="italic text-[#8C6842]">to Living Space.</span>
          </h2>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Drag the slider to witness how honest earth, rough-hewn stone, and seasoned timber resolve into finished architectural sanctuaries.
          </p>
        </div>

        {/* Specimen Category Selector */}
        <div className="flex flex-wrap gap-2">
          {SPECIMENS.map((spec) => {
            const isSelected = spec.id === activeSpecimenId;
            return (
              <button
                key={spec.id}
                onClick={() => {
                  setActiveSpecimenId(spec.id);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 cursor-pointer border ${
                  isSelected
                    ? 'bg-[#141312] text-white border-[#141312] shadow-md font-bold'
                    : 'bg-white text-stone-700 border-[#E5E1D8] hover:border-stone-400 hover:bg-stone-50'
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: spec.colorHex }}
                />
                <span>{spec.name.split(' ')[0]}</span>
                <span className="text-[10px] opacity-60 uppercase">({spec.category})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: The Interactive Material-to-Space Dissolve Canvas (7 cols) */}
        <div className="lg:col-span-7 bg-[#F1EFEB] rounded-3xl overflow-hidden relative shadow-md border border-[#E5E1D8] min-h-[420px] sm:min-h-[500px] flex flex-col justify-between group select-none">
          
          {/* Layer A: Raw Tactile Texture (Bottom) */}
          <div className="absolute inset-0">
            <img
              src={activeSpecimen.tactileTextureImage}
              alt={`Raw ${activeSpecimen.name} texture`}
              className="w-full h-full object-cover"
            />
            {/* Texture badge */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#141312] border border-[#E5E1D8] font-bold shadow-2xs">
              [RAW SPECIMEN] {activeSpecimen.name}
            </div>
          </div>

          {/* Layer B: Finished Architecture Space (Revealed via Clip-Path) */}
          <div 
            className="absolute inset-0 transition-[clip-path] duration-75 ease-out"
            style={{
              clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`
            }}
          >
            <img
              src={activeSpecimen.completedSpaceImage}
              alt={`Built ${activeSpecimen.associatedProjectName}`}
              className="w-full h-full object-cover"
            />
            {/* Space badge */}
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#8C6842] border border-[#E5E1D8] font-bold shadow-2xs">
              [FINISHED SPACE] {activeSpecimen.associatedProjectName}
            </div>
          </div>

          {/* Vertical Divider Line with tactile grip handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.4)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white text-stone-900 shadow-xl flex items-center justify-center text-xs font-mono font-bold border-2 border-stone-300">
              <Sliders className="w-4 h-4 text-stone-800" />
            </div>
          </div>

          {/* Hidden full range input for smooth mouse/touch dragging */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={(e) => setSliderPosition(Number(e.target.value))}
            aria-label="Drag to dissolve between raw material and finished space"
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
          />

          {/* Bottom caption controls on image */}
          <div className="relative z-10 p-5 mt-auto bg-gradient-to-t from-black/80 via-black/35 to-transparent flex flex-wrap items-center justify-between gap-3 text-white text-xs font-mono pointer-events-none">
            <div className="flex items-center gap-2">
              <span className="text-[#E7CAA5] font-bold">&larr; RAW MATERIAL</span>
              <span className="text-stone-300 font-mono">({sliderPosition}%)</span>
              <span className="text-emerald-300 font-bold">COMPLETED SPACE &rarr;</span>
            </div>

            <div className="text-[10px] text-stone-300 font-mono tracking-wider">
              DRAG ACROSS TO REVEAL
            </div>
          </div>
        </div>

        {/* Right: Architectural Material Specimen Dossier (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E5E1D8] p-6 sm:p-8 flex flex-col justify-between shadow-xs space-y-6 relative overflow-hidden">
          
          {/* Corner crosshair mark */}
          <div className="absolute top-3 right-3 text-xs font-mono text-stone-300 pointer-events-none">+</div>
          <div className="absolute bottom-3 right-3 text-xs font-mono text-stone-300 pointer-events-none">+</div>

          <div className="space-y-4">
            
            <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-3">
              <span className="px-2.5 py-0.5 rounded-full bg-[#F8F7F4] text-[10px] font-mono text-[#8C6842] font-bold uppercase tracking-wider border border-[#E5E1D8]">
                MATERIAL DOSSIER // {activeSpecimen.category}
              </span>
              <span className="text-xs font-mono text-stone-400">
                REF #{activeSpecimen.id.toUpperCase()}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141312]">
                {activeSpecimen.name}
              </h3>
              <div className="text-xs font-mono text-[#8C6842] font-semibold">
                Finish: {activeSpecimen.finish}
              </div>
            </div>

            {/* Technical Spec Matrix */}
            <div className="space-y-2.5 pt-2 text-xs">
              <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block font-semibold">
                  Origin &amp; Provenance:
                </span>
                <span className="font-medium text-[#141312] font-sans">
                  {activeSpecimen.quarryOrOrigin}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E5E1D8] space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 block font-semibold">
                  Architectural Intent:
                </span>
                <span className="text-stone-700 leading-relaxed font-sans">
                  {activeSpecimen.architecturalPurpose}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                  Living Spatial Outcome:
                </span>
                <span className="text-stone-800 text-xs leading-relaxed font-sans">
                  {activeSpecimen.spatialOutcome}
                </span>
              </div>
            </div>

          </div>

          {/* Action to examine the full completed project */}
          <div className="pt-4 border-t border-[#E5E1D8] flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={handleRevealProject}
              className="flex-1 px-4 py-2.5 rounded-full bg-[#141312] hover:bg-[#8C6842] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <span>Examine {activeSpecimen.associatedProjectName}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-full bg-white border border-[#E5E1D8] hover:border-stone-900 text-stone-900 text-xs font-mono font-bold uppercase tracking-wider transition-colors text-center cursor-pointer"
            >
              Specify for My Site
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
