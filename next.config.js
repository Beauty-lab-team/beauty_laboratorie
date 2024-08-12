/** @type {import('next').NextConfig} */
module.exports = {
   experimental: {
      outputStandalone: true,
   },
   swcMinify: false,
   reactStrictMode: false,
   webpack: config => {
      config.resolve.fallback = { fs: false }
      return config
   },
}
