import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "custom-images.strikinglycdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol:"https",
        hostname:"xverdqsaqnwrjbewjbof.supabase.co",
        pathname:"/storage/v1/object/public/blog-images/**",
      },
      {
        protocol:"https",
        hostname:"source.unsplash.com",
        pathname:"/**"
      }
    ],
  },
};

export default nextConfig;
