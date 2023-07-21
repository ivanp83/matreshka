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
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="keywords"
        content="купить цветы онлайн в Калининграде, купить букет в Калининграде, цветы онлайн, красивые букеты онлайн, заказать букет"
      />
      <meta name="author" content="https://039.studio" />
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
