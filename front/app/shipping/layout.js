"use client";
import Loader from "@/app/components/loader";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-med);
          min-height: 100vh;
        }
      `}</style>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
