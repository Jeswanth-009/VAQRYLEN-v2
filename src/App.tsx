import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { Flame, Droplet, Play, ArrowRight, ChevronDown, Sparkles, Leaf, ShieldCheck, Sun, Clock, Users, CheckCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Floating people counter component
const PeopleViewing = () => {
  const [viewers, setViewers] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-6 left-6 z-50 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/20 flex items-center gap-3"
    >
      <div className="relative">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
      </div>
      <div>
        <p className="text-xs font-medium text-primary">{viewers} people viewing</p>
        <p className="text-[10px] text-on-surface-variant">Limited stock available</p>
      </div>
    </motion.div>
  );
};

// Enhanced Hero with full-screen immersive design
const Hero = ({ onExplore }: { onExplore: () => void }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="innovation">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-secondary-container opacity-20" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-secondary/30 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            y: [null, Math.random() * -200 - 100],
            opacity: [0, 0.6, 0],
            x: Math.random() * window.innerWidth
          }}
          transition={{ 
            duration: Math.random() * 10 + 15, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
        />
      ))}

      <div className="max-w-[1400px] mx-auto px-5 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          style={{ y, opacity }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-mono text-xs font-semibold tracking-[0.3em] text-outline mb-8 uppercase"
            >
              The world's first multi-use edible cup
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-sora text-6xl sm:text-7xl lg:text-8xl leading-[1.05] font-bold text-primary mb-8">
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
              className="text-body-lg text-on-surface-variant mb-12 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed"
            >
              We didn't just improve the cup. We reimagined it from nature. Experience the zero-waste vessel that holds your hot beverage perfectly at 95°C for 45 minutes, then becomes a delicious treat.
            </motion.p>

            <motion.div 
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                onClick={onExplore}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-on-primary px-10 py-4 rounded-full text-base font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <span>Pre-Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white/80 backdrop-blur-sm text-primary border-2 border-primary/20 px-10 py-4 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-3 hover:bg-white"
              >
                <Play className="w-4 h-4 text-secondary fill-secondary" />
                <span>Watch Film</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right Content - Product Showcase */}
        <motion.div 
          style={{ scale }}
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[520px]">
            {/* Main video container with glassmorphism */}
            <motion.div 
              className="relative w-full aspect-[3/4] rounded-[3rem] overflow-hidden bg-[#e8e0d5] shadow-[0_40px_120px_-30px_rgba(1,45,29,0.3)] border-4 border-white/30"
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
            >
              <video 
                src="/assets/Coffee_poured_into_cup_202608070700.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/assets/cup.jpeg"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Glass overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            
            {/* Floating Badge — Heat Safe */}
            <motion.div 
              initial={{ opacity: 0, x: -40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              className="absolute top-20 -left-8 sm:-left-12 bg-white/95 backdrop-blur-xl px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/40"
            >
              <motion.div 
                className="bg-secondary/15 p-2.5 rounded-full text-secondary"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              >
                <Flame className="w-5 h-5" />
              </motion.div>
              <div>
                <p className="text-[10px] font-mono text-outline leading-none mb-1.5 uppercase tracking-wider">Heat Safe</p>
                <p className="text-lg font-bold text-primary leading-none">95°C / 45m</p>
              </div>
            </motion.div>

            {/* Floating Badge — Nutritional */}
            <motion.div 
              initial={{ opacity: 0, x: 40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, type: "spring" }}
              className="absolute bottom-32 -right-6 sm:-right-10 bg-white/95 backdrop-blur-xl px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/40"
            >
              <motion.div 
                className="bg-secondary/15 p-2.5 rounded-full text-secondary"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Droplet className="w-5 h-5" />
              </motion.div>
              <div>
                <p className="text-[10px] font-mono text-outline leading-none mb-1.5 uppercase tracking-wider">100% Edible</p>
                <p className="text-lg font-bold text-primary leading-none">Zero Waste</p>
              </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <p className="text-xs font-mono text-outline uppercase tracking-widest">Scroll to explore</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="w-5 h-5 text-outline" />
              </motion.div>
            </motion.div>
          </div>

          {/* Background glow effects */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

// Bento Grid Features Section
const Features = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.section
      ref={ref as any}
      className="py-32 lg:py-40 bg-gradient-to-b from-transparent to-surface-container"
      id="structure"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-secondary-fixed text-secondary-fixed-variant px-4 py-1.5 rounded-full text-xs font-mono font-medium mb-6"
          >
            Nature's Superpowers
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            Engineered by<br/>Nature
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Four powerful natural ingredients work in harmony to create the world's first truly sustainable cup.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Feature Card - Tamarind */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 lg:row-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative"
            whileHover={{ y: -8 }}
          >
            <div className="relative z-10">
              <motion.div 
                className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Leaf className="w-7 h-7 text-secondary" />
              </motion.div>
              
              <h3 className="font-sora text-3xl font-bold text-primary mb-3">Tamarind Seed Gum</h3>
              <p className="text-on-surface-variant mb-6 max-w-md">Natural binder with exceptional heat resistance. Creates the structural foundation that keeps your beverage hot without compromising.</p>
              
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-primary font-medium">Heat resistant to 95°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-secondary" />
                  <span className="text-primary font-medium">100% biodegradable</span>
                </div>
              </div>
            </div>
            
            {/* Background image overlay */}
            <div className="absolute right-0 bottom-0 w-1/2 h-3/4 opacity-10 group-hover:opacity-15 transition-opacity duration-500">
              <img src="/assets/Classic Husk.jpeg" alt="" className="w-full h-full object-cover rounded-tl-3xl" />
            </div>
          </motion.div>

          {/* Medium Feature Card - Rice Bran */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group text-white overflow-hidden relative"
            whileHover={{ y: -8 }}
          >
            <motion.div 
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5"
              whileHover={{ rotate: -10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ShieldCheck className="w-6 h-6" />
            </motion.div>
            
            <h3 className="font-sora text-2xl font-bold mb-3">Rice Bran & Millet</h3>
            <p className="text-white/80 text-sm leading-relaxed">Provides strength and structure. Upcycled agricultural byproducts transformed into durable vessel walls.</p>
            
            {/* Decorative circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          </motion.div>

          {/* Medium Feature Card - Jaggery */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gradient-to-br from-secondary to-amber-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group text-white overflow-hidden relative"
            whileHover={{ y: -8 }}
          >
            <motion.div 
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-5"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sun className="w-6 h-6" />
            </motion.div>
            
            <h3 className="font-sora text-2xl font-bold mb-3">Jaggery</h3>
            <p className="text-white/80 text-sm leading-relaxed">Natural sweetness and rich flavor notes. Unrefined cane sugar adds subtle caramel undertones.</p>
            
            {/* Decorative circle */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
          </motion.div>

          {/* Wide Feature Card - Coconut Fiber */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-3 bg-surface-container-low rounded-3xl p-8 lg:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden relative"
            whileHover={{ y: -8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div 
                  className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sparkles className="w-7 h-7 text-primary" />
                </motion.div>
                
                <h3 className="font-sora text-3xl font-bold text-primary mb-4">Coconut Fiber Reinforcement</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">Sustainable coconut coir fibers provide tensile strength and flexibility. This natural composite ensures the cup maintains its shape even with hot liquids, while remaining completely compostable.</p>
                
                <div className="flex flex-wrap gap-3">
                  {['Flexible', 'Strong', 'Compostable', 'Renewable'].map((tag, i) => (
                    <motion.span 
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="relative h-64 lg:h-full min-h-[280px] rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <img 
                  src="/assets/Lotus Fiber.jpeg" 
                  alt="Coconut fiber texture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Variants Section with 3D-style cards
const Variants = () => {
  const variants = [
    {
      id: 'classic',
      name: 'Classic Husk',
      material: 'Upcycled Cereal Husks',
      flavor: 'Light nuttiness, toasted malt',
      image: '/assets/Classic Husk.jpeg',
      color: 'from-amber-100 to-amber-200'
    },
    {
      id: 'ripple',
      name: 'Ripple Leaf',
      material: 'Plant-based leaf biomaterial',
      flavor: 'Fresh green tea, slightly herbal',
      image: '/assets/Ripple Leaf.jpeg',
      color: 'from-green-100 to-green-200'
    },
    {
      id: 'lotus',
      name: 'Lotus Fiber',
      material: 'Woven Palm Fiber Composite',
      flavor: 'Subtle honey, spiced wood',
      image: '/assets/Lotus Fiber.jpeg',
      color: 'from-orange-100 to-orange-200'
    },
    {
      id: 'crysta',
      name: 'Crysta Starch',
      material: 'Plant starch biopolymer',
      flavor: 'Pure coffee, minimal interference',
      image: '/assets/Crysta Starch.jpeg',
      color: 'from-blue-100 to-blue-200'
    }
  ];

  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.section 
      ref={ref as any}
      className="py-32 lg:py-40 bg-gradient-to-b from-surface-container to-background"
      id="design"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6"
          >
            Four cups.<br/>One clean conscience.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Each variant is pressed from a distinct natural material, giving your brew its own signature character and texture.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {variants.map((variant, index) => (
            <motion.div 
              key={variant.id}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
              className="group cursor-pointer relative"
              whileHover={{ y: -16, scale: 1.02 }}
            >
              {/* Card */}
              <div className={`bg-gradient-to-br ${variant.color} rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}>
                {/* Image Container */}
                <motion.div 
                  className="aspect-[4/5] rounded-2xl overflow-hidden mb-5 relative bg-white/50"
                  whileHover={{ rotate: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                >
                  <motion.img 
                    src={variant.image} 
                    alt={variant.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 80 }}
                  />
                  
                  {/* Shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/30 to-white/0 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                {/* Content */}
                <div className="flex flex-col flex-1">
                  <motion.h3 
                    className="font-sora font-bold text-primary text-xl mb-2"
                    whileHover={{ x: 5 }}
                  >
                    {variant.name}
                  </motion.h3>
                  <p className="font-mono text-[11px] text-on-surface-variant mb-4 leading-relaxed uppercase tracking-wide">
                    {variant.material}
                  </p>
                  
                  <div className="mt-auto">
                    <p className="text-sm text-on-surface-variant italic mb-5">
                      {variant.flavor}
                    </p>
                    
                    <motion.button 
                      className="w-full bg-primary text-white py-3.5 rounded-full text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 flex items-center justify-center gap-2 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <span>Pre-Order</span>
                      <motion.span 
                        className="transition-transform"
                        whileHover={{ x: [0, 4, 0] }}
                      >
                        →
                      </motion.span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Pre-order CTA Section with urgency
const PreOrderCTA = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.section
      ref={ref as any}
      className="py-32 lg:py-40 relative overflow-hidden"
      id="preorder"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-secondary-container" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/cup.jpeg')] bg-cover bg-center" />
      </div>
      
      {/* Animated circles */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-[900px] mx-auto px-5 sm:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Urgency badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8"
          >
            <Clock className="w-4 h-4 text-white" />
            <span className="text-white font-medium text-sm">Limited early bird pricing ends soon</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sora text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Be First to Experience<br/>the Future of Sustainable Sipping
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Join the sustainability revolution. Pre-order now and get exclusive early bird pricing plus free shipping on your first order.
          </motion.p>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8"
          >
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold whitespace-nowrap hover:bg-white/90 transition-colors"
            >
              Join Waitlist
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>No payment required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Early access priority</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Exclusive updates</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default function App() {
  const featuresRef = React.useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 w-full">
        <Hero onExplore={scrollToFeatures} />
        
        <div ref={featuresRef}>
          <Features />
        </div>
        
        <Variants />
        <PreOrderCTA />
      </main>
      
      <Footer />
      <PeopleViewing />
    </div>
  );
}