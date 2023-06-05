"use client";

import { Category, ProductItem } from "@/types";
import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";
import { YandexMetricaProvider } from "next-yandex-metrica";
type Props = { products: Array<ProductItem>; categories: Array<Category> };

export default function Index({ products, categories }: Props) {
  return (
    <YandexMetricaProvider
      tagID={Number(process.env.NEXT_PUBLIC_YANDEX_METRICS)}
      initParameters={{
        clickmap: true,
        trackLinks: true,
        webvisor: true,
        accurateTrackBounce: true,
        ecommerce: "dataLayer",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <article>
          <style jsx>{`
            article {
              width: 100%;
              height: 100%;
            }
          `}</style>
          <Banner />
          <Story />
          <Products {...{ products }} />
          <Categories {...{ categories }} />
          <Events />
        </article>
      </motion.div>
    </YandexMetricaProvider>
  );
}
