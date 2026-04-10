export interface ProcessPhase {
  number: number;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  activities: string[];
  deliverables: string[];
  clientRole: string;
}

export const processPhases: ProcessPhase[] = [
  {
    number: 1,
    name: 'Research',
    tagline: 'Understanding before building',
    description:
      'We start every project by deeply understanding your business, audience, and competitive landscape. This is where we challenge assumptions, identify opportunities, and define the real problem we are solving.',
    duration: '1\u20132 weeks',
    activities: [
      'Stakeholder interviews with key decision-makers',
      'Competitor analysis and market positioning review',
      'User research and audience mapping',
      'Technical audit of existing systems and content',
      'Analytics review to identify current pain points',
    ],
    deliverables: [
      'Research findings document',
      'Audience personas and journey maps',
      'Competitive landscape analysis',
      'Technical audit report',
    ],
    clientRole:
      'Availability for 2\u20133 stakeholder interviews, access to existing analytics and systems.',
  },
  {
    number: 2,
    name: 'Planning',
    tagline: 'Defining the right solution',
    description:
      'Armed with research, we translate business goals into a concrete project plan. We define scope, priorities, timeline, and success metrics before any design or code work begins.',
    duration: '1\u20132 weeks',
    activities: [
      'Feature prioritisation and scope definition',
      'Information architecture and sitemap creation',
      'Technical architecture and platform selection',
      'Timeline planning with milestone definition',
      'Success metrics and KPI agreement',
    ],
    deliverables: [
      'Detailed project brief',
      'Sitemap and information architecture',
      'Technical architecture document',
      'Project timeline with milestones',
    ],
    clientRole:
      'Review and approval of scope, feedback on proposed architecture, sign-off on timeline.',
  },
  {
    number: 3,
    name: 'Design',
    tagline: 'Where strategy meets craft',
    description:
      'Design is the bridge between strategy and execution. We create wireframes, visual designs, and interactive prototypes that align with your brand while solving real user problems. Every design decision is informed by research.',
    duration: '3\u20136 weeks',
    activities: [
      'Wireframing for key page types and user flows',
      'Visual design exploration and moodboards',
      'High-fidelity mockups with interactive prototypes',
      'Design system creation for consistency',
      'Stakeholder review rounds with iteration',
    ],
    deliverables: [
      'Wireframes for all key pages',
      'High-fidelity visual designs',
      'Interactive prototype for testing',
      'Design system and component library',
    ],
    clientRole:
      'Participate in review rounds, provide timely feedback, approve final designs before development begins.',
  },
  {
    number: 4,
    name: 'Development',
    tagline: 'Building with precision',
    description:
      'Development is where approved designs become a working, production-ready platform. We build in iterative sprints with regular demos, ensuring quality at every step and keeping you informed of progress.',
    duration: '4\u201312 weeks',
    activities: [
      'Frontend development following the design system',
      'Backend development and API integration',
      'CMS setup and content modelling',
      'Integration with third-party services',
      'Weekly progress demos and sprint reviews',
    ],
    deliverables: [
      'Staging environment for ongoing review',
      'Sprint demo recordings',
      'Code documentation',
      'Fully functional application ready for testing',
    ],
    clientRole:
      'Attend weekly demos, provide feedback on progress, prepare content for launch.',
  },
  {
    number: 5,
    name: 'Deployment',
    tagline: 'Launch with confidence',
    description:
      'Launch day is stressful by default. Our deployment process makes it predictable. We conduct thorough testing, rehearse the launch, and execute a zero-downtime deployment with full rollback capability.',
    duration: '1\u20132 weeks',
    activities: [
      'Cross-browser and device testing',
      'Performance optimisation and load testing',
      'Security audit and vulnerability scanning',
      'User acceptance testing with your team',
      'Production deployment and DNS cutover',
      'Post-launch monitoring and verification',
    ],
    deliverables: [
      'Test reports and QA documentation',
      'Performance audit results',
      'Deployment runbook',
      'Live production website or application',
    ],
    clientRole:
      'User acceptance testing, final sign-off, coordination with internal stakeholders for launch timing.',
  },
  {
    number: 6,
    name: 'Post-Launch Support',
    tagline: 'The first 30 days are on us',
    description:
      'Launch is not the end \u2014 it is the beginning. We include 30 days of dedicated post-launch support to ensure stability, address any issues, and train your team to operate the platform independently.',
    duration: '30 days included',
    activities: [
      'Active monitoring of performance and errors',
      'Bug fixes and minor adjustments',
      'Team training sessions',
      'Documentation handover',
      'Ongoing communication and issue triage',
    ],
    deliverables: [
      'Training materials and video walkthroughs',
      'Complete technical documentation',
      'Operational runbook for your team',
      'Monthly performance report',
    ],
    clientRole:
      'Participate in training, report issues as they arise, provide feedback on operational experience.',
  },
  {
    number: 7,
    name: 'Post-Launch Marketing',
    tagline: 'Turn a launch into momentum',
    description:
      'A great platform only delivers value if people use it. We help you maximise the return on your investment through ongoing optimisation, SEO refinement, and data-driven improvements based on real user behaviour.',
    duration: 'Ongoing (optional)',
    activities: [
      'Analytics review and insights generation',
      'SEO monitoring and iterative improvement',
      'Conversion rate optimisation through A/B testing',
      'Content strategy support',
      'Performance monitoring and tuning',
      'Quarterly strategic reviews',
    ],
    deliverables: [
      'Monthly analytics and performance reports',
      'SEO improvement recommendations',
      'A/B test results and insights',
      'Quarterly strategy sessions',
    ],
    clientRole:
      'Collaborate on priorities, approve experiments, share business context for optimisation decisions.',
  },
];
