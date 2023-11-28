export default function Text({ text }) {
  return (
    <p className="text h3 main-text">
      <style jsx>{`
        .text {
          grid-column: 2/4;
        }
        .main-text,
        strong {
          font-weight: 400;
          font-size: var(--big-fs);
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .text {
            grid-column: 1/4;
          }
        }
      `}</style>
      <strong>{text}</strong>
    </p>
  );
}
