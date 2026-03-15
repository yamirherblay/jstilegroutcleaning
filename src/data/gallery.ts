export interface GalleryItem {
  id: string;
  title: string;
  category: 'tile' | 'grout' | 'marble' | 'shower' |'sealing' | 'recaulking';
  beforeThumb: string;
  afterThumb: string;
  beforeFull: string;
  afterFull: string;
}

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'tile', label: 'Tile Cleaning & Grout Cleaning' },
  { id: 'sealing', label: 'Grout Sealing Color' },
  { id: 'recaulking', label: 'Kitchen Recaulking' },
  { id: 'marble', label: 'Marble Restoration' },


] as const;

export const categoryLabels: Record<GalleryItem['category'], string> = {
  tile: 'Tile Cleaning',
  grout: 'Grout Cleaning',
  marble: 'Marble Restoration',
  shower: 'Shower Repair',
    sealing: 'Grout Sealing Color',
    recaulking: 'Kitchen Recaulking',
};

export const galleryItems: GalleryItem[] = [
  {
    id: '01',
    title: 'Color Sealing Tile Restoration - Bathroom - West Palm Beach ,Fl',
    category: 'sealing',
    beforeThumb: '/images/gallery/color-sealing-tile-restoration-in-bathroom-before.jpg',
    afterThumb: '/images/gallery/color-sealing-tile-restoration-in-bathroom-after.jpg',
    beforeFull: '/images/gallery/color-sealing-tile-restoration-in-bathroom-before.jpg',
    afterFull: '/images/gallery/color-sealing-tile-restoration-in-bathroom-after.jpg',
  },
  {
    id: '02',
    title: 'Tile Restoration - Bathroom - Boca Ratón , FL',
    category: 'tile',
    beforeThumb: '/images/gallery/tile-restoration-in-bathroom-before.jpg',
    afterThumb: '/images/gallery/tile-restoration-in-bathroom-after.jpg',
    beforeFull: '/images/gallery/tile-restoration-in-bathroom-before.jpg',
    afterFull: '/images/gallery/tile-restoration-in-bathroom-after.jpg',
  },
  {
    id: '03',
    title: 'Tile Restoration - Port St. Lucie, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/restoration-tile-in-brodway-before.jpg',
    afterThumb: '/images/gallery/restoration-tile-in-brodway-after.jpg',
    beforeFull: '/images/gallery/restoration-tile-in-brodway-before.jpg',
    afterFull: '/images/gallery/restoration-tile-in-brodway-after.jpg',
  },
  {
    id: '04',
    title: 'Color Sealing Tile - House Port St Lucie',
    category: 'sealing',
    beforeThumb: '/images/gallery/color-sealing-tile-restoration-in-house-st-lucie-before.jpg',
    afterThumb: '/images/gallery/color-sealing-tile-restoration-in-house-st-lucie-after.jpg',
    beforeFull: '/images/gallery/color-sealing-tile-restoration-in-house-st-lucie-before.jpg',
    afterFull: '/images/gallery/color-sealing-tile-restoration-in-house-st-lucie-after.jpg',
  },
  {
    id: '05',
    title: 'Bathroom Tile Restoration and Color Sealing - Port St. Lucie, FL',
    category: 'sealing',
    beforeThumb: '/images/gallery/bathroom-tile-restoration-before.jpg',
    afterThumb: '/images/gallery/bathroom-tile-restoration-after.jpg',
    beforeFull: '/images/gallery/bathroom-tile-restoration-before.jpg',
    afterFull: '/images/gallery/bathroom-tile-restoration-after.jpg',
  },
  {
    id: '06',
    title: 'Bathroom Restoration with grout color Sealing - Port St. Lucie, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/bathroom-restoration-before.jpg',
    afterThumb: '/images/gallery/bathroom-restoration-after.jpg',
    beforeFull: '/images/gallery/bathroom-restoration-before.jpg',
    afterFull: '/images/gallery/bathroom-restoration-after.jpg',
  },
  {
    id: '07',
    title: 'Tile Restoration with grout color sealing for an event hall – West Palm Beach, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/tile-restoration-before.jpg',
    afterThumb: '/images/gallery/tile-restoration-after.jpg',
    beforeFull: '/images/gallery/tile-restoration-before.jpg',
    afterFull: '/images/gallery/tile-restoration-after.jpg',
  },
  {
    id: '08',
    title: 'Tile Restoration and grout color sealing for an event hall – West Palm Beach, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/tiles-restoration-in-miami-before.jpg',
    afterThumb: '/images/gallery/tiles-restoration-in-miami-after.jpg',
    beforeFull: '/images/gallery/tiles-restoration-in-miami-before.jpg',
    afterFull: '/images/gallery/tiles-restoration-in-miami-after.jpg',
  },
  {
    id: '09',
    title: 'Tile Restoration & Color Sealing - Bedroom - West Palm Beach, FL',
    category: 'sealing',
    beforeThumb: '/images/gallery/tile-restoration-and-color-sealing-in-bedroom-before.jpg',
    afterThumb: '/images/gallery/tile-restoration-and-color-sealing-in-bedroom-after.jpg',
    beforeFull: '/images/gallery/tile-restoration-and-color-sealing-in-bedroom-before.jpg',
    afterFull: '/images/gallery/tile-restoration-and-color-sealing-in-bedroom-after.jpg',
  },
  {
    id: '10',
    title: 'Floor Tile Restoration - West Palm Beach, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/floor-tile-restoration-before.jpg',
    afterThumb: '/images/gallery/floor-tile-restoration-after.jpg',
    beforeFull: '/images/gallery/floor-tile-restoration-before.jpg',
    afterFull: '/images/gallery/floor-tile-restoration-after.jpg',
  },
  {
    id: '11',
    title: 'Tiles Color Sealing - Bedroom - West Palm Beach, FL',
    category: 'sealing',
    beforeThumb: '/images/gallery/tiles-color-sealing-in-bedroom-before.jpg',
    afterThumb: '/images/gallery/tiles-color-sealing-in-bedroom-after.jpg',
    beforeFull: '/images/gallery/tiles-color-sealing-in-bedroom-before.jpg',
    afterFull: '/images/gallery/tiles-color-sealing-in-bedroom-after.jpg',
  },
  {
    id: '12',
    title: 'Kitchen Tile Restoration & Color Sealing - Jupiter FL',
    category: 'tile',
    beforeThumb: '/images/gallery/kitchen-tile-restoration-and-color-sealing-before.jpg',
    afterThumb: '/images/gallery/kitchen-tile-restoration-and-color-sealing-after.jpg',
    beforeFull: '/images/gallery/kitchen-tile-restoration-and-color-sealing-before.jpg',
    afterFull: '/images/gallery/kitchen-tile-restoration-and-color-sealing-after.jpg',
  },
  {
    id: '13',
    title: 'Commercial tile and grout cleaning with color sealing – Nail salon suite – West Palm Beach, FL.',
    category: 'sealing',
    beforeThumb: '/images/gallery/tiles-restoration-in-bathroom-before.jpg',
    afterThumb: '/images/gallery/tiles-restoration-in-bathroom-after.jpg',
    beforeFull: '/images/gallery/tiles-restoration-in-bathroom-before.jpg',
    afterFull: '/images/gallery/tiles-restoration-in-bathroom-after.jpg',
  },
  {
    id: '14',
    title: 'Tile Color Sealing - Fort Lauderdale, FL',
    category: 'sealing',
    beforeThumb: '/images/gallery/tile-color-sealing-before.jpg',
    afterThumb: '/images/gallery/tile-color-sealing-after.jpg',
    beforeFull: '/images/gallery/tile-color-sealing-before.jpg',
    afterFull: '/images/gallery/tile-color-sealing-after.jpg',
  },
  {
    id: '15',
    title: 'Tile Restoration - Kitchen - Miami, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/tile-restoration-kitchen-before.jpg',
    afterThumb: '/images/gallery/tile-restoration-kitchen-after.jpg',
    beforeFull: '/images/gallery/tile-restoration-kitchen-before.jpg',
    afterFull: '/images/gallery/tile-restoration-kitchen-after.jpg',
  },
  {
    id: '16',
    title: 'Kitchen Tile & Color Sealing - Miami, FL',
    category: 'recaulking',
    beforeThumb: '/images/gallery/kitchen-tile-and-color-sealing-before.jpg',
    afterThumb: '/images/gallery/kitchen-tile-and-color-sealing-after.jpg',
    beforeFull: '/images/gallery/kitchen-tile-and-color-sealing-before.jpg',
    afterFull: '/images/gallery/kitchen-tile-and-color-sealing-after.jpg',
  },{
    id: '17',
    title: 'Tile and Grout Restoration with Regrouting and Color Sealing – Luxury Waterfront Home – Miami Beach, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/tile-regrouting-luxury-house-before.png',
    afterThumb: '/images/gallery/tile-regrouting-luxury-house-after.png',
    beforeFull: '/images/gallery/tile-regrouting-luxury-house-before.png',
    afterFull: '/images/gallery/tile-regrouting-luxury-house-after.png',
  },{
    id: '18',
    title: 'Tile and Grout Restoration with Regrouting and Color Sealing – Luxury Waterfront Home – Miami Beach, FL',
    category: 'tile',
    beforeThumb: '/images/gallery/tile-entry-house-luxury-before.png',
    afterThumb: '/images/gallery/tile-entry-house-luxury-after.jpg',
    beforeFull: '/images/gallery/tile-entry-house-luxury-before.png',
    afterFull: '/images/gallery/tile-entry-house-luxury-after.jpg',
  },
];
