import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Best Travel Agency in Bangalore | Arjun Tours & Travels",
  description: "Arjun Tours and Travels is the best travel agency in Bangalore for bus ticket booking, luxury car rentals, outstation trips to Coorg, Ooty, Mysuru & Kerala. 24/7 reliable travel service.",
  keywords: [
    "best travel agency in bangalore",
    "travel agency in bangalore",
    "car rentals bangalore",
    "bus booking bangalore",
    "coorg tour packages from bangalore",
    "ooty tour packages from bangalore",
    "mysore taxi service bangalore",
    "tempo traveller rental bangalore",
    "outstation cab booking bangalore",
    "Arjun Tours and Travels"
  ],
  authors: [{ name: "Arjun Tours and Travels" }],
  openGraph: {
    title: "Best Travel Agency in Bangalore | Arjun Tours & Travels",
    description: "Book luxury buses, tempo travellers, and outstation car rentals in Bangalore for Coorg, Ooty, Mysuru, and Kerala trips.",
    type: "website",
    locale: "en_IN",
    siteName: "Arjun Tours & Travels"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Agency in Bangalore | Arjun Tours & Travels",
    description: "Premium travel agency in Bangalore offering car rentals, bus bookings, and holiday packages."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "Arjun Tours and Travels",
  "description": "Best travel agency in Bangalore offering bus ticket booking, luxury car rentals, outstation trips to Coorg, Ooty, Mysuru & Kerala.",
  "telephone": "+91-9591355066",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.5946"
  },
  "priceRange": "₹₹",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "150"
  },
  "areaServed": ["Bangalore", "Karnataka", "Coorg", "Ooty", "Mysore", "Kerala"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#F8F9FA] text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
