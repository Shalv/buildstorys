import React from 'react';
import { VideoHeroBanner } from '../components/VideoHeroBanner';
import { ConsultationForm } from '../components/ConsultationForm';
import { COMPANY_PROFILE } from '../data/websiteData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Compass, 
  ShieldCheck, 
  ExternalLink,
  Building2,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  preselectedService?: string;
  prefilledScope?: { area?: string; budget?: string };
}

export const ContactPage: React.FC<ContactPageProps> = ({ 
  onNavigate,
  preselectedService,
  prefilledScope
}) => {
  return (
    <div className="space-y-16 pb-20">
      {/* 1. Cinematic Video Hero Banner */}
      <VideoHeroBanner
        videoSrc="https://assets.mixkit.co/videos/23721/23721-360.mp4"
        fallbackVideoSrc="/video/architecture-hero.mp4"
        poster="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=90"
        badge="// STUDIO PRESENCE // BENGALURU"
        title="Visit Our Design Studio"
        italicTitle="Sahakar Nagar Atelier & Material Library."
        description="Experience the touch and finish of authentic Italian marbles, artisanal wood joinery, and architectural lighting in person. We welcome homeowners, developers, and corporate leaders by appointment."
        breadcrumbs={[
          { label: 'Home', action: () => onNavigate('home') },
          { label: 'Contact & Studio' }
        ]}
        metrics={[
          { value: 'Mon – Sat', label: 'Studio Hours (9:30 AM - 7:30 PM)' },
          { value: 'Sahakar Nagar', label: 'North Bengaluru Location' },
          { value: '100%', label: 'Dedicated Material Samples' },
          { value: '< 2 Hrs', label: 'Initial Inquiry Response' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* 2. Studio Contact Grid — Creative Technical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Studio Address */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3 relative group hover:border-[#C5A880] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#14171B] text-[#C5A880] flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Sahakar Nagar Studio
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {COMPANY_PROFILE.contact.addressLine1},<br />
              {COMPANY_PROFILE.contact.addressLine2},<br />
              {COMPANY_PROFILE.contact.landmark},<br />
              {COMPANY_PROFILE.contact.locality}
            </p>
            <a
              href="https://maps.google.com/?q=Sahakar+Nagar+Bengaluru+BSNL+Telephone+Exchange"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B89366] hover:text-stone-900 pt-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Direct Studio Telephones */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3 relative group hover:border-[#C5A880] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#14171B] text-[#C5A880] flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Direct Phone Lines
            </h4>
            <div className="space-y-1 text-xs font-mono text-stone-700">
              <div>
                <a href={`tel:${COMPANY_PROFILE.contact.phones[0].replace(/[^0-9+]/g, '')}`} className="hover:text-[#B89366] font-bold block">
                  {COMPANY_PROFILE.contact.phones[0]}
                </a>
                <span className="text-[10px] text-stone-400">Primary Studio Line</span>
              </div>
              <div className="pt-1">
                <a href={`tel:${COMPANY_PROFILE.contact.phones[1].replace(/[^0-9+]/g, '')}`} className="hover:text-[#B89366] block">
                  {COMPANY_PROFILE.contact.phones[1]}
                </a>
                <span className="text-[10px] text-stone-400">Client Advisory Desk</span>
              </div>
            </div>
            <a
              href={`https://wa.me/${COMPANY_PROFILE.contact.whatsappNumber}?text=${encodeURIComponent('Hello Build Storys team, I would like to inquire about architectural services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 hover:text-emerald-700 pt-1"
            >
              <span>Message on WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3: Electronic Correspondence */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3 relative group hover:border-[#C5A880] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#14171B] text-[#C5A880] flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Digital Inquiries
            </h4>
            <div className="space-y-1 text-xs font-mono text-stone-700">
              <div>
                <a href={`mailto:${COMPANY_PROFILE.contact.primaryEmail}`} className="hover:text-[#B89366] font-bold block">
                  {COMPANY_PROFILE.contact.primaryEmail}
                </a>
                <span className="text-[10px] text-stone-400">General &amp; New Briefs</span>
              </div>
              <div className="pt-1">
                <span className="text-stone-500 font-mono text-[11px] block">{COMPANY_PROFILE.contact.website}</span>
                <span className="text-[10px] text-stone-400">Verified Corporate Portal</span>
              </div>
            </div>
          </div>

          {/* Card 4: Operating Timings */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-3 relative group hover:border-[#C5A880] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#14171B] text-[#C5A880] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-stone-900">
              Atelier Hours
            </h4>
            <div className="space-y-1 text-xs text-stone-600">
              <div className="font-mono text-stone-800 font-semibold">{COMPANY_PROFILE.contact.studioHours}</div>
              <div className="text-[11px] text-stone-500">Sundays: By advance architectural appointment</div>
              <div className="text-[11px] text-emerald-700 font-medium pt-1">&bull; In-person studio visits welcome</div>
            </div>
          </div>
        </div>

        {/* 3. Integrated Booking Form Section */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-6 sm:p-10 lg:p-12">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B89366]">
              Schedule Architectural Vision Session
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Tell Us About Your Vision &amp; Requirements
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm">
              Our studio head will review your project parameters within 24 business hours and prepare initial zoning/precedents for our meeting.
            </p>
          </div>

          <ConsultationForm
            initialService={preselectedService}
            prefilledScope={prefilledScope}
          />
        </div>

      </div>
    </div>
  );
};
