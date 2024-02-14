import { currencyFormat } from "@/utils/helpers";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../buttons/button";
import { useRouter } from "next/navigation";
import Cartitems from "./cartItems";
import styles from "./styles.module.scss";
import { useAppContext } from "@/app/context/app.context";
export default function CartAside() {
  const { cartItems } = useAppContext();
  const router = useRouter();
  return (
    <>
      <motion.aside
        className={styles.aside}
        initial={{ x: "100%" }}
        animate={{
          x: 0,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        exit={{
          x: "100%",
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        <form className={styles.form}>
          <div className={styles.header}>
            <h2>КОРЗИНА</h2>
          </div>
          <Cartitems {...{ cartItems }} />
          <div className={styles.checkout}>
            <div className="btn">
              <Button
                type="submit"
                title={"Оплата:"}
                actionType="checkout"
                onClick={() => {
                  router.push("/cart");
                }}
              >
                &nbsp;
                {currencyFormat(
                  cartItems &&
                    cartItems.reduce(function (acc, obj) {
                      return acc + obj.quantity * obj.price;
                    }, 0)
                )}
              </Button>
            </div>
          </div>
        </form>
      </motion.aside>
    </>
  );
}
