import React from "react";

type Props = { text: string; noindent?: boolean };

export default function Text({ text, noindent }: Props) {
  return (
    <div className="text main-text">
      <style jsx>{`
        .text {
          grid-column: 1/4;
          text-indent: ${!noindent ? "32vw" : 0};
        }
        .main-text {
          font-weight: 400;
          font-size: var(--big-fs);
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .text {
            text-indent: 0;
          }
        }
      `}</style>
      {text}
    </div>
  );
}
