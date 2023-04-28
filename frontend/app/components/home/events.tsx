import React from "react";
import Text from "./text";
import Image from "next/image";
import TextBold from "./textBold";

type Props = {};

export default function Events({}: Props) {
  return (
    <section className="events container">
      <style jsx>{`
        .events {
          grid-column: 1/4;
          padding-top: var(--space-med);
          display: grid;
          grid-row-gap: var(--space-small);
          padding: var(--space-small) 1rem var(--space-med);
          background: var(--main-blue);
          color: var(--main-light);
          border-radius: 0 0 26px 26px;
          position: relative;
        }
        .image {
          position: relative;
          grid-column: 1/4;
          height: calc(90vw / 4 * 3);
          border-radius: 30px;
          overflow: hidden;
        }
        .text-bold {
          grid-column: 2/3;
        }
        .par {
          grid-column: 3/4;
          display: grid;
          grid-gap: 1rem;
        }
        h2 {
          position: absolute;
          top: -30px;
          left: 0;
          background: var(--main-blue);
          border-radius: 26px 26px 0 0;
          padding: 10px 1rem;
        }
        @media all and (max-width: 768px) and (orientation: portrait) {
          .text-bold {
            grid-column: 1/2;
          }
          .par {
            grid-column: 2/4;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .events {
            grid-row-gap: 1rem;
          }
          .text-bold {
            grid-column: 1/4;
          }
          .par {
            grid-column: 1/4;
          }
        }
      `}</style>
      <h2>Для торжества</h2>
      <Text
        text="Свадьба, день рождения или корпоратив. Подари букет любимому
        человеку в канун торжества"
      />
      <div className="image">
        <Image
          quality={100}
          fill
          style={{ objectFit: "cover" }}
          src="/images/6.jpg"
          alt="Девушка с цветами"
          sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw"
        />
      </div>
      <div className="text-bold">
        <TextBold text="Наши букеты сделают твой праздник еще более ярким и красивым" />
      </div>
      <div className="par">
        <span>
          Цветы отражают любовь, нежность и красоту. Они могут украсить любое
          торжество и создать особую атмосферу на свадьбе или дне рождения. Наши
          опытные флористы смогут подобрать букеты, композиции и украшения,
          которые подчеркнут индивидуальность молодоженов и оставят яркие
          впечатления у гостей. Разнообразие цветов и флористических приемов
          позволяет создавать уникальный дизайн свадебного зала, столовой и
          банкетного стола.
        </span>
        <span>
          Наиболее популярными цветами для свадебных торжеств являются розы,
          пионы, хризантемы, ландыши, орхидеи и тюльпаны. Они могут быть
          использованы как в букетах, так и в качестве украшений в интерьере
          помещений. Помимо этого, цветы могут символизировать различные эмоции
          и чувства, такие как радость, гармонию, возвышенность и благородство.
          Они могут выражать и настроение молодоженов и создавать нужную
          атмосферу на свадебном торжестве.
        </span>
      </div>
    </section>
  );
}
