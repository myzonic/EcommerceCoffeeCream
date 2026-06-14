/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, ShieldCheck, CreditCard, ChevronRight, Check } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number, selectedSize?: string) => void;
  onRemoveItem: (productId: string, selectedSize?: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [shippingAddress, setShippingAddress] = useState('');
  const [fullName, setFullName] = useState('');

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingThreshold = 75;
  const shippingCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 7.5;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingCost + tax;

  const handleCheckoutSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !shippingAddress) return;
    setCheckoutStep('success');
  };

  const handleReset = () => {
    onClearCart();
    setCheckoutStep('cart');
    setFullName('');
    setShippingAddress('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-charcoal z-50 cursor-pointer"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-brand-pearl z-50 shadow-2xl flex flex-col justify-between overflow-hidden border-l border-brand-sand/50"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-brand-sand/40 flex items-center justify-between bg-brand-beige">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-brand-emerald" />
                <h3 className="font-display font-bold text-lg text-brand-charcoal">
                  {checkoutStep === 'cart' && 'Your Dispatch Bag'}
                  {checkoutStep === 'checkout' && 'Elite Billing Dispatch'}
                  {checkoutStep === 'success' && 'Order Secured'}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-brand-sand/30 text-brand-charcoal transition-colors cursor-pointer"
                aria-label="Close cart drawer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Main Scrollable Content */}
            <div className="flex-grow p-6 overflow-y-auto space-y-6">
              
              {/* STEPS ROUTER */}
              {checkoutStep === 'cart' && (
                <>
                  {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                      <div className="p-4 rounded-full bg-brand-beige text-brand-sand-dark">
                        <ShoppingBag className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-display font-medium text-brand-charcoal">Your Bag is Empty</h4>
                        <p className="text-xs text-[#71717a] mt-1 max-w-[220px]">
                          Add premium roasts or custom fitness gear to dispatch your morning ritual.
                        </p>
                      </div>
                      <button
                        onClick={onClose}
                        className="py-2.5 px-6 rounded-full bg-brand-charcoal text-brand-pearl font-mono text-[10px] uppercase font-bold tracking-wider hover:bg-brand-emerald transition-colors cursor-pointer"
                      >
                        Keep Exploring
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Free Shipping Alert Pill */}
                      <div className="p-4 rounded-2xl bg-brand-beige border border-brand-sand/50 text-left">
                        {subtotal >= shippingThreshold ? (
                          <div className="flex items-center space-x-2 text-brand-emerald text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                            <span>Qualified for Premium Free Shipping</span>
                          </div>
                        ) : (
                          <div className="space-y-1.5">
                            <p className="text-[11px] text-[#52525b] leading-none">
                              Spend <span className="font-bold text-brand-charcoal">${shippingThreshold - subtotal}</span> more for Free Premium Shipping
                            </p>
                            <div className="w-full h-1.5 bg-brand-sand/50 rounded-full overflow-hidden">
                              <div
                                style={{ width: `${(subtotal / shippingThreshold) * 100}%` }}
                                className="h-full bg-brand-emerald rounded-full"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Items List */}
                      <div className="space-y-4">
                        {cart.map((item, idx) => (
                          <div
                            key={`${item.product.id}-${item.selectedSize || 'default'}`}
                            className="flex items-center space-x-4 p-4 rounded-2xl bg-brand-pearl border border-brand-sand/45 shadow-xs text-left"
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-16 h-16 rounded-xl object-cover border border-brand-sand flex-shrink-0"
                              referrerPolicy="no-referrer"
                            />
                            
                            <div className="flex-grow min-w-0">
                              <span className="font-mono text-[8px] text-brand-gold uppercase font-bold tracking-wider block">
                                {item.product.category} {item.selectedSize ? `• size ${item.selectedSize}` : ''}
                              </span>
                              <h4 className="font-display font-medium text-sm text-brand-charcoal truncate">
                                {item.product.name}
                              </h4>
                              <p className="font-mono text-xs text-brand-charcoal font-semibold mt-0.5">
                                ${item.product.price}.00
                              </p>

                              {/* Action increments */}
                              <div className="flex items-center justify-between mt-2 pt-1">
                                <div className="flex items-center space-x-2 border border-brand-sand bg-brand-beige/50 rounded-full px-2 py-0.5">
                                  <button
                                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1, item.selectedSize)}
                                    className="text-brand-charcoal hover:text-brand-emerald px-1.5 font-bold text-xs"
                                  >
                                    -
                                  </button>
                                  <span className="font-mono text-xs font-bold text-brand-charcoal px-1">{item.quantity}</span>
                                  <button
                                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1, item.selectedSize)}
                                    className="text-brand-charcoal hover:text-brand-emerald px-1.5 font-bold text-xs"
                                  >
                                    +
                                  </button>
                                </div>

                                <button
                                  onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                                  className="text-brand-sand-dark hover:text-[#dc3545] p-1 cursor-pointer"
                                  aria-label="Delete item from cart"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {checkoutStep === 'checkout' && (
                <form onSubmit={handleCheckoutSubmit} className="space-y-5 text-left">
                  <div className="p-4 rounded-2xl bg-brand-beige border border-brand-sand text-xs space-y-1">
                    <span className="font-mono text-[9px] text-brand-gold font-bold uppercase tracking-wider block">Elite Escrow</span>
                    <p className="text-zinc-600">You are placing a mock Order with SweetNaomiRae’s systems. No money is exchanged.</p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-brand-charcoal font-bold uppercase tracking-wider block">
                      Full Recipient Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Naomi Rae"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-brand-beige border border-brand-sand focus:border-brand-emerald px-4 py-3 rounded-xl text-xs placeholder-brand-sand-dark text-brand-charcoal focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-brand-charcoal font-bold uppercase tracking-wider block">
                      Delivery Address
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 100 Legend Plaza, Sector 4, CA"
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                      className="w-full bg-brand-beige border border-brand-sand focus:border-brand-emerald px-4 py-3 rounded-xl text-xs placeholder-brand-sand-dark text-brand-charcoal focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] text-brand-charcoal font-bold uppercase tracking-wider block">
                      Mock Security Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="•••• •••• •••• 4030"
                        className="w-full bg-brand-beige border border-brand-sand px-4 py-3 rounded-xl text-xs placeholder-brand-sand-dark text-brand-charcoal focus:outline-none"
                        disabled
                      />
                      <CreditCard className="absolute top-3.5 right-4 w-4 h-4 text-brand-sand-dark" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-emerald hover:bg-brand-emerald-dark text-brand-pearl font-display font-semibold text-xs tracking-wider uppercase shadow-md cursor-pointer transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Complete Dispatch Checkout • ${total.toFixed(2)}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {checkoutStep === 'success' && (
                <div className="text-center py-8 space-y-6">
                  {/* Luxury completed visual seal */}
                  <div className="w-20 h-20 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-10 h-10 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-[10px] text-brand-gold font-bold tracking-[0.25em] uppercase block">
                      PURCHASE DISPATCHED SECURELY
                    </span>
                    <h3 className="font-display font-medium text-2xl text-brand-charcoal">
                      Thank You, {fullName || 'Legend'}!
                    </h3>
                    <p className="text-xs text-[#52525b] max-w-xs mx-auto leading-relaxed">
                      Your order has been logged into our queue. An elegant box with POPS 4:30AM and custom gear drops will soon reach <span className="font-semibold text-brand-charcoal">{shippingAddress}</span>.
                    </p>
                  </div>

                  {/* Summary slip */}
                  <div className="p-6 rounded-2xl bg-brand-beige border border-brand-sand/50 text-left space-y-2 text-xs">
                    <div className="flex justify-between font-mono text-[9px] text-brand-gold font-bold uppercase border-b border-brand-sand/30 pb-2 mb-2">
                      <span>Receipt Verification</span>
                      <span>#SNRC-{Math.floor(Math.random() * 89999) + 10000}</span>
                    </div>
                    <div className="flex justify-between text-[#71717a]">
                      <span>Items Dispatched:</span>
                      <span className="font-mono text-brand-charcoal font-semibold">{cart.reduce((ac, it) => ac + it.quantity, 0)} units</span>
                    </div>
                    <div className="flex justify-between text-[#71717a]">
                      <span>Subtotal spent:</span>
                      <span className="font-mono text-brand-charcoal font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-[#71717a] border-b border-brand-sand/30 pb-2 mb-2">
                      <span>Pledge Contribution (10%):</span>
                      <span className="font-mono text-brand-emerald font-semibold">${(subtotal * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-sm text-brand-charcoal pt-1">
                      <span>Order Value:</span>
                      <span className="font-mono">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-3.5 rounded-full bg-brand-charcoal text-brand-pearl hover:bg-brand-emerald transition-colors font-display font-semibold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Clear Slate & Keep Browsing
                  </button>
                </div>
              )}

            </div>

            {/* Drawer Checkout Footer Summaries */}
            {cart.length > 0 && checkoutStep === 'cart' && (
              <div className="p-6 border-t border-brand-sand/40 bg-brand-beige space-y-4 shadow-inner text-left">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#71717a]">
                    <span>Item Subtotal:</span>
                    <span className="font-mono text-brand-charcoal font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#71717a]">
                    <span>10% Youth Gym Pledge:</span>
                    <span className="font-mono text-brand-emerald font-semibold">${(subtotal * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#71717a]">
                    <span>Premium Shipping:</span>
                    <span className="font-mono text-brand-charcoal font-semibold">
                      {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-[#71717a] border-b border-brand-sand/30 pb-2">
                    <span>Estimated Surcharges (TAX 8%):</span>
                    <span className="font-mono text-brand-charcoal font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-brand-charcoal pt-1">
                    <span>Order Total:</span>
                    <span className="font-mono">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutStep('checkout')}
                  className="w-full py-4 rounded-full bg-brand-charcoal hover:bg-brand-emerald text-brand-pearl hover:text-brand-pearl font-display font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-brand-emerald/10"
                >
                  <ShieldCheck className="w-4.5 h-4.5" />
                  <span>Secure Checkout Allocation</span>
                </button>
              </div>
            )}

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
