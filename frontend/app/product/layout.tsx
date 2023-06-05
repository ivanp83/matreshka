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
            margin-top: var(--space-med);
          }
        `}</style>

        {children}
      </article>
    </YandexMetricaProvider>
  );
}
