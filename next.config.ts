import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ev-charging-station-franchise",
        destination: "/business/franchise",
        permanent: true,
      },
      {
        source: "/ZeroPayment",
        destination: "/business/zero-investment",
        permanent: true,
      },
      {
        source: "/franchise",
        destination: "/business/franchise",
        permanent: true,
      },
      {
        source: "/blog&news",
        destination: "/activity-hub/blogs",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/business/service",
        permanent: true,
      },
      {
        source: "/products",
        destination: "/business/products",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "core.reluxelectric.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
