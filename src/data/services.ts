export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  iconBg: string;
  icon: 'tile' | 'marble' | 'seal' | 'shower';
  features: string[];
    image?: string;
}

export const services: Service[] = [
  {
    id: 'tile-grout-cleaning',
    title: 'Tile & Grout Cleaning',
    description: 'Deep extraction cleaning for all types of tile surfaces, restoring the original look of your grout lines.',
    details: 'Our professional tile and grout cleaning service uses state-of-the-art equipment and eco-friendly solutions to penetrate deep into your grout lines. We remove years of built-up dirt, grime, and bacteria that regular mopping simply cannot reach. Whether you have ceramic, porcelain, or natural stone tiles, our specialized techniques restore the original beauty of your floors, walls, and countertops without causing any damage to the surface.',
    iconBg: 'bg-brown',
    icon: 'tile',
    features: [
      'High-pressure steam cleaning',
      'Deep stain and discoloration removal',
      'Mold and mildew elimination',
      'Safe for all tile types',
    ],
    image: '/images/Services/TileandGrout.png',
  },
  {
    id: 'marble-restoration',
    title: 'Marble Restoration',
    description: 'Professional polishing, honing, and repair for marble surfaces to bring back their luxurious natural shine.',
    details: 'Marble is a timeless, elegant material that requires expert care to maintain its beauty. Our marble restoration service includes professional diamond polishing, honing to remove scratches and etching, and sealing to protect against future damage. We work with all types of natural stone including marble, travertine, and limestone to bring back their luxurious natural shine and extend their lifespan.',
    iconBg: 'bg-brown',
    icon: 'marble',
    features: [
      'Diamond polishing and honing',
      'Scratch and etch removal',
      'Crack and chip repair',
      'Protective sealing application',
    ],
      image: '/images/Services/Marble.png',
  },
  {
    id: 'sealing-stripping',
    title: 'Sealing & Stripping',
    description: 'Removing old, discolored wax and applying high-performance sealants for long-lasting protection.',
    details: 'Over time, old sealants and wax build up, trapping dirt and giving your floors a dull, yellowed appearance. Our stripping process completely removes old coatings, revealing the clean surface underneath. We then apply high-performance, commercial-grade sealants that protect your tile and grout from stains, moisture, and daily wear, keeping your floors looking fresh and beautiful for years to come.',
    iconBg: 'bg-brown',
    icon: 'seal',
    features: [
      'Complete old wax and sealant removal',
      'Commercial-grade sealant application',
      'Stain and moisture protection',
      'Extended floor lifespan',
    ],
      image: '/images/Services/Sailing.png',
  },
  {
    id: 'shower-repairs',
    title: 'Shower Repairs',
    description: 'Regrouting, recaulking, and fixing loose tiles in shower stalls to prevent water damage and mold.',
    details: 'Damaged grout and caulking in your shower can lead to serious water damage, mold growth, and costly structural repairs. Our shower repair service addresses these issues before they become major problems. We provide expert regrouting, recaulking, and loose tile repair to restore your shower stall to a watertight, clean condition that looks and functions like new.',
    iconBg: 'bg-brown',
    icon: 'shower',
    features: [
      'Professional regrouting and recaulking',
      'Loose and cracked tile repair',
      'Water damage prevention',
      'Mold and mildew remediation',

    ],
      image: '/images/Services/Bath.png',
  },
    {
        id: 'grout-color-sealing',
        title: 'Grout Color Sealing',
        description: 'Restore, protect, and permanently recolor your grout lines for a clean, uniform, and like-new appearance. Our color sealing also protects against stains, mold, and future discoloration.',
        details: 'Grout Color Sealing goes beyond traditional sealing by combining a powerful penetrating sealer with a color-enhancing pigment. This process creates an invisible waterproof barrier that prevents moisture absorption, mold growth, and stains, while simultaneously restoring and unifying the original color of your grout. The result is a durable, easy-to-clean surface with a fresh, uniform finish that extends the life of your grout and keeps your shower looking immaculate for years to come.',
        iconBg: 'bg-brown',
        icon: 'tile',
        features: [
        'Permanent color restoration and unification',
        'Invisible waterproof barrier protection',
        'Stain, mold, and mildew resistance',
        'Easy-to-clean, low-maintenance finish',
                ],
        image: 'images/Services/calidaddeltrabajo.png',
    },
];
