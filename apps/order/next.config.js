/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@eCustomer/ui-emotion'],
  images: {
    domains: ['img.29cm.co.kr'],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
