import styles from "./styles.module.scss";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function ShowOffGallery() {
  const container = useRef(null);
  const text = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0.8, 0.97], [0, 1]);
  const transform = useTransform(scrollYProgress, [0.8, 0.97], [400, 0]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    { type: "video", src: "/images/1.jpg", scale: scale4 },
    { type: "photo", src: "/images/2.jpg", scale: scale5 },
    {
      type: "photo",
      src: "/images/1.jpg",
      scale: scale6,
    },
    { type: "photo", src: "/images/3.jpg", scale: scale5 },
    { type: "photo", src: "/images/4.jpg", scale: scale6 },
    { type: "photo", src: "/images/5.jpg", scale: scale8 },
    {
      src: "/images/6.jpg",
      scale: scale9,
    },
  ];

  return (
    <>
      <div className={`${styles.heading} container`}></div>

      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale, type }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className={`${styles.el} ${styles.el}__${index}`}
              >
                <div className={styles.imageContainer}>
                  <motion.div style={{ scale4 }} className={styles.el}>
                    <div className={styles.imageContainer}>
                      <video
                        style={{ display: type === "video" ? "block" : "none" }}
                        className="video"
                        autoPlay
                        loop
                        playsInline
                        muted
                        poster={"/images/poster2.jpg"}
                      >
                        <source src={"./video/1.mp4"} type="video/mp4" />
                      </video>
                    </div>
                  </motion.div>
                  <Image
                    src={src}
                    fill
                    alt="image"
                    style={{ display: type === "photo" ? "block" : "none" }}
                  />
                </div>
              </motion.div>
            );
          })}
          <motion.div
            className={styles.text}
            style={{
              opacity: opacity,
              y: transform,
            }}
            ref={text}
          >
            Incididunt aliqua ullamco sint aliqua qui id officia. Quis minim
            aliquip est aliqua enim. Reprehenderit duis nostrud voluptate fugiat
            excepteur eu magna adipisicing. Duis et officia aliquip mollit ea
            laboris dolore. Enim consequat sit excepteur non ea sint est ex quis
            cupidatat in aliqua ad pariatur. Sint velit minim sit sunt non id
            laboris Lorem exercitation cillum. Commodo magna aliqua ex tempor
            laboris commodo ipsum veniam exercitation consectetur voluptate
            culpa. Fugiat aliqua eiusmod non ad irure velit culpa irure nisi id
            deserunt quis.
          </motion.div>
          {/* <motion.div style={{ scale4 }} className={`${styles.el}`}>
            <div className={styles.imageContainer}>
              <Image src={"/images/1.jpg"} fill alt="image" />
            </div>
          </motion.div>
          <motion.div style={{ scale6 }} className={`${styles.el}`}>
            <div className={styles.imageContainer}>
              <motion.div style={{ scale6 }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <video
                    className="video"
                    autoPlay
                    loop
                    playsInline
                    muted
                    // poster={current.mainVideoPoster}
                  >
                    <source src={"./video/1.mp4"} type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </>
  );
}
