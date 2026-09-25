import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, Info, X, Check, Eye, Compass, Film, BookOpen, PenTool } from 'lucide-react';

export type ArtDirectionType = 'material-memory' | 'architectural-cinema' | 'living-gallery';

interface ExhibitionCuratorBarProps {
  currentDirection: ArtDirectionType;
  onChangeDirection: (dir: ArtDirectionType) => void;
}

export const ExhibitionCuratorBar: React.FC<ExhibitionCuratorBarProps> = ({
  currentDirection,
  onChangeDirection
}) => {
  const [isCuratorDossierOpen, setIsCuratorDossierOpen] = useState(false);

  const directions = [
    {
      id: 'material-memory' as ArtDirectionType,
      code: 'DIRECTION C (RECOMMENDED)',
      name: 'Material & Memory',
      tagline: 'From raw stone, timber & lines into places where life happens.',
      palette: ['#FAF8F5', '#16181D', '#C85A32', '#B89366', '#4A5B52'],
      paletteNames: 'Parchment · Deep Ink · Burnt Terracotta · Raw Bronze · Slate Moss',
      typography: 'Cormorant Garamond (Monumental Serif) + Manrope + Space Grotesk',
      motion: 'Narrative Material-to-Space dissolve, live charcoal lines becoming structure',
      spirit: 'Tactile, experimental, architectural sketchbook & specimen tags'
    },
    {
      id: 'architectural-cinema' as ArtDirectionType,
      code: 'DIRECTION A',
      name: 'Architectural Cinema',
      tagline: 'Immersive, 24fps atmospheric light, shadows & moving spatial film.',
      palette: ['#0A0B0D', '#FAF7F2', '#D5B890', '#343840', '#8C7760'],
      paletteNames: 'Nocturne Noir · Warm Chalk · Pale Brass · Smoked Glass · Patina',
      typography: 'Cinematic Wide Serif + Space Grotesk Monospace + Ultra-light Sans',
      motion: 'Continuous camera pan, daylight shifting across polished travertine',
      spirit: 'Moody, widescreen filmic pacing, soundscape-ready'
    },
    {
      id: 'living-gallery' as ArtDirectionType,
      code: 'DIRECTION B',
      name: 'The Living Gallery',
      tagline: 'Editorial, minimal, museum index with numbered white cube rooms.',
      palette: ['#FFFFFF', '#141416', '#8F9094', '#C9A96E', '#EAE7E2'],
      paletteNames: 'Gallery White · Museum Carbon · Lead Pencil · Gilded Edge · French Paper',
      typography: 'Sharp High-Contrast Didone Serif + Plus Jakarta Sans + Monoline Numerals',
      motion: 'Card catalog slider, horizontal editorial curtain reveals',
      spirit: 'Restrained, collector catalogue, generous negative space'
    }
  ];

  const activeDirObj = directions.find(d => d.id === currentDirection) || directions[0];

  return (
    <>
      {/* Sleek Top Exhibition Curation Banner (Nordic Luxury) */}
      <div className="bg-[#F8F7F4] text-stone-800 border-b border-[#E5E1D8] text-xs py-2 px-4 sm:px-8 relative z-40 transition-colors">
        <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#8C6842]/10 border border-[#8C6842]/30 text-[#8C6842] font-mono text-[10px] tracking-wider uppercase font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6842] animate-pulse" />
              DIGITAL EXHIBITION
            </span>
            <span className="text-[11px] font-mono text-stone-600 hidden md:inline">
              Curatorial Theme: <span className="text-stone-900 font-semibold">“From Material to Memory”</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center bg-white p-0.5 rounded-lg border border-[#E5E1D8] text-[11px] font-mono shadow-2xs">
              <button
                onClick={() => onChangeDirection('material-memory')}
                className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentDirection === 'material-memory'
                    ? 'bg-[#141312] text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
                title="Tactile, narrative-led exhibition: Raw elements to memory"
              >
                <PenTool className="w-3 h-3 text-[#A67C52]" />
                <span className="hidden xs:inline">Material &amp; Memory</span>
                <span className="xs:hidden">Material</span>
              </button>

              <button
                onClick={() => onChangeDirection('architectural-cinema')}
                className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentDirection === 'architectural-cinema'
                    ? 'bg-[#141312] text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
                title="Atmospheric, film-led cinema direction"
              >
                <Film className="w-3 h-3 text-[#A67C52]" />
                <span className="hidden xs:inline">Arch. Cinema</span>
                <span className="xs:hidden">Cinema</span>
              </button>

              <button
                onClick={() => onChangeDirection('living-gallery')}
                className={`px-2.5 py-1 rounded transition-all flex items-center gap-1.5 cursor-pointer ${
                  currentDirection === 'living-gallery'
                    ? 'bg-[#141312] text-white font-bold shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
                title="Minimalist editorial museum catalogue"
              >
                <BookOpen className="w-3 h-3 text-[#A67C52]" />
                <span className="hidden xs:inline">Living Gallery</span>
                <span className="xs:hidden">Gallery</span>
              </button>
            </div>

            <button
              onClick={() => setIsCuratorDossierOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8C6842] hover:text-stone-900 transition-colors px-2.5 py-1 rounded-full hover:bg-stone-100 border border-[#E5E1D8] font-semibold cursor-pointer"
              title="Examine Curator's Notes on the 3 Art Directions"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Curator Notes</span>
            </button>
          </div>
        </div>
      </div>

      {/* Curator Dossier Slide-Over / Modal (Light Luxury) */}
      {isCuratorDossierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#FAF8F5] text-stone-800 rounded-3xl border border-[#D6D1C7] p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            
            <div className="flex items-start justify-between border-b border-[#E7E5E0] pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9A7049] font-bold">
                  // CURATORIAL PROPOSAL &amp; EXHIBITION CRITIQUE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-stone-900">
                  Three Architectural Art Directions for Build Storys
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 font-mono">
                  Comparative breakdown: Desktop, Mobile, Motion, Typographic Grid &amp; Service Aesthetics
                </p>
              </div>

              <button
                onClick={() => setIsCuratorDossierOpen(false)}
                className="p-2 rounded-full hover:bg-stone-200 text-stone-500 hover:text-stone-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Directions Comparative Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {directions.map((dir) => {
                const isSelected = dir.id === currentDirection;
                return (
                  <div
                    key={dir.id}
                    onClick={() => onChangeDirection(dir.id)}
                    className={`cursor-pointer rounded-2xl p-5 border transition-all space-y-4 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-[#9A7049] ring-2 ring-[#9A7049]/40 shadow-md'
                        : 'bg-[#F5F2EB]/60 border-[#E7E5E0] hover:border-[#D6D1C7] hover:bg-white'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono tracking-wider text-[#9A7049] font-bold">
                          {dir.code}
                        </span>
                        {isSelected && (
                          <span className="px-2 py-0.5 rounded bg-[#9A7049] text-white text-[9px] font-mono font-bold uppercase">
                            Active
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-xl font-bold text-stone-900">
                        {dir.name}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed font-sans">
                        {dir.tagline}
                      </p>

                      {/* Swatch palette */}
                      <div className="space-y-1.5 pt-2">
                        <div className="text-[10px] font-mono uppercase text-stone-400">Palette:</div>
                        <div className="flex items-center gap-1.5">
                          {dir.palette.map((col, idx) => (
                            <span
                              key={idx}
                              className="w-5 h-5 rounded border border-stone-300 shadow-2xs"
                              style={{ backgroundColor: col }}
                              title={col}
                            />
                          ))}
                        </div>
                        <div className="text-[10px] font-mono text-stone-500 truncate">
                          {dir.paletteNames}
                        </div>
                      </div>

                      {/* Typography & Motion summary */}
                      <div className="space-y-2 text-[11px] font-mono text-stone-600 pt-2 border-t border-stone-200">
                        <div>
                          <span className="text-stone-400 block text-[10px]">TYPOGRAPHY:</span>
                          <span className="text-stone-800">{dir.typography}</span>
                        </div>
                        <div>
                          <span className="text-stone-400 block text-[10px]">MOTION CONCEPT:</span>
                          <span className="text-stone-800">{dir.motion}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onChangeDirection(dir.id);
                      }}
                      className={`w-full py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all mt-4 ${
                        isSelected
                          ? 'bg-[#1C1917] text-white'
                          : 'bg-white border border-[#D6D1C7] hover:border-stone-800 text-stone-800'
                      }`}
                    >
                      {isSelected ? 'Currently Viewing' : 'Switch To This Direction'}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Recommendation Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#9A7049]/40 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#9A7049] uppercase">
                <Sparkles className="w-4 h-4 text-[#9A7049]" />
                <span>Curatorial Recommendation: Direction C (Material &amp; Memory)</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
                Direction C roots Build Storys in the visceral reality of authentic architecture: raw materials (Bengaluru granite, seasoned teak, cast brass) transitioning into lived memory. It avoids luxury clichés by treating construction drawings, sketches, and physical specimens as tactile art.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setIsCuratorDossierOpen(false)}
                className="px-6 py-2.5 rounded-full bg-[#1C1917] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#9A7049] transition-colors"
              >
                Close &amp; Resume Exhibition
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
