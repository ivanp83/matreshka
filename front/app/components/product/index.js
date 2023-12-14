"use client";

import React, { useState } from "react";
import CustomImage from "../image";
import { currencyFormat } from "@/utils/helpers";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import SubNav from "../sub-nav";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../hoc/withPortal";
import Slider from "../shared/slider";
import Value from "./value";

const CartAside = dynamic(() => import("../shared/cartAside"), {
  ssr: false,
});

export default function Index({ data: product, faturedData }) {
  const [avatarIsVisible, setstAvatarIsVisible] = useState(false);
  const { onUpdate, cartItems } = useAppContext();
  const [value, setValue] = useState(product.min_value);

  const addToCart = (product) => {
    onUpdate(product, value);
    setstAvatarIsVisible(true);
    setTimeout(() => {
      setstAvatarIsVisible(false);
    }, 4500);
  };

  function incrValue() {
    setValue((value) => (value += 1));
  }
  function decrValue() {
    if (value == product.min_value) setValue(product.min_value);
    else {
      setValue((value) => (value -= 1));
    }
  }
  const router = useRouter();

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
            display: grid;
            grid-gap: var(--space-big);
          }
          .sub-nav-container {
            grid-column: 1/5;
            position: absolute;
          }
          .container {
            grid-template-columns: repeat(4, 1fr);
          }
          .image {
            grid-row: 1;
            grid-column: 3/5;
            position: relative;
            width: 65vh;
            height: calc(65vh * 4 / 3);
            display: block;
            justify-self: end;
          }
          .details {
            grid-row: 1;
            grid-column: 1/3;
            max-width: 30rem;
            display: grid;
            height: fit-content;
            grid-gap: var(--space-small);
            margin-top: var(--space-med);
          }
          .top {
            width: 100%;
            display: grid;
            grid-gap: 5px;
          }
          h1 {
            font-size: 2rem;
            font-weight: 400;
          }

          .sub-descr {
            display: grid;
            grid-gap: 1rem;
            font-size: 14px;
            color: var(--main-gray);
            margin-bottom: 1rem;
          }

          .btns {
            display: grid;
            grid-gap: 1rem;
          }
          b {
            font-weight: 400;
          }
          .featured {
            grid-column: 1/5;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: var(--space-small);
          }

          .h2 {
            color: var(--main-dark);
          }
          @media all and (max-width: 1024px) and (orientation: portrait) {
            .wrapp {
              grid-gap: var(--space-small);
            }
            .content {
              width: 100%;
              grid-template-columns: 1fr;
            }
            h1 {
              font-size: 22px;
            }
            .details {
              grid-row: 2;
              margin-top: 0;
              margin-bottom: var(--space-med);
            }
            .wrapp {
              width: 100%;
            }
            .image {
              margin-top: var(--space-small);
              width: 100%;
              grid-column: 1/5;
              height: calc((100vw - 40px) * 4 / 3);
            }

            .details {
              grid-column: 1/5;
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
              margin-top: 2rem;
            }
            .image {
              width: 90vh;
              height: calc(90vh * 4 / 3);
            }
            .descr {
              font-size: 13px;
            }
            h1 {
              font-size: 20px;
            }
          }
        `}</style>
        <Portal>
          <AnimatePresence>
            {!!avatarIsVisible && <CartAside />}
          </AnimatePresence>
        </Portal>
        <div className="sub-nav-container">
          <SubNav product={product.name} />
        </div>

        <span className="image">
          <CustomImage
            src={product.big}
            alt={`Прекрасный подарок "${product.name}" с доставкой по Калининграду.`}
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
          />
        </span>
        <div className="details">
          <div className="top">
            <h1>{product.name}</h1>

            <p>{currencyFormat(product.price)}</p>
          </div>
          <Value
            {...{ incrValue, decrValue }}
            value={value}
            min={product.min_value}
          />

          <p className="descr">{product.description}</p>
          {product.compound && <p className="descr">{product.compound}</p>}

          <p className="sub-descr">
            <span>
              Каждый букет от «Матрёшка» собирается для Вас с особым трепетом и
              заботой.
            </span>
            <span>
              <b>Цветы</b>&nbsp;подаренные с любовью простоят намного дольше! В
              этом мы убедились на практике. Свежие поставки, самые красивые
              сорта, оперативная&nbsp;<b>доставка</b>, рекомендация по уходу в
              комплекте с каждым &nbsp;<b>букетом</b>&nbsp;- все это мы делаем
              для того, чтобы Ваши цветы радовали Вас как можно дольше.
            </span>
            <span>
              <q cite="Юлиана Легкодумова">
                Окружайтесь себя любовью и цветами❤️
              </q>
              <br />
              Юлиана и команда «Матрёшка»
            </span>
          </p>

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

        <section className="featured">
          <h2 className="h2">Другие букеты</h2>
          <Slider products={faturedData} />
        </section>
      </section>
    </motion.div>
  );
}
