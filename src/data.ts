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
