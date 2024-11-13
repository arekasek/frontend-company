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
  async redirects() {
    return [
      {
        source: "/new-balustrady",
        destination: "/balustrady",
        permanent: true,
      },
      {
        source: "/new-bramy",
        destination: "/bramy",
        permanent: true,
      },
      {
        source: "/new-ogrodzenia",
        destination: "/ogrodzenia",
        permanent: true,
      },
      {
        source: "/new-furtki",
        destination: "/furtki",
        permanent: true,
      },
      {
        source: "/new-konstrukcje",
        destination: "/konstrukcje",
        permanent: true,
      },
      {
        source: "/new-meble",
        destination: "/meble",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
