import React from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/src/lib/animations';

export default function Quote() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[#d4c5b0] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
        {/* Decorative line */}
        <motion.div
          className="w-12 h-[1px] bg-[#8b7355]/40 mx-auto mb-10"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p 
            className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] text-[#2c241b] leading-[1.35] sm:leading-[1.4]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Somewhere between the first sip and the last, most cups become trash.
            </motion.span>
            <motion.span 
              className="block mt-2 sm:mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              We wanted to build the one exception.
            </motion.span>
          </motion.p>
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          className="mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#8b7355]">
            — The idea behind Vaqrylen
          </p>
        </motion.div>

        {/* Animated decorative elements */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 -left-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-52 h-52 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>
    </section>
  );
}
