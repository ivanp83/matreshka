/* eslint-disable react-hooks/rules-of-hooks */

import { Suspense } from "react";
import Index from "../components/categories";
import Loading from "../loading";

const data = {
  title: "Букеты в наличии",
  description:
    "Все доступные для продажи букеты с доставкой по Калининграду и области. Уникальный дизайн, самые качественные цветы - это букеты от Матрёшка Флаверс.",
  canonical: "https://matryoshkaflowers.ru/categories",
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "white",
};
async function getProductsByCategory(id = 0) {
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/category-with-products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }
  const categories = await fetch(
    `${process.env.BACKEND_BASE_URL}/categories`
  ).then((res) => res.json());
  const products = data.map((p) => {
    if (p.available === true) return p;
  });
  return { products, categories };
}

export async function generateStaticParams() {
  const categories = await fetch(
    `${process.env.BACKEND_BASE_URL}/categories`
  ).then((res) => res.json());
  return categories.map((p) => ({ id: String(p.id) }));
}
export async function generateMetadata({ params: { id } }) {
  const categories = await fetch(
    `${process.env.BACKEND_BASE_URL}/categories`
  ).then((res) => res.json());

  return {
    title: data.title,
    description: data.description,

    metadataBase: new URL(data.canonical),
    generator: "Next.js",
    applicationName: "Матрёшка Флаверс",
    referrer: "origin-when-cross-origin",
    keywords: ["Продажа цветов", "букеты", "онлайн", "цветы с доставкой"],
    authors: [{ name: "Юлиана Легкодумова" }],
    creator: "Юлиана Легкодумова",
    publisher: "Юлиана Легкодумова",

    verification: {
      google: "thGCiu8ZZJhbDzpkLH9Eg8KNpsrv3s_Z02ispASCl8k",
      yandex: "6ff734a1b919092d",

      other: {
        me: [],
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.canonical,
      siteName: "Матрёшка Флаверс",
      images: [
        {
          url: "/images/og_banner.jpg",
          width: 634,
          height: 634,
        },
        {
          url: "/images/vk_banner.jpg",
          width: 1418,
          height: 634,
          alt: "Цветочная мастерская Матрёшка Флаверс",
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    icons: {
      apple: [
        {
          url: "/favicon/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
      other: [
        {
          rel: "icon",
          url: "/favicon/favicon-16x16.png",
        },
        {
          rel: "icon",
          url: "/favicon/favicon-32x32.png",
        },
        {
          rel: "icon",
          url: "/favicon/mstile-150x150.png",
        },
      ],
    },
  };
}
export default async function Categories({ params: { id } }) {
  const { products, categories } = await getProductsByCategory(id);

  return (
    <>
      <meta name="robots" content="all" />
      <meta property="og:title" content="Букеты на продажу" />
      <meta property="og:locale" content="ru_RU" />
      <meta
        property="og:description"
        content="Премиальные букеты с доставкой по Калининграду за 1 час."
      />
      <meta
        property="og:image"
        content="https://matryoshkaflowers.ru/images/regular_banner.jpg"
      />
      <link
        rel="canonical"
        href={`${process.env.BACKEND_BASE_URL}/categories`}
      />
      <Suspense fallback={<Loading />}>
        <Index {...{ categories, products }} />
      </Suspense>
    </>
  );
}
