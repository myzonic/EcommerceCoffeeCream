import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface OTMCearProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

const OTM_IDS = ['otm-zip-hoodie', 'otm-perf-hoodie', 'otm-triblend', 'otm-joggers', 'otm-flex-shorts'];

export default function OTMGear({ products, onAddToCart }: OTMCearProps) {
  const otmItems = products.filter(p => OTM_IDS.includes(p.id));

  return (
    <section id="otm-gear" className="relative py-20 px-4 md:px-8 bg-brand-charcoal text-brand-pearl overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/texture.png')] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left max-w-2xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 border border-brand-emerald/50 rounded-full py-1.5 px-4 bg-brand-charcoal-light">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-emerald font-bold">
              OTM Gear Collection
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-white leading-tight">
            OTM Gear
          </h2>
          <p className="font-sans text-brand-sand/70 text-lg leading-relaxed max-w-xl">
            For those who refuse to quit. High-performance apparel engineered for the relentless.
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
          {otmItems.map((item) => (
            <div key={item.id} className="lg:col-span-4 bg-brand-charcoal-light border border-brand-emerald/20 rounded-3xl p-6 hover:border-brand-emerald transition-all">
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
