/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'quantum-marketplace.com'],
    formats: ['image/avif', 'image/webp'],
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001',
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
    SOCKET_URL: process.env.SOCKET_URL || 'http://localhost:3001',
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL || 'http://localhost:3001'}/api/:path*`,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
