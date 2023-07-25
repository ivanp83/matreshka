"use client";
export default function Layout({ children }) {
  return (
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
  );
}
