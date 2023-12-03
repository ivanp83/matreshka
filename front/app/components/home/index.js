"use client";

import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";

export default function Index({ products, categories }) {
  const json = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        products.map((product) => ({
          "@type": "Product",
          name: product.name,
          description: product.description,
          image: ["https://matryoshkaflowers.ru/${product.big}"],
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "RUB",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: product.price,
              priceCurrency: "RUB",
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "RU",
              returnPolicyCategory:
                "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: 14,
              returnMethod: "https://schema.org/ReturnByMail",
              returnFees: "https://schema.org/FreeReturn",
            },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: product.price,
                currency: "RUB",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "RU",
              },
            },
          },
        })),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,

          item: {
            "@type": "WebPage",
            "@id": "",
            url: "",
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
            name: "Букеты",
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
            "@id": "https://matryoshkaflowers.ru/contacts",
            url: "https://matryoshkaflowers.ru/contacts",
            name: "Контакты",
          },
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <style jsx>{`
          section {
            width: 100%;
            height: 100%;
          }
        `}</style>
        <Banner />
        <Story />
        <Products {...{ products }} />
        <Categories {...{ categories }} />
        <Events />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      </section>
    </motion.div>
  );
}
