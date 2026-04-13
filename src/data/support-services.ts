export interface SupportService {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  faq: { question: string; answer: string }[];
}

export const supportServices: SupportService[] = [
  {
    slug: 'monitoring',
    name: 'Uptime & Monitoring',
    tagline: 'Know before your users do',
    description: 'Round-the-clock uptime monitoring, performance tracking, and instant alerts when something needs attention. We catch issues before they affect your visitors.',
    includes: [
      '24/7 uptime monitoring with 1-minute check intervals',
      'Performance metrics tracking (load time, TTFB, Core Web Vitals)',
      'Instant alert notifications via email and Slack',
      'Monthly performance reports with trend analysis',
      'Server resource utilisation monitoring',
      'SSL certificate expiry monitoring',
    ],
    faq: [
      { question: 'How quickly are we notified of downtime?', answer: 'Within 60 seconds of detection. Alerts go to both our team and yours via email and Slack. Our team begins investigating immediately \u2014 you do not need to raise a ticket.' },
      { question: 'What uptime do you guarantee?', answer: 'We target 99.9% uptime for all managed platforms. Our Enterprise package includes an SLA with credits if we fall below this threshold.' },
    ],
  },
  {
    slug: 'security',
    name: 'Security & Updates',
    tagline: 'Protected, patched, always current',
    description: 'Regular security patches, dependency updates, vulnerability scanning, and proactive threat mitigation. Your platform stays secure without your team lifting a finger.',
    includes: [
      'Weekly security patch application and testing',
      'CMS and framework version updates',
      'Dependency and plugin vulnerability scanning',
      'Automated daily backups with 30-day retention',
      'Malware scanning and removal',
      'Security incident response and remediation',
    ],
    faq: [
      { question: 'How do you handle updates that might break our site?', answer: 'Every update is applied to a staging environment first and tested before production deployment. We maintain a rollback plan for every change.' },
      { question: 'What happens if we get hacked?', answer: 'Our team responds immediately: isolate the threat, clean the infection, restore from clean backups, patch the vulnerability, and provide a full incident report.' },
    ],
  },
  {
    slug: 'content',
    name: 'Content Management',
    tagline: 'Your content, updated on time',
    description: 'Regular content updates, page edits, image replacements, and minor layout changes handled by our team. Your marketing calendar never waits for a developer.',
    includes: [
      'Text and image updates across your website',
      'New page creation from existing templates',
      'Blog post and news article publishing',
      'Banner and promotional content swaps',
      'Form and CTA updates',
      'Content staging and scheduled publishing',
    ],
    faq: [
      { question: 'How many content changes are included per month?', answer: 'Essential: 2 hours/month. Professional: 5 hours/month. Enterprise: 10 hours/month. Additional hours available at our standard rate.' },
      { question: 'How quickly are content changes made?', answer: 'Standard requests are completed within 1 business day. Urgent requests within 4 hours. Enterprise clients get priority response.' },
    ],
  },
  {
    slug: 'hosting',
    name: 'Hosting Management',
    tagline: 'Infrastructure you do not think about',
    description: 'Server configuration, scaling, DNS management, SSL renewals, and hosting provider coordination. We manage your infrastructure so you focus on your business.',
    includes: [
      'Server configuration and optimisation',
      'Auto-scaling during traffic spikes',
      'DNS management and propagation',
      'SSL certificate management and auto-renewal',
      'CDN configuration and cache management',
      'Hosting provider liaison and escalation',
    ],
    faq: [
      { question: 'Can you manage hosting we already have?', answer: 'Yes. We manage infrastructure on any major provider: AWS, Google Cloud, DigitalOcean, Cloudways, Vercel, Netlify, and most shared hosting providers.' },
      { question: 'What if we need to migrate hosts?', answer: 'We handle the full migration: server setup, data transfer, DNS cutover, and post-migration testing. Zero downtime for your visitors.' },
    ],
  },
  {
    slug: 'emergency',
    name: 'Emergency Support',
    tagline: 'Help when it matters most',
    description: 'Priority response for critical issues: site outages, security breaches, functionality failures, and anything that impacts your business. Available when you need us, not just during office hours.',
    includes: [
      'Priority response for site-down situations',
      'Security breach containment and remediation',
      'Critical bug fixes and functionality restoration',
      'Emergency deployment and rollback capability',
      'Post-incident analysis and prevention planning',
      'Direct communication channel (phone, Slack, or WhatsApp)',
    ],
    faq: [
      { question: 'What is your emergency response time?', answer: 'Essential: 4 hours during business hours. Professional: 2 hours, extended hours. Enterprise: 1 hour, 24/7 including weekends and holidays.' },
      { question: 'What counts as an emergency?', answer: 'Site down, security breach, payment processing failure, or any issue preventing your business from operating normally. Non-critical bugs follow standard response times.' },
    ],
  },
  {
    slug: 'optimisation',
    name: 'Performance Optimisation',
    tagline: 'Faster every quarter',
    description: 'Ongoing performance audits, Core Web Vitals improvement, database optimisation, caching strategies, and image compression. Your site gets faster over time, not slower.',
    includes: [
      'Quarterly Core Web Vitals audit and improvement',
      'Database query optimisation',
      'Image and asset compression and lazy loading',
      'Cache strategy implementation and tuning',
      'Third-party script audit and optimisation',
      'Page load time benchmarking and tracking',
    ],
    faq: [
      { question: 'How much faster can you make our site?', answer: 'Most sites see a 40\u201360% improvement in load time within the first quarter. We set specific, measurable targets and report against them monthly.' },
      { question: 'Is this included in all packages?', answer: 'Basic monitoring is included in all packages. Dedicated optimisation work (audits, database tuning, caching) is included in Professional and Enterprise packages.' },
    ],
  },
];
