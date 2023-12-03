import Index from "./components/home";
import { Envs } from "@/utils/config";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "Продажа букетов из цветов в Калининграде | Цветочный бутик Матрёшка",
  description:
    "Мы продаём цветы и премиальные букеты для любого случая. У нас доставка по Калининграду за 1 час. Свежие цветы, авторский стиль и незабываемые эмоции - всё это в наших букетах!",
};

async function getCategories() {
  const res = await fetch(`${Envs.BACKEND_BASE_URL}/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }

  return res.json();
}
async function getProducts() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  return products.filter((prod) => prod.stock === true);
}
export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <>
      <meta name="robots" content="all" />{" "}
      <link rel="canonical" href="https://matryoshkaflowers.ru/" />
      <Suspense fallback={<Loading />}>
        <Index {...{ products, categories }} />
      </Suspense>
    </>
  );
}
