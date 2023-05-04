"use client";
import { ProductItem } from "@/types";
import React, { useEffect, useState } from "react";
import CustomImage from "../image";
import { currencyFormat } from "@/utils/helpers";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import SubNav from "../subNav";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../hoc/withPortal";
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
  const [avatarIsVisible, setstAvatarIsVisible] = useState(false);
  const { onUpdate, cartItems, setActiveCategory, cartPosition } =
    useAppContext();
  const addToCart = (product: ProductItem) => {
    onUpdate(product);
    setstAvatarIsVisible(true);
    setTimeout(() => {
      setstAvatarIsVisible(false);
    }, 1500);
  };
  const router = useRouter();
  useEffect(() => {
    setActiveCategory(product.category_id);
  }, [product]);

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
        <Portal>
          <AnimatePresence>
            {avatarIsVisible && (
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 1.8 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
                exit={{
                  y: -50,
                  opacity: 0,
                  scale: 0.5,
                  transition: { duration: 0.4, ease: "easeInOut" },
                }}
                style={{
                  width: "4rem",
                  height: "5rem",
                  position: "fixed",
                  zIndex: 101,
                  left: `${cartPosition.x}px`,
                  top: `${cartPosition.y}px`,
                }}
              >
                <CustomImage
                  src={product.big}
                  alt={product.name}
                  sizes="60px"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </Portal>

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
