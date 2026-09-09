import React from 'react';
import { Building2, ShieldCheck, MapPin } from 'lucide-react';
import { CLIENT_PROPERTY_ASSOCIATIONS } from '../data/websiteData';

export const ClientAssociations: React.FC = () => {
  return (
    <section id="associations" className="py-20 lg:py-24 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header matching buildstorys.com */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#B89366]">
              Trusted Track Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Trusted by leading brands &amp; spaces.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Build Storys has delivered thoughtful architecture, turnkey interiors, and luxury fit-outs across Bengaluru’s most recognized residential communities, corporate addresses, and manufacturing hubs.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#B89366]" />
            <span className="text-xs text-stone-500 font-mono">
              250+ Handed-Over Projects
            </span>
          </div>
        </div>

        {/* Association Badge Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {CLIENT_PROPERTY_ASSOCIATIONS.map((assoc, idx) => (
            <div
              key={assoc.id}
              className="p-5 rounded-lg bg-[#FAF8F5] border border-stone-200/90 hover:border-[#C5A880] hover:shadow-sm transition-all space-y-2 group"
            >
              <div className="flex items-center justify-between">
                <Building2 className="w-4 h-4 text-[#B89366] group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono text-stone-400">{assoc.id}</span>
              </div>
              <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#B89366] transition-colors">
                {assoc.name}
              </h3>
              <p className="text-xs text-stone-600">
                {assoc.category}
              </p>
              <div className="flex items-center gap-1 text-[11px] font-mono text-stone-500 pt-1">
                <MapPin className="w-3 h-3 text-stone-400" />
                <span className="truncate">{assoc.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Association Context Note */}
        <div className="rounded-lg bg-stone-50 p-4 border border-stone-200 text-xs text-stone-500 font-mono leading-relaxed flex items-start gap-3">
          <span className="font-bold text-stone-700 uppercase tracking-wider shrink-0">Trust Note:</span>
          <span>
            The above properties and corporate brands represent communities where Build Storys has completed bespoke architecture, villa designs, duplex transformations, or industrial structures.
          </span>
        </div>

      </div>
    </section>
  );
};
