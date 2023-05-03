"use client";

import { useEffect, useState } from "react";

const tabs = [
  {
    id: 0,
    title: "Гарантия",
    content: [
      "Да но нет! Как бы это не казалось. У всего есть гарантия.",
      "И знаете в первую очередь, нам хочется выстраивать с вами честные и открытые отношения, в которых есть доверие. Поэтому мы стараемся как можно тщательнее следить за поставками, отбирая самые лучшие экземпляры для составления ваших особенных букетов, чтобы быть уверенными в их качестве.",
      "Случается, редко, но бывает, что цветок приехал с изъяном который не был замечен. Поставлен в букет и быстро завял. Поэтому мы для себя решили что, в нашей мастерской будет цветочная гарантия, ведь для нас приоритет чтобы цветы радовали, как можно дольше.  И если вдруг случился казус, Они будут заменены без всяких «но» или «если». Просто сообщите нам об этом 🤗.",
      "А если вы уже придумали, свой особенных букет или просто решили порадовать охапкой цветов себя или близких заказать из очень просто.",
    ],
  },
  {
    id: 1,
    title: "Условия доставки ",
    content: [
      "Перед доставкой мы отправляем фото готового заказа, если вдруг есть уточнение или пожелания их можно сразу исправить. Стоимость доставки по городу Калининграду от 250 руб. (точная стоимость доставки расчитывается в зависимости от адреса получателя) ",
      "Стоимость доставки по области расчитывается индивидуально в зависимости от удалённости.",
    ],
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="order">
      <style jsx>{`
        .order {
          min-height: 95vh;
          grid-column: 1/4;
        }
        .wrapp {
          grid-column: 2/3;
          grid-row-gap: var(--space-small);
          height: fit-content;
        }
        h1 {
          grid-column: 1/4;
          justify-self: start;
        }
        nav {
          grid-column: 2/3;
          display: grid;
          grid-template-rows: min-content;
          text-align: left;
          grid-auto-flow: column;
          grid-gap: 1rem;
          width: fit-content;
        }
        .nav-button {
          border: none;
          outline: none;
          background: transparent;
          font-size: inherit;
        }
        .nav-button:not([disabled]) {
          cursor: pointer;
        }
        .nav-button.active {
          color: var(--main-gray);
        }
        .content {
          grid-column: 2/3;
        }
        .par {
          display: grid;
          grid-row-gap: 1rem;
        }
      `}</style>
      <div className="wrapp container">
        <nav aria-label="Навигация по клиентской информации">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${tab.id === activeTab ? "active" : ""} nav-button`}
              disabled={tab.id === activeTab}
            >
              {tab.title}
            </button>
          ))}
        </nav>
        <div className="content">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              style={{ display: tab.id === activeTab ? "block" : "none" }}
            >
              <div className="par">
                {tab.content.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
