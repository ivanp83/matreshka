"use client";

import styles from "@/app/styles/header.module.scss";

import Humburger from "./humburger";
import Nav from "../components/shared/navigation/navigation";
import Logo from "../components/shared/UI/logo";

import CartIcon from "./cartIcon";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.wrapp}`}>
        <Logo />
        <Nav />
        <CartIcon />
        <Humburger styles={styles.humburger} />
      </div>
    </header>
  );
}
