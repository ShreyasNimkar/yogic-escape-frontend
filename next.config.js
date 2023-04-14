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
    domains: [`${domain}`],
  },
};

module.exports = nextConfig;
