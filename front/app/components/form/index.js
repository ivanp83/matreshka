"use client";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/app.context";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/app/components/loader"), { ssr: false });
import { motion } from "framer-motion";
import Cartitems from "@/app/shipping/components/cartItems";
import FormDelivery from "./formDelivery";
import FormShipping from "./formShipping";
import styles from "@/app/shipping/styles.module.scss";
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
    required: true,
  },
  {
    id: "4",
    name: "address",
    type: "text",
    placeholder: "Улица, дом",
    label: "Улица, дом",
    required: true,
  },
];

const Index = () => {
  const [shippingPrice, setShippingPrice] = useState(null);
  const [shippingCoords, setShippingCoords] = useState(null);
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
  const { loading, setLoading } = useAppContext();
  const router = useRouter();

  const { cartItems, onCartClear } = useAppContext();

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
      <section className={`${styles.shipping}`}>
        {loading && <Loader />}

        <FormDelivery
          inputs={inputs.slice(2, 4)}
          {...{
            shippingData,
            onChange,
            shippingPrice,
            shippingCoords,
            setShippingCoords,
            setShippingPrice,
          }}
        />
        <FormShipping
          inputs={inputs.slice(2, 4)}
          {...{
            shippingData,
            onChange,
            shippingPrice,
            shippingCoords,
            setShippingCoords,
            setShippingPrice,
          }}
        />

        <Cartitems {...{ cartItems }} />
      </section>
    </motion.div>
  );
};

export default Index;
