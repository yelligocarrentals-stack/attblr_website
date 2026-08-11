"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/coorg-rajas-seat.png",
    location: "Coorg",
    subtitle: "The Scotland of India"
  },
  {
    id: 2,
    image: "/ooty-tea-estate.png",
    location: "Ooty",
    subtitle: "Queen of the Nilgiris"
  },
  {
    id: 3,
    image: "/mysuru-palace.jpg",
    location: "Mysuru",
    subtitle: "The Heritage City"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
    location: "Kerala",
    subtitle: "God's Own Country"
  },
  {
    id: 5,
    image: "/madurai-rameswaram-kanyakumari.jpg",
    location: "Madurai – Rameswaram – Kanyakumari",
    subtitle: "Spiritual & Scenic Southern Tour"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-20 select-none">
      {/* Background Slider with Swipe Support */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, { offset }) => {
            if (offset.x < -50) {
              nextSlide();
            } else if (offset.x > 50) {
              prevSlide();
            }
          }}
          className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing"
        >
          <img 
            src={slides[currentSlide].image} 
            alt={slides[currentSlide].location} 
            className="w-full h-full object-cover opacity-100 pointer-events-none"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient shadow for top navbar only (NO white glare at bottom) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Left Arrow Navigation Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 shadow-lg"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow Navigation Button */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 shadow-lg"
      >
        <ChevronRight size={28} />
      </button>
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center justify-center h-full">

        {/* Dynamic Destination Focus */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-3 bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                <MapPin className="text-[#FF5A5F]" size={20} />
                <h2 className="text-[#00E5FF] text-base md:text-lg font-semibold tracking-wide">
                  {slides[currentSlide].subtitle}
                </h2>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold font-outfit text-white leading-tight mb-8 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)]">
                {slides[currentSlide].location}
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <Link href="#packages" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto group relative overflow-hidden bg-gradient-brand text-white px-8 py-3.5 rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_25px_rgba(0,0,0,0.5)] whitespace-nowrap flex items-center justify-center gap-2">
                    Enquire Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Indicators */}
        <div className="flex gap-2 mt-8 mb-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-10 bg-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,1)]" : "w-2.5 bg-white/60 hover:bg-white"}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
