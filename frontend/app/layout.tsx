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
import Head from "next/head";
import * as ga from "../lib/ga";

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
      console.log("ch");
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      ga.pageview(url);
    };

    Router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [Router.events]);
  return (
    <html lang="ru">
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta name="yandex-verification" content="6ff734a1b919092d" />
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
            ym(${process.env.NEXT_PUBLIC_YANDEX_METRICS}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/12345678"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </Head>
      <StyledJsxRegistry>
        <AppProvider>
          <body className={inter.className}>
            <div id="root-loader" />
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
