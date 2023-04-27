"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          padding: 0 1rem;
          margin: var(--space-med) auto 0;
        }
      `}</style>

      {children}
    </article>
  );
}
