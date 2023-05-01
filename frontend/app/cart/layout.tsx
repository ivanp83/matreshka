"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin: var(--space-med) auto 0;
        }
      `}</style>

      {children}
    </article>
  );
}
