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
export async function generateStaticParams() {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`
  ).then((res) => res.json());
  return products.map((p) => ({ id: String(p.id) }));
}
export async function generateMetadata({ params: { id } }) {
  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`
  ).then((res) => res.json());
  const product = products.find((p) => p.id == id && p);

  return {
    title: product.name,
    description: `${product.name} - ${product.description}`,
  };
}

export default async function Page({ params: { id } }) {
  const { product, products } = await getData(id);

  const json = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [`${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.big}`],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Матрёшка Фловерс",
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "RUB",
      availability: "https://schema.org/InStock",
    },

    url: process.env.NEXT_PUBLIC_DOMAIN,
  };

  return (
    <>
      <meta name="robots" content="all" />{" "}
      <link
        rel="canonical"
        href={`https://matryoshkaflowers.ru/product/${product.id}?search=normal`}
      />
      <Index data={product} faturedData={products} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
