import React, { useState, useRef } from "react";
import styles from "@/app/styles/home.module.scss";
import Link from "next/link";

export default function Banner() {
  const masterRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <div className={styles.banner} ref={masterRef}>
      <div className={styles.video_container} ref={imageRef}>
        <video
          className={styles.video}
          autoPlay
          loop
          playsInline
          muted
          poster={"/images/poster2.jpg"}
        >
          <source src={"./video/2.mp4"} type="video/mp4" />
        </video>
      </div>
      <div className={styles.video_container__mobile} ref={imageRef}>
        <video
          className={styles.video}
          autoPlay
          loop
          playsInline
          muted
          poster={"/images/poster2a.jpg"}
        >
          <source src={"./video/2a.mp4"} type="video/mp4" />
        </video>
      </div>

      <div className={styles.link}>
        <Link href="/categories">
          <span>Выбери свой</span>
        </Link>
      </div>
    </div>
  );
}
