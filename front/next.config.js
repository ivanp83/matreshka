/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/app/*": ["app/*"],
      "@/app/product*": ["app/product/*"],
      "@/utils*": ["utils/*"],
      "@/*": ["*"],
    },
  },
  env: {
    NEXT_PUBLIC_DOMAIN: isProd
      ? "https://matryoshkaflowers.ru"
      : "http://localhost:3000",
    NEXT_PUBLIC_API: "https://api.matryoshkaflowers.ru",
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
    NEXT_PUBLIC_YANDEX_API_KEY: "298fe433-f45b-4311-8173-979d7c2828a1",
  },

  generateRobotsTxt: true,
  images: {
    domains: ["localhost", "static.matryoshkaflowers.ru", "img.freepik.com"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
