import React from "react";

type Props = { text1: string; text2: string };

export default function Text({ text1, text2 }: Props) {
  return (
    <div className="text container main-text">
      <style jsx>{`
        .text {
          grid-column: 1/4;
        }

        .top-text {
          grid-column: 2/4;
        }
        .bot-text {
          grid-column: 1/4;
        }
      `}</style>
      <span className="top-text"> {text1}</span>
      <span className="bot-text">{text2}</span>
    </div>
  );
}
