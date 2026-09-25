import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  UploadCloud, 
  FileText, 
  Phone, 
  Mail, 
  Calendar, 
  MapPin, 
  Sparkles, 
  ShieldCheck,
  MessageSquare,
  Building,
  User,
  ExternalLink,
  RefreshCw,
  X
} from 'lucide-react';
import { COMPANY_PROFILE } from '../data/websiteData';

interface ConsultationFormProps {
  initialService?: string;
  initialProject?: string;
  prefilledScope?: { area?: string; budget?: string };
  onCloseModal?: () => void;
  isModal?: boolean;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = '',
  initialProject = '',
  prefilledScope,
  onCloseModal,
  isModal = false
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectLocation: 'Bengaluru, Karnataka',
    serviceRequired: initialService || 'Residential Architecture',
    propertyType: 'Independent Villa / Bungalow',
    approximateArea: prefilledScope?.area || '3,500',
    estimatedBudget: prefilledScope?.budget || '₹50 Lakhs – ₹1 Crore',
    expectedStartDate: 'Within 1 - 2 Months',
    message: initialProject ? `Inquiry inspired by ${initialProject}. We would like to discuss our site requirements and schedule a design discovery session.` : '',
    preferredMethod: 'In-person at Sahakar Nagar Studio',
    consentCheckbox: true
  });

  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadRecord, setLeadRecord] = useState<any>(null);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (prefilledScope) {
      setFormData(prev => ({
        ...prev,
        approximateArea: prefilledScope.area || prev.approximateArea,
        estimatedBudget: prefilledScope.budget || prev.estimatedBudget
      }));
    }
  }, [prefilledScope]);

  useEffect(() => {
    if (initialProject) {
      setFormData(prev => ({ 
        ...prev, 
        message: `Inquiry inspired by ${initialProject}. We would like to discuss our site requirements and schedule a design discovery session.` 
      }));
    }
  }, [initialProject]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate CRM Lead Creation & Automated Workflow Triggers
    setTimeout(() => {
      const generatedLeadId = `BS-LEAD-${Math.floor(100000 + Math.random() * 900000)}`;
      const timestamp = new Date().toLocaleString();
      
      const payload = {
        leadId: generatedLeadId,
        timestamp,
        ...formData,
        documentAttached: uploadedFile ? uploadedFile.name : 'None provided',
        utmParameters: {
          utm_source: 'buildstorys_web',
          utm_medium: 'consultation_form',
          utm_campaign: 'turnkey_architecture_2024',
          utm_term: formData.serviceRequired
        },
        triggers: {
          adminNotificationSentTo: COMPANY_PROFILE.contact.primaryEmail,
          customerAckEmailSentTo: formData.email,
          crmLeadCreated: true,
          crmPipelineStage: 'New Inquiry - Principal Architect Review',
          whatsAppNotificationReady: true
        }
      };

      setLeadRecord(payload);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const getWhatsAppDirectLink = () => {
    const text = encodeURIComponent(
      `Hello Build Storys Infrastructure, I submitted a consultation request for ${formData.serviceRequired} (${formData.approximateArea} sq. ft. in ${formData.projectLocation}). My name is ${formData.fullName}. Lead ID: ${leadRecord?.leadId || 'New'}`
    );
    return `https://wa.me/${COMPANY_PROFILE.contact.whatsappNumber}?text=${text}`;
  };

  return (
    <div className={`w-full ${isModal ? 'p-6 sm:p-8' : 'py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8'}`}>
      
      {/* Container Card */}
      <div className="rounded-2xl bg-white border border-stone-200/90 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Summary Column (Light Luxury) */}
          <div className="lg:col-span-4 bg-[#FAF8F5] text-stone-900 p-8 sm:p-10 flex flex-col justify-between space-y-8 border-b lg:border-b-0 lg:border-r border-[#E7E5E0]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9A7049] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#9A7049]" />
                Direct Architectural Consultation
              </div>

              <h3 className="font-serif text-3xl font-normal text-[#1C1917] leading-tight">
                Begin Your Story With Build Storys
              </h3>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans font-light">
                Connect with our principal architects and project planners. We review your plot layout, architectural brief, or bare-shell specifications and deliver an actionable feasibility roadmap.
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E7E5E0] text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#9A7049] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 font-serif block text-sm font-semibold">Transparent Itemized BOQ</strong>
                    <span>Full clarity on materials, brands, and timeline before commitments.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-[#9A7049] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 font-serif block text-sm font-semibold">Sahakar Nagar Studio</strong>
                    <span>Visit our experience studio to review genuine stone slabs, veneers, and hardware.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-4 h-4 text-[#9A7049] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 font-serif block text-sm font-semibold">Single-Point Accountability</strong>
                    <span>Dedicated principal architect manages civil, structural, and interior crafts.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact info */}
            <div className="pt-6 border-t border-[#E7E5E0] space-y-2 text-xs text-stone-600 font-mono">
              <div className="flex items-center gap-2 text-stone-800">
                <Phone className="w-3.5 h-3.5 text-[#9A7049]" />
                <span>+91 63667 78876 / +91 63667 78826</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800">
                <Mail className="w-3.5 h-3.5 text-[#9A7049]" />
                <span>{COMPANY_PROFILE.contact.primaryEmail}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800">
                <MapPin className="w-3.5 h-3.5 text-[#9A7049]" />
                <span>Sahakar Nagar, Bengaluru – 560092</span>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-8 p-6 sm:p-10">
            {isModal && onCloseModal && (
              <div className="flex justify-end mb-4">
                <button 
                  onClick={onCloseModal} 
                  className="p-1 rounded-full text-stone-400 hover:text-stone-900 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-stone-900">
                    Project Consultation & Feasibility Request
                  </h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Fill in your project details below to receive a personalized consultation and initial BOQ estimate.
                  </p>
                </div>

                {/* Section 1: Contact Details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Contact Number *
                    </label>
                    <input 
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    />
                  </div>
                </div>

                {/* Section 2: Project Scope & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Project Location *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. Sahakar Nagar / Whitefield / Mysore"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    >
                      <optgroup label="Architecture">
                        <option value="Residential Architecture">Residential Architecture</option>
                        <option value="Villa Architecture">Villa Architecture</option>
                        <option value="Commercial Architecture">Commercial Architecture</option>
                        <option value="Retail Architecture">Retail Architecture</option>
                        <option value="Industrial Architecture">Industrial Architecture</option>
                      </optgroup>
                      <optgroup label="Interior Design">
                        <option value="Home Interiors">Home Interiors</option>
                        <option value="Villa & Apartment Interiors">Villa & Apartment Interiors</option>
                        <option value="Office Interiors">Office Interiors</option>
                        <option value="Retail Interiors">Retail Interiors</option>
                      </optgroup>
                      <optgroup label="Turnkey & Special">
                        <option value="Turnkey Interior Solutions">Turnkey Interior Solutions</option>
                        <option value="Farmhouse Design">Farmhouse Design</option>
                        <option value="3D Visualisation">3D Visualisation</option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Property / Project Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    >
                      <option value="Independent Villa / Bungalow">Independent Villa / Bungalow</option>
                      <option value="Apartment / Penthouse / Duplex">Apartment / Penthouse / Duplex</option>
                      <option value="Commercial Office / Workplace">Commercial Office / Workplace</option>
                      <option value="Retail Storefront / Showroom">Retail Storefront / Showroom</option>
                      <option value="Industrial Plant / Warehouse">Industrial Plant / Warehouse</option>
                      <option value="Farmhouse / Country Estate">Farmhouse / Country Estate</option>
                    </select>
                  </div>
                </div>

                {/* Section 3: Area, Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Approximate Area (Sq. Ft.) *
                    </label>
                    <input 
                      type="text"
                      required
                      placeholder="e.g. 4,500"
                      value={formData.approximateArea}
                      onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Estimated Budget *
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    >
                      <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                      <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                      <option value="₹1 Crore – ₹2.5 Crores">₹1 Crore – ₹2.5 Crores</option>
                      <option value="₹2.5 Crores – ₹5 Crores">₹2.5 Crores – ₹5 Crores</option>
                      <option value="₹5 Crores+">₹5 Crores+ (Commercial/Estate)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                      Expected Start Date *
                    </label>
                    <select
                      value={formData.expectedStartDate}
                      onChange={(e) => setFormData({ ...formData, expectedStartDate: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                    >
                      <option value="Immediate (within 2 weeks)">Immediate (within 2 weeks)</option>
                      <option value="Within 1 - 2 Months">Within 1 - 2 Months</option>
                      <option value="Within 3 - 6 Months">Within 3 - 6 Months</option>
                      <option value="Exploratory Planning Phase">Exploratory Planning Phase</option>
                    </select>
                  </div>
                </div>

                {/* Section 4: Message / Brief */}
                <div>
                  <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                    Project Vision & Requirements *
                  </label>
                  <textarea 
                    rows={3}
                    required
                    placeholder="Tell us about your plot orientation, family lifestyle routines, aesthetic preferences (e.g. Zen minimalism, contemporary warmth), and key requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[#FAF8F5] border border-stone-300 text-xs text-stone-900 focus:outline-none focus:border-[#B89366]"
                  />
                </div>

                {/* Section 5: Plan / Site Document Upload Mockup */}
                <div>
                  <label className="block text-xs font-mono font-medium text-stone-700 mb-1">
                    Plan / Site Document Upload (Optional CAD / PDF / Images)
                  </label>
                  <div className="relative border-2 border-dashed border-stone-300 rounded-lg p-4 bg-[#FAF8F5] hover:bg-stone-50 transition-colors text-center cursor-pointer">
                    <input 
                      type="file" 
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      accept=".pdf,.dwg,.jpg,.jpeg,.png"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                      <UploadCloud className="w-5 h-5 text-[#B89366]" />
                      <span className="text-xs text-stone-700 font-medium">
                        {uploadedFile ? (
                          <span className="text-emerald-700 font-bold flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5" />
                            {uploadedFile.name} ({uploadedFile.size})
                          </span>
                        ) : (
                          'Drag & drop architectural floor plans or click to browse (PDF, DWG, PNG)'
                        )}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">Max file size 25MB</span>
                    </div>
                  </div>
                </div>

                {/* Section 6: Preferred Consultation Method */}
                <div>
                  <label className="block text-xs font-mono font-medium text-stone-700 mb-2">
                    Preferred Consultation Format:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      'In-person at Sahakar Nagar Studio',
                      'On-Site Meeting at Property',
                      'Virtual Video Consultation'
                    ].map((method) => (
                      <label 
                        key={method}
                        className={`flex items-center gap-2 p-2.5 rounded-md border text-xs cursor-pointer transition-all ${
                          formData.preferredMethod === method 
                            ? 'bg-[#1A1E24] text-white border-[#1A1E24] font-medium' 
                            : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="preferredMethod"
                          checked={formData.preferredMethod === method}
                          onChange={() => setFormData({ ...formData, preferredMethod: method })}
                          className="hidden"
                        />
                        <span className="truncate">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Section 7: Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-2">
                  <input 
                    type="checkbox"
                    id="consentCheckbox"
                    required
                    checked={formData.consentCheckbox}
                    onChange={(e) => setFormData({ ...formData, consentCheckbox: e.target.checked })}
                    className="mt-0.5 accent-[#B89366] rounded cursor-pointer"
                  />
                  <label htmlFor="consentCheckbox" className="text-xs text-stone-600 leading-snug cursor-pointer">
                    I agree to receive architectural feasibility consultations, transparent BOQ estimates, and project updates from Build Storys Infrastructure Pvt Ltd.
                  </label>
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded bg-[#1A1E24] hover:bg-[#2A2E35] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.99] disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-[#C5A880]" />
                        <span>Processing Consultation Routing...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C5A880]" />
                        <span>Submit Project Consultation Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-stone-400 font-mono mt-2">
                    Guaranteed response within 4 business hours from our principal architect.
                  </p>
                </div>
              </form>
            ) : (
              /* Success / Automated Triggers State */
              <div className="space-y-6 animate-in fade-in duration-300 py-4">
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-3xl font-bold text-stone-900">
                    Consultation Request Confirmed
                  </h4>
                  <p className="text-sm text-stone-600 max-w-lg mx-auto">
                    Thank you, <strong className="text-stone-900">{formData.fullName}</strong>. Your project brief has been assigned to our principal architecture desk.
                  </p>
                  <div className="inline-block px-3 py-1 bg-stone-100 border border-stone-300 rounded font-mono text-xs text-stone-800 font-bold">
                    Lead Reference: {leadRecord?.leadId}
                  </div>
                </div>

                {/* Triggered Actions Breakdown (as requested in Section 10) */}
                <div className="rounded-xl bg-[#FAF8F5] border border-stone-200 p-6 space-y-4">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                    Automated System Actions Triggered:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                    <div className="flex items-start gap-2 bg-white p-3 rounded border border-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Admin Notification Dispatched:</strong>
                        <div className="text-stone-500 font-mono text-[11px]">{COMPANY_PROFILE.contact.primaryEmail}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-white p-3 rounded border border-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Client Acknowledgement Sent:</strong>
                        <div className="text-stone-500 font-mono text-[11px]">{formData.email}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-white p-3 rounded border border-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>CRM Lead Record Created:</strong>
                        <div className="text-stone-500 font-mono text-[11px]">Assigned to Sahakar Nagar Studio Desk</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 bg-white p-3 rounded border border-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>Campaign UTM Source Tracked:</strong>
                        <div className="text-stone-500 font-mono text-[11px]">{leadRecord?.utmParameters?.utm_source} ({formData.serviceRequired})</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Follow-up Action */}
                <div className="bg-[#1A1E24] text-white p-5 rounded-xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-mono text-[#C5A880] uppercase tracking-wider">Fast-Track Via WhatsApp</div>
                    <div className="text-sm font-serif font-bold text-white">Connect directly with our Lead Architect now</div>
                  </div>
                  <a
                    href={getWhatsAppDirectLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      if (onCloseModal) onCloseModal();
                    }}
                    className="text-xs text-stone-500 hover:text-stone-900 underline font-mono"
                  >
                    Submit another consultation or return to page
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  );
};
