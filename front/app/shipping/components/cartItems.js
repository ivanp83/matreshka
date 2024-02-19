import React from "react";
import CartItem from "./cartItem";
import styles from "../styles.module.scss";
import { currencyFormat } from "@/utils/helpers";
import { calcTotal } from "@/utils/dist/helpers.dev";
export default function Cartitems({ cartItems, shippingPrice }) {
  return (
    <header className={styles.items}>
      <div className={styles.wrapp}>
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
            После подтверждения оплаты с Вами по телефону свяжется наш менеджер
            и согласует условия доставки.
          </small>
          <hr />

          <p className={styles.out}>
            <span>
              Доставка:&nbsp;
              <output>
                {shippingPrice
                  ? currencyFormat(shippingPrice)
                  : currencyFormat(0)}
              </output>
            </span>
            <span>
              Итого:&nbsp;
              <output>
                {currencyFormat(calcTotal(cartItems, shippingPrice))}
              </output>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}
