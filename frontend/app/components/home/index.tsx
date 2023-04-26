"use client";

import { Category, ProductItem } from "@/types";

import Banner from "./banner";
import Content from "./content";
import Events from "./events";
import Products from "./products";

type Props = { products: Array<ProductItem>; categories: Array<Category> };

export default function Index({ products, categories }: Props) {
  return (
    <article>
      <style jsx>{`
        article {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <Banner />
      <Content />
      <Products {...{ products, categories }} />
      <Events />
    </article>
  );
}
