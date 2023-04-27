"use client";
import { useAppContext } from "@/app/context/app.context";
import { currencyFormat } from "@/utils/helpers";
import Button from "../buttons/button";
import CartItem from "./cartItem";
import { useRouter } from "next/navigation";
export default function Index() {
  const { cartItems } = useAppContext();
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  const router = useRouter();
  return (
    <div className="cart-content container">
      <style jsx>{`
        .cart-content {
          display: grid;
          grid-row-gap: 3rem;
        }
        h1 {
          font-size: var(--heading-fs);
          grid-column: 1/4;
          line-height: 1;
          text-transform: uppercase;
        }

        .heading {
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .items-list {
          grid-column: 1/3;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--light-pink);
          padding: 1rem;
          border-radius: 20px;
          grid-gap: 1rem;
        }
        .empty-text {
          text-align: center;
        }
        .total {
          display: grid;
          grid-auto-flow: row;
          grid-gap: var(--space-small);
          border: 2px dashed;
          padding: var(--space-small) 0;
          font-weight: 600;
          height: fit-content;
          padding: 1rem;
          border-radius: 20px;
          grid-column: 3/4;
          background: var(--main-green);
        }
        @media all and (max-width: 768px) and (orientation: portrait) {
          .items-list {
            grid-template-columns: 1fr;
            grid-column: 1/4;
          }
          .total {
            grid-column: 1/4;
          }
        }
      `}</style>
      {cartItems.length ? (
        <>
          <h1>Корзина</h1>
          <ul className="items-list">
            {cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div className="total">
            <div className="heading">
              <span>Итого: </span>
              <span>{currencyFormat(totalPrice)}</span>
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
        <span className="empty-text">
          Пока еще не добавлено ни одного букета{" "}
        </span>
      )}
    </div>
  );
}
