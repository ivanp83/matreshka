"use client";

import { YandexMetricaProvider } from "next-yandex-metrica";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <YandexMetricaProvider
      tagID={Number(process.env.NEXT_PUBLIC_YANDEX_METRICS)}
      initParameters={{
        clickmap: true,
        trackLinks: true,
        webvisor: true,
        accurateTrackBounce: true,
        ecommerce: "dataLayer",
      }}
    >
      <article className="layout">
        <style jsx>{`
          .layout {
            margin: var(--space-big) auto 0;
          }
          @media all and (max-width: 1024px) {
            .layout {
              width: 100%;
            }
          }
        `}</style>

        {children}
      </article>
    </YandexMetricaProvider>
  );
}
