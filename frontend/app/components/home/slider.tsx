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
    <section className="slider container">
      <style jsx>{`
        .slider {
          grid-column: 1/4;
          grid-gap: var(--space-small);
          padding-top: var(--space-med);
          border-top: 1px solid;
        }

        .title {
          height: 100%;
          grid-column: 2/3;
        }

        h3 {
          grid-column: 1/2;
          margin-bottom: auto;
        }
        .first-slide {
          display: grid;
          place-content: center;
          height: 100%;
        }
        .image {
          width: calc(100vw / 5 - 40px);
          height: calc(((100vw / 5) - 40px) * 4 / 3);
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }
        img {
          position: absolute;
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
        .details span {
          font-size: 20px;
        }
        h3 {
          grid-column: 1/2;
        }
        h4 {
          grid-column: 2/4;
        }
      `}</style>
      <h3>Роскошные букеты </h3>

      <h4>Работаем только с качественными цветами</h4>

      <div className="title">
        <LinkTo href="products" text="Смотреть все" />
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={5}
        style={{ width: "100%", gridColumn: "1/4" }}
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
                <h5>{prod.name}</h5>
                <span>{currencyFormat(prod.price)}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
