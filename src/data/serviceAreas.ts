export interface Testimonial {
  name: string;
  location: string;
  stars: 1 | 2 | 3 | 4 | 5;
  quote: string;
  service: string;
}

export interface City {
  name: string;
  slug: string;
}

export interface County {
  id: string;
  name: string;
  description: string;
  responseTime: string;
  responseLabel: string;
  cities: City[];
  testimonials: Testimonial[];
  accentColor: 'brown' | 'orange' | 'blue-accent' | 'brown-dark';
  image?: string;
}

export interface CoverageStat {
  value: string;
  label: string;
  icon: 'counties' | 'cities' | 'response' | 'satisfaction';
}

export const counties: County[] = [
  {
    id: 'palm-beach',
    name: 'Palm Beach County',
    description:
      'Our home base. We provide the fastest response times across Palm Beach County, from Jupiter in the north to Boca Raton in the south, including Wellington, Delray Beach, Boynton Beach, West Palm Beach, and Lake Worth Beach.',
    responseTime: '30-45 min',
    responseLabel: 'Fastest Response',
    cities: [
      { name: 'Jupiter', slug: 'jupiter' },
      { name: 'Boca Raton', slug: 'boca-raton' },
      { name: 'Wellington', slug: 'wellington' },
      { name: 'Delray Beach', slug: 'delray-beach' },
      { name: 'Boynton Beach', slug: 'boynton-beach' },
      { name: 'West Palm Beach', slug: 'west-palm-beach' },
      { name: 'Lake Worth Beach', slug: 'lake-worth-beach' },
    ],
    testimonials: [
      {
        name: 'Maria G.',
        location: 'Boca Raton, FL',
        stars: 5,
        quote:
          'JS Tile transformed our kitchen floors in Boca Raton. The grout lines look brand new and the team was incredibly professional. Highly recommend their tile and grout cleaning service!',
        service: 'Tile & Grout Cleaning',
      },
      {
        name: 'Robert T.',
        location: 'West Palm Beach, FL',
        stars: 5,
        quote:
          'Had our marble foyer restored in West Palm Beach and the results were stunning. They polished out years of scratches and the shine is like the day it was installed.',
        service: 'Marble Restoration',
      },
    ],
    accentColor: 'brown',
  },
  {
    id: 'broward',
    name: 'Broward County',
    description:
      'Serving the heart of South Florida. Our Broward County coverage includes Fort Lauderdale, Miramar, Hollywood, Coral Springs, and Pembroke Pines with reliable same-day scheduling.',
    responseTime: '45-60 min',
    responseLabel: 'Same-Day Service',
    cities: [
      { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
      { name: 'Miramar', slug: 'miramar' },
      { name: 'Hollywood', slug: 'hollywood' },
      { name: 'Coral Springs', slug: 'coral-springs' },
      { name: 'Pembroke Pines', slug: 'pembroke-pines' },
    ],
    testimonials: [
      {
        name: 'James L.',
        location: 'Fort Lauderdale, FL',
        stars: 5,
        quote:
          'Our shower in Fort Lauderdale had serious grout damage and mold. JS Tile regrouted and sealed everything perfectly. No more leaks and it looks amazing!',
        service: 'Shower Repairs',
      },
      {
        name: 'Sandra K.',
        location: 'Coral Springs, FL',
        stars: 5,
        quote:
          'Called JS Tile for sealing our patio tiles in Coral Springs. They stripped the old coating and applied a new sealant that has held up beautifully through rain season.',
        service: 'Sealing & Stripping',
      },
    ],
    accentColor: 'orange',
  },
  {
    id: 'miami-dade',
    name: 'Miami-Dade County',
    description:
      'Extending our expert services to Miami-Dade County. We serve Miami, Doral, Hialeah, and Miami Beach with the same quality and attention to detail our customers expect.',
    responseTime: '60-90 min',
    responseLabel: 'Scheduled Service',
    cities: [
      { name: 'Miami', slug: 'miami' },
      { name: 'Doral', slug: 'doral' },
      { name: 'Hialeah', slug: 'hialeah' },
      { name: 'Miami Beach', slug: 'miami-beach' },
    ],
    testimonials: [
      {
        name: 'Carlos M.',
        location: 'Miami Beach, FL',
        stars: 5,
        quote:
          'Excellent tile and grout cleaning service in Miami Beach! They deep cleaned our condo lobby floors and the difference is night and day. Very punctual and bilingual team.',
        service: 'Tile & Grout Cleaning',
      },
      {
        name: 'Ana P.',
        location: 'Doral, FL',
        stars: 5,
        quote:
          'JS Tile restored our marble bathroom countertops in Doral. The polishing brought back the natural beauty we thought was gone forever. Professional and affordable!',
        service: 'Marble Restoration',
      },
    ],
    accentColor: 'blue-accent',
  },
  {
    id: 'st-lucie',
    name: 'St. Lucie County',
    description:
      'Expanding north to St. Lucie County. Residents of Port St. Lucie can count on our professional tile and grout services with scheduled appointments and guaranteed satisfaction.',
    responseTime: '60-90 min',
    responseLabel: 'By Appointment',
    cities: [{ name: 'Port St. Lucie', slug: 'port-st-lucie' }],
    testimonials: [
      {
        name: 'David W.',
        location: 'Port St. Lucie, FL',
        stars: 5,
        quote:
          'Worth the wait for JS Tile to come out to Port St. Lucie. They cleaned and sealed our entire first floor and the results speak for themselves. Five stars all the way!',
        service: 'Sealing & Stripping',
      },
    ],
    accentColor: 'brown-dark',
  },
];

export const coverageStats: CoverageStat[] = [
  { value: '4', label: 'Counties Served', icon: 'counties' },
  { value: '17+', label: 'Cities Covered', icon: 'cities' },
  { value: '30 min', label: 'Avg Response', icon: 'response' },
  { value: '100%', label: 'Satisfaction Rate', icon: 'satisfaction' },
];
