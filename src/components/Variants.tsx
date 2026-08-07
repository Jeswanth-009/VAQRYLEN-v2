import React from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/src/lib/animations';

const variants = [
  {
    id: 'classic',
    name: 'Classic Husk',
    material: 'Upcycled Cereal Husks',
    flavor: 'Light nuttiness, toasted malt',
    price: 'contact for pricing',
    pack: '10 - Pack',
    image: '/assets/Classic Husk.jpeg'
  },
  {
    id: 'ripple',
    name: 'Ripple Leaf',
    material: 'Plant-based leaf biomaterial',
    flavor: 'Fresh green tea, slightly herbal',
    price: 'contact for pricing',
    pack: '10 - Pack',
    image: '/assets/Ripple Leaf.jpeg'
  },
  {
    id: 'lotus',
    name: 'Lotus Fiber',
    material: 'Woven Palm Fiber Composite',
    flavor: 'Subtle honey, spiced wood',
    price: 'contact for pricing',
    pack: '10 - Pack',
    image: '/assets/Lotus Fiber.jpeg'
  },
  {
    id: 'crystal',
    name: 'Crysta Starch',
    material: 'Plant starch biopolymer',
    flavor: 'Pure coffee, minimal interference',
    price: 'contact for pricing',
    pack: '10 - Pack',
    image: '/assets/Crysta Starch.jpeg'
  }
];

export default function Variants() {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 lg:py-32 bg-[#fafaf9]"
      id="design"
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.h2 
            className="font-sora text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-800 mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Four cups. One clean conscience.
          </motion.h2>
          <motion.p 
            className="font-sora text-xs text-[#6b7a5a] tracking-[0.2em] uppercase"
            initial={{ opacity: 0, y: 15 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Each variant is pressed from a distinct natural material, giving your brew its own signature character and texture.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {variants.map((variant, index) => (
            <motion.div 
              key={variant.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={sectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.7, 
                delay: 0.2 + index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group cursor-pointer flex flex-col bg-white rounded-2xl p-4 shadow-sm hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -12, scale: 1.03 }}
            >
              {/* Image Container */}
              <motion.div 
                className="aspect-[4/5] rounded-xl overflow-hidden mb-5 relative bg-stone-100"
                whileHover={{ rotate: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <motion.img 
                  src={variant.image} 
                  alt={variant.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                />
                {/* Shine overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/20 to-white/0 opacity-0"
                  animate={sectionInView ? { opacity: [0, 0.3, 0] } : { opacity: 0 }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                />
              </motion.div>
              
              {/* Text Content */}
              <motion.div 
                className="flex flex-col flex-1 px-1"
                initial={{ opacity: 0 }}
                animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <motion.h3 
                  className="font-sora font-bold text-stone-800 text-lg mb-1 tracking-tight"
                  whileHover={{ x: 5 }}
                >
                  {variant.name}
                </motion.h3>
                <p className="font-mono text-[11px] text-stone-500 mb-3 leading-relaxed">
                  {variant.material}
                </p>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-sm text-stone-600 italic">
                      {variant.flavor}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sora font-bold text-stone-900 text-lg">
                      {variant.price}
                    </span>
                    <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider">
                      {variant.pack}
                    </span>
                  </div>

                  {/* Add Button */}
                  <motion.button 
                    className="w-full bg-stone-100 group-hover:bg-stone-800 text-stone-800 group-hover:text-white py-3 rounded-full text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <motion.span 
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      animate={{ x: [0, 0] }}
                      whileHover={{ x: 5 }}
                    >
                      Add
                    </motion.span>
                    <motion.span 
                      className="transition-transform duration-300"
                      whileHover={{ x: [0, 3, 0], scale: [1, 1.2, 1] }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
