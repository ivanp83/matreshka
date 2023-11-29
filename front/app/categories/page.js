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

export default async function Categories() {
  const categories = await getCategories();

  return (
    <>
      <meta name="robots" content="all" />{" "}
      <link rel="canonical" href="https://matryoshkaflowers.ru/categories" />
      <Index {...{ categories }} />
    </>
  );
}
