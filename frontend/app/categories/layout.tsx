"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-med);
          margin-bottom: var(--space-med);
          padding: 0 1rem;
        }
      `}</style>

      {children}
    </article>
  );
}
