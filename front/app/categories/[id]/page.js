/* eslint-disable react-hooks/rules-of-hooks */

import { Suspense } from "react";
import Index from "../../components/categories";

export const metadata = {
  title: "Категории букетов| Цветочный бутик Матрёшка",
  description:
    "Самые популярные цветы собранные в замечательные композиции от наших флористов.",
};
async function getCategories() {
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }

  return res.json();
}

async function getProductsByCategory(id = 0) {
  const res = await fetch(
    `https://api.matryoshkaflowers.ru/api/category-with-products/${id}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }

  return data.map((p) => {
    if (p.available === true) return p;
  });
}

export default async function Categories({ searchParams }) {
  const categories = await getCategories();
  const products = await getProductsByCategory(searchParams.id);

  return (
    <>
      <meta name="robots" content="all" />
      <link
        rel="canonical"
        href={`${process.env.BACKEND_BASE_URL}/${searchParams.id}`}
      />
      <Suspense fallback={null}>
        <Index {...{ categories, products }} />
      </Suspense>
    </>
  );
}
