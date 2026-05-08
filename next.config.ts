import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "image.tmdb.org", protocol: "https" }],
  },
  turbopack: {},
};

export default nextConfig;
