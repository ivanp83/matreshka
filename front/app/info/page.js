import Head from "next/head";
import Index from "../components/info";

export default function Page() {
  return (
    <>
      <Head>
        <title>О нас | Цветочный бутик Матрёшка </title>
        <meta
          name="description"
          content="Как маленькое хобби превратилось бизнес. Юлиана Легкодумова - основатель цветочного бутика 'Матрёшка'."
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
