import React from "react";
import Text from "./text";
import CustomImage from "../shared/image";

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
          border-top: 1px solid var(--light-gray);
          grid-row-gap: var(--space-small);
        }
        .image {
          position: relative;
          grid-column: 1/4;
          height: calc(var(--cont-w) / 4 * 3);
        }
        .text-bold {
          grid-column: 2/3;
          font-weight: 700;
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
          font-weight: var(--main-fw);
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

        <p className="text-bold">
          <b>Букеты</b>, которые сделают твой праздник
          <br /> еще более ярким и красивым
        </p>

        <div className="par">
          <p>
            В своей работе мы создаём не просто букеты и композиции, это скорее
            искусство, которое вдохновляет не только самого автора, но и
            окружающих; искусство, требующее профессионального и творческого
            подхода.
          </p>
          <p>
            Мы постоянно ищем новые захватывающие эксперименты, которые порадуют
            Вас и Ваших гостей. Работа с заказчиками - это всегда глубокое
            погружение, которое включает в себя разработку оригинальной
            концепции и креативных решений в области цветочного дизайна, нам
            крайне важно создавать проекты, пронизанные философией и смыслами.
          </p>
          <p>
            Если в Вас откликается такой подход, то мы с радостью возьмемся за
            организацию, а Вам остается лишь сосредоточиться на мероприятии, и
            наслаждаться моментом.
          </p>
        </div>
      </div>
    </section>
  );
}
