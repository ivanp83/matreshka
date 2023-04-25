import React from "react";

type Props = { text: string };

export default function TextBold({ text }: Props) {
  return (
    <span>
      <style jsx>{`
        span {
          font-size: 30px;
          font-weight: 500;
        }
      `}</style>
      {text}
    </span>
  );
}
