"use client";
import styles from "@/app/product/styles.module.scss";
import React, { useEffect, useState } from "react";
import CustomImage from "@/app/components/shared/image";
import { currencyFormat } from "@/utils/helpers";
import Button from "@/app/components/shared/buttons/button";
import { useAppContext } from "@/app/context/app.context";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import SubNav from "@/app/components/shared/sub-nav";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../../components/hoc/withPortal";
import Slider from "../../components/shared/slider";
import Value from "./value";
import { redirect } from "next/navigation";

const CartAside = dynamic(
  () => import("@/app/components/shared/cartAside/index"),
  {
    ssr: false,
  }
);

export default function Index({ data: product, faturedData }) {
  const [avatarIsVisible, setstAvatarIsVisible] = useState(false);
  const { onUpdate, cartItems } = useAppContext();
  const [value, setValue] = useState(product.min_value);

  const addToCart = (product) => {
    onUpdate(product, value);
    setstAvatarIsVisible(true);
    // setTimeout(() => {
    //   setstAvatarIsVisible(false);
    // }, 4500);
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

  useEffect(() => {
    if (!product.available) redirect("/");
  }, [product]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={`${styles.product} container`}>
        <Portal>
          <AnimatePresence>
            {!!avatarIsVisible && <CartAside />}
          </AnimatePresence>
        </Portal>
        <div className={styles.top}>
          {/* <div className={styles.sub_nav__container}>
            <SubNav product={product.name} />
          </div> */}
          <div className={styles.details}>
            <div className={styles.heading}>
              <h1 className={styles.h2}>{product.name}</h1>

              <p>{currencyFormat(product.price * value)}</p>
            </div>

            <p className={styles.descr}>{product.description}</p>
            {product.compound && (
              <p className={styles.compound}>{product.compound}</p>
            )}

            <p className={styles.sub_descr}>
              <span>
                Каждый букет от «Матрёшка» собирается для Вас с особым трепетом
                и заботой.
              </span>
              <span>
                <b className={styles.b}>Цветы</b>&nbsp;подаренные с любовью
                простоят намного дольше! В этом мы убедились на практике. Свежие
                поставки, самые красивые сорта, оперативная доставка,
                рекомендация по уходу в комплекте с каждым букетом - все это мы
                делаем для того, чтобы Ваши цветы радовали Вас как можно дольше.
              </span>
              <span>
                <q cite="Юлиана Легкодумова">
                  Окружайтесь себя любовью и цветами❤️
                </q>
                <br />
                Юлиана и команда «Матрёшка»
              </span>
            </p>

            <div className={styles.btns}>
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
          <span className={styles.image}>
            <CustomImage
              src={product.big}
              alt={`Прекрасный подарок "${product.name}" с доставкой по Калининграду.`}
              sizes="(max-width: 768px) 50vw,  800px"
            />
          </span>
        </div>

        <section className={styles.featured}>
          <h2 className={styles.h2}>Другие букеты</h2>
          <Slider products={faturedData} />
        </section>
      </section>
    </motion.div>
  );
}
