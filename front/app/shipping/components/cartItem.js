import React from "react";

import styles from "../styles.module.scss";
import { currencyFormat } from "@/utils/helpers";

import CustomImage from "@/app/components/shared/image";
export default function CartItem({ prod }) {
  return (
    <li className={styles.list_item}>
      <h4 className={styles.title}>{prod.name}</h4>
      <div className={styles.image}>
        <CustomImage priority={true} src={prod.small} alt={prod.name} />
      </div>
      <div className={styles.info}>
        <span className={styles.price}>
          {currencyFormat(prod.price * prod.quantity)}
        </span>

        <strong className={styles.quantity_selector}>{prod.quantity}шт.</strong>
      </div>
    </li>
  );
}
