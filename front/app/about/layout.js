"use client";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/app/components/loader"), { ssr: false });
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-big);
          min-height: 100vh;
        }
      `}</style>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
