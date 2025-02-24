import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost:3000",
      },
    ]
  },
};

export default nextConfig;
