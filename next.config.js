// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Skip ESLint to avoid build failures
      dirs: ['pages', 'components'],
    },
  };
  module.exports = nextConfig;