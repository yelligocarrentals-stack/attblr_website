"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "Packages", href: "#packages" },
    { name: "Contact", href: "#booking" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white py-2 shadow-md border-b border-gray-100"
          : "bg-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex items-center transition-all ${
              !scrolled ? "bg-white/90 backdrop-blur-md rounded-xl px-3 py-1 shadow-md" : ""
            }`}
          >
            <Image 
              src="/logo.png" 
              alt="Arjun Tours and Travels" 
              width={95} 
              height={34} 
              className="object-contain"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`transition-colors font-semibold text-sm uppercase tracking-wider relative group ${
                  scrolled ? "text-gray-700 hover:text-[#0A2463]" : "text-white hover:text-[#00E5FF] drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                  scrolled ? "bg-[#0A2463]" : "bg-[#00E5FF]"
                }`}></span>
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="#booking"
              className="bg-gradient-brand hover:opacity-90 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)]"
            >
              Book Now
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-900 hover:text-[#0A2463] transition-colors"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 flex flex-col p-6 gap-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-700 hover:text-[#0A2463] py-2 text-lg font-medium border-b border-gray-100"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-gradient-brand text-center text-white mt-4 px-6 py-3 rounded-lg font-semibold"
          >
            Book Now
          </Link>
        </motion.div>
      )}
    </header>
  );
}
