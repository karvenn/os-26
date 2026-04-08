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
];
