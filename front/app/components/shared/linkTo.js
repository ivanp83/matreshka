import Link from "next/link";
import React from "react";

export default function LinkTo({ href, text, style }) {
  return (
    <Link href={href}>
      <span className="link" style={{ ...style }}>
        <style jsx>{`
          .link {
            display: grid;
            display: inline-block;
            width: fit-content;
            color: var(--main-dark);
            font-weight: var(--main-fw);

            font-size: 16px;
            transition: all 0.3s linear 0s;
            border: 1px solid;
            padding: 0.7rem 7.4rem;
          }
        `}</style>
        {text}
      </span>
    </Link>
  );
}
