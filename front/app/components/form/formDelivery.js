import React, { useEffect } from "react";
import FormInput from "./formInput";
import { currencyFormat, getProperty } from "@/utils/helpers";
import { useAppContext } from "@/app/context/app.context";
import styles from "@/app/shipping/styles.module.scss";
import AltButton from "../shared/buttons/altButton";
export default function FormDelivery({
  inputs,
  shippingData,
  onChange,
  shippingPrice,
  shippingCoords,
  setShippingCoords,
  setShippingPrice,
}) {
  const { setLoading } = useAppContext();
  useEffect(() => {
    if (shippingCoords) {
      postData(`${process.env.BACKEND_BASE_URL}/delivery-calculation`, {
        coords: shippingCoords,
      }).then((data) => {
        setShippingPrice(data);
      });
    }
  }, [shippingCoords]);
  async function getCoordinates(e) {
    e.preventDefault();
    const geocoderUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${
      process.env.NEXT_PUBLIC_YANDEX_API_KEY
    }&geocode=${encodeURI(
      shippingData.city + "," + shippingData.address
    )}&format=json`;
    const data = await fetch(geocoderUrl)
      .then((response) => response.json())
      .catch((err) => console.error(err));
    const coordinates =
      data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
        " "
      );
    const latitude = coordinates[1];
    const longitude = coordinates[0];
    setShippingCoords({ latitude, longitude });
  }
  async function postData(url, data) {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        className={`${styles.form} ${styles.form_delivery}`}
        onSubmit={getCoordinates}
      >
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Доставка</legend>

          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={getProperty(shippingData, input.name) || ""}
              onChange={onChange}
            />
          ))}
          {shippingPrice && (
            <p>
              Стоимость доставки курьером:&nbsp;
              <output className={styles.output}>
                {currencyFormat(shippingPrice)}
              </output>
            </p>
          )}
          <AltButton
            extStyles={styles.btn_delivery}
            text="Узнать стоимость"
            type="submit"
            alttext="Расчитаем?"
          />
        </fieldset>
      </form>
    </>
  );
}
