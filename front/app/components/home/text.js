export default function Text({ text }) {
  return (
    <span className="text h3 main-text">
      <style jsx>{`
        .text {
          grid-column: 2/4;
        }
        .main-text,
        cite {
          font-weight: 400;
          font-size: var(--big-fs);
          font-style: normal;
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .text {
            grid-column: 1/4;
          }
        }
      `}</style>
      <cite>{text}</cite>
    </span>
  );
}
