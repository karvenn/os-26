export interface ClientLogo {
  name: string;
  slug: string;
}

export interface TrustStat {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}

export const clientLogos: ClientLogo[] = [
  { name: 'IOI Properties', slug: 'ioi-properties' },
  { name: 'Cagamas', slug: 'cagamas' },
  { name: 'Sapura Energy', slug: 'sapura-energy' },
  { name: 'Perodua', slug: 'perodua' },
  { name: 'MYCC', slug: 'mycc' },
  { name: 'Bank Negara', slug: 'bank-negara' },
];

export const trustStats: TrustStat[] = [
  { value: 600, suffix: '+', label: 'Projects Delivered' },
  { value: 19, suffix: '+', label: 'Years of Experience' },
  { value: 99.9, decimals: 1, suffix: '%', label: 'Uptime Guarantee' },
  { value: 4.9, decimals: 1, suffix: '/5', label: 'Client Satisfaction' },
];
