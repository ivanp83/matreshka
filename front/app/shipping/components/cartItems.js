import React from "react";
import CartItem from "./cartItem";
import styles from "../styles.module.scss";
import { currencyFormat } from "@/utils/helpers";
export default function Cartitems({ cartItems }) {
  const cartTotal = cartItems.reduce((a, b) => a + b.quantity, 0) || 0;

  return (
    <header className={styles.items}>
      <ul className={styles.list}>
        {cartItems?.map((prod, i) => (
          <CartItem {...{ prod }} key={i} />
        ))}
      </ul>
      <div className={styles.total}>
        <hr />
        <small className={styles.small}>
          Перед доставкой мы отправляем фото готового заказа, если вдруг есть
          уточнение или пожелания их можно сразу исправить. Стоимость доставки
          по городу Калининграду от 250 руб. (точная стоимость доставки
          расчитывается отдельно, в зависимости от адреса получателя).
          <br />
          После подтверждения оплаты с Вами по телефону свяжется наш менеджер и
          согласует условия доставки.
        </small>
        <hr />
        <h2>
          Итого:&nbsp;
          {currencyFormat(
            cartItems &&
              cartItems.reduce(function (acc, obj) {
                return acc + obj.quantity * obj.price;
              }, 0)
          )}
        </h2>
      </div>
    </header>
  );
}
