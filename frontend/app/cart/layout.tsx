"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          padding: 0 1rem;
          margin: var(--space-big) auto var(--space-med);
        }
      `}</style>

      {children}
    </article>
  );
}
