"use client";

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
import Link from "next/link";
const Loader = dynamic(() => import("../loader"), { ssr: false });
const FeaturedProducts = dynamic(() => import("./featuredProducts"), {
  loading: () => <Loader />,
});

export default function Index({ data: product, faturedData }) {
  const [avatarIsVisible, setstAvatarIsVisible] = useState(false);
  const { onUpdate, cartItems, setActiveCategory, cartPosition } =
    useAppContext();
  const addToCart = (product) => {
    onUpdate(product);
    setstAvatarIsVisible(true);
    setTimeout(() => {
      setstAvatarIsVisible(false);
    }, 1500);
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
              height: calc((100vw) * 4 / 3);
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
            {avatarIsVisible && (
              <Link href="/cart">
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{
                    y: 0,

                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                  exit={{
                    y: "-100%",

                    transition: { duration: 0.4, ease: "easeInOut" },
                  }}
                  style={{
                    padding: "10px 40px",
                    width: "fit-content",
                    backgroundColor: "var(--main-pink)",
                    borderRadius: "0px 0px 10px 10px",
                    color: "var(--main-light)",
                    display: "grid",
                    gridAutoFlow: "row",
                    gridTemplateRows: "1fr 1fr",
                    placeContent: "center",
                  }}
                >
                  <svg
                    style={{ justifySelf: "center", gridRow: 1 }}
                    fill="var(--main-light)"
                    width="20px"
                    height="20px"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M28 9.25h-5.25v-1.117c0.004-0.087 0.006-0.189 0.006-0.292 0-3.643-2.953-6.596-6.596-6.596-0.082 0-0.164 0.002-0.246 0.004l0.012-0c-0.035-0.001-0.076-0.001-0.117-0.001-3.627 0-6.568 2.941-6.568 6.568 0 0.114 0.003 0.226 0.009 0.338l-0.001-0.016v1.111h-5.25c-1.518 0.002-2.748 1.232-2.75 2.75v14c0.003 2.622 2.128 4.747 4.75 4.75h20c2.622-0.003 4.747-2.128 4.75-4.75v-14c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM10.75 8.133c-0.007-0.096-0.010-0.208-0.010-0.322 0-2.797 2.267-5.064 5.064-5.064 0.047 0 0.095 0.001 0.142 0.002l-0.007-0c0.066-0.003 0.143-0.005 0.22-0.005 2.816 0 5.1 2.283 5.1 5.1 0 0.104-0.003 0.207-0.009 0.309l0.001-0.014v1.111h-10.5zM29.25 26c-0.001 1.794-1.456 3.249-3.25 3.25h-20c-1.794-0.002-3.248-1.456-3.25-3.25v-14c0.001-0.69 0.56-1.249 1.25-1.25h5.25v6.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-6.25h10.5v6.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-6.25h5.25c0.69 0.001 1.249 0.56 1.25 1.25v0z"></path>
                  </svg>

                  <span>{product.name}</span>
                </motion.div>
              </Link>
            )}
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
