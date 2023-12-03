import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export function currencyFormat(num) {
  const value = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
  return value;
}
export const handleErrors = (error) => {
  if (axios.isAxiosError(error) && error.response) {
    const err = error;
    if (Array.isArray(err.response?.data.message)) {
      toast.error(err.response?.data.message[0]);
    } else {
      toast.error(err.response?.data.message);
    }
  }
};
export function getDate() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  return year + "-" + month + "-" + day;
}
