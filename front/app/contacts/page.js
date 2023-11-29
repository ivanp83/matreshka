import Index from "@/app/components/contacts/";
export const metadata = {
  title: "Контакты | Цветочный бутик Матрёшка",
  description:
    "Мы готовы доставить букет по Калининграду и области в течении часа",
};
export default function Page(props) {
  const data = {
    title: "Контакты | Цветочный бутик Матрёшка ",

    description:
      "Мы  готовы доставить букет по Калининграду и области в течении часа",

    content: {
      headline: "Контакты",
      address: "Калининград, улица Виктора Гакуна, 5Б",
      phone: "+7 911 493-99-99",
      email: "matreshkaflower@bk.ru",
    },
  };

  const json = [
    {
      "@context": "http://schema.org/",
      "@type": "Article",
      headline: data.title,

      description: data.description,
      author: "Юлиана Легкодумова",
      datePublished: "2023-06-21",
      dateModified: "2023-07-26",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://matryoshkaflowers.ru/",
      },
      articleBody: String(data.content),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Главная",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Проекты",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/categories`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/about`,
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Информация",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/info`,
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Контакты",
        },
      ],
    },
  ];

  return (
    <>
      <meta name="robots" content="all" />
      <Index data={data.content} />{" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
