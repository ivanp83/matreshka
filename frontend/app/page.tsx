import { Category, ProductItem } from "@/types";
import Index from "./components/home";
import { Envs } from "@/utils/config";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Матрёшка | Цветочный бутик",
  description: "Букеты премиального качества с доставкой по России",
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
  const products: ProductItem[] = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  return products.filter((prod) => prod.stock === true);
}
export default async function Home() {
  const categories: Array<Category> = await getCategories();
  const products: Array<ProductItem> = await getProducts();

  return <Index {...{ products, categories }} />;
}
