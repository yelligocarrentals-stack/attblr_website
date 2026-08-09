import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ATT-BLR | Arjun Tours and Travels",
  description: "Premium bus ticket booking, holiday tour packages, car rentals, and airport transfers in Bangalore. Experience world-class travel with ATT-BLR.",
  keywords: "Bangalore travel, bus booking, car rentals, holiday packages, Arjun Tours and Travels, ATT-BLR, luxury buses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#F8F9FA] text-gray-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
