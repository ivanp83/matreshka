import Index from "@/app/components/product";
import { ProductItem } from "@/types";
import { Metadata } from "next";
import React from "react";

type Props = {
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

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { product } = await getData(id);
  return {
    title: `${product.name}`,
    description: `${product.description}`,
  };
}

export default async function Page({ params }: Props) {
  const { product, products } = await getData(params.id);

  return <Index data={product} faturedData={products} />;
}
