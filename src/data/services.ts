export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'numbered-list'; items: { title: string; description: string }[] };

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  extensedDetails: ContentBlock[];
  iconBg: string;
  icon: 'tile' | 'marble' | 'seal' | 'shower';
  features: string[];
  image?: string;
  metaTitle: string;
  metaDescription: string;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.id === slug);
}

export const services: Service[] = [
  {
    id: 'tile-grout-cleaning',
    title: 'Tile & Grout Cleaning',
    description: 'Deep extraction cleaning for all types of tile surfaces, restoring the original look of your grout lines.',
    details: 'Our professional tile and grout cleaning service uses state-of-the-art equipment and eco-friendly solutions to penetrate deep into your grout lines. We remove years of built-up dirt, grime, and bacteria that regular mopping simply cannot reach. Whether you have ceramic, porcelain, or natural stone tiles, our specialized techniques restore the original beauty of your floors, walls, and countertops without causing any damage to the surface.',
    extensedDetails: [
      {
        type: 'paragraph',
        text: 'Professional tile and grout cleaning is a specialized process that goes far beyond the surface cleaning achieved with a conventional mop. While mopping only redistributes dirt on the surface, professional cleaning penetrates porous areas to remove deep-seated dirt, bacteria, and stains.',
      },
      {
        type: 'heading',
        text: 'The Problem: Why Is Mopping Not Enough?',
      },
      {
        type: 'paragraph',
        text: 'Tiles may seem easy to clean, but the real challenge lies in the grout — the cement mixture that fills the joints between tiles. Grout is a highly porous material, which means that:',
      },
      {
        type: 'list',
        items: [
          'It acts like a sponge, absorbing spilled liquids, oils, and dirt.',
          'Moisture penetrates and creates the perfect environment for mold and mildew growth.',
          'Over time, embedded dirt causes the lines to darken permanently, giving the floor a neglected appearance that even the most intense scrubbing cannot reverse.',
        ],
      },
      {
        type: 'heading',
        text: 'The Professional Solution',
      },
      {
        type: 'paragraph',
        text: 'Professional tile and grout cleaning uses specialized equipment and advanced techniques to restore your floors to their original appearance:',
      },
      {
        type: 'numbered-list',
        items: [
          {
            title: 'Deep Cleaning with Pressure Washing and Steam',
            description: 'Hot water is applied at high pressure combined with eco-friendly but powerful cleaning solutions. This penetrates the pores of the grout, dissolving and expelling years of accumulated dirt.',
          },
          {
            title: 'Vacuum Extraction',
            description: 'Powerful industrial vacuums immediately extract dirty water, removing all dirt, bacteria, and debris. Unlike mopping, this leaves no sticky residue that attracts more dirt.',
          },
          {
            title: 'Protective Sealing (Optional but Recommended)',
            description: 'Once the grout is perfectly clean and dry, a penetrating sealant is applied that creates an invisible barrier against future stains, repels liquids, prevents mold and mildew growth, and extends the life of the floor for years.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Benefits',
      },
      {
        type: 'list',
        items: [
          'Aesthetic restoration: Tiles regain their original color and grout lines look uniform and clear again.',
          'Deep cleaning: Bacteria, allergens, and mold spores are eliminated, creating a healthier environment.',
          'Long-term protection: Sealing facilitates daily maintenance and prevents future damage.',
        ],
      },
      {
        type: 'paragraph',
        text: 'In short, professional tile and grout cleaning is not a luxury — it is a maintenance necessity for homes and businesses, especially in humid climates such as South Florida.',
      },
    ],
    iconBg: 'bg-brown',
    icon: 'tile',
    features: [
      'High-pressure steam cleaning',
      'Deep stain and discoloration removal',
      'Mold and mildew elimination',
      'Safe for all tile types',
    ],
    image: '/images/Services/tile-grout-cleaning.png',
    metaTitle: 'Tile & Grout Cleaning South Florida | JS Tile & Grout',
    metaDescription: 'Professional deep tile and grout cleaning in Miami Dade, Brodward, West Palm Beach and St. Lucie. Steam cleaning for ceramic, porcelain, and natural stone surfaces. Call (561) 913-8786 for a free estimate.',
  },
  {
    id: 'marble-restoration',
    title: 'Marble Restoration',
    description: 'Professional polishing, honing, and repair for marble surfaces to bring back their luxurious natural shine.',
    details: 'Marble is a timeless, elegant material that requires expert care to maintain its beauty. Our marble restoration service includes professional diamond polishing, honing to remove scratches and etching, and sealing to protect against future damage. We work with all types of natural stone including marble, travertine, and limestone to bring back their luxurious natural shine and extend their lifespan.',
    extensedDetails: [
      {
        type: 'heading',
        text: 'What Is Marble Restoration?',
      },
      {
        type: 'paragraph',
        text: 'Marble restoration is a technical and specialized process that restores the original life, shine, and elegance to marble surfaces that have suffered wear and tear over time. Unlike regular cleaning, which only treats the surface, restoration acts on the structure of the stone itself to correct accumulated damage.',
      },
      {
        type: 'heading',
        text: 'Why Does Marble Need Restoration?',
      },
      {
        type: 'paragraph',
        text: 'Marble is a natural stone composed mainly of calcium carbonate, which makes it relatively soft and porous compared to other stones such as granite. This means that, with daily use, it is vulnerable to:',
      },
      {
        type: 'list',
        items: [
          'Surface wear: Constant foot traffic and sand act like sandpaper, dulling the natural shine.',
          'Scratches: Contact with hard objects or abrasive particles leaves visible marks.',
          'Etching: Acidic liquids such as lemon juice, vinegar, or wine react with calcium, creating dull, opaque stains.',
          'Deep stains: Being porous, marble absorbs liquids such as oils, coffee, or wine if it is not properly sealed.',
        ],
      },
      {
        type: 'heading',
        text: 'The Professional Restoration Process',
      },
      {
        type: 'paragraph',
        text: 'Professional restoration is not simply "polishing." It is a gradual process that includes:',
      },
      {
        type: 'numbered-list',
        items: [
          {
            title: 'Evaluation and Deep Cleaning',
            description: 'The damage is inspected and all dirt, wax residue, or previous sealants are removed with pH-neutral products.',
          },
          {
            title: 'Grinding',
            description: 'When there are uneven areas between tiles (lippage) or very deep scratches, industrial diamond machinery is used to level the surface and remove major imperfections. This stage removes a very thin layer of the stone.',
          },
          {
            title: 'Honing',
            description: 'Progressively finer abrasives are used to smooth the surface and remove marks left by grinding. This step leaves the marble with a matte or satin finish that is uniform and smooth to the touch.',
          },
          {
            title: 'Polishing',
            description: 'Very fine abrasives and polishing powders are used to restore the natural shine and reflective character of the marble. This is where the stone reveals its original veins and colors.',
          },
          {
            title: 'Sealing',
            description: 'Finally, a high-quality sealer is applied that penetrates the pores of the marble. This creates a protective barrier against future stains, facilitates daily cleaning, and prolongs the results of the restoration for years.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Results and Benefits',
      },
      {
        type: 'paragraph',
        text: 'A professional restoration not only improves aesthetics — it protects your investment. Restored marble is more resistant, more hygienic, and adds value to any space. In addition, it is a much more economical and sustainable alternative than replacing the stone entirely.',
      },
    ],
    iconBg: 'bg-brown',
    icon: 'marble',
    features: [
      'Diamond polishing and honing',
      'Scratch and etch removal',
      'Crack and chip repair',
      'Protective sealing application',
    ],
    image: '/images/Services/Marble.png',
    metaTitle: 'Marble Restoration & Polishing South Florida | JS Tile & Grout',
    metaDescription: 'Expert marble polishing, honing, and sealing in Miami Dade, Brodward, West Palm Beach and St. Lucie. Restore your marble, travertine, and limestone surfaces. Call (561) 913-8786.',
  },
  {
    id: 'sealing-stripping',
    title: 'Sealing & Stripping',
    description: 'Removing old, discolored wax and applying high-performance sealants for long-lasting protection.',
    details: 'Over time, old sealants and wax build up, trapping dirt and giving your floors a dull, yellowed appearance. Our stripping process completely removes old coatings, revealing the clean surface underneath. We then apply high-performance, commercial-grade sealants that protect your tile and grout from stains, moisture, and daily wear, keeping your floors looking fresh and beautiful for years to come.',
    extensedDetails: [
      {
        type: 'heading',
        text: 'What Is Floor Sealing and Stripping?',
      },
      {
        type: 'paragraph',
        text: 'Sealing and stripping are two complementary but opposite processes in professional floor maintenance, especially on porous surfaces such as marble, tile, terrazzo, polished concrete, and commercial vinyl floors. While one protects the surface, the other deep cleans by removing layers of old wax or sealant.',
      },
      {
        type: 'heading',
        text: 'Stripping: Deep Cleaning',
      },
      {
        type: 'paragraph',
        text: 'Stripping, also known as wax removal, is an aggressive cleaning process that completely removes accumulated layers of wax, old sealant, embedded dirt, and residues from previous cleaning products.',
      },
      {
        type: 'paragraph',
        text: 'Over time, commercial and residential floors accumulate multiple layers of buildup that make the floor look dull, yellowed, sticky, or marked with traffic patterns that are impossible to clean superficially:',
      },
      {
        type: 'list',
        items: [
          'Acrylic waxes applied for shine.',
          'Old sealants that have yellowed or worn unevenly.',
          'Dirt and grease trapped between layers.',
        ],
      },
      {
        type: 'heading',
        text: 'The Stripping Process',
      },
      {
        type: 'numbered-list',
        items: [
          {
            title: 'Chemical Application',
            description: 'A stripper is spread over the floor — a chemical solution designed to dissolve layers of wax and sealant.',
          },
          {
            title: 'Activation Time',
            description: 'The chemical is left to sit so that it can penetrate and soften the accumulated layers.',
          },
          {
            title: 'Mechanical Scrubbing',
            description: 'A rotary machine with an abrasive pad is used to lift and emulsify all the old residue.',
          },
          {
            title: 'Extraction',
            description: 'The resulting sludge (a mixture of chemicals, old wax, and dirt) is collected with a wet vacuum or automatic scrubber.',
          },
          {
            title: 'Rinsing',
            description: 'The floor is repeatedly rinsed with clean water to remove any chemical residue, leaving the surface completely bare and porous.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Result: A floor that is 100% clean at its base layer, ready to receive a new sealant or wax coating.',
      },
      {
        type: 'heading',
        text: 'Sealing: The Protective Layer',
      },
      {
        type: 'paragraph',
        text: 'Sealing is the process of applying a protective barrier to a clean, porous surface (such as marble, grouted tile, terrazzo, or cement) to prevent dirt, liquids, and bacteria from penetrating it. Without a proper sealant, porous surfaces act like sponges:',
      },
      {
        type: 'list',
        items: [
          'Grout becomes permanently darkened.',
          'Marble stains easily (especially with acids such as lemon or vinegar).',
          'Dirt becomes embedded and impossible to remove.',
          'Mold and mildew appear due to retained moisture.',
        ],
      },
      {
        type: 'heading',
        text: 'The Sealing Process',
      },
      {
        type: 'numbered-list',
        items: [
          {
            title: 'Surface Preparation',
            description: 'Sealing should always be done after thorough cleaning or stripping, with the floor completely dry.',
          },
          {
            title: 'Sealer Application',
            description: 'The sealer (penetrating or coating, depending on the type of floor) is spread evenly with a roller, mop, or sprayer.',
          },
          {
            title: 'Penetration Time',
            description: 'The product is allowed to penetrate the pores of the stone or cement.',
          },
          {
            title: 'Cleaning Up Excess',
            description: 'Excess is removed from the surface (for penetrating sealants) or allowed to dry (for coating sealants).',
          },
          {
            title: 'Curing',
            description: 'The product is allowed to dry completely before exposing the floor to traffic.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'Result: A floor with an invisible barrier that repels liquids, resists stains, and is much easier to clean on a daily basis.',
      },
    ],
    iconBg: 'bg-brown',
    icon: 'seal',
    features: [
      'Complete old wax and sealant removal',
      'Commercial-grade sealant application',
      'Stain and moisture protection',
      'Extended floor lifespan',
    ],
    image: '/images/Services/sealing-stripping.png',
    metaTitle: 'Tile Sealing & Stripping Services South Florida | JS Tile & Grout',
    metaDescription: 'Professional sealant and wax removal with commercial-grade resealing in Miami Dade, Brodward, West Palm Beach and St. Lucie. Protect your tile floors. Call (561) 913-8786.',
  },
  {
    id: 'shower-repairs',
    title: 'Shower Repairs',
    description: 'Regrouting, recaulking, and fixing loose tiles in shower stalls to prevent water damage and mold.',
    details: 'Damaged grout and caulking in your shower can lead to serious water damage, mold growth, and costly structural repairs. Our shower repair service addresses these issues before they become major problems. We provide expert regrouting, recaulking, and loose tile repair to restore your shower stall to a watertight, clean condition that looks and functions like new.',
    extensedDetails: [
      {
        type: 'paragraph',
        text: 'A properly maintained shower is essential for keeping your bathroom clean, safe, and protected from hidden water damage. Over time, the grout and caulking that seal your shower can crack, deteriorate, or become discolored due to constant moisture, temperature changes, and daily use.',
      },
      {
        type: 'heading',
        text: 'Why Are Shower Repairs Important?',
      },
      {
        type: 'paragraph',
        text: 'When grout and caulking deteriorate, water can seep behind tiles and into the surrounding structure, leading to serious problems:',
      },
      {
        type: 'list',
        items: [
          'Mold growth and mildew buildup in hidden areas.',
          'Loose or shifting tiles that compromise the surface.',
          'Structural damage to walls or flooring behind the shower.',
          'Costly renovations if left unaddressed over time.',
        ],
      },
      {
        type: 'heading',
        text: 'Our Repair Process',
      },
      {
        type: 'numbered-list',
        items: [
          {
            title: 'Inspection',
            description: 'We carefully examine the condition of the tile surface, grout joints, and existing sealants to identify all problem areas.',
          },
          {
            title: 'Regrouting',
            description: 'Cracked or missing grout is removed and replaced with fresh, durable grout that restores the integrity of the tile installation and prevents water from penetrating behind the tiles.',
          },
          {
            title: 'Recaulking',
            description: 'Old or moldy caulk around corners, joints, and edges is removed and replaced with high-quality waterproof silicone sealant designed specifically for wet environments.',
          },
          {
            title: 'Tile Repair',
            description: 'Loose, cracked, or shifting tiles are repaired and reattached to ensure the surface remains secure and properly aligned.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'The Result',
      },
      {
        type: 'paragraph',
        text: 'A watertight, hygienic, and visually refreshed shower that looks like new and performs reliably for years to come. Our shower repair service is an effective solution for homeowners who want to restore the beauty and functionality of their bathroom without the cost of a full shower replacement.',
      },
      {
        type: 'paragraph',
        text: 'Regular maintenance and professional repairs not only extend the lifespan of your tile installation but also protect your home from hidden moisture problems that can become costly over time.',
      },
    ],
    iconBg: 'bg-brown',
    icon: 'shower',
    features: [
      'Professional regrouting and recaulking',
      'Loose and cracked tile repair',
      'Water damage prevention',
      'Mold and mildew remediation',
    ],
    image: '/images/Services/Bath.png',
    metaTitle: 'Shower Regrouting & Repair South Florida | JS Tile & Grout',
    metaDescription: 'Expert shower regrouting, recaulking, and tile repair in Miami Dade, Brodward, West Palm Beach and St. Lucie. Prevent water damage and mold. Call (561) 913-8786.',
  },
  {
    id: 'grout-color-sealing',
    title: 'Grout Color Sealing',
    description: 'Restore, protect, and permanently recolor your grout lines for a clean, uniform, and like-new appearance. Our color sealing also protects against stains, mold, and future discoloration.',
    details: 'Grout Color Sealing goes beyond traditional sealing by combining a powerful penetrating sealer with a color-enhancing pigment. This process creates an invisible waterproof barrier that prevents moisture absorption, mold growth, and stains, while simultaneously restoring and unifying the original color of your grout. The result is a durable, easy-to-clean surface with a fresh, uniform finish that extends the life of your grout and keeps your shower looking immaculate for years to come.',
    extensedDetails: [
      {
        type: 'paragraph',
        text: 'Grout color sealing is an advanced tile maintenance process that not only protects grout lines from moisture and stains but also restores and enhances their appearance. Over time, grout naturally absorbs dirt, soap residue, oils, and moisture, which can cause discoloration, dark spots, mold growth, and uneven color.',
      },
      {
        type: 'heading',
        text: 'How Does Grout Color Sealing Work?',
      },
      {
        type: 'paragraph',
        text: 'This specialized service combines a professional-grade penetrating sealer with a color-enhancing pigment designed specifically for grout restoration. The process involves:',
      },
      {
        type: 'numbered-list',
        items: [
          {
            title: 'Deep Cleaning',
            description: 'Grout lines are thoroughly cleaned to remove embedded dirt, soap buildup, mildew, and bacteria.',
          },
          {
            title: 'Surface Preparation',
            description: 'The surface is properly prepared to ensure optimal adhesion and penetration of the color sealing product.',
          },
          {
            title: 'Color Seal Application',
            description: 'The color sealing product is carefully applied to each grout line. The sealer penetrates the porous structure, forming a durable protective layer that reduces moisture absorption and prevents contaminants from penetrating.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Advantages Over Traditional Sealers',
      },
      {
        type: 'paragraph',
        text: 'Unlike traditional clear sealers that only provide basic protection, grout color sealing also restores the grout\'s appearance by creating a consistent, uniform color across the entire tiled area. This eliminates uneven tones, stubborn stains, and discoloration that accumulate over time.',
      },
      {
        type: 'heading',
        text: 'Long-Term Protection',
      },
      {
        type: 'list',
        items: [
          'Highly resistant to water, mold, mildew, and everyday stains.',
          'Routine cleaning becomes much easier and faster.',
          'Surfaces can simply be wiped clean without harsh chemicals or intensive scrubbing.',
          'Extends the lifespan of your grout and reduces maintenance costs.',
        ],
      },
      {
        type: 'heading',
        text: 'Ideal Applications',
      },
      {
        type: 'paragraph',
        text: 'Grout color sealing is an excellent solution for bathrooms, showers, kitchens, floors, and any tiled surface where grout lines have become dull, stained, or difficult to clean. The final result is a durable, easy-to-maintain surface that enhances the cleanliness and appearance of your tiled space for years to come.',
      },
    ],
    iconBg: 'bg-brown',
    icon: 'tile',
    features: [
      'Permanent color restoration and unification',
      'Invisible waterproof barrier protection',
      'Stain, mold, and mildew resistance',
      'Easy-to-clean, low-maintenance finish',
    ],
    image: 'images/Services/grout-color-sealing.webp',
    metaTitle: 'Grout Color Sealing Services South Florida | JS Tile & Grout',
    metaDescription: 'Permanently recolor and seal your grout lines in South Florida. Waterproof barrier against stains, mold, and discoloration. Call (561) 913-8786.',
  },
];
