import React from "react";
import CartItem from "./cartItem";
import styles from "./styles.module.scss";
export default function Cartitems({ cartItems }) {
  return (
    <ul className={styles.list}>
      {cartItems?.map((prod, i) => (
        <CartItem {...{ prod }} key={i} />
      ))}
    </ul>
  );
}
