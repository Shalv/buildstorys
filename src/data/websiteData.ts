export interface Project {
  id: string;
  name: string;
  location: string;
  category: 'Architecture' | 'Interior Design' | 'Commercial & Retail' | 'Industrial';
  subCategory: string;
  clientOrPropertyType: string;
  builtUpArea: string;
  siteArea?: string;
  completionYear: string;
  status: 'Completed' | 'Ongoing';
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  designChallenge: string;
  solution: string;
  servicesDelivered: string[];
  materialsUsed: string[];
  results: string[];
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  serviceNumber: string;
  category: 'Architecture' | 'Interior Design' | 'Turnkey' | 'Visualisation';
  service: string;
  majorCapabilities: string[];
  description: string;
  image: string;
  typicalDeliverables: string[];
}

export interface ProcessStep {
  stepNumber: number;
  stepCode: string;
  title: string;
  tagline: string;
  summary: string;
  activities: string[];
  deliverable: string;
  duration: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  clientCode: string;
  clientType: string;
  clientName: string;
  image?: string;
  location: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  faqNumber: string;
  category: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  keyTakeaways: string[];
}

// Company Information matching actual live website https://buildstorys.com
export const COMPANY_PROFILE = {
  legalName: "Build Storys Infrastructure Pvt Ltd",
  shortName: "Build Storys",
  taglineBadge: "DESIGN · BUILD · EXPERIENCE",
  businessType: "Architecture, interior design and turnkey design-build company",
  primaryLocation: "Bengaluru, Karnataka",
  experienceYears: "15+",
  projectsCompleted: "250+",
  sqftDelivered: "1.2M+",
  clientSatisfaction: "99%",
  serviceArea: "Bengaluru and other locations",
  corePositioning: "Integrated architecture, interior design, planning, craftsmanship and execution.",
  brandPromise: "Together, We Build More Than Spaces — We Build Storys.",
  companyDescription:
    "Build Stories Infrastructure Pvt Ltd brings together architecture, interiors and craftsmanship to create spaces that feel purposeful, timeless and personal. Every project begins with understanding. We study the people, the place and the purpose before shaping the design. The result is architecture that feels considered rather than complicated.",
  heroSupportingStatement:
    "Architecture and interior design in Bangalore, shaped by precision, innovation and purpose. From concept to execution, we create spaces designed to inspire and built to last.",
  manifesto: {
    heading: "Creating places worth remembering.",
    subheading: "PROJECT / 001 --> ARCHITECTURE + INTERIORS",
    tagline: "BUILD STORIES DESIGNED TO LAST."
  },
  pillars: [
    {
      code: "01",
      title: "CLARITY",
      description: "Thoughtful planning"
    },
    {
      code: "02",
      title: "CRAFT",
      description: "Attention to detail"
    },
    {
      code: "03",
      title: "CHARACTER",
      description: "Spaces with identity"
    }
  ],
  duoDisciplines: {
    architecture: {
      name: "Architecture",
      tagline: "STRUCTURE · FORM · SPACE"
    },
    interiors: {
      name: "Interiors",
      tagline: "LIGHT · MATERIAL · DETAIL"
    }
  },
  contact: {
    address: "Building No.2122/5 , 1st floor , 2nd main road , D block , opposite to BSNLTelephone Exchange , Sahakarnagar , Bengaluru, 560092",
    addressLine1: "Building No. 2122/5, 1st Floor",
    addressLine2: "2nd Main Road, D Block",
    landmark: "Opposite BSNL Telephone Exchange",
    locality: "Sahakar Nagar, Bengaluru, Karnataka – 560092",
    phones: ["+91 63667 78876", "+91 63667 78826"],
    primaryEmail: "info@buildstorys.com",
    website: "https://buildstorys.com",
    verifiedDomainNote: "Verified corporate domain: buildstorys.com",
    whatsappNumber: "916366778876",
    studioHours: "Mon - Sat: 9:30 AM – 6:30 PM (Sundays by appointment)"
  }
};

// Featured Showcase Projects matching "Spaces with meaning." on https://buildstorys.com/
export const FEATURED_SHOWCASE_PROJECTS = [
  {
    id: "courtyard-house",
    name: "The Courtyard House",
    headline: "A home shaped around light.",
    description: "A contemporary residence organised around a quiet central courtyard, creating a balance between privacy, openness and natural light.",
    category: "Architecture",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    builtUpArea: "4,800 sq. ft.",
    completionYear: "2023",
    highlights: ["Central internal light courtyard", "Natural stack ventilation", "Private landscaped wings", "Terracotta & teak accents"]
  },
  {
    id: "modern-villa",
    name: "The Modern Villa",
    headline: "Strong forms, soft living.",
    description: "Bold architectural volumes meet warm materials and open living spaces to create a residence that feels both sculptural and deeply comfortable.",
    category: "Architecture",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    builtUpArea: "6,200 sq. ft.",
    completionYear: "2023",
    highlights: ["Sculptural concrete cantilevers", "Floor-to-ceiling pocket glazing", "Integrated reflection pool", "Warm oak & travertine finishes"]
  },
  {
    id: "urban-residence",
    name: "The Urban Residence",
    headline: "Designed for city life.",
    description: "A carefully planned urban home where efficient planning, daylight and natural textures come together to create a calm everyday experience.",
    category: "Architecture",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    builtUpArea: "3,600 sq. ft.",
    completionYear: "2022",
    highlights: ["Maximized daylight penetration", "Acoustic buffer from street", "Double-height family lounge", "Concealed utility cabinetry"]
  },
  {
    id: "commercial-studio",
    name: "The Commercial Studio",
    headline: "Space for ideas.",
    description: "An adaptable studio environment designed around movement, collaboration and focused work, balancing functionality with a strong visual identity.",
    category: "Commercial & Retail",
    location: "Bengaluru, Karnataka",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    builtUpArea: "8,500 sq. ft.",
    completionYear: "2023",
    highlights: ["Agile modular workstations", "Acoustic breakout alcoves", "High-CRI daylight lighting grid", "Tactile industrial materials"]
  }
];

// Complete Projects Portfolio including real property associations from the website
export const PROJECTS_DATA: Project[] = [
  {
    id: "courtyard-house",
    name: "The Courtyard House",
    location: "Bengaluru, Karnataka",
    category: "Architecture",
    subCategory: "Courtyard Villa Residence",
    clientOrPropertyType: "Bespoke Independent Home",
    builtUpArea: "4,800 sq. ft.",
    completionYear: "2023",
    status: "Completed",
    tagline: "A home shaped around light.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    designChallenge:
      "A contemporary residence organised around a quiet central courtyard, creating a balance between privacy, openness and natural light amidst a dense neighborhood.",
    solution:
      "Sculpted an inward-facing plan with a skylit green courtyard that acts as the thermal lung and visual focal point of all family spaces.",
    servicesDelivered: [
      "Architectural Design & Planning",
      "Internal Courtyard Engineering",
      "Turnkey Interior Execution",
      "Bespoke Woodwork & Millwork"
    ],
    materialsUsed: [
      "Natural Teak Wood",
      "Handmade Terracotta Tiles",
      "Exposed Concrete",
      "Honed Grey Granite"
    ],
    results: [
      "Natural daylight throughout the interior during 100% of daytime hours",
      "Reduced reliance on air conditioning by 35% through cross-ventilation"
    ],
    featured: true
  },
  {
    id: "modern-villa",
    name: "The Modern Villa",
    location: "Bengaluru, Karnataka",
    category: "Architecture",
    subCategory: "Contemporary Luxury Villa",
    clientOrPropertyType: "Private Estate Owner",
    builtUpArea: "6,200 sq. ft.",
    completionYear: "2023",
    status: "Completed",
    tagline: "Strong forms, soft living.",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85",
    designChallenge:
      "Bold architectural volumes meet warm materials and open living spaces to create a residence that feels both sculptural and deeply comfortable.",
    solution:
      "Used dramatic cantilevered slabs and warm vertical timber screens, bridging the scale between bold exterior geometry and warm domestic intimacy.",
    servicesDelivered: [
      "Villa Architectural Design",
      "Façade Engineering",
      "Turnkey Interior Fitout",
      "Landscape & Water Feature Planning"
    ],
    materialsUsed: [
      "Board-Formed Concrete",
      "Weather-Resistant Teak Slatting",
      "Travertine Stone Flooring",
      "Thermally Broken Slim-Profile Aluminum"
    ],
    results: [
      "Featured as one of Bengaluru's premier contemporary villa designs",
      "Turnkey delivery completed on schedule in 14 months"
    ],
    featured: true
  },
  {
    id: "urban-residence",
    name: "The Urban Residence",
    location: "Bengaluru, Karnataka",
    category: "Architecture",
    subCategory: "City Family Residence",
    clientOrPropertyType: "Urban Homeowner",
    builtUpArea: "3,600 sq. ft.",
    completionYear: "2022",
    status: "Completed",
    tagline: "Designed for city life.",
    heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    designChallenge:
      "A carefully planned urban home where efficient planning, daylight and natural textures come together to create a calm everyday experience.",
    solution:
      "Integrated vertical light shafts, acoustically dampened double-glazed facades, and multi-functional storage walls to craft a serene urban haven.",
    servicesDelivered: [
      "Complete Space Planning & Design",
      "Full Home Interior Architecture",
      "Custom Modular Kitchen & Wardrobes",
      "False Ceiling & Lighting"
    ],
    materialsUsed: [
      "Smoked Oak Veneer",
      "Italian Bottochino Marble",
      "Champagne Brass Trims",
      "Acoustic Wall Panels"
    ],
    results: [
      "30% acoustic noise reduction from street traffic",
      "100% bespoke furniture execution with zero snag list carryover"
    ],
    featured: true
  },
  {
    id: "commercial-studio",
    name: "The Commercial Studio",
    location: "Bengaluru, Karnataka",
    category: "Commercial & Retail",
    subCategory: "Creative Workplace & Studio",
    clientOrPropertyType: "Creative Agency & Studio",
    builtUpArea: "8,500 sq. ft.",
    completionYear: "2023",
    status: "Completed",
    tagline: "Space for ideas.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    designChallenge:
      "An adaptable studio environment designed around movement, collaboration and focused work, balancing functionality with a strong visual identity.",
    solution:
      "Engineered flexible partition tracks, collaborative amphitheater seating, and integrated high-speed power/data grids within exposed industrial architecture.",
    servicesDelivered: [
      "Commercial Architecture & Space Planning",
      "Acoustic Partitioning",
      "Turnkey Office Fit-Out",
      "Environmental Graphic Design"
    ],
    materialsUsed: [
      "Micro-Cement Flooring",
      "Perforated Steel Ceilings",
      "Birch Plywood Millwork",
      "Architectural Glass Partitions"
    ],
    results: [
      "Accommodates up to 120 team members with dynamic hot-desking zones",
      "Employee satisfaction with workspace acoustics rated at 96%"
    ],
    featured: true
  },
  {
    id: "phoenix-kessaku",
    name: "Phoenix Kessaku Sora",
    location: "Rajajinagar, Bengaluru",
    category: "Interior Design",
    subCategory: "Duplex Luxury Apartment",
    clientOrPropertyType: "Ultra-Luxury Penthouse Resident",
    builtUpArea: "6,200 sq. ft.",
    completionYear: "2023",
    status: "Completed",
    tagline: "Japanese Zen Minimalism Meets Warm Contemporary Luxury",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    designChallenge:
      "Transforming a raw double-height penthouse shell in Phoenix Kessaku into a serene sanctuary balancing entertainment spaces and secluded private suites.",
    solution:
      "Installed a 22-ft monolithic fluted Botticino marble feature wall anchoring a cantilevered walnut staircase with low-iron floating glass balustrades.",
    servicesDelivered: [
      "Turnkey Interior Architecture",
      "Custom Millwork & Cabinetry",
      "Architectural Lighting Plan",
      "Italian Marble Stonework"
    ],
    materialsUsed: [
      "Botticino Marble",
      "Smoked American Walnut",
      "Champagne Brushed Brass",
      "Acoustic Wall Panels"
    ],
    results: [
      "Completed in 110 days with exact adherence to 3D visualisations",
      "Selected as premier duplex case study in Phoenix Kessaku community"
    ]
  },
  {
    id: "embassy-boulevard",
    name: "Embassy Boulevard Villa",
    location: "North Bengaluru, Karnataka",
    category: "Architecture",
    subCategory: "Signature Luxury Villa",
    clientOrPropertyType: "Embassy Boulevard Resident",
    builtUpArea: "7,400 sq. ft.",
    completionYear: "2022",
    status: "Completed",
    tagline: "Sophisticated Tropical Modernism in North Bengaluru",
    heroImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    designChallenge:
      "Customizing a palatial 4-BHK villa with seamless indoor-outdoor transition, custom pool deck, and refined temperature-controlled cellar.",
    solution:
      "Harmonized limestone terraces with wide motorized glass pockets and automated shading louvers.",
    servicesDelivered: [
      "Turnkey Villa Interior Fitout",
      "Landscape & Verandah Architecture",
      "Custom Wine Cellar & Bar"
    ],
    materialsUsed: [
      "Jura Beige Limestone",
      "Burma Teak Woodwork",
      "Architectural Bronze Hardware"
    ],
    results: [
      "Delivered 100% turnkey with full furniture and automated lighting",
      "5-star client satisfaction review"
    ]
  },
  {
    id: "texel-industries",
    name: "Texel Industries",
    location: "Bengaluru Industrial Zone, Karnataka",
    category: "Industrial",
    subCategory: "Advanced Manufacturing & Plant",
    clientOrPropertyType: "Texel Industries & Krishna Shelter Developers",
    builtUpArea: "38,420 sq. ft.",
    completionYear: "2021",
    status: "Completed",
    tagline: "Precision Engineering & Efficient Industrial Architecture",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
    galleryImages: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
    ],
    designChallenge:
      "Engineering a 38,420 sq. ft. precision manufacturing plant with stringent machinery vibration isolation and high thermal efficiency.",
    solution:
      "Engineered an optimized PEB steel structure with north-light roof monitors bringing 100% natural daylight during day shifts.",
    servicesDelivered: [
      "Industrial Architecture",
      "Civil & Structural Engineering",
      "Turnkey Industrial Construction",
      "Safety & Regulatory Approvals"
    ],
    materialsUsed: [
      "High-Yield Structural Steel",
      "Insulated Sandwich Panels",
      "Heavy-Duty Laser Screed Flooring"
    ],
    results: [
      "Zero daytime artificial lighting needed across manufacturing bays",
      "Delivered within contract schedule and verified safety norms"
    ]
  },
  {
    id: "century-breeze",
    name: "Century Breeze Residence",
    location: "Jakkur / Sahakar Nagar, Bengaluru",
    category: "Interior Design",
    subCategory: "Premium High-Rise Apartment",
    clientOrPropertyType: "Century Breeze Resident",
    builtUpArea: "2,850 sq. ft.",
    completionYear: "2023",
    status: "Completed",
    tagline: "Contemporary Warmth and Streamlined Storage in Sahakar Nagar",
    heroImage: "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.06-PM.jpeg",
    galleryImages: [
      "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.06-PM.jpeg",
      "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.08-PM.jpeg"
    ],
    designChallenge:
      "Creating an airy, uncluttered 3-BHK home with extensive storage, premium modular kitchen, and custom fluted wall paneling.",
    solution:
      "Implemented handle-less floor-to-ceiling wardrobe joinery, quartz stone waterfall kitchen island, and concealed warm LED illumination.",
    servicesDelivered: [
      "Full Home Interior Design",
      "Modular Kitchen & Wardrobe Systems",
      "Wall Paneling & Lighting Scheme"
    ],
    materialsUsed: [
      "High-Pressure Acrylic Laminates",
      "Engineered Quartz Stone",
      "Warm LED Profiles",
      "Champagne Aluminum Profiles"
    ],
    results: [
      "Handed over in 65 days with zero defects",
      "High praise for spatial storage efficiency"
    ]
  }
];

// The exact 9 Services as displayed on https://buildstorys.com/
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential-architecture",
    serviceNumber: "01",
    category: "Architecture",
    service: "Residential Architecture",
    majorCapabilities: [
      "Independent Homes & Apartments",
      "Gated Communities & Penthouses",
      "Villas & Holiday Homes",
      "Structural Coordination & Approvals"
    ],
    description:
      "Thoughtful homes designed around lifestyle, functionality and lasting value. We create spaces shaped around light, ventilation, and your family's daily rituals.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.10-PM-1.jpeg",
    typicalDeliverables: [
      "Site Analysis & Microclimate Study",
      "Architectural 2D & 3D Plans",
      "Structural & MEP Coordination",
      "Statutory Sanction Drawings"
    ]
  },
  {
    id: "commercial-architecture",
    serviceNumber: "02",
    category: "Architecture",
    service: "Commercial Architecture",
    majorCapabilities: [
      "Office Headquarters & Tech Hubs",
      "Commercial Complexes & Campuses",
      "Pedestrian & Vehicular Flow",
      "Energy Efficiency & Compliance"
    ],
    description:
      "Purpose-driven spaces designed for businesses, teams and evolving needs. Architecture engineered for institutional resilience and corporate prestige.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.36.01-PM-1.jpeg",
    typicalDeliverables: [
      "Master Space Allocation",
      "Façade Engineering Details",
      "Egress, Fire & Safety Documentation",
      "Detailed Bill of Quantities (BOQ)"
    ]
  },
  {
    id: "retail-architecture",
    serviceNumber: "03",
    category: "Architecture",
    service: "Retail Architecture",
    majorCapabilities: [
      "Standalone Stores planning",
      "Flagship Showrooms & Experience Centers",
      "Storefront Street Façade Impact",
      "Customer Movement & Brand Staging"
    ],
    description:
      "Distinctive retail spaces designed to support brand identity and customer experience. Transforming physical premises into destinations that captivate shoppers.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/3-6.png",
    typicalDeliverables: [
      "Storefront Concept & Façade 3D",
      "Customer Journey Blueprint",
      "High-CRI Retail Lighting Studies",
      "Store Signage & Fixture Specifications"
    ]
  },
  {
    id: "industrial-architecture",
    serviceNumber: "04",
    category: "Architecture",
    service: "Industrial Architecture",
    majorCapabilities: [
      "Manufacturing Facilities & Plants",
      "Warehouses & Logistics Centers",
      "PEB Structure Engineering",
      "Heavy Machinery Foundations & Floor Slabs"
    ],
    description:
      "Efficient, workflow-driven environments designed for industrial operations. Balancing heavy equipment load tolerances with natural daylight and safety.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/TEXEL-INDUSTRIES-_-KRISHNA-SHELTER-DEVELOPERS-2-1.png",
    typicalDeliverables: [
      "Industrial Master Layout Plan",
      "PEB & Civil Structure Blueprints",
      "Pollution Control & Fire Approvals",
      "Machinery Isolation Details"
    ]
  },
  {
    id: "residential-interior-design",
    serviceNumber: "05",
    category: "Interior Design",
    service: "Residential Interior Design",
    majorCapabilities: [
      "Modular Kitchens & Wardrobes",
      "Living, Bedroom & Lighting Design",
      "Custom Furniture & Carpentry",
      "False Ceiling & Mood Lighting"
    ],
    description:
      "Complete interior solutions designed to bring comfort, functionality and personality home. Tailored spaces reflecting the unique character of every resident.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.06-PM.jpeg",
    typicalDeliverables: [
      "3D Visualisations & Renders",
      "Modular Joinery CAD Blueprints",
      "Curated Material & Finish Swatches",
      "Turnkey Installation Timeline"
    ]
  },
  {
    id: "commercial-interiors",
    serviceNumber: "06",
    category: "Interior Design",
    service: "Commercial Interiors",
    majorCapabilities: [
      "Executive Suites & Boardrooms",
      "Collaborative Team Workspaces",
      "Acoustic Insulation & Zoning",
      "Workplace Brand Integration"
    ],
    description:
      "Professional interior environments designed for productive and engaging workplaces. Built to foster collaboration, employee well-being, and brand values.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/Images-19.png",
    typicalDeliverables: [
      "Zoning & Density Calculations",
      "Acoustic Ceiling & Wall Details",
      "Ergonomic Furniture Specifications",
      "MEP & Cable Management Plan"
    ]
  },
  {
    id: "retail-interior-design",
    serviceNumber: "07",
    category: "Interior Design",
    service: "Retail Interior Design",
    majorCapabilities: [
      "Bespoke Display Fixtures",
      "Customer Flow & Dwell Zones",
      "Point-of-Sale Integration",
      "Tactile Material Atmosphere"
    ],
    description:
      "Customer-focused interiors that create memorable and purposeful brand experiences. Designed to optimize visual merchandising and customer retention.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.10-PM.jpeg",
    typicalDeliverables: [
      "Custom Merchandising Fixtures",
      "Lighting & Lux Level Planning",
      "Material Board & Finishes",
      "Fast-Track Fitout Schedule"
    ]
  },
  {
    id: "farm-house-design",
    serviceNumber: "08",
    category: "Architecture",
    service: "Farm House Design",
    majorCapabilities: [
      "Weekend Homes & Rural Retreats",
      "Verandahs & Courtyard Living",
      "Landscape & Native Ecology Integration",
      "Natural Stone & Timber Craft"
    ],
    description:
      "Thoughtful weekend homes and rural retreats that connect architecture with nature. Crafted for relaxation, slow living, and indoor-outdoor harmony.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.07-PM.jpeg",
    typicalDeliverables: [
      "Estate Master Plan",
      "Courtyard & Verandah Details",
      "Eco-Materials Sourcing Plan",
      "Execution BOQ"
    ]
  },
  {
    id: "turnkey-interior-solutions",
    serviceNumber: "09",
    category: "Turnkey",
    service: "Turnkey Interior Solutions",
    majorCapabilities: [
      "Complete Space Planning & Design",
      "Material Selection & Custom Furniture",
      "Complete Execution & Installation",
      "Single-Point Accountability & Warranty"
    ],
    description:
      "From the first concept to the final finish, we handle your entire interior journey. Absolute peace of mind with guaranteed timelines and locked transparent pricing.",
    image: "https://buildstorys.com/wp-content/uploads/2026/08/WhatsApp-Image-2026-08-29-at-12.24.08-PM.jpeg",
    typicalDeliverables: [
      "Locked Itemized BOQ",
      "Dedicated Site Project Manager",
      "Weekly Video Progress Reports",
      "Comprehensive Handover Inspection"
    ]
  }
];

// The exact 7 Steps of "The Build Storys Way" on https://buildstorys.com/
export const SEVEN_STEP_PROCESS: ProcessStep[] = [
  {
    stepNumber: 1,
    stepCode: "01",
    title: "Understand",
    tagline: "Vision, lifestyle, site, requirements, budget and goals.",
    summary:
      "We begin by understanding your vision, lifestyle, site, requirements, budget and project goals. We analyze your day-to-day rituals, preferences, and site orientation before drawing the first line.",
    activities: [
      "Detailed lifestyle and routine consultation",
      "Site survey, solar orientation and constraints analysis",
      "Budget modeling and feasibility assessment",
      "Defining project scope and key milestones"
    ],
    deliverable: "Comprehensive Project Brief & Feasibility Baseline",
    duration: "Phase 1",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=90"
  },
  {
    stepNumber: 2,
    stepCode: "02",
    title: "PLAN",
    tagline: "Thoughtful space planning, layouts and project direction.",
    summary:
      "We translate your requirements into thoughtful space planning, layouts and a clear direction for the project. Every square foot is optimized for flow, light, and natural movement.",
    activities: [
      "2D architectural floor plan options",
      "Zoning of private, semi-private and entertaining zones",
      "Circulation, ventilation, and view alignment",
      "Structural grid and service placement"
    ],
    deliverable: "Finalized Architectural & Furniture Layouts",
    duration: "Phase 2",
    image: "https://images.unsplash.com/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1600&q=90"
  },
  {
    stepNumber: 3,
    stepCode: "03",
    title: "ENVISION",
    tagline: "Concepts and 3D visualisations that bring possibilities to life.",
    summary:
      "We transform ideas into concepts and 3D visualizations that bring the possibilities of your space to life. Experience light, materials, textures, and spatial proportions before execution.",
    activities: [
      "Moodboards and color palettes",
      "Photorealistic 3D interior & exterior renderings",
      "Material and texture review at our design studio",
      "Client collaborative feedback & refinements"
    ],
    deliverable: "Photorealistic 3D Visualisation Package",
    duration: "Phase 3",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90"
  },
  {
    stepNumber: 4,
    stepCode: "04",
    title: "Design",
    tagline: "Cohesive and purposeful architecture, interiors and materials.",
    summary:
      "We refine architecture, interiors, materials and technical details to create a cohesive and purposeful design. Detailed drawings coordinate civil, electrical, plumbing, joinery, and HVAC.",
    activities: [
      "Complete working drawings and construction details",
      "Electrical, plumbing and HVAC layouts",
      "Custom cabinetry and furniture shop drawings",
      "Material specification documentation"
    ],
    deliverable: "Construction-Ready Technical Drawing Dossier",
    duration: "Phase 4",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=90"
  },
  {
    stepNumber: 5,
    stepCode: "05",
    title: "COORDINATE",
    tagline: "Structural coordination, documentation, BOQs and approvals.",
    summary:
      "We bring together structural coordination, documentation, BOQs and required approvals for a well-defined project. Every material and component is accounted for with transparent costs.",
    activities: [
      "Itemized Bill of Quantities (BOQ) with transparent pricing",
      "Structural engineering review and verification",
      "Statutory permissions and HOA compliance packs",
      "Procurement timeline and resource scheduling"
    ],
    deliverable: "Locked Itemized BOQ & Project Execution Agreement",
    duration: "Phase 5",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=90"
  },
  {
    stepNumber: 6,
    stepCode: "06",
    title: "EXECUTE",
    tagline: "Coordinated implementation, quality control and design intent.",
    summary:
      "We bring the approved design to life through coordinated execution, maintaining quality and design intent throughout. Dedicated on-site supervisors oversee each phase to ensure perfection.",
    activities: [
      "Civil execution and structural implementation",
      "Factory fabrication of modular millwork and cabinetry",
      "On-site electrical, plumbing, tiling and stone installation",
      "Regular milestone audits and client progress updates"
    ],
    deliverable: "Milestone-Driven Physical Build & Quality Sign-Offs",
    duration: "Phase 6",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1600&q=90"
  },
  {
    stepNumber: 7,
    stepCode: "07",
    title: "EXPERIENCE",
    tagline: "A considered space that reflects your vision and is built to last.",
    summary:
      "We deliver a considered space that reflects your vision, serves its purpose and is built to last. Handed over spotless with all warranties, manuals, and support for your journey.",
    activities: [
      "Multi-point quality audit and snag-list clearance",
      "Deep professional cleaning and final detailing",
      "Appliance and automation commissioning",
      "Handover of keys, warranty documentation, and care guide"
    ],
    deliverable: "Keys in Hand, Warranty Binder & Space Celebration",
    duration: "Phase 7",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=90"
  }
];

// The exact Client Testimonials on https://buildstorys.com/
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testimonial-01",
    clientCode: "01",
    clientType: "RESIDENTIAL CLIENT",
    clientName: "Ananya R.",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90",
    quote:
      "We were looking for the best architects in Bangalore who could understand what we actually wanted for our home. Build Storys listened to our ideas, guided us through every stage and created a space that feels completely ours.",
    rating: 5
  },
  {
    id: "testimonial-02",
    clientCode: "02",
    clientType: "INTERIOR DESIGN CLIENT",
    clientName: "Veera K.",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=90",
    quote:
      "From the initial architecture plan to the final interiors, the Build Storys team made everything feel simple and well organised. They understood our lifestyle and paid attention to every detail. Truly one of the best experiences we’ve had with a design team.",
    rating: 5
  },
  {
    id: "testimonial-03",
    clientCode: "03",
    clientType: "VILLA CLIENT",
    clientName: "Karthik S.",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?auto=format&fit=crop&w=1200&q=90",
    quote:
      "From the initial architecture plan to the final interiors, the Build Storys team made everything feel simple and well organised. They understood our lifestyle and paid attention to every detail. Truly one of the best experiences we’ve had with a design team.",
    rating: 5
  }
];

// The exact 6 Frequently Asked Questions on https://buildstorys.com/
export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-01",
    faqNumber: "01",
    category: "Architecture & Interiors",
    question: "What services does Build Storys offer?",
    answer:
      "Architecture, interior design, 3D visualization and turnkey execution for residential, commercial, retail and other spaces."
  },
  {
    id: "faq-02",
    faqNumber: "02",
    category: "Residential Architecture",
    question: "Does Build Storys design independent houses?",
    answer:
      "Yes, we design independent homes, villas, apartments and other residential spaces."
  },
  {
    id: "faq-03",
    faqNumber: "03",
    category: "Villa Design",
    question: "Do you specialize in villa design?",
    answer:
      "Yes, our villa design combines thoughtful planning, functionality and personalized aesthetics."
  },
  {
    id: "faq-04",
    faqNumber: "04",
    category: "Services & Scope",
    question: "Can I hire Build Storys for architecture or interiors only?",
    answer:
      "Yes, you can choose architectural design, interior design or complete project execution."
  },
  {
    id: "faq-05",
    faqNumber: "05",
    category: "Commercial Spaces",
    question: "Do you design commercial spaces?",
    answer:
      "Yes, we design commercial offices, retail spaces, showrooms and other business environments."
  },
  {
    id: "faq-06",
    faqNumber: "06",
    category: "Visualisation",
    question: "Do you provide 3D visualization?",
    answer:
      "Yes, 3D visualization helps you understand the design before execution."
  }
];

// The exact Brands and Client Communities on https://buildstorys.com/
export const CLIENT_PROPERTY_ASSOCIATIONS = [
  { id: "01", name: "Century Breeze", category: "Residential Community", location: "Jakkur / Sahakar Nagar, Bengaluru" },
  { id: "02", name: "Brigade Cornerstone Utopia", category: "Modern Integrated Township", location: "Varthur, Whitefield, Bengaluru" },
  { id: "03", name: "Brigade El Dorado", category: "Contemporary Residential Community", location: "Aerospace Park, North Bengaluru" },
  { id: "04", name: "Brigade Group", category: "Leading Real Estate Developer", location: "Bengaluru, Karnataka" },
  { id: "05", name: "Embassy Boulevard", category: "Ultra-Luxury Villa Community", location: "Yelahanka, North Bengaluru" },
  { id: "06", name: "Embassy Group", category: "Premier Property & Corporate Developer", location: "Bengaluru, Karnataka" },
  { id: "07", name: "Godrej Aqua", category: "Sustainable Eco-Residential Tower", location: "International Airport Road, Bengaluru" },
  { id: "08", name: "Phoenix Kessaku", category: "Super-Luxury Duplex & Penthouse Landmark", location: "Rajajinagar, Bengaluru" },
  { id: "09", name: "Phoenix Group", category: "Retail & Residential Landmark Developer", location: "Bengaluru, Karnataka" },
  { id: "10", name: "Prestige Mistry Waters", category: "High-Rise Waterfront Residence", location: "Hebbal, Bengaluru" },
  { id: "11", name: "Purva Palm Beach", category: "Resort-Themed Community", location: "Hennur Road, Bengaluru" },
  { id: "12", name: "Texel Industries & Krishna Shelter Developers", category: "Industrial Architecture & Corporate Campus", location: "Bengaluru, Karnataka" }
];

// Design Insights & Articles
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "turnkey-vs-item-rate",
    title: "Why Turnkey Design-Build is Replacing Fragmented Contracting in Bengaluru",
    category: "Turnkey Execution",
    readTime: "5 min read",
    date: "August 2024",
    excerpt:
      "Examining the financial, timeline, and stress pitfalls of managing multiple disjointed contractors versus partnering with a unified architecture and build team.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "Eliminates cost escalations from miscommunication between architects and civil contractors",
      "Guarantees that physical reality matches the approved 3D visualisations",
      "Single contract, single warranty, and zero coordination headaches for clients"
    ]
  },
  {
    id: "bengaluru-climate-responsive-architecture",
    title: "Designing for Bengaluru's Microclimates: Daylight, Courtyards & Cross-Ventilation",
    category: "Architecture",
    readTime: "6 min read",
    date: "July 2024",
    excerpt:
      "How intelligent solar orientation, porous terracotta jaalis, and passive stack ventilation keep contemporary Bengaluru residences naturally cool year-round.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "Positioning double-height courts along prevailing winds for natural stack cooling",
      "Deep overhangs that protect against monsoon rain while shielding interiors from direct heat",
      "Pairing local stone with natural wood for organic thermal comfort"
    ]
  },
  {
    id: "luxury-apartment-interiors-checklist",
    title: "Non-Negotiable Specifications for Duplex & Penthouse Fit-Outs in Bengaluru",
    category: "Interior Design",
    readTime: "4 min read",
    date: "June 2024",
    excerpt:
      "From acoustic floor underlayments to concealed HVAC diffusers and low-iron architectural glass: the subtle details that define world-class residences.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    keyTakeaways: [
      "Acoustic privacy planning between home offices and entertaining lounges",
      "Selecting stone and marble finishes based on light reflection and durability",
      "Concealed wiring and smart automation conduits planned before ceiling closure"
    ]
  }
];
