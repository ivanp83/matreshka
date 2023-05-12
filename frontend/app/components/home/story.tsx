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

        <Text text="Мы считаем, что каждый букет должен быть уникальным и отражать индивидуальность того, кому он предназначен" />
        <span className="text">
          Наши букеты – это что-то большее, чем просто цветы. Каждый – это
          стихия чувств, красок и ароматов, сочетающихся в удивительную
          композицию. Наши флористы тщательно работаю над каждым заказом и
          подбирают необычные сочетания цветов вместе с дополнительными
          элементами, чтобы создать уникальный образ каждого букета. Мы подберём
          композицию, которая будет подходить именно вам – неважно, дарите вы ее
          кому-то или же решаете порадовать себя. Мы уверены, что наши букеты
          помогут вам почувствовать всю красоту этого мира и превратить обычный
          день в настоящий праздник.
        </span>
      </div>
    </section>
  );
}
