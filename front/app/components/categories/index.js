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
  const json = [
    {
      "@context": "http://schema.org/",
      "@type": "Article",
      headline: data.title,

      description: data.description,
      author: "Юлиана Легкодумова",
      datePublished: "2023-06-21",
      dateModified: "2023-07-26",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://matryoshkaflowers.ru/",
      },
      articleBody: String(data.content),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Проекты",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/about`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Информация",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/info`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Контакты",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/contacts`,
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
      </section>{" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </motion.div>
  );
}
