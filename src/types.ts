/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  rating: number;
  reviewsCount: number;
  description: string;
  benefits: string[];
  ingredients?: { name: string; value: string; icon: string }[];
  image: string;
  category: 'coffee' | 'apparel' | 'gear';
  badge?: string;
  hotspots?: { x: number; y: number; title: string; description: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  achievement: string; // e.g. "4:30 AM Wake Up Club" or "Ultra Marathoner"
  content: string;
  rating: number;
  image: string;
}

export interface Venture {
  id: string;
  title: string;
  description: string;
  status: 'Launch Partner' | 'Coming Soon' | 'Beta Active' | 'Concept';
  icon: string;
  tagline: string;
}

export interface ImpactMilestone {
  id: string;
  title: string;
  target: number;
  current: number;
  unit: string;
  description: string;
  percentage: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}
