/** @type {import('next').NextConfig} */
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "http",
    //     hostname: `${domain}`,
    //     port: "1337",
    //     pathname: "uploads",
    //   },
    // ],
    domains: ["64.227.136.208"],
  },
};

module.exports = nextConfig;
