"use client";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <style jsx>{`
        .layout {
          margin-top: var(--space-med);
        }
      `}</style>

      {children}
    </div>
  );
}
