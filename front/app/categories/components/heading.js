import React from "react";
import styles from "../styles.module.scss";
export default function Heading(props) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.video_container}>
          <video
            className={styles.video}
            autoPlay
            loop
            playsInline
            muted
            // poster={current.mainVideoPoster}
          >
            <source src={"./video/3.mp4"} type="video/mp4" />
          </video>
        </div>
        <div className={styles.heading}>
          <h1>Букеты по категориям</h1>
          <p>
            Украшение вашего пространства это не только букет, наши флористы
            создают эксклюзивные композиции которые станут настоящими арт
            объектами в вашем интерьере.
          </p>
        </div>
      </div>
    </>
  );
}
