"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, X, CheckCircle, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function PopularDestinations() {
  const [activeModal, setActiveModal] = useState<any | null>(null);

  const destinations = [
    {
      id: "coorg",
      name: "Coorg (Kodagu)",
      image: "/coorg-rajas-seat.png",
      poster: "/coorg-package-poster.jpg",
      duration: "3 Days / 2 Nights",
      price: "₹20,000/-",
      forPersons: "For 2 Persons",
      desc: "Escape together to Coorg! Perfect getaway for couples & families with complete car sightseeing.",
      highlights: [
        "Bangalore - Coorg Pick & Drop",
        "Complete Car Sightseeing Included",
        "Visit Raja's Seat & Madikeri Fort",
        "Abbey Falls & Omkareshwara Temple",
        "Nisarga Dham & Golden Temple",
        "Chikli Hole Reservoir & Coffee Plantation",
        "Talacauvery & Glass Bridge",
        "2 Nights Stay + Daily Breakfast"
      ],
      whatsappMsg: "Hi Arjun Tours! I want to enquire and book the COORG PACKAGE 2N 3DAYS (Rs.20,000/- for 2 members)."
    },
    {
      id: "ooty",
      name: "Ooty",
      image: "/ooty-tea-estate.png",
      poster: "/ooty-tea-estate.png",
      duration: "3 Days / 2 Nights",
      price: "₹18,500/-",
      forPersons: "For 2 Persons",
      desc: "Queen of the Nilgiris awaits with tea gardens, botanical gardens, and cool mountain breezes.",
      highlights: [
        "Complete Private Car Sightseeing",
        "Ooty Lake & Botanical Gardens",
        "Doddabetta Peak & Tea Estates",
        "Coonoor Sightseeing & Sim's Park",
        "2 Nights Luxury Stay + Breakfast"
      ],
      whatsappMsg: "Hi Arjun Tours! I want to enquire and book the OOTY PACKAGE 2N 3DAYS."
    },
    {
      id: "mysore",
      name: "Mysuru",
      image: "/mysuru-palace.jpg",
      poster: "/mysuru-palace.jpg",
      duration: "1 Day / 2 Days",
      price: "₹8,500/-",
      forPersons: "For 2 Persons",
      desc: "Explore the majestic City of Palaces with our luxury AC sedans and coaches.",
      highlights: [
        "Mysore Palace & Chamundi Hills",
        "Brindavan Gardens & Musical Fountain",
        "St. Philomena Church & Zoo",
        "Complete Private Car Sightseeing"
      ],
      whatsappMsg: "Hi Arjun Tours! I want to enquire and book the MYSURU PACKAGE."
    },
    {
      id: "wayanad",
      name: "Wayanad (Kerala)",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop",
      poster: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop",
      duration: "3 Days / 2 Nights",
      price: "₹22,000/-",
      forPersons: "For 2 Persons",
      desc: "Discover pristine waterfalls, bamboo forests, and misty hills of Kerala.",
      highlights: [
        "Banasura Sagar Dam & Edakkal Caves",
        "Soochipara Falls & Chembra Peak",
        "Complete Car Sightseeing Included",
        "2 Nights Resort Stay + Breakfast"
      ],
      whatsappMsg: "Hi Arjun Tours! I want to enquire and book the WAYANAD KERALA PACKAGE."
    }
  ];

  return (
    <section id="packages" className="py-24 relative bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 border border-blue-100 text-[#0A2463] text-xs font-bold uppercase tracking-wider mb-3">
            Customized Tour Packages
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4"
          >
            Popular <span className="text-[#0A2463]">Destinations & Packages</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Click &quot;View Package&quot; to see detailed itinerary, poster banner, and instant WhatsApp booking!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveModal(dest)}
              className="group rounded-2xl overflow-hidden relative cursor-pointer h-[420px] shadow-md hover:shadow-2xl transition-all"
            >
              <Image 
                src={dest.image}
                alt={dest.name}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85"></div>
              
              <div className="absolute top-4 right-4 bg-[#FF5A5F] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                Offer {dest.price}
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-300">
                <h3 className="text-3xl font-bold text-white font-outfit mb-2 flex items-center gap-2">
                  <MapPin className="text-[#FF5A5F]" /> {dest.name}
                </h3>
                <div className="flex items-center gap-2 text-[#00E5FF] text-sm font-semibold mb-3">
                  <Clock size={16} /> {dest.duration}
                </div>
                <p className="text-gray-200 text-sm line-clamp-2 mb-4">
                  {dest.desc}
                </p>
                <div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModal(dest);
                    }}
                    className="bg-white hover:bg-gray-100 text-[#0A2463] px-5 py-2.5 rounded-xl font-bold shadow-lg transition-all w-full flex items-center justify-center gap-2 group-hover:bg-gradient-brand group-hover:text-white"
                  >
                    <Sparkles size={16} /> View Package Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* POPUP MODAL BANNER FOR PACKAGES */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-8 flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModal(null)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-lg"
              >
                <X size={22} />
              </button>

              {/* Poster Banner Image Column */}
              <div className="w-full md:w-1/2 relative bg-black min-h-[300px] md:min-h-[550px] overflow-y-auto">
                <img
                  src={activeModal.poster}
                  alt={activeModal.name}
                  className="w-full h-auto object-contain md:object-cover"
                />
              </div>

              {/* Package Details & Animated WhatsApp CTA Column */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-gray-50">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-red-100 text-[#FF5A5F] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      Special Couple & Family Deal
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-gray-900 font-outfit mb-2">
                    {activeModal.name} Package
                  </h3>
                  <p className="text-sm font-semibold text-[#0A2463] mb-4 flex items-center gap-2">
                    <Clock size={16} /> {activeModal.duration}
                  </p>

                  {/* Price Badge */}
                  <div className="bg-gradient-to-r from-[#0A2463] to-[#1E3A8A] text-white p-4 rounded-2xl mb-6 shadow-md flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase text-blue-200 font-medium">Offer Price Starts From</p>
                      <p className="text-3xl font-extrabold font-outfit text-[#00E5FF]">{activeModal.price}</p>
                    </div>
                    <div className="text-right bg-white/10 px-3 py-1.5 rounded-xl border border-white/20">
                      <p className="text-xs font-bold text-white">{activeModal.forPersons}</p>
                      <p className="text-[10px] text-gray-200">Complete Car Sightseeing</p>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Package Highlights:</h4>
                  <ul className="space-y-2 mb-6 text-sm text-gray-700">
                    {activeModal.highlights.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Animated WhatsApp Agent CTA Button */}
                <div className="pt-4 border-t border-gray-200">
                  <Link 
                    href={`https://wa.me/919591355066?text=${encodeURIComponent(activeModal.whatsappMsg)}`} 
                    target="_blank"
                    className="block"
                  >
                    <button className="w-full relative group overflow-hidden bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 transform hover:scale-[1.02]">
                      <div className="relative">
                        <FaWhatsapp size={28} className="animate-bounce" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
                      </div>
                      <div className="text-left leading-tight">
                        <p className="text-xs text-emerald-100 uppercase font-semibold">Talk to Our Agent & Book Now</p>
                        <p className="text-base font-extrabold">Instant WhatsApp Confirmation</p>
                      </div>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
