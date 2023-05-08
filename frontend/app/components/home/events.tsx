import React from "react";
import Text from "./text";
import Image from "next/image";

type Props = {};

export default function Events({}: Props) {
  return (
    <section className="events">
      <style jsx>{`
        .events {
          grid-column: 1/4;
          position: relative;
        }
        .wrapp {
          padding-top: var(--space-small);
          border-top: 1px solid var(--main-gray);
          grid-row-gap: var(--space-small);
        }
        .image {
          position: relative;
          grid-column: 1/4;
          height: calc(var(--cont-w) / 4 * 3);
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
          grid-column: 1/2;
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
            max-width: 100%;
          }
          h2 {
            grid-column: 1/4;
          }
          .par {
            grid-column: 1/4;
          }
        }
      `}</style>
      <div className="wrapp container">
        <h2>Для торжества</h2>
        <Text
          text="Свадьба, день рождения или корпоратив. Подари букет любимому
        человеку в канун торжества"
        />
        <div className="image">
          <Image
            quality={100}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            src="/images/9.jpg"
            alt="Девушка с цветами"
            sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw"
          />
        </div>

        <b className="text-bold">
          Наши букеты сделают твой праздник еще более ярким и красивым
        </b>

        <div className="par">
          <span>
            Цветы отражают любовь, нежность и красоту. Они могут украсить любое
            торжество и создать особую атмосферу на свадьбе или дне рождения.
            Наши опытные флористы смогут подобрать букеты, композиции и
            украшения, которые подчеркнут индивидуальность молодоженов и оставят
            яркие впечатления у гостей. Разнообразие цветов и флористических
            приемов позволяет создавать уникальный дизайн свадебного зала,
            столовой и банкетного стола.
          </span>
          <span>
            Наиболее популярными цветами для свадебных торжеств являются розы,
            пионы, хризантемы, ландыши, орхидеи и тюльпаны. Они могут быть
            использованы как в букетах, так и в качестве украшений в интерьере
            помещений. Помимо этого, цветы могут символизировать различные
            эмоции и чувства, такие как радость, гармонию, возвышенность и
            благородство. Они могут выражать и настроение молодоженов и
            создавать нужную атмосферу на свадебном торжестве.
          </span>
        </div>
      </div>
    </section>
  );
}
