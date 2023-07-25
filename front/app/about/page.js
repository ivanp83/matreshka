import { Metadata } from "next";
import Index from "../components/about";
import Head from "next/head";

// export const metadata = {
//   title: "Наша история | Цветочный бутик Матрёшка",
//   description:
//     ",
// };
export default function Page() {
  return (
    <>
      <Head itemscope itemtype="https://schema.org/WPHeader">
        <title itemprop="name">Наша история | Цветочный бутик Матрёшка</title>

        <meta
          itemprop="description"
          name="description"
          content="Как хобби стало любимым делом. История создания интернет-магазина Матрёшка."
        />

        <meta
          itemprop="keywords"
          name="keywords"
          content="маркетинговое агентство продвижение бизнеса интернет реклама digital agency marketing москва"
        />
      </Head>
      <Index />
    </>
  );
}
