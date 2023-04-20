import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <style jsx>{`
        nav {
          grid-column: 2/3;
          grid-row: 1;
          display: grid;
          align-self: end;
          justify-items: center;
        }

        nav ul {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 1rem;
          width: fit-content;
          font-size: 1.2rem;
        }
        nav ul li {
          display: flex;
          grid-gap: 10px;
        }
        nav ul li.active {
          color: var(--main-red);
        }
        @media all and (max-width: 700px) and (orientation: portrait) {
          nav {
            display: none;
          }
        } ;
      `}</style>
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Категории</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
