import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function Banner() {
  const [state, setState] = useState(true);
  const masterRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <div className={styles.banner} ref={masterRef}>
      {/* <canvas id="canvas" />
      <div className="logo-title">
        <Logo />
      </div> */}
      <div className={styles.video_container} ref={imageRef}>
        <video
          className={styles.video}
          autoPlay
          loop
          playsInline
          muted
          // poster={current.mainVideoPoster}
        >
          <source src={"./video/2.mp4"} type="video/mp4" />
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
