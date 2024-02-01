import LinkTo from "../shared/linkTo";
import Slider from "../shared/slider";

export default function Products({ products }) {
  return (
    <section className="products">
      <style jsx>{`
        .products {
          grid-column: 1/4;
          display: grid;
          padding-top: var(--space-small);
          padding-bottom: var(--space-big);
          background: var(--main-light);
          position: relative;
          background: var(--light-pink);
        }
        .wrapp {
          grid-gap: var(--space-small);
        }
        h2 {
          grid-column: 1/2;
        }
        .h3 {
          grid-column: 2/4;
        }
        cite {
          font-style: normal;
        }
        .button-link {
          grid-column: 2/4;
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .h3 {
            grid-column: 1/4;
          }
          .button-link {
            grid-column: 1/4;
          }
        }
      `}</style>
      <div className="wrapp  container">
        <h2 className="h2">Популярные </h2>
        <h3 className="h3">
          Выбор клиентов: подборка самых актуальных предложений
        </h3>
        <div className="button-link">
          <LinkTo href="categories" text="Смотреть все" />
        </div>
        <Slider {...{ products }} />
      </div>
    </section>
  );
}
