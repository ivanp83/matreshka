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
      "Звоните нам скорее и заказывайте букет для любого случая! Мы доставим вам его по Калининграду и области в течении часа",

    content: {
      headline: "Контакты",
      address: "Калининград, улица Виктора Гакуна, 5Б",
      phone: "+7 911 493-99-99",
      email: "matreshkaflower@bk.ru",
    },
  };

  const json = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,

          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}`,
            name: `Главная`,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/categories`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/categories`,
            name: `Букеты`,
          },
        },
        {
          "@type": "ListItem",
          position: 3,

          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/about`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/about`,
            name: `About`,
          },
        },
        {
          "@type": "ListItem",
          position: 4,

          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/info`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/info`,
            name: `Информация`,
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "WebPage",
            "@id": "",
            url: "",
            name: "",
          },
        },
      ],
    },
  ];

  return (
    <>
      <meta name="robots" content="all" />{" "}
      <link rel="canonical" href="https://matryoshkaflowers.ru/contacts" />
      <Index data={data.content} />{" "}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
