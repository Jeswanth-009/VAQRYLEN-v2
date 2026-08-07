import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Craft', href: '#discovery' },
  { label: 'Collection', href: '#design' },
  { label: 'Sustainability', href: '#problem' },
  { label: 'Experience', href: '#ritual' },
  { label: 'Pre-Order', href: '#preorder' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Track scroll for background blur and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    };
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#f5f1eb]/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <div className="flex items-center justify-between h-18 sm:h-20">
            
            {/* Logo */}
            <motion.a 
              href="/" 
              className="flex items-center gap-3 group"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.div 
                className="w-8 h-8 rounded-full border border-[#2c241b]/20 flex items-center justify-center group-hover:border-[#2c241b]/40 transition-colors duration-300"
                whileHover={{ rotate: 15 }}
              >
                <span className="text-[10px] font-serif text-[#2c241b]">V</span>
              </motion.div>
              <motion.span 
                className="font-serif text-xl sm:text-2xl text-[#2c241b] tracking-tight"
                whileHover={{ x: 2 }}
              >
                Vaqrylen
              </motion.span>
            </motion.a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="relative px-4 py-2 text-sm text-[#5c4f3d] hover:text-[#2c241b] transition-colors duration-300 group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ 
                      y: -1,
                      backgroundColor: "rgba(210, 175, 55, 0.05)"
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="relative flex items-center gap-1.5">
                      {link.label}
                      {/* Animated underline */}
                      <motion.span 
                        className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#8b7355] ${
                          isActive ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : '0%' }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  y: -1,
                  boxShadow: "0 15px 35px -10px rgba(196, 149, 58, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden bg-[#c4953a] hover:bg-[#b0852f] text-[#1a1a1a] px-7 py-2.5 rounded-full text-sm font-semibold tracking-tight transition-colors duration-300 shadow-sm group"
              >
                <motion.span
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative flex items-center gap-1.5">
                  Order Samples
                  <motion.span
                    className="inline-block"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <ArrowRight className="w-3 h-3" />
                  </motion.span>
                </span>
              </motion.button>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5 h-[1.5px] bg-[#2c241b]"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5 h-[1.5px] bg-[#2c241b]"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5 h-[1.5px] bg-[#2c241b]"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#f5f1eb] lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-serif text-[#2c241b] hover:text-[#8b7355] transition-colors group"
                  whileHover={{ x: 10, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="inline-block group-hover:translate-x-1 transition-transform"
                    whileHover={{ x: 5 }}
                  >
                    {link.label}
                  </motion.span>
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 bg-[#c4953a] text-[#1a1a1a] px-8 py-3 rounded-full text-base font-semibold group"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 35px -10px rgba(196, 149, 58, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center gap-1.5">
                  Order Samples
                  <motion.span whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't jump under fixed nav */}
      <div className="h-18 sm:h-20" />
    </>
  );
}
