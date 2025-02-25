
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rimirigamarathon.com", "www.rigawinechampagne.lv", "cdn.prod.website-files.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};
