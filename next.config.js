const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com']
  },
  transpilePackages: ['three']
};

module.exports = withContentlayer(nextConfig);
