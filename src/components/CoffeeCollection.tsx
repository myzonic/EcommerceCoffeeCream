import { motion } from 'motion/react';
import { Coffee } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface CoffeeCollectionProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

const COFFEE_IDS = ['pops-430', 'golden-blend', 'carbon-tumbler', 'coffee-cup', 'coffee-sleeve'];

export default function CoffeeCollection({ products, onAddToCart }: CoffeeCollectionProps) {
  const coffeeItems = products.filter(p => COFFEE_IDS.includes(p.id));

  return (
    <section id="coffee-collection" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left max-w-2xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-charcoal border border-brand-gold/20 rounded-full py-1.5 px-4">
            <Coffee className="w-5 h-5 text-brand-gold" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold">
              Built Before Sunrise Collection
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal leading-tight">
            SweetNaomiRae's Coffee & More
          </h2>
          <div className="flex flex-col space-y-1">
            <span className="text-xl font-medium text-brand-emerald">POPS 4:30AM</span>
            <span className="text-sm uppercase tracking-widest text-brand-charcoal/60">Built Before Sunrise Collection</span>
          </div>
          <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed max-w-xl mt-4">
            Premium small-batch coffee. A SweetNaomiRae’s Coffee & More Signature Collection. Engineered for the relentless.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12"
        >
          {coffeeItems.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={onAddToCart}
              sizes={item.category === 'coffee' ? [] : undefined}
              sizeLabel={item.category === 'coffee' ? '' : undefined}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
