import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface LittleLegendsProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

const LITTLE_LEGENDS_IDS = ['little-tee', 'little-hoodie'];

export default function LittleLegends({ products, onAddToCart }: LittleLegendsProps) {
  const littleItems = products.filter(p => LITTLE_LEGENDS_IDS.includes(p.id));

  return (
    <section id="little-legends" className="relative py-20 px-4 md:px-8 bg-brand-pearl overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left max-w-2xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-charcoal border border-brand-emerald/20 rounded-full py-1.5 px-4">
            <Heart className="w-5 h-5 text-brand-emerald" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-emerald font-bold">
              Little Legends Collection
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal leading-tight">
            Little Legends <span className="text-brand-emerald">For the next generation.</span>
          </h2>
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
          {littleItems.map((item) => (
            <div key={item.id} className="lg:col-span-3">
              <ProductCard
                product={item}
                onAddToCart={onAddToCart}
                sizes={['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']}
                sizeLabel="Select Size"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
