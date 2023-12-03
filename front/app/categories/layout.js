"use client";
import { Suspense } from "react";
import Loader from "../components/loader";
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
