"use client";
import { FormEvent, useEffect, useState } from "react";
import FormInput from "./formInput";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";
import { InputType, OrderCreateResponeType, ShippingType } from "@/types";
import { Api } from "@/api";
import { useRouter } from "next/navigation";
import { handleErrors } from "@/utils/helpers";

const inputs: InputType[] = [
  {
    id: "1",
    name: "first_name",
    type: "text",
    placeholder: "Имя",
    errorMessage: "Допустима только кирилица.",
    label: "Имя",
    pattern: "^[\u0400-\u04ff]+$",
    required: true,
  },
  {
    id: "2",
    name: "last_name",
    type: "text",
    placeholder: "Фамилия",
    errorMessage: "Допустима только кирилица.",
    label: "Фамилия",
    pattern: "^[\u0400-\u04ff]+$",
    required: true,
  },
  {
    id: "3",
    name: "zip",
    type: "number",
    placeholder: "Индекс",
    errorMessage: "Необходимое поле",
    label: "Индекс",
    pattern: "[0-9]",
    required: true,
  },
  {
    id: "4",
    name: "city",
    type: "text",
    placeholder: "Город",
    errorMessage: "Допустима только кирилица",
    label: "Город",
    pattern: "^[\u0400-\u04ff]+$",
    required: true,
  },
  {
    id: "5",
    name: "address",
    type: "text",
    placeholder: "Адрес",
    label: "Адрес",
    required: true,
  },
  {
    id: "6",
    name: "phone",
    type: "tel",
    placeholder: "Телефон",
    label: "Телефон",
    required: true,
  },
];

const Form = () => {
  const [responseData, setResponseData] =
    useState<OrderCreateResponeType | null>(null);
  const [shippingData, setShippingData] = useState<ShippingType>({
    first_name: "",
    last_name: "",
    phone: "",
    zip: "",
    city: "",
    address: "",
  });
  const router = useRouter();

  const { cartItems, onCartClear } = useAppContext();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      });

      setResponseData(data);
    } catch (error: unknown) {
      console.log(error);
      //TODO fixe error response
      handleErrors(error);
    }
  };

  const onChange = (e: any) => {
    if (e.target.name === "phone")
      setShippingData({
        ...shippingData,
        phone: e.target.value.replace(/[^0-9]/g, ""),
      });
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };
  function getProperty<UserType, Key extends keyof UserType>(
    obj: UserType,
    key: Key
  ) {
    return obj[key];
  }

  useEffect(() => {
    if (responseData?.status === "pending") {
      router.push(responseData.confirmationUrl);
      onCartClear();
    }
  }, [responseData]);
  return (
    <section>
      <style jsx>{`
        section {
          display: grid;
          grid-gap: 3rem;
        }
        form {
          display: grid;
          grid-gap: 1rem;
        }
        .wrapp {
          display: grid;
          grid-gap: 1rem;
        }
        h1 {
          font-size: 30px;
        }

        @media all and (max-width: 760px) and (orientation: portrait) {
          h1 {
            font-size: 22px;
          }
        }
      `}</style>
      <h1>Данные покупателя</h1>
      <form onSubmit={handleSubmit}>
        <div className="wrapp">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={getProperty(shippingData, input.name as any) || ""}
              onChange={onChange}
            />
          ))}
        </div>

        <Button actionType="checkout" title="К оплате" type="submit" />
      </form>
    </section>
  );
};

export default Form;
