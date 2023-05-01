import React from "react";

type Props = { text: string };

export default function Text({ text }: Props) {
  return (
    <div className="text main-text">
      <style jsx>{`
        .text {
          grid-column: 2/4;
        }
        .main-text {
          font-weight: 400;
          font-size: var(--big-fs);
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .text {
            grid-column: 1/4;
          }
        }
      `}</style>
      {text}
    </div>
  );
}
