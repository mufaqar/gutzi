/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: { appDir: true },
};

module.exports = nextConfig;

// next.config.js
const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr();
