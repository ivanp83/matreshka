"use client";

import { motion } from "framer-motion";
import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./sale";

import { getDate } from "@/utils/helpers";
import FAQ from "./FAQ/faq";
import ShowOffGallery from "./showOffGallery";
import Categories from "./categories/index";
import Process from "./process";

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
        <Banner />
        <Categories {...{ categories }} />
        <Story />
        <ShowOffGallery />
        <Products {...{ products }} />

        <Process />
        {/*   <Events />
        <FAQ />  */}
      </div>
    </motion.div>
  );
}
