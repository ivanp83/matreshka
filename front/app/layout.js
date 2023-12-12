"use client";
import "./globals.css";
import Header from "./header/header";
import StyledJsxRegistry from "./registry";
import { AppProvider } from "./context/app.context";
import MobileNav from "./components/navigation/mobileAside";
import Footer from "./components/footer";
import { useEffect } from "react";
import { Router } from "next/router";
import "@/public/font/stylesheet.css";
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
