import { Envs } from "@/utils/config";
import { currencyFormat } from "@/utils/helpers";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../buttons/button";
import { useRouter } from "next/navigation";

export default function CartAside({ avatarIsVisible }) {
  const [cartProducts, setCartProducts] = useState(null);
  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("cartItems")));
  }, []);
  const router = useRouter();
  return (
    <>
      <motion.aside
        initial={{ x: "100%" }}
        animate={{
          x: !!avatarIsVisible ? 0 : "100%",
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        style={{
          padding: "20px",
          width: "fit-content",
          backgroundColor: "var(--main-light)",
          borderLeft: "1px solid var(--main-gray)",
        }}
      >
        <div className="aside-container">
          <style jsx>{`
            .aside-container {
              color: var(--main-dark);
              display: grid;
              grid-auto-flow: row;
              grid-template-rows: 6fr 1fr;
              place-content: center;
              height: 100%;
            }
            ul {
              grid-row: 1/2;
              height: 100%;
              overflow-y: auto;
            }
            ul::-webkit-scrollbar {
              width: 0;
            }

            li {
              display: grid;
              grid-auto-flow: column;
              grid-template-columns: 100px 1fr;
              grid-gap: 1rem;
              padding: 1rem 0;
              border-bottom: 1px solid var(--main-gray);
            }
            .info {
              grid-column: 2/3;
              display: flex;
              flex-direction: column;
              font-size: 14px;
            }
            h4 {
              font-size: 16px;
            }
            .price {
              font-size: 14px;
              margin-bottom: 1rem;
            }
            .checkout {
              padding: 20px 0;
              grid-row: 2/3;
              display: grid;
              grid-gap: 1rem;
       
              height
            }
            .btn {
              margin-top: auto;
            }
          `}</style>

          <ul>
            {cartProducts &&
              cartProducts.map((prod, i) => (
                <li key={i}>
                  <div className="image">
                    <Image
                      priority={true}
                      width={100}
                      height={(100 * 4) / 3}
                      src={`${Envs.NEXT_PUBLIC_BACKEND_STATIC_URL}/${prod.small}`}
                      alt={prod.name}
                    />
                  </div>
                  <div className="info">
                    <h4>{prod.name}</h4>
                    <span className="price">
                      <span className="qty">{prod.quantity}</span>&nbsp;x&nbsp;
                      {currencyFormat(prod.price)}
                    </span>

                    <b className="item-total">
                      Всего:&nbsp;{currencyFormat(prod.quantity * prod.price)}
                    </b>
                  </div>
                </li>
              ))}
          </ul>
          <div className="checkout">
            <div className="btn">
              <Button
                title={"Оплата:"}
                actionType="checkout"
                onClick={() => {
                  router.push("/cart");
                }}
              >
                &nbsp;
                {currencyFormat(
                  cartProducts &&
                    cartProducts.reduce(function (acc, obj) {
                      return acc + obj.quantity * obj.price;
                    }, 0)
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
