/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 px-4 md:px-8 bg-brand-beige overflow-hidden">
      {/* Visual background sand grid details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/3 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title branding text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-sand/60 border border-brand-sand rounded-full py-1 px-3">
            <Quote className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#27272a] font-bold">
              Echoes of Relentless Journeys
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[#27272a]">
            The Legend Testimonials
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm md:text-base">
            See how founders, high-intensity modern athletes, and everyday achievers navigate their mornings with the power of our premium roasts.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-6 sm:p-12 md:p-16 bg-brand-pearl rounded-[40px] shadow-sm border border-brand-sand/50 overflow-hidden min-h-[400px] flex flex-col justify-between"
        >
          {/* Quote Watermark Icon */}
          <div className="absolute top-6 right-8 text-brand-beige select-none pointer-events-none">
            <Quote className="w-24 h-24 transform opacity-40 scale-125" />
          </div>

          {/* Staggered text sliders */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 md:space-y-8 text-left"
            >
              {/* Star Rating & Club Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4">
                <div className="flex items-center space-x-1 text-brand-gold">
                  {Array.from({ length: current.rating }).map((_, rIdx) => (
                    <span key={rIdx} className="text-lg">★</span>
                  ))}
                </div>
                
                <span className="inline-flex items-center space-x-1.5 py-1 px-3.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 font-mono text-[9px] text-brand-emerald uppercase font-bold tracking-wider self-start sm:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
                  <span>{current.achievement}</span>
                </span>
              </div>

              {/* Core Text quote */}
              <blockquote className="font-display font-medium text-lg sm:text-2xl md:text-3xl tracking-tight text-brand-charcoal leading-relaxed">
                "{current.content}"
              </blockquote>

              {/* Profile Image & Bio */}
              <div className="flex items-center space-x-4 border-t border-brand-sand/30 pt-6">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold/40 flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display font-bold text-base text-brand-charcoal">
                    {current.name}
                  </h4>
                  <p className="font-mono text-[10px] text-brand-gold uppercase tracking-wider mt-0.5">
                    {current.role}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Carousel Action Buttons */}
          <div className="flex items-center justify-end space-x-4 mt-8 pt-4 border-t border-brand-sand/30 z-10 w-full">
            {/* Index Counter info */}
            <span className="font-mono text-[11px] text-[#71717a] mr-4">
              <span className="font-bold text-brand-charcoal">{currentIndex + 1}</span> / {testimonials.length}
            </span>

            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-brand-beige hover:bg-brand-emerald hover:text-brand-pearl text-brand-charcoal border border-brand-sand transition-all cursor-pointer"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-brand-beige hover:bg-brand-emerald hover:text-brand-pearl text-brand-charcoal border border-brand-sand transition-all cursor-pointer"
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
