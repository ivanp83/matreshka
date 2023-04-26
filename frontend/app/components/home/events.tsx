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
          grid-gap: var(--space-small);
          padding: var(--space-small);
          background: var(--main-blue);
          color: var(--main-light);
          border-radius: 0 40px 40px 40px;
          position: relative;
        }
        .image {
          position: relative;
          grid-column: 1/4;
          height: 100vh;
          border-radius: 40px;
          overflow: hidden;
        }
        .text-bold {
          grid-column: 2/3;
        }
        .par {
          grid-column: 3/4;
          display: grid;
          grid-gap: var(--space-small);
        }
        h2 {
          position: absolute;
          top: -30px;
          left: 0;
          background: var(--main-blue);

          border-radius: 40px 40px 0 0;
          padding: 10px 20px 0;
        }
      `}</style>
      <h2>Для торжества</h2>
      <Text
        text1=" Свадьба, день рождения"
        text2="или корпоратив. Подари букет любимому
        человеку в канун торжества"
      />
      <div className="image">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src="/images/3.jpg"
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
