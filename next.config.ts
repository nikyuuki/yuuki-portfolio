/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 🧁 this makes it static (for GitHub Pages)
  images: {
    unoptimized: true, // ❄️ important since GitHub Pages doesn't do image optimization
  },
  basePath: '/yuuki-portfolio', // 🪷 change this to your repo name
  assetPrefix: '/yuuki-portfolio/',
};

module.exports = nextConfig;
