/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Flame, ShoppingBag } from 'lucide-react';
import { Product, CartItem } from '../types';

interface MerchandiseProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

export default function Merchandise({ products, onAddToCart }: MerchandiseProps) {
  // Filter products by category, excluding Built Before Sunrise and legacy products
  const excludeIds = ['bbs-tee', 'bbs-hoodie', 'bbs-joggers', 'bbs-dad-hat', 'bbs-triblend', 'bbs-shorts', 'legend-hoodie', 'athletic-run-cap', 'emerald-tumbler', 'sport-shaker', 'sport-windbreaker', 'aerotech-shorts', 'legend-duffle', 'training-tee'];
  const gearItems = products.filter(p => (p.category === 'apparel' || p.category === 'gear') && !excludeIds.includes(p.id));
  
  // Size selection state for apparel items
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  
  const [successId, setSuccessId] = useState<string | null>(null);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleBuy = (product: Product) => {
    const size = product.category === 'apparel' ? (selectedSizes[product.id] || 'M') : undefined;
    onAddToCart(product, 1, { size });
    
    setSuccessId(product.id);
    setTimeout(() => setSuccessId(null), 2000);
  };

  return (
    <section id="merchandise" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden scroll-mt-24">
      {/* Decorative linear grids */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-sand/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Master Showcase Layout: 2-Column Luxury Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
        >
          
          {/* Card 1: Large Featured Heavyweight Hoodie showcasing the generated image (Asymmetrical Col-span-7) */}
          {gearItems.map((item) => {
            const isApparel = item.category === 'apparel';
            const selectedSize = selectedSizes[item.id] || 'M';
            const colSpan = isApparel ? 'lg:col-span-7' : 'lg:col-span-5';
            const isAdded = successId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`${colSpan} flex flex-col justify-between p-6 sm:p-8 bg-brand-pearl rounded-[40px] shadow-sm border border-brand-sand/40 relative group overflow-hidden cursor-pointer transition-shadow hover:shadow-xl`}
              >
                {/* Image Frame */}
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] bg-brand-beige mb-6">
                  {item.badge && (
                    <span className="absolute top-4 left-4 z-10 py-1.5 px-3.5 rounded-full bg-brand-charcoal text-brand-pearl font-mono text-[9px] uppercase tracking-widest font-bold border border-brand-gold/30">
                      {item.badge}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="space-y-4 text-left">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-brand-charcoal group-hover:text-brand-emerald transition-colors">
                        {item.name}
                      </h3>
                      <p className="font-mono text-[10px] text-[#71717a] mt-0.5 uppercase tracking-wider">
                        {item.subtitle}
                      </p>
                    </div>
                    
                    <div className="flex items-baseline space-x-1 pl-4">
                      <span className="font-mono text-xs text-brand-gold font-bold">$</span>
                      <span className="font-display font-medium text-2xl text-brand-charcoal">{item.price}</span>
                    </div>
                  </div>

                  <p className="font-sans text-[#52525b] text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Size selector if it is apparel */}
                  {isApparel && (
                    <div className="space-y-2 pt-2">
                      <span className="font-mono text-[9px] text-brand-charcoal uppercase tracking-widest font-bold block">
                        Select Fit Dimension
                      </span>
                      <div className="flex space-x-2">
                        {sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSizeChange(item.id, sz)}
                            className={`w-10 h-10 rounded-full font-mono text-xs font-bold border flex items-center justify-center transition-all cursor-pointer ${
                              selectedSize === sz
                                ? 'bg-brand-emerald text-brand-pearl border-brand-emerald shadow-md'
                                : 'bg-brand-pearl hover:bg-brand-beige border-brand-sand text-brand-charcoal'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Benefits checklist inside card */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-brand-sand/30">
                    {item.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                        <span className="text-[11px] text-brand-charcoal/80 font-medium">{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Action button dispatch to bag */}
                  <button
                    onClick={() => handleBuy(item)}
                    className={`w-full py-3.5 mt-2 rounded-full font-display font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                      isAdded
                        ? 'bg-brand-emerald text-brand-pearl shadow-md'
                        : 'bg-brand-charcoal hover:bg-brand-emerald text-brand-pearl hover:shadow-lg'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-brand-gold" />
                        <span>Added To Your Gear Loadout</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4" />
                        <span>Add To Cart • ${item.price}.00</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}

        </motion.div>

        {/* Motivational Athlete Story Banner Card inside Gear section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 p-8 md:p-12 rounded-[40px] bg-brand-charcoal text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-gold/15"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img
              src="/assets/images/athletic_morning_1781457409042.jpg"
              alt="Misty runner backdrop"
              className="w-full h-full object-cover filter grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-left space-y-3 z-10 max-w-xl">
            <span className="font-mono text-[9px] text-brand-gold uppercase tracking-[0.2em] font-semibold block">The Pledge</span>
            <h3 className="font-display font-medium text-2xl md:text-3xl tracking-tight leading-tight">
              BUILT BEFORE SUNRISE.<br />
              Rooted in FAMILY.<br />
              Fueled by purpose.<br />
              A SIP OF LEGACY IN EVERY CUP!!
            </h3>
            <p className="text-brand-sand/65 text-xs md:text-sm leading-relaxed">
              Every clothing stitch and thermal flask weld has been rigorously stress-tested in wet, near-freezing dawn road sessions and ultra-endurance training circuits. No compromises.
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0 w-full sm:w-auto">
            <div className="inline-flex flex-col items-center sm:items-start p-6 rounded-2xl bg-brand-charcoal-light border border-brand-gold/10">
              <span className="font-mono text-[9px] text-[#71717a] uppercase block">Our Philosophy</span>
              <div className="flex items-center space-x-2 text-brand-gold mt-1">
                <Flame className="w-5 h-5 text-brand-emerald shrink-0" />
                <span className="font-display font-semibold text-lg text-white">Discipline is Freedom</span>
              </div>
              <p className="text-[10px] text-brand-sand/50 mt-1 max-w-[200px] text-center sm:text-left leading-normal">
                4:30 AM is not a wake-up time. It is a commitment of execution.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
