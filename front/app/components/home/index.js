"use client";

import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";

export default function Index({ products, categories }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      products.map((product) => ({
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: [`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.big}`],
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "RUB",
        },
      })),
    ],
  };

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
