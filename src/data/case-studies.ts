export interface CaseStudyMetric {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  company: string;
}

export interface CaseStudy {
  slug: string;
  clientName: string;
  projectTitle: string;
  challenge: string;
  solution: string;
  metrics: CaseStudyMetric[];
  testimonial: Testimonial;
  technologies: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'meridian-properties',
    clientName: 'Meridian Properties',
    projectTitle: 'Corporate Website Redesign',
    challenge:
      "Meridian's legacy website was slow, difficult to update, and failing to convert the high-quality traffic driven by their marketing campaigns. Their team spent hours each week on content updates that should have taken minutes.",
    solution:
      'We rebuilt their digital presence from the ground up using NuxtJS for blazing-fast performance and Strapi as a headless CMS, giving their marketing team full editorial control with a modern, intuitive interface.',
    metrics: [
      { value: 2.4, decimals: 1, suffix: 'x', label: 'Lead Increase' },
      { value: 0.8, decimals: 1, suffix: 's', label: 'Load Time' },
      { value: 340, suffix: '%', label: 'More Page Views' },
      { value: 95, suffix: '+', label: 'Lighthouse Score' },
    ],
    testimonial: {
      quote:
        "Orangesoft didn't just build us a website — they gave us a competitive advantage. The speed and flexibility of our new platform has transformed how we engage with potential buyers.",
      authorName: 'Sarah Chen',
      authorTitle: 'Head of Marketing',
      company: 'Meridian Properties',
    },
    technologies: ['NuxtJS', 'Strapi', 'Tailwind CSS', 'Netlify'],
  },
  {
    slug: 'pinnacle-financial',
    clientName: 'Pinnacle Financial',
    projectTitle: 'Customer Self-Service Portal',
    challenge:
      "Pinnacle's call centre was overwhelmed with routine requests — balance inquiries, document submissions, and account updates. Customers waited an average of 12 minutes for tasks that should be self-service.",
    solution:
      'We designed and developed a secure, user-friendly customer portal using Laravel, with role-based access control, real-time reporting dashboards, and automated document processing workflows.',
    metrics: [
      { value: 68, suffix: '%', label: 'Fewer Support Tickets' },
      { value: 50, suffix: 'K+', label: 'Active Users' },
      { value: 4.8, decimals: 1, suffix: '/5', label: 'User Rating' },
      { value: 92, suffix: '%', label: 'Task Completion' },
    ],
    testimonial: {
      quote:
        'The portal has fundamentally changed our customer experience. Support costs are down, satisfaction is up, and our team can focus on high-value interactions instead of routine requests.',
      authorName: 'Ahmad Razak',
      authorTitle: 'Chief Digital Officer',
      company: 'Pinnacle Financial',
    },
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'atlas-manufacturing',
    clientName: 'Atlas Manufacturing',
    projectTitle: 'Supply Chain Management Platform',
    challenge:
      'Atlas managed procurement, inventory, and vendor relationships across 12 regional offices using spreadsheets and email. Data was siloed, orders were delayed, and visibility into the supply chain was virtually nonexistent.',
    solution:
      'We built a centralised supply chain platform on Laravel with a Strapi-powered content layer for vendor documentation, integrating with their existing ERP via custom REST APIs for real-time inventory synchronisation.',
    metrics: [
      { value: 3.1, decimals: 1, suffix: 'x', label: 'Processing Efficiency' },
      { value: 12, suffix: '', label: 'Offices Connected' },
      { value: 45, suffix: '%', label: 'Cost Reduction' },
      { value: 99.9, decimals: 1, suffix: '%', label: 'System Uptime' },
    ],
    testimonial: {
      quote:
        'For the first time, we have real-time visibility across our entire supply chain. What used to take days of phone calls and spreadsheet reconciliation now happens automatically.',
      authorName: 'Lim Wei Hong',
      authorTitle: 'VP of Operations',
      company: 'Atlas Manufacturing',
    },
    technologies: ['Laravel', 'Strapi', 'REST APIs', 'AWS'],
  },
];
