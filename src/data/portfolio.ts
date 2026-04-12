export interface PortfolioProject {
  slug: string;
  clientName: string;
  projectType: string;
  headline: string;
  description: string;
  technologies: string[];
  year: string;
  caseStudySlug?: string;
  featured: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'meridian-properties',
    clientName: 'Meridian Properties',
    projectType: 'Corporate Website',
    headline: '2.4x increase in qualified leads within 6 months',
    description:
      "A complete digital transformation for one of Southeast Asia's leading property developers, replacing a legacy site with a high-performance, content-rich platform.",
    technologies: ['NuxtJS', 'Strapi', 'Tailwind CSS'],
    year: '2025',
    caseStudySlug: 'meridian-properties',
    featured: true,
  },
  {
    slug: 'pinnacle-financial',
    clientName: 'Pinnacle Financial',
    projectType: 'Web Application',
    headline: '68% reduction in customer support tickets',
    description:
      'A self-service customer portal that streamlined account management, document submissions, and real-time reporting for over 50,000 active users.',
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL'],
    year: '2024',
    caseStudySlug: 'pinnacle-financial',
    featured: true,
  },
  {
    slug: 'atlas-manufacturing',
    clientName: 'Atlas Manufacturing',
    projectType: 'Web Application',
    headline: '3.1x improvement in order processing efficiency',
    description:
      'A supply chain management platform that digitised inventory tracking, vendor communications, and procurement workflows across 12 regional offices.',
    technologies: ['Laravel', 'Strapi', 'REST APIs'],
    year: '2024',
    caseStudySlug: 'atlas-manufacturing',
    featured: true,
  },
  {
    slug: 'horizon-digital',
    clientName: 'Horizon Digital',
    projectType: 'E-Commerce Platform',
    headline: '0.8s average page load, 4.2% conversion rate',
    description:
      'A headless commerce experience that scaled to handle peak traffic during regional sales events without performance degradation.',
    technologies: ['NuxtJS', 'Strapi', 'Stripe'],
    year: '2025',
    caseStudySlug: 'horizon-digital',
    featured: true,
  },
  {
    slug: 'vista-university',
    clientName: 'Vista University',
    projectType: 'Corporate Website',
    headline: '45% increase in online course registrations',
    description:
      'A modern university website with programme finder, virtual campus tour, and integrated application portal for prospective students.',
    technologies: ['NuxtJS', 'Strapi', 'Algolia'],
    year: '2024',
    featured: false,
  },
  {
    slug: 'prima-healthcare',
    clientName: 'Prima Healthcare Group',
    projectType: 'Web Application',
    headline: 'Patient portal serving 30,000+ active users',
    description:
      'A secure patient portal with appointment booking, medical records access, and real-time communication with healthcare providers.',
    technologies: ['Laravel', 'Vue.js', 'Redis'],
    year: '2024',
    featured: false,
  },
  {
    slug: 'nusantara-logistics',
    clientName: 'Nusantara Logistics',
    projectType: 'Web Application',
    headline: 'Real-time tracking across 200+ delivery routes',
    description:
      'A fleet management and shipment tracking platform with real-time GPS integration, automated dispatch, and customer notification system.',
    technologies: ['Laravel', 'NuxtJS', 'WebSocket'],
    year: '2023',
    featured: false,
  },
  {
    slug: 'greenfield-resorts',
    clientName: 'Greenfield Resorts',
    projectType: 'Booking Platform',
    headline: '24/7 direct bookings, 18% fewer OTA dependency',
    description:
      'A custom booking engine with dynamic pricing, multi-property management, and integration with major channel managers.',
    technologies: ['NuxtJS', 'Laravel', 'Stripe'],
    year: '2023',
    featured: false,
  },
  {
    slug: 'federal-agency-gov',
    clientName: 'Federal Regulatory Agency',
    projectType: 'Content Platform',
    headline: 'WCAG 2.1 AA compliant, 3 languages',
    description:
      'A public information portal with document management, multi-language support, and accessibility compliance for a government regulatory body.',
    technologies: ['NuxtJS', 'Strapi', 'Tailwind CSS'],
    year: '2024',
    featured: false,
  },
  {
    slug: 'artisan-collective',
    clientName: 'Artisan Collective',
    projectType: 'E-Commerce Platform',
    headline: '320+ artisan vendors onboarded in first quarter',
    description:
      'A multi-vendor marketplace connecting Malaysian artisans with buyers, featuring custom product configurators and integrated logistics.',
    technologies: ['NuxtJS', 'Laravel', 'Stripe'],
    year: '2025',
    featured: false,
  },
  {
    slug: 'capital-partners',
    clientName: 'Capital Partners Advisory',
    projectType: 'Corporate Website',
    headline: 'Investor portal with secure document access',
    description:
      'A premium corporate site with a gated investor relations portal, fund performance dashboards, and regulatory document distribution.',
    technologies: ['NuxtJS', 'Laravel', 'PostgreSQL'],
    year: '2023',
    featured: false,
  },
  {
    slug: 'bright-learning',
    clientName: 'Bright Learning Academy',
    projectType: 'Web Application',
    headline: 'Custom LMS serving 5,000 students',
    description:
      'A learning management system with course authoring, progress tracking, assessment engine, and parent communication portal.',
    technologies: ['Laravel', 'Vue.js', 'Strapi'],
    year: '2024',
    featured: false,
  },
];
