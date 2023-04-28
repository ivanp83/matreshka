import { Category } from "@/types";
import Index from "../components/categories";
import { Metadata } from "next";
export const metadata: Metadata = {
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

type Params = {
  params: { id: number };
};
export default async function Product({ params }: Params) {
  const categories: Array<Category> = await getCategories();

  return <Index {...{ categories }} />;
}
