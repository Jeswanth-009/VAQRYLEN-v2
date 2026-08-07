import React from 'react';
import { motion } from 'motion/react';
import { useInView } from '@/src/lib/animations';

const steps = [
  {
    num: '01',
    title: 'Sip',
    desc: 'Drink it exactly like any other cup — hot, cold, or in between.'
  },
  {
    num: '02',
    title: 'Bite',
    desc: "When you're done, take a bite off the rim. It's meant to be eaten."
  },
  {
    num: '03',
    title: 'Taste',
    desc: 'Each grain finishes differently — malt, herb, honey, or bean, straight through.'
  },
  {
    num: '04',
    title: 'Nothing Left',
    desc: 'No compost bin, no bin at all. The cup was the last ingredient.'
  }
];

function StepItem({ step, index, inView }: { step: typeof steps[0], index: number, inView: boolean }) {
  return (
    <motion.div
      className="flex gap-6 lg:gap-10 items-start group"
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ 
        duration: 0.7, 
        delay: index * 0.15 + 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <motion.span 
        className="text-[1.75rem] lg:text-[2.25rem] font-light text-[#5c4f3d]/40 font-serif leading-none pt-0.5 min-w-[3rem]"
        whileHover={{ 
          color: "rgba(92, 79, 61, 0.7)",
          scale: 1.1
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {step.num}
      </motion.span>
      
      <div className="flex-1">
        <motion.h3 
          className="font-sans text-lg lg:text-xl font-semibold text-[#2c241b] mb-2 tracking-tight"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {step.title}
        </motion.h3>
        <motion.p 
          className="text-[#5c4f3d] leading-[1.7] text-[0.95rem] lg:text-base"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.2 + index * 0.15 }}
        >
          {step.desc}
        </motion.p>
        
        {/* Animated line for each step */}
        <motion.div 
          className="mt-3 h-[2px] bg-[#5c4f3d]/10"
          initial={{ scaleX: 0, originX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
        />
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [sectionRef, sectionInView] = useInView(0.1);
  const [stepsRef, stepsInView] = useInView(0.15);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      id="experience"
      className="relative w-full bg-[#d4c5b0] py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Full-width container with generous horizontal padding */}
      <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-32">
        
        {/* Header */}
        <motion.div
          className="text-center mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.p 
            className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8b7355] mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            How to Vaqrylen
          </motion.p>
          <motion.h2 
            className="font-serif text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl text-[#2c241b] leading-[1.1] max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            It's a cup for exactly as long as you need one.
          </motion.h2>
        </motion.div>

        {/* Content Grid — wider and more balanced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-32 items-center max-w-7xl mx-auto">
          
          {/* Left: Video */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="w-full aspect-[4/3] bg-[#1e1a16] rounded-[1.5rem] overflow-hidden relative shadow-[0_25px_60px_-15px_rgba(30,26,22,0.5)] group"
              whileHover={{ 
                rotate: 1,
                scale: 1.01,
                boxShadow: "0 30px 70px -15px rgba(30,26,22,0.6)"
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.video
                src="/assets/Guests_laughing_at_hotel_rooftop_202608070450.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
              />
            </motion.div>
            
            <motion.p 
              className="mt-5 text-xs text-[#5c4f3d]/70 italic tracking-wide"
              initial={{ opacity: 0, y: 15 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Unedited — one pour, four grains, real steam.
            </motion.p>
          </motion.div>

          {/* Right: Steps */}
          <motion.div 
            ref={stepsRef}
            className="space-y-10 lg:space-y-12"
            initial={{ opacity: 0, x: 30 }}
            animate={stepsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {steps.map((step, index) => (
              <StepItem 
                key={step.num}
                step={step}
                index={index}
                inView={stepsInView}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
