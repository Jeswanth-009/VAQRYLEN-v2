import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/src/lib/animations';

const layers = [
  { id: 'outer', title: 'Outer Texture', desc: 'Roasted Natural Grains', color: '#b98a52' },
  { id: 'binding', title: 'Binding Layer', desc: 'Tamarind Seed Gum', color: '#8b5a2b' },
  { id: 'insulation', title: 'Insulation Layer', desc: 'Coconut Fiber', color: '#d9c19c' },
  { id: 'strength', title: 'Strength Layer', desc: 'Rice Bran + Millet', color: '#6e4822' },
  { id: 'flavor', title: 'Flavor Lock', desc: 'Tamarind + Jaggery', color: '#3b1f12' },
];

export default function Anatomy() {
  const [active, setActive] = useState<string | null>(null);
  const [sectionRef, sectionInView] = useInView(0.1);
  const isDim = (id: string) => active && active !== id;

  // Mathematically perfect layers for a clean, smooth cup
  const dims = [
    { path: "M 80 40 L 120 280 C 120 295, 280 295, 280 280 L 320 40 Z", rx: 120, ry: 20 },
    { path: "M 90 40 L 124 270 C 124 284, 276 284, 276 270 L 310 40 Z", rx: 110, ry: 18 },
    { path: "M 100 40 L 128 260 C 128 273, 272 273, 272 260 L 300 40 Z", rx: 100, ry: 16 },
    { path: "M 110 40 L 132 250 C 132 262, 268 262, 268 250 L 290 40 Z", rx: 90, ry: 14 },
    { path: "M 120 40 L 136 240 C 136 251, 264 251, 264 240 L 280 40 Z", rx: 80, ry: 12 }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#fafaf9] py-16 sm:py-20"
      id="anatomy"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Cup Cross-Section */}
          <motion.div 
            className="flex justify-center order-2 md:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <svg viewBox="0 0 400 340" className="w-full max-w-[260px] drop-shadow-[0_15px_20px_rgba(0,0,0,0.08)]">
              <ellipse cx="200" cy="310" rx="100" ry="10" fill="#000" opacity="0.05" />
              
              {layers.map((layer, i) => (
                <motion.g 
                  key={layer.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={sectionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  {/* Top Rim */}
                  <motion.ellipse 
                    cx="200" cy="40" rx={dims[i].rx} ry={dims[i].ry} 
                    fill={layer.color} 
                    style={{ opacity: isDim(layer.id) ? 0.25 : 1, transition: 'opacity .3s' }}
                  />
                  {/* Wall */}
                  <motion.path 
                    d={dims[i].path} 
                    fill={layer.color} 
                    style={{ 
                      opacity: isDim(layer.id) ? 0.25 : 1, 
                      transition: 'opacity .3s', cursor: 'pointer' 
                    }}
                    onMouseEnter={() => setActive(layer.id)}
                    onMouseLeave={() => setActive(null)}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.g>
              ))}
              {/* Rim Outline for definition */}
              <ellipse cx="200" cy="40" rx="120" ry="20" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* Interactive Layer List */}
          <div className="flex flex-col gap-1 order-1 md:order-2 w-full">
            <motion.h2 
              className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 mb-4"
              initial={{ opacity: 0, x: 20 }}
              animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Unique Structure 
            </motion.h2>
            
            {layers.map((layer, i) => {
              const isActive = active === layer.id;
              return (
                <motion.div
                  key={layer.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  onMouseEnter={() => setActive(layer.id)}
                  onMouseLeave={() => setActive(null)}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive ? 'bg-white shadow-sm border border-stone-100' : 'border border-transparent'
                  }`}
                  style={{ opacity: isDim(layer.id) ? 0.4 : 1 }}
                   whileHover={{ 
                     x: 5,
                     scale: 1.02,
                     backgroundColor: "rgba(255,255,255,0.9)",
                     boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                   }}
                >
                  <motion.div 
                    className="w-1.5 h-10 rounded-full flex-shrink-0"
                    style={{ background: layer.color }}
                    animate={{ 
                      scale: isActive ? 1.2 : 1,
                      opacity: isActive ? 1 : 0.7
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                  <div>
                    <motion.h3 
                      className="font-sans font-bold text-stone-800 text-sm tracking-tight"
                      animate={{ color: isActive ? "#1a1a1a" : "#444" }}
                    >
                      {layer.title}
                    </motion.h3>
                    <p className="font-mono text-stone-400 text-xs mt-0.5">{layer.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
