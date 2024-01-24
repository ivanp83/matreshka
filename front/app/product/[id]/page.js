import Index from "@/app/components/product";
import React, { Suspense } from "react";
import Loading from "../../loading";
async function getData(id) {
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  const product = productsRes.find((prod) => prod.id == id);
  const products = productsRes.filter((prod) => prod.id !== Number(id));
  return { product, products };
}
export async function generateStaticParams() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`
  ).then((res) => res.json());
  return products.map((p) => ({ id: String(p.id) }));
}
export async function generateMetadata({ params: { id } }) {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`
  ).then((res) => res.json());

  const product = products.find((p) => p.id == id && p);
  const data = {
    title: `Цветочный букет - ${product.title}, купить в Калининграде за ${product.price} рублей`,
    description: `${product.name} - заказать онлайн с доставкой по Калининграду и области. Премиальное качество цветов и материалов, оригинальный дизайн!`,
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/product/${product.id}`,
  };
  return {
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
      canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/product/${product.id}`,
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
          url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.big}`,
          width: 768,
          height: 1024,
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

export default async function Page({ params: { id } }) {
  const { product, products } = await getData(id);

  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@context": "http://schema.org",
        "@type": "Florist",
        name: "Цветочная мастерская «Матрёшка»",
        description:
          "Роскошные букеты и цветы с доставкой по Калининграду и области.",
        url: process.env.NEXT_PUBLIC_DOMAIN,
        logo: `${process.env.NEXT_PUBLIC_DOMAIN}/images/logo.png`,
        openingHours: "Mo-Su 0:00-24:00",
        image: `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
        email: "matreshkaflower@bk.ru",

        telephone: "+7911 493 9999",
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
            name: "Цветочная мастерская «Матрёшка»",
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
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "2500",
          highPrice: "40000",
          priceCurrency: "RUB",
        },
      },
      {
        "@type": "Product",
        name: product.name,
        image: [`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.big}`],
        description: product.description,
        brand: {
          "@type": "Brand",
          name: "Цветочная мастерская Матрёшка",
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
        },

        url: `${process.env.NEXT_PUBLIC_DOMAIN}/product/${product.id}`,
      },
      {
        "@type": "Organization",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Россия, Калининград",
          postalCode: "236011",
          streetAddress: "ул. Виктора Гакуна д5",
        },
        email: "matreshkaflower@bk.ru",
        name: "Цветочная мастерская «Матрёшка»",
        telephone: "+7911 493 9999",
        image: {
          "@type": "ImageObject",
          inLanguage: "ru-RU",
          "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.big}`,
          url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.big}`,
          contentUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/product/${product.id}`,
          width: 768,
          height: 1024,
        },
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/product/${product.id}`,
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <Suspense fallback={<Loading />}>
        <Index data={product} faturedData={products} />
      </Suspense>
    </>
  );
}
