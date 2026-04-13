export interface SupportPackage {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  bestFor: string;
  includes: string[];
  responseTime: string;
  contentHours: string;
  monitoring: string;
  faq: { question: string; answer: string }[];
}

export const supportPackages: SupportPackage[] = [
  {
    slug: 'essential',
    name: 'Essential',
    tagline: 'For businesses that need reliable basics',
    price: '1,500',
    description: 'Core website maintenance: security updates, uptime monitoring, backups, and minor content changes. Everything you need to keep your site healthy and secure.',
    bestFor: 'Small to mid-size corporate websites with moderate traffic and standard hosting requirements.',
    includes: [
      'Weekly security patches and updates',
      '24/7 uptime monitoring',
      'Daily automated backups (30-day retention)',
      '2 hours content updates per month',
      'Monthly health report',
      'Email support (business hours)',
      '4-hour emergency response (business hours)',
    ],
    responseTime: '4 hours (business hours)',
    contentHours: '2 hours/month',
    monitoring: '24/7 uptime + weekly security scans',
    faq: [
      { question: 'What if I need more than 2 hours of content changes?', answer: 'Additional hours are available at MYR 250/hour. You can also upgrade to Professional mid-contract if your needs grow consistently.' },
    ],
  },
  {
    slug: 'professional',
    name: 'Professional',
    tagline: 'For businesses that depend on their website',
    price: '3,500',
    description: 'Comprehensive managed service: everything in Essential plus performance optimisation, extended support hours, faster response times, and more content updates.',
    bestFor: 'Corporate websites and web applications with significant traffic, multiple integrations, or revenue-generating functionality.',
    includes: [
      'Everything in Essential, plus:',
      'Quarterly Core Web Vitals optimisation',
      'Database and cache performance tuning',
      '5 hours content updates per month',
      'Staging environment for testing changes',
      'Slack channel for direct communication',
      '2-hour emergency response (extended hours)',
      'Quarterly strategic review with recommendations',
    ],
    responseTime: '2 hours (extended hours: 8am\u201310pm)',
    contentHours: '5 hours/month',
    monitoring: '24/7 uptime + performance tracking + vulnerability scanning',
    faq: [
      { question: 'What does the quarterly strategic review include?', answer: 'A 1-hour meeting reviewing site performance, security posture, and recommended improvements. We provide a written report with prioritised action items.' },
    ],
  },
  {
    slug: 'enterprise',
    name: 'Enterprise',
    tagline: 'For mission-critical digital platforms',
    price: '8,000',
    description: 'White-glove managed service for organisations where downtime is not an option. Dedicated account manager, 24/7 support, SLA guarantees, and proactive optimisation.',
    bestFor: 'Enterprise platforms, e-commerce sites, customer portals, and any application where availability directly impacts revenue.',
    includes: [
      'Everything in Professional, plus:',
      'Dedicated account manager',
      '10 hours content updates per month',
      '24/7 emergency support with SLA guarantee',
      '1-hour emergency response (including weekends)',
      '99.9% uptime SLA with service credits',
      'Monthly performance optimisation sprints',
      'Priority access to development resources',
      'Annual security penetration testing',
      'Disaster recovery planning and testing',
    ],
    responseTime: '1 hour (24/7 including weekends)',
    contentHours: '10 hours/month',
    monitoring: '24/7 uptime + real-time performance + security + APM',
    faq: [
      { question: 'What does the SLA guarantee cover?', answer: 'If uptime falls below 99.9% in any month, you receive service credits proportional to the downtime. The SLA covers platform availability, not scheduled maintenance windows.' },
    ],
  },
];
