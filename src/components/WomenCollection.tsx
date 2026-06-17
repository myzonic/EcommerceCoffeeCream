import { motion } from 'motion/react';
import { Venus } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface WomenCollectionProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

const WOMEN_IDS = ['womens-leggings', 'womens-cropped-hoodie', 'womens-quarterzip', 'womens-jogger-set', 'womens-racerback', 'womens-weekend-hoodie', 'naomi-hoodie', 'naomi-leggings', 'naomi-longsleeve', 'naomi-cap', 'naomi-tumbler'];

export default function WomenCollection({ products, onAddToCart }: WomenCollectionProps) {
  const womenProducts = products.filter(p => WOMEN_IDS.includes(p.id));
  const naomiProducts = womenProducts.filter(p => p.id.startsWith('naomi'));
  const standardProducts = womenProducts.filter(p => !p.id.startsWith('naomi'));

  return (
    <section id="womens-collection" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left max-w-2xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-charcoal border border-brand-gold/20 rounded-full py-1.5 px-4">
            <Venus className="w-5 h-5 text-brand-gold" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold">
              Women's Collection
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal leading-tight">
            Built Before Sunrise <span className="text-brand-emerald">Her Edition</span>
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
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-16"
        >
          {standardProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} sizes={['XS', 'S', 'M', 'L', 'XL']} sizeLabel="Select Size" />
          ))}
        </motion.div>

        {naomiProducts.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left max-w-2xl mb-12 space-y-4 pt-12 border-t border-brand-gold/20"
            >
              <h3 className="font-display font-bold text-3xl md:text-4xl tracking-tight text-brand-charcoal">
                The <span className="text-brand-emerald">Naomi Rae</span> Collection
              </h3>
              <p className="font-mono text-sm text-brand-gold tracking-wider">
                "Strong. Graceful. Unstoppable."
              </p>
              <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed">
                A premium women's line named after Naomi. Luxury pieces for the woman who leads with strength and grace.
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
              {naomiProducts.map((item) => (
                <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} sizes={['XS', 'S', 'M', 'L', 'XL']} sizeLabel="Select Size" />
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
