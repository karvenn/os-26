export interface IndustryProject {
  clientName: string;
  type: string;
  headline: string;
  caseStudySlug?: string;
}

export interface Industry {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  challenges: string[];
  recommendation: string;
  relevantServices: string[];
  relevantSolutions: string[];
  projects: IndustryProject[];
  faq: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: 'property',
    name: 'Property & Real Estate',
    tagline: 'Digital experiences that sell developments',
    description:
      'Property developers and real estate firms need websites that showcase developments beautifully, capture qualified leads, and integrate with sales workflows. We build platforms that do all three while loading in under a second.',
    challenges: [
      'Legacy websites that fail to convert marketing spend into qualified leads',
      'Difficulty updating project listings without developer involvement',
      'Poor mobile experience for on-site property seekers',
      'No integration between website enquiries and sales CRM',
    ],
    recommendation:
      'A high-performance NuxtJS website with Strapi CMS for marketing team autonomy, integrated lead capture flowing into your sales pipeline, and virtual tour capabilities. For larger developers, a multi-project platform with individual microsites for each development.',
    relevantServices: ['Custom Design', 'Custom Development', 'Growth & Optimisation'],
    relevantSolutions: ['Custom Website', 'Custom CMS'],
    projects: [
      { clientName: 'Meridian Properties', type: 'Corporate Website', headline: '2.4x increase in qualified leads', caseStudySlug: 'meridian-properties' },
    ],
    faq: [
      { question: 'Can each development have its own microsite?', answer: 'Yes. We build multi-project platforms where each development gets its own branded microsite, managed from a single CMS dashboard. New developments can launch in days, not weeks.' },
      { question: 'Do you integrate with property CRMs?', answer: 'We integrate with major property CRMs and sales systems. Enquiries flow directly from the website into your pipeline with full attribution tracking.' },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    tagline: 'Secure platforms for regulated industries',
    description:
      'Banks, insurance companies, and financial advisories operate under strict regulatory requirements. We build secure, compliant digital platforms that meet PDPA and BNM guidelines while delivering modern user experiences your customers expect.',
    challenges: [
      'Regulatory compliance requirements (PDPA, BNM guidelines) adding complexity',
      'Legacy systems that resist integration with modern web platforms',
      'Security expectations that exceed standard web development practices',
      'Customer portals that frustrate more than they help',
    ],
    recommendation:
      'A Laravel-based customer portal with role-based access control, encrypted data handling, and comprehensive audit logging. Paired with a NuxtJS public-facing site optimised for trust signals and lead generation.',
    relevantServices: ['Discovery & Strategy', 'Custom Development', 'Maintenance & Support'],
    relevantSolutions: ['Custom CRM', 'Custom Website'],
    projects: [
      { clientName: 'Pinnacle Financial', type: 'Customer Portal', headline: '68% reduction in support tickets', caseStudySlug: 'pinnacle-financial' },
      { clientName: 'Capital Partners Advisory', type: 'Corporate Website', headline: 'Investor portal with secure document access' },
    ],
    faq: [
      { question: 'How do you handle PDPA compliance?', answer: 'PDPA compliance is built into our architecture: encrypted data at rest and in transit, consent management, data retention policies, and right-to-erasure workflows. We document compliance measures for your audit requirements.' },
      { question: 'Can you integrate with core banking systems?', answer: 'Yes. We have experience integrating with banking APIs, payment processors, and financial data feeds. All integrations follow security best practices with encrypted connections and comprehensive logging.' },
    ],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    tagline: 'Digitise operations across your supply chain',
    description:
      'Manufacturers and supply chain operators need digital platforms that connect fragmented operations, provide real-time visibility, and replace the spreadsheets and email chains that slow everything down.',
    challenges: [
      'Operations managed through spreadsheets and email across multiple offices',
      'No real-time visibility into inventory, orders, or vendor status',
      'Manual processes that create delays and errors in procurement',
      'Disconnected systems that prevent data-driven decision making',
    ],
    recommendation:
      'A centralised Laravel web application with real-time dashboards, automated procurement workflows, and vendor portal integration. Connected to your existing ERP via custom REST APIs for seamless data synchronisation.',
    relevantServices: ['Discovery & Strategy', 'Custom Development', 'Migration & Deployment'],
    relevantSolutions: ['Custom CRM'],
    projects: [
      { clientName: 'Atlas Manufacturing', type: 'Supply Chain Platform', headline: '3.1x processing efficiency improvement', caseStudySlug: 'atlas-manufacturing' },
      { clientName: 'Nusantara Logistics', type: 'Fleet Management', headline: 'Real-time tracking across 200+ routes' },
    ],
    faq: [
      { question: 'Can you integrate with our existing ERP?', answer: 'Yes. We build custom API integrations with SAP, Oracle, Microsoft Dynamics, and other ERP systems. Data flows bidirectionally so your web platform and ERP stay synchronised in real time.' },
      { question: 'How do you handle multi-location deployments?', answer: 'Our platforms support multi-location architectures with location-specific dashboards, centralised reporting, and role-based access. Each office sees their data while management gets the full picture.' },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Patient-centred digital platforms',
    description:
      'Healthcare providers need secure, accessible digital platforms that improve the patient experience while meeting regulatory requirements. We build patient portals, appointment systems, and information platforms that healthcare teams and patients actually want to use.',
    challenges: [
      'Patient portals that are difficult to navigate, especially for elderly users',
      'Appointment booking that still relies on phone calls during office hours',
      'Sensitive data handling requirements under healthcare regulations',
      'Information websites that fail accessibility standards',
    ],
    recommendation:
      'An accessible, WCAG 2.1 AA compliant patient portal with online appointment booking, secure records access, and automated communications. Built on Laravel with role-based access for patients, clinicians, and administrators.',
    relevantServices: ['Custom Design', 'Custom Development', 'Maintenance & Support'],
    relevantSolutions: ['Custom Booking System', 'Custom Website'],
    projects: [
      { clientName: 'Prima Healthcare Group', type: 'Patient Portal', headline: 'Serving 30,000+ active patients' },
    ],
    faq: [
      { question: 'Do you build WCAG compliant interfaces?', answer: 'Yes. Accessibility is built in from the design phase. We test against WCAG 2.1 AA standards with automated tools and manual screen reader testing, and provide compliance documentation.' },
      { question: 'How do you handle patient data security?', answer: 'All patient data is encrypted, access is role-controlled, and audit logs track every data access. We follow healthcare data handling best practices and can work within your existing security policies.' },
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    tagline: 'Engage students, empower institutions',
    description:
      'Universities, colleges, and training providers need digital platforms that attract prospective students, manage the enrollment journey, and support learning outcomes. We build platforms that serve both the marketing and the operational needs of educational institutions.',
    challenges: [
      'Outdated websites that fail to attract modern prospective students',
      'Fragmented systems for enrollment, learning, and communications',
      'Difficulty managing multi-language content for international audiences',
      'No clear digital journey from discovery to enrollment to graduation',
    ],
    recommendation:
      'A NuxtJS marketing site with programme finder, virtual campus features, and integrated application forms. For institutions needing learning management, a custom LMS with course authoring, progress tracking, and parent or employer portals.',
    relevantServices: ['Custom Design', 'Custom Development', 'Growth & Optimisation'],
    relevantSolutions: ['Custom Website', 'Custom CMS', 'Survey & Reporting Dashboard'],
    projects: [
      { clientName: 'Vista University', type: 'Corporate Website', headline: '45% increase in course registrations' },
      { clientName: 'Bright Learning Academy', type: 'Custom LMS', headline: 'Serving 5,000 students' },
    ],
    faq: [
      { question: 'Can you build a custom LMS?', answer: 'Yes. We build purpose-built learning management systems with course authoring, progress tracking, assessment engines, and communication portals tailored to your curriculum and teaching methodology.' },
      { question: 'Do you support multi-language for international students?', answer: 'Absolutely. We build multi-language sites with proper hreflang implementation, locale-specific content, and CMS workflows that make managing translations straightforward for your team.' },
    ],
  },
  {
    slug: 'government',
    name: 'Government & Public Sector',
    tagline: 'Accessible, compliant public platforms',
    description:
      'Government agencies and public sector organisations need websites and applications that serve all citizens, meet accessibility requirements, and maintain the highest standards of security and reliability.',
    challenges: [
      'Accessibility compliance requirements (WCAG) for diverse populations',
      'Multi-language support for national and regional languages',
      'High availability requirements for public-facing services',
      'Complex document management and public information distribution',
    ],
    recommendation:
      'A WCAG 2.1 AA compliant NuxtJS platform with Strapi CMS for structured document management, multi-language support, and integration with government authentication systems. Hosted on infrastructure meeting government security standards.',
    relevantServices: ['Discovery & Strategy', 'Custom Development', 'Maintenance & Support'],
    relevantSolutions: ['Custom Website', 'Custom CMS'],
    projects: [
      { clientName: 'Federal Regulatory Agency', type: 'Content Platform', headline: 'WCAG 2.1 AA compliant, 3 languages' },
    ],
    faq: [
      { question: 'Do you have experience with government projects?', answer: 'Yes. We have delivered projects for Malaysian government agencies including public information portals and regulatory platforms. We understand procurement processes and compliance requirements.' },
      { question: 'Can you host on government-approved infrastructure?', answer: 'Yes. We can deploy on government-approved cloud infrastructure or on-premises data centres depending on your security classification and hosting requirements.' },
    ],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & E-Commerce',
    tagline: 'Sell more with better digital experiences',
    description:
      'Retailers and e-commerce businesses need fast, conversion-optimised shopping experiences that integrate with inventory, fulfilment, and marketing systems. We build custom platforms for businesses that have outgrown Shopify and WooCommerce.',
    challenges: [
      'Off-the-shelf platforms limiting checkout customisation and branding',
      'Poor performance during sale events and traffic spikes',
      'Disconnected inventory across online and offline channels',
      'High cart abandonment from friction in the checkout process',
    ],
    recommendation:
      'A headless NuxtJS storefront with Laravel backend for complex business logic, integrated with your preferred payment gateways (iPay88, Billplz, Stripe). For marketplaces, multi-vendor architecture with individual seller dashboards.',
    relevantServices: ['Custom Design', 'Custom Development', 'Growth & Optimisation'],
    relevantSolutions: ['Custom eCommerce'],
    projects: [
      { clientName: 'Horizon Digital', type: 'E-Commerce Platform', headline: '0.8s page load, 4.2% conversion rate', caseStudySlug: 'horizon-digital' },
      { clientName: 'Artisan Collective', type: 'Multi-Vendor Marketplace', headline: '320+ vendors in first quarter' },
    ],
    faq: [
      { question: 'Why not use Shopify?', answer: 'Shopify works for standard stores. Custom e-commerce is for businesses with unique checkout flows, complex pricing rules, multi-vendor requirements, or integrations that standard platforms cannot accommodate.' },
      { question: 'Which payment gateways do you support?', answer: 'All major Malaysian gateways including iPay88, Billplz, FPX, Stripe, and PayPal. We can integrate additional gateways through our flexible payment module.' },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality & Tourism',
    tagline: 'Direct bookings, better guest experiences',
    description:
      'Hotels, resorts, and tourism operators need digital platforms that drive direct bookings, reduce OTA dependency, and create memorable guest experiences from the first website visit to post-stay follow-up.',
    challenges: [
      'Over-reliance on OTAs (Booking.com, Agoda) eating into margins',
      'Booking engines that do not match the property brand experience',
      'Difficulty managing rates, availability, and packages across channels',
      'No digital guest communication before, during, and after stays',
    ],
    recommendation:
      'A stunning NuxtJS website with integrated direct booking engine, dynamic pricing, and channel manager integration. For larger groups, multi-property management with centralised reporting and property-specific microsites.',
    relevantServices: ['Custom Design', 'Custom Development', 'Growth & Optimisation'],
    relevantSolutions: ['Custom Booking System', 'Custom Website'],
    projects: [
      { clientName: 'Greenfield Resorts', type: 'Booking Platform', headline: '24/7 direct bookings, 18% fewer OTA dependency' },
    ],
    faq: [
      { question: 'Can you integrate with channel managers?', answer: 'Yes. We integrate with major channel managers (SiteMinder, Cloudbeds, etc.) so rates and availability sync automatically between your website and OTA channels.' },
      { question: 'Do you build multi-property platforms?', answer: 'Yes. We build hotel group platforms where each property has its own branded microsite, but bookings, rates, and reporting are managed from a single centralised dashboard.' },
    ],
  },
];
