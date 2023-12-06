"use client";

import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";
import { getDate } from "@/utils/helpers";
import { Envs } from "@/utils/config";

export default function Index({ products, categories, data }) {
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://matryoshkaflowers.ru",
        url: "https://matryoshkaflowers.ru",
        name: data.title,
        isPartOf: { "@id": "https://matryoshkaflowers.ru" },
        primaryImageOfPage: {
          "@id": "https://matryoshkaflowers.ru/images/8.jpg",
        },
        image: {
          "@id": "https://matryoshkaflowers.ru/images/8.jpg",
        },

        datePublished: "2023-12-05T17:20:46+00:00",
        dateModified: "2023-12-06T18:18:43+00:00",
        description: data.description,

        inLanguage: "ru-RU",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: "https://matryoshkaflowers.ru",
          },
        ],
      },
      {
        "@type": "ImageObject",
        inLanguage: "ru-RU",
        "@id": `https://matryoshkaflowers.ru/images/8.jpg`,
        url: `https://matryoshkaflowers.ru/images/8.jpg`,
        contentUrl: `https://matryoshkaflowers.ru/images/8.jpg`,
        width: 682,
        height: 1024,
        author: "Юлиана Легкодумова",
        contentLocation: "Россия, Калининград",
        contentUrl: "https://matryoshkaflowers.ru/images/8.jpg",
        datePublished: "2023-09-25",
        description:
          "Девушка с букетом красивых цветов, русский национальный стиль, косынка и платье в горошек.",
      },
      {
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
      {
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
            },
          })),
        ],
      },
    ],
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home">
        <style jsx>{`
          section,
          .home {
            width: 100%;
            height: 100%;
          }
        `}</style>
        <section style={{ display: "flex", order: "revert" }}>
          <Banner />
          <Story />
        </section>

        <Products {...{ products }} />
        <Categories {...{ categories }} />
        <Events />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
        />
      </div>
    </motion.div>
  );
}
