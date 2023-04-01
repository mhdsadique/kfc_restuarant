/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    // unoptimized:true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'orderserv-kfc-assets.yum.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
