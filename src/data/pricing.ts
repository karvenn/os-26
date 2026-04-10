export interface PricingTier {
  name: string;
  priceFrom: string;
  priceTo: string;
  description: string;
  bestFor: string;
  includes: string[];
  timeline: string;
}

export interface PricingFaq {
  question: string;
  answer: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Corporate Website',
    priceFrom: '30,000',
    priceTo: '80,000',
    description: 'A custom-designed, high-performance corporate website built for credibility and lead generation.',
    bestFor: 'SMEs and corporate divisions establishing a premium digital presence',
    includes: [
      '5\u201315 unique page designs',
      'Custom visual identity and layout system',
      'Content management system for marketing team',
      'Contact forms with CRM integration',
      'Analytics and Google Tag Manager setup',
      'SEO foundations (schema, meta, sitemap)',
      'Mobile-optimised responsive design',
      '30 days post-launch support',
    ],
    timeline: '8\u201312 weeks',
  },
  {
    name: 'Content Platform',
    priceFrom: '60,000',
    priceTo: '150,000',
    description: 'A content-rich marketing platform with multi-language support, blog, and advanced editorial workflows.',
    bestFor: 'Organisations publishing frequently across multiple channels and languages',
    includes: [
      '20\u201350+ pages with flexible layouts',
      'Headless CMS (Strapi) with custom content types',
      'Multi-language support with hreflang',
      'Blog or news section with categorisation',
      'Resource library or downloads section',
      'Advanced SEO configuration',
      'Marketing automation integration',
      '30 days post-launch support',
    ],
    timeline: '12\u201316 weeks',
  },
  {
    name: 'Web Application',
    priceFrom: '80,000',
    priceTo: '250,000',
    description: 'Custom web applications like customer portals, booking systems, or internal dashboards.',
    bestFor: 'Businesses replacing manual processes or legacy systems with digital platforms',
    includes: [
      'Discovery and architecture phase',
      'User authentication and role-based access',
      'Custom business logic and workflows',
      'Admin interface for internal teams',
      'Third-party integrations (ERP, CRM, payment)',
      'Database design and optimisation',
      'Scalable cloud infrastructure setup',
      '30 days post-launch support',
    ],
    timeline: '16\u201324 weeks',
  },
  {
    name: 'E-Commerce Platform',
    priceFrom: '60,000',
    priceTo: '200,000',
    description: 'Custom online stores that go beyond off-the-shelf platforms.',
    bestFor: 'Retailers with unique product configurations or complex checkout flows',
    includes: [
      'Custom product catalog with advanced filtering',
      'Optimised checkout flow (conversion-tested)',
      'Malaysian payment gateways (iPay88, Billplz, FPX)',
      'Inventory and order management',
      'Customer accounts and loyalty features',
      'Multi-currency and multi-language support',
      'Analytics and sales reporting',
      '30 days post-launch support',
    ],
    timeline: '14\u201320 weeks',
  },
];

export const pricingFaq: PricingFaq[] = [
  {
    question: 'Do you offer fixed pricing?',
    answer: 'We provide transparent, fixed-price quotes after our discovery phase \u2014 not before. Every project is scoped individually so you receive an accurate, detailed proposal that reflects your specific requirements. No hidden costs, no mid-project surprises.',
  },
  {
    question: 'What is included in the 30 days of post-launch support?',
    answer: 'Bug fixes, minor adjustments, performance monitoring, security patches, and team training during your first month. We make sure your launch is stable and your team is confident operating the platform.',
  },
  {
    question: 'What happens after the 30-day support period ends?',
    answer: 'We offer optional monthly maintenance packages starting from MYR 1,500/month, covering security updates, performance monitoring, minor changes, and priority support. Alternatively, you can engage us on an ad-hoc basis for specific needs.',
  },
  {
    question: 'Do you charge hourly for additional work?',
    answer: 'For work outside your original scope, we offer transparent hourly rates or can scope it as a change order with a fixed price. You will always know the cost before we start any work.',
  },
  {
    question: 'What are the payment terms?',
    answer: 'Typically 30% on project kickoff, 30% at design approval, 30% at development completion, and 10% on launch. Larger projects may have additional milestone payments. All terms are documented in your proposal.',
  },
  {
    question: 'Can we start small and expand later?',
    answer: 'Absolutely. Many clients start with a core scope (e.g., 5-10 key pages) and add features in subsequent phases. We architect every project to be extensible so future phases are efficient and cost-effective.',
  },
];
