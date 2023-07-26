import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { Envs } from "@/utils/config";
import { currencyFormat } from "@/utils/helpers";
import CustomImage from "../image";

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
          width: calc(var(--cont-w) / 5 - 22px);
          height: calc(((var(--cont-w) / 5) - 20px) * 4 / 3);
          position: relative;
        }

        .details {
          margin-top: 10px;
          text-align: center;
        }

        h3 {
          grid-column: 1/2;
        }
        h4 {
          grid-column: 2/4;
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
            height: calc(((var(--cont-w) / 4) - 8px) * 4 / 3);
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
            width: calc(100vw - 37px);
            height: calc((100vw - 8px) * 4 / 3);
          }
        }
      `}</style>

      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        style={{ width: "100%", gridColumn: "1/4" }}
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
        {products.map((prod) => (
          <SwiperSlide key={prod.id}>
            <div className="card-wrapp">
              <Link href={`product/${prod.id}`}>
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
                <span className="price">{currencyFormat(prod.price)}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
