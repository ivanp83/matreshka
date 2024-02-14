import React from "react";
import CustomImage from "../image";
import Btns from "./btns";
import styles from "./styles.module.scss";
import { currencyFormat } from "@/utils/helpers";

import Value from "@/app/product/components/value";
export default function CartItem({ prod }) {
  return (
    <li className={styles.list_item}>
      <h4 className={styles.title}>{prod.name}</h4>
      <div className={styles.image}>
        <CustomImage priority={true} src={prod.small} alt={prod.name} />
      </div>
      <div className={styles.info}>
        <span className={styles.price}>{currencyFormat(prod.price)}</span>
        <Btns data={prod} />
        <span className={styles.quantity_selector}>
          <Value product={prod} value={prod.quantity} min={prod.min_value} />
        </span>
      </div>
    </li>
  );
}
