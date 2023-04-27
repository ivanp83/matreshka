"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-med);
          padding: 0 1rem;
          margin: var(--space-med) auto 0;
          max-width: 500px;
          min-height: calc(100vh - var(--space-med) * 2);
        }
      `}</style>

      {children}
    </article>
  );
}
