import { useState } from 'react';
import { motion } from 'motion/react';
import { Sunrise, CheckCircle, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface BuiltBeforeSunriseProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

const BBS_IDS = ['bbs-tee', 'bbs-hoodie', 'bbs-joggers', 'bbs-dad-hat', 'bbs-triblend', 'bbs-shorts'];

export default function BuiltBeforeSunrise({ products, onAddToCart }: BuiltBeforeSunriseProps) {
  const bbsProducts = products.filter(p => BBS_IDS.includes(p.id));

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
    <section id="bbs-collection" className="relative py-20 px-4 md:px-8 bg-brand-beige overflow-hidden scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-emerald/30 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-brand-emerald/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left max-w-2xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-charcoal border border-brand-gold/20 rounded-full py-1.5 px-4">
            <Sunrise className="w-4 h-4 text-brand-gold" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold">
              Merch Collection
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal leading-tight">
            Built Before <span className="text-brand-emerald">Sunrise</span>
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm md:text-base leading-relaxed">
            Gym / Running / Training / Weekend Wear. Coffee after workout lifestyle. Engineered for the ones who rise before the sun.
          </p>
        </motion.div>

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
          {bbsProducts.map((item) => {
            const isApparel = item.category === 'apparel';
            const selectedSize = selectedSizes[item.id] || 'M';
            const colSpan = isApparel ? 'lg:col-span-6' : 'lg:col-span-4';
            const isAdded = successId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`${colSpan} flex flex-col justify-between p-6 sm:p-8 bg-brand-pearl rounded-[40px] shadow-sm border border-brand-emerald/20 relative group overflow-hidden cursor-pointer transition-shadow hover:shadow-xl`}
              >
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

                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-brand-sand/30">
                    {item.benefits.slice(0, 2).map((b, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                        <span className="text-[11px] text-brand-charcoal/80 font-medium">{b}</span>
                      </div>
                    ))}
                  </div>

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
      </div>
    </section>
  );
}
