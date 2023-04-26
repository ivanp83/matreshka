import Index from "@/app/components/product";
import { ProductItem } from "@/types";
import React from "react";

type Params = {
  params: { id: number };
};

async function getData(id: number) {
  const productsRes: ProductItem[] = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  const products = productsRes.filter((prod) => prod.id !== id);
  const product = productsRes.find((prod) => prod.id == id) as ProductItem;

  return { product, products };
}

export default async function Page({ params }: Params) {
  const { product, products } = await getData(params.id);

  return <Index data={product} faturedData={products} />;
}
