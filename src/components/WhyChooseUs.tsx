"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, ThumbsUp, Headset } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Trusted by Thousands",
      description: "Over a decade of experience providing safe and premium travel across South India.",
      icon: <ThumbsUp className="text-[#00E5FF]" size={28} />
    },
    {
      title: "On-Time Guarantee",
      description: "We value your time. Our vehicles are known for punctuality and reliability.",
      icon: <Clock className="text-[#FF5A5F]" size={28} />
    },
    {
      title: "Safe & Secure",
      description: "GPS tracked vehicles, background-verified drivers, and regular maintenance checks.",
      icon: <ShieldCheck className="text-[#00E5FF]" size={28} />
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always available to assist you via call or WhatsApp.",
      icon: <Headset className="text-[#FF5A5F]" size={28} />
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative h-[600px] rounded-3xl overflow-hidden bg-gray-50 border border-gray-200"
          >
            <Image 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop"
              alt="Driving experience"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Overlay stats card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-xl">
              <div className="flex justify-around text-center">
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 font-outfit mb-1">10+</h4>
                  <p className="text-sm text-[#0A2463] font-medium">Years Experience</p>
                </div>
                <div className="w-[1px] bg-gray-200"></div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 font-outfit mb-1">50K+</h4>
                  <p className="text-sm text-[#FF5A5F] font-medium">Happy Customers</p>
                </div>
                <div className="w-[1px] bg-gray-200"></div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900 font-outfit mb-1">200+</h4>
                  <p className="text-sm text-[#0A2463] font-medium">Premium Vehicles</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-6"
            >
              Why Choose <span className="text-[#0A2463]">ATT-BLR?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg mb-12"
            >
              We don&apos;t just provide a ride; we provide an experience. From luxury buses to premium sedans, our commitment to quality, safety, and customer satisfaction sets us apart in Bangalore.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex flex-col gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-outfit mb-2">{reason.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <button className="bg-gradient-brand hover:opacity-90 text-white px-8 py-4 rounded-full font-bold transition-all shadow-md">
                Learn More About Us
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
