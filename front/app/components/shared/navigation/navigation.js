import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import links from "./index.json";
import styles from "@/app/styles/header.module.scss";
import { useAppContext } from "@/app/context/app.context";

export default function Nav({ extStyles }) {
  const path = usePathname();
  const cartIconRef = useRef(null);
  const { setCartPosition } = useAppContext();

  const calcPosition = () => {
    if (cartIconRef.current) {
      const posEl = cartIconRef.current.getBoundingClientRect();

      setCartPosition({
        x: posEl.left,
        y: posEl.top - posEl.height / 2,
      });
    }
  };
  useEffect(() => {
    calcPosition();
    window.addEventListener("resize", calcPosition);
    return () => window.removeEventListener("resize", calcPosition);
  }, []);
  return (
    <nav className={styles.nav}>
      <ul
        style={{ ...extStyles }}
        className={styles.ul}
        itemScope
        itemType="http://www.schema.org/SiteNavigationElement"
      >
        {links.map((link) => (
          <li key={link.href} itemProp="name" className={styles.li}>
            <Link href={link.href} itemProp="url">
              <span
                className={`${styles.link} ${
                  link.href === path ? "active" : ""
                }`}
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
