/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Leaf, Brain, Activity, Users, ArrowUpRight } from 'lucide-react';

interface StatElement {
  id: string;
  label: string;
  value: string;
  sub: string;
  detail: string;
  icon: any;
}

export default function WhyChoose() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const stats: StatElement[] = [
    {
      id: 's1',
      label: '4:30 AM Club',
      value: '8,420+',
      sub: 'ACTIVE MEMBERS',
      detail: 'A worldwide community of high-performing humans executing dawn routines collectively.',
      icon: Users
    },
    {
      id: 's2',
      label: 'Adaptogenic Infusion',
      value: '+42%',
      sub: 'COGNITIVE FOCUS',
      detail: 'Independently balanced L-Theanine adaptogen metrics supporting visual and motor stamina.',
      icon: Brain
    },
    {
      id: 's3',
      label: 'Direct Agriculture',
      value: '1.2M+',
      sub: 'VOLCANIC SOILS SQM',
      detail: 'Protecting wild bio-diverse Colombian mountains from high-toxicity pesticides and erosion.',
      icon: Leaf
    },
    {
      id: 's4',
      label: 'Slogan Metric',
      value: '100%',
      sub: 'LEGEND GUARANTEE',
      detail: 'Zero artificial additives, single-origin integrity, and zero acidic coffee crash.',
      icon: Award
    }
  ];

  return (
    <section id="why-us" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden">
      {/* Visual background sand grid */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <svg className="w-full h-full text-brand-sand-dark" fill="none">
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Asymmetrical Left-Aligned Header Block */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16"
        >
          <div className="lg:col-span-8 text-left space-y-4">
            <div className="inline-flex items-center space-x-2 bg-brand-beige border border-brand-sand/50 rounded-full py-1 px-3">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-emerald" />
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">
                Standards of Meticulous Quality
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal leading-tight">
              Why Professionals Fuel <br />
              With <span className="text-brand-emerald">SweetNaomiRae’s</span>
            </h2>
          </div>
          
          <div className="lg:col-span-4 text-left pt-2">
            <p className="font-sans text-[#52525b] text-sm leading-relaxed">
              We threw out traditional production blueprints to build a brand integrated directly with elite athletic metrics and business focus standards. Every roasting batch is treated as a cognitive performance element.
            </p>
          </div>
        </motion.div>

        {/* Dynamic Statistics & Illustration Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="p-8 bg-brand-pearl rounded-[32px] border border-brand-sand/40 shadow-sm flex flex-col justify-between space-y-8 text-left transition-all duration-300 hover:shadow-lg relative overflow-hidden group hover:border-brand-emerald/30 h-full cursor-pointer"
              >
                {/* Background active decorative bubble */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-emerald/3 rounded-full blur-xl group-hover:bg-brand-emerald/10 transition-colors pointer-events-none" />

                <div className="space-y-4">
                  {/* Icon wrap */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isHovered ? 'bg-brand-emerald text-brand-pearl' : 'bg-brand-beige text-brand-emerald'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-brand-gold tracking-widest uppercase font-bold block">
                      {stat.sub}
                    </span>
                    <h3 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal">
                      {stat.value}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 border-t border-brand-sand/30 pt-4">
                  <h4 className="font-display font-bold text-sm text-brand-charcoal">
                    {stat.label}
                  </h4>
                  <p className="font-sans text-[#71717a] text-xs leading-relaxed">
                    {stat.detail}
                  </p>
                </div>

                <div className="absolute bottom-4 right-4 text-brand-sand/40 group-hover:text-brand-emerald opacity-0 group-hover:opacity-100 transition-all">
                  <ArrowUpRight className="w-4 h-4 translate-y-1 group-hover:translate-y-0 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Overlapping Illustration Visual Story Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-beige p-8 md:p-12 rounded-[40px] border border-brand-sand/50 text-left relative overflow-hidden"
        >
          <div className="lg:col-span-4 shrink-0 text-left space-y-4 relative z-10">
            <span className="font-mono text-[9px] text-brand-gold uppercase tracking-[0.2em] font-semibold block">THE EXTRACTION TECHNIQUE</span>
            <h3 className="font-display font-medium text-2xl md:text-3xl tracking-tight text-brand-charcoal">
              Engineered For Stamina and Mind Clarity.
            </h3>
            <p className="font-sans text-[#52525b] text-xs leading-relaxed">
              Standard commercial coffees are roasted fast at extreme high heats, melting dynamic organic acids and leaving oil impurities that irritate the stomach and prompt afternoon crashes. 
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10 pl-0 lg:pl-8">
            <div className="p-6 rounded-3xl bg-brand-pearl border border-brand-sand/30 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-brand-emerald/10 text-brand-emerald flex items-center justify-center font-bold text-sm mb-3">s</div>
              <h4 className="font-display font-bold text-sm text-brand-charcoal">Triple-Cold Decant Filters</h4>
              <p className="text-[11px] text-[#71717a] leading-normal mt-1">Our roasting incorporates real-time thermal decanting, scrubbing excess silver-skin chaff before it burns and creates rancid acid profiles.</p>
            </div>

            <div className="p-6 rounded-3xl bg-brand-pearl border border-brand-sand/30 shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-brand-gold/10 text-brand-gold flex items-center justify-center font-bold text-sm mb-3">a</div>
              <h4 className="font-display font-bold text-sm text-brand-charcoal">Active Performance Testing</h4>
              <p className="text-[11px] text-[#71717a] leading-normal mt-1">We evaluate batches directly alongside athletic cardio outputs, adjusting molecular lock densities until focus-stamina matches peak oxygen-flow metrics.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
