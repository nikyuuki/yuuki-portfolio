/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ for static site
  images: {
    unoptimized: true, // ✅ important for GitHub Pages
  },
  basePath: '/yuuki-portfolio', // ✅ your repo name
  assetPrefix: '/yuuki-portfolio/', // ✅ needed for CSS/JS
};

module.exports = nextConfig;
