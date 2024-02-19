import axios from "axios";
import { CheckoutApi } from "./checkout";
import { OrderApi } from "./order";
import { CategoryApi } from "./category";
import { ProductApi } from "./product";

export const Api = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
    timeout: 10000,
    withCredentials: false,

    headers: {
      "Content-Type": "application/json",

      // Authorization: "Bearer localClient:sdfd",
    },
  });

  const apis = {
    order: OrderApi,
    checkout: CheckoutApi,
    category: CategoryApi,
    product: ProductApi,
  };

  const result = Object.entries(apis).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    };
  }, {});

  return result;
};
