import React from "react";
import styles from "./styles.module.scss";
export default function AltButton({ text, type, alttext, extStyles }) {
  return (
    <>
      <button className={`${styles.button} ${extStyles}`} type={type}>
        <span className={styles.text}>{text}</span>
        <span>{alttext}</span>
      </button>
    </>
  );
}
