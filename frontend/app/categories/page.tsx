import Gallery from "@/app/components/categories/gallery";
import SubNav from "@/app/components/subNav";
import { Category, ProductItem } from "@/types";
import Index from "../components/categories";

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
