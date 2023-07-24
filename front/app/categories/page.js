import Index from "../components/categories";

export const metadata = {
  title: "Матрёшка | Букеты на продажу>",
  description: "Самые качественные и свежие цветы в наших неповторимых букетах",
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
