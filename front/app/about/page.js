import { Metadata } from "next";
import Index from "../components/about";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head itemScope itemType="https://schema.org/WPHeader">
        <title itemProp="name">Наша история | Цветочный бутик Матрёшка</title>

        <meta
          itemProp="description"
          name="description"
          content="Как хобби стало любимым делом. История создания интернет-магазина Матрёшка."
        />

        <meta
          itemProp="keywords"
          name="keywords"
          content="маркетинговое агентство продвижение бизнеса интернет реклама digital agency marketing москва"
        />
      </Head>
      <Index />
    </>
  );
}
