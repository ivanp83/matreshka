"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin: var(--space-big) auto 0;
          min-height: calc(100vh - var(--space-med) * 2);
        }
      `}</style>

      {children}
    </article>
  );
}
