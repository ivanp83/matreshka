import Link from "next/link";
import React, { CSSProperties } from "react";

type Props = {
  href: string;
  text: string;
  style?: CSSProperties;
};

export default function LinkTo({ href, text, style }: Props) {
  return (
    <Link href={href}>
      <span className="link" style={{ ...style }}>
        <style jsx>{`
          .link {
            display: grid;
            display: inline-block;
            width: fit-content;
            color: var(--main-dark);
            font-weight: 600;
            transition: all 0.3s linear 0s;
            border: 1px solid;
            padding: 1rem 2rem;
          }
          @media (hover: hover) and (pointer: fine) {
            .link:hover {
            }
          }
        `}</style>
        {text}
      </span>
    </Link>
  );
}
