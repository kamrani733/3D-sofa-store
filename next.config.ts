import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tolica.ir',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
