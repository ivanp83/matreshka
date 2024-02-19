import React, { useEffect, useRef } from "react";
import styles from "@/app/styles/home.module.scss";
import "swiper/css";
import Link from "next/link";

import { currencyFormat } from "@/utils/helpers";
import CustomImage from "@/app/components/shared/image";

export default function Slider({ products }) {
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   const slider = sliderRef.current;

  //   let isDown = false,
  //     startX = 0,
  //     scrollLeft;
  //   function mouseDown(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     isDown = true;
  //     startX = e.pageX - slider.offsetLeft;
  //     scrollLeft = slider.scrollLeft;
  //   }

  //   function mouseLeave(e) {
  //     isDown = false;
  //   }

  //   function mouseUp(e) {
  //     isDown = false;
  //   }
  //   function mouseMove(e) {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - slider.offsetLeft;
  //     const walk = x - startX;
  //     slider.scrollLeft = scrollLeft - walk;
  //   }
  //   slider.addEventListener("mousemove", (e) => mouseMove(e));
  //   slider.addEventListener("mouseleave", (e) => mouseLeave(e));
  //   slider.addEventListener("mousedown", (e) => mouseDown(e));
  //   slider.addEventListener("mouseup", (e) => mouseUp(e));
  //   slider.removeEventListener("mousemove", (e) => mouseMove(e));
  //   slider.removeEventListener("mouseleave", (e) => mouseLeave(e));
  //   slider.removeEventListener("mousedown", (e) => mouseDown(e));
  //   slider.removeEventListener("mouseup", (e) => mouseUp(e));
  // }, []);
  return (
    <>
      <div className={styles.slider} ref={sliderRef}>
        {products.slice(0, 3).map((prod) => (
          <article className={styles.card_wrapp} key={prod.id}>
            <Link href={`/product/${prod.id}`}>
              <span className={styles.image}>
                <CustomImage
                  direct
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                  src={`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${prod.small}`}
                  alt={`Прекрасный букет "${prod.name}" - лучший подарок для людого случая, с доставкой по Калининграду.`}
                />
              </span>
              <div className={styles.details}>
                <h3 className={styles.details_h3}>
                  <b>{prod.name}</b>
                </h3>
                <p className={styles.price}>{currencyFormat(prod.price)}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className={styles.slider__mobile} ref={sliderRef}>
        {products.map((prod) => (
          <article className={styles.card_wrapp} key={prod.id}>
            <Link href={`/product/${prod.id}`}>
              <span className={styles.image}>
                <CustomImage
                  direct
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                  src={`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${prod.small}`}
                  alt={`Прекрасный букет "${prod.name}" - лучший подарок для людого случая, с доставкой по Калининграду.`}
                />
              </span>
              <div className={styles.details}>
                <h3 className={styles.details_h3}>
                  <b>{prod.name}</b>
                </h3>
                <p className={styles.price}>{currencyFormat(prod.price)}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
