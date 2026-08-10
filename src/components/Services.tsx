"use client";

import { motion } from "framer-motion";
import { Bus, Car, Plane, Building, Map, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Bus Ticket Booking",
      description: "Premium luxury buses with AC, sleepers, and semi-sleepers for comfortable inter-city travel.",
      icon: <Bus size={32} className="text-[#00E5FF]" />,
    },
    {
      title: "Car Rentals",
      description: "Wide range of Sedans, SUVs, and luxury cars available for self-drive or with a professional chauffeur.",
      icon: <Car size={32} className="text-[#FF5A5F]" />,
    },
    {
      title: "Holiday Tour Packages",
      description: "Customized end-to-end travel packages for families, couples, and groups.",
      icon: <Map size={32} className="text-[#00E5FF]" />,
    },
    {
      title: "Airport Transfers",
      description: "Punctual and comfortable pick-up and drop-off services to and from Bangalore Airport.",
      icon: <Plane size={32} className="text-[#FF5A5F]" />,
    },
    {
      title: "Corporate Travel",
      description: "Reliable transportation solutions tailored for businesses, events, and daily employee commutes.",
      icon: <Building size={32} className="text-[#00E5FF]" />,
    },
    {
      title: "24/7 Support & Safety",
      description: "Round-the-clock customer assistance and GPS-tracked vehicles for your peace of mind.",
      icon: <ShieldCheck size={32} className="text-[#FF5A5F]" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#F8F9FA]">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(10,36,99,0.05)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4"
          >
            Premium Travel <span className="text-[#0A2463]">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Experience world-class transportation and travel planning tailored exactly to your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100 group-hover:border-[#0A2463]/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-outfit group-hover:text-[#0A2463] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
