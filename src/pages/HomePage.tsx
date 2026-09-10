import React from 'react';
import { Hero } from '../components/Hero';
import { 
  COMPANY_PROFILE, 
  FEATURED_SHOWCASE_PROJECTS, 
  PROJECTS_DATA,
  SERVICES_DATA, 
  SEVEN_STEP_PROCESS, 
  CLIENT_PROPERTY_ASSOCIATIONS, 
  Project 
} from '../data/websiteData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { CostEstimator } from '../components/CostEstimator';
import { 
  Building, 
  Armchair, 
  Key, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Compass, 
  Calculator, 
  Quote 
} from 'lucide-react';

interface HomePageProps {
  onOpenConsultation: () => void;
  onSelectProject: (project: Project) => void;
  onNavigate: (page: string) => void;
  onApplyEstimate: (details: { service: string; area: string; budget: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onSelectProject,
  onNavigate,
  onApplyEstimate
}) => {
  return (
    <div className="space-y-20 pb-20">
      {/* 1. Master Signature Video Hero Banner */}
      <Hero
        onOpenConsultation={onOpenConsultation}
        onExploreProjects={() => onNavigate('projects')}
        onExploreProcess={() => onNavigate('process')}
        onSelectDiscipline={(disc) => {
          if (disc === 'styling') {
            onNavigate('services/interiors');
          } else {
            onNavigate(`services/${disc}`);
          }
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-24">

        {/* 2. Studio Introduction & 4 Pillars with Creative Cards */}
        <section className="space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-stone-200 pb-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                // ARCHITECTURAL ATELIER
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
                Architecture, Interiors &amp; Master Craftsmanship.
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Build Storys Infrastructure brings together licensed architects, interior designers, and structural engineers in Sahakar Nagar, Bengaluru. We bridge the critical gap between blueprint vision and physical reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white border border-stone-300 hover:border-[#C5A880] text-stone-900 text-xs font-mono font-bold uppercase tracking-wider transition-all"
              >
                <span>Read Full Manifesto</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B89366]" />
              </button>
            </div>
          </div>

          {/* 4 Pillars Creative Blueprint Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_PROFILE.pillars.map((pillar, idx) => (
              <div
                key={pillar.code}
                className="group relative bg-white rounded-xl p-6 border border-stone-200/90 hover:border-[#C5A880] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] flex flex-col justify-between overflow-hidden"
              >
                {/* Corner registration mark */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] transition-colors">+</div>

                {/* Top accent bar */}
                <div className="w-10 h-0.5 bg-stone-200 group-hover:bg-[#C5A880] group-hover:w-full transition-all duration-500 mb-5" />

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-[#FAF8F5] border border-stone-200 text-[10px] font-mono font-bold text-[#B89366]">
                      {pillar.code}
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>Standard Benchmark</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Core Disciplines / Services Teaser with Creative Cards */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Specialized Practices
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Integrated Design &amp; Build Disciplines
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 hover:text-[#B89366] uppercase tracking-wider"
            >
              <span>View All 9 Disciplines</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                id: 'architecture',
                name: 'Architecture & Sanctions',
                code: 'DISCIPLINE 01',
                tag: 'Bioclimatic & Structural',
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
                desc: 'Villas, independent residences, and commercial complexes with BBMP/BDA bylaws clearance.'
              },
              {
                id: 'interiors',
                name: 'Bespoke Luxury Interiors',
                code: 'DISCIPLINE 02',
                tag: 'Artisanal Millwork',
                image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
                desc: 'Italian marble sourcing, concealed joinery, custom lighting design, and sensory fabrics.'
              },
              {
                id: 'turnkey',
                name: 'Turnkey Design-Build',
                code: 'DISCIPLINE 03',
                tag: 'Zero-Escalation BOQ',
                image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1200&q=85',
                desc: 'Single-source contractual accountability from structural earthwork to final keys.'
              },
              {
                id: 'visualisation',
                name: '3D CGI & BIM Walkthrough',
                code: 'DISCIPLINE 04',
                tag: 'Digital Twin',
                image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
                desc: 'Photorealistic architectural visualizations and clash-detection BIM models.'
              }
            ].map((disc) => (
              <div
                key={disc.id}
                onClick={() => onNavigate(`services/${disc.id}`)}
                className="group cursor-pointer bg-white rounded-xl border border-stone-200/90 hover:border-[#C5A880] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden relative"
              >
                <div className="relative h-48 overflow-hidden bg-stone-900">
                  <img src={disc.image} alt={disc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#C5A880] border border-[#C5A880]/30 font-bold uppercase">
                    {disc.code}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono text-[#C5A880] block uppercase">{disc.tag}</span>
                    <h3 className="font-serif text-xl font-bold group-hover:text-[#E7CAA5] transition-colors">{disc.name}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {disc.desc}
                  </p>
                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono font-bold text-stone-900 group-hover:text-[#B89366] uppercase tracking-wider">
                    <span>Explore Discipline</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Featured Projects with Creative Blueprint Cards */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Selected Portfolio
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Signature Residential &amp; Commercial Works
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 hover:text-[#B89366] uppercase tracking-wider"
              >
                <span>Browse All Projects (250+)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_SHOWCASE_PROJECTS.map((item) => {
              const fullProject = PROJECTS_DATA.find((p) => p.id === item.id) || PROJECTS_DATA[0];
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectProject(fullProject)}
                  className="group cursor-pointer bg-white rounded-xl border border-stone-200/90 hover:border-[#C5A880] transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] flex flex-col justify-between overflow-hidden relative"
                >
                  {/* Crosshairs */}
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>

                  <div className="relative h-64 overflow-hidden bg-stone-900">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#C5A880] border border-[#C5A880]/30 font-semibold uppercase">
                        {fullProject.subCategory}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/20 uppercase tracking-widest">
                        {fullProject.status}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white space-y-1">
                      <div className="text-[11px] font-mono text-[#E5CEB0]">{fullProject.builtUpArea} &bull; {item.location}</div>
                      <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-[#E7CAA5] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between bg-white">
                    <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {fullProject.tagline || item.description}
                    </p>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-1 text-stone-500">
                        <MapPin className="w-3.5 h-3.5 text-[#B89366]" />
                        <span className="truncate">{item.location}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 font-bold text-stone-900 group-hover:text-[#B89366] transition-colors uppercase">
                        <span>Inspect Dossier</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. The 7-Step Method Teaser */}
        <section className="bg-[#14171B] rounded-3xl text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-stone-800 pb-8">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#C5A880] uppercase">
                // EXECUTION DISCIPLINE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Build Storys 7-Step Framework
              </h2>
              <p className="text-stone-400 text-xs sm:text-sm">
                How we deliver architectural perfection on time with 0% unapproved cost escalation.
              </p>
            </div>

            <button
              onClick={() => onNavigate('process')}
              className="px-5 py-2.5 rounded bg-[#C5A880] hover:bg-[#D5B890] text-[#14171B] text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-auto"
            >
              Explore All 7 Steps &rarr;
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {SEVEN_STEP_PROCESS.map((s, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('process')}
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#C5A880] hover:bg-white/10 transition-all cursor-pointer space-y-2 group"
              >
                <div className="font-mono text-[10px] text-[#C5A880] font-bold">{s.stepCode}</div>
                <div className="font-serif text-sm font-bold text-white group-hover:text-[#C5A880] transition-colors line-clamp-2">{s.title}</div>
                <div className="text-[10px] font-mono text-stone-400">{s.duration}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Before & After Transformation Teaser */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B89366] uppercase">
                Live Before &amp; After
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
                Interactive Spatial Metamorphosis
              </h2>
            </div>
            <button
              onClick={() => onNavigate('transformations')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 hover:text-[#B89366] uppercase tracking-wider"
            >
              <span>Explore All Transformations</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <BeforeAfterSlider />
        </section>

        {/* 7. Cost Estimator Teaser */}
        <section className="space-y-6">
          <CostEstimator onApplyEstimateToConsultation={onApplyEstimate} />
        </section>

        {/* 8. Studio Visit & Direct Consultation Banner */}
        <section className="rounded-3xl bg-gradient-to-r from-stone-900 via-[#1C2026] to-stone-900 p-8 sm:p-14 text-white border border-stone-800 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5A880]">
              Sahakar Nagar Design Atelier
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Ready to build your next story in Bengaluru?
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
              Touch real material samples, review zoning feasibility for your plot, or bring your floor plans for a 45-minute vision session with our Principal Architect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded bg-[#C5A880] hover:bg-[#D5B890] text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
            >
              Book Vision Session
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition-all text-center"
            >
              Studio Directions &amp; Hours
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
