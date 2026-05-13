import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-los4-1.xx.fbcdn.net",
      },

      {
        protocol: "https",
        hostname: "scontent.fiba2-2.fna.fbcdn.net",
      },

      {
        protocol: "https",
        hostname: "scontent.fiba2-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;