import Index from "./components/home";
import { Envs } from "@/utils/config";

export const metadata = {
  title: "Премиальные букеты  | Цветочный бутик Матрёшка",
  description:
    "Продажа букетов из цветов премиального качества для любого случая. Доставка по Калининграду за 1 час. Гарантия возврата, доступные цены!",
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

  return <Index {...{ products, categories }} />;
}
