/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: false,
      dirs: ['pages', 'components'],
    },
    // Removed output: 'export' to support API routes
  };
  
  module.exports = nextConfig;