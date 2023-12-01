/* eslint-disable react-hooks/rules-of-hooks */

import { Suspense } from "react";
import Index from "../components/categories";

// export const metadata = {
//   title: "Категории букетов| Цветочный бутик Матрёшка",
//   description:
//     "Самые популярные цветы собранные в замечательные композиции от наших флористов.",
// };
// async function getCategories() {
//   const res = await fetch(`${process.env.BACKEND_BASE_URL}/categories`, {
//     next: { revalidate: 60 },
//   });

//   if (!res.ok) {
//     throw new Error("Ошибка на сервере");
//   }

//   return res.json();
// }

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
  const category = categories.find((p) => p.id == id && p);

  return {
    title: `${category?.name} закажи онлайн с доставкой по городу`,
    description: `${category?.description}. Доступная для заказа`,
  };
}
export default async function Categories({ params: { id } }) {
  // const categories = await getCategories();
  const { products, categories } = await getProductsByCategory(id);

  return (
    <>
      <meta name="robots" content="all" />
      <link rel="canonical" href={`${process.env.BACKEND_BASE_URL}/${id}`} />
      <Suspense fallback={null}>
        <Index {...{ categories, products }} />
      </Suspense>
    </>
  );
}
