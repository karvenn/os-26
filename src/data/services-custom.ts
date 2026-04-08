export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  techNote: string;
}

export const services: ServiceItem[] = [
  {
    icon: 'performance',
    title: 'High-Performance Websites',
    description:
      'Lightning-fast corporate websites built for search engines and designed for conversions. Every millisecond counts — our sites consistently score 95+ on Core Web Vitals.',
    techNote: 'Powered by NuxtJS',
  },
  {
    icon: 'application',
    title: 'Scalable Web Applications',
    description:
      'Robust applications that handle thousands of concurrent users — from customer portals and booking systems to internal dashboards and workflow tools.',
    techNote: 'Built on Laravel',
  },
  {
    icon: 'cms',
    title: 'Flexible Content Management',
    description:
      'Modern headless CMS solutions that give your marketing team full control. Update content, manage media, and publish changes — no developer required.',
    techNote: 'Driven by Strapi',
  },
  {
    icon: 'integration',
    title: 'Seamless Integrations',
    description:
      'Connect your digital ecosystem. We integrate with CRMs, ERPs, payment gateways, and third-party services through secure, well-documented APIs.',
    techNote: 'RESTful & GraphQL',
  },
];
