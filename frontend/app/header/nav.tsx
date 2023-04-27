import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav>
      <style jsx>{`
        nav {
          justify-items: center;
          grid-column: 2/3;
          grid-row: 1;
          display: grid;
          align-self: end;
        }

        nav ul {
          font-size: var(--main-fs);
          display: grid;
          grid-auto-flow: column;
          grid-gap: 1rem;
          width: fit-content;
        }
        nav ul li {
          display: flex;
          grid-gap: 10px;
          font-size: 20px;
        }
        nav ul li.active {
          color: var(--main-red);
        }
        @media all and (max-width: 700px) and (orientation: portrait) {
          nav {
            display: none;
          }
        }
      `}</style>
      <ul>
        <li className={pathname === "/" ? "active" : ""}>
          <Link href="/">Главная</Link>
        </li>
        <li className={pathname === "/categories" ? "active" : ""}>
          <Link href="/categories">Букеты</Link>
        </li>
        <li className={pathname === "/about" ? "active" : ""}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
