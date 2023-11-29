import React from "react";
import Text from "./text";
import CustomImage from "../image";

export default function Events({}) {
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
          font-weight: 600;
        }
        .par {
          grid-column: 3/4;
          display: grid;
          grid-gap: 1rem;
        }
        h2 {
          grid-column: 1/2;
        }
        strong {
          font-weight: 400;
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
        <h2 className="h2">Events</h2>
        <Text text="Авторская флористика и композиции для оформления крупных и камерных событий" />
        <div className="image">
          <CustomImage
            direct
            style={{ objectFit: "cover", objectPosition: "top" }}
            src="/images/9.jpg"
            alt="Девушка с цветами"
            sizes="(max-width: 768px) 100vw,
(max-width: 1200px) 50vw"
          />
        </div>

        <strong className="text-bold">
          Наши букеты сделают твой праздник
          <br /> еще более ярким и красивым
        </strong>

        <div className="par">
          <p>
            Цветочное оформление - это искусство, требующее профессионального
            подхода и творческого склада ума. Мы постоянно ищем новые
            захватывающие эксперименты, которые порадуют вас и ваших гостей.
          </p>
          <p>
            Работа с клиентами - это всегда индивидуальный подход, который
            включает в себя разработку оригинальной концепции и креативных
            решений в области цветочного дизайна. Мы используем только
            высококачественные, чистые цветы, которые подчеркивают красоту и
            уникальность мероприятия.
          </p>
          <p>
            <strong>
              Мы берем на себя полную ответственность за цветочное оформление
              всего помещения, начиная с расстановки цветочных композиций на
              банкетных столах и заканчивая созданием эффектных флористических
              арок и цветочных украшений на сцене.
            </strong>
          </p>
          <p>
            В своей работе мы руководствуемся не только эстетическими
            соображениями, но и принципами удобства и безопасности для наших
            клиентов и их гостей.
          </p>
        </div>
      </div>
    </section>
  );
}
