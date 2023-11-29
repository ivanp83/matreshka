"use client";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <style jsx>{`
        .layout {
          margin: var(--space-big) auto 0;
        }
      `}</style>

      {children}
    </div>
  );
}
