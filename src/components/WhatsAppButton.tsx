"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="glass-dark px-4 py-2 rounded-lg border border-white/10 shadow-xl hidden md:block"
          >
            <p className="text-white text-sm font-medium whitespace-nowrap">
              Need Help Planning Your Trip? <span className="text-[#00E5FF]">Chat Now</span>
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/919876543210?text=Hi%20ATT-BLR,%20I%20would%20like%20to%20book%20a%20trip!"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 z-50 animate-pulse-whatsapp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp size={36} />
      </a>
    </div>
  );
}
