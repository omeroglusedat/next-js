/** @type {import('next').NextConfig} */

const path = require('path')
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/users',
        destination: '/users',
        permanent: true,
      },
      {
        source: '/users/:id',
        destination: '/users/:id',
        permanent: true,
      },
    ];
  },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
}

module.exports = nextConfig
