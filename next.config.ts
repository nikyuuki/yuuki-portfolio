/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: "out",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/yuuki-portfolio' : '',
  assetPrefix: isProd ? '/yuuki-portfolio/' : '',
};

module.exports = nextConfig;
