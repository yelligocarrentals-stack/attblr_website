import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Allow local network connections for testing on mobile
  allowedDevOrigins: ['192.168.1.5', '192.168.1.6', 'localhost'],
};

export default nextConfig;
