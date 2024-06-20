/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
        dirs: ['pages', 'modules', 'components', 'helpers', 'ui', 'app'],
      },
}

module.exports = nextConfig
