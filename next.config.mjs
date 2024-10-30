/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["company-website-1d69.onrender.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "company-website-1d69.onrender.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
