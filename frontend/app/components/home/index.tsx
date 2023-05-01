"use client";

import { Category, ProductItem } from "@/types";

import Banner from "./banner";
import Story from "./story";
import Events from "./events";
import Products from "./products";
import Categories from "./categories";

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
      <Story />
      <Products {...{ products }} />
      <Categories {...{ categories }} />
      <Events />
    </article>
  );
}
