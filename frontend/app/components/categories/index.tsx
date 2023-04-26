"use client";
import { Category, ProductItem } from "@/types";
import React, { useEffect, useState } from "react";
import SubNav from "../subNav";

import dynamic from "next/dynamic";
import { Api } from "@/api";
import { useAppContext } from "@/app/context/app.context";
const Loader = dynamic(() => import("../loader"), { ssr: false });
const Gallery = dynamic(() => import("./gallery"), {
  ssr: false,
  loading: () => <Loader />,
});
type Props = { categories: Array<Category> };

export default function Index({ categories }: Props) {
  const { loading, setLoading, activeCategory } = useAppContext();
  const [stateProducts, setStateProducts] = useState<Array<ProductItem>>();
  const handleProducts = async (id: number) => {
    try {
      let res;
      setLoading(true);
      if (id === 0) {
        res = await Api().product.findAll();
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
  );
}
