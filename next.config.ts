/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http', // Allow standard http
        hostname: 'oesexportimport.com',
      },
      {
        protocol: 'https', // Allow secure https
        hostname: 'oesexportimport.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;