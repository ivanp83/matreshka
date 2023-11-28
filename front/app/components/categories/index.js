"use client";

import React, { useEffect, useState } from "react";
import SubNav from "../subNav";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Api } from "@/api";
import { useAppContext } from "@/app/context/app.context";
const Loader = dynamic(() => import("../loader"), { ssr: false });
const Gallery = dynamic(() => import("./gallery"), {
  loading: () => <Loader />,
});

export default function Index({ categories }) {
  const { loading, setLoading, activeCategory } = useAppContext();
  const [stateProducts, setStateProducts] = useState();
  const handleProducts = async (id) => {
    try {
      let res;
      setLoading(true);
      if (id == 0) {
        const allProducts = await Api().product.findAll();
        res = allProducts.filter((p) => p.available);
      } else {
        res = await Api().category.findByIdWithProducts(id);
      }
      setStateProducts(res);
    } catch (error) {
      alert("Ошибка на сервере");
    } finally {
      setLoading(false);
    }
  };
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const res = await Api().product.findAll();

      setStateProducts(res);
    } catch (error) {
      alert("Ошибка на сервере");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => await handleProducts(activeCategory))();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="categories container">
        {loading && <Loader />}
        <style jsx>{`
          .categories {
            height: 100%;
            align-items: start;
          }
        `}</style>
        <SubNav {...{ categories, handleProducts, getAllProducts }} />
        {stateProducts && <Gallery data={stateProducts} />}
      </section>
    </motion.div>
  );
}
