import Index from "@/app/components/product";
import React from "react";

async function getData(id) {
  const productsRes = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  const products = productsRes.filter((prod) => prod.id !== id);
  const product = productsRes.find((prod) => prod.id == id);

  return { product, products };
}

export async function generateMetadata({ params: { id } }) {
  const { product } = await getData(id);
  return {
    title: `${product.name}`,
    description: `${product.description}`,
  };
}

export default async function Page({ params }) {
  const { product, products } = await getData(params.id);

  return <Index data={product} faturedData={products} />;
}
