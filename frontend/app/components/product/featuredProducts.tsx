"use client";
import { ProductItem } from "@/types";
import React, { FC } from "react";
import { currencyFormat } from "@/utils/helpers";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Envs } from "@/utils/config";

type Props = { data: ProductItem[] };

const FeaturedProducts: FC<Props> = ({ data }) => {
  return (
    <section>
      <style jsx>{`
        section {
          grid-column: 1/4;
          display: grid;
          grid-gap: var(--space-small);
          margin-top: var(--space-med);
        }
        .swiper {
          width: 100%;
          height: 40rem;
        }
        .swiper-container {
          width: 480px;
        }

        .card-wrapp {
          width: 100%;
          overflow: hidden;
        }
        .image {
          position: relative;
          width: 100%;
          height: calc(((var(--cont-w) - 20px * 5) / 5) / 3 * 4);
          object-position: top;
          transform-origin: bottom;
          border-radius: 10px;
          overflow: hidden;
        }
        img {
          transition: 0.5s ease;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
        }
        .details {
          margin-top: 5px;
          width: 100%;
          text-align: center;
        }
        .details span {
          font-size: 18px;
        }
        @media (hover: hover) and (pointer: fine) {
          .card-wrapp:hover .image img {
            transform: scale(1.02);
          }
        }
        @media screen and (max-width: 1024px) {
          .image {
            position: relative;
            width: 100%;
            height: calc(((100vw - 20px * 3) / 4) / 3 * 4);
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .image {
            width: calc(100vw / 2 - 30px);
            height: calc(((100vw / 2) - 30px) * 4 / 3);
          }
          .details span,
          h4 {
            font-size: 16px;
          }
        }
        @media all and (max-width: 290px) {
          .image {
            width: calc(100vw - 37px);
            height: calc((100vw - 37px) * 4 / 3);
          }
        }
      `}</style>
      <h2> Другие букеты</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        style={{ width: "100%" }}
        breakpoints={{
          250: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 4,
          },

          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((prod) => (
          <SwiperSlide key={prod.id}>
            <div className="card-wrapp">
              <Link href={`product/${prod.id}`}>
                <div className="image">
                  <img
                    src={`${Envs.NEXT_PUBLIC_BACKEND_STATIC_URL}/${prod.small}`}
                    alt={prod.name}
                  />
                </div>
              </Link>
              <div className="details">
                <h4>{prod.name}</h4>
                <span>{currencyFormat(prod.price)}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default FeaturedProducts;
