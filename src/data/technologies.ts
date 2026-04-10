export interface Technology {
  slug: string;
  name: string;
  category: 'frontend' | 'backend' | 'cms';
  tagline: string;
  description: string;
  whyWeUse: string[];
  bestFor: string[];
  whenWeUseIt: string;
  strengths: string[];
}

export const technologies: Technology[] = [
  {
    slug: 'nuxtjs',
    name: 'NuxtJS',
    category: 'frontend',
    tagline: 'The intuitive Vue framework for high-performance frontends',
    description:
      'NuxtJS is our primary choice for building corporate websites, marketing platforms, and content-heavy sites. Built on Vue.js, it combines developer productivity with exceptional performance through static site generation and flexible rendering modes.',
    whyWeUse: [
      'Exceptional performance with static site generation and edge deployment',
      'Vue.js foundation that our team has deep expertise in',
      'Flexible rendering modes: static, server-side, client-side, or hybrid',
      'First-class TypeScript support for type safety at scale',
      'Active ecosystem with comprehensive module library',
      'Strong SEO capabilities with built-in meta management',
    ],
    bestFor: [
      'Corporate websites and marketing platforms',
      'Content-heavy sites with complex navigation',
      'Landing pages requiring extreme performance',
      'Multi-language sites with hreflang requirements',
    ],
    whenWeUseIt:
      'We use NuxtJS for the frontend of most custom corporate websites and content platforms. It is our default choice when performance, SEO, and developer productivity matter equally.',
    strengths: [
      'Consistently 95+ Lighthouse scores',
      'Sub-second time-to-first-byte on CDN edge',
      'Built-in image optimisation',
      'Automatic code splitting and lazy loading',
    ],
  },
  {
    slug: 'laravel',
    name: 'Laravel',
    category: 'backend',
    tagline: 'The PHP framework for web artisans',
    description:
      'Laravel is our backend framework of choice for custom web applications, APIs, and complex business logic. It combines developer productivity with enterprise-grade reliability, powering customer portals, booking systems, CRMs, and admin dashboards.',
    whyWeUse: [
      'Battle-tested framework with over a decade of active development',
      'Elegant syntax that accelerates development without sacrificing quality',
      'Comprehensive ecosystem: Eloquent ORM, queues, caching, authentication',
      'Strong community and extensive documentation',
      'Enterprise features: role-based access, API authentication, rate limiting',
      'Proven scalability patterns for high-traffic applications',
    ],
    bestFor: [
      'Custom web applications and portals',
      'RESTful and GraphQL APIs',
      'Admin dashboards and internal tools',
      'Complex business logic and workflows',
      'Multi-tenant SaaS platforms',
    ],
    whenWeUseIt:
      'We use Laravel whenever a project requires server-side logic beyond simple content delivery. Customer portals, booking systems, CRMs, and any application with user authentication and complex workflows run on Laravel.',
    strengths: [
      'Rapid development with artisan scaffolding',
      'Built-in authentication and authorisation',
      'Queue workers for background processing',
      'Eloquent ORM for database management',
      'Blade templating for admin interfaces',
    ],
  },
  {
    slug: 'strapi',
    name: 'Strapi',
    category: 'cms',
    tagline: 'Open-source headless CMS for flexible content management',
    description:
      'Strapi is our headless CMS of choice. It gives marketing teams a powerful editing interface while keeping content completely separate from the frontend, enabling us to build fast websites without sacrificing editorial flexibility.',
    whyWeUse: [
      'Fully customisable content types that match your business',
      'Role-based access control for multi-team workflows',
      'Built-in internationalisation for multi-language content',
      'Media library with cloud storage integration',
      'REST and GraphQL APIs out of the box',
      'Self-hosted and open-source \u2014 you own everything',
    ],
    bestFor: [
      'Content-heavy websites',
      'Multi-channel content distribution',
      'Teams that need editorial workflow and approvals',
      'Multi-language and multi-region sites',
    ],
    whenWeUseIt:
      'We use Strapi whenever a client needs a user-friendly content management experience without being locked into traditional CMS constraints. It pairs beautifully with NuxtJS to deliver the editorial experience of WordPress with the performance of a static site.',
    strengths: [
      'Intuitive admin interface for non-technical users',
      'Flexible content modelling without database changes',
      'Webhook support for publishing workflows',
      'Draft and publish states with scheduling',
      'Custom fields and plugins',
    ],
  },
];
