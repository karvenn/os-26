export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery & Strategy',
    description:
      'We start by understanding your business, audience, and goals. Through stakeholder interviews, competitive analysis, and technical audits, we define a clear roadmap that aligns your digital investment with measurable outcomes.',
  },
  {
    number: 2,
    title: 'Architecture & Design',
    description:
      'Our designers craft wireframes and high-fidelity prototypes that balance visual elegance with conversion science. Every layout decision is informed by user research and business objectives.',
  },
  {
    number: 3,
    title: 'Development & Integration',
    description:
      'Clean, maintainable code built on proven frameworks. We develop in iterative sprints with regular demos, ensuring your project stays on track and aligned with your vision at every stage.',
  },
  {
    number: 4,
    title: 'Testing & Quality Assurance',
    description:
      "Rigorous cross-browser testing, performance optimisation, security audits, and user acceptance testing. We don't launch until every detail meets our standards — and yours.",
  },
  {
    number: 5,
    title: 'Launch & Ongoing Support',
    description:
      'A smooth, zero-downtime deployment followed by 30 days of dedicated support. We monitor performance, address any issues, and ensure your team is confident managing the platform independently.',
  },
];
