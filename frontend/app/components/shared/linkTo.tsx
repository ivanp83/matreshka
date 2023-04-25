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
            border-radius: 50px;
            padding: 0.6rem 2rem;
            background: var(--main-red);
            color: var(--main-light);
            transition: all 0.3s linear 0s;
          }
          @media (hover: hover) and (pointer: fine) {
            .link:hover {
              color: #fff;
              text-decoration: none;
              background: var(--dark-red);
            }
          }
        `}</style>
        {text}
      </span>
    </Link>
  );
}
