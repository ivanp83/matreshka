"use client";
import { useAppContext } from "@/app/context/app.context";
import { currencyFormat } from "@/utils/helpers";
import Button from "../buttons/button";
import CartItem from "./cartItem";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import LinkTo from "../shared/linkTo";

export default function Index() {
  const [withShipping, setWithShipping] = useState(false);
  const { cartItems } = useAppContext();
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const router = useRouter();

  const handleChange = () => setWithShipping(!withShipping);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="cart-content container">
        <style jsx>{`
          .cart-content {
            display: grid;
            grid-row-gap: var(--space-small);
            min-height: calc(100vh - var(--space-med));
            grid-template-rows: min-content min-content;
          }
          h1 {
            font-size: var(--title-fs);
            grid-column: 2/4;
            line-height: 1;
          }

          .items-list {
            grid-column: 2/3;
            display: grid;
            grid-template-columns: 1fr;
            background-color: var(--light-pink);
            height: fit-content;
            padding: 1rem;
            grid-gap: 1rem;
          }
          .empty-cart {
            text-align: center;
            min-height: calc(100vh - var(--space-med) * 2);
            grid-column: 1/4;
            display: grid;
            grid-auto-flow: row;
            grid-gap: 1rem;
            height: fit-content;
            align-items: center;
          }
          .checkout {
            grid-column: 2/3;
            display: grid;
            grid-auto-flow: row;
            grid-gap: var(--space-small);
            border: 1px dashed;

            font-weight: 600;
            height: fit-content;
            padding: 1rem 1rem var(--space-small);

            grid-row: 2;
          }
          .shipping-info {
            font-weight: 400;
            color: var(--main-gray);
          }
          .price-block {
            display: grid;
            grid-gap: 10px;
          }
          .cost {
            width: 100%;
            display: flex;
          }
          .total span {
            font-weight: 700;
          }
          .goods,
          .shipping {
            font-weight: 400;
          }
          @media all and (max-width: 1024px) and (orientation: portrait) {
            h1 {
              grid-column: 1/4;
            }
          }
          @media all and (max-width: 768px) and (orientation: portrait) {
            .items-list {
              grid-template-columns: 1fr;
              grid-column: 1/4;
            }
            .checkout {
              grid-column: 1/4;
            }
          }
          @media all and (max-width: 800px) and (orientation: landscape) {
            h1,
            .items-list,
            .checkout {
              grid-column: 1/4;
            }
          }
        `}</style>
        {cartItems.length ? (
          <>
            <h1>Корзина</h1>
            <ul className={`items-list`}>
              {cartItems.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </ul>
            <div className="checkout">
              <span className="shipping-info">
                Перед доставкой мы отправляем фото готового заказа, если вдруг
                есть уточнение или пожелания их можно сразу исправить. Стоимость
                доставки по городу Калининграду от 250 руб. (точная стоимость
                доставки расчитывается отдельно, в зависимости от адреса
                получателя). Стоимость доставки по области расчитывается
                индивидуально в зависимости от удалённости.
              </span>
              {/* <div>
                <Checkbox
                  {...{ withShipping, handleChange }}
                  title="Доставка по городу"
                />
              </div> */}
              <div className="price-block">
                <div className="cost total">
                  <span>Итого:&nbsp;</span>
                  <span>{currencyFormat(totalPrice)}</span>
                </div>
              </div>
              <Button
                actionType="checkout"
                title="Оформить заказ"
                type="button"
                onClick={() => router.push("/shipping")}
              />
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <span>Пока ещё не добавлено ни одного букета</span>

            <LinkTo
              href="/categories"
              text="Подобрать букет"
              style={{ background: "var(--main-light)" }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
