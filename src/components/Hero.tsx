/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Flame, Zap, Trophy, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-brand-cream px-4 md:px-8">
      {/* Background radial visual mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] rounded-full bg-brand-emerald/10 blur-[130px]" />
        
        {/* Subtle geometric lines */}
        <svg className="absolute w-full h-full text-brand-sand/35" fill="none">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Storyboard, Typography & CTA (Asymmetrical) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 md:space-y-8 pr-0 lg:pr-6">
          
          {/* Elite Brand Signet Badging */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-brand-beige border border-brand-sand/50 rounded-full py-1.5 px-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-ping" />
            <span className="font-mono text-[10px] md:text-11 uppercase tracking-[0.2em] text-brand-charcoal font-semibold">
              The Next Standard of Lifestyle Coffee
            </span>
          </motion.div>

          {/* Slogan Title with Dynamic Display Type */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="font-display font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-brand-charcoal leading-[1.05]"
            >
              A Legendary Sip in <br />
              <span className="text-brand-emerald relative">
                Every Single Cup
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </motion.h1>
          </div>

          {/* Supportive Copy focusing on performance, ambition, entrepreneurs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-brand-charcoal/75 text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            We curate exceptional sensory roasts, built for early risers, dream chasers, athletes, and modern leaders. This is not simple coffee-this is an energetic foundation for personal growth and physical legacy.
          </motion.p>

          {/* Action Hub CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4 items-center w-full sm:w-auto"
          >
            <button
              onClick={() => onScrollToSection('flagship')}
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-brand-emerald text-brand-pearl hover:bg-brand-emerald-dark font-display font-medium shadow-lg hover:shadow-brand-emerald/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Experience POPS 4:30AM</span>
              <Flame className="w-4 h-4 text-brand-gold-light" />
            </button>
            
            <button
              onClick={() => onScrollToSection('merchandise')}
              className="px-8 py-4 w-full sm:w-auto rounded-full bg-brand-pearl text-brand-charcoal hover:bg-brand-beige font-display font-medium transition-all duration-300 border border-brand-sand/80 hover:border-brand-gold flex items-center justify-center space-x-2"
            >
              <span>Explore Gear Drop</span>
              <Trophy className="w-4 h-4 text-brand-emerald" />
            </button>
          </motion.div>

          {/* Mini-features Grid under core actions */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.0 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-brand-sand/30 w-full"
          >
            <div className="flex items-start space-x-2.5">
              <Zap className="w-4 h-4 text-brand-emerald mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-xs tracking-tight text-brand-charcoal">Clean Caffeine</h4>
                <p className="font-mono text-[9px] text-[#71717a]">Adaptogen Infused</p>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-xs tracking-tight text-brand-charcoal">Pre-Roast Graded</h4>
                <p className="font-mono text-[9px] text-[#71717a]">Direct Farm Sourcing</p>
              </div>
            </div>

            <div className="hidden sm:flex items-start space-x-2.5">
              <Trophy className="w-4 h-4 text-brand-emerald mt-1 shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-xs tracking-tight text-brand-charcoal">Legacy Focused</h4>
                <p className="font-mono text-[9px] text-[#71717a]">10% Youth Investment</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Dynamic Stacked Overlapping Visuals (Asymmetrical) */}
        <div className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0">
          
          {/* Floating Coffee Beans (4 beans, 50% opacity, organic floating animations) */}
          
          {/* Bean 1: Top Right */}
          <motion.div
            className="absolute -top-12 -right-4 w-12 h-12 text-brand-gold/50 pointer-events-none z-20 hidden md:block"
            animate={{
              y: [0, -15, 0],
              rotate: [15, 30, 15],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
              <path d="M32 6C18 6 10 18 10 32C10 46 18 58 32 58C32 58 26 44 26 32C26 20 32 6 32 6Z" />
              <path d="M32 6C46 6 54 18 54 32C54 46 46 58 32 58C32 58 38 44 38 32C38 20 32 6 32 6Z" opacity="0.8" />
              <path d="M32 6C32 6 27 20 27 32C27 44 32 58 32 58" stroke="#F5F2ED" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Bean 2: Upper Mid Left */}
          <motion.div
            className="absolute top-1/4 -left-12 w-10 h-10 text-brand-emerald/50 pointer-events-none z-20 hidden md:block"
            animate={{
              y: [0, 18, 0],
              rotate: [-20, -5, -20],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
              <path d="M32 6C18 6 10 18 10 32C10 46 18 58 32 58C32 58 26 44 26 32C26 20 32 6 32 6Z" />
              <path d="M32 6C46 6 54 18 54 32C54 46 46 58 32 58C32 58 38 44 38 32C38 20 32 6 32 6Z" opacity="0.8" />
              <path d="M32 6C32 6 27 20 27 32C27 44 32 58 32 58" stroke="#F5F2ED" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Bean 3: Near Members Badge (Bottom Right) */}
          <motion.div
            className="absolute bottom-12 -right-8 w-11 h-11 text-brand-gold/50 pointer-events-none z-20 hidden md:block"
            animate={{
              y: [0, -12, 0],
              rotate: [45, 60, 45],
              scale: [0.9, 1.0, 0.9]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
              <path d="M32 6C18 6 10 18 10 32C10 46 18 58 32 58C32 58 26 44 26 32C26 20 32 6 32 6Z" />
              <path d="M32 6C46 6 54 18 54 32C54 46 46 58 32 58C32 58 38 44 38 32C38 20 32 6 32 6Z" opacity="0.8" />
              <path d="M32 6C32 6 27 20 27 32C27 44 32 58 32 58" stroke="#F5F2ED" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Bean 4: Bottom Left Area */}
          <motion.div
            className="absolute -bottom-6 left-6 w-9 h-9 text-brand-charcoal/50 pointer-events-none z-20 hidden md:block"
            animate={{
              y: [0, 14, 0],
              rotate: [-10, 10, -10],
              scale: [0.95, 1.05, 0.95]
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <svg viewBox="0 0 64 64" fill="currentColor" className="w-full h-full">
              <path d="M32 6C18 6 10 18 10 32C10 46 18 58 32 58C32 58 26 44 26 32C26 20 32 6 32 6Z" />
              <path d="M32 6C46 6 54 18 54 32C54 46 46 58 32 58C32 58 38 44 38 32C38 20 32 6 32 6Z" opacity="0.8" />
              <path d="M32 6C32 6 27 20 27 32C27 44 32 58 32 58" stroke="#F5F2ED" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Main overlapping lifestyle collage container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
            className="w-full max-w-md relative"
          >
            {/* Background design glow */}
            <div className="absolute inset-0 bg-brand-gold/10 rounded-[32px] transform rotate-3 scale-102" />
            
            {/* Elegant Main Image frame */}
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-brand-pearl bg-brand-beige aspect-[4/5] md:aspect-[3/4]">
              <img
                src="/src/assets/images/hero_coffee_dawn_1781457367197.jpg"
                alt="SweetNaomiRae's Dawn Coffee Extraction"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Image Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating badge card 1 (Top Left) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -top-6 -left-6 md:-left-8 glass-panel shadow-lg rounded-2xl p-4 flex items-center space-x-3 border border-brand-gold/40 max-w-[150px] sm:max-w-none"
            >
              <div className="p-2 bg-brand-charcoal rounded-xl text-brand-gold">
                <span className="font-mono font-bold text-xs">4:30</span>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-wider text-brand-charcoal font-bold leading-3">AM Club</p>
                <p className="text-[9px] text-[#52525b] mt-0.5 leading-tight">Relentless Execution</p>
              </div>
            </motion.div>

            {/* Overlapping Floating stats card 2 (Bottom Right) */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -right-4 glass-panel-dark shadow-xl rounded-2xl p-4 border border-brand-gold/20 text-white flex flex-col space-y-1"
            >
              <span className="font-mono text-xs text-brand-gold tracking-widest uppercase">Member Rating</span>
              <div className="flex items-center space-x-1.5">
                <span className="font-display font-medium text-xl leading-none">4.96</span>
                <span className="text-brand-emerald-light">★★★★★</span>
              </div>
              <p className="text-[8px] text-brand-sand/65">Verified Performance</p>
            </motion.div>

          </motion.div>

          {/* Floating decoration circle */}
          <div className="absolute -bottom-10 -left-12 w-28 h-28 border border-dashed border-brand-gold/30 rounded-full animate-[spin_50s_linear_infinite] hidden md:block" />
        </div>

      </div>

      {/* Decorative Slide-down Scroll Tip */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1 z-10">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-charcoal/50">Enter the Ritual</span>
        <button 
          onClick={() => onScrollToSection('flagship')}
          className="p-1 px-2.5 rounded-full bg-brand-beige border border-brand-sand hover:bg-brand-emerald hover:text-brand-pearl transition-colors duration-300 flex items-center justify-center shadow-xs cursor-pointer group"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
