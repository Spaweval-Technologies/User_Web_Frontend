// import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      preprocess: false,
    },
  },
};

export default nextConfig;
