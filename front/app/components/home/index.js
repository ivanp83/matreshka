"use client";

import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";
import { getDate } from "@/utils/helpers";
import { Envs } from "@/utils/config";

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
          image: [`${Envs.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.small}`],
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "RUB",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
            price: product.price,
            priceCurrency: "RUB",
            priceValidUntil: getDate(),
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: {
                "@type": "MonetaryAmount",
                value: 300,
                currency: "RUB",
              },
              shippingDestination: {
                "@type": "DefinedRegion",
                addressCountry: "RU",
              },
              "@type": "OfferShippingDetails",

              deliveryTime: {
                "@type": "ShippingDeliveryTime",
                handlingTime: {
                  "@type": "QuantitativeValue",
                  minValue: 0,
                  maxValue: 1,
                  unitCode: "DAY",
                },
                transitTime: {
                  "@type": "QuantitativeValue",
                  minValue: 1,
                  maxValue: 2,
                  unitCode: "HOUR",
                },
              },
            },
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
