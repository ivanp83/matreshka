"use client";

import React from "react";
import SubNav from "../sub-nav";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Marquee from "react-fast-marquee";

const Gallery = dynamic(() => import("./gallery"), {});
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
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "2500",
          highPrice: "40000",
          priceCurrency: "RUB",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <style jsx>{`
          .categories {
            height: 100%;
            align-items: start;
          }
          .heading {
            grid-column: 1/4;
            grid-row: 1;
            position: relative;
            margin-bottom: var(--space-small);
            background: var(--main-pink);
            overflow: hidden;
          }

          .markq {
            display: flex;
            align-items: center;
            height: 3.4rem;
            overflow: hidden;
          }

          .icon,
          h1 {
            font-size: 1.4rem;
            font-weight: var(--main-fw);
            margin-bottom: 0;
            line-height: 1.2;
          }
        `}</style>
        <div className="heading">
          <CanvasBanner />
          <div className="markq">
            <Marquee>
              <h1>Много не надо, нужно всё и букет цветов&nbsp; 🤍 &nbsp;</h1>
              <p className="icon">
                О любви к себе дому и цветам&nbsp; 🤍 &nbsp;
              </p>
              <p className="icon">
                Порадуй своего внутреннего ребенка&nbsp; 🤍 &nbsp;
              </p>{" "}
            </Marquee>
          </div>
        </div>
        <div className="categories container">
          <SubNav {...{ categories }} />
          <Gallery data={products} />
        </div>
      </motion.section>
    </>
  );
}
