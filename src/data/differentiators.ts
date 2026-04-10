export interface Differentiator {
  number: string;
  title: string;
  description: string;
  proof: string;
}

export const differentiators: Differentiator[] = [
  {
    number: '01',
    title: 'You Own Everything',
    description: 'No vendor lock-in, no recurring license fees, no hostage content. You own the code, the data, the design files, and the infrastructure. We set it up so you can take it elsewhere if you ever need to.',
    proof: 'Every client receives complete source code, documentation, and deployment access on day one.',
  },
  {
    number: '02',
    title: '19 Years, 600+ Projects',
    description: 'We have been building custom web solutions since 2007. We have seen every edge case, every integration challenge, and every project type you are considering. Experience is the difference between promises and predictable delivery.',
    proof: '600+ completed projects across corporate, financial services, retail, manufacturing, and government.',
  },
  {
    number: '03',
    title: 'Transparent by Default',
    description: 'Weekly progress demos. Shared project dashboards. Honest timelines. Written proposals before work begins. You will never wonder where your project stands or what you are paying for.',
    proof: 'Every project uses a client-facing dashboard with real-time progress, documents, and communications.',
  },
  {
    number: '04',
    title: 'We Build Outcomes, Not Outputs',
    description: 'We measure success by business results, not deliverables. Every design decision, every line of code, every feature traces back to a measurable goal. If it does not contribute to your outcomes, we question whether it belongs in scope.',
    proof: 'Average client ROI of 3.2x within 12 months of launch across recent corporate projects.',
  },
  {
    number: '05',
    title: 'Local Expertise, Global Standards',
    description: 'Based in Malaysia, we understand Southeast Asian business culture, local payment gateways, PDPA compliance, and multi-language requirements. But our standards and practices match global agencies serving Fortune 500 clients.',
    proof: 'Clients span Malaysia, Singapore, Thailand, Indonesia, Vietnam, and beyond.',
  },
  {
    number: '06',
    title: 'Post-Launch Partnership',
    description: 'The launch is not the end \u2014 it is the beginning of the relationship. We stay involved with monitoring, optimisation, and strategic guidance long after the site goes live. Most of our clients have been with us for 5+ years.',
    proof: 'Over 70% of our clients engage us for multiple projects or ongoing maintenance.',
  },
];

export interface Comparison {
  row: string;
  orangesoft: string;
  template: string;
  bigAgency: string;
  freelancer: string;
}

export const comparisons: Comparison[] = [
  {
    row: 'Code ownership',
    orangesoft: 'You own everything',
    template: 'Template license terms',
    bigAgency: 'Usually shared',
    freelancer: 'Varies widely',
  },
  {
    row: 'Upfront cost',
    orangesoft: 'MYR 30K\u2013250K',
    template: 'MYR 2K\u201310K',
    bigAgency: 'MYR 100K\u20131M+',
    freelancer: 'MYR 5K\u201330K',
  },
  {
    row: '3-year TCO',
    orangesoft: 'Predictable',
    template: 'Hidden maintenance',
    bigAgency: 'High recurring fees',
    freelancer: 'Unpredictable',
  },
  {
    row: 'Performance',
    orangesoft: '95+ Lighthouse',
    template: '50\u201370 typical',
    bigAgency: 'Varies',
    freelancer: 'Varies widely',
  },
  {
    row: 'Timeline reliability',
    orangesoft: 'Contractually committed',
    template: 'Immediate',
    bigAgency: 'Often delayed',
    freelancer: 'Unpredictable',
  },
  {
    row: 'Post-launch support',
    orangesoft: '30 days included + ongoing',
    template: 'None',
    bigAgency: 'Expensive contracts',
    freelancer: 'Ad hoc availability',
  },
  {
    row: 'Communication',
    orangesoft: 'Dedicated PM + dashboard',
    template: 'N/A',
    bigAgency: 'Multiple layers',
    freelancer: 'Direct but limited',
  },
];
