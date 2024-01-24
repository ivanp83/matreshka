import Index from "../components/about";

const data = {
  title: "Я, цветы и «Матрёшка»",
  description:
    "Как хобби стало любимым делом. История создания интернет-магазина Матрёшка.",
  canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
  mainBanner: "/images/1.jpg",
  text: [
    "Здравствуйте, дорогие мои! Меня зовут Юлиана, и я влюбленна в свою работу и цветы. Я готова поделиться с вами своей страстью к прекрасному и замечательным букетам, которые я создаю своими руками.",
    "Мне 35, у меня 4-ро детей и все мои драконы мальчики, самому младшему исполнилось 2 месяца. Я люблю цветы, уют и красоту вокруг. Я с детства собирала цветы в поле, по дороге куда-либо, на даче и т.д. И вот уже в сознательном возрасте посреди ночи меня осенило. Сначала пришло название - Матрёшка, русское красивое ( всегда поражали иностранные вывески, живем в России а вокруг Ля флёр - Дэ флёр) которое ассоциируется с цветами. Так вот после названия я решила что хочу вернуться к детскому увлечению.",
    "Посмотрела пару роликов на ютуб по сборке букетов, потренировалась и разместила свою цветочную мастерскую прям на кухне. Оформила страничку в Инстаграм, нашла поставщиков и вот первые букеты собирала друзьям и знакомым. Потренировавшись и просмотрев не одну цветочную страницу пришло понимание как можно делать красиво и не обычно. Самыми популярными стали мои WOW букеты и композиции с объемными розами.",
    "На сегодняшний день мое маленькое хобби нашло отклик во многих сердцах моих постоянных гостей и готово переходить на новый уровень. А это большое светлое помещение которое будет похоже на тропический сад посреди каменных джунглей, где будем пить с вами чай беседовать на разные темы и собирать потрясающей красоты букеты и композиции. Ведь все начинается с любви к себе, дому и цветам. ❤️",
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
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: data.title,
    description: data.description,
    url: data.canonical,
    siteName: "Цветочная мастерская Матрёшка",
    type: "article",
    publishedTime: "2023-09-01",
    authors: ["Юлиана Легкодумова"],
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/og_banner.jpg`,
        width: 634,
        height: 634,
      },
      {
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/vk_banner.jpg`,
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
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "2500",
          highPrice: "40000",
          priceCurrency: "RUB",
        },
      },
      {
        "@type": "ImageObject",
        inLanguage: "ru-RU",
        "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/images/1.jpg`,
        url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/1.jpg`,
        contentUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/images/1.jpg`,
        width: 554,
        height: 554,
      },
      {
        "@type": "Person",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Калининград",
          addressRegion: "Калининградская область",
          postalCode: "236000",
          streetAddress: "Виктора Гакунаб д5",
        },

        email: "matreshkaflower@bk.ru",
        jobTitle: "Вледелец",
        name: "Юлиана Легкодумова",
        telephone: "+7 911 493 9999",
        url: "https://matryoshkaflowers.ru/",
      },
      {
        "@type": "Organization",

        address: {
          "@type": "PostalAddress",
          addressLocality: "📍Россия, Калининград",
          postalCode: "236000",
          streetAddress: "Виктора Гакуна, 5",
          addressCountry: "RU",
          addressRegion: "Kaliningrad dist",
        },

        email: "matreshkaflower@bk.ru",
        name: "Матрёшка",
        telephone: "📞+7 911 493-99-99",
        image: `${process.env.NEXT_PUBLIC_DOMAIN}/images/logo.png`,
        url: process.env.NEXT_PUBLIC_DOMAIN,
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
              "@id": "",
              url: "",
              name: "About",
            },
          },

          {
            "@type": "ListItem",
            position: 4,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />

      <Index {...{ data }} />
    </>
  );
}
