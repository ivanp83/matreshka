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
          height: calc((100vw * 0.4) * 4 / 3);
          border-radius: 30px;
          overflow: hidden;
        }
        blockquote {
          grid-column: 2/4;
        }
        @media all and (orientation: portrait) {
          .content {
            grid-row-gap: 1rem;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          blockquote,
          .image {
            position: relative;
            grid-column: 1/4;
          }
          .image {
            height: calc((100vw) * 4 / 3);
          }
        }
      `}</style>
      <h2>История</h2>
      <blockquote>
        <Text text="Всё началось с любви к себе, дому и цветам" noindent />
      </blockquote>

      <div className="image">
        <Image
          quality={100}
          fill
          style={{ objectFit: "cover", objectPosition: "top" }}
          src="/images/8.jpg"
          alt="Девушка с цветами"
          sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw"
        />
      </div>
      <Text text="Мы считаем, что каждый букет должен быть уникальным и отражать индивидуальность того, кому он предназначен. Поэтому, тщательно подбираем цвета и сочетания, чтобы создать букет, который подходит именно для вашего случая." />
    </section>
  );
}
