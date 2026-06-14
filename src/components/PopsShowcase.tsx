/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Brain, Flame, Sparkles, ShoppingCart, CheckCircle, Crosshair, HelpCircle } from 'lucide-react';
import { Product, CartItem } from '../types';

interface PopsShowcaseProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

export default function PopsShowcase({ product, onAddToCart }: PopsShowcaseProps) {
  const [selectedGrind, setSelectedGrind] = useState('Whole Bean');
  const [quantity, setQuantity] = useState(1);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(0);
  const [successAnimation, setSuccessAnimation] = useState(false);

  // Grind types
  const grinds = ['Whole Bean', 'Espresso Fine', 'Filter Drip', 'Coarse Press'];

  const handleAddToCart = () => {
    onAddToCart(product, quantity, { size: selectedGrind });
    setSuccessAnimation(true);
    setTimeout(() => setSuccessAnimation(false), 2000);
  };

  return (
    <section id="flagship" className="relative py-20 px-4 md:px-8 bg-brand-beige overflow-hidden scroll-mt-24">
      {/* Absolute graphic overlays */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-emerald/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Intro Branding Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left max-w-2xl mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-sand/65 border border-brand-sand rounded-full py-1 px-3.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">
              Cognitive Performance Roast
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal mb-4">
            POPS 4:30AM Flagship Edition
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm md:text-base leading-relaxed">
            The legendary dark roast built around human ambition, athletic precision, and morning discipline. We've thrown out classic commercial processing methodologies to engineer a clean, heavy fuel that launches your focus instantly.
          </p>
        </motion.div>

        {/* Master Showcase Layout: Overlapping columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Panel: Oversized Media Pouch with Interactive Hotspots (Asymmetrical) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center"
          >
            
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] bg-brand-pearl rounded-[40px] shadow-xl p-8 border border-brand-sand/40 overflow-hidden flex items-center justify-center">
              {/* Soft decorative morning rays */}
              <div className="absolute inset-0 bg-radial-gradient from-brand-gold/15 via-transparent to-transparent opacity-60 pointer-events-none" />
              
              <div className="relative w-11/12 h-11/12 rounded-[28px] overflow-hidden">
                <img
                  src={product.image}
                  alt="POPS 4:30AM Premium Pouch"
                  className="w-full h-full object-cover rounded-[28px] transition-transform duration-500 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Hotspots Mapping */}
                {product.hotspots?.map((spot, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveHotspot(index)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className={`absolute w-8 h-8 rounded-full flex items-center justify-center border-2 shadow-lg cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
                      activeHotspot === index
                        ? 'bg-brand-emerald text-brand-pearl border-brand-pearl scale-115 rotate-45'
                        : 'bg-brand-pearl/90 hover:bg-brand-emerald hover:text-brand-pearl text-brand-emerald border-brand-emerald'
                    }`}
                    aria-label={`Hotspot label ${index + 1}`}
                  >
                    <Crosshair className="w-4 h-4 animate-pulse pointer-events-none" />
                  </button>
                    ))}
              </div>
            </div>

            {/* Display Box for currently selected hotspot */}
            <div className="mt-6 w-full max-w-md">
              <AnimatePresence mode="wait">
                {activeHotspot !== null && (
                  <motion.div
                    key={activeHotspot}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="glass-panel rounded-2xl p-4 border border-brand-gold/40 shadow-sm relative"
                  >
                    <div className="flex items-center space-x-2 text-brand-emerald mb-1">
                      <HelpCircle className="w-4 h-4" />
                      <h4 className="font-display font-bold text-xs tracking-tight uppercase">
                        {product.hotspots?.[activeHotspot].title}
                      </h4>
                    </div>
                    <p className="text-brand-charcoal/85 text-xs">
                      {product.hotspots?.[activeHotspot].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

          {/* Right Panel: Storytelling, Ingredients, Specs & Buy Box (Floating UI Card structure) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            
            {/* Somatic ingredients grid with unique iconography */}
            <div>
              <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest font-bold block mb-4">
                High-Performance Bio-actives
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {product.ingredients?.map((ing, i) => {
                  return (
                    <div
                      key={i}
                      className="p-4 bg-brand-pearl/60 rounded-2xl border border-brand-sand/50 shadow-xs hover:shadow-md transition-shadow flex sm:flex-col items-center sm:items-start text-left sm:text-left space-x-3.5 sm:space-x-0 h-full"
                    >
                      <div className="p-2.5 rounded-xl bg-brand-emerald/10 text-brand-emerald mb-0 sm:mb-3 flex-shrink-0">
                        {ing.icon === 'Brain' ? <Brain className="w-5 h-5" /> : ing.icon === 'Flame' ? <Flame className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-xs tracking-tight text-brand-charcoal">
                          {ing.name}
                        </h4>
                        <p className="text-[10px] text-[#71717a] mt-0.5 leading-tight">
                          {ing.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Performance Benefits List */}
            <div className="p-6 bg-brand-pearl rounded-3xl border border-brand-sand/40 shadow-sm space-y-4">
              <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest font-bold block mb-2">
                Proven Physical Benefits
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.benefits.map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start space-x-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-emerald mt-0.5 shrink-0" />
                    <span className="text-xs text-brand-charcoal/85 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buy Box & Configuration block */}
            <div className="p-6 md:p-8 glass-panel rounded-3xl border border-brand-gold/30 shadow-md space-y-6">
              
              {/* Price & Rating Header */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#71717a] uppercase block">Price per Unit</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="font-mono text-xs text-brand-gold font-bold">$</span>
                    <span className="font-display font-medium text-3xl text-brand-charcoal">{product.price}.00</span>
                    <span className="font-mono text-[10px] text-[#a1a1aa] block ml-1">/ 12 oz pouch</span>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-brand-gold justify-end">
                    <span>★★★★★</span>
                    <span className="font-mono text-xs text-brand-charcoal font-semibold ml-1">{product.rating}</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#71717a] lowercase">from {product.reviewsCount} legends</span>
                </div>
              </div>

              {/* Grind Selector */}
              <div className="space-y-2.5">
                <label className="font-mono text-[10px] text-brand-charcoal font-bold tracking-wider uppercase block">
                  Select Grind Ritual
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {grinds.map((grind) => (
                    <button
                      key={grind}
                      onClick={() => setSelectedGrind(grind)}
                      className={`text-[10px] font-mono uppercase tracking-wider py-2 px-1 rounded-xl font-semibold border transition-all text-center cursor-pointer ${
                        selectedGrind === grind
                          ? 'bg-brand-emerald text-brand-pearl border-brand-emerald shadow-md'
                          : 'bg-brand-pearl hover:bg-brand-beige border-brand-sand text-brand-charcoal'
                      }`}
                    >
                      {grind}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add Button Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                {/* Quantity input component */}
                <div className="flex items-center justify-between border border-brand-sand bg-brand-pearl rounded-full py-1.5 px-3 whitespace-nowrap">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 px-3 text-brand-charcoal hover:text-brand-emerald cursor-pointer font-bold text-sm"
                  >
                    -
                  </button>
                  <span className="font-mono text-xs text-brand-charcoal font-bold px-4">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 px-3 text-brand-charcoal hover:text-brand-emerald cursor-pointer font-bold text-sm"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-grow py-4 px-6 rounded-full bg-brand-charcoal text-brand-pearl hover:bg-brand-emerald hover:text-brand-pearl font-display font-medium shadow-lg hover:shadow-brand-emerald/10 transition-all duration-300 flex items-center justify-center space-x-2.5 cursor-pointer disabled:opacity-50"
                  disabled={successAnimation}
                >
                  {successAnimation ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-brand-gold-light" />
                      <span>Added Into Your Fuel Queue!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4.5 h-4.5" />
                      <span>Dispatch To Bag – ${product.price * quantity}.00</span>
                    </>
                  )}
                </button>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
