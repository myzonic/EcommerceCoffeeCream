import { motion } from 'motion/react';
import { Diamond } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface SignatureCollectionProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

const OTM_IDS = ['legend-hoodie', 'apex-training-tee', 'elite-run-cap', 'elite-windbreaker', 'aerotech-shorts', 'legend-duffle'];

export default function SignatureCollection({ products, onAddToCart }: SignatureCollectionProps) {
  const otmItems = products.filter(p => OTM_IDS.includes(p.id));

  return (
    <section id="signature-collection" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden scroll-mt-24">
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
            <Diamond className="w-5 h-5 text-brand-gold" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold">
              Signature Collection
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal leading-tight">
            OTM – <span className="text-brand-emerald">Out The Mud</span>
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm leading-relaxed max-w-xl">
            Premium signature drops for those who built everything from nothing. OTM is a mindset — relentless, unpolished, undeniable.
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
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
