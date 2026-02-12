export interface GalleryItem {
  id: string;
  title: string;
  category: 'tile' | 'grout' | 'marble' | 'shower';
  beforeThumb: string;
  afterThumb: string;
  beforeFull: string;
  afterFull: string;
}

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'tile', label: 'Tile Cleaning' },
  { id: 'grout', label: 'Grout Cleaning' },
  { id: 'marble', label: 'Marble Restoration' },
  { id: 'shower', label: 'Shower Repair' },
] as const;

export const categoryLabels: Record<GalleryItem['category'], string> = {
  tile: 'Tile Cleaning',
  grout: 'Grout Cleaning',
  marble: 'Marble Restoration',
  shower: 'Shower Repair',
};

export const galleryItems: GalleryItem[] = [
  {
    id: '01',
    title: 'Kitchen Floor Deep Clean',
    category: 'tile',
    beforeThumb: '/images/LandingPage/Before 1.png',
    afterThumb: '/images/LandingPage/After 1.png',
    beforeFull: '/images/LandingPage/Before 1.png',
    afterFull: '/images/LandingPage/After 1.png',
  },
  {
    id: '02',
    title: 'Bathroom Grout Restoration',
    category: 'grout',
    beforeThumb: '/images/LandingPage/Before 2.png',
    afterThumb: '/images/LandingPage/After 2.png',
    beforeFull: '/images/LandingPage/Before 2.png',
    afterFull: '/images/LandingPage/After 2.png',
  },
  {
    id: '03',
    title: 'Marble Countertop Polish',
    category: 'marble',
    beforeThumb: '/images/LandingPage/Before 1.png',
    afterThumb: '/images/LandingPage/After 1.png',
    beforeFull: '/images/LandingPage/Before 1.png',
    afterFull: '/images/LandingPage/After 1.png',
  },
  {
    id: '04',
    title: 'Shower Stall Regrout',
    category: 'shower',
    beforeThumb: '/images/LandingPage/Before 2.png',
    afterThumb: '/images/LandingPage/After 2.png',
    beforeFull: '/images/LandingPage/Before 2.png',
    afterFull: '/images/LandingPage/After 2.png',
  },
];
