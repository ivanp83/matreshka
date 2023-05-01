import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
};

export default function LinkTo({ href, text }: Props) {
  return (
    <Link href={href}>
      <span className="link">
        <style jsx>{`
          .link {
            display: grid;
            display: inline-block;
            width: fit-content;

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
