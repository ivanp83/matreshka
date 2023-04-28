"use client";
import "./globals.css";
import { Inter, Noto_Sans, Noto_Sans_JP, Roboto_Flex } from "next/font/google";
import Header from "./header/header";
import StyledJsxRegistry from "./registry";
import { AppProvider } from "./context/app.context";
import MobileAsideNav from "./components/aside/mobileAside";
import Footer from "./components/footer";
import { useEffect } from "react";
import { Router } from "next/router";

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
  return (
    <html lang="ru">
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />

      <StyledJsxRegistry>
        <AppProvider>
          <body className={inter.className}>
            <div id="root-loader" />
            <Header />
            <MobileAsideNav />
            <main>{children}</main>
            <Footer />
          </body>
        </AppProvider>
      </StyledJsxRegistry>
    </html>
  );
}
