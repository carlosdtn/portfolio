/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com', 'picsum.photos', 'res.cloudinary.com']
  },
  transpilePackages: ['three']
};

module.exports = nextConfig;
