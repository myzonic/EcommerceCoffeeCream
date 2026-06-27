import { motion } from 'motion/react';
import { ArrowDown, Coffee, Sparkles } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/images/hero_coffee_dawn_1781457367197.png" 
          alt="Morning Ritual" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
      </div>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center space-x-2 bg-brand-charcoal/50 border border-brand-emerald/30 backdrop-blur-md rounded-full py-2 px-6 mb-8">
            <Sparkles className="w-4 h-4 text-brand-emerald animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-brand-pearl font-bold">
              SweetNaomiRae’s Coffee & More
            </span>
          </div>
          
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight text-white mb-6 leading-tight uppercase tracking-wider">
            Built Before Sunrise<br />
            Rooted in FAMILY.<br />
            Fueled by purpose.<br />
            <span className="text-brand-emerald italic font-sans font-bold text-3xl md:text-5xl tracking-normal mt-4 block">A sip of legacy in every cup!!</span>
          </h1>
          
          <div className="mb-12"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onScrollToSection('coffee-collection')}
              className="group flex items-center space-x-3 bg-brand-emerald hover:bg-brand-gold text-brand-pearl px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all shadow-lg hover:shadow-brand-emerald/20"
            >
              <Coffee className="w-4 h-4" />
              <span>Explore The Roast</span>
            </button>
            <button 
              onClick={() => onScrollToSection('otm-gear')}
              className="flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest transition-all border border-white/10"
            >
              <span>View Gear</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Slide-down Scroll Tip */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-20">
        <button 
          onClick={() => onScrollToSection('coffee-collection')}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-brand-emerald transition-colors duration-300 flex items-center justify-center cursor-pointer animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
