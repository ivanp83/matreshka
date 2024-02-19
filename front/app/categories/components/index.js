"use client";
import styles from "../styles.module.scss";
import React from "react";
import SubNav from "../../components/shared/sub-nav";
import dynamic from "next/dynamic";
import Heading from "./heading";
import Loader from "@/app/components/loader";

const Gallery = dynamic(() => import("./gallery"), {
  loading: () => <Loader />,
});
const CanvasBanner = dynamic(() => import("./canvas-banner"), { ssr: false });

export default function Index({ categories, products }) {
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
              "@id": process.env.NEXT_PUBLIC_DOMAIN,
              url: process.env.NEXT_PUBLIC_DOMAIN,
              name: "Главная",
            },
          },
          {
            "@type": "ListItem",
            position: 2,

            item: {
              "@type": "WebPage",
              "@id": "",
              url: "",
              name: "Категории",
            },
          },
          {
            "@type": "ListItem",
            position: 3,

            item: {
              "@type": "WebPage",
              "@id": process.env.NEXT_PUBLIC_DOMAIN + "/about",
              url: process.env.NEXT_PUBLIC_DOMAIN + "/about",
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
              "@id": process.env.NEXT_PUBLIC_DOMAIN + "/contacts",
              url: process.env.NEXT_PUBLIC_DOMAIN + "/contacts",
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
      <div className={styles.categories}>
        <Heading />
        <SubNav {...{ categories }} />
        <Gallery data={products} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
