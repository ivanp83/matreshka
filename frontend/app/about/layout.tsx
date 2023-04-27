"use client";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article className="layout">
      <style jsx>{`
        .layout {
          width: 80rem;
          margin: 0 auto;
          margin-top: var(--space-big);
          padding: 0 1rem 0;
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
