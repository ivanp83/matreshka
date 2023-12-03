/* eslint-disable react-hooks/rules-of-hooks */

import { Suspense } from "react";
import Index from "../components/categories";
import Loading from "../loading";

async function getProductsByCategory(id = 0) {
  const res = await fetch(
    `${process.env.BACKEND_BASE_URL}/category-with-products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }
  const categories = await fetch(
    `${process.env.BACKEND_BASE_URL}/categories`
  ).then((res) => res.json());
  const products = data.map((p) => {
    if (p.available === true) return p;
  });
  return { products, categories };
}

export async function generateStaticParams() {
  const categories = await fetch(
    `${process.env.BACKEND_BASE_URL}/categories`
  ).then((res) => res.json());
  return categories.map((p) => ({ id: String(p.id) }));
}
export async function generateMetadata({ params: { id } }) {
  const categories = await fetch(
    `${process.env.BACKEND_BASE_URL}/categories`
  ).then((res) => res.json());

  return {
    title: `Букеты в наличии`,
    description: `Доступные для заказа букеты с доставкой по городу и области. Авторский дизайн, самые качественные цветы, прекрасное оформление - всё это букеты от цветочной мастерской Матрёшка фловерс.`,
  };
}
export default async function Categories({ params: { id } }) {
  const { products, categories } = await getProductsByCategory(id);

  return (
    <>
      <meta name="robots" content="all" />
      <link rel="canonical" href={`${process.env.BACKEND_BASE_URL}/${id}`} />
      <Suspense fallback={<Loading />}>
        <Index {...{ categories, products }} />
      </Suspense>
    </>
  );
}
