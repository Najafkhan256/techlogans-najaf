/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [process.env.STRAPI_ASSETS_MAIN_URL],
  },
};

module.exports = nextConfig;
