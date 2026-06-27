/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowUp, Instagram, Twitter, Heart, ShieldCheck } from 'lucide-react';

import { Product, CartItem } from './types';
import { PRODUCTS, TESTIMONIALS, VENTURES, IMPACT_MILESTONES } from './data';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Merchandise from './components/Merchandise';
import FamilyCollection from './components/FamilyCollection';
import WomenCollection from './components/WomenCollection';
import LittleLegends from './components/LittleLegends';
import MenCollection from './components/MenCollection';
import OTMGear from './components/OTMGear';
import CoffeeCollection from './components/CoffeeCollection';
import PortfolioGallery from './components/PortfolioGallery';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import DonationImpact from './components/DonationImpact';
import Newsletter from './components/Newsletter';
import CartDrawer from './components/CartDrawer';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for "back to top" and active link indicators
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);

      const sections = ['hero', 'merchandise', 'family-collection', 'womens-collection', 'little-legends', 'men-collection', 'otm-gear', 'coffee-collection', 'ventures', 'impact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Management
  const handleAddToCart = (product: Product, quantity: number, options?: { size?: string }) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === options?.size
      );

      if (existingIdx > -1) {
        const newCart = [...prev];
        newCart[existingIdx].quantity += quantity;
        return newCart;
      }

      return [...prev, { product, quantity, selectedSize: options?.size }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number, selectedSize?: string) => {
    setCart((prev) => {
      if (quantity <= 0) {
        return prev.filter((item) => !(item.product.id === productId && item.selectedSize === selectedSize));
      }
      return prev.map((item) =>
        item.product.id === productId && item.selectedSize === selectedSize ? { ...item, quantity } : item
      );
    });
  };

  const handleRemoveItem = (productId: string, selectedSize?: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedSize === selectedSize))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Smooth scroll navigate helper
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen font-sans bg-brand-cream overflow-hidden">
      
      {/* Dynamic Global Top Indicator Pill (Exclusive Notice) */}
      <div className="bg-brand-charcoal py-2 px-4 text-center border-b border-brand-gold/15 hidden md:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold font-medium flex items-center justify-center space-x-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-emerald animate-pulse" />
          <span>Exclusive VIP Portal Active • Complimentary Dispatch with Orders above $75</span>
        </p>
      </div>

      {/* Global Navigation controls */}
      <Navigation
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        activeSection={activeSection}
        onNavigate={handleScrollToSection}
      />

      {/* Main Sections Cascade */}
      <main>
        
        {/* Cinematic Hero Block */}
        <section id="hero" className="scroll-mt-24">
          <Hero onScrollToSection={handleScrollToSection} />
        </section>

        {/* Brand Core why us section (Intro Story elements) */}
        <WhyChoose />

        {/* Asymmetrical Portfolio Visual Magazine Grid */}
        <PortfolioGallery />

        {/* MERCH COLLECTION – Built Before Sunrise */}
        <Merchandise
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* FAMILY COLLECTION */}
        <FamilyCollection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* WOMEN'S COLLECTION */}
        <WomenCollection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* LITTLE LEGENDS */}
        <LittleLegends
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* MEN COLLECTION */}
        <MenCollection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* OTM GEAR */}
        <OTMGear
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* COFFEE COLLECTION */}
        <CoffeeCollection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* Future Offerings & Services */}
        <Services ventures={VENTURES} />

        {/* Endorsements / Customer Reviews Slider */}
        <Testimonials testimonials={TESTIMONIALS} />

        {/* Financial Contribution Calculator / Ecological Impact pledge */}
        <DonationImpact milestones={IMPACT_MILESTONES} />

        {/* Exclusive newsletter subscription dispatch waitlist */}
        <Newsletter />

      </main>

      {/* High-End Brand Footer */}
      <footer className="bg-brand-charcoal-light text-[#fbf9f5] border-t border-brand-gold/15 pt-16 pb-8 px-4 md:px-8 relative overflow-hidden text-left">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-emerald/3 rounded-full blur-[110px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-brand-gold/10 pb-12 mb-12"
        >
          
          {/* Col 1 Brand signatures */}
          <div className="space-y-4">
            <h3 className="font-display font-medium text-2xl tracking-tight text-[#ffffff]">
              SweetNaomiRae’s
            </h3>
            <span className="font-mono text-[9px] text-brand-gold uppercase tracking-[0.2em] font-semibold block">
              Coffee & More
            </span>
            <p className="text-brand-sand/55 text-xs leading-relaxed max-w-xs">
              Sourcing extraordinary volcanic-soil roasts, designing functional premium gear, and constructing human performance networks in alliance with our partners
            </p>
          </div>

          {/* Col 2 Jump links */}
          <div className="space-y-3.5">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#71717a] font-bold">The Experience</h4>
            <div className="flex flex-col space-y-2 text-xs text-brand-sand/70">
              <button onClick={() => handleScrollToSection('hero')} className="hover:text-brand-emerald text-left cursor-pointer hover:underline">The Anthem</button>
              <button onClick={() => handleScrollToSection('flagship')} className="hover:text-brand-emerald text-left cursor-pointer hover:underline">POPS Roast</button>
              <button onClick={() => handleScrollToSection('merchandise')} className="hover:text-brand-emerald text-left cursor-pointer hover:underline">Apparel Drops</button>
              <button onClick={() => handleScrollToSection('ventures')} className="hover:text-brand-emerald text-left cursor-pointer hover:underline">Horizon Projects</button>
            </div>
          </div>

          {/* Col 3 Brand legalities */}
          <div className="space-y-3.5">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#71717a] font-bold">Verification</h4>
            <div className="flex flex-col space-y-2 text-xs text-brand-sand/70">
              <span className="hover:text-white cursor-help">Lab Certified Adaptogens</span>
              <span className="hover:text-white cursor-help">Double carbon emission maps</span>
              <span className="hover:text-white cursor-help">Direct Colombian Fair Premium</span>
              <span className="hover:text-white cursor-help">Alliance Standards</span>
            </div>
          </div>

          {/* Col 4 Community contacts */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-widest text-[#71717a] font-bold">The Brotherhood</h4>
            <div className="flex space-x-3 text-brand-silver">
              <a href="#" className="p-2.5 rounded-full bg-brand-charcoal hover:bg-brand-emerald text-[#eae1cd] hover:text-white transition-all shadow-md">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-brand-charcoal hover:bg-brand-emerald text-[#eae1cd] hover:text-white transition-all shadow-md">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2 text-xs flex items-center space-x-2 text-brand-emerald">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-mono text-[9px] text-[#71717a] uppercase font-bold">SSL Guarded Allocation Escrow</span>
            </div>
          </div>

        </motion.div>

        {/* Signature credit lines */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-[#71717a] text-[10px] font-mono gap-4">
          <p className="flex items-center gap-2">
            © 2026 SweetNaomiRae’s Coffee & More. All rights reserved. 
            <span className="flex items-center gap-1 border-l border-brand-gold/20 pl-2 ml-2">
              <img src="/vhhc-logo.png" alt="VHHC" className="h-4 w-auto" />
              Verde Harvest Holdings Corp.
            </span>
          </p>
          <div className="flex space-x-6">
            <span className="hover:text-[#ffffff] cursor-pointer">Sovereignty Protocols</span>
            <span className="hover:text-[#ffffff] cursor-pointer">Impact Reports</span>
          </div>
        </div>
      </footer>

      {/* Floating cart slide-in drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Compact Floating scroll indicator on bottom corner */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleScrollToSection('hero')}
            className="fixed bottom-6 right-6 p-3.5 rounded-full bg-brand-charcoal text-[#ffffff] hover:bg-brand-emerald hover:text-white shadow-xl transition-all z-40 cursor-pointer border border-brand-gold/15"
            aria-label="Scroll back top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
