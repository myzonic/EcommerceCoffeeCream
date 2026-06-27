import { motion } from 'motion/react';
import { Flame } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface MerchandiseProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
}

export default function Merchandise({ products, onAddToCart }: MerchandiseProps) {
  const merchItems = products.filter(p => p.badge === 'Built Before Sunrise');

  return (
    <section id="merchandise" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-sand/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal">
            Built Before Sunrise <span className="text-brand-emerald">Collection</span>
          </h2>
        </div>

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
          {merchItems.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onAddToCart={onAddToCart}
              sizes={['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']}
              sizeLabel="Select Size"
            />
          ))}
        </motion.div>

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
