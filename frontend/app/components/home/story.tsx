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
          padding: var(--space-small) 0 var(--space-med);
          border-top: 1px solid var(--main-gray);
        }
        h2 {
          grid-column: 1/2;
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
        }
      `}</style>
      <div className="wrapp container">
        <h2>Наша философия</h2>

        <Text text="Мы считаем, что каждый букет должен быть уникальным и отражать индивидуальность того, кому он предназначен, поэтому, тщательно подбираем цвета и сочетания, чтобы создать букет, который подходит именно для вашего случая." />
      </div>
    </section>
  );
}
