import Index from "./components/home";
import Loading from "./loading";
import { Suspense } from "react";

const data = {
  title: "Интернет-магазин премиальных букетов и 🌹цветов | Матрёшка",
  description:
    "Роскошные 💐букеты для любого 🎉случая c доставкой по Калининграду и области. Только лучшие цветы и материалы, любовь и красота в каждом букете.",
  canonical: process.env.NEXT_PUBLIC_DOMAIN,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 7,
  themeColor: "white",
};
export const metadata = {
  title: data.title,
  description: data.description,
  metadataBase: new URL(data.canonical),
  generator: "Next.js",
  applicationName: "Цветочная мастерская Матрёшка",
  referrer: "origin-when-cross-origin",
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
    type: "article",
    publishedTime: "2023-09-01",
    authors: ["Юлиана Легкодумова"],
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

async function getCategories() {
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }

  return res.json();
}
async function getProducts() {
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
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@context": "http://schema.org",
        "@type": "Florist",
        name: "Интернет-магазин букетов и цветов | Матрёшка",
        description:
          "Мы изготавливем роскошные и премиальные букеты для любого случая. Только самые лучшие цветы и качественные материалы!  Заказывайте с доставкой по Калининграду и области.",
        url: process.env.NEXT_PUBLIC_DOMAIN,
        logo: `${process.env.NEXT_PUBLIC_DOMAIN}/images/logo.png`,
        openingHours: "Mo-Su 0:00-24:00",
        image: `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
        email: "matreshkaflower@bk.ru",
        telephone: "+7911 493 9999",
        currenciesAccepted: "RUB",
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 54.7069483622634,
            longitude: 20.51705837830623,
          },
          geoRadius: 150000,
        },
        priceRange: "от 2500 руб",
        sameAs: [
          "https://www.instagram.com/yulianalegkodumova/",
          "https://t.me/YulianaLegkodumova",
          "https://vk.com/matreshkaflower",
        ],
        potentialAction: {
          "@type": "ReadAction",
          agent: {
            "@type": "Person",
            name: "Юлиана Легкодумова",
          },
          object: {
            "@type": "WebPage",
            name: "Интернет-магазин букетов и цветов | Матрёшка",
          },
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "matreshkaflower@bk.ru",
          name: "работа с клиентами",
          telephone: "+7911 493 9999",
          contactType: "customer service",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Россия, Калининград",
          postalCode: "236011",
          streetAddress: "ул. Виктора Гакуна д5",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "4924",
          worstRating: "1",
          bestRating: "5",
        },
        founder: {
          "@type": "Person",
          image: `${process.env.NEXT_PUBLIC_DOMAIN}/images/1.jpg`,
          name: "Юлиана Легкодумова",
          sameAs: "https://www.instagram.com/yulianalegkodumova/",
        },
      },

      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,

            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}`,
              name: "Главная",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/categories`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/categories`,
              name: "Категории",
            },
          },
          {
            "@type": "ListItem",
            position: 3,

            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
              name: "About",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/info`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/info`,
              name: "Информация",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/contacts`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/contacts`,
              name: "Контакты",
            },
          },
        ],
      },

      {
        "@type": "OfferCatalog",
        name: "Цветочная мастерская 'Матрёшка",
        image: `${process.env.NEXT_PUBLIC_DOMAIN}/images/lora.webp`,
        description: "Роскошные букеты для любого случая",
        itemListElement: [
          products.map((product) => ({
            "@type": "Offer",
            name: product.name,
            description: product.description,
            url: `${process.env.NEXT_PUBLIC_DOMAIN}/product/${product.id}`,
            price: product.price,
            priceCurrency: "RUB",
            image: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.small}`,
            availability: "https://schema.org/InStock",
          })),
        ],
      },
    ],
  };

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Index {...{ products, categories, data }} />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
