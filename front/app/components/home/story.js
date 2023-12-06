import Text from "./text";

export default function Story() {
  return (
    <div className="story">
      <style jsx>{`
        .story {
          background-color: var(--main-light);
          width: 100%;
          grid-row-gap: var(--space-small);
          position: relative;
          margin-top: 100vh;
        }
        .wrapp {
          padding-top: var(--space-small);
          padding-bottom: var(--space-med);
          border-top: 1px solid var(--main-gray);
        }
        b {
          font-weight: 400;
        }
        h2 {
          grid-column: 1/2;
        }
        .text {
          grid-column: 2/4;
          margin-top: var(--space-small);
          column-count: 2;
        }
        @media all and (orientation: portrait) {
          .wrapp {
            grid-row-gap: var(--space-small);
          }
        }
        @media all and (max-width: 819px) and (orientation: portrait) {
          .text {
            margin-top: 0;
            grid-column: 2/4;
            column-count: 1;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          h2 {
            grid-column: 1/4;
          }
          .text {
            margin-top: 0;
            grid-column: 1/4;
            column-count: 1;
          }
        }
      `}</style>
      <div className="wrapp container">
        <h1 className="h2">Цветочная мастерская</h1>

        <Text text="Искусство создания уникальных букетов" />
        <p className="text">
          Каждый сделанный нами&nbsp;<b>букет</b>&nbsp;такой же уникальный, как
          и человек, кому он предназначен. Поэтому, для нас букеты - это не
          просто цветы; это симфония эмоций, стиля, красок и ароматов,
          объединённых в потрясающую композицию. Мы тщательно подбираем лучшие
          &nbsp;<b>сочетания цветов</b>&nbsp;и декора, создавая прекрасную
          цветочную композицию. Каждый наш букет будет адаптирован под ваши
          индивидуальные пожелания и предпочтения. Вы гарантировано получите не
          только красивый подарок, но и незабываемые впечатления, которые
          пробудят ваши чувства и наполнят радостью ваш день.
        </p>
      </div>
    </div>
  );
}
