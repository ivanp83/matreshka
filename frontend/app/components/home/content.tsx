import Image from "next/image";
import { Category, ProductItem } from "@/types";

import Text from "./text";

export default function Сontent() {
  return (
    <section className="content  container">
      <style jsx>{`
        .content {
          background-color: var(--main-pink);
          padding: var(--space-small) 1rem var(--space-med);
          grid-row-gap: var(--space-small);
          position: relative;
          margin-top: 97vh;
        }

        h2 {
          position: absolute;
          top: -30px;
          left: 0;
          background: var(--main-pink);
          padding: 10px 1rem;
          border-radius: 26px 26px 0 0;
        }
        .image {
          position: relative;
          grid-column: 2/4;
          height: calc((100vw * 0.7) * 4 / 3);
          border-radius: 30px;
          overflow: hidden;
        }
        h3 {
          grid-column: 2/4;
        }
        @media all and (orientation: portrait) {
          .content {
            grid-row-gap: 1rem;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          h3,
          .image {
            position: relative;
            grid-column: 1/4;
          }
        }
      `}</style>
      <h2>Мир цветов</h2>

      <h3>Ведь всё начинается с любви к себе, дому и цветам</h3>
      <div className="image">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/images/5.jpg"
          alt="Девушка с цветами"
          sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw"
        />
      </div>
      <Text
        text1="Мы считаем, что каждый"
        text2=" букет должен быть уникальным и отражать индивидуальность того, кому он предназначен. Поэтому, тщательно подбираем цвета и сочетания, чтобы создать букет, который подходит именно для вашего случая."
      />
    </section>
  );
}
