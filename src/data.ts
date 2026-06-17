/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Testimonial, Venture, ImpactMilestone } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'bbs-tee',
    name: 'Built Before Sunrise Tee',
    subtitle: 'Gym / Running / Training / Weekend Wear',
    price: 34,
    rating: 5.0,
    reviewsCount: 56,
    description: 'Premium performance cotton tee built for early morning grind sessions, gym workouts, running, and weekend wear. Pair with Coffee after workout for maximum recovery.',
    benefits: [
      'Premium ringspun cotton construction',
      'Breathable athletic fit design',
      'Moisture-wicking fabric technology',
      'Built Before Sunrise front branding'
    ],
    image: '/assets/images/Performance Tee.png',
    category: 'apparel',
    badge: 'Built Before Sunrise'
  },
  {
    id: 'bbs-hoodie',
    name: 'Built Before Sunrise Hoodie',
    subtitle: 'Gym / Running / Training / Weekend Wear',
    price: 78,
    rating: 5.0,
    reviewsCount: 42,
    description: 'Heavyweight fleece hoodie engineered for pre-dawn training sessions. Built for the ones who rise before the sun. Coffee after workout sold separately.',
    benefits: [
      'Heavyweight 400GSM fleece',
      'Oversized athletic fit',
      'Kangaroo pocket with media channel',
      'Built Before Sunrise back print'
    ],
    image: '/assets/images/Premium Hoodie.png',
    category: 'apparel',
    badge: 'Built Before Sunrise'
  },
  {
    id: 'bbs-joggers',
    name: 'Built Before Sunrise Joggers',
    subtitle: 'Gym / Running / Training / Weekend Wear',
    price: 62,
    rating: 4.9,
    reviewsCount: 38,
    description: 'Premium athletic joggers engineered for pre-dawn runs and post-workout recovery. Built with moisture-wicking fabric and an elastic cuffed hem. Coffee after workout lifestyle.',
    benefits: [
      'Moisture-wicking performance fabric',
      'Elastic cuffed hem with zippered pockets',
      'Adjustable drawstring waistband',
      'Built Before Sunrise branding'
    ],
    image: '/assets/images/Men\'s Joggers.png',
    category: 'apparel',
    badge: 'Built Before Sunrise'
  },
  {
    id: 'bbs-dad-hat',
    name: 'Built Before Sunrise Dad Hat',
    subtitle: 'Clean Minimal Signature Cap',
    price: 28,
    rating: 4.8,
    reviewsCount: 45,
    description: 'Clean structured dad hat with embroidered brand logo only. Minimal, premium, everyday wear. Curved brim, adjustable snapback closure.',
    benefits: [
      'Premium cotton twill construction',
      'Embroidered brand logo front only',
      'Curved pre-shopped brim',
      'Adjustable snapback closure'
    ],
    image: '/assets/images/Dad Hat.png',
    category: 'apparel',
    badge: 'Built Before Sunrise'
  },
  {
    id: 'bbs-triblend',
    name: 'Built Before Sunrise Tri-Blend Tee',
    subtitle: 'Premium Tri-Blend Performance',
    price: 38,
    rating: 5.0,
    reviewsCount: 52,
    description: 'Ultra-soft tri-blend performance tee from the Built Before Sunrise collection. Designed for gym, running, training, and weekend wear. Coffee after workout.',
    benefits: [
      'Ultra-soft tri-blend fabric',
      'Breathable athletic fit',
      'Built Before Sunrise front print',
      'Versatile training to casual wear'
    ],
    image: '/assets/images/T shirt.png',
    category: 'apparel',
    badge: 'Built Before Sunrise'
  },
  {
    id: 'bbs-shorts',
    name: 'Built Before Sunrise Athletic Shorts',
    subtitle: 'Performance Training Shorts',
    price: 44,
    rating: 4.9,
    reviewsCount: 61,
    description: 'High-performance athletic shorts built for intense training sessions. Lightweight, breathable, and fast-drying. Part of the Built Before Sunrise first drop.',
    benefits: [
      'Lightweight quick-dry fabric',
      'Built-in compression liner',
      'Zippered security pocket',
      'Built Before Sunrise branding'
    ],
    image: '/assets/images/Athletic Shorts.png',
    category: 'apparel',
    badge: 'Built Before Sunrise'
  },
  {
    id: 'youth-tee',
    name: 'Youth Built Before Sunrise Tee',
    subtitle: 'Kids Collection',
    price: 24,
    rating: 4.9,
    reviewsCount: 27,
    description: 'Youth t-shirt featuring "Built Before Sunrise" on back and V.H.H.C. on sleeve. Matching family collection piece for the next generation of legends.',
    benefits: [
      'Soft ringspun cotton',
      'Back: "Built Before Sunrise" print',
      'Sleeve: V.H.H.C. logo',
      'Matching family collection'
    ],
    image: '/assets/images/Youth Tee.png',
    category: 'apparel',
    badge: 'Youth Collection'
  },
  {
    id: 'youth-hoodie',
    name: 'Youth Built Before Sunrise Hoodie',
    subtitle: 'Kids Collection',
    price: 48,
    rating: 4.9,
    reviewsCount: 22,
    description: 'Youth hoodie featuring "Built Before Sunrise" on back and V.H.H.C. on sleeve. Warm, comfortable fleece for the young ones who rise early.',
    benefits: [
      'Soft cotton blend fleece',
      'Back: "Built Before Sunrise" print',
      'Sleeve: V.H.H.C. logo',
      'Matching family collection'
    ],
    image: '/assets/images/Youth Hoodie.png',
    category: 'apparel',
    badge: 'Youth Collection'
  },
  {
    id: 'womens-leggings',
    name: "Signature Leggings",
    subtitle: "Women's Collection",
    price: 54,
    rating: 4.9,
    reviewsCount: 43,
    description: 'High-waisted squat-proof leggings with hidden phone pocket. Available in emerald green, black, and heather gray. Premium performance fabric for training and everyday wear.',
    benefits: [
      'High-waisted compression fit',
      'Squat-proof fabric',
      'Hidden phone pocket',
      'Emerald green, black, heather gray'
    ],
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: "Women's Collection"
  },
  {
    id: 'womens-cropped-hoodie',
    name: 'Cropped Hoodie',
    subtitle: "Women's Collection",
    price: 48,
    rating: 4.8,
    reviewsCount: 31,
    description: 'Cropped hoodie with small sunrise logo on front and "Built Before Sunrise" on back. Perfect for training or casual wear.',
    benefits: [
      'Front: small sunrise logo',
      'Back: "Built Before Sunrise"',
      'Cropped athletic fit',
      'Soft cotton blend fleece'
    ],
    image: 'https://images.unsplash.com/photo-1556908040-0c4f8e7b0b0b?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: "Women's Collection"
  },
  {
    id: 'womens-quarterzip',
    name: 'Quarter-Zip Performance Top',
    subtitle: "Women's Collection",
    price: 42,
    rating: 4.9,
    reviewsCount: 27,
    description: 'Lightweight quarter-zip performance top with thumb holes. Designed for gym and casual wear. Moisture-wicking and breathable.',
    benefits: [
      'Lightweight performance fabric',
      'Thumb holes for sleeve coverage',
      'Quarter-zip front',
      'Gym and casual wear'
    ],
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: "Women's Collection"
  },
  {
    id: 'womens-jogger-set',
    name: "Women's Jogger Set",
    subtitle: "Women's Collection",
    price: 88,
    rating: 4.9,
    reviewsCount: 19,
    description: 'Premium jogger set including matching joggers and zip-up jacket. Features gold embroidered logo detailing. Luxurious athletic wear.',
    benefits: [
      'Premium joggers + zip-up jacket',
      'Gold embroidered logo',
      'Matching two-piece set',
      'Comfortable athletic fit'
    ],
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: "Women's Collection"
  },
  {
    id: 'womens-racerback',
    name: 'Racerback Tank',
    subtitle: "Women's Collection",
    price: 28,
    rating: 4.7,
    reviewsCount: 35,
    description: 'Racerback tank top featuring "SweetNaomiRae\'s Coffee & More" on front and "Fueled By Legacy" on back. Lightweight training essential.',
    benefits: [
      'Front: SweetNaomiRae\'s Coffee & More',
      'Back: "Fueled By Legacy"',
      'Lightweight performance fabric',
      'Racerback design for mobility'
    ],
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: "Women's Collection"
  },
  {
    id: 'womens-weekend-hoodie',
    name: 'Oversized Weekend Hoodie',
    subtitle: "Women's Collection",
    price: 62,
    rating: 4.9,
    reviewsCount: 24,
    description: 'Oversized relaxed fit hoodie in soft fleece. Features coffee cup logo on sleeve. The ultimate weekend comfort piece.',
    benefits: [
      'Soft fleece fabric',
      'Relaxed oversized fit',
      'Coffee cup logo on sleeve',
      'Perfect weekend layering piece'
    ],
    image: 'https://images.unsplash.com/photo-1556908040-0c4f8e7b0b0b?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: "Women's Collection"
  },
  {
    id: 'naomi-hoodie',
    name: 'Naomi Rae Luxury Hoodie',
    subtitle: 'The Naomi Rae Collection',
    price: 98,
    rating: 5.0,
    reviewsCount: 16,
    description: 'Premium luxury hoodie from The Naomi Rae Collection. Designed for the woman who is strong, graceful, and unstoppable. Part of an exclusive premium line.',
    benefits: [
      'Premium heavyweight fleece',
      'The Naomi Rae Collection',
      'Strong. Graceful. Unstoppable.',
      'Luxury gold tone detailing'
    ],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: 'The Naomi Rae Collection'
  },
  {
    id: 'naomi-leggings',
    name: 'Naomi Rae Signature Leggings',
    subtitle: 'The Naomi Rae Collection',
    price: 68,
    rating: 5.0,
    reviewsCount: 21,
    description: 'Signature leggings from The Naomi Rae Collection. Premium high-waisted design with gold tone accents. Strong. Graceful. Unstoppable.',
    benefits: [
      'High-waisted premium fit',
      'Gold tone accent details',
      'The Naomi Rae Collection',
      'Strong. Graceful. Unstoppable.'
    ],
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: 'The Naomi Rae Collection'
  },
  {
    id: 'naomi-longsleeve',
    name: 'Naomi Rae Long Sleeve',
    subtitle: 'The Naomi Rae Collection',
    price: 48,
    rating: 4.9,
    reviewsCount: 14,
    description: 'Long sleeve performance shirt from The Naomi Rae Collection. Premium fabric with elegant branding. Strong. Graceful. Unstoppable.',
    benefits: [
      'Premium long sleeve fit',
      'Performance fabric',
      'The Naomi Rae Collection',
      'Strong. Graceful. Unstoppable.'
    ],
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: 'The Naomi Rae Collection'
  },
  {
    id: 'naomi-cap',
    name: 'Naomi Rae Baseball Cap',
    subtitle: 'The Naomi Rae Collection',
    price: 32,
    rating: 4.8,
    reviewsCount: 11,
    description: 'Premium baseball cap from The Naomi Rae Collection. Structured fit with elegant Naomi Rae branding. Strong. Graceful. Unstoppable.',
    benefits: [
      'Structured baseball cap fit',
      'Premium Naomi Rae branding',
      'The Naomi Rae Collection',
      'Strong. Graceful. Unstoppable.'
    ],
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop',
    category: 'apparel',
    badge: 'The Naomi Rae Collection'
  },
  {
    id: 'naomi-tumbler',
    name: 'Naomi Rae Coffee Tumbler',
    subtitle: 'The Naomi Rae Collection',
    price: 28,
    rating: 4.9,
    reviewsCount: 9,
    description: 'Premium coffee tumbler from The Naomi Rae Collection. Double-wall insulated with elegant gold branding. Strong. Graceful. Unstoppable.',
    benefits: [
      'Double-wall insulated',
      'Gold tone branding',
      'The Naomi Rae Collection',
      'Strong. Graceful. Unstoppable.'
    ],
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop',
    category: 'gear',
    badge: 'The Naomi Rae Collection'
  },
  {
    id: 'legend-hoodie',
    name: 'Legend Hoodie',
    subtitle: 'OTM – Out The Mud Signature Drop',
    price: 85,
    rating: 5.0,
    reviewsCount: 94,
    description: 'An oversized, exceptionally structured athletic drop crafted from 450GSM double-brushed organic cotton. Embellished with signature gold branding and emerald crest.',
    benefits: [
      '450GSM Ultra-Heavy French Terry',
      'Asymmetrical Box Cut Style Finish',
      'Metallic Champagne Gold Trim Accents',
      'Highly Breathable Athletic Knit'
    ],
    image: '/assets/images/merchandise_kit_1781457430354.jpg',
    category: 'apparel',
    badge: 'OTM Signature Drop'
  },
  {
    id: 'apex-training-tee',
    name: 'Apex Training Tee',
    subtitle: 'OTM – Out The Mud Signature Drop',
    price: 38,
    rating: 5.0,
    reviewsCount: 210,
    description: 'Crafted with next-generation seamless micro-knit fabric designed to respond dynamically to heat and high-intensity workout output. Moves with you, dries instantly.',
    benefits: [
      'Optimal Thermal Mapping Ventilation',
      'Zero Friction Chafing Seams Design',
      'Antimicrobial Silver-Weave Infusion',
      'Subtle Emerald and Black Accents'
    ],
    image: '/assets/images/training_tee_1781458534604.jpg',
    category: 'apparel',
    badge: 'OTM Signature Drop'
  },
  {
    id: 'elite-run-cap',
    name: 'Elite Run Cap',
    subtitle: 'OTM – Out The Mud Signature Drop',
    price: 32,
    rating: 4.9,
    reviewsCount: 68,
    description: 'An elite running cap optimized for high-temperature cardiovascular regimes. Water-shedding aerodynamic nylon with ventilation mesh channels and antimicrobial headband.',
    benefits: [
      'Aerodynamic Laser-Cut Ventilation Ports',
      'Waterproof Ripstop Stretch Nylon Shell',
      'High-contrast Reflective Gold Branding',
      'Adjustable Magnetic Crown Enclosure'
    ],
    image: '/assets/images/athletic_run_cap_1781458182440.jpg',
    category: 'apparel',
    badge: 'OTM Signature Drop'
  },
  {
    id: 'elite-windbreaker',
    name: 'Elite Run Windbreaker',
    subtitle: 'OTM – Out The Mud Signature Drop',
    price: 110,
    rating: 4.9,
    reviewsCount: 82,
    description: 'Exceptionally lightweight windbreaker jacket for unpredictable weather. Dynamic water-repellent performance fabric with ventilation heat-escapes and headphone routing.',
    benefits: [
      'Tactical Champagne Gold Minimalist Trims',
      'Wind-Shedding Ultra-Stretch Composition',
      'Stashable Pack-Away Hood Implementation',
      'Reflective Safety Slogan Prints'
    ],
    image: '/assets/images/sport_windbreaker_1781458465773.jpg',
    category: 'apparel',
    badge: 'OTM Signature Drop'
  },
  {
    id: 'aerotech-shorts',
    name: 'AeroTech Shorts',
    subtitle: 'OTM – Out The Mud Signature Drop',
    price: 48,
    rating: 4.8,
    reviewsCount: 95,
    description: 'Designed for heavy training loads. Seamless internal compression layer with ultra-lightweight water-repellent stretch fabric. Anti-chafe, fast-dry, and secure.',
    benefits: [
      'Anti-Chafing Active Compression Liner',
      'Secure Zippered Key & Card Back Slots',
      'Moisture-Wicking Fast Dry-Shield Fabric',
      'Matte Black & Raw Sand Contrast Theme'
    ],
    image: '/assets/images/aerotech_shorts_1781458491774.jpg',
    category: 'apparel',
    badge: 'OTM Signature Drop'
  },
  {
    id: 'legend-duffle',
    name: 'Legend Duffle Bag',
    subtitle: 'OTM – Out The Mud Signature Drop',
    price: 95,
    rating: 4.9,
    reviewsCount: 130,
    description: 'The ultimate carry companion pairing early dawn workouts with late-night executive sessions. Heavy-duty water-resistant ballistic nylon with custom gold hardware.',
    benefits: [
      'Separate Wet/Dry Vent Compartment',
      'Laptop & Tech Guard Neoprene Sleeve',
      'Indestructible Gold Zipper Fastenings',
      'Ergonomic High-Comfort Shoulder Strap'
    ],
    image: '/assets/images/legend_duffle_bag_1781458513453.jpg',
    category: 'gear',
    badge: 'OTM Signature Drop'
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
    image: '/assets/images/Coffee Blend Packaging.png',
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
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=800&auto=format&fit=crop',
    category: 'gear',
    badge: 'Coffee Collection'
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
    image: '/assets/images/thermal_sport_shaker_1781458205534.jpg',
    category: 'gear',
    badge: 'Coffee Collection'
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
    image: '/assets/images/Coffee Cup.png',
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
    image: '/assets/images/Coffee Subscription.png',
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
    title: "SweetNaomiRae's Coffee & More powered by V.H.H.C.",
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
