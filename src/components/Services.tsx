/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Compass, Crown, TrendingUp, Sparkles, MailCheck, Bell } from 'lucide-react';
import { Venture } from '../types';

interface ServicesProps {
  ventures: Venture[];
}

export default function Services({ ventures }: ServicesProps) {
  const [waitlistRegistered, setWaitlistRegistered] = useState<Record<string, boolean>>({});
  const [emails, setEmails] = useState<Record<string, string>>({});

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const handleWaitlistSubmit = (id: string, e: FormEvent) => {
    e.preventDefault();
    if (!emails[id] || !emails[id].includes('@')) return;
    
    setWaitlistRegistered(prev => ({ ...prev, [id]: true }));
  };

  const handleEmailChange = (id: string, val: string) => {
    setEmails(prev => ({ ...prev, [id]: val }));
  };

  return (
    <section id="ventures" className="relative py-20 px-4 md:px-8 bg-brand-beige overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Intro Branding header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-left space-y-4 mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-sand/60 border border-brand-sand rounded-full py-1 px-3">
            <Compass className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">
              Future V.H.H.C. Ecosystem
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal">
            The Horizon Ventures
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm md:text-base leading-relaxed">
            SweetNaomiRae’s is more than coffee. In synergy with the Virtual High-Performance Human Club (V.H.H.C.), we are constructing digital platforms, physical recovery sanctuaries, and mental performance clubs designed to guide personal transformation. Explore what is coming next:
          </p>
        </motion.div>

        {/* Ventures Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ventures.map((venture) => {
            const registered = waitlistRegistered[venture.id];
            const emailVal = emails[venture.id] || '';
            
            return (
              <motion.div
                key={venture.id}
                variants={cardVariants}
                className="flex flex-col justify-between p-8 bg-brand-pearl rounded-[36px] shadow-sm border border-[rgba(235,230,220,0.6)] relative group"
              >
                {/* Status Badging */}
                <div className="absolute top-6 right-6 flex items-center space-x-2 bg-brand-beige border border-brand-sand/40 rounded-full py-1 px-3">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    venture.status === 'Beta Active' ? 'bg-brand-emerald animate-pulse' : 'bg-brand-gold'
                  }`} />
                  <span className="font-mono text-[8px] uppercase tracking-wider font-bold text-brand-charcoal">
                    {venture.status}
                  </span>
                </div>

                <div className="space-y-6">
                   {/* Custom Styled Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-beige border border-brand-sand/50 text-brand-emerald flex items-center justify-center">
                    {venture.icon === 'Compass' ? <Compass className="w-6 h-6" /> : venture.icon === 'Crown' ? <Crown className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                  </div>

                  {/* Header Title */}
                  <div className="text-left">
                    <span className="font-mono text-[9px] text-brand-gold tracking-widest uppercase font-bold block">
                      {venture.tagline}
                    </span>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-brand-charcoal mt-1 group-hover:text-brand-emerald transition-colors">
                      {venture.title}
                    </h3>
                  </div>

                  <p className="font-sans text-[#52525b] text-xs md:text-sm leading-relaxed text-left">
                    {venture.description}
                  </p>
                </div>

                {/* WAITLIST WAIT FORM (Interactive element) */}
                <div className="pt-8 mt-8 border-t border-brand-sand/30">
                  {registered ? (
                    <div className="p-4 rounded-2xl bg-brand-emerald/10 border border-brand-emerald/20 text-[#0f5132] flex items-center space-x-3 text-left">
                      <MailCheck className="w-4 h-4 shrink-0 text-brand-emerald" />
                      <div>
                        <span className="font-display font-bold text-xs">Secured Priority Access!</span>
                        <p className="text-[10px] opacity-80 mt-0.5 leading-tight">We will alert you at your email as soon as beta allocations prepare.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={(e) => handleWaitlistSubmit(venture.id, e)} className="space-y-2">
                      <label className="font-mono text-[8px] text-[#71717a] uppercase tracking-widest font-bold block text-left">
                        Join Exclusive Waitlist
                      </label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={emailVal}
                          onChange={(e) => handleEmailChange(venture.id, e.target.value)}
                          className="flex-grow bg-brand-beige border border-brand-sand hover:border-brand-gold px-3.5 py-2 rounded-xl text-xs sm:text-xs font-sans placeholder-brand-sand-dark text-brand-charcoal focus:outline-none focus:ring-1 focus:ring-brand-emerald"
                          required
                        />
                        <button
                          type="submit"
                          className="p-2.5 rounded-xl bg-brand-charcoal text-brand-pearl hover:bg-brand-emerald hover:text-brand-pearl transition-all cursor-pointer flex-shrink-0"
                          aria-label="Submit waitlist application"
                        >
                          <Bell className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Global Partnership Badge CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="font-mono text-[10px] text-brand-gold uppercase tracking-[0.2em] font-semibold">
            V.H.H.C. Brand Alliance Partnership
          </p>
          <div className="inline-flex flex-wrap justify-center items-center gap-6 mt-6 p-4 px-8 rounded-full bg-brand-pearl border border-brand-sand/40 max-w-2xl mx-auto">
            <span className="font-display font-medium text-xs text-brand-charcoal">Columbia Bio Labs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-sand-dark"></span>
            <span className="font-display font-medium text-xs text-brand-charcoal">Sumatran Farmers Union</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-sand-dark"></span>
            <span className="font-display font-medium text-xs text-brand-charcoal">Legends Performance Network</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
