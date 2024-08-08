/** @type {import('next').NextConfig} */
module.exports = {
   images: {
      domains: ['beautylabstorage.blob.core.windows.net'],
   },
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
