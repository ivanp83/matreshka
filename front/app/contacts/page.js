import Index from "@/app/components/contacts/";
import Head from "next/head";
export default function Page(props) {
  return (
    <>
      <Head>
        <title>Контакты | Цветочный бутик Матрёшка </title>
        <meta
          name="description"
          content="Мы  готовы доставить букет по Калининграду и области в течении часа"
        />

        <meta
          name="keywords"
          content="Заказ букетов, онлайн, Калининград, доставка "
        />
      </Head>
      <Index />
    </>
  );
}
