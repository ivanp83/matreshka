"use client";
import "./globals.css";
import { Roboto_Flex } from "next/font/google";
import Header from "./header/header";
import StyledJsxRegistry from "./registry";
import { AppProvider } from "./context/app.context";
import MobileNav from "./components/navigation/mobileAside";
import Footer from "./components/footer";
import { useEffect } from "react";
import { Router } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";

const inter = Roboto_Flex({
  weight: ["400", "500", "600", "700"],
  preload: false,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <html lang="ru">
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta name="yandex-verification" content="6ff734a1b919092d" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="keywords"
        content="купить цветы,  красивые букеты онлайн, заказать букет цветов в Калининграде"
      />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="canonical" href="https://matryoshkaflowers.ru/" />
      <meta name="author" content="https://039.studio" />
      <meta property="og:url" content="https://matryoshkaflowers.ru/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Матрёшка Фловерс" />
      <meta
        property="og:description"
        content="Интернет-магазин цветов в Калининграде"
      />
      <meta property="og:locale" content="ru_RU" />
      <meta
        property="og:image"
        content="https://matryoshkaflowers.ru/images/regular_banner.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="vk:image"
        content="https://matryoshkaflowers.ru/images/vk_banner.jpg"
      />

      <StyledJsxRegistry>
        <GoogleAnalytics />

        <AppProvider>
          <body className={inter.className}>
            <div id="root-loader" />
            <div id="portal" />
            <Header />
            <MobileNav />
            <main>{children}</main>
            <Footer />
          </body>
        </AppProvider>
      </StyledJsxRegistry>
    </html>
  );
}
