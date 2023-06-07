import { FC, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import "./Gallery.scss";
import { ProductItem } from "../../types/types";
import { currencyFormat } from "../../utils/helpers";
interface CardProps {
  product: ProductItem;
}
const Card: FC<CardProps> = ({ product }) => {
  const { name, big, small, price, id } = product;
  const blurred = useRef(null);
  useEffect(() => {
    const blurredImageDiv = blurred.current as any;
    if (blurredImageDiv) {
      const img = blurredImageDiv.querySelector("img");

      function loaded() {
        if (!!blurredImageDiv) blurredImageDiv.classList.add("loaded");
      }

      if (img.complete) {
        loaded();
      } else {
        img.addEventListener("load", loaded);
      }
    }
  }, []);
  return (
    <figure className={"card"}>
      <div className="blurred" ref={blurred}>
        <picture>
          <Link to={`../product/${id}`}>
            <source
              media="(max-width: 799px)"
              srcSet={`${import.meta.env.CLIENT_BACKEND_STATIC_URL}${small}`}
            />
            <source
              media="(min-width: 800px)"
              srcSet={`${import.meta.env.CLIENT_BACKEND_STATIC_URL}${big}`}
            />
            <img
              srcSet={`${import.meta.env.CLIENT_BACKEND_STATIC_URL}${big}`}
              loading="lazy"
              alt={name}
            />
          </Link>
        </picture>
      </div>
      <figcaption>
        <h2>{name}</h2>
        <span>{currencyFormat(price)}</span>
      </figcaption>
    </figure>
  );
};
export default Card;
