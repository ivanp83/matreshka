import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "./index.json";

export default function Nav() {
  const path = usePathname();

  return (
    <nav>
      <style jsx>{`
        nav {
          grid-column: 2/4;
          grid-row: 1;
          display: grid;
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
          position: relative;
          height: fit-content;
        }
        .link.active {
          color: var(--main-gray);
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
      <ul itemScope itemType="http://www.schema.org/SiteNavigationElement">
        {links.map((link) => (
          <li key={link.href} itemProp="name">
            <Link href={link.href} itemProp="url">
              <span
                className={`${
                  link.href === path ? "active" : ""
                } link nav-link`}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
