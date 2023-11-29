"use client";

import React from "react";
import CustomImage from "../image";
import { currencyFormat } from "@/utils/helpers";
import Link from "next/link";

export default function Gallery({ data }) {
  return (
    <ul>
      <style jsx>{`
        ul {
          grid-column: 2/4;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: var(--space-small);
          grid-column-gap: 20px;
        }
        figure {
          overflow: hidden;
        }
        .image {
          overflow: hidden;
          width: 100%;
          height: calc((var(--cont-w) * 0.63 / 3) * 4 / 3);
        }
        .inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: 0.5s ease;
          transform-origin: bottom;
        }
        figcaption {
          text-align: center;
          margin-top: 5px;
        }
        b {
          font-weight: 600;
        }
        @media (hover: hover) and (pointer: fine) {
          li:hover .inner {
            transform: scale(1.02);
          }
        }
        @media all and (max-width: 1024px) {
          ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-row-gap: 2rem;
            grid-column-gap: 1rem;
          }
          .image {
            height: calc((100vw / 2 - 20px) * 4 / 3);
          }
        }
        @media all and (max-width: 1024px) and (orientation: portrait) {
          ul {
            grid-column: 1/4;
          }
        }
        @media all and (max-width: 1024px) and (orientation: landscape) {
          .image {
            height: calc((70vw / 2 - var(--space-small)) * 4 / 3);
          }
        }
      `}</style>
      {data.map((prod) => (
        <li key={prod.id}>
          <Link
            href={{
              pathname: String(`product/${prod.id}`),
              query: { search: "normal" },
            }}
          >
            <figure>
              <div className="image">
                <div className="inner">
                  <CustomImage
                    src={prod.big}
                    alt={prod.name}
                    sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw,
20vw"
                  />
                </div>
              </div>
              <figcaption>
                <b>{prod.name}</b>
                <p className="price">{currencyFormat(prod.price)}</p>
              </figcaption>
            </figure>
          </Link>
        </li>
      ))}
    </ul>
  );
}
