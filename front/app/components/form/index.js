"use client";
import { useEffect, useState } from "react";
import FormInput from "./formInput";
import Button from "../shared/buttons/button";
import { useAppContext } from "@/app/context/app.context";
import { Api } from "@/api";
import { useRouter } from "next/navigation";
import { handleErrors } from "@/utils/helpers";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/app/components/loader"), { ssr: false });
import { motion } from "framer-motion";
import Cartitems from "@/app/shipping/components/cartItems";
import FormTextArea from "./formTextArea";
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
    name: "city",
    type: "text",
    placeholder: "Город",
    errorMessage: "Допустима только кирилица",
    label: "Город",
    pattern: "^[\u0400-\u04ff]+$",
    required: true,
  },
  {
    id: "3",
    name: "address",
    type: "text",
    placeholder: "Адрес",
    label: "Адрес",
    required: true,
  },
  {
    id: "4",
    name: "phone",
    type: "tel",
    placeholder: "Телефон",
    label: "Телефон",
    required: true,
  },
];

const Index = () => {
  const [responseData, setResponseData] = useState(null);
  const [shippingData, setShippingData] = useState({
    first_name: "",
    phone: "",
    city: "",
    address: "",
  });
  const [details, setSetails] = useState({
    message: "",
  });
  console.log({ details });
  const { loading, setLoading } = useAppContext();
  const router = useRouter();

  const { cartItems, onCartClear } = useAppContext();
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
      });

      setResponseData(data);
    } catch (error) {
      console.log(error);
      //TODO fixe error response
      handleErrors(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    if (e.target.name === "phone") {
      return setShippingData({
        ...shippingData,
        phone: e.target.value.replace(/[^0-9]/g, ""),
      });
    } else if (e.target.name === "message") {
      return setSetails({
        ...details,
        message: e.target.value,
      });
    }

    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };
  function getProperty(obj, key) {
    return obj[key];
  }

  useEffect(() => {
    if (responseData?.status === "pending") {
      router.push(responseData.confirmationUrl);
      onCartClear();
    }
  }, [responseData]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="shipping ">
        {loading && <Loader />}
        <style jsx>{`
          section {
            display: grid;
            grid-template-columns: 1fr 3fr 2fr 1fr;
            grid-gap: var(--space-med);
            min-height: 100vh;
            border-top: 1px solid var(--main-gray);
          }

          form {
            margin-top: var(--space-med);
            grid-row: 1;
            grid-column: 1/2;
            display: grid;
            grid-gap: 1rem;
            height: fit-content;

            grid-column: 2/3;
          }
          .wrapp {
            display: grid;
            grid-gap: 10px;
          }
          fieldset {
            border: none;
          }
          legend {
            margin-bottom: 1rem;
            font-size: var(--med-fs);
          }
          @media all and (max-width: 768px) and (orientation: portrait) {
            h1,
            form {
              grid-column: 1/4;
            }
          }
        `}</style>

        <form onSubmit={handleSubmit}>
          <div className="wrapp">
            <fieldset>
              <legend>Контакты получателя</legend>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={getProperty(shippingData, input.name) || ""}
                  onChange={onChange}
                />
              ))}
            </fieldset>
            <fieldset>
              <legend>Сопроводительное письмо</legend>
              <FormTextArea label={"сообщение"} onChange={onChange} />
            </fieldset>
          </div>

          <Button
            actionType="checkout"
            title="К оплате"
            type="submit"
            onClick={() => `ym(${process.env.NEXT_PUBLIC_YANDEX_METRICS},
              "reachGoal",
              "makeOrder")`}
          />
        </form>
        <Cartitems {...{ cartItems }} />
      </section>
    </motion.div>
  );
};

export default Index;
