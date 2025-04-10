import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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
