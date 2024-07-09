/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ['@29cm/ui-emotion'],
  images: {
    domains: ['img.29cm.co.kr'],
  },
};

module.exports = nextConfig;
