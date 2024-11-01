/** @type {import('next').NextConfig} */
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
