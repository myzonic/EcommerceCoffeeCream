/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Testimonial, Venture, ImpactMilestone } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'otm-joggers',
    name: 'OTM Performance Joggers',
    subtitle: 'Tapered Streetwear Performance',
    price: 88,
    rating: 5.0,
    reviewsCount: 72,
    description: 'Our pinnacle performance pant. Featuring a precision tapered ankle, slim athletic fit, and structured technical fabric. Inspired by industry-leading performance gear, designed to move with you through every grind.',
    benefits: [
      'Precision tapered ankle, slim athletic fit',
      'Technical four-way stretch performance fabric',
      'Secure drawstring waist & side pockets',
      'OTM – Out The Mud Collection'
    ],
    category: 'apparel',
    badge: 'OTM Gear',
    image: '/assets/images/OTM Collection/OTM Performance Joggers.png'
  },
  {
    id: 'otm-triblend',
    name: 'OTM Tri-Blend Tee',
    subtitle: 'OTM Gear Collection',
    price: 38,
    rating: 5.0,
    reviewsCount: 180,
    description: 'An ultra-soft tri-blend tee from the OTM collection. Breathable athletic fit with signature branding. Designed for training, recovery, and everyday wear.',
    benefits: [
      'Ultra-Soft Tri-Blend Fabric',
      'Breathable Athletic Fit',
      'Signature OTM Branding',
      'OTM Gear Collection'
    ],
    category: 'apparel',
    badge: 'OTM Gear',
    image: '/assets/images/OTM Collection/OTM Tri Blend Tee.png'
  },
  {
    id: 'otm-flex-shorts',
    name: 'OTM Flex Shorts',
    subtitle: 'OTM Gear Collection',
    price: 45,
    rating: 4.9,
    reviewsCount: 65,
    description: 'Ultra-lightweight performance shorts with four-way stretch and moisture-wicking technology. Built for intense high-intensity training.',
    benefits: [
      'Four-way stretch agility fabric',
      'Moisture-wicking athletic design',
      'Elastic waist & secure pockets',
      'OTM Gear Collection'
    ],
    category: 'apparel',
    badge: 'OTM Gear',
    image: '/assets/images/OTM Collection/OTM Shorts.png'
  },
  {
    id: 'otm-zip-hoodie',
    name: 'OTM Zip Hoodie',
    subtitle: 'OTM Gear Collection',
    price: 92,
    rating: 5.0,
    reviewsCount: 48,
    description: 'A structured performance zip-up engineered for training and active recovery. Features gold-trimmed hardware, ergonomic hood design, and technical performance fleece.',
    benefits: [
      'Technical performance fleece',
      'Gold-trimmed metal hardware',
      'Ergonomic hood & zip entry',
      'OTM Gear Collection'
    ],
    category: 'apparel',
    badge: 'OTM Gear',
    image: '/assets/images/OTM Collection/OTM Zip Hoodie.png'
  },
  {
    id: 'otm-perf-hoodie',
    name: 'OTM Performance Hoodie',
    subtitle: 'OTM Gear Collection',
    price: 88,
    rating: 5.0,
    reviewsCount: 55,
    description: 'A streamlined athletic-fit hoodie focused on mobility and thermal regulation. Built for training in cool environments.',
    benefits: [
      'Streamlined athletic fit',
      'Thermal regulation fabric',
      'Signature emerald crest',
      'OTM Gear Collection'
    ],
    category: 'apparel',
    badge: 'OTM Gear',
    image: '/assets/images/OTM Collection/OTM Performance Hoodie.png'
  },
  {
    id: 'naomi-leggings',
    name: 'Signature Leggings',
    subtitle: 'Naomi Rae Collection',
    price: 68,
    rating: 5.0,
    reviewsCount: 21,
    description: 'Signature high-waisted performance leggings from The Naomi Rae Collection. Features 4-way stretch, squat-proof fabric, and gold-tone accents. Strong. Graceful. Unstoppable.',
    benefits: [
      'High-waisted compression fit',
      'Squat-proof performance fabric',
      'Gold-tone accent details',
      'Naomi Rae Collection'
    ],
    category: 'apparel',
    badge: 'Naomi Rae Collection',
    image: '/assets/images/Naomi Rae Collection/Signature Leggings - Naomi Rae Collection.png'
  },
  {
    id: 'naomi-sculpt-shorts',
    name: 'Sculpt Shorts',
    subtitle: 'Naomi Rae Collection',
    price: 42,
    rating: 4.9,
    reviewsCount: 15,
    description: 'High-performance sculpt shorts engineered for mobility and comfort. Designed for high-intensity training. Strong. Graceful. Unstoppable.',
    benefits: [
      'Engineered for maximum mobility',
      'High-performance fabric',
      'Elegant contoured fit',
      'Naomi Rae Collection'
    ],
    category: 'apparel',
    badge: 'Naomi Rae Collection',
    image: '/assets/images/Naomi Rae Collection/Sculpt Shorts - Naomi Rae Collection.png'
  },
  {
    id: 'naomi-luxe-zip',
    name: 'Luxe Zip Hoodie',
    subtitle: 'Naomi Rae Collection',
    price: 88,
    rating: 5.0,
    reviewsCount: 18,
    description: 'Premium heavyweight luxury zip hoodie with gold-tone hardware. The ultimate layer for before and after training. Strong. Graceful. Unstoppable.',
    benefits: [
      'Premium heavyweight fleece',
      'Gold-tone metal hardware',
      'Relaxed athletic fit',
      'Naomi Rae Collection'
    ],
    category: 'apparel',
    badge: 'Naomi Rae Collection',
    image: '/assets/images/Naomi Rae Collection/Luxe Zip Hoodie - Naomi Rae Collection.png'
  },
  {
    id: 'naomi-perf-quarterzip',
    name: 'Performance Quarter Zip',
    subtitle: 'Naomi Rae Collection',
    price: 52,
    rating: 4.9,
    reviewsCount: 22,
    description: 'Lightweight, moisture-wicking performance quarter-zip with an elegant silhouette. Perfect for training and lifestyle. Strong. Graceful. Unstoppable.',
    benefits: [
      'Lightweight performance fabric',
      'Elegant quarter-zip design',
      'Moisture-wicking technology',
      'Naomi Rae Collection'
    ],
    category: 'apparel',
    badge: 'Naomi Rae Collection',
    image: '/assets/images/Naomi Rae Collection/Long sleeve performance shirt - Naomi Rae Collection.png'
  },
  {
    id: 'naomi-relaxed-joggers',
    name: 'Relaxed Joggers',
    subtitle: 'Naomi Rae Collection',
    price: 65,
    rating: 4.9,
    reviewsCount: 19,
    description: 'Premium relaxed-fit joggers with a tapered ankle and ultra-soft fabric. Designed for recovery and effortless style. Strong. Graceful. Unstoppable.',
    benefits: [
      'Relaxed yet tapered silhouette',
      'Ultra-soft performance fabric',
      'Drawstring waistband',
      'Naomi Rae Collection'
    ],
    category: 'apparel',
    badge: 'Naomi Rae Collection',
    image: "/assets/images/Naomi Rae Collection/Women's Jogger Set.png"
  },
  {
    id: 'naomi-crop-tee',
    name: 'Crop Tee',
    subtitle: 'Naomi Rae Collection',
    price: 32,
    rating: 4.8,
    reviewsCount: 25,
    description: 'Breathable, elegant crop tee for everyday training. Features a modern athletic cut. Strong. Graceful. Unstoppable.',
    benefits: [
      'Modern athletic crop fit',
      'Breathable performance cotton',
      'Minimalist branding',
      'Naomi Rae Collection'
    ],
    category: 'apparel',
    badge: 'Naomi Rae Collection',
    image: '/assets/images/Naomi Rae Collection/Crop tee - Naomi Rae Collection.png'
  },
  {
    id: 'little-tee',
    name: 'Kids Logo Tee',
    subtitle: 'Little Legends Collection',
    price: 24,
    rating: 5.0,
    reviewsCount: 15,
    description: 'Premium, soft-touch cotton tee featuring a minimal, clean logo on the upper chest. Designed for everyday comfort and play.',
    benefits: [
      'Minimalist upper chest logo',
      'Ultra-soft premium cotton',
      'Durable for active play',
      'Little Legends Collection'
    ],
    category: 'apparel',
    badge: 'Little Legends Collection',
    image: '/assets/images/Youth Collection/Kid T shirt.png'
  },
  {
    id: 'little-hoodie',
    name: 'Kids Hoodie',
    subtitle: 'Little Legends Collection',
    price: 45,
    rating: 5.0,
    reviewsCount: 12,
    description: 'Clean, comfortable fleece hoodie with a small upper-chest logo. Perfect for early morning starts and family outings.',
    benefits: [
      'Clean upper-chest logo',
      'Comfortable premium fleece',
      'Durable construction',
      'Little Legends Collection'
    ],
    category: 'apparel',
    badge: 'Little Legends Collection',
    image: '/assets/images/Youth Collection/Kid Hoodie.png'
  },
  {
    id: 'little-joggers',
    name: 'Youth Joggers',
    subtitle: 'Little Legends Collection',
    price: 35,
    rating: 4.9,
    reviewsCount: 20,
    description: 'Lightweight, athletic-fit joggers with a minimal side logo. Designed for active kids with comfort and movement in mind.',
    benefits: [
      'Minimal side-leg logo',
      'Breathable athletic fabric',
      'Elastic waistband & cuffs',
      'Little Legends Collection'
    ],
    category: 'apparel',
    badge: 'Little Legends Collection',
    image: '/assets/images/Youth Tee.png'
  },
  {
    id: 'little-shorts',
    name: 'Youth Athletic Shorts',
    subtitle: 'Little Legends Collection',
    price: 28,
    rating: 4.9,
    reviewsCount: 18,
    description: 'Durable, quick-dry shorts for sports and play. Minimalist branding with an athletic cut.',
    benefits: [
      'Minimalist branding',
      'Quick-dry performance fabric',
      'Comfortable active cut',
      'Little Legends Collection'
    ],
    category: 'apparel',
    badge: 'Little Legends Collection',
    image: '/assets/images/Youth Tee.png'
  },

  {
    id: 'pops-430',
    name: "POPS 4:30AM",
    subtitle: 'The Legend Fuel Dark Roast',
    price: 28,
    rating: 4.9,
    reviewsCount: 342,
    description: 'Our crown jewel. Formulated for early risers, elite athletes, and high-performing human beings. POPS 4:30AM is a heavy, slow-roasted single-origin blend engineered to unlock sustained focus without the acidic crash.',
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
    image: '/assets/images/pops_coffee_bag_1781457387033.jpg',
    category: 'coffee',
    badge: 'Coffee Collection'
  },
  {
    id: 'golden-blend',
    name: "NaomiRae's Golden Blend",
    subtitle: 'Champagne Sweet Blonde Espresso',
    price: 26,
    rating: 4.8,
    reviewsCount: 189,
    description: 'An elegant, bright roasting masterpiece highlighting caramelized sugars and sweet stone fruit. Sourced with meticulous precision for those who brew to create, design, and lead.',
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
    image: '/assets/images/Coffee Blend Packaging.png',
    category: 'coffee',
    badge: 'Coffee Collection'
  },
  {
    id: 'carbon-tumbler',
    name: 'Carbon Tumbler',
    subtitle: 'Coffee Collection Essentials',
    price: 36,
    rating: 4.9,
    reviewsCount: 112,
    description: 'A matte thermal flask built for elite fitness regimes and workspace environments. Premium food-grade steel with leak-guard magnetic seals and double-walled copper insulation.',
    benefits: [
      '12 Hours Heat / 24 Hours Cold Lock',
      'Zero Condensation Grit Finish',
      'Signature Emerald Green Polish Coat',
      'Indestructible Double Wall Steel'
    ],
    category: 'gear',
    badge: 'Coffee Collection',
    image: '/assets/images/Tumbler.png'
  },
  {
    id: 'sport-shaker',
    name: 'Magnetic Sport Shaker',
    subtitle: 'Coffee Collection Essentials',
    price: 42,
    rating: 5.0,
    reviewsCount: 147,
    description: 'The ultimate athletic coffee shaking experience. Double-walled stainless steel with leak-proof ergonomic handle, magnetic latch closure, and internal steel mixing sphere.',
    benefits: [
      'Silent Heavy-Duty Agitation Grid',
      'Leakproof Magnetic Lid Locking',
      'Scratch-resistant Powder-coated Polish',
      'Perfect for Iced Coffee & Post-Run Shakes'
    ],
    category: 'gear',
    badge: 'Coffee Collection',
    image: '/assets/images/thermal_sport_shaker_1781458205534.jpg'
  },
  {
    id: 'coffee-cup',
    name: 'Branded Coffee Cup',
    subtitle: 'Coffee Collection Essentials',
    price: 22,
    rating: 4.9,
    reviewsCount: 67,
    description: 'Premium ceramic coffee cup featuring full brand logo. "A SIP OF LEGACY IN EVERY CUP!!" Perfect for your morning ritual. Microwave and dishwasher safe.',
    benefits: [
      'Premium ceramic construction',
      'Brand logo + motivational saying',
      'Microwave and dishwasher safe',
      '12oz capacity'
    ],
    image: '/assets/images/Cup.png',
    category: 'gear',
    badge: 'Coffee Collection'
  },
  {
    id: 'coffee-sleeve',
    name: 'Branded Coffee Sleeve',
    subtitle: 'Coffee Collection Essentials',
    price: 12,
    rating: 4.7,
    reviewsCount: 89,
    description: 'Reusable neoprene coffee cup sleeve featuring brand logo and "Built Before Sunrise" messaging. Keeps your hands cool and your coffee hot.',
    benefits: [
      'Neoprene insulated construction',
      'Brand logo + Built Before Sunrise',
      'Reusable and washable',
      'Fits standard coffee cups'
    ],
    image: '/assets/images/Cup Holder.png',
    category: 'gear',
    badge: 'Coffee Collection'
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
    role: 'Founder & Visionary',
    achievement: 'Lifestyle Architect',
    content: "We did not build this brand to just sell beans. We engineered an anthem for the relentless. An energetic pledge of discipline, wellness, and continuous personal growth. A Legendary Sip is simply our standard.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop'
  }
];

export const VENTURES: Venture[] = [
  {
    id: 'v1',
    title: "SweetNaomiRae's Coffee & More",
    description: 'Our upcoming physical lifestyle sanctuary. Blending a high-performance biometric bio-hacking lounge, recovery pods, organic roastery, and run-club clubhouses. Proudly a SweetNaomiRae’s Coffee & More project.',
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
