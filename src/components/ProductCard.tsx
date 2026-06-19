import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product, quantity: number, options?: { size?: string }) => void;
  sizes?: string[];
  sizeLabel?: string;
} & React.Attributes;

export default function ProductCard({ product, onAddToCart, sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], sizeLabel = 'Select Size' }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [isAdded, setIsAdded] = useState(false);

  const isApparel = product.category === 'apparel';

  const handleBuy = () => {
    const size = isApparel ? selectedSize : undefined;
    onAddToCart(product, 1, { size });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={`lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 bg-brand-pearl rounded-[40px] shadow-sm border border-brand-sand/40 relative group overflow-hidden cursor-pointer transition-shadow hover:shadow-xl`}
    >
      <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] bg-brand-beige mb-6">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 py-1.5 px-3.5 rounded-full bg-brand-charcoal text-brand-pearl font-mono text-[9px] uppercase tracking-widest font-bold border border-brand-gold/30">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 to-transparent pointer-events-none" />
      </div>

      <div className="space-y-4 text-left">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display font-bold text-xl md:text-2xl text-brand-charcoal group-hover:text-brand-emerald transition-colors">
              {product.name}
            </h3>
            <p className="font-mono text-[10px] text-[#71717a] mt-0.5 uppercase tracking-wider">
              {product.subtitle}
            </p>
          </div>
          <div className="flex items-baseline space-x-1 pl-4">
            <span className="font-mono text-xs text-brand-gold font-bold">$</span>
            <span className="font-display font-medium text-2xl text-brand-charcoal">{product.price}</span>
          </div>
        </div>

        <p className="font-sans text-[#52525b] text-xs md:text-sm leading-relaxed">
          {product.description}
        </p>

        {isApparel && (
          <div className="space-y-2 pt-2">
            <span className="font-mono text-[9px] text-brand-charcoal uppercase tracking-widest font-bold block">
              {sizeLabel}
            </span>
            <div className="flex space-x-2">
              {sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
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
          {product.benefits.slice(0, 2).map((b, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
              <span className="text-[11px] text-brand-charcoal/80 font-medium">{b}</span>
            </div>
          ))}
        </div>

        <button
          onClick={handleBuy}
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
              <span>Add To Cart • ${product.price}.00</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
