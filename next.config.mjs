/** @type {import('next').NextConfig} */
import next from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["wojplot.pl"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wojplot.pl",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
