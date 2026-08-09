import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A2463] border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div>
            <div className="mb-6 inline-block">
              <Image 
                src="/logo.png" 
                alt="Arjun Tours and Travels" 
                width={160} 
                height={60} 
                className="object-contain bg-white rounded-xl px-4 py-1"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Arjun Tours and Travels provides premium, reliable, and luxurious travel experiences across Bangalore and beyond. Your journey, elevated.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-[#00E5FF] hover:text-[#0B0C10] transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-[#00E5FF] hover:text-[#0B0C10] transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-[#00E5FF] hover:text-[#0B0C10] transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 font-outfit">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Fleet", "Holiday Packages", "Bus Booking", "Car Rentals", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-[#FF5A5F]" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 font-outfit">Our Services</h3>
            <ul className="space-y-3">
              {["Airport Transfers", "Corporate Travel", "Wedding Transportation", "Outstation Trips", "City Tours", "Luxury Bus Rentals"].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors flex items-center gap-2 group">
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all text-[#FF5A5F]" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6 font-outfit">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="text-[#00E5FF] shrink-0 mt-1" size={24} />
                <span className="text-gray-400">123 Travel Avenue, MG Road, Bangalore, Karnataka 560001, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-[#00E5FF] shrink-0" size={24} />
                <span className="text-gray-300 font-semibold">+91 95913 55066</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-[#00E5FF] shrink-0" size={24} />
                <span className="text-gray-400">bookings@att-blr.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arjun Tours and Travels. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
