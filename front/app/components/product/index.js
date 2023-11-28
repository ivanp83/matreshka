"use client";

import React, { useEffect, useState } from "react";
import CustomImage from "../image";
import { currencyFormat } from "@/utils/helpers";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";
import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import SubNav from "../subNav";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../hoc/withPortal";

const Loader = dynamic(() => import("../loader"), { ssr: false });
const FeaturedProducts = dynamic(() => import("./featuredProducts"), {
  loading: () => <Loader />,
});
const CartAside = dynamic(() => import("../shared/cartAside"), {
  ssr: false,
});

export default function Index({ data: product, faturedData }) {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  console.log(search);
  const [avatarIsVisible, setstAvatarIsVisible] = useState(false);
  const { onUpdate, cartItems, setActiveCategory, cartPosition } =
    useAppContext();
  const addToCart = (product) => {
    onUpdate(product);
    setstAvatarIsVisible(true);
    setTimeout(() => {
      setstAvatarIsVisible(false);
    }, 4500);
  };

  const router = useRouter();
  useEffect(() => {
    setActiveCategory(product.category_id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="wrapp container">
        <style jsx>{`
          .wrapp {
            grid-column: 2/4;
          }

          .image {
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
            padding: 2rem;
          }
          .top {
            width: 100%;
            display: grid;
            grid-gap: 5px;
          }
          h1 {
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
            .content {
              width: 100%;
              grid-template-columns: 1fr;
            }
            h1 {
              font-size: 22px;
            }
            .details {
              padding: 0;
            }
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
          @media all and (max-width: 1000px) and (orientation: landscape) {
            .details {
              padding: 0;
            }
          }
        `}</style>
        <Portal>
          <AnimatePresence>
            {!!avatarIsVisible && <CartAside />}
          </AnimatePresence>
        </Portal>

        <SubNav categoryId={product.category_id} />

        <div className="image">
          <CustomImage
            src={product.big}
            alt={product.name}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
          />
        </div>
        <div className="details">
          <div className="top">
            <h1>{product.name}</h1>
            <div>
              <span>{currencyFormat(product.price)}</span>
            </div>
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
                actionType="proceed"
                title="Завершить"
                onClick={() => router.push("/cart")}
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <FeaturedProducts data={faturedData} />
      </section>
    </motion.div>
  );
}
