export interface Outcome {
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
}

export interface CustomizationStep {
  title: string;
  description: string;
}

export interface SolutionFaq {
  question: string;
  answer: string;
}

export interface Solution {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  outcomes: Outcome[];
  capabilities: Capability[];
  customizationSteps: CustomizationStep[];
  faq: SolutionFaq[];
  technologies: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'website',
    name: 'Custom Website',
    tagline: 'Corporate credibility, engineered for growth',
    description:
      'A fully custom corporate website designed around your brand and built for speed, SEO, and conversion. Every element \u2014 from the design system to the content architecture \u2014 is crafted to support your business goals.',
    outcomes: [
      {
        title: 'Premium brand experience',
        description: 'Every interaction reflects your brand. No template constraints, no design compromises, no off-the-shelf compromises.',
      },
      {
        title: 'Exceptional performance',
        description: 'Sub-second load times, 95+ Lighthouse scores, and Core Web Vitals that pass consistently on every page.',
      },
      {
        title: 'SEO that compounds',
        description: 'Technical SEO foundations, schema markup, and fast performance that improves search rankings month over month.',
      },
      {
        title: 'Content team autonomy',
        description: 'Modern headless CMS integration lets your marketing team update the site without waiting for developers.',
      },
    ],
    capabilities: [
      { title: 'Custom Design System', description: 'A complete design language built around your brand \u2014 colours, typography, components, and interaction patterns.' },
      { title: 'Headless CMS Integration', description: 'Intuitive content management via Strapi or your preferred headless CMS, optimised for your editorial workflow.' },
      { title: 'Performance Optimisation', description: 'Static site generation, image optimisation, code splitting, and edge caching for instant page loads.' },
      { title: 'Technical SEO', description: 'Schema markup, sitemap generation, meta tag management, and Core Web Vitals optimisation built in.' },
      { title: 'Analytics & Tracking', description: 'Integration with Google Analytics, Tag Manager, and any custom analytics platforms your team uses.' },
      { title: 'Multi-language Support', description: 'Optional multi-language capability with hreflang setup for international audiences.' },
    ],
    customizationSteps: [
      { title: 'Brand & Strategy Discovery', description: 'We understand your brand, audience, and business goals to inform every design and technical decision.' },
      { title: 'Design & Development', description: 'We create a custom design system and build your site using NuxtJS + Strapi for performance and flexibility.' },
      { title: 'Launch & Optimisation', description: 'We deploy with zero downtime, train your team, and continuously optimise based on real user data.' },
    ],
    faq: [
      { question: 'How long does a custom website take to build?', answer: 'Most corporate websites take 8\u201312 weeks from kickoff to launch, including discovery, design, development, and testing. Complex sites with extensive content or multi-language support may take longer.' },
      { question: 'Can we keep our existing branding?', answer: 'Absolutely. We can work with your existing brand guidelines and visual identity, or we can refresh them as part of the project if needed.' },
      { question: 'Will our team be able to update the content?', answer: 'Yes. We integrate a headless CMS (typically Strapi) that gives your marketing team full control over content, media, and publishing workflows.' },
      { question: 'Is the site mobile-optimised?', answer: 'Every site we build is mobile-first. We design for mobile devices first, then progressively enhance for tablet and desktop.' },
    ],
    technologies: ['NuxtJS', 'Strapi', 'Tailwind CSS', 'Vercel'],
  },
  {
    slug: 'cms',
    name: 'Custom CMS',
    tagline: 'Content management on your terms',
    description:
      'A bespoke content management system built around how your team actually works. When off-the-shelf CMS platforms do not fit your content model, editorial workflow, or publishing requirements, we build one that does.',
    outcomes: [
      {
        title: 'Content model that fits your business',
        description: 'Custom content types, fields, and relationships that match exactly how your team thinks about content.',
      },
      {
        title: 'Editorial workflow that works',
        description: 'Role-based access, approval workflows, scheduled publishing, and draft states designed around your team structure.',
      },
      {
        title: 'Multi-channel publishing',
        description: 'One content source feeds your website, mobile app, partner portals, and any other channels you need.',
      },
      {
        title: 'No vendor lock-in',
        description: 'You own the platform and data. No per-seat licensing, no feature paywalls, no hostage content.',
      },
    ],
    capabilities: [
      { title: 'Custom Content Types', description: 'Model your content exactly as your business needs \u2014 products, articles, resources, team members, and anything else.' },
      { title: 'Role-Based Access', description: 'Editors, reviewers, publishers, and administrators with fine-grained permissions for each content type.' },
      { title: 'Media Management', description: 'Organised media library with automatic image optimisation, CDN delivery, and metadata management.' },
      { title: 'API-First Architecture', description: 'REST and GraphQL APIs out of the box, ready to power websites, apps, and integrations.' },
      { title: 'Editorial Workflows', description: 'Draft, review, approve, and publish workflows that match your team processes.' },
      { title: 'Multi-Language Support', description: 'Native internationalisation with locale-specific content and fallback logic.' },
    ],
    customizationSteps: [
      { title: 'Map Your Content', description: 'We document how your team currently manages content and design the optimal content model for your business.' },
      { title: 'Build & Configure', description: 'We set up Strapi (or a custom CMS) with your content types, workflows, and integrations.' },
      { title: 'Train & Support', description: 'We onboard your team with role-based training and provide ongoing support as your content needs evolve.' },
    ],
    faq: [
      { question: 'Why not use WordPress or another popular CMS?', answer: 'Popular CMS platforms work when your content model fits their assumptions. When it does not, you spend years fighting the platform. A custom CMS costs more upfront but delivers exactly what your team needs.' },
      { question: 'Can we migrate content from our existing CMS?', answer: 'Yes. We migrate content from WordPress, Drupal, Contentful, or any other platform, preserving relationships, media, and metadata.' },
      { question: 'How is this different from building a website?', answer: 'A custom CMS focuses specifically on the content management layer, which can power multiple websites, apps, and channels. A website project focuses on the public-facing experience.' },
      { question: 'Do you use Strapi exclusively?', answer: 'Strapi is our default choice because of its flexibility and open-source model. For specific requirements, we also work with Sanity, Contentful, or fully custom solutions.' },
    ],
    technologies: ['Strapi', 'Node.js', 'PostgreSQL', 'AWS S3'],
  },
  {
    slug: 'contest-management',
    name: 'Contest Management System',
    tagline: 'Run campaigns that engage and convert',
    description:
      'A proven contest and campaign platform built for marketing teams who need to launch, manage, and measure promotional campaigns at scale \u2014 from lucky draws and photo contests to referral programmes and loyalty rewards.',
    outcomes: [
      {
        title: 'Launch campaigns 5x faster',
        description:
          'Pre-built contest mechanics and templates mean your team can go from concept to live campaign in days, not weeks.',
      },
      {
        title: 'Eliminate manual processing',
        description:
          'Automated entry validation, winner selection, and prize distribution replace hours of spreadsheet work.',
      },
      {
        title: 'Real-time campaign insights',
        description:
          'Track participation, engagement, and conversion metrics as they happen \u2014 not after the campaign ends.',
      },
      {
        title: 'Fraud-proof by design',
        description:
          'Built-in anti-fraud mechanisms including duplicate detection, IP tracking, and verification workflows protect campaign integrity.',
      },
    ],
    capabilities: [
      { title: 'Multi-Channel Entry', description: 'Accept entries via web, mobile, SMS, QR codes, and social media \u2014 all managed from one dashboard.' },
      { title: 'Automated Winner Selection', description: 'Random draws, leaderboard-based, or criteria-driven selection with full audit trails for compliance.' },
      { title: 'Prize Management', description: 'Track inventory, automate prize distribution, and manage winner notifications across campaigns.' },
      { title: 'Campaign Analytics', description: 'Real-time dashboards showing entries, conversion rates, demographics, and channel performance.' },
      { title: 'Content Moderation', description: 'Review and approve user-generated content with configurable moderation workflows and bulk actions.' },
      { title: 'Regulatory Compliance', description: 'Built-in T&C management, age verification, and data handling compliant with Malaysian PDPA.' },
    ],
    customizationSteps: [
      { title: 'Assess Your Campaign Needs', description: 'We map your campaign requirements, brand guidelines, and integration needs to our platform capabilities.' },
      { title: 'Customize & Brand', description: 'We tailor the UI, contest mechanics, and workflows to your brand \u2014 plus integrate with your CRM, social channels, and analytics.' },
      { title: 'Launch & Optimise', description: 'We deploy, train your team, and provide ongoing support. Post-campaign, we help analyse results and optimise for next time.' },
    ],
    faq: [
      { question: 'How quickly can we launch a contest?', answer: 'Most campaigns go live within 2\u20133 weeks. Simple contests using existing mechanics can launch in as little as 5 business days after your brand assets and rules are finalised.' },
      { question: 'Can it handle high traffic during peak campaigns?', answer: 'Yes. Our platform auto-scales on cloud infrastructure. We have supported campaigns with over 100,000 entries per day without performance degradation.' },
      { question: 'Does it integrate with our existing marketing tools?', answer: 'Out-of-the-box integrations with major CRMs, email platforms, and social channels. Custom API integrations available for any other system.' },
      { question: 'How is participant data handled?', answer: 'All data is encrypted at rest and in transit, stored on Malaysian or Singapore-based servers, and handled in full compliance with PDPA requirements.' },
    ],
    technologies: ['NuxtJS', 'Laravel', 'Redis', 'AWS'],
  },
  {
    slug: 'ecommerce',
    name: 'Custom eCommerce',
    tagline: 'Sell more with a store built around your business',
    description:
      'A tailored eCommerce platform that goes beyond off-the-shelf solutions. Built for businesses that need unique checkout flows, complex product configurations, or integrations that standard platforms simply cannot handle.',
    outcomes: [
      {
        title: 'Higher conversion rates',
        description:
          'Optimised checkout flows and personalised product experiences designed to reduce cart abandonment and increase average order value.',
      },
      {
        title: 'Scale without limits',
        description:
          'Handle traffic spikes during sales events and seasonal peaks without the performance bottlenecks of shared platforms.',
      },
      {
        title: 'Full brand control',
        description:
          'Every pixel of the shopping experience reflects your brand \u2014 no template constraints, no marketplace distractions.',
      },
      {
        title: 'Seamless back-office integration',
        description:
          'Connect your store to ERP, warehouse management, and accounting systems for automated inventory and order sync.',
      },
    ],
    capabilities: [
      { title: 'Flexible Product Catalog', description: 'Support for simple, variable, bundled, and configurable products with unlimited custom attributes.' },
      { title: 'Optimised Checkout', description: 'One-page, multi-step, or guest checkout \u2014 A/B tested flows with local payment gateway integrations.' },
      { title: 'Multi-Currency & Language', description: 'Serve customers across Southeast Asia with localised pricing, language, and payment methods.' },
      { title: 'Inventory Management', description: 'Real-time stock tracking across warehouses and channels with automated low-stock alerts and reorder triggers.' },
      { title: 'Customer Accounts', description: 'Self-service portals with order history, wishlists, saved addresses, and loyalty programme integration.' },
      { title: 'Analytics & Reporting', description: 'Sales dashboards, funnel analytics, and customer behaviour insights to drive data-informed decisions.' },
    ],
    customizationSteps: [
      { title: 'Commerce Strategy', description: 'We analyse your product catalog, customer journey, and business rules to design the optimal eCommerce architecture.' },
      { title: 'Build & Integrate', description: 'We develop your store, integrate payment gateways and back-office systems, and optimise for performance and SEO.' },
      { title: 'Launch & Grow', description: 'We launch with zero downtime, train your team, and provide ongoing optimisation based on real sales data.' },
    ],
    faq: [
      { question: 'Why not use Shopify or WooCommerce?', answer: 'Off-the-shelf platforms work for standard stores. Custom eCommerce is for businesses with unique checkout flows, complex pricing rules, or integration requirements that standard platforms cannot accommodate without costly workarounds.' },
      { question: 'Which payment gateways do you support?', answer: 'We integrate with all major Malaysian and Southeast Asian gateways including iPay88, Billplz, Stripe, PayPal, and FPX. Additional gateways can be added via our flexible payment module.' },
      { question: 'Can you migrate from our existing store?', answer: 'Yes. We migrate product data, customer accounts, order history, and SEO rankings with full URL redirects. Most migrations complete with zero downtime.' },
      { question: 'How do you handle site performance during sales?', answer: 'Our architecture includes CDN distribution, database optimisation, and auto-scaling infrastructure. We load-test before every major sale event to ensure reliable performance.' },
    ],
    technologies: ['NuxtJS', 'Laravel', 'Strapi', 'Stripe'],
  },
  {
    slug: 'crm',
    name: 'Custom CRM',
    tagline: 'A CRM that works the way your team does',
    description:
      'Purpose-built customer relationship management that fits your sales process, not the other way around. For teams who have outgrown generic CRMs and need workflows, automations, and insights tailored to their business.',
    outcomes: [
      {
        title: 'Accelerate your sales cycle',
        description:
          'Custom pipeline stages, automated follow-ups, and intelligent lead scoring that match your actual sales process.',
      },
      {
        title: 'Eliminate data silos',
        description:
          'A single source of truth connecting sales, marketing, and support data \u2014 accessible by every team that needs it.',
      },
      {
        title: 'Automate repetitive tasks',
        description:
          'Workflow automations for lead assignment, email sequences, task creation, and status updates free your team to sell.',
      },
      {
        title: 'Decisions backed by data',
        description:
          'Custom dashboards and reports that surface the metrics your leadership team actually uses to make decisions.',
      },
    ],
    capabilities: [
      { title: 'Custom Pipeline Management', description: 'Configurable deal stages, custom fields, and automated stage transitions that mirror your real sales process.' },
      { title: 'Contact & Company Records', description: 'Rich profiles with interaction history, deal associations, documents, and custom relationship mapping.' },
      { title: 'Task & Activity Tracking', description: 'Automated task creation, reminders, and activity logging with calendar integration for your sales team.' },
      { title: 'Email & Communication', description: 'Built-in email tracking, templates, and sequence automation with open/click analytics.' },
      { title: 'Reporting & Dashboards', description: 'Drag-and-drop dashboard builder with pipeline forecasting, team performance, and conversion analytics.' },
      { title: 'API & Integrations', description: 'Connect with your email, calendar, accounting, and marketing tools via pre-built connectors or custom APIs.' },
    ],
    customizationSteps: [
      { title: 'Map Your Sales Process', description: 'We document your current workflows, data requirements, and pain points to design a CRM that accelerates \u2014 not disrupts \u2014 your team.' },
      { title: 'Build & Migrate', description: 'We develop your custom CRM, migrate existing data from spreadsheets or other platforms, and configure automations.' },
      { title: 'Train & Support', description: 'We onboard your team with role-based training, provide documentation, and offer ongoing support as your process evolves.' },
    ],
    faq: [
      { question: 'Why not use Salesforce or HubSpot?', answer: 'Enterprise CRMs are powerful but come with per-seat licensing costs that scale fast, plus complexity your team may never need. A custom CRM costs a fixed amount, is tailored to your process, and you own it outright.' },
      { question: 'Can you migrate data from our current CRM?', answer: 'Yes. We handle full data migration from any CRM platform, including contact records, deal history, notes, and attachments. We map fields carefully to preserve data integrity.' },
      { question: 'How does per-user pricing work?', answer: 'There is no per-user pricing. You pay for development and hosting. Add as many users as your team needs \u2014 no additional license fees.' },
      { question: 'Is the CRM accessible on mobile?', answer: 'Absolutely. The interface is fully responsive and works on any device. We can also develop a dedicated mobile app if your team needs offline access or push notifications.' },
    ],
    technologies: ['Laravel', 'NuxtJS', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'survey-dashboard',
    name: 'Survey & Reporting Dashboard',
    tagline: 'Collect data, visualise insights, decide faster',
    description:
      'A custom survey and analytics platform for organisations that need more than Google Forms can offer \u2014 branded surveys, conditional logic, real-time dashboards, and automated reporting that turns raw data into actionable insights.',
    outcomes: [
      {
        title: 'Professional branded surveys',
        description:
          'Fully customised survey experiences that match your brand and build trust with respondents.',
      },
      {
        title: 'Real-time insight dashboards',
        description:
          'Live visualisations that update as responses come in \u2014 no waiting for manual report generation.',
      },
      {
        title: 'Higher completion rates',
        description:
          'Smart conditional logic, progress indicators, and mobile-optimised forms that reduce survey fatigue.',
      },
      {
        title: 'Automated reporting',
        description:
          'Scheduled reports delivered to stakeholders automatically, with the exact charts and metrics they need.',
      },
    ],
    capabilities: [
      { title: 'Drag-and-Drop Form Builder', description: 'Create surveys with 15+ question types, conditional branching, piping, and custom validation rules.' },
      { title: 'Real-Time Dashboards', description: 'Live charts, graphs, and KPI widgets that update as responses arrive. Filterable by date, segment, or custom dimensions.' },
      { title: 'Automated Reports', description: 'Schedule PDF or Excel exports with custom templates. Deliver to stakeholders via email on your preferred cadence.' },
      { title: 'Multi-Language Support', description: 'Create surveys in multiple languages with automatic routing based on respondent preference or browser locale.' },
      { title: 'Data Security', description: 'Role-based access, data encryption, and PDPA-compliant storage with full audit logging.' },
      { title: 'Integration & Export', description: 'Connect to your CRM, BI tools, or data warehouse via API. Export raw data in CSV, JSON, or direct database sync.' },
    ],
    customizationSteps: [
      { title: 'Define Your Data Needs', description: 'We work with your team to understand what data you need, how it should be collected, and who needs to see the results.' },
      { title: 'Build & Brand', description: 'We develop your survey platform and dashboards, applying your brand identity and configuring the analytics your stakeholders need.' },
      { title: 'Deploy & Iterate', description: 'We launch, train your team, and refine dashboards and reports based on real usage patterns and feedback.' },
    ],
    faq: [
      { question: 'How is this different from SurveyMonkey or Typeform?', answer: 'SaaS survey tools charge per response and limit customisation. Our platform is fully branded, has no per-response fees, includes custom dashboards, and integrates directly with your internal systems.' },
      { question: 'Can we embed surveys on our website?', answer: 'Yes. Surveys can be embedded via iframe, JavaScript widget, or served as standalone pages on your own domain with full SSL support.' },
      { question: 'What types of visualisations are available?', answer: 'Bar charts, line charts, pie charts, heatmaps, word clouds, NPS gauges, cross-tabulations, and custom KPI cards. We build whatever visualisations best serve your data.' },
      { question: 'Can it handle large-scale data collection?', answer: 'Our platform is built for scale. We have supported surveys with 50,000+ responses and dashboards displaying millions of data points without performance issues.' },
    ],
    technologies: ['NuxtJS', 'Laravel', 'PostgreSQL', 'Chart.js'],
  },
  {
    slug: 'booking-system',
    name: 'Custom Booking System',
    tagline: 'Fill your calendar, not your inbox',
    description:
      'A tailored booking and appointment management platform for service businesses that need more than a basic calendar \u2014 multi-location support, staff management, payment integration, and automated communications built around your operations.',
    outcomes: [
      {
        title: 'Bookings around the clock',
        description:
          '24/7 online booking means clients schedule when it suits them, not just during your office hours.',
      },
      {
        title: 'Fewer no-shows',
        description:
          'Automated email and SMS reminders reduce no-show rates by up to 40%, protecting your revenue.',
      },
      {
        title: 'Eliminate double-bookings',
        description:
          'Real-time availability sync across staff, locations, and channels prevents scheduling conflicts.',
      },
      {
        title: 'Reduce admin overhead',
        description:
          'Automated confirmations, rescheduling, and payment collection free your front desk for higher-value work.',
      },
    ],
    capabilities: [
      { title: 'Smart Calendar', description: 'Interactive calendar with drag-and-drop scheduling, recurring appointments, buffer times, and multi-timezone support.' },
      { title: 'Staff & Resource Management', description: 'Assign bookings by skill, availability, and location. Manage schedules, time off, and utilisation rates.' },
      { title: 'Online Payments', description: 'Collect deposits or full payments at booking with local payment gateway integration. Automated refund handling.' },
      { title: 'Automated Communications', description: 'Confirmation emails, SMS reminders, follow-up surveys, and rescheduling links \u2014 all triggered automatically.' },
      { title: 'Multi-Location Support', description: 'Manage bookings across multiple branches or venues with location-specific availability and pricing.' },
      { title: 'Customer Portal', description: 'Self-service portal where clients view, reschedule, or cancel appointments and access their booking history.' },
    ],
    customizationSteps: [
      { title: 'Analyse Your Operations', description: 'We document your service types, availability rules, staff structure, and customer journey to design the right booking flow.' },
      { title: 'Build & Integrate', description: 'We develop your booking system, connect it to your website, payment gateway, and communication channels.' },
      { title: 'Go Live & Optimise', description: 'We launch, migrate existing appointments, train your team, and continuously optimise based on booking patterns and feedback.' },
    ],
    faq: [
      { question: 'Can it sync with Google Calendar or Outlook?', answer: 'Yes. Two-way sync with Google Calendar, Outlook, and Apple Calendar ensures your team sees all appointments in their preferred tool.' },
      { question: 'Do customers need to create an account?', answer: 'No. Customers can book as guests with just their name, email, and phone number. Optional account creation is available for returning customers who want to manage their bookings.' },
      { question: 'Can we set different pricing for different times?', answer: 'Absolutely. Configure peak and off-peak pricing, early-bird discounts, member rates, and promotional pricing with date-range controls.' },
      { question: 'Is it suitable for high-volume businesses?', answer: 'Yes. Our system handles hundreds of daily bookings across multiple locations and staff members without performance issues.' },
    ],
    technologies: ['NuxtJS', 'Laravel', 'Redis', 'Twilio'],
  },
  {
    slug: 'kiosk-sales-kit',
    name: 'Kiosk Sales Kit',
    tagline: 'Close deals on the showroom floor',
    description:
      'A digital sales presentation platform designed for showrooms, exhibitions, and retail environments. Give your sales team an interactive, always-updated tool that showcases products, captures leads, and works reliably even without internet.',
    outcomes: [
      {
        title: 'Consistent brand presentations',
        description:
          'Every sales rep delivers the same polished, on-brand presentation \u2014 no more outdated brochures or improvised pitches.',
      },
      {
        title: 'Capture leads instantly',
        description:
          'Built-in lead capture forms sync to your CRM the moment connectivity is available. No lost business cards.',
      },
      {
        title: 'Works offline',
        description:
          'Full functionality without internet. Product catalogs, presentations, and lead forms work reliably at any venue.',
      },
      {
        title: 'Update content centrally',
        description:
          'Push new products, pricing, and materials to all kiosks simultaneously from a central content management system.',
      },
    ],
    capabilities: [
      { title: 'Interactive Product Catalog', description: 'Touch-friendly product browsing with filters, comparisons, 360\u00b0 views, and spec sheets.' },
      { title: 'Presentation Mode', description: 'Guided sales presentations with animations, video, and interactive configurators for complex products.' },
      { title: 'Lead Capture', description: 'On-screen forms that capture visitor details, interests, and follow-up preferences with automatic CRM sync.' },
      { title: 'Offline-First Architecture', description: 'All content cached locally. Leads queue until connectivity returns. Zero dependency on venue Wi-Fi.' },
      { title: 'Central Content Management', description: 'Update products, media, and pricing from one dashboard. Changes push to all kiosks on next sync.' },
      { title: 'Analytics & Insights', description: 'Track which products get the most attention, how long visitors engage, and which reps generate the most leads.' },
    ],
    customizationSteps: [
      { title: 'Design the Experience', description: 'We work with your sales and marketing teams to design a kiosk experience that matches your brand and sales methodology.' },
      { title: 'Build & Load Content', description: 'We develop the application, load your product catalog, and configure lead capture workflows and CRM integration.' },
      { title: 'Deploy & Support', description: 'We install on your hardware, train your sales team, and provide remote support and content management assistance.' },
    ],
    faq: [
      { question: 'What hardware does the kiosk run on?', answer: 'Our application runs on any modern tablet (iPad or Android), touchscreen display, or standard laptop. We can recommend hardware or work with what you already have.' },
      { question: 'How does offline mode work?', answer: 'The entire product catalog and presentation content is cached locally on the device. Lead data is stored securely and syncs automatically when the device reconnects to the internet.' },
      { question: 'Can we use it at trade shows and events?', answer: 'That is one of the most popular use cases. The offline-first design means you are never dependent on unreliable event venue Wi-Fi.' },
      { question: 'How do we update product information?', answer: 'Through a simple web-based content management system. Upload new products, update pricing, add media \u2014 changes propagate to all devices on next sync.' },
    ],
    technologies: ['NuxtJS', 'Laravel', 'IndexedDB', 'PWA'],
  },
];
