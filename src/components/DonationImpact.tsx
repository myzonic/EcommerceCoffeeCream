/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Globe, Sparkles, Sprout, ArrowRight } from 'lucide-react';
import { ImpactMilestone } from '../types';

interface DonationImpactProps {
  milestones: ImpactMilestone[];
}

export default function DonationImpact({ milestones }: DonationImpactProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<string>(milestones[0].id);
  const [userContribution, setUserContribution] = useState<number>(10); // $10 initial slide

  const activeMilestone = milestones.find(m => m.id === selectedMilestone) || milestones[0];

  // Dynamic impact calculator calculations
  const calculateYouthEquipmentDays = (value: number) => Math.round(value * 0.4); 
  const calculateFarmNutrientsSqm = (value: number) => Math.round(value * 1.5);

  return (
    <section id="impact" className="relative py-20 px-4 md:px-8 bg-brand-cream overflow-hidden scroll-mt-24">
      {/* Absolute green background elements matching theme */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-emerald/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* Intro header content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center md:text-left max-w-2xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 bg-brand-beige border border-brand-sand/50 rounded-full py-1 px-3.5">
            <Heart className="w-3.5 h-3.5 text-brand-emerald" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-charcoal font-bold">
              Purpose & Human Impact Chronicles
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-brand-charcoal leading-tight">
            Our Legacy Pledge: <br />
            <span className="text-brand-emerald">Expanding Human Frontiers</span>
          </h2>
          <p className="font-sans text-brand-charcoal/70 text-sm md:text-base leading-relaxed">
            At SweetNaomiRae’s, we believe success is empty if it does not empower others. We allocate exactly 10% of all signature package revenue directly to building physical fitness systems for underprivileged youths and empowering bio-dynamic farming families.
          </p>
        </motion.div>

        {/* Impact Segment Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-6">
          
          {/* Left Column: Interactive Milestone Progress trackers (Col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="font-mono text-[10px] text-brand-gold uppercase tracking-widest font-bold block text-left">
              Active Enterprise Investments
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {milestones.map((m) => {
                const isActive = selectedMilestone === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMilestone(m.id)}
                    className={`p-6 rounded-[28px] border text-left cursor-pointer transition-all ${
                      isActive
                        ? 'bg-brand-pearl border-brand-emerald shadow-md ring-1 ring-brand-emerald'
                        : 'bg-brand-pearl/50 border-brand-sand/50 hover:bg-brand-pearl hover:border-brand-emerald/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl ${
                        isActive ? 'bg-brand-emerald text-brand-pearl' : 'bg-brand-beige text-brand-emerald'
                      }`}>
                        {m.id.includes('youth') ? <Heart className="w-4.5 h-4.5" /> : <Sprout className="w-4.5 h-4.5" />}
                      </div>
                    </div>

                    <h3 className="font-display font-semibold text-sm sm:text-base text-brand-charcoal leading-tight">
                      {m.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Active Milestone Detailed Visual ProgressBar box */}
            <div className="p-8 bg-brand-pearl rounded-[36px] shadow-sm border border-brand-sand/40 text-left space-y-6">
              <div>
                <span className="font-mono text-[9px] text-[#71717a] uppercase block">ACTIVE TARGET PORTFOLIO</span>
                <h4 className="font-display font-bold text-lg md:text-xl text-brand-charcoal mt-0.5">
                  {activeMilestone.title}
                </h4>
                <p className="font-sans text-[#52525b] text-xs leading-relaxed mt-2">
                  {activeMilestone.description}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-xs text-brand-charcoal font-semibold">
                  <span>Current: ${activeMilestone.current.toLocaleString()} {activeMilestone.unit}</span>
                  <span>Goal: ${activeMilestone.target.toLocaleString()} {activeMilestone.unit}</span>
                </div>
                <div className="w-full h-3 bg-brand-beige border border-brand-sand/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${activeMilestone.percentage}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-brand-emerald rounded-full"
                  />
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Premium Interactive Impact Calculator Widget (Col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="p-8 bg-brand-charcoal text-white rounded-[36px] border border-brand-gold/15 shadow-xl text-left space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/10 rounded-full blur-2xl" />
              
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] text-brand-gold uppercase tracking-[0.2em] font-semibold block">THE IMPACT MULTIPLIER</span>
                <h3 className="font-display font-medium text-xl md:text-2xl tracking-tight leading-tight">
                  Simulate Your Impact
                </h3>
                <p className="text-brand-sand/65 text-xs">
                  Slide to select your intended annual coffee & merchandise spend. We will render exactly what value index passes directly back into our communities.
                </p>
              </div>

              {/* Slider Input */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-brand-sand/50 font-bold uppercase">Spend Slider</span>
                  <span className="text-brand-gold font-bold">${userContribution} spent / year</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={userContribution}
                  onChange={(e) => setUserContribution(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-brand-charcoal-light accent-brand-emerald border border-brand-gold/20 cursor-pointer"
                />
              </div>

              {/* Outputs cards */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-gold/10">
                <div className="p-4 rounded-2xl bg-brand-charcoal-light border border-brand-gold/5 flex flex-col justify-between">
                  <Heart className="w-4 h-4 text-brand-emerald mb-4 shrink-0" />
                  <div>
                    <h5 className="font-mono text-[8px] text-brand-sand/40 uppercase font-semibold">Allocated Base</h5>
                    <span className="font-display font-bold text-xl text-white block mt-0.5">${(userContribution * 0.1).toFixed(2)}</span>
                    <p className="text-[9px] text-brand-sand/55 leading-none mt-1">10% pledge value</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-charcoal-light border border-brand-gold/5 flex flex-col justify-between">
                  <Globe className="w-4 h-4 text-brand-gold mb-4 shrink-0" />
                  <div>
                    <h5 className="font-mono text-[8px] text-brand-sand/40 uppercase font-semibold">Equates To</h5>
                    <span className="font-display font-bold text-xl text-white block mt-0.5">
                      {selectedMilestone.includes('youth') 
                        ? `${calculateYouthEquipmentDays(userContribution)} days`
                        : `${calculateFarmNutrientsSqm(userContribution)} sqm`
                      }
                    </span>
                    <p className="text-[9px] text-brand-sand/55 leading-none mt-1">
                      {selectedMilestone.includes('youth') 
                        ? 'Youth fitness sessions funded'
                        : 'Dynamic pesticide-free soil'
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Final mini-call to action banner */}
              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[9px] text-brand-sand/40">Secure a legendary tomorrow, today.</span>
                <span className="inline-flex items-center space-x-1.5 text-brand-gold text-xs font-bold uppercase tracking-wider">
                  <span>Start Small</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
