import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@carbon/react", "@carbon/ibm-products"],
  },
};

export default nextConfig;
