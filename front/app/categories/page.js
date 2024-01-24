/* eslint-disable react-hooks/rules-of-hooks */
import { getFilteredCategories } from "@/utils/helpers";
import { Suspense } from "react";
import Index from "../components/categories";
import Loading from "../loading";

const data = {
  title: "Букеты в наличии",
  description:
    "Онлайн витрина 💐букетов с быстрой доставкой по Калининграду и области. Уникальный дизайн, только свежие и качественные цветы.",
  canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/categories`,
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 7,
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
  const filteredCats = getFilteredCategories(categories, products);
  return { products, categories: filteredCats };
}

export async function generateStaticParams() {
  const categories = await fetch(
    `${process.env.BACKEND_BASE_URL}/categories`
  ).then((res) => res.json());
  return categories.map((p) => ({ id: String(p.id) }));
}
export async function generateMetadata({ params: { id } }) {
  return {
    title: data.title,
    description: data.description,

    metadataBase: new URL(data.canonical),
    generator: "Next.js",
    applicationName: "Цветочная мастерская Матрёшка",
    referrer: "origin-when-cross-origin",
    keywords: ["Продажа цветов", "букеты", "онлайн", "цветы с доставкой"],
    authors: [{ name: "Юлиана Легкодумова" }],
    creator: "Юлиана Легкодумова",
    publisher: "Юлиана Легкодумова",
    alternates: {
      canonical: data.canonical,
    },
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
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.canonical,
      siteName: "Цветочная мастерская Матрёшка",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/og_banner.jpg`,
          width: 634,
          height: 634,
        },
        {
          url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/vk_banner.jpg`,
          width: 1418,
          height: 634,
          alt: "Цветочная мастерская Матрёшка",
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
      <Suspense fallback={<Loading />}>
        <Index {...{ products, categories }} />
      </Suspense>
    </>
  );
}
