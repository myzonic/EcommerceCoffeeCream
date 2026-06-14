/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Testimonial, Venture, ImpactMilestone } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'pops-430',
    name: 'POPS 4:30AM',
    subtitle: 'The Legend Fuel Dark Roast',
    price: 28,
    rating: 4.9,
    reviewsCount: 342,
    description: 'Our crown jewel. Formulated for early risers, elite athletes, and high-performing human beings. POPS 4:30AM is a heavy, slow-roasted single-origin blend engineered to unlock sustained focus, clean somatic energy, and deep ambition without the acidic crash of typical mass market beans.',
    benefits: [
      'Unlocks 6+ Hours of Clean Focus',
      'Infused with L-Theanine Adaptogens',
      'Zero Acidity or Stomach Jitters',
      'Heavy Dark Chocolate & Volcanic Soil Notes'
    ],
    ingredients: [
      { name: 'Somatic Focus Blend', value: 'Volcanic Soil Arabica Infused', icon: 'Brain' },
      { name: 'Organic Roasting Code', value: 'Slow double carbon-monitored', icon: 'Flame' },
      { name: 'Athletic Adaptogens', value: 'Subtle clean recovery profiles', icon: 'Zap' }
    ],
    image: '/src/assets/images/pops_coffee_bag_1781457387033.jpg',
    category: 'coffee',
    badge: 'Flagship Roast',
    hotspots: [
      { x: 32, y: 38, title: "High-Altitude Beans", description: "Harvested at 2,100m elevation from fertile volcanic slopes." },
      { x: 67, y: 48, title: "Nitrogen Lock Seals", description: "Our custom hermetic seal guards volatile aromatic flavor locks for optimal freshness." },
      { x: 50, y: 78, title: "Elite Infusion", description: "Fortified with metabolic adaptogens ensuring maximum focus with smooth recovery." }
    ]
  },
  {
    id: 'sweet-signature',
    name: "NaomiRae's Golden Blend",
    subtitle: 'Champagne Sweet Blonde Espresso',
    price: 26,
    rating: 4.8,
    reviewsCount: 189,
    description: 'An elegant, bright roasting masterpiece highlighting caramelized sugars and sweet stone fruit. Sourced with meticulous precision for those who brew to create, design, and lead. Highly vibrant, extremely aromatic, and delightfully smooth.',
    benefits: [
      'Instant Energy & Mood Elevation',
      'Elegant Caramelized Peach Notes',
      'Vibrant Antioxidant Clean Profile',
      'Outstanding as Cold Brew & Espresso'
    ],
    ingredients: [
      { name: 'Peach & Toffee Finish', value: 'High caramelization profiling', icon: 'Sunset' },
      { name: 'Ambassador Grade', value: 'Top 1.5% of world crops', icon: 'Crown' }
    ],
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop',
    category: 'coffee',
    badge: 'Designer Series'
  },
  {
    id: 'legend-hoodie',
    name: 'V.H.H.C. Legend Hoodie',
    subtitle: 'Heavyweight Asymmetrical Streetwear',
    price: 85,
    rating: 5.0,
    reviewsCount: 94,
    description: 'An oversized, exceptionally structured athletic drop crafted from 450GSM double-brushed organic cotton. Embellished with the signature gold slogan "A Legendary Sip in Every Cup" inside the visual collar and a luxurious green rubber crest on the chest.',
    benefits: [
      '450GSM Ultra-Heavy French Terry',
      'Asymmetrical Box Cut Style Finish',
      'Metallic Champagne Gold Trim Accents',
      'Highly Breathable Athletic Knit'
    ],
    image: '/src/assets/images/merchandise_kit_1781457430354.jpg',
    category: 'apparel',
    badge: 'Pre-Release Drop'
  },
  {
    id: 'athletic-run-cap',
    name: 'V.H.H.C. Elite Run Cap',
    subtitle: 'Ultra-Lightweight Hydro-Shed Visor',
    price: 32,
    rating: 4.9,
    reviewsCount: 68,
    description: 'An elite running cap optimized for high-temperature cardiovascular regimes. Tailored with water-shedding aerodynamic nylon, integrated ventilation mesh channels, and a sweat-absorbing antimicrobial micro-terry headband.',
    benefits: [
      'Aerodynamic Laser-Cut Ventilation Ports',
      'Waterproof Ripstop Stretch Nylon Shell',
      'High-contrast Reflective Gold Branding',
      'Adjustable Magnetic Crown Enclosure'
    ],
    image: '/src/assets/images/athletic_run_cap_1781458182440.jpg',
    category: 'apparel',
    badge: 'Athletic Drop'
  },
  {
    id: 'emerald-tumbler',
    name: 'V.H.H.C. Carbon Tumbler',
    subtitle: 'Thermal Pro Insulation Flask',
    price: 36,
    rating: 4.9,
    reviewsCount: 112,
    description: 'A matte thermal flask built for elite fitness regimes and workspace environments. Engineered with premium food-grade kitchen stainless steel, proprietary leak-guard magnetic seals, and double-walled copper insulation.',
    benefits: [
      '12 Hours Heat / 24 Hours Cold Lock',
      'Zero Condensation Grit Finish',
      'Signature Emerald Green Polish Coat',
      'Indestructible Double Wall Steel'
    ],
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=800&auto=format&fit=crop',
    category: 'gear',
    badge: 'Limited Gear'
  },
  {
    id: 'sport-shaker',
    name: 'V.H.H.C. Magnetic Sport Shaker',
    subtitle: 'High-Performance Insulated Flask',
    price: 42,
    rating: 5.0,
    reviewsCount: 147,
    description: 'The ultimate athletic coffee shaking experience. Equipped with modern double-walled high-density kitchen grade stainless steel, a leak-proof ergonomic handle, magnetic latch closure, and internal steel mixing sphere.',
    benefits: [
      'Silent Heavy-Duty Agitation Grid',
      'Leakproof Magnetic Lid Locking',
      'Scratch-resistant Powder-coated Polish',
      'Perfect for Iced Coffee & Post-Run Shakes'
    ],
    image: '/src/assets/images/thermal_sport_shaker_1781458205534.jpg',
    category: 'gear',
    badge: 'Pro Performance'
  },
  {
    id: 'sport-windbreaker',
    name: 'V.H.H.C. Elite Run Windbreaker',
    subtitle: 'Champagne Trim Weather-Shedder',
    price: 110,
    rating: 4.9,
    reviewsCount: 82,
    description: 'An exceptionally lightweight windbreaker jacket built for unpredictable weather trials. Constructed with dynamic water-repellent performance fabric, ventilation heat-escapes, and integrated headphone routing channels.',
    benefits: [
      'Tactical Champagne Gold Minimalist Trims',
      'Wind-Shedding Ultra-Stretch Composition',
      'Stashable Pack-Away Hood Implementation',
      'Reflective Safety Slogan Prints'
    ],
    image: '/src/assets/images/sport_windbreaker_1781458465773.jpg',
    category: 'apparel',
    badge: 'Limited Drop'
  },
  {
    id: 'aerotech-shorts',
    name: 'V.H.H.C. AeroTech Shorts',
    subtitle: 'Dual-Layer Cardiovascular Shorts',
    price: 48,
    rating: 4.8,
    reviewsCount: 95,
    description: 'Designed for the heavy training loads of elite runners. Seamless internal compression layer paired with an exceptionally breathable, ultra-lightweight water-repellent stretch fabric dry-shield.',
    benefits: [
      'Anti-Chafing Active Compression Liner',
      'Secure Zippered Key & Card Back Slots',
      'Moisture-Wicking Fast Dry-Shield Fabric',
      'Matte Black & Raw Sand Contrast Theme'
    ],
    image: '/src/assets/images/aerotech_shorts_1781458491774.jpg',
    category: 'apparel',
    badge: 'Athletic Drop'
  },
  {
    id: 'legend-duffle',
    name: 'V.H.H.C. Legend Duffle Bag',
    subtitle: 'Tactical Workspace Gym Vault',
    price: 95,
    rating: 4.9,
    reviewsCount: 130,
    description: 'The ultimate carry companion pairing early dawn workouts with late-night executive sessions. Structured with premium heavy-duty water-resistant ballistic nylon and custom gold hardware zip security.',
    benefits: [
      'Separate Wet/Dry Vent Compartment',
      'Laptop & Tech Guard Neoprene Sleeve',
      'Indestructible Gold Zipper Fastenings',
      'Ergonomic High-Comfort Shoulder Strap'
    ],
    image: '/src/assets/images/legend_duffle_bag_1781458513453.jpg',
    category: 'gear',
    badge: 'Elite Carry'
  },
  {
    id: 'training-tee',
    name: 'V.H.H.C. Apex Training Tee',
    subtitle: 'Somatic Seamless Active Shirt',
    price: 38,
    rating: 5.0,
    reviewsCount: 210,
    description: 'Crafted with next-generation seamless micro-knit fabric designed to respond dynamically to heat and high-intensity workout output. Moves with you, dries instantly, and resists odor-causing bacteria.',
    benefits: [
      'Optimal Thermal Mapping Ventilation',
      'Zero Friction Chafing Seams Design',
      'Antimicrobial Silver-Weave Infusion',
      'Subtle Emerald and Black Accents'
    ],
    image: '/src/assets/images/training_tee_1781458534604.jpg',
    category: 'apparel',
    badge: 'Pro Performance'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Venture Catalyst & Ultramarathoner',
    achievement: '4:30 AM Wake Up Club',
    content: "Building high-growth firms demands intense focus; running ultra-marathons demands physical grit. SweetNaomiRae's is the only coffee signature that aligns completely with both mine. It's clean, non-acidic power that helps me conquer dawn.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Marcus Vance',
    role: 'Pro Fitness Performance Coach',
    achievement: 'Elite Endurance Trainer',
    content: "My athletes require nutrition that fuels output without metabolic crashes. We swapped standard synthetic pre-workouts for POPS 4:30AM. The stamina improvements, raw endurance, and recovery consistency are legendary.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: '3',
    name: 'Naomi Rae',
    role: 'Founder & Visionary, V.H.H.C.',
    achievement: 'Lifestyle Architect',
    content: "We did not build this brand to just sell beans. We engineered an anthem for the relentless. An energetic pledge of discipline, wellness, and continuous personal growth. A Legendary Sip is simply our standard.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop'
  }
];

export const VENTURES: Venture[] = [
  {
    id: 'v1',
    title: 'V.H.H.C. Alpha Athletic Cafe',
    description: 'Our upcoming physical lifestyle sanctuary. Blending a high-performance biometric bio-hacking lounge, recovery pods, organic roastery, and run-club clubhouses.',
    status: 'Launch Partner',
    icon: 'Compass',
    tagline: 'Physical Expansion'
  },
  {
    id: 'v2',
    title: 'NaomiRae Legends Club',
    description: 'Exclusive luxury subscription layer. Unlocking priority allocation of limited-edition micro-lot coffee bags, custom metallic label canisters, and early access apparel drops.',
    status: 'Beta Active',
    icon: 'Crown',
    tagline: 'Digital Membership'
  },
  {
    id: 'v3',
    title: 'Everyday Legend Foundations',
    description: 'Unlocking personal growth through wellness masterclasses, physical training protocols, and interactive mental discipline sessions curated by elite athletic and executive mentors.',
    status: 'Coming Soon',
    icon: 'TrendingUp',
    tagline: 'Life Coaching Hub'
  }
];

export const IMPACT_MILESTONES: ImpactMilestone[] = [
  {
    id: 'impact-youth',
    title: 'Youth Athletic Infrastructure',
    target: 50000,
    current: 38250,
    unit: 'USD',
    description: 'We allocate 10% of every high-end purchase directly to rebuilding physical training arenas and distributing safe athletic opportunities to ambitious underprivileged schools.',
    percentage: 76.5
  },
  {
    id: 'impact-farms',
    title: 'Direct-Trade Bio-Dynamic Coffee Farms',
    target: 100,
    current: 82,
    unit: 'Farms Protected',
    description: 'Funding fully sustainable organic soil preservation, carbon-positive roasting setups, and strict high living-wage benchmarks across our independent micro-lot coffee source farms.',
    percentage: 82
  }
];
