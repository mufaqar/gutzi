/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // i18n: {
  //   locales: ['en-US', 'de'],
  //   defaultLocale: 'en-US',
  // },

  // images: {
  //   loader: 'imgix',
  //   path: '/',
  // },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

// // next.config.js
// Older data
// const withSvgr = require('next-plugin-svgr');

// module.exports = withSvgr();

// // next.config.js
// module.exports = {
//   reactStrictMode: true,
//   swcMinify: true,
//   i18n: {
//     locales: ['en-US', 'de'],
//     defaultLocale: 'en-US',
//   },
// };
