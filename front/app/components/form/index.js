"use client";
import { useEffect, useState } from "react";
import FormInput from "./formInput";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";

import { Api } from "@/api";
import { useRouter } from "next/navigation";
import { handleErrors } from "@/utils/helpers";
import Loader from "../loader";
import { motion } from "framer-motion";

const Index = () => {
  const [responseData, setResponseData] = useState(null);
  const [shippingData, setShippingData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    zip: "",
    city: "",
    address: "",
  });
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
    if (e.target.name === "phone")
      setShippingData({
        ...shippingData,
        phone: e.target.value.replace(/[^0-9]/g, ""),
      });
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };
  function getProperty(ob, key) {
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
      <section className="shipping container">
        {loading && <Loader />}
        <style jsx>{`
          section {
            display: grid;
            grid-gap: 1rem;
          }
          h1 {
            grid-column: 2/3;
            margin-bottom: var(--space-small);
          }
          form {
            grid-column: 2/3;
            display: grid;
            grid-gap: 1rem;
          }
          .wrapp {
            display: grid;
            grid-gap: 10px;
          }
          @media all and (max-width: 768px) and (orientation: portrait) {
            h1,
            form {
              grid-column: 1/4;
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
                value={getProperty(shippingData, input.name) || ""}
                onChange={onChange}
              />
            ))}
          </div>

          <Button actionType="checkout" title="К оплате" type="submit" />
        </form>
      </section>
    </motion.div>
  );
};

export default Index;
