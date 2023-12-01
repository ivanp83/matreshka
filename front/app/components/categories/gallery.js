/* eslint-disable @next/next/no-img-element */
"use client";

import React, { Fragment } from "react";
import CustomImage from "../image";
import { currencyFormat } from "@/utils/helpers";
import Link from "next/link";

export default function Gallery({ data }) {
  return (
    <div className="list">
      <style jsx>{`
        .list {
          grid-column: 2/4;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-row-gap: var(--space-small);
          grid-column-gap: 20px;
        }
        .wrapper {
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
        .text {
          text-align: center;
          margin-top: 5px;
        }
        .text > * {
          font-size: 16px;
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
          .list {
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
          .list {
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
        <Fragment key={prod.id}>
          <article>
            <Link href={String(`/product/${prod.id}`)}>
              <div className="wrapper">
                <div className="image">
                  <div className="inner">
                    <CustomImage
                      src={prod.big}
                      alt={`Заказать ${prod.name}`}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
                <div className="text">
                  <h3>
                    <b>{prod.name}</b>
                  </h3>
                  <p className="price">{currencyFormat(prod.price)}</p>
                </div>
              </div>
            </Link>
          </article>
        </Fragment>
      ))}
    </div>
  );
}
