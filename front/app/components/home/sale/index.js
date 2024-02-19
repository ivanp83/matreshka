import { useEffect } from "react";
import LinkTo from "../../shared/linkTo";
import Slider from "@/app/components/home/sale/slider/index";
import styles from "@/app/styles/home.module.scss";
import {
  useAnimate,
  useInView,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import CustomImage from "../../shared/image";
export default function Products({ products }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  // useEffect(() => {
  //   if (isInView) {
  //     animate(document.querySelector("body"), {
  //       background: "var(--main-dark)",
  //     });
  //   } else
  //     animate(document.querySelector("body"), {
  //       background: "var(--main-light)",
  //     });
  // }, [isInView]);
  return (
    <section ref={scope} className={styles.sale}>
      <div className={`${styles.wrapp}`}>
        <div className={styles.banner}>
          <CustomImage src={"/images/sale.jpg"} direct={true} />
        </div>
        <div className={styles.heading}>
          <h2 className={styles.h2}>Подборка самых актуальных предложений</h2>
          <p>
            Spring prelude. A reconsideration of wardrobe foundations with a
            palette of sophisticated hues.
          </p>
          <div className="button-link">
            <LinkTo href="categories" text="Смотреть все" />
          </div>
        </div>

        <Slider {...{ products }} />
      </div>
    </section>
  );
}
