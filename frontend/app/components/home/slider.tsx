import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ProductItem } from "@/types";
import Link from "next/link";
import { Envs } from "@/utils/config";
import { currencyFormat } from "@/utils/helpers";
import LinkTo from "../shared/linkTo";

type Props = { products: Array<ProductItem> };

export default function Slider({ products }: Props) {
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
          width: calc(var(--cont-w) / 5 - 20px);
          height: calc(((var(--cont-w) / 5) - 20px) * 4 / 3);
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }
        img {
          position: absolute;
          object-position: top;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
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
        @media all and (max-width: 1024px) {
          .image {
            width: calc(100vw / 4 - 20px);
            height: calc(((100vw / 4) - 20px) * 4 / 3);
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .btn-link {
            grid-column: 1/4;
          }
          .image {
            width: calc(100vw / 2 - 30px);
            height: calc(((100vw / 2) - 30px) * 4 / 3);
          }
          .details {
            font-size: 16px;
          }
        }
        @media all and (max-width: 290px) {
          .image {
            width: calc(100vw - 37px);
            height: calc((100vw - 37px) * 4 / 3);
          }
        }
        @media all and (max-width: 1024px) and (orientation: landscape) {
        }
      `}</style>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        style={{ width: "100%", gridColumn: "1/4" }}
        breakpoints={{
          250: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 2,
          },
          560: {
            slidesPerView: 4,
          },
          // when window width is >= 768px

          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {products.map((prod) => (
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
                <span className="price">{currencyFormat(prod.price)}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
