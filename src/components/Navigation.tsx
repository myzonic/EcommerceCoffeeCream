/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, ArrowRight, Sparkles, HeartHandshake, Venus, Coffee, Shirt, Baby } from 'lucide-react';
import { CartItem } from '../types';

interface NavigationProps {
  cart: CartItem[];
  onOpenCart: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navigation({ cart, onOpenCart, activeSection, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'The Anthem', info: 'Watch the Story Unfold', icon: Sparkles },
    { id: 'coffee-collection', label: 'Coffee Collection', info: 'A SIP OF LEGACY IN EVERY CUP!!', icon: Coffee },
    { id: 'otm-gear', label: 'OTM Gear', info: 'Out The Mud Collection', icon: Sparkles },
    { id: 'womens-collection', label: 'Naomi Rae Collection', info: 'Strong. Graceful. Unstoppable.', icon: Venus },
    { id: 'men-collection', label: 'Men Collection', info: 'Built Before Sunrise Men', icon: Shirt },
    { id: 'family-collection', label: 'Family Collection', info: 'Built Before Sunrise Family', icon: HeartHandshake },
    { id: 'little-legends', label: 'Little Legends', info: 'For the next generation', icon: Baby },
  ];

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Header Sticky Bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto glass-panel rounded-full py-3 px-6 md:px-8 flex items-center justify-between shadow-sm border border-brand-sand/30">
          
          {/* Logo / Brand Name */}
          <button 
            onClick={() => handleLinkClick('hero')} 
            className="flex items-center cursor-pointer group text-left gap-4"
          >
            <img src="/vhhc-logo.png" alt="VHHC" className="h-20 md:h-24 w-auto" />
            <span className="text-brand-charcoal font-bold text-xl md:text-3xl">SweetNaomiRae’s Coffee & More</span>
          </button>

          {/* Slogan pill (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-2 bg-brand-beige/50 border border-brand-sand/50 rounded-full py-1 px-3.5">
            <img src="/vhhc-logo.png" alt="VHHC" className="h-3 w-auto" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-brand-charcoal/75 font-medium">
              SweetNaomiRae’s Coffee & More
            </span>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Direct Cart Button with floating count */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-brand-pearl hover:bg-brand-emerald hover:text-brand-pearl text-brand-charcoal transition-all duration-300 shadow-sm border border-brand-sand/30 cursor-pointer group animate-[pulse_3s_infinite]"
              id="cart-trigger"
              aria-label="Open shopping cart"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:scale-110" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-brand-emerald text-brand-pearl text-[10px] font-mono flex items-center justify-center font-bold shadow-md border-2 border-brand-pearl"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Immersive Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2.5 rounded-full bg-brand-charcoal text-brand-pearl hover:bg-brand-emerald hover:text-brand-pearl transition-all duration-300 shadow-md cursor-pointer group"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-4 h-4 md:w-5 md:h-5 text-brand-pearl" />
              ) : (
                <div className="w-4 h-4 md:w-5 md:h-5 flex flex-col justify-center space-y-1 group-hover:space-y-1.5 transition-all">
                  <span className="w-full h-0.5 bg-brand-pearl rounded-full"></span>
                  <span className="w-3/4 h-0.5 bg-brand-pearl rounded-full self-end group-hover:w-full transition-all"></span>
                  <span className="w-1/2 h-0.5 bg-brand-pearl rounded-full group-hover:w-full transition-all"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Immersive Full Screen Overlay Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 w-full h-screen z-45 bg-brand-charcoal flex flex-col justify-between pt-24 pb-8 px-6 md:px-16 overflow-y-auto"
          >
            {/* Background design accents */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
              <div className="absolute -top-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-brand-emerald blur-3xl" />
              <div className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] rounded-full bg-brand-gold blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 my-auto z-10">
              {/* Left Side: Brand Story Card */}
              <div className="lg:col-span-4 hidden lg:flex flex-col justify-between p-8 rounded-3xl bg-brand-charcoal-light border border-brand-gold/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/10 rounded-full blur-2xl group-hover:bg-brand-emerald/20 transition-colors" />
                
                <div>
                  <div className="inline-flex items-center space-x-2 border border-brand-gold/20 rounded-full py-1 px-3 mb-6 bg-brand-charcoal">
                    <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#f5efe2]">The Core Manifest</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight text-white mb-4 leading-tight">
                    Fueling Ambition, Crafting Legacy.
                  </h3>
                  <p className="text-brand-sand/70 text-sm leading-relaxed mb-6">
                    We construct sensory standards of coffee, design apparel, and forward-looking athletic ventures that act as physical anchors for personal expansion, morning grit, and daily success.
                  </p>
                </div>

                <div className="border-t border-brand-gold/10 pt-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/assets/images/athletic_morning_1781457409042.jpg"
                      alt="Morning ritual preview"
                      className="w-16 h-16 rounded-xl object-cover border border-brand-gold/20 flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="font-mono text-[10px] text-brand-gold tracking-widest uppercase block">Latest Venture</span>
                      <span className="text-white text-xs font-semibold">Athletic Hubs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Animated Menu Links */}
              <div className="lg:col-span-8 flex flex-col justify-center">
                <span className="font-mono text-[10px] text-brand-gold tracking-[0.3em] uppercase mb-4 block">Select Experience</span>
                <nav className="space-y-4">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;
                    return (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.5 }}
                        onClick={() => handleLinkClick(item.id)}
                        className="w-full text-left flex items-start group relative p-3 rounded-2xl hover:bg-brand-charcoal-light/50 transition-all cursor-pointer border border-transparent hover:border-brand-gold/10"
                      >
                        <div className="mr-6 p-3 rounded-xl bg-brand-charcoal-light border border-brand-gold/10 text-brand-gold group-hover:text-brand-emerald group-hover:bg-brand-gold/10 transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between">
                            <h4 className={`font-display font-medium text-xl md:text-3xl tracking-tight transition-colors ${
                              isActive ? 'text-brand-emerald' : 'text-[#fbf9f5] group-hover:text-brand-gold'
                            }`}>
                              {item.label}
                            </h4>
                            <ArrowRight className="w-5 h-5 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                          </div>
                          <p className="text-brand-sand/50 text-xs md:text-sm mt-1 group-hover:text-brand-sand/80 transition-colors">
                            {item.info}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Bottom bar of overlay */}
            <div className="max-w-7xl mx-auto w-full border-t border-brand-gold/10 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between z-10 text-brand-sand/55 text-xs font-mono">
              <p>© 2026 SweetNaomiRae’s Coffee & More. All rights reserved. | A project of Verde Harvest Holdings Corp.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#hero" onClick={() => handleLinkClick('hero')} className="hover:text-white transition-colors">The Anthem</a>
                <a href="#coffee-collection" onClick={() => handleLinkClick('coffee-collection')} className="hover:text-white transition-colors">Roast Details</a>
                <a href="#otm-gear" onClick={() => handleLinkClick('otm-gear')} className="hover:text-white transition-colors">Shop All</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
