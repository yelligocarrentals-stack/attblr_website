"use client";

import { motion } from "framer-motion";
import { Users, Wind, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function FleetShowcase() {
  const fleet = [
    {
      name: "Luxury Volvo Bus",
      type: "Luxury Bus",
      capacity: "40-45 Seats",
      ac: "AC",
      price: "From ₹12,000/day",
      features: ["Reclining Seats", "Entertainment System", "Charging Ports"],
      image: "/luxury-bus.png"
    },
    {
      name: "Premium Tempo Traveller",
      type: "Tempo Traveller",
      capacity: "12-17 Seats",
      ac: "AC",
      price: "From ₹5,500/day",
      features: ["Pushback Seats", "Surround Sound", "Ambient Lighting"],
      image: "/tempo-traveller.png"
    },
    {
      name: "Executive Sedan",
      type: "Sedan",
      capacity: "4 Seats",
      ac: "AC",
      price: "From ₹2,500/day",
      features: ["Premium Audio", "Extra Legroom", "Water Bottles provided"],
      image: "/executive-sedan.png"
    }
  ];

  return (
    <section id="fleet" className="py-24 relative bg-[#F8F9FA]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4"
            >
              Our Premium <span className="text-[#0A2463]">Fleet</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg"
            >
              Travel in comfort and style with our well-maintained, luxury vehicles equipped with modern amenities.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#0A2463] hover:text-white border border-[#0A2463] hover:bg-[#0A2463] px-6 py-3 rounded-full transition-colors whitespace-nowrap font-semibold shadow-sm"
          >
            View All Vehicles
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fleet.map((vehicle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 group flex flex-col shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-bold text-[#0A2463] border border-gray-100 shadow-sm">
                  {vehicle.type}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-outfit group-hover:text-[#0A2463] transition-colors">
                  {vehicle.name}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                    <Users size={16} className="text-[#0A2463]" /> {vehicle.capacity}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium">
                    <Wind size={16} className="text-[#0A2463]" /> {vehicle.ac}
                  </div>
                </div>

                <ul className="space-y-2 mb-8 flex-1">
                  {vehicle.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle2 size={16} className="text-[#0A2463]" /> {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-gray-900">{vehicle.price}</p>
                  </div>
                  <button className="bg-gradient-brand hover:opacity-90 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md">
                    Book Now
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
