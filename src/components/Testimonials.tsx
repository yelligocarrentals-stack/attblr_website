"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, CheckCircle } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Testimonials() {
  const googleReviewLink = "https://share.google/6sjvfrk4KbG09bDTF";

  const testimonials = [
    {
      name: "Sunil Singh",
      role: "Local Guide · 16 reviews · 7 photos",
      date: "7 months ago",
      text: "Had a wonderful 2-day Bangalore to Ooty trip with Arjun Traveller. The journey started and ended perfectly. The driver was very friendly, soft-spoken, supportive, and professional—no ego or attitude issues at all. The traveller was comfortable and well-maintained, and the pricing was very reasonable. Overall, a smooth and pleasant experience. Highly recommended!",
      rating: 5,
      initials: "SS",
      bgColor: "bg-blue-600"
    },
    {
      name: "Deepa Chethan",
      role: "1 review",
      date: "9 months ago",
      text: "I had a wonderful experience on this trip! Arjun tours and travels ❤️❤️❤️ Everything was very well organized from start to finish. The hotel accommodations were comfortable, and conveniently located. I truly appreciated the attention to detail in choosing a place that offered both comfort and great service. The food arrangements were excellent — meals were tasty, hygienic, and catered well to different preferences. Most importantly, the trip itinerary was smooth and well-paced, with a good balance of sightseeing and relaxation. A big thank you to the team for ensuring everything ran so efficiently. Looking forward to more trips like this! Thank to Arjun tours and travels ❤️",
      rating: 5,
      initials: "DC",
      bgColor: "bg-emerald-600"
    },
    {
      name: "Srija Kalaithingal",
      role: "2 reviews",
      date: "11 months ago",
      text: "had a wonderful experience with Arjun tours and travels.. The trip was well organized, and everything from transport to accommodation was smooth.. The staff was friendly and helpful throughout the journey, and they made sure we were comfortable.",
      rating: 5,
      initials: "SK",
      bgColor: "bg-pink-600"
    }
  ];

  return (
    <section id="reviews" className="py-24 relative bg-[#F8F9FA] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(10,36,99,0.05)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FcGoogle size={28} />
              <span className="text-[#0A2463] font-bold text-sm uppercase tracking-wider">
                Official Google Business Reviews
              </span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-outfit text-gray-900"
            >
              What Our <span className="text-[#0A2463]">Customers Say</span>
            </motion.h2>
          </div>

          {/* Overall Rating Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white p-4 px-6 rounded-2xl border border-gray-100 shadow-md"
          >
            <div className="text-center border-r border-gray-200 pr-4">
              <div className="text-3xl font-extrabold text-gray-900 font-outfit">4.7</div>
              <div className="flex text-amber-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase">Based on Google Reviews</p>
              <Link 
                href={googleReviewLink} 
                target="_blank" 
                className="text-[#0A2463] font-bold text-sm hover:underline flex items-center gap-1 mt-0.5"
              >
                Read All Reviews on Google <ExternalLink size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 relative shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                    <FcGoogle size={16} />
                    <span className="text-xs text-gray-600 font-medium">Google Review</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
                  &quot;{testimonial.text}&quot;
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full ${testimonial.bgColor} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold font-outfit text-base flex items-center gap-1">
                      {testimonial.name}
                      <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white" />
                    </h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400 font-medium">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA for Google Reviews */}
        <div className="text-center mt-12">
          <Link href={googleReviewLink} target="_blank">
            <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-bold shadow-sm transition-all hover:shadow-md">
              <FcGoogle size={20} /> View All Reviews on Google <ExternalLink size={16} className="text-gray-500" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
