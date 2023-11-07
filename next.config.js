/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains:['i.pravatar.cc','lh3.googleusercontent.com'],
    remotePatterns: [
      {
        hostname: 'i.pravatar.cc',
      },
    ],
  },
}

module.exports = nextConfig
