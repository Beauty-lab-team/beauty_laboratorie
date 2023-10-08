if (!process.env.WORDPRESS_API_URL) {
   throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
module.exports = {
   images: {
      domains: ['beautylabstorage.blob.core.windows.net'],
   },
}
