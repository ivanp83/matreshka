"use client";

import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";

export default function Index({ products, categories }) {
  return (
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
  );
}