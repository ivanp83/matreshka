import Index from "../components/info";
const data = {
  title: "О нас | Цветочный бутик Матрёшка",
  description:
    "Как маленькое хобби превратилось бизнес. Юлиана Легкодумова - основатель цветочного бутика 'Матрёшка'",
  canonical: "https://matryoshkaflowers.ru/info",
  tabs: [
    {
      id: 0,
      title: "Гарантия",
      content: [
        "У всего есть гарантия!",
        "И знаете в первую очередь, нам хочется выстраивать с вами честные и открытые отношения, в которых есть доверие. Поэтому мы стараемся как можно тщательнее следить за поставками, отбирая самые лучшие экземпляры для составления ваших особенных букетов, чтобы быть уверенными в их качестве.",
        "Случается, редко, но бывает, что цветок приехал с изъяном который не был замечен. Поставлен в букет и быстро завял. Поэтому мы для себя решили что, в нашей мастерской будет цветочная гарантия, ведь для нас приоритет чтобы цветы радовали, как можно дольше.  И если вдруг случился казус, они будут заменены без всяких «но» или «если». Просто сообщите нам об этом 🤗.",
        "А если вы уже придумали, свой особенный букет или просто решили порадовать охапкой цветов себя или близких заказать из очень просто.",
      ],
    },
    {
      id: 1,
      title: "Условия доставки",
      content: [
        "Перед доставкой мы отправляем фото готового заказа, если вдруг есть уточнение или пожелания их можно сразу исправить. Стоимость доставки по городу Калининграду от 250 руб. (точная стоимость доставки расчитывается отдельно, в зависимости от адреса получателя) ",
        "Стоимость доставки по области расчитывается индивидуально в зависимости от удалённости.",
      ],
    },
    {
      id: 2,
      title: "Возрат цветов",
      content: [
        "В соответствии с Законом о Защите Прав Потребителей клиент вправе отказаться от товара, приобретаемого дистанционно (включая заказ через интернет-магазин), в любое время до его получения. При этом поступившие от Заказчика денежные средства возвращаются Компанией Заказчику тем же способом, которым была произведена оплата. Срок возврата денежных средств — от 3 до 7 дней. Стоимость доставки при возврате денежных средств так же возвращается Заказчику.",
        "Обращаем ваше внимание на то, что живые цветы относятся к категории товаров, не подлежащих возврату (в соответствии со статьей 25 Закона о защите прав потребителей и Перечнем непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар других размера, формы, габарита, фасона, расцветки или комплектации (в ред. Постановлений Правительства РФ от 20.10.1998 N 1222, от 06.02.2002 N 81)).",
        "Если вам привезли некачественные цветы (например курьер переморозил их при транспортировке) вам следует обратиться в этот же день в нашу компанию. Обращаем ваше внимание, что претензии относительно качества цветов рассматриваются при наличии фотографии букета в течение дня, в который был доставлен букет.",
      ],
    },
  ],
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "white",
};
export const metadata = {
  title: data.title,
  description: data.description,
  metadataBase: new URL(data.canonical),

  generator: "Next.js",
  applicationName: "Матрёшка Флаверс",
  referrer: "origin-when-cross-origin",

  authors: [{ name: "Юлиана Легкодумова" }],
  creator: "Юлиана Легкодумова",
  publisher: "Юлиана Легкодумова",

  verification: {
    google: "thGCiu8ZZJhbDzpkLH9Eg8KNpsrv3s_Z02ispASCl8k",
    yandex: "6ff734a1b919092d",

    other: {
      me: [],
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: data.title,
    description: data.description,
    url: "https://matryoshkaflowers.ru",
    siteName: "Матрёшка Флаверс",

    images: [
      {
        url: "/images/og_banner.jpg",
        width: 634,
        height: 634,
      },
      {
        url: "/images/vk_banner.jpg",
        width: 1418,
        height: 634,
        alt: "Цветочная мастерская Матрёшка Флаверс",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  icons: {
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        url: "/favicon/mstile-150x150.png",
      },
    ],
  },
};

export default function Page() {
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
      articleBody: String(data.tabs),
    },
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
            "@id": "",
            url: "",
            name: "",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "WebPage",
            "@id": `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/contacts`,
            url: `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/contacts`,
            name: "Контакты",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Index tabs={data.tabs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </>
  );
}
