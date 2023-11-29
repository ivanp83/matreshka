"use client";
import "./globals.css";
import Header from "./header/header";
import StyledJsxRegistry from "./registry";
import { AppProvider } from "./context/app.context";
import MobileNav from "./components/navigation/mobileAside";
import Footer from "./components/footer";
import { useEffect } from "react";
import { Router } from "next/router";

export default function RootLayout({ children }) {
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);
  useEffect(() => {
    if (process.env.NODE_ENV === "development") return;
    if (typeof window === "undefined") return;

    let loadedMetrica = false;

    window.addEventListener("scroll", loadMetrica);
    window.addEventListener("click", loadMetrica);
    window.addEventListener("mousemove", loadMetrica);
    function loadMetrica() {
      if (!loadedMetrica) {
        setTimeout(function () {
          const GTMObject = document.createElement("script");
          GTMObject.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`;
          GTMObject.async = true;
          document.getElementsByTagName("head")[0].appendChild(GTMObject);
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", `${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`);

          (function (m, e, t, r, i, k, a) {
            m[i] =
              m[i] ||
              function () {
                (m[i].a = m[i].a || []).push(arguments);
              };
            m[i].l = 1 * new Date();
            for (let j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) {
                return;
              }
            }
            (k = e.createElement(t)),
              (a = e.getElementsByTagName(t)[0]),
              (k.async = 1),
              (k.src = r),
              a.parentNode.insertBefore(k, a);
          })(
            window,
            document,
            "script",
            "https://mc.yandex.ru/metrika/tag.js",
            "ym"
          );

          ym(process.env.NEXT_PUBLIC_YANDEX_METRICS, "init", {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
          });
        }, 1000);
      }
      loadedMetrica = true;
      window.removeEventListener("scroll", loadMetrica);
      window.removeEventListener("click", loadMetrica);
      window.removeEventListener("mousemove", loadMetrica);
    }
  }, []);
  return (
    <html lang="ru">
      <meta
        name="viewport"
        content="width=device-width,  initial-scale=1.0, minimum-scale=1.0"
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

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
        <AppProvider>
          <body>
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
