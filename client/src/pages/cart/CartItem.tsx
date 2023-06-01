import { FC } from "react";
import "./Cart.scss";
import Button from "../../components/button/Button";

import { useTelegram } from "../../hooks/useTelegram";
import { useAppContext } from "../../context/app.context";
import { currencyFormat } from "../../utils/helpers";
import { CartItemType, ProductItem } from "../../types/types";

interface CartItemProps {
  product: CartItemType;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const { user } = useTelegram();
  const { onIncrement, onDecrement, cartItems } = useAppContext();
  const count = cartItems.find((prod) => prod.id === product.id);

  const handleIncrement = (product: ProductItem) => {
    onIncrement(user.id, product);
  };
  const handleDecrement = (product: ProductItem) => {
    onDecrement(user.id, product);
  };
  return (
    <li className={"item"}>
      <picture>
        <span className={"item-num"}>{count?.quantity}</span>
        <source
          media="(max-width: 799px)"
          srcSet={`${import.meta.env.CLIENT_BACKEND_STATIC_URL}${
            product.small
          }`}
        />
        <source
          media="(min-width: 800px)"
          srcSet={`${import.meta.env.CLIENT_BACKEND_STATIC_URL}${product.big}`}
        />
        <img
          srcSet={`${import.meta.env.CLIENT_BACKEND_STATIC_URL}${product.big}`}
          alt="Chris standing up holding his daughter Elva"
        />
      </picture>

      <div className="info">
        <h2>{product.name}</h2>
        <span className="price">{currencyFormat(product.price)}</span>

        <div className="buttons-container">
          <Button actionType={"add"} onClick={() => handleIncrement(product)}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.75 11.25V5C12.75 4.80109 12.671 4.61032 12.5303 4.46967C12.3897 4.32902 12.1989 4.25 12 4.25C11.8011 4.25 11.6103 4.32902 11.4697 4.46967C11.329 4.61032 11.25 4.80109 11.25 5V11.25H5C4.80109 11.25 4.61032 11.329 4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303C4.61032 12.671 4.80109 12.75 5 12.75H11.25V19C11.2526 19.1981 11.3324 19.3874 11.4725 19.5275C11.6126 19.6676 11.8019 19.7474 12 19.75C12.1989 19.75 12.3897 19.671 12.5303 19.5303C12.671 19.3897 12.75 19.1989 12.75 19V12.75H19C19.1989 12.75 19.3897 12.671 19.5303 12.5303C19.671 12.3897 19.75 12.1989 19.75 12C19.7474 11.8019 19.6676 11.6126 19.5275 11.4725C19.3874 11.3324 19.1981 11.2526 19 11.25H12.75Z"
                fill="#000000"
              />
            </svg>
          </Button>
          {count?.quantity !== 0 ? (
            <Button
              actionType={"remove"}
              onClick={() => handleDecrement(product)}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />

                <g id="Complete">
                  <g id="minus">
                    <line
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="4"
                      x2="20"
                      y1="12"
                      y2="12"
                    />
                  </g>
                </g>
              </svg>
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </li>
  );
};

export default CartItem;
