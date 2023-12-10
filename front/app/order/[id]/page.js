"use client";
import { Api } from "@/api";
import { handleErrors } from "@/utils/helpers";

import React, { useEffect, useState } from "react";
const data = {
  title: "Заказ",
  description: "Детали заказа",
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

  generator: "Next.js",
  applicationName: "Цветочная мастерская Матрёшка",
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
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: data.title,
    description: data.description,

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
export default function Page({ params }) {
  const [responseData, setResponseData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await Api().order.find(params.id);

        setResponseData(data[0]);
      } catch (error) {
        console.log(error);
        handleErrors(error);
      }
    })();
  }, []);

  return (
    <>
      <section className="order container">
        <style jsx>{`
          .order {
            min-height: 95vh;
            grid-column: 1/4;
          }
          .wrap {
            text-align: center;
            grid-column: 2/3;
            display: grid;
            height: fit-content;
          }
        `}</style>
        <div className="wrap">
          {responseData && (
            <>
              <h1>Заказ № {responseData?.id}</h1>
              <span>
                Статус: &nbsp;
                {responseData?.order_status === "succeeded"
                  ? "оплачен"
                  : responseData?.order_status === "pending"
                  ? "в обработке"
                  : responseData?.order_status === "error"
                  ? "в обработке"
                  : "Произошла ошибка. Обратитесь в нашу поддержку."}
              </span>
            </>
          )}
        </div>
      </section>
    </>
  );
}
