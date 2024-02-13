import styles from "./styles.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/app/hooks/useMousePosition";

export default function Story() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <section className={styles.project}>
      <h1 className={styles.project_title}>
        <span className={styles.project_title__line}>
          Всё начинается с любви&nbsp;
        </span>
        <span className={styles.project_title__line}>
          к себе, дому и цветам
        </span>
      </h1>
      <span className={styles.project_label}>Философия</span>
      <p className={styles.project_mission}>
        <span>
          Каждый человек по своему уникален, как и каждый момент нашей жиtзни не
          повторим. Понимая эти простые истины мы делаем цветочные букеты,
          которые должны соответствовать случаю и людям, которым они
          предназначены. Ведь для нас это не просто цветы; это симфония эмоций,
          стиля, красок и ароматов, объеденённых в потрясающую композицию.
        </span>
        <span>
          Мы тщательно подбираем лучшие сочетания цветов и декора, создавая
          прекрасную цветочную композицию . Каждый наш букет будет адатирован
          под ваши индивидуальные пожелания и предпочтения. Вы гарантировано
          получите не только красивый подарок, но и незабываемые впечатления,
          которые пробудят ваши чувства и наполнят радостью ваш день.
        </span>
      </p>
    </section>
    // <section className={styles.story}>
    //   <motion.div
    //     className={styles.mask}
    //     animate={{
    //       WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
    //       WebkitMaskSize: `${size}px`,
    //     }}
    //     transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    //   >
    //     <p
    //       onMouseEnter={() => {
    //         setIsHovered(true);
    //       }}
    //       onMouseLeave={() => {
    //         setIsHovered(false);
    //       }}
    //     >
    //       Каждый человек по своему уникален, поэтому мы делаем цветочные букеты,
    //       которые соответствуют случаю и людям.
    //     </p>
    //   </motion.div>

    //   <div className={styles.body}>
    //     <p>
    //       Мы тщательно подбираем лучшие сочетания цветов и декора, создавая
    //       прекрасную цветочную композицию.
    //     </p>
    //   </div>
    // </section>
  );
}

// <h1 className="h2">Цветочная мастерская</h1>

//       <Text text="Искусство создания уникальных букетов" />
//       <p className="text">
//         Каждый человек по своему уникален, как и каждый момент нашей жиtзни не
//         повторим. Понимая эти простые истины &nbsp;
//         <strong>
//           мы делаем цветочные букеты, которые должны соответствовать случаю и
//           людям, которым они предназначены.
//         </strong>
//         &nbsp; Ведь для нас это не просто&nbsp;
//         <b>цветы</b>; это симфония эмоций, стиля, красок и ароматов,
//         объеденённых в потрясающую композицию. &nbsp;
//         <strong>
//           Мы тщательно подбираем лучшие сочетания цветов и декора, создавая
//           прекрасную цветочную композицию
//         </strong>
//         &nbsp;. Каждый наш букет будет адатирован под ваши индивидуальные
//         пожелания и предпочтения. Вы гарантировано получите не только красивый
//         подарок, но и незабываемые впечатления, которые пробудят ваши чувства
//         и наполнят радостью ваш день.
//       </p>
