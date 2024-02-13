"use client";

import styles from "./styles.module.scss";

import Humburger from "./humburger";
import Nav from "./navigation/navigation";
import Logo from "../components/shared/UI/logo";

import CartIcon from "./cartIcon";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapp}`}>
        <div className={styles.row1}>
          <Nav />
          <Logo styles={styles.logo} />
          <CartIcon />
          <Humburger styles={styles.humburger} />
        </div>
      </div>
    </header>
  );
}
