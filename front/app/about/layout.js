"use client";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("@/app/components/loader"), { ssr: false });
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
