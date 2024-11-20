import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['www.course-api.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.course-api.com',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
