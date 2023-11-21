/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webp: {
    preset: 'default',
    quality: 100,
  },
  images: {
    domains: ['picsum.photos'],
  },
  //Internationalization
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
