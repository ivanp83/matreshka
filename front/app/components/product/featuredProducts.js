"use client";

import React from "react";
import { currencyFormat } from "@/utils/helpers";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Envs } from "@/utils/config";
import CustomImage from "../image";
import { Autoplay } from "swiper";

const FeaturedProducts = ({ data }) => {
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
          width: calc(var(--cont-w) / 5 - 22px);
          height: calc(((var(--cont-w) / 5) - 20px) * 4 / 3);
          position: relative;
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

        @media all and (max-width: 1500px) {
          .image {
            width: calc(var(--cont-w) / 5 - 30px);
            height: calc(((var(--cont-w) / 5) - 30px) * 4 / 3);
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
            width: calc(var(--cont-w)- 40px);
            height: calc((var(--cont-w) - 40px) * 4 / 3);
          }
        }
        .details span,
        h4 {
          font-size: 16px;
        }
      `}</style>
      <h2 className="h2"> Другие букеты</h2>

      <Swiper
        spaceBetween={18}
        slidesPerView={5}
        style={{ width: "100%" }}
        centeredSlides={true}
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
          1400: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((prod) => (
          <SwiperSlide key={prod.id}>
            <div className="card-wrapp">
              <Link href={`./${prod.id}`}>
                <div className="image">
                  <CustomImage
                    direct
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
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
