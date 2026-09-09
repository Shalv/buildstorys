import React, { useState } from 'react';
import { 
  Building, 
  Armchair, 
  Home, 
  Key, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA, ServiceItem } from '../data/websiteData';

interface ServicesSectionProps {
  onSelectServiceForConsultation: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectServiceForConsultation 
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
              Disciplines &amp; Execution
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
                className={`px-4 py-2 rounded text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#14171B] text-white shadow-xs font-semibold'
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

        {/* Services Grid (All 9 services from buildstorys.com) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: ServiceItem) => {
            const isExpanded = expandedServiceId === service.id;
            return (
              <div 
                key={service.id}
                className="group rounded-lg bg-[#FAF8F5] border border-stone-200/90 overflow-hidden hover:border-[#C5A880] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Header */}
                <div>
                  <div className="relative h-48 overflow-hidden bg-stone-200">
                    <img 
                      src={service.image} 
                      alt={service.service}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Official Number Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded bg-[#14171B]/90 text-[#C5A880] text-xs font-mono font-bold flex items-center justify-center border border-white/10">
                        {service.serviceNumber}
                      </span>
                      <span className="px-2.5 py-1 rounded bg-[#14171B]/90 backdrop-blur-md text-stone-200 text-[10px] font-mono uppercase tracking-wider font-medium border border-white/10">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                        {service.service}
                      </h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Major Capabilities List */}
                    <div className="space-y-2 pt-3 border-t border-stone-200">
                      <div className="text-[11px] font-mono uppercase font-semibold text-stone-500 tracking-wider">
                        Core Capabilities:
                      </div>
                      <ul className="space-y-1.5">
                        {service.majorCapabilities.map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B89366] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables toggle */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-stone-200 space-y-2 animate-in fade-in duration-200">
                        <div className="text-[11px] font-mono uppercase font-semibold text-stone-500 tracking-wider flex items-center gap-1">
                          <FileText className="w-3 h-3 text-[#B89366]" />
                          Key Deliverables:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.typicalDeliverables.map((del, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-0.5 rounded bg-white text-[11px] text-stone-700 border border-stone-200"
                            >
                              {del}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 space-y-3">
                  <div className="flex items-center justify-between text-xs pt-3 border-t border-stone-200">
                    <button
                      onClick={() => setExpandedServiceId(isExpanded ? null : service.id)}
                      className="text-stone-500 hover:text-stone-900 font-mono text-[11px] underline"
                    >
                      {isExpanded ? 'Hide Deliverables' : 'View Deliverables'}
                    </button>

                    <button
                      onClick={() => onSelectServiceForConsultation(service.service)}
                      className="inline-flex items-center gap-1.5 font-semibold text-xs text-stone-900 group-hover:text-[#B89366] transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
