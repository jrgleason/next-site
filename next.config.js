const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      {
        source: '/protected',
        destination: 'http://localhost:8080/protected' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
