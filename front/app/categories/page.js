import Index from "../components/categories";

export const metadata = {
  title: "Букеты для тебя | Цветочный бутик Матрёшка",
  description:
    "Заходи и посмотри какие замечательные букеты мы приготовили. У нас самые качественные и свежие цветы за доступную цену!",
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

  return <Index {...{ categories }} />;
}
