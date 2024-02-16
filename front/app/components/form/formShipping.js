import React from "react";

import FormInput from "./formInput";
import Button from "@/app/components/shared/buttons/button";
import styles from "@/app/shipping/styles.module.scss";
import FormTextArea from "./formTextArea";
import { getProperty } from "@/utils/helpers";

export default function FormShipping({
  inputs,
  shippingData,
  onChange,
  shippingPrice,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      if (!cartItems.length) {
        if (window.confirm("Нет добавленных букетов. Перейти в каталог?")) {
          router.push("/");
        }
      }

      const { data } = await Api().checkout.create({
        shippingAddress: {
          ...shippingData,
          phone: shippingData.phone.replace(/[^0-9]/g, ""),
        },
        orderProducts: cartItems,
        details,
        shippingPrice,
      });

      setResponseData(data);
    } catch (error) {
      handleErrors(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${styles.form} ${styles.form_shipping}`}
      >
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Контакты получателя</legend>

          {inputs.slice(0, 2).map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={getProperty(shippingData, input.name) || ""}
              onChange={onChange}
            />
          ))}
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Сопроводительное письмо</legend>
          <FormTextArea
            label={"Тут можно указать сопроводительный текст"}
            onChange={onChange}
          />
        </fieldset>

        <Button
          actionType="checkout"
          title="К оплате"
          type="submit"
          onClick={() => `ym(${process.env.NEXT_PUBLIC_YANDEX_METRICS},
              "reachGoal",
              "makeOrder")`}
        />
      </form>
    </>
  );
}
