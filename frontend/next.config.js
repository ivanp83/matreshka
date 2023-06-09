/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_BACKEND_BASE_URL: isProd
      ? "https://api.matryoshkaflowers.ru/api"
      : "http://localhost:8000/api",
    BACKEND_BASE_URL: isProd
      ? "https://api.matryoshkaflowers.ru/api"
      : "http://localhost:8000/api",
    NEXT_PUBLIC_BACKEND_STATIC_URL: isProd
      ? "https://static.matryoshkaflowers.ru/api"
      : "http://localhost:8001/api",

    NEXT_PUBLIC_GA_MEASUREMENT_ID: "G-4PF6XCTC4L",
    NEXT_PUBLIC_YANDEX_METRICS: "93453434",
  },

  generateRobotsTxt: true,
  images: {
    domains: ["localhost", "static.matryoshkaflowers.ru"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
