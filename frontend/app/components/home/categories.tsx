import { Category } from "@/types";
import React from "react";
import CustomImage from "../image";
import Link from "next/link";

type Props = {
  categories: Array<Category>;
};

export default function Categories({ categories }: Props) {
  return (
    <section className="categories container">
      <style jsx>{`
        .categories {
          grid-column: 1/4;
          padding: var(--space-small) 0 0;
        }
        h2 {
          grid-column: 1/2;
        }

        ul {
          grid-column: 2/4;
          display: grid;
          grid-template-columns: 1fr;
        }
        li {
          display: flex;
          border-bottom: 1px solid;
          padding: 1rem 0;
          position: relative;
        }
        .text {
          line-height: 1;
          font-weight: 500;
          font-size: 3.1rem;
          text-transform: uppercase;
        }
        .num {
          display: inline-flex;
          margin-right: 10px;
          line-height: 1;
          font-size: 16px;
        }
        a {
          display: contents;
        }
        .image {
          position: absolute;
          width: 3.5rem;
          height: 4.5rem;
          top: 0;
          right: 0;
          opacity: 0;
          transition: all 0.5s;
        }

        li:last-of-type {
          border-bottom: none;
        }
        @media (hover: hover) and (pointer: fine) {
          li:hover .image {
            opacity: 1;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          h2 {
            margin-bottom: var(--space-small);
          }
          ul {
            grid-column: 1/4;
          }
        }
        @media all and (max-width: 1024px) and (orientation: portrait) {
          .text {
            font-size: 4vw;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .text {
            font-size: 6vw;
          }
        }
        @media all and (max-width: 1024px) and (orientation: landscape) {
          .text {
            line-height: 1;
            font-weight: 500;
            font-size: 4vw;
            text-transform: uppercase;
          }
        }
      `}</style>
      <h2>Категории</h2>
      <ul>
        {categories.map((cat, i) => (
          <li key={cat.id}>
            <Link href={`categories`}>
              <div className="image">
                <CustomImage src={cat.image} alt={cat.name} />
              </div>
              <span className="num">0{i + 1}/</span>
              <span className="text">{cat.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
