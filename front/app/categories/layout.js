"use client";
import styles from "./styles.module.scss";
export default function Layout({ children }) {
  return <section className={styles.layout}>{children}</section>;
}
