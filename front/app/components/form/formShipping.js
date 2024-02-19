import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./formInput";
import Button from "@/app/components/shared/buttons/button";
import styles from "@/app/shipping/styles.module.scss";
import FormTextArea from "./formTextArea";
import { getProperty } from "@/utils/helpers";
import { useAppContext } from "@/app/context/app.context";
import { Api } from "@/api";

import Suggestions from "./suggestions";
const inputs = [
  {
    id: "1",
    name: "first_name",
    type: "text",
    placeholder: "Имя",
    errorMessage: "Допустима только кирилица",
    label: "Имя",
    pattern: "^[\u0400-\u04ff]+$",
    required: true,
  },
  {
    id: "2",
    name: "phone",
    type: "tel",
    placeholder: "Телефон",
    label: "Телефон",
    required: true,
  },
  {
    id: "3",
    name: "city",
    type: "text",
    placeholder: "Город",
    label: "Город",
    required: false,
  },
  {
    id: "4",
    name: "address",
    type: "text",
    placeholder: "Улица, дом",
    label: "Улица, дом",
    required: false,
  },
];
const cities = [
  { city: "Калининград", cost: 350 },
  { city: "Багратионовск", cost: 1500 },
  { city: "Балтийск", cost: 2000 },
  { city: "Гвардейск", cost: 1500 },
  { city: "Гурьевск", cost: 400 },
  { city: "Гусев", cost: 5000 },
  { city: "Зеленоградск", cost: 1200 },
  { city: "Краснознаменск", cost: 5000 },
  { city: "Ладушкин", cost: 5000 },
  { city: "Мамоново", cost: 5000 },
  { city: "Неман", cost: 1500 },
  { city: "Озёрск", cost: 2000 },
  { city: "Нестеров", cost: 2000 },
  { city: "Пионерский", cost: 2000 },
  { city: "Полесск", cost: 2000 },
  { city: "Правдинск", cost: 2000 },
  { city: "Приморск", cost: 1500 },
  { city: "Светлогорск", cost: 1500 },
  { city: "Светлый", cost: 2000 },
  { city: "Советск", cost: 3500 },
  { city: "Черняховск", cost: 4000 },
];
export default function FormShipping({ shippingData, setShippingData }) {
  const [responseData, setResponseData] = useState(null);
  const [details, setSetails] = useState({
    message: "",
  });
  const { setLoading } = useAppContext();
  const router = useRouter();
  const { cartItems, onCartClear } = useAppContext();

  const onChange = (e) => {
    if (e.target.name === "phone") {
      return setShippingData({
        ...shippingData,
        phone: e.target.value.replace(/[^0-9]/g, ""),
      });
    }
    if (e.target.name === "message") {
      return setSetails({
        ...details,
        message: e.target.value,
      });
    }
    if (e.target.name === "city") {
      return setShippingData({ ...shippingData, price: e.target.value });
    }
    console.log(e.target.name);
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (responseData?.status === "pending") {
      router.push(responseData.confirmationUrl);
      onCartClear();
    }
  }, [responseData]);
  // async function getCoordinates(e) {
  //   e.preventDefault();

  //   const geocoderUrl = `https://geocode-maps.yandex.ru/1.x/?apikey=${
  //     process.env.NEXT_PUBLIC_YANDEX_API_KEY
  //   }&geocode=${encodeURI(suggest.pop())}&format=json`;
  //   const result = await fetch(geocoderUrl)
  //     .then(async (response) => {
  //       const data = await response.json();

  //       const coordinates =
  //         data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
  //           " "
  //         );

  //       return { latitude: coordinates[1], longitude: coordinates[0] };
  //     })
  //     .then((data) =>
  //       fetch(`${process.env.BACKEND_BASE_URL}/delivery-calculation`, {
  //         method: "POST",
  //         mode: "cors",
  //         cache: "no-cache",
  //         credentials: "same-origin",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         redirect: "follow",
  //         referrerPolicy: "no-referrer",
  //         body: JSON.stringify(data),
  //       })
  //     )
  //     .then((response) => response.json())
  //     .catch((err) => console.error(err));
  //   setShippingPrice(result);
  // }

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
        shippingDetails: {
          ...shippingData,
          phone: shippingData.phone.replace(/[^0-9]/g, ""),
        },
        orderProducts: cartItems,
        details,
      });

      setResponseData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.form} ${styles.form_shipping}`}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Контакты получателя</legend>

        <FormInput
          {...inputs[0]}
          value={getProperty(shippingData, inputs[0].name) || ""}
          onChange={onChange}
        />
        <FormInput
          {...inputs[1]}
          value={getProperty(shippingData, inputs[1].name) || ""}
          onChange={onChange}
        />
      </fieldset>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Доставка</legend>
        <div className={styles.form_group}>
          <select
            id="city"
            className={styles.form_select}
            name="city"
            onChange={(e) => {
              onChange(e);
            }}
          >
            <option value={0}>Выбрать город</option>
            {cities.map((c, i) => (
              <option value={c.cost} key={i}>
                {c.city}
              </option>
            ))}
          </select>
          <label htmlFor="city" className={styles.label}></label>
        </div>
        <FormInput
          {...inputs[3]}
          value={getProperty(shippingData, inputs[3].name) || ""}
          onChange={onChange}
        />
        {/* <Suggestions
          {...inputs[2]}
          onBlur={getCoordinates}
          {...{ setSuggest, suggest }}
        /> */}
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
  );
}
