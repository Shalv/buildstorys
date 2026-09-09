import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Navigation, 
  ShieldCheck,
  ExternalLink,
  Compass
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-24 bg-[#14171C] text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C5A880]">
              Studio & Presence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Visit Our Sahakar Nagar Design Studio
            </h2>
            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Experience authentic Italian marble samples, handcrafted wood joinery, and architectural lighting in person. We welcome clients by appointment.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-stone-300">
              Studio Open Monday – Saturday
            </span>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Address Card */}
          <div className="bg-[#1C2026] p-6 rounded-xl border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              Studio Address
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {COMPANY_PROFILE.contact.addressLine1},<br />
              {COMPANY_PROFILE.contact.addressLine2},<br />
              {COMPANY_PROFILE.contact.landmark},<br />
              {COMPANY_PROFILE.contact.locality}
            </p>
            <a 
              href="https://maps.google.com/?q=Sahakar+Nagar+Bengaluru+BSNL+Telephone+Exchange" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#D8BE9B] transition-colors pt-2 font-mono"
            >
              <Navigation className="w-3 h-3" />
              <span>Get Directions</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Telephones Card */}
          <div className="bg-[#1C2026] p-6 rounded-xl border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              Telephone Lines
            </h3>
            <div className="space-y-1.5 text-xs text-stone-300">
              {COMPANY_PROFILE.contact.phones.map((phone, idx) => (
                <div key={idx}>
                  <a 
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#C5A880] transition-colors font-mono font-medium text-sm block"
                  >
                    {phone}
                  </a>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {idx === 0 ? 'Direct Desk / WhatsApp' : 'Studio Reception'}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-stone-500 pt-1">
              Available 9:30 AM to 6:30 PM IST.
            </p>
          </div>

          {/* Official Email Card */}
          <div className="bg-[#1C2026] p-6 rounded-xl border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              Corporate Email
            </h3>
            <div>
              <a 
                href={`mailto:${COMPANY_PROFILE.contact.primaryEmail}`}
                className="hover:text-[#C5A880] transition-colors font-mono text-sm text-[#C5A880] font-semibold block"
              >
                {COMPANY_PROFILE.contact.primaryEmail}
              </a>
              <span className="text-[10px] text-stone-500 font-mono block mt-1">
                Official inquiries & architectural RFPs
              </span>
            </div>
            <div className="pt-2 border-t border-stone-800 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Domain: buildstorys.com</span>
            </div>
          </div>

          {/* Studio Hours Card */}
          <div className="bg-[#1C2026] p-6 rounded-xl border border-stone-800 space-y-3">
            <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A880]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white">
              Studio Hours
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              {COMPANY_PROFILE.contact.studioHours}
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_PROFILE.contact.whatsappNumber}?text=Hello%20Build%20Storys,%20I%20would%20like%20to%20schedule%20a%20studio%20visit`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider transition-all w-full justify-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Map and Studio Showcase Container */}
        <div className="rounded-xl bg-[#1C2026] border border-stone-800 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#C5A880]" />
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                Architectural Experience Centre
              </span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-white">
              Strategically Located in Sahakar Nagar, North Bengaluru
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Convenient access from Hebbal, Bellary Road, International Airport Corridor, and central Bengaluru. Dedicated visitor parking and sample library on site.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://maps.google.com/?q=Sahakar+Nagar+Bengaluru+BSNL+Telephone+Exchange"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all border border-white/20 flex items-center gap-2"
            >
              <Navigation className="w-4 h-4 text-[#C5A880]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
