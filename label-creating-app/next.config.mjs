/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.optimization.minimize = false; // Disable minification in production
    }
    return config;
  }
};

export default nextConfig;

