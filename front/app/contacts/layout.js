"use client";

export default function Layout({ children }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin: var(--space-big) auto 0;
        }
      `}</style>

      {children}
    </article>
  );
}
