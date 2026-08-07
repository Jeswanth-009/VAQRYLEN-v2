import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplet, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-10 pb-20 lg:pt-20 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center" id="innovation">
      <div className="max-w-xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-mono text-xs font-semibold tracking-[0.2em] text-outline mb-6 uppercase"
          >
            The world's first multi-use edible cup
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-sora text-5xl sm:text-6xl lg:text-[64px] leading-[1.1] font-bold text-primary mb-6 text-balance">
              Sip. Bite.
              <br/>
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="text-secondary italic font-serif"
              >
                Sustain.
              </motion.span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-body-lg text-on-surface-variant mb-10 max-w-md"
          >
            We didn't just improve the cup. We reimagined it from nature. Experience the zero-waste vessel that holds your hot beverage perfectly, then becomes a delicious treat.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-on-primary px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300"
            >
              Explore The Cup
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="bg-transparent text-on-surface border-2 border-outline px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-secondary" />
              <span>Watch Video</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="relative w-full max-w-[480px]">
          
          {/* Video Container — fixed fill */}
          <div className="relative w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-[#e8e0d5] shadow-[0_20px_60px_-15px_rgba(30,26,22,0.2)]">
            <video 
              src="/assets/Coffee_poured_into_cup_202608070700.mp4"
              autoPlay 
              loop 
              muted 
              playsInline
              poster="/assets/cup.jpeg"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          {/* Floating Tag — Heat Safe */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute top-16 -left-4 sm:-left-8 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-soft flex items-center gap-3 border border-white/20"
          >
            <div className="bg-secondary/10 p-1.5 rounded-full text-secondary">
              <Flame className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-outline leading-none mb-1 uppercase">Heat Safe</p>
              <p className="text-sm font-semibold text-primary leading-none">95°C / 45m</p>
            </div>
          </motion.div>

          {/* Floating Tag — Nutritional */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute bottom-24 -right-4 sm:-right-6 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-soft flex items-center gap-3 border border-white/20"
          >
            <div className="bg-secondary/10 p-1.5 rounded-full text-secondary">
              <Droplet className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-outline leading-none mb-1 uppercase">Nutritional</p>
              <p className="text-sm font-semibold text-primary leading-none">100% Edible</p>
            </div>
          </motion.div>
        </div>

        {/* Background glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-primary-container/5 rounded-full blur-3xl -z-10" />
      </motion.div>
    </section>
  );
}