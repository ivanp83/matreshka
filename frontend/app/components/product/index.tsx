"use client";
import { ProductItem } from "@/types";
import React, { useEffect } from "react";
import CustomImage from "../image";
import { currencyFormat } from "@/utils/helpers";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import SubNav from "../subNav";

const Loader = dynamic(() => import("../loader"), { ssr: false });
const FeaturedProducts = dynamic(() => import("./featuredProducts"), {
  ssr: false,
  loading: () => <Loader />,
});
type Props = {
  data: ProductItem;
  faturedData: ProductItem[];
};

export default function Index({ data: product, faturedData }: Props) {
  const { onUpdate, cartItems, setActiveCategory } = useAppContext();
  const addToCart = (product: ProductItem) => {
    onUpdate(product);
  };
  const router = useRouter();
  useEffect(() => {
    setActiveCategory(product.category_id);
  }, [product]);
  return (
    <section className="wrapp container">
      <style jsx>{`
        .wrapp {
          grid-column: 2/4;
        }

        .image {
          overflow: hidden;
          border-radius: 10px;
          grid-column: 2/3;
          position: relative;
          width: 65vh;
          height: calc(65vh * 4 / 3);
        }
        .details {
          grid-column: 3/4;
          display: grid;
          height: fit-content;
          grid-gap: var(--space-small);
        }
        .top {
          width: 100%;
          display: grid;
          grid-gap: 5px;
        }
        h1 {
          text-transform: uppercase;
          font-size: 2rem;
          font-weight: 500;
        }
        .descr {
          margin-bottom: 1rem;
        }
        .btns {
          display: grid;
          grid-gap: 1rem;
        }
        @media all and (max-width: 1024px) and (orientation: portrait) {
          .wrapp {
            width: 100%;
          }
          .image {
            width: 100%;
            grid-column: 1/4;
            height: calc((100vw - 40px) * 4 / 3);
          }
          .top {
            margin-top: 1rem;
          }
          .details {
            grid-column: 1/4;
          }
        }
        @media all and (max-width: 768px) and (orientation: portrait) {
          .content {
            width: 100%;
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 22px;
          }
        }
        @media all and (max-width: 1024px) and (orientation: landscape) {
          .wrapp {
            width: 100%;
          }
        }
      `}</style>
      <SubNav categoryId={product.category_id} />

      <div className="image">
        <CustomImage
          src={product.big}
          alt={product.name}
          sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw"
        />
      </div>
      <div className="details">
        <div className="top">
          <h1>{product.name}</h1>
          <span>{currencyFormat(product.price)}</span>
        </div>
        <span className="descr">{product.description}</span>
        <div className="btns">
          <Button
            actionType="shop"
            title="В корзину"
            onClick={() => addToCart(product)}
          />
          {cartItems.length ? (
            <Button
              actionType="finish"
              title="Завершить"
              onClick={() => router.push("/shipping")}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <FeaturedProducts data={faturedData} />
    </section>
  );
}
