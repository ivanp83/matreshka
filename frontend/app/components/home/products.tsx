import React from "react";
import Slider from "./slider";
import Categories from "./categories";
import { Category, ProductItem } from "@/types";

type Props = { products: Array<ProductItem>; categories: Array<Category> };

export default function Products({ products, categories }: Props) {
  return (
    <section className="products container">
      <style jsx>{`
        .products {
          grid-column: 1/4;
          display: grid;
          grid-gap: var(--space-small);
          padding: var(--space-small) 1rem var(--space-med);
          background: var(--main-green);
          position: relative;
        }

        h2 {
          position: absolute;
          top: -30px;
          left: 0;
          background: var(--main-green);
          border-radius: 26px 26px 0 0;
          padding: 10px 1rem;
        }
        h3 {
          grid-column: 2/4;
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          h3 {
            grid-column: 1/4;
          }
        }
      `}</style>
      <h2>Роскошные букеты </h2>
      <h3>Работаем только с качественными цветами</h3>
      <Slider {...{ products }} />
      <Categories {...{ categories }} />
    </section>
  );
}
