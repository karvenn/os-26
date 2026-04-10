export interface Platform {
  slug: string;
  name: string;
  category: 'hosting' | 'deployment' | 'application' | 'code';
  tagline: string;
  description: string;
  whyWeUse: string[];
  whenWeUseIt: string;
}

export const platforms: Platform[] = [
  {
    slug: 'vercel',
    name: 'Vercel',
    category: 'hosting',
    tagline: 'Edge-optimised hosting for NuxtJS frontends',
    description:
      'Vercel is our primary hosting platform for NuxtJS websites. It provides global edge deployment, automatic performance optimisation, and seamless preview deployments for every change.',
    whyWeUse: [
      'Global edge network delivers sub-100ms response times worldwide',
      'Automatic HTTPS, CDN, and asset optimisation',
      'Preview deployments for every branch and pull request',
      'Built-in analytics and Core Web Vitals monitoring',
      'Zero-configuration deployment for Astro and NuxtJS projects',
    ],
    whenWeUseIt: 'For static or hybrid-rendered NuxtJS websites where global performance is critical.',
  },
  {
    slug: 'cloudways',
    name: 'Cloudways',
    category: 'hosting',
    tagline: 'Managed cloud hosting for Laravel applications',
    description:
      'Cloudways provides managed infrastructure on top of major cloud providers (DigitalOcean, AWS, Google Cloud). We use it for Laravel applications that need dedicated server resources without the complexity of direct cloud management.',
    whyWeUse: [
      'Managed infrastructure reduces DevOps overhead',
      'Choice of cloud provider for data residency and performance',
      'Built-in caching, staging, and backup tools',
      'Scalable server resources with vertical and horizontal scaling',
      'Cost-effective compared to fully managed platforms',
    ],
    whenWeUseIt: 'For Laravel applications requiring dedicated resources, data residency in Southeast Asia, or cost-sensitive deployments.',
  },
  {
    slug: 'laravel-cloud',
    name: 'Laravel Cloud',
    category: 'application',
    tagline: 'First-party deployment platform for Laravel',
    description:
      'Laravel Cloud is the official deployment platform built by the Laravel team. It offers opinionated, optimised infrastructure specifically for Laravel applications with deep integration into the framework.',
    whyWeUse: [
      'Built by the Laravel team for Laravel applications',
      'Automatic scaling and zero-downtime deployments',
      'Native integration with Laravel features (queues, scheduling, caching)',
      'Built-in staging, preview, and rollback capabilities',
      'Simplified environment management',
    ],
    whenWeUseIt: 'For Laravel projects where first-party integration, simplicity, and framework-specific optimisations outweigh cost considerations.',
  },
  {
    slug: 'netlify',
    name: 'Netlify',
    category: 'hosting',
    tagline: 'Frictionless hosting for static and JAMstack sites',
    description:
      'Netlify is our alternative hosting platform for static sites, with excellent form handling, serverless functions, and a generous free tier for smaller projects.',
    whyWeUse: [
      'Instant deploys from Git with preview URLs',
      'Built-in form handling (no backend required)',
      'Serverless functions for dynamic features',
      'Generous free tier suitable for small projects',
      'Excellent developer experience and tooling',
    ],
    whenWeUseIt: 'For smaller marketing sites, microsites, or projects where built-in form handling and cost efficiency are priorities.',
  },
  {
    slug: 'github',
    name: 'GitHub',
    category: 'code',
    tagline: 'Source control and collaboration',
    description:
      'GitHub is where all our code lives. Every project is version-controlled, peer-reviewed, and deployed through automated CI/CD pipelines that ensure quality and reliability.',
    whyWeUse: [
      'Industry-standard source control with Git',
      'Pull request workflows for code review',
      'GitHub Actions for CI/CD automation',
      'Issue tracking and project management',
      'Transparent collaboration with clients who want access',
    ],
    whenWeUseIt: 'For every project, without exception. Clients receive full repository access and code ownership at project completion.',
  },
];
