import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import "swiper/css";
import Link from "next/link";

import { currencyFormat } from "@/utils/helpers";
import CustomImage from "../../image";
import { Autoplay } from "swiper";

export default function Slider({ products }) {
  return (
    <div className={styles.slider}>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        style={{ width: "100%", gridColumn: "1/4" }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        breakpoints={{
          10: {
            slidesPerView: 1,
          },

          381: {
            slidesPerView: 2,
          },
          // when window width is >= 1200px

          700: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
          1900: {
            slidesPerView: 5,
          },
        }}
      >
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <article className={styles.card_wrapp}>
              <Link href={`/product/${prod.id}`}>
                <span className={styles.image}>
                  <CustomImage
                    direct
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                    src={`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${prod.small}`}
                    alt={`Прекрасный букет "${prod.name}" - лучший подарок для людого случая, с доставкой по Калининграду.`}
                  />
                </span>
              </Link>
              <div className={styles.details}>
                <h3>
                  <b>{prod.name}</b>
                </h3>
                <p className={styles.price}>{currencyFormat(prod.price)}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
