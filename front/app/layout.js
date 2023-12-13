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
            <div
              style={{
                position: "fixed",
                bottom: "10px",
                right: "1rem",

                zIndex: 100,
                background: "#128C7E",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                color: "var(--main-light)",
              }}
            >
              <a
                aria-label="Отправить сообщение WhatsApp"
                href="https://wa.me/+79114939999"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="var(--main-light)"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                <span
                  style={{
                    marginLeft: "5px",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  WhatsApp
                </span>
              </a>
            </div>
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
