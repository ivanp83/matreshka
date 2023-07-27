import Text from "./text";

export default function Story() {
  return (
    <section className="story">
      <style jsx>{`
        .story {
          background-color: var(--main-light);

          grid-row-gap: var(--space-small);
          position: relative;
          margin-top: 100vh;
        }
        .wrapp {
          padding-top: var(--space-small);
          padding-bottom: var(--space-med);
          border-top: 1px solid var(--main-gray);
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
            grid-row-gap: 1rem;
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
        <h2>Философия</h2>

        <Text text="Искусство создания уникальных букетов" />
        <span className="text">
          Мы считаем, что каждый букет должен быть таким же уникальным, как и
          человек, которому он адресован. Поэтому, наши букеты - это не просто
          цветы; это симфония эмоций, стиля, красок и ароматов, объеденённых в
          потрясающую композицию. Наши флористы тщательно подбирают лучшие
          сочетания цветов и декора, создавая прекрасную цветочную композицию.
          Каждый наш букет будет адатирован под ваши индивидуальные пожелания и
          предпочтения. Вы гарантировано получите не только красивый подарок, но
          и незабываемые впечатления, которые пробудят ваши чувства и наполнят
          радостью ваш день.
        </span>
        <span className="text">
          {/* Наша команда экспертов будет неустанно работать над тем, чтобы
          адаптировать каждый букет к вашим индивидуальным предпочтениям и
          потребностям. С нашими букетами вы получите не только красивый
          подарок, но и незабываемые впечатления, которые пробудят ваши чувства
          и принесут радость в ваш день. Позвольте нам помочь вам отпраздновать
          особые моменты вашей жизни с помощью наших искусно изготовленных
          букетов. */}
        </span>
      </div>
    </section>
  );
}
