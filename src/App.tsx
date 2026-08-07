import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Features from './components/Features';
import Anatomy from './components/Anatomy';
import Variants from './components/Variants';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-1 w-full">
        {/* Hero stands alone */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <Hero />
        </div>
        
        {/* Quote: full-bleed editorial pause */}
        <Quote />
        
        {/* Rest of constrained content */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <Features />
          <Anatomy />
          <Variants />
        </div>
        
        <Experience />
        
        <div className="max-w-[1280px] mx-auto px-5 sm:px-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}