"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Index({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="info container">
          <style jsx>{`
            .info {
              min-height: calc(100vh - var(--space-big) * 2);
              grid-column: 1/4;
              grid-row-gap: var(--space-small);
              height: min-content;
              grid-template-rows: min-content;
            }
            .wrapp {
              grid-column: 1/4;
              padding: 0;
              grid-row-gap: var(--space-small);
              height: fit-content;
            }
            h1 {
              grid-column: 2/4;
              justify-self: start;
              user-select: none;
            }
            nav {
              grid-column: 1/2;
              display: grid;
              grid-template-rows: min-content;
              text-align: left;
              grid-gap: 10px;
              width: fit-content;
              grid-template-rows: min-content min-content min-content;
            }
            .nav-button {
              border: none;
              outline: none;
              background: transparent;
              text-align: left;
            }
            button {
              color: inherit;
            }
            .nav-button:not([disabled]) {
              cursor: pointer;
            }
            .nav-button.active {
              color: var(--main-gray);
            }
            .content {
              grid-column: 2/4;
            }
            .par {
              display: grid;
              grid-row-gap: 1rem;
            }
            @media all and (orientation: portrait) {
              h1 {
                grid-column: 1/4;
              }
            }
            @media all and (max-width: 1000px) {
              nav,
              .content {
                grid-column: 1/4;
              }
            }
          `}</style>
          <h1>Информация</h1>
          <div className="wrapp container">
            <nav aria-label="Навигация по клиентской информации">
              <ul style={{ display: "contents" }}>
                {tabs.map((tab) => (
                  <li key={tab.id} style={{ display: "contents" }}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        tab.id === activeTab ? "active" : ""
                      } nav-button sub-nav-link`}
                      disabled={tab.id === activeTab}
                    >
                      {tab.title}
                    </button>
                  </li>
                ))}
              </ul>
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
      </motion.div>
    </>
  );
}
