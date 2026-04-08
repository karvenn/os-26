export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'How long does a custom website take to build?',
    answer:
      'Most custom websites take 8\u201312 weeks from kickoff to launch, including discovery, design, development, and testing phases. Complex web applications with integrations and custom workflows typically require 4\u20136 months. We provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'What is the typical investment for a custom web project?',
    answer:
      'Custom websites typically start from MYR 30,000, while web applications range from MYR 80,000 upward depending on complexity. We scope every project individually \u2014 you will receive a transparent, detailed proposal after our discovery phase with no hidden costs.',
  },
  {
    question: 'Why choose a custom solution over a template or WordPress?',
    answer:
      'Custom solutions deliver measurably better performance, security, and scalability. Templates impose design and functionality limitations that grow costly over time. For businesses where the website is a critical revenue channel, custom development typically returns 3\u20135x the investment within 12 months.',
  },
  {
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Yes. Every project includes 30 days of complimentary post-launch support. Beyond that, we offer monthly maintenance packages covering security updates, performance monitoring, content changes, and priority support \u2014 so your digital presence is always at its best.',
  },
  {
    question: 'How do you ensure website security?',
    answer:
      'Security is built into every layer: secure coding practices, regular dependency audits, SSL encryption, input validation, role-based access control, and automated backups. We follow OWASP guidelines and conduct penetration testing before launch for all client projects.',
  },
  {
    question: 'What is a headless CMS and do we need one?',
    answer:
      "A headless CMS separates content management from the website's front end, giving your team an intuitive editing interface while developers maintain full control over performance and design. It is ideal for businesses that update content frequently or need to publish across multiple channels.",
  },
  {
    question: 'Can you migrate our existing website to a new platform?',
    answer:
      'Absolutely. We have migrated hundreds of websites from legacy platforms, WordPress, and custom systems. Our migration process preserves your SEO rankings, redirects all existing URLs, and transfers content with zero downtime during the switchover.',
  },
  {
    question: 'How do you handle project communication and updates?',
    answer:
      'You will have a dedicated project manager and access to our project dashboard for real-time progress tracking. We conduct weekly status calls, share design previews for approval at key milestones, and maintain a shared channel for quick questions throughout the engagement.',
  },
];
