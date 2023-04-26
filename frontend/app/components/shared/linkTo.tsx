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
            border: 2px solid var(--main-dark);
            border-radius: 50px;
            padding: 0.6rem 2rem;
            transition: all 0.3s linear 0s;
          }
          @media (hover: hover) and (pointer: fine) {
            .link:hover {
              color: var(--main-light);
              text-decoration: none;
              background: var(--main-red);
            }
          }
        `}</style>
        {text}
      </span>
    </Link>
  );
}
