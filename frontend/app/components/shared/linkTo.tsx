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
            text-transform: uppercase;
            font-size: 14px;
            transition: all 0.3s linear 0s;
            border: 1px solid;
            padding: 0.7rem 2.4rem;
          }
        `}</style>
        {text}
      </span>
    </Link>
  );
}
