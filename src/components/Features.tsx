import React from 'react';
import { Leaf, ShieldCheck, Sun } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from '@/src/lib/animations';

const ingredients = [
  { icon: Leaf, title: 'Tamarind Seed Gum', desc: 'Natural binder, heat resistant', color: 'text-secondary' },
  { icon: ShieldCheck, title: 'Rice Bran & Millet', desc: 'Strength & structure', color: 'text-secondary' },
  { icon: Sun, title: 'Jaggery', desc: 'Natural sweetness & flavor', color: 'text-secondary' },
];

export default function Features() {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <motion.section
      ref={sectionRef}
      initial="initial"
      animate={sectionInView ? 'animate' : 'initial'}
      className="py-20 lg:py-32"
      id="structure"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Left Column - Ingredients */}
        <motion.div 
          className="lg:col-span-7 bg-surface-container-low rounded-3xl shadow-soft overflow-hidden min-h-[500px] lg:min-h-[560px] flex flex-col lg:flex-row"
          initial={{ opacity: 0, x: -40 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          
          {/* Text Content — clean left side, no overlap */}
          <div className="lg:w-[45%] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <motion.span 
              className="inline-block bg-secondary-fixed text-secondary-fixed-variant px-3 py-1 rounded-full text-xs font-mono font-medium mb-6 w-fit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Nature's Superpowers
            </motion.span>
            
            <motion.h2 
              className="font-sora text-3xl sm:text-4xl font-bold text-primary mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              One Iconic<br/>Cup.
            </motion.h2>
            
            <div className="space-y-6">
              {ingredients.map((ingredient, i) => (
                <motion.div
                  key={ingredient.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div 
                    className="mt-1 shrink-0"
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <ingredient.icon className={`w-5 h-5 ${ingredient.color}`} />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="font-semibold text-primary"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {ingredient.title}
                    </motion.h3>
                    <p className="text-sm text-on-surface-variant">{ingredient.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Cup Image — proper column, fills right side */}
          <motion.div 
            className="lg:w-[55%] p-4 lg:p-6 lg:pl-0 flex items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <motion.div 
              className="w-full h-full min-h-[300px] lg:min-h-0 rounded-2xl overflow-hidden shadow-soft relative group"
              whileHover={{ 
                scale: 1.02,
                rotate: 0.5,
                boxShadow: "0 30px 60px -15px rgba(1, 45, 29, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.img 
                src="/assets/cup.jpeg" 
                alt="the cup"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - The Seal */}
        <motion.div 
          className="lg:col-span-5 bg-primary rounded-3xl p-8 sm:p-12 flex flex-col overflow-hidden relative min-h-[500px] lg:min-h-[560px]"
          initial={{ opacity: 0, x: 40 }}
          animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="relative z-10">
            <motion.h2 
              className="font-sora text-3xl sm:text-4xl font-bold text-on-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The<br/>Vaqrylen<br/>Seal
            </motion.h2>
            <motion.p 
              className="text-on-primary-container max-w-xs text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Our signature pressed edible base mark guarantees authenticity and quality.
            </motion.p>
          </div>
          
          {/* Seal — centered, with light background so it's visible */}
          <div className="flex-1 flex items-center justify-center relative z-10 mt-8">
            <motion.div 
              className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#f5f1eb] shadow-[0_8px_40px_rgba(0,0,0,0.3)] p-3"
              whileHover={{ 
                rotate: 15,
                scale: 1.05,
                boxShadow: "0 20px 60px -10px rgba(212, 175, 55, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div 
                className="w-full h-full rounded-full overflow-hidden border-2 border-[#d4af37]/40"
                whileHover={{ rotate: -15, border: "2px solid #d4af37/60" }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <motion.img 
                  src="/assets/logo.jpeg"
                  alt="Vaqrylen Seal"
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50 z-0"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.6, 0.5]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
