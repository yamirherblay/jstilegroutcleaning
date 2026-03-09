export interface GalleryItem {
  id: string;
  title: string;
  category: 'tile' | 'grout' | 'marble' | 'shower' |'sealing'
  beforeThumb: string;
  afterThumb: string;
  beforeFull: string;
  afterFull: string;
}

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'tile', label: 'Tile Cleaning' },
  { id: 'sealing', label: 'Grout Sealing Color' },
  { id: 'marble', label: 'Marble Restoration' },

] as const;

export const categoryLabels: Record<GalleryItem['category'], string> = {
  tile: 'Tile Cleaning',
  grout: 'Grout Cleaning',
  marble: 'Marble Restoration',
  shower: 'Shower Repair',
    sealing: 'Grout Sealing Color',
};

export const galleryItems: GalleryItem[] = [
  {
    id: '01',
    title: 'Color Sealing Tile Restoration - Bathroom',
    category: 'sealing',
    beforeThumb: '/images/Gallery/Color Sealing Tile Restoration in Bathroom Before.jpg',
    afterThumb: '/images/Gallery/Color Sealing Tile Restoration in Bathroom After.jpg',
    beforeFull: '/images/Gallery/Color Sealing Tile Restoration in Bathroom Before.jpg',
    afterFull: '/images/Gallery/Color Sealing Tile Restoration in Bathroom After.jpg',
  },
  {
    id: '02',
    title: 'Marble Restoration - Bathroom',
    category: 'marble',
    beforeThumb: '/images/Gallery/Marble Restoration in Bathroom Before.jpg',
    afterThumb: '/images/Gallery/Marble Restoration in Bathroom After.jpg',
    beforeFull: '/images/Gallery/Marble Restoration in Bathroom Before.jpg',
    afterFull: '/images/Gallery/Marble Restoration in Bathroom After.jpg',
  },
  {
    id: '03',
    title: 'Tile Restoration - Broadway',
    category: 'tile',
    beforeThumb: '/images/Gallery/Restoration tile in Brodway Before.jpg',
    afterThumb: '/images/Gallery/Restoration tile in Brodway After.jpg',
    beforeFull: '/images/Gallery/Restoration tile in Brodway Before.jpg',
    afterFull: '/images/Gallery/Restoration tile in Brodway After.jpg',
  },
  {
    id: '04',
    title: 'Color Sealing Marble - House St Lucie',
    category: 'sealing',
    beforeThumb: '/images/Gallery/Color Sealing Marble Restoration in House St Lucie Before.jpg',
    afterThumb: '/images/Gallery/Color Sealing Marble Restoration in House St Lucie After.jpg',
    beforeFull: '/images/Gallery/Color Sealing Marble Restoration in House St Lucie Before.jpg',
    afterFull: '/images/Gallery/Color Sealing Marble Restoration in House St Lucie After.jpg',
  },
  {
    id: '05',
    title: 'Bathroom Tile Restoration',
    category: 'tile',
    beforeThumb: '/images/Gallery/Bathroom Tile Restoration Before.jpg',
    afterThumb: '/images/Gallery/Bathroom Tile Restoration  After.jpg',
    beforeFull: '/images/Gallery/Bathroom Tile Restoration Before.jpg',
    afterFull: '/images/Gallery/Bathroom Tile Restoration  After.jpg',
  },
  {
    id: '06',
    title: 'Bathroom Restoration',
    category: 'tile',
    beforeThumb: '/images/Gallery/Bathroom Restoration Before.jpg',
    afterThumb: '/images/Gallery/Bathroom Restoration After.jpg',
    beforeFull: '/images/Gallery/Bathroom Restoration Before.jpg',
    afterFull: '/images/Gallery/Bathroom Restoration After.jpg',
  },
  {
    id: '07',
    title: 'Marble Restoration',
    category: 'marble',
    beforeThumb: '/images/Gallery/Marble restoration before.jpg',
    afterThumb: '/images/Gallery/Marble restoration after.jpg',
    beforeFull: '/images/Gallery/Marble restoration before.jpg',
    afterFull: '/images/Gallery/Marble restoration after.jpg',
  },
  {
    id: '08',
    title: 'Marble Restoration - Miami',
    category: 'marble',
    beforeThumb: '/images/Gallery/Marble restoration  Miami before.jpg',
    afterThumb: '/images/Gallery/Marble restoration Miami After.jpg',
    beforeFull: '/images/Gallery/Marble restoration  Miami before.jpg',
    afterFull: '/images/Gallery/Marble restoration Miami After.jpg',
  },
  {
    id: '09',
    title: 'Tile Restoration & Color Sealing - Bedroom',
    category: 'sealing',
    beforeThumb: '/images/Gallery/Tile Restoration and Color Sealing in Bedroom Before.jpg',
    afterThumb: '/images/Gallery/Tile Restoration and Color Sealing in Bedroom After.jpg',
    beforeFull: '/images/Gallery/Tile Restoration and Color Sealing in Bedroom Before.jpg',
    afterFull: '/images/Gallery/Tile Restoration and Color Sealing in Bedroom After.jpg',
  },
  {
    id: '10',
    title: 'Floor Marble Restoration',
    category: 'marble',
    beforeThumb: '/images/Gallery/Floor Marble Restoration Before.jpg',
    afterThumb: '/images/Gallery/Floor Marble Restoration After.jpg',
    beforeFull: '/images/Gallery/Floor Marble Restoration Before.jpg',
    afterFull: '/images/Gallery/Floor Marble Restoration After.jpg',
  },
  {
    id: '11',
    title: 'Tiles Color Sealing - Bedroom',
    category: 'sealing',
    beforeThumb: '/images/Gallery/Tiles Color Sealing in Bedroom before .jpg',
    afterThumb: '/images/Gallery/Tiles Color Sealing in Bedroom after.jpg',
    beforeFull: '/images/Gallery/Tiles Color Sealing in Bedroom before .jpg',
    afterFull: '/images/Gallery/Tiles Color Sealing in Bedroom after.jpg',
  },
  {
    id: '12',
    title: 'Kitchen Marble Restoration & Color Sealing',
    category: 'marble',
    beforeThumb: '/images/Gallery/Kitchen Marble Restoration and Color Sealing Before.jpg',
    afterThumb: '/images/Gallery/Kitchen Marble Restoration and Color Sealing After.jpg',
    beforeFull: '/images/Gallery/Kitchen Marble Restoration and Color Sealing Before.jpg',
    afterFull: '/images/Gallery/Kitchen Marble Restoration and Color Sealing After.jpg',
  },
  {
    id: '13',
    title: 'Tile Restoration - Bathroom',
    category: 'tile',
    beforeThumb: '/images/Gallery/Tile Restoration in Bathroom Before.jpg',
    afterThumb: '/images/Gallery/Tile Restoration in Batroom After.jpg',
    beforeFull: '/images/Gallery/Tile Restoration in Bathroom Before.jpg',
    afterFull: '/images/Gallery/Tile Restoration in Batroom After.jpg',
  },
  {
    id: '14',
    title: 'Tile Color Sealing',
    category: 'sealing',
    beforeThumb: '/images/Gallery/Tile Color Sealing Before.jpg',
    afterThumb: '/images/Gallery/Tile Color Sealing after.jpg',
    beforeFull: '/images/Gallery/Tile Color Sealing Before.jpg',
    afterFull: '/images/Gallery/Tile Color Sealing after.jpg',
  },
  {
    id: '15',
    title: 'Tile Restoration - Kitchen',
    category: 'tile',
    beforeThumb: '/images/Gallery/Tile Restoration Kitchen Before .jpg',
    afterThumb: '/images/Gallery/Tile Restoration Kitchen After.jpg',
    beforeFull: '/images/Gallery/Tile Restoration Kitchen Before .jpg',
    afterFull: '/images/Gallery/Tile Restoration Kitchen After.jpg',
  },
  {
    id: '16',
    title: 'Kitchen Marble & Color Sealing',
    category: 'marble',
    beforeThumb: '/images/Gallery/Kitchen Marble and Color Sealing Before.jpg',
    afterThumb: '/images/Gallery/Kitchen Marble and Color Sealing After.jpg',
    beforeFull: '/images/Gallery/Kitchen Marble and Color Sealing Before.jpg',
    afterFull: '/images/Gallery/Kitchen Marble and Color Sealing After.jpg',
  },
];
