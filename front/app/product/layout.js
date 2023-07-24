"use client";

export default function Layout({ children }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-med);
        }
      `}</style>

      {children}
    </article>
  );
}
