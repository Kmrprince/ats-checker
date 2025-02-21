/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Keeps the build passing even with ESLint errors
    dirs: ['pages', 'components'],
  },
  output: "export", // Corrected syntax for static export
};

module.exports = nextConfig;
