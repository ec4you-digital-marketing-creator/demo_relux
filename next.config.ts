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
  async headers() {
    return [
      {
        source: "/llms.txt",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Origin-Trial",
            value:
              "Ar3e18jUYYlmpRl2ByRmxAw8GiIq2VfXOWcXMYtpnxChtOF6rRe4YaoKfMgjl1XLP0IqrDXU4JjnTLAcBziP0g8AAABkeyJvcmlnaW4iOiJodHRwczovL3JlbHV4ZWxlY3RyaWMuY29tOjQ0MyIsImZlYXR1cmUiOiJXZWJNQ1AiLCJleHBpcnkiOjE3OTQ4NzM2MDAsImlzU3ViZG9tYWluIjp0cnVlfQ==",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
