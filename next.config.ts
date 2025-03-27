import type { NextConfig } from "next";

// module.exports = {
//   experimental: {
//     reactRefresh: true,
//   },
// };


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["fakestoreapi.com"], // Allow images from fakestoreapi.com
  },
};

export default nextConfig;
