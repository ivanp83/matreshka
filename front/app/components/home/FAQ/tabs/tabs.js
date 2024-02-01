import Tab from "./tab";

export default function Tabs({ data }) {
  return (
    <div className="tabs">
      <style jsx>{`
        .tabs {
          display: grid;
          grid-gap: var(--space-small);
          grid-column: 2/4;
        }
        h3 {
          grid-column: 1/2;
        }
        .tabs-list {
          display: grid;

          grid-column: 1/2;
        }
        @media all and (max-width: 768px) {
          .tabs {
            grid-column: 1/4;
          }
        }
      `}</style>
      <h3 className="h3">У нас есть ответы на ваши частые вопросы</h3>
      <dl className="tabs-list">
        {data.map((item, i) => (
          <Tab data={item} key={i} />
        ))}
      </dl>
    </div>
  );
}
