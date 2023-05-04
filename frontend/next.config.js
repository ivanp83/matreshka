/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  siteUrl: process.env.SITE_URL || "https://matryoshkaflowers.ru",
  generateRobotsTxt: true,
  images: {
    domains: ["localhost", "static.matryoshkaflowers.ru"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
