"use client";
import styles from "./styles.module.scss";
export default function Layout({ children }) {
  return (
    <section className={styles.layout}>
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
            Eiusmod pariatur Lorem adipisicing ullamco fugiat in nostrud esse
            dolore aliqua deserunt eiusmod. Aliqua pariatur sint cupidatat
            pariatur proident. Officia deserunt commodo anim velit sit dolore.
            Aliquip officia sunt ad excepteur reprehenderit consectetur magna
            officia eu nulla. Voluptate reprehenderit nostrud irure dolor eu
          </p>
        </div>
      </div>

      {children}
    </section>
  );
}
