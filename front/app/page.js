import { getDate } from "@/utils/helpers";
import Index from "./components/home";
import Loading from "./loading";
import { Suspense } from "react";

const data = {
  title: "Интернет-магазин премиальных букетов в Калининграде",
  description:
    "Роскошные 💐букеты и 🌹цветы для любого 🎉случая с быстрой доставкой по Калининграду и области.",
  canonical: process.env.NEXT_PUBLIC_DOMAIN,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "white",
};
export const metadata = {
  title: "Интернет-магазин премиальных букетов в Калининграде",
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
        url: "/images/og_banner.jpg",
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

async function getCategories() {
  const res = await fetch(`${process.env.BACKEND_BASE_URL}/categories`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Ошибка на сервере");
  }

  return res.json();
}
async function getProducts() {
  const yandexFeedId = await fetch(`https://api.webmaster.yandex.net/v4/user`, {
    Authorization:
      "Bearer y0_AgAAAABmz_OTAAruuAAAAADzyerMY2cwaEK7QvSuqPgq-IcIHzb4npk",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  const products = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/products`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  return products.filter((prod) => prod.stock === true);
}
export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();
  const json = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": process.env.NEXT_PUBLIC_DOMAIN,
        url: process.env.NEXT_PUBLIC_DOMAIN,
        name: data.title,
        isPartOf: { "@id": process.env.NEXT_PUBLIC_DOMAIN },
        primaryImageOfPage: {
          "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
        },
        image: {
          "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
        },

        datePublished: "2023-10-10T16:18:40+00:00",
        dateModified: "2023-11-10T12:16:46+00:00",
        description: data.description,
        breadcrumb: {
          "@id": process.env.NEXT_PUBLIC_DOMAIN,
        },
        inLanguage: "ru-RU",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: [`${process.env.NEXT_PUBLIC_DOMAIN}`],
          },
        ],
      },

      {
        "@type": "Organization",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Россия, Калининград",
          postalCode: "236011",
          streetAddress: "ул. Виктора Гакуна д5",
        },
        email: "matreshkaflower@bk.ru",
        name: "Цветочная мастерская «Матрёшка»",
        telephone: "+7911 493 9999",
        image: {
          "@type": "ImageObject",
          inLanguage: "ru-RU",
          "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
          url: `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
          contentUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/images/8.jpg`,
          width: 682,
          height: 1024,
        },
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
              "@id": "",
              url: "",
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
              "@id": `${process.env.NEXT_PUBLIC_DOMAIN}/contacts`,
              url: `${process.env.NEXT_PUBLIC_DOMAIN}/contacts`,
              name: "Контакты",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: [
          products.map((product) => ({
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: [
              `${process.env.NEXT_PUBLIC_BACKEND_STATIC_URL}/${product.small}`,
            ],
            offers: {
              "@type": "Offer",
              price: product.price,
              priceCurrency: "RUB",
              itemCondition: "https://schema.org/NewCondition",
              availability: "https://schema.org/InStock",
              price: product.price,
              priceCurrency: "RUB",
              priceValidUntil: (() => {
                const myDate = new Date();
                return myDate.setDate(myDate.getDate() + parseInt(10));
              })(),
              shippingDetails: {
                "@type": "OfferShippingDetails",
                shippingRate: {
                  "@type": "MonetaryAmount",
                  value: 300,
                  currency: "RUB",
                },
                shippingDestination: {
                  "@type": "DefinedRegion",
                  addressCountry: "RU",
                },
                "@type": "OfferShippingDetails",

                deliveryTime: {
                  "@type": "ShippingDeliveryTime",
                  handlingTime: {
                    "@type": "QuantitativeValue",
                    minValue: 0,
                    maxValue: 1,
                    unitCode: "DAY",
                  },
                  transitTime: {
                    "@type": "QuantitativeValue",
                    minValue: 1,
                    maxValue: 2,
                    unitCode: "HOUR",
                  },
                },
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: product.price,
                priceCurrency: "RUB",
              },
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "RU",
                returnPolicyCategory:
                  "https://schema.org/MerchantReturnFiniteReturnWindow",
                merchantReturnDays: 14,
                returnMethod: "https://schema.org/ReturnByMail",
                returnFees: "https://schema.org/FreeReturn",
              },
            },
          })),
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

      <Suspense fallback={<Loading />}>
        <Index {...{ products, categories, data }} />
      </Suspense>
    </>
  );
}
