// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Already set, keeps build passing
      dirs: ['pages', 'components'],
    },
    'output: "export"
  };
  
  module.exports = nextConfig;
