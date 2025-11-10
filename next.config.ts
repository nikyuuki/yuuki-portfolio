const nextConfig = {
  experimental: {
    optimizePackageImports: ["geist"], // disable automatic Geist injection
    // or if you see this line already, just remove "geist"
  },
};

export default nextConfig;
