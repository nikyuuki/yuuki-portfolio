/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/yuuki-portfolio',
  assetPrefix: '/yuuki-portfolio/',
  eslint: {
    ignoreDuringBuilds: true, // 💖 ignore safe warnings
  },
};

module.exports = nextConfig;
