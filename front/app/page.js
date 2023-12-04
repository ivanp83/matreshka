import Index from "./components/home";
import { Envs } from "@/utils/config";
import Loading from "./loading";
import { Suspense } from "react";

export const metadata = {
  title: "Роскошные букеты для любого случая | Цветочный бутик Матрёшка",
  description:
    "Мы изготавливаем и продаём премиальные букеты. Доставим заказ по нужному адресу за 1 час. Наши букеты - это самые свежие цветы, уникальный дизайн и незабываемые эмоции!",
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
  const yandexFeedId = await fetch(`https://api.webmaster.yandex.net/v4/user`, {
    Authorization:
      "Bearer y0_AgAAAABmz_OTAAruuAAAAADzyerMY2cwaEK7QvSuqPgq-IcIHzb4npk",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  console.log(yandexFeedId);
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
