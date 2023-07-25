import Index from "./components/home";
import { Envs } from "@/utils/config";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WPHeader",
  keywords:
    "в Калининграде , гарантия, купить цветы, бесплатно, розы, пионы, красивые букеты онлайн,  заказать букет цветов",
  title:
    "Продажа букетов и цветов в Калининграде и области | Цветочный бутик Матрёшка",
  description:
    "Мы делаем букеты из цветов премиального качества для любого случая. Доставляем по Калининграду за 1 час. Предоставляем гарантию и возврат, у нас доступные цены!",
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

  return (
    <>
      <Index {...{ products, categories }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
