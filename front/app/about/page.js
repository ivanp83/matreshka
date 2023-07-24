import { Metadata } from "next";
import Index from "../components/about";

export const metadata = {
  title: "Наша история | Цветочный бутик Матрёшка",
  description:
    "Как хобби стало любимым делом. История создания интернет-магазина Матрёшка.",
};
export default function Page() {
  return <Index />;
}
