import React from "react";

type Props = { text: string };

export default function TextBold({ text }: Props) {
  return (
    <span>
      <style jsx>{`
        span {
          font-size: var(--main-fs);
          font-weight: 600;
        }
      `}</style>
      {text}
    </span>
  );
}
