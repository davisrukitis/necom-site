/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rimirigamarathon.com", "cdn.prod.website-files.com"]
  }
};
module.exports = nextConfig;