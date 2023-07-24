"use client";

import React from "react";
import CustomImage from "../image";
import { currencyFormat } from "@/utils/helpers";
import Btns from "./btns";
import { useAppContext } from "@/app/context/app.context";
import Link from "next/link";

export default function CartItem({ item }) {
  const { cartItems } = useAppContext();
  const count = cartItems.find((prod) => prod.id === item.id);
  return (
    <li key={item.id}>
      <style jsx>{`
        figure {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 1rem;
          width: fit-content;
          position: relative;
          overflow: hidden;
        }
        .image {
          overflow: hidden;
          position: relative;
          width: 8rem;
          height: calc(8rem * 4 / 3);
        }

        figcaption {
          display: grid;
          height: fit-content;
          grid-gap: var(--space-small);
        }

        .count {
          position: absolute;
          top: 5px;
          left: 5px;
          font-size: 18px;
          padding: 4px;
          z-index: 1;
          border-radius: 50%;
          background: var(--main-dark);
          color: var(--main-light);
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media all and (max-width: 600px) and (orientation: portrait) {
          figure {
            grid-gap: var(--space-small);
          }
        }
      `}</style>
      <figure>
        <Link href={`product/${item.id}`}>
          <div className="image">
            <CustomImage
              src={item.small}
              alt={item.name}
              sizes="(max-width: 768px) 50vw,
(max-width: 1200px) 300px"
            />
          </div>
        </Link>
        <figcaption>
          <div>
            <h4>{item.name}</h4>
            <span className="price">{currencyFormat(item.price)}</span>
          </div>
          <span className="count">{count?.quantity}</span>

          <Btns data={item} />
        </figcaption>
      </figure>
    </li>
  );
}
