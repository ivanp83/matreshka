/* eslint-disable react-hooks/rules-of-hooks */

import Index from "../components/categories";

export const metadata = {
  title: "Категории букетов| Цветочный бутик Матрёшка",
  description:
    "Самые популярные цветы собранные в замечательные композиции от наших флористов. 100% качество цветов за доступную цену!",
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

async function getProductsByCategory(id) {
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
      <link rel="canonical" href="https://matryoshkaflowers.ru/categories" />
      <Index {...{ categories, products }} />
    </>
  );
}
