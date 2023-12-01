import Index from "../components/about";

export const metadata = {
  title: "История | Цветочный бутик Матрёшка",
  description:
    "Как хобби стало любимым делом. История создания интернет-магазина Матрёшка.",
};
export default function Page() {
  const data = {
    title: "О студии",
    mainBanner: "/images/1.png",
    text: [
      "Здравствуйте, дорогие мои! Меня зовут Юлиана, и я влюбленна в свою работу и цветы. Я готова поделиться с вами своей страстью к прекрасному и замечательным букетам, которые я создаю своими руками.",
      "Мне 35, у меня 4-ро детей и все мои драконы мальчики, самому младшему исполнилось 2 месяца. Я люблю цветы, уют и красоту вокруг. Я с детства собирала цветы в поле, по дороге куда-либо, на даче и т.д. И вот уже в сознательном возрасте посреди ночи меня осенило. Сначала пришло название - Матрёшка, русское красивое ( всегда поражали иностранные вывески, живем в России а вокруг Ля флёр - Дэ флёр) которое ассоциируется с цветами. Так вот после названия я решила что хочу вернуться к детскому увлечению.",
      "Посмотрела пару роликов на ютуб по сборке букетов, потренировалась и разместила свою цветочную мастерскую прям на кухне. Оформила страничку в Инстаграм, нашла поставщиков и вот первые букеты собирала друзьям и знакомым. Потренировавшись и просмотрев не одну цветочную страницу пришло понимание как можно делать красиво и не обычно. v Самыми популярными стали мои WOW букеты и композиции с объемными розами.",
      "На сегодняшний день мое маленькое хобби нашло отклик во многих сердцах моих постоянных гостей и готово переходить на новый уровень. А это большое светлое помещение которое будет похоже на тропический сад посреди каменных джунглей, где будем пить с вами чай беседовать на разные темы и собирать потрясающей красоты букеты и композиции. Ведь все начинается с любви к себе, дому и цветам. ❤️",
    ],
  };

  const json = [
    {
      "@context": "http://schema.org/",
      "@type": "Article",
      headline: data.title,
      image: data.mainBanner,
      description: "История создания цветочного бутика «Матрёшка»",
      author: "Юлиана Легкодумова",
      datePublished: "2023-06-21",
      dateModified: "2023-07-26",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://matryoshkaflowers.ru/",
      },
      articleBody: String(data.text),
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
          name: "Букеты",
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/categories`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "About",
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
          item: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/contacts`,
        },
      ],
    },
  ];

  return (
    <>
      <meta name="robots" content="all" />{" "}
      <link rel="canonical" href="https://matryoshkaflowers.ru/about" />
      <Index {...{ data }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
