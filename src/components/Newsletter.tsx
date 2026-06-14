/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, CheckCircle, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative py-24 px-4 md:px-8 bg-brand-cream overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-emerald/3 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Newsletter Core panel (Glassmorphism dark elegant theme) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 md:p-16 rounded-[44px] bg-brand-charcoal text-white border border-brand-gold/25 shadow-2xl relative overflow-hidden text-center justify-center items-center"
        >
          
          {/* Accent lighting rays */}
          <div className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-brand-emerald/10 rounded-full blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="signup-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Gold Crest signet */}
                <div className="inline-flex items-center space-x-2 bg-brand-charcoal-light border border-brand-gold/20 rounded-full py-1.5 px-4 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-gold" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-gold font-bold">
                    The Legends Dispatch
                  </span>
                </div>

                {/* Typography Header */}
                <div className="space-y-3">
                  <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#fbf9f5] leading-none">
                    Claim Priority Allocation
                  </h2>
                  <p className="font-sans text-brand-sand/65 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                    Our micro-lot coffee bags and performance gear drops are produced in heavily restricted quotas. Subscribe to receive immediate allocations, early-club notifications, and exclusive V.H.H.C. mentoring keys.
                  </p>
                </div>

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                  {/* Name field */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your First Name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      onFocus={() => setActiveInput('name')}
                      onBlur={() => setActiveInput(null)}
                      className={`w-full bg-brand-charcoal-light/60 border rounded-2xl px-5 py-4 text-stone-200 text-sm focus:outline-none transition-all placeholder-brand-sand/35 leading-tight ${
                        activeInput === 'name' ? 'border-brand-emerald ring-1 ring-brand-emerald bg-brand-charcoal-light' : 'border-brand-gold/15'
                      }`}
                      required
                    />
                  </div>

                  {/* Email fields container with arrow submission button */}
                  <div className="relative flex flex-col sm:flex-row items-stretch gap-2.5">
                    <div className="relative flex-grow">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setActiveInput('email')}
                        onBlur={() => setActiveInput(null)}
                        className={`w-full bg-brand-charcoal-light/60 border rounded-2xl px-5 py-4 text-stone-200 text-sm focus:outline-none transition-all placeholder-brand-sand/35 leading-tight ${
                          activeInput === 'email' ? 'border-brand-emerald ring-1 ring-brand-emerald bg-brand-charcoal-light' : 'border-brand-gold/15'
                        }`}
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="py-4 px-8 rounded-2xl bg-brand-emerald text-brand-pearl hover:bg-brand-emerald-light transition-all font-display font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shrink-0 cursor-pointer shadow-lg shadow-brand-emerald/10 hover:shadow-brand-emerald/20"
                    >
                      <span>Secure Access</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>

                {/* Double-Checked security line */}
                <div className="flex items-center justify-center space-x-2 text-[#71717a] text-[10px] font-mono">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>No spam queries. Unsubscribe with a single click anytime.</span>
                </div>

              </motion.div>
            ) : (
              <motion.div
                key="signup-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 py-6"
              >
                {/* Success Crest and Badge */}
                <div className="w-16 h-16 rounded-full bg-brand-emerald/20 border border-brand-emerald/30 text-brand-emerald flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-brand-gold tracking-[0.25em] block uppercase font-bold">
                    VIP SECURED STATUS • LEVEL 01
                  </span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-[#fbf9f5]">
                    Welcome, {userName || 'Legend'}
                  </h3>
                  <p className="font-sans text-brand-sand/70 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                    We've registered your priority line at <span className="font-mono text-brand-gold font-semibold">{email}</span>. You'll receive primary notification 2 hours in advance of the next micro-lot coffee release.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-brand-charcoal-light/60 border border-brand-gold/10 inline-block">
                  <span className="font-mono text-[10px] text-brand-sand/50 uppercase">Pre-Launch Position</span>
                  <div className="font-display font-bold text-2xl text-brand-gold mt-1">#4,213 of 10,000</div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
