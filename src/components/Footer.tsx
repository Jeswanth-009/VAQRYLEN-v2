import React, { useState } from 'react';
import { Leaf, Droplet, ShieldCheck, ChevronDown, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from '@/src/lib/animations';
import { submitInquiry } from '@/src/lib/forms';

export default function Footer() {
  const [ref, isInView] = useInView(0.1);
  const [form, setForm] = useState({ name: '', email: '', type: 'Wholesale Order' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || status === 'submitting') return;
    setStatus('submitting');
    try {
      await submitInquiry({
        name: form.name.trim(),
        email: form.email.trim(),
        inquiryType: form.type,
        timestamp: new Date().toISOString(),
      });
      setStatus('success');
      setForm({ name: '', email: '', type: 'Wholesale Order' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <motion.footer 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-primary text-on-primary pt-20 pb-10 rounded-t-[40px] lg:rounded-t-[80px] mt-20"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl"
          >
            <motion.h2 
              className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Where Hospitality Meets <span className="text-secondary-container">Sustainability</span>
            </motion.h2>
            <motion.p 
              className="text-on-primary-container text-lg mb-10 max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Ready to elevate your cafe's experience and eliminate waste? Join the revolution of edible drinkware.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-6 font-mono text-xs tracking-wider uppercase font-semibold text-secondary-container"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Leaf className="w-4 h-4" />
                <span>100% Natural</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <Droplet className="w-4 h-4" />
                <span>Plastic Free</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Made in India</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-start lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div 
              id="sample-request-form"
              className="bg-primary-container p-8 rounded-3xl w-full max-w-md border border-on-primary/10"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 60px -10px rgba(27, 67, 50, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <motion.div 
                  className="flex flex-col gap-1.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-on-primary-container">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Cafe or Business Name"
                    className="bg-white px-4 py-3 rounded-lg text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent placeholder:text-outline-variant transition-all"
                  />
                </motion.div>
                <motion.div 
                  className="flex flex-col gap-1.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-on-primary-container">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="hello@example.com"
                    className="bg-white px-4 py-3 rounded-lg text-on-surface text-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent placeholder:text-outline-variant transition-all"
                  />
                </motion.div>
                <motion.div 
                  className="flex flex-col gap-1.5"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="type" className="font-mono text-[10px] uppercase tracking-widest text-on-primary-container">Inquiry Type</label>
                  <div className="relative">
                    <select 
                      id="type"
                      value={form.type}
                      onChange={(e) => handleChange('type', e.target.value)}
                      className="bg-white px-4 py-3 rounded-lg text-on-surface text-sm w-full appearance-none focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    >
                      <option>Wholesale Order</option>
                      <option>Partnership</option>
                      <option>Media Inquiry</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-outline absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </motion.div>
                <motion.button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="mt-2 bg-secondary text-on-secondary py-3.5 rounded-lg font-semibold hover:bg-[#6b472a] transition-colors shadow-soft flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 40px -10px rgba(128, 85, 51, 0.3)"
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send className="w-4 h-4" />
                  {status === 'submitting' ? 'Sending...' : 'Request Samples'}
                </motion.button>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className={`text-sm font-medium ${status === 'error' ? 'text-red-300' : status === 'success' ? 'text-secondary-container' : ''}`}
                  aria-live="polite"
                >
                  {status === 'success' && 'Thanks! We\'ll get back to you shortly.'}
                  {status === 'error' && 'Something went wrong. Please try again.'}
                </motion.p>
              </form>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-on-primary/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.div 
            className="font-sora text-xl font-bold tracking-tight text-white"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            VAQRYLEN
          </motion.div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {[
              { label: 'Sustainability', href: '#problem' },
              { label: 'Our Story', href: '#discovery' },
              { label: 'Wholesale', href: '#preorder' },
              { label: 'Contact', href: '#preorder' }
            ].map((link, i) => (
              <motion.a 
                key={link.label}
                href={link.href}
                className="text-sm text-on-primary-container hover:text-white transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="text-xs text-on-primary-container/80"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            © 2026 VAQRYLEN. Made from Nature, For Nature.
          </motion.div>
        </motion.div>

      </div>
    </motion.footer>
  );
}
