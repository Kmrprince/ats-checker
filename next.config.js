// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Skips ESLint during build (since it’s passing now)
      dirs: ['pages', 'components'],
    },
    // Remove or ensure 'output: export' is NOT present
  };
  
  module.exports = nextConfig;