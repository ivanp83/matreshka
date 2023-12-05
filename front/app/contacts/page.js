import Index from "@/app/components/contacts/";
const data = {
  title: "Контакты | Цветочный бутик Матрёшка ",

  description:
    "Звоните нам и заказывайте роскошные букеты для любого случая! Мы доставим заказ по Калининграду и области в течении 1 часа!",
  canonical: "https://matryoshkaflowers.ru/contacts",
  content: {
    headline: "Контакты",
    address: "Калининград, улица Виктора Гакуна, 5Б",
    phone: "+7 911 493-99-99",
    email: "matreshkaflower@bk.ru",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "white",
};
export const metadata = {
  title: data.title,
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
      follow: true,
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
export default function Page(props) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,

        item: {
          "@type": "WebPage",
          "@id": "https://matryoshkaflowers.ru",
          url: "https://matryoshkaflowers.ru",
          name: "Главная",
        },
      },
      {
        "@type": "ListItem",
        position: 2,

        item: {
          "@type": "WebPage",
          "@id": "https://matryoshkaflowers.ru/categories",
          url: "https://matryoshkaflowers.ru/categories",
          name: "Категории",
        },
      },
      {
        "@type": "ListItem",
        position: 3,

        item: {
          "@type": "WebPage",
          "@id": "https://matryoshkaflowers.ru/about",
          url: "https://matryoshkaflowers.ru/about",
          name: "About",
        },
      },

      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "WebPage",
          "@id": "",
          url: "",
          name: "Контакты",
        },
      },
    ],
  };
  return (
    <>
      <Index data={data.content} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
