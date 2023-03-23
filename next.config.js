/** @type {import('next').NextConfig} */
const domain = process.env.NEXT_PUBLIC_DOMAIN;
const nextConfig = {
  reactStrictMode: true,
  images: { domains: [`${domain}`] },
};

module.exports = nextConfig;
