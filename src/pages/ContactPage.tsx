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
  MessageSquare,
  Sparkles,
  PenTool,
  ArrowRight
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
        badge="// STUDIO ATELIER // BENGALURU"
        title="Tell us the story you want to build."
        italicTitle="Every landmark begins with an open conversation."
        description="Experience the touch and finish of authentic Karnataka granite, aged teak wood, sand-cast brass, and architectural lighting in person. We welcome homeowners, developers, and visionaries by appointment."
        breadcrumbs={[
          { label: 'Exhibition Home', action: () => onNavigate('home') },
          { label: 'Studio & Consultation' }
        ]}
        metrics={[
          { value: 'Mon – Sat', label: 'Studio Hours (9:30 AM - 7:30 PM)' },
          { value: 'Sahakar Nagar', label: 'North Bengaluru Atelier' },
          { value: '100%', label: 'Dedicated Material Samples' },
          { value: '< 2 Hrs', label: 'Inquiry Response Time' }
        ]}
      />

      <div className="w-full max-w-[92vw] 2xl:max-w-[1780px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* 2. Studio Contact Grid — Creative Technical Cards (Nordic Luxury) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Studio Address */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E5E1D8] shadow-xs space-y-3 relative group hover:border-[#8C6842] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] text-[#8C6842] border border-[#E5E1D8] flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#8C6842]" />
            </div>
            <h4 className="font-serif text-lg font-normal text-[#141312]">
              Sahakar Nagar Atelier
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed font-sans font-light">
              {COMPANY_PROFILE.contact.addressLine1},<br />
              {COMPANY_PROFILE.contact.addressLine2},<br />
              {COMPANY_PROFILE.contact.landmark},<br />
              {COMPANY_PROFILE.contact.locality}
            </p>
            <a
              href="https://maps.google.com/?q=Sahakar+Nagar+Bengaluru+BSNL+Telephone+Exchange"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#8C6842] hover:text-stone-900 pt-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Direct Studio Telephones */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E5E1D8] shadow-xs space-y-3 relative group hover:border-[#8C6842] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] text-[#8C6842] border border-[#E5E1D8] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#8C6842]" />
            </div>
            <h4 className="font-serif text-lg font-normal text-[#141312]">
              Direct Phone Lines
            </h4>
            <div className="space-y-1 text-xs font-mono text-stone-700">
              <div>
                <a href={`tel:${COMPANY_PROFILE.contact.phones[0].replace(/[^0-9+]/g, '')}`} className="hover:text-[#8C6842] font-bold block">
                  {COMPANY_PROFILE.contact.phones[0]}
                </a>
                <span className="text-[10px] text-stone-500">Principal Architect Desk</span>
              </div>
              <div className="pt-1">
                <a href={`tel:${COMPANY_PROFILE.contact.phones[1].replace(/[^0-9+]/g, '')}`} className="hover:text-[#8C6842] block">
                  {COMPANY_PROFILE.contact.phones[1]}
                </a>
                <span className="text-[10px] text-stone-500">Client Advisory Studio</span>
              </div>
            </div>
            <a
              href={`https://wa.me/${COMPANY_PROFILE.contact.whatsappNumber}?text=${encodeURIComponent('Hello Build Storys team, I would like to inquire about architectural services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800 pt-1"
            >
              <span>Instant WhatsApp Desk</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3: Electronic Correspondence */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E5E1D8] shadow-xs space-y-3 relative group hover:border-[#8C6842] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] text-[#8C6842] border border-[#E5E1D8] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#8C6842]" />
            </div>
            <h4 className="font-serif text-lg font-normal text-[#141312]">
              Digital Briefs
            </h4>
            <div className="space-y-1 text-xs font-mono text-stone-700">
              <div>
                <a href={`mailto:${COMPANY_PROFILE.contact.primaryEmail}`} className="hover:text-[#8C6842] font-bold block">
                  {COMPANY_PROFILE.contact.primaryEmail}
                </a>
                <span className="text-[10px] text-stone-500">Direct Architectural Inbox</span>
              </div>
              <div className="pt-1">
                <span className="text-stone-600 font-mono text-[11px] block">{COMPANY_PROFILE.contact.website}</span>
                <span className="text-[10px] text-stone-500">Official Atelier Domain</span>
              </div>
            </div>
          </div>

          {/* Card 4: Operating Timings */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#E5E1D8] shadow-xs space-y-3 relative group hover:border-[#8C6842] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#F8F7F4] text-[#8C6842] border border-[#E5E1D8] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#8C6842]" />
            </div>
            <h4 className="font-serif text-lg font-normal text-[#141312]">
              Studio Timings
            </h4>
            <div className="space-y-1 text-xs text-stone-600 font-sans">
              <div className="font-mono text-stone-900 font-semibold">{COMPANY_PROFILE.contact.studioHours}</div>
              <div className="text-[11px] text-stone-500">Sundays: By advance architectural appointment</div>
              <div className="text-[11px] text-emerald-800 font-medium pt-1">&bull; Material library open for client touch</div>
            </div>
          </div>
        </div>

        {/* 3. Integrated Booking Form Section: "Tell us the story you want to build" */}
        <div className="space-y-6">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F7F4] border border-[#E5E1D8] text-[#8C6842] text-xs font-mono uppercase tracking-widest font-bold">
              <PenTool className="w-3.5 h-3.5" />
              <span>THE VISION BRIEF</span>
            </div>
            <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#141312] leading-tight">
              Tell us the story you want to build.
            </h3>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans font-light">
              Share your plot location, desired spatial scope, or material inspirations. Our Principal Architect will prepare zoning precedents and reach out within 2 hours.
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
