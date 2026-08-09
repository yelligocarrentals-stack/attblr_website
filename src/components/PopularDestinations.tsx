"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

export default function PopularDestinations() {
  const destinations = [
    {
      name: "Coorg",
      image: "/coorg-rajas-seat.png",
      duration: "2 Days / 1 Night",
      desc: "Experience the Scotland of India with our premium travel packages.",
    },
    {
      name: "Ooty",
      image: "/ooty-tea-estate.png",
      duration: "3 Days / 2 Nights",
      desc: "Queen of the Nilgiris awaits with breathtaking views and tea gardens.",
    },
    {
      name: "Mysore",
      image: "/mysuru-palace.jpg",
      duration: "1 Day Trip",
      desc: "Explore the City of Palaces with our luxury AC coaches and sedans.",
    },
    {
      name: "Wayanad",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069&auto=format&fit=crop",
      duration: "3 Days / 2 Nights",
      desc: "Discover pristine waterfalls and lush green hills of Kerala.",
    }
  ];

  return (
    <section className="py-24 relative bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4"
          >
            Popular <span className="text-[#0A2463]">Destinations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Top weekend getaways from Bangalore. Book your travel with us for a seamless journey.
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
              className="group rounded-2xl overflow-hidden relative cursor-pointer h-[400px]"
            >
              <Image 
                src={dest.image}
                alt={dest.name}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end transition-transform duration-300 translate-y-8 group-hover:translate-y-0">
                <h3 className="text-3xl font-bold text-white font-outfit mb-2 flex items-center gap-2">
                  <MapPin className="text-[#FF5A5F]" /> {dest.name}
                </h3>
                <div className="flex items-center gap-2 text-[#00E5FF] text-sm font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <Clock size={16} /> {dest.duration}
                </div>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                  {dest.desc}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  <button className="bg-white hover:bg-gray-100 text-[#0A2463] px-5 py-2.5 rounded-lg font-bold shadow-md transition-colors w-full">
                    View Packages
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
