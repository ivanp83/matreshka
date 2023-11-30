import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import Link from "next/link";
import { Envs } from "@/utils/config";
import { currencyFormat } from "@/utils/helpers";
import CustomImage from "../image";
import { Autoplay } from "swiper";

export default function Slider({ products }) {
  return (
    <div className="slider">
      <style jsx>{`
        .slider {
          grid-column: 1/4;
          grid-gap: var(--space-small);
        }

        .first-slide {
          display: grid;
          place-content: center;
          height: 100%;
        }
        .image {
          width: calc(var(--cont-w) / 4 - 22px);
          height: calc(((var(--cont-w) / 4) - 20px) * 4 / 3);
          position: relative;
        }

        .details {
          margin-top: 5px;
          text-align: center;
        }
        .details > * {
          font-size: 16px;
        }
        h3 {
          grid-column: 1/2;
        }
        b {
          font-weight: 600;
        }

        @media all and (max-width: 1500px) {
          .image {
            width: calc(var(--cont-w) / 4 - 30px);
            height: calc(((var(--cont-w) / 4) - 30px) * 4 / 3);
          }
        }
        @media all and (max-width: 1400px) {
          .image {
            width: calc(var(--cont-w) / 4 - 30px);
            height: calc(((var(--cont-w) / 4) - 30px) * 4 / 3);
          }
        }
        @media all and (max-width: 1000px) {
          .image {
            width: calc(var(--cont-w) / 3 - 30px);
            height: calc(((var(--cont-w) / 3) - 30px) * 4 / 3);
          }
        }
        @media all and (max-width: 699px) {
          .image {
            width: calc(var(--cont-w) / 2 - 30px);
            height: calc(((var(--cont-w) / 2) - 30px) * 4 / 3);
          }
        }

        @media all and (max-width: 380px) {
          .image {
            width: calc(100vw - 30px);
            height: calc((100vw - 30px) * 4 / 3);
          }
        }
      `}</style>

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
        }}
      >
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <article className="card-wrapp">
              <Link href={`/product/${prod.id}`}>
                <div className="image">
                  <CustomImage
                    direct
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                    src={`${Envs.NEXT_PUBLIC_BACKEND_STATIC_URL}/${prod.small}`}
                    alt={prod.name}
                  />
                </div>
              </Link>
              <div className="details">
                <h3>
                  <b>{prod.name}</b>
                </h3>
                <p className="price">{currencyFormat(prod.price)}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
