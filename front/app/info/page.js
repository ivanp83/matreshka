import Index from "../components/info";
const data = {
  title: "О нас | Цветочный бутик Матрёшка",
  description:
    "Как маленькое хобби превратилось бизнес. Юлиана Легкодумова - основатель цветочного бутика 'Матрёшка'",
  canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/info`,
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
  maximumScale: 7,
  themeColor: "white",
};
export const metadata = {
  title: data.title,
  description: data.description,
  metadataBase: new URL(data.canonical),

  generator: "Next.js",
  applicationName: "Цветочная мастерская Матрёшка",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Юлиана Легкодумова" }],
  creator: "Юлиана Легкодумова",
  publisher: "Юлиана Легкодумова",
  alternates: {
    canonical: data.canonical,
  },
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
    siteName: "Цветочная мастерская Матрёшка",

    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/og_banner.jpg`,
        width: 634,
        height: 634,
      },
      {
        url: "/images/vk_banner.jpg",
        width: 1418,
        height: 634,
        alt: "Цветочная мастерская Матрёшка",
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
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@context": "http://schema.org",
        "@type": "Florist",
        name: "Интернет-магазин букетов и цветов | Матрёшка",
        description:
          "Мы изготавливем роскошные и премиальные букеты для любого случая. Только самые лучшие цветы и качественные материалы!  Заказывайте с доставкой по Калининграду и области.",
        url: process.env.NEXT_PUBLIC_DOMAIN,
        logo: `${process.env.NEXT_PUBLIC_DOMAIN}/images/logo.png`,
        openingHours: "Mo-Su 0:00-24:00",
        image: `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
        email: "matreshkaflower@bk.ru",
        telephone: "+7911 493 9999",
        currenciesAccepted: "RUB",
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 54.7069483622634,
            longitude: 20.51705837830623,
          },
          geoRadius: 150000,
        },
        priceRange: "от 2500 руб",
        sameAs: [
          "https://www.instagram.com/yulianalegkodumova/",
          "https://t.me/YulianaLegkodumova",
          "https://vk.com/matreshkaflower",
        ],
        potentialAction: {
          "@type": "ReadAction",
          agent: {
            "@type": "Person",
            name: "Юлиана Легкодумова",
          },
          object: {
            "@type": "WebPage",
            name: "Интернет-магазин букетов и цветов | Матрёшка",
          },
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "matreshkaflower@bk.ru",
          name: "работа с клиентами",
          telephone: "+7911 493 9999",
          contactType: "customer service",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Россия, Калининград",
          postalCode: "236011",
          streetAddress: "ул. Виктора Гакуна д5",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "4924",
          worstRating: "1",
          bestRating: "5",
        },
        founder: {
          "@type": "Person",
          image: `${process.env.NEXT_PUBLIC_DOMAIN}/images/1.jpg`,
          name: "Юлиана Легкодумова",
          sameAs: "https://www.instagram.com/yulianalegkodumova/",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,

            item: {
              "@type": "WebPage",
              "@id": process.env.NEXT_PUBLIC_DOMAIN,
              url: process.env.NEXT_PUBLIC_DOMAIN,
              name: "Главная",
            },
          },
          {
            "@type": "ListItem",
            position: 2,

            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/categories`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/categories`,
              name: "Категории",
            },
          },
          {
            "@type": "ListItem",
            position: 3,

            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
              name: "About",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "WebPage",
              "@id": "",
              url: "",
              name: "Информация",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/contacts`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/contacts`,
              name: "Контакты",
            },
          },
        ],
      },
    ],
  };
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
