import React from "react";
import Slider from "./slider";
import Categories from "./categories";
import { Category, ProductItem } from "@/types";

type Props = { products: Array<ProductItem>; categories: Array<Category> };

export default function Production({ products, categories }: Props) {
  return (
    <section className="production container">
      <style jsx>{`
        .production {
          grid-column: 1/4;
          padding-top: var(--space-med);
          display: grid;
          grid-gap: var(--space-small);
          padding: var(--space-small);
          background: var(--main-green);

          border-radius: 40px;
          position: relative;
        }

        h2 {
          position: absolute;
          top: -30px;
          left: 0;
          background: var(--main-green);

          border-radius: 40px 40px 0 0;
          padding: 1rem;
        }
        h3 {
          grid-column: 2/4;
        }
      `}</style>
      <h2>Роскошные букеты </h2>
      <h3>Работаем только с качественными цветами</h3>
      <Slider {...{ products }} />
      <Categories {...{ categories }} />
    </section>
  );
}
