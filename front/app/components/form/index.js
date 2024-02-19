"use client";
import { useState } from "react";
import { useAppContext } from "@/app/context/app.context";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/app/components/loader"), { ssr: false });
import { motion } from "framer-motion";
import Cartitems from "@/app/shipping/components/cartItems";
import FormShipping from "./formShipping";
import styles from "@/app/shipping/styles.module.scss";

const Index = () => {
  const { loading, cartItems } = useAppContext();
  const [shippingData, setShippingData] = useState({
    first_name: "",
    phone: "",
    city: "",
    address: "",
    price: 0,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className={`${styles.shipping}`}>
        {loading && <Loader />}
        <FormShipping {...{ shippingData, setShippingData }} />
        <Cartitems {...{ cartItems }} shippingPrice={shippingData.price} />
      </section>
    </motion.div>
  );
};

export default Index;
