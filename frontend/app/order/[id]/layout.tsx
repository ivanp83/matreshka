"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-med);

          margin: var(--space-med) auto 0;
        }
      `}</style>

      {children}
    </article>
  );
}
