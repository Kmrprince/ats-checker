/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: false,
      dirs: ['pages', 'components'], // This keeps ESLint checking in the specified directories
    },
    // next.js exports typically handle static generation automatically
    output: 'export', // This enables the static export feature
  };
  
  module.exports = nextConfig;