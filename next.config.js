// import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
};

export default nextConfig;
