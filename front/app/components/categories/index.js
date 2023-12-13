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
        description: "Коллекция ярких дизайнерских худи от Лоры Бровко",
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
            height: 3rem;
            overflow: hidden;
          }

          .scroll p,
          h1 {
            font-size: var(--main-fs);

            font-weight: 400;
            margin-bottom: 0;
            line-height: 10px;
          }

          .RightToLeft {
            animation: RightToLeft 10s infinite linear;
          }

          @keyframes RightToLeft {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
        <div className="heading">
          <CanvasBanner />
          <div className="markq">
            <Marquee>
              <h1>Прекрасные букеты с доставкой по Калининграду</h1>&nbsp;
              <span className="icon">&nbsp; &#128144; &nbsp;</span>
              {categories.map((c) => (
                <p key={c.id}>
                  {c.name} <span className="icon">&nbsp; &#128144; &nbsp;</span>
                </p>
              ))}
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
