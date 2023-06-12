/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img.freepik.com',
      },
    ],
  },
};

module.exports = nextConfig
