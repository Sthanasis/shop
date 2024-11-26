import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 3600,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.pinimg.com',
      },
      {
        protocol: 'https',

        hostname: 'www.coolclub.gr',
      },
    ],
  },
};

export default nextConfig;
