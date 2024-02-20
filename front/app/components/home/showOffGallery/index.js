import styles from "@/app/styles/home.module.scss";

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
      <div ref={container} className={styles.gallery}>
        <div className={styles.sticky}>
          <motion.div
            style={{ scale: pictures[0].scale }}
            className={styles.el}
          >
            <div className={styles.imageContainer}>
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
              <video
                className={styles.video__mobile}
                autoPlay
                loop
                playsInline
                muted
                poster={"/images/poster2a.jpg"}
              >
                <source src={"./video/2a.mp4"} type="video/mp4" />
              </video>
            </div>
          </motion.div>
          <motion.div
            style={{ scale: pictures[1].scale }}
            className={`${styles.el}`}
          >
            <div className={styles.imageContainer}>
              <Image src={pictures[1].src} fill alt="image" />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: pictures[2].scale }}
            className={`${styles.el}`}
          >
            <div className={styles.imageContainer}>
              <Image src={pictures[2].src} fill alt="image" />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: pictures[3].scale }}
            className={`${styles.el}`}
          >
            <div className={styles.imageContainer}>
              <Image src={pictures[3].src} fill alt="image" />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: pictures[4].scale }}
            className={`${styles.el}`}
          >
            <div className={styles.imageContainer}>
              <Image src={pictures[4].src} fill alt="image" />
            </div>
          </motion.div>
          <motion.div
            style={{ scale: pictures[5].scale }}
            className={`${styles.el}`}
          >
            <div className={styles.imageContainer}>
              <Image src={pictures[5].src} fill alt="image" />
            </div>
          </motion.div>

          {/* {pictures.map(({ src, scale, type }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className={styles.el}
              >
                <div className={styles.imageContainer}>
                  <motion.div style={{ scale4 }} className={styles.el}>
                    <div className={styles.imageContainer}>
                      <video
                        style={{ display: type === "video" ? "block" : "none" }}
                        className={styles.video}
                        autoPlay
                        loop
                        playsInline
                        muted
                        poster={"/images/poster2.jpg"}
                      >
                        <source src={"./video/2.mp4"} type="video/mp4" />
                      </video>
                      <video
                        style={{ display: type === "video" ? "block" : "none" }}
                        className={styles.video__mobile}
                        autoPlay
                        loop
                        playsInline
                        muted
                        poster={"/images/poster2a.jpg"}
                      >
                        <source src={"./video/2a.mp4"} type="video/mp4" />
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
          })} */}

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
{
  /* <script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": "Peanut Butter Cookies",
  "image": [
    "https://example.com/photos/1x1/photo.jpg",
    "https://example.com/photos/4x3/photo.jpg",
    "https://example.com/photos/16x9/photo.jpg"
  ],
  "author": {
    "@type": "Person",
    "name": "Wendy Darling"
  },
  "datePublished": "2018-03-10",
  "description": "This Peanut Butter Cookie recipe is everyone's favorite",
  "prepTime": "PT10M",
  "cookTime": "PT25M",
  "totalTime": "PT35M",
  "recipeCuisine": "French",
  "recipeCategory": "Cookies",
  "keywords": "peanut butter, cookies",
  "recipeYield": "24",
  "nutrition": {
    "@type": "NutritionInformation",
    "calories": "120 calories"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "18"
  },
  "recipeIngredient": [
    "2 cups of peanut butter",
    "1/3 cup of sugar"
  ],
  "recipeInstructions": [
    {
      "@type": "HowToStep",
      "text": "Mix together the peanut butter and sugar."
    },
    {
      "@type": "HowToStep",
      "text": "Roll cookie dough into small balls and place on a cookie sheet."
    },
    {
      "@type": "HowToStep",
      "text": "Bake for 25 minutes."
    }
  ],
  "video": {
    "@type": "VideoObject",
    "name": "How to Peanut Butter Cookies",
    "description": "This is how you make peanut butter cookies.",
    "thumbnailUrl": [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg"
     ],
    "contentUrl": "https://www.example.com/video123.mp4",
    "embedUrl": "https://www.example.com/videoplayer?video=123",
    "uploadDate": "2018-02-05T08:00:00+08:00",
    "duration": "PT1M33S",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": { "@type": "WatchAction" },
      "userInteractionCount": 2347
    },
    "expires": "2019-02-05T08:00:00+08:00"
   }
}
</script> */
}
