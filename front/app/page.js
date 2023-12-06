import Index from "./components/home";
import { Envs } from "@/utils/config";
import Loading from "./loading";
import { Suspense } from "react";

const data = {
  title: "Интернет-магазин премиальных букетов в Калининграде",
  description:
    "Роскошные 💐букеты и 🌹цветы для любого 🎉случая с быстрой доставкой по Калининграду и области.",
  canonical: "https://matryoshkaflowers.ru",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "white",
};
export const metadata = {
  title: "Интернет-магазин премиальных букетов в Калининграде",
  description: data.description,
  metadataBase: new URL(data.canonical),

  generator: "Next.js",
  applicationName: "Матрёшка Флаверс",
  referrer: "origin-when-cross-origin",
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
    type: "article",
    publishedTime: "2023-09-01",
    authors: ["Юлиана Легкодумова"],
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

async function getCategories() {
  const res = await fetch(`${Envs.BACKEND_BASE_URL}/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }

  return res.json();
}
async function getProducts() {
  const yandexFeedId = await fetch(`https://api.webmaster.yandex.net/v4/user`, {
    Authorization:
      "Bearer y0_AgAAAABmz_OTAAruuAAAAADzyerMY2cwaEK7QvSuqPgq-IcIHzb4npk",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  return products.filter((prod) => prod.stock === true);
}
export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Index {...{ products, categories }} />
      </Suspense>
    </>
  );
}
