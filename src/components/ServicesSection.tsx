import React, { useState } from 'react';
import { 
  Building, 
  Armchair, 
  Home, 
  Key, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/websiteData';

interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceName: string) => void;
  onNavigateDiscipline?: (subHeading: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForConsultation,
  onNavigateDiscipline
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const categories = ['All', 'Architecture', 'Interior Design', 'Turnkey'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              // DISCIPLINES &amp; EXECUTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900">
              Services Shaped Around You
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Architecture and interior design in Bangalore, shaped by precision, innovation and purpose. From concept to execution, we deliver thoughtful residential, commercial, retail and industrial spaces.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 font-mono">
              {SERVICES_DATA.length} Verified Disciplines
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#14171B] text-[#C5A880] shadow-xs font-bold'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {cat === 'Architecture' && <Building className="w-3.5 h-3.5" />}
                {cat === 'Interior Design' && <Armchair className="w-3.5 h-3.5" />}
                {cat === 'Turnkey' && <Key className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid with Creative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <div 
                key={service.id}
                className="group rounded-2xl bg-[#FAF8F5] border border-stone-200/90 overflow-hidden hover:border-[#C5A880] shadow-[0_4px_20px_-4px_rgba(28,25,23,0.06)] hover:shadow-[0_16px_32px_-8px_rgba(197,168,128,0.2)] transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Corner registration ticks */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-stone-300 group-hover:text-[#C5A880] z-20 pointer-events-none">+</div>

                {/* Image & Header */}
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-900">
                    <img 
                      src={service.image} 
                      alt={service.service}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    {/* Official Number Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded bg-black/60 backdrop-blur-md text-[#C5A880] text-xs font-mono font-bold flex items-center justify-center border border-[#C5A880]/40">
                        {service.serviceNumber}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-stone-200 text-[10px] font-mono uppercase tracking-wider font-semibold border border-white/20">
                        {service.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold group-hover:text-[#E7CAA5] transition-colors leading-tight">
                        {service.service}
                      </h3>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Major Capabilities List */}
                    <div className="space-y-2 pt-3 border-t border-stone-200">
                      <div className="text-[10px] font-mono uppercase font-bold text-stone-400 tracking-wider">
                        Core Competencies
                      </div>
                      <ul className="space-y-1.5">
                        {service.majorCapabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables toggle */}
                    <div className="pt-3 border-t border-stone-200">
                      <button
                        onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                        className="w-full flex items-center justify-between text-xs font-mono font-bold text-stone-700 hover:text-[#B89366] transition-colors py-1 focus:outline-none"
                      >
                        <span className="flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5 text-[#B89366]" />
                          <span>{service.typicalDeliverables.length} Deliverables</span>
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#B89366]' : 'text-stone-400'}`} />
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 p-3 bg-white rounded-lg border border-stone-200 space-y-1.5 animate-in fade-in-50 duration-200">
                          {service.typicalDeliverables.map((del, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                              <span className="text-[#B89366]">&bull;</span>
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                    <button
                      onClick={() => onSelectServiceForConsultation(service.service)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-stone-900 group-hover:text-[#B89366] uppercase tracking-wider transition-colors"
                    >
                      <span>Inquire Discipline</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    {onNavigateDiscipline && (
                      <button
                        onClick={() => onNavigateDiscipline(service.category.toLowerCase().replace(/\s+/g, ''))}
                        className="text-[11px] font-mono text-stone-400 hover:text-stone-800"
                      >
                        Deep Dive &rarr;
                      </button>
                    )}
                  </div>
                </div>

                {/* Bottom Brass Accent line */}
                <div className="h-0.5 bg-transparent group-hover:bg-[#C5A880] transition-colors" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
