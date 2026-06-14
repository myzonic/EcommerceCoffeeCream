/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Image, ArrowUpRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  caption: string;
  image: string;
  aspect: string;
}

export default function PortfolioGallery() {
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const items: GalleryItem[] = [
    {
      id: 'g1',
      num: '01',
      title: 'The Roaster’s Altar',
      subtitle: 'VOLCANIC EXTRACTS',
      caption: 'Slow carbon-monitored micro-batch drum roasting locks deep natural vanilla oils without burnt caramel residues.',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 'g2',
      num: '02',
      title: 'Respiratory Threshold',
      subtitle: 'ATHLETIC BIOMETRICS',
      caption: 'Tested against high-altitude oxygen training to stabilize heart metrics and fuel somatic muscular stamina.',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=600&auto=format&fit=crop',
      aspect: 'aspect-[4/3] md:aspect-[1/1]'
    },
    {
      id: 'g3',
      num: '03',
      title: 'Shared Ambition',
      subtitle: 'RELENTLESS FELLOWSHIP',
      caption: 'Our running crews and tech founder clubs assemble at dawn to design tomorrow while fueling on elite roasts.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      aspect: 'aspect-[4/3] md:aspect-[1/1]'
    },
    {
      id: 'g4',
      num: '04',
      title: 'Fair Soil Guardianship',
      subtitle: 'BIO-DYNAMIC RESPONSIBILITY',
      caption: '100% direct-trade tracking. Supporting volcanic micro-farm families with higher base wages and climate resilience seeds.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop',
      aspect: 'aspect-[3/4]'
    }
  ];

  return (
    <section id="gallery" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
               {/* Magazine Editorial Heading Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="border-b border-brand-sand/50 pb-8 mb-16 text-left"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-brand-beige border border-brand-sand/50 rounded-full py-1 px-3">
                <Image className="w-3.5 h-3.5 text-brand-emerald" />
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">
                  Editorial Portfolio Chronicles
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal">
                The Legacy Diary
              </h2>
            </div>
            <p className="font-mono text-xs text-brand-gold tracking-widest uppercase font-semibold max-w-xs">
              Meticulous Frames captures coffee, culture, and high-performance lifestyle standards.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Masonry Styled Magazine Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
        >
          
          {items.map((item, idx) => {
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="flex flex-col space-y-4 group cursor-pointer"
              >
                {/* Image Card Container with hover revealing effects */}
                <div className={`relative ${item.aspect} rounded-3xl overflow-hidden shadow-sm border border-brand-sand/30 bg-brand-beige transition-all duration-300 group-hover:shadow-lg`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-95 group-hover:brightness-100 group-hover:scale-[1.03] transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Translucent Gold Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 via-transparent to-brand-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top corner numeric badge */}
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-brand-pearl/95 flex items-center justify-center font-mono text-[10px] text-brand-charcoal font-bold border border-brand-sand shadow-xs z-10">
                    {item.num}
                  </div>

                  {/* Embedded slide-up info tablet on hover (Mobile always visible bottom) */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl glass-panel-dark border border-brand-gold/20 text-white translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 hidden sm:block">
                    <span className="font-mono text-[8px] text-brand-gold tracking-widest block uppercase mb-1">
                      {item.subtitle}
                    </span>
                    <h4 className="font-display font-medium text-sm leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Visible Description Text Block Underneath Image Card */}
                <div className="text-left space-y-2 px-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-brand-gold tracking-widest font-bold uppercase">
                      {item.subtitle}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-sand group-hover:text-brand-emerald group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-lg md:text-xl text-brand-charcoal group-hover:text-brand-emerald transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[#71717a] text-xs leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </motion.div>

        {/* Cinematic brand quote container below grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 border-t border-brand-sand/50 pt-12 flex flex-col md:flex-row items-center justify-between gap-8 text-left"
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-brand-emerald text-xs tracking-widest font-mono font-bold uppercase block">Core Ethos</span>
            <blockquote className="font-display font-medium text-xl md:text-2xl text-brand-charcoal leading-relaxed tracking-tight">
              "We choose the struggle of early mornings because we know greatness is not granted; it is meticulously coaxed through daily grit, elite fuel, and relentless focus."
            </blockquote>
          </div>
          <div className="p-4 rounded-2xl bg-brand-beige border border-brand-sand flex-shrink-0">
            <span className="font-mono text-[10px] text-brand-gold block font-semibold">VERIFIED ORIGINS</span>
            <span className="font-display font-bold text-lg text-brand-charcoal">100% Pure Legacies</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
