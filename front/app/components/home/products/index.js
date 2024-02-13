import { useEffect } from "react";
import LinkTo from "../../shared/linkTo";
import Slider from "../../shared/slider";
import {
  useAnimate,
  useInView,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
export default function Products({ products }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(document.querySelector("body"), {
        background: "var(--main-dark)",
      });
    } else
      animate(document.querySelector("body"), {
        background: "var(--main-light)",
      });
  }, [isInView]);
  return (
    <section className="products" ref={scope}>
      <style jsx>{`
        .products {
          grid-column: 1/4;
          display: grid;
          padding-top: var(--space-big);

          position: relative;
        }
        .wrapp {
          grid-gap: var(--space-small);
        }
        h2 {
          grid-column: 1/3;
          color: var(--main-light);
        }

        .button-link {
          grid-column: 2/4;
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .h3 {
            grid-column: 1/4;
          }
          .button-link {
            grid-column: 1/4;
          }
        }
      `}</style>
      <div className="wrapp  container">
        <h2>Подборка самых актуальных предложений</h2>

        <div className="button-link">
          <LinkTo href="categories" text="Смотреть все" />
        </div>
        <Slider {...{ products }} />
      </div>
    </section>
  );
}
