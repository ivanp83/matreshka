"use client";

import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";
import { getDate } from "@/utils/helpers";

export default function Index({ products, categories, data }) {
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
      </div>
    </motion.div>
  );
}
