"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-med);
          padding: 0 1rem;
          margin: var(--space-big) auto var(--space-med);
          max-width: 500px;
        }
      `}</style>

      {children}
    </article>
  );
}
