import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Главная" },
  { href: "/categories", label: "Букеты на продажу" },
  { href: "/about", label: "About" },
  { href: "/info", label: "Информация" },
];

export default function Nav() {
  const path = usePathname();

  return (
    <nav>
      <style jsx>{`
        nav {
          grid-column: 2/3;
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
        .line {
          position: absolute;

          height: 2px;
          width: 100%;
          background-color: var(--main-dark);
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
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              {link.href === path && (
                <motion.span
                  layout
                  className="line"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "1px",
                    width: "100%",
                    backgroundColor: "var(--main-dark)",
                  }}
                />
              )}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
