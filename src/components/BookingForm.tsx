"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Bus, Car } from "lucide-react";

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState("bus");

  return (
    <section id="booking" className="relative z-20 -mt-24 px-6 md:px-12 container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-6 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100"
      >
        <div className="flex flex-wrap gap-4 mb-8 border-b border-gray-100 pb-4">
          <button 
            onClick={() => setActiveTab("bus")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "bus" ? "bg-gradient-brand text-white shadow-md" : "text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <Bus size={20} /> Bus Booking
          </button>
          <button 
            onClick={() => setActiveTab("car")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "car" ? "bg-gradient-brand text-white shadow-md" : "text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <Car size={20} /> Car Rentals
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700 font-medium ml-2">From</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A2463]" size={20} />
              <input 
                type="text" 
                placeholder="Leaving from..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700 font-medium ml-2">To</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF5A5F]" size={20} />
              <input 
                type="text" 
                placeholder="Going to..." 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700 font-medium ml-2">Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0A2463]" size={20} />
              <input 
                type="date" 
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 focus:outline-none focus:border-[#0A2463] focus:ring-1 focus:ring-[#0A2463] transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700 font-medium ml-2">Passengers</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF5A5F]" size={20} />
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-gray-900 appearance-none focus:outline-none focus:border-[#FF5A5F] focus:ring-1 focus:ring-[#FF5A5F] transition-all">
                <option value="1">1 Passenger</option>
                <option value="2">2 Passengers</option>
                <option value="3">3 Passengers</option>
                <option value="4">4 Passengers</option>
                <option value="5">5+ Passengers</option>
              </select>
            </div>
          </div>

          {activeTab === "car" && (
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-4 mt-2">
               <label className="text-sm text-gray-700 font-medium ml-2">Vehicle Type</label>
               <div className="flex flex-wrap gap-3">
                 {['Sedan', 'SUV', 'Tempo Traveller', 'Mini Bus', 'Luxury Bus'].map(type => (
                   <label key={type} className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                     <input type="radio" name="vehicle" value={type} className="accent-[#0A2463]" />
                     <span className="text-gray-900 text-sm">{type}</span>
                   </label>
                 ))}
               </div>
            </div>
          )}

          <div className="md:col-span-2 lg:col-span-4 mt-4">
            <button 
              type="button"
              className="w-full bg-gradient-brand hover:opacity-90 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg"
            >
              Search Availability
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
