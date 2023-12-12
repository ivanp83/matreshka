"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Index({ data }) {
  const [state, setState] = useState(false);
  useEffect(() => {
    typeof window !== undefined && setState(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="contacts container">
        <style jsx>{`
          .contacts {
            min-height: calc(100vh - var(--space-big));
            image-rendering: var(--space-med);
          }
          .headline {
            font-size: 1rem;
            font-weight: 400;
            display: block;
          }
          .wrapp {
            grid-column: 2/4;
            display: grid;
            grid-row-gap: var(--space-small);
            height: fit-content;
          }
          .address {
            font-style: normal;
            display: grid;
            grid-row-gap: 1rem;
          }
          a {
            display: block;
          }
          @media all and (max-width: 600px) and (orientation: portrait) {
            .wrapp {
              grid-column: 1/4;
            }
          }
        `}</style>
        <div className="wrapp">
          <h1>Контакты</h1>
          <address className="address">
            <span className="block">
              <span className="headline">Адрес</span>
              <span>{data.address}</span>
            </span>
            <span className="block">
              <span className="headline">Связаться с нами</span>
              <a href={`tel:${data.phone.split(" ").join("")}`}>{data.phone}</a>
              <a href={`mail:${data.email}`}>{data.email}</a>
            </span>
            <span className="block">
              <span className="headline">Мы в соцсетях</span>

              <span>
                <a
                  href="#"
                  onClick={() =>
                    !window.open("http://instagram.com/_u/yulianalegkodumova/")
                  }
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </span>

              <span>
                <a
                  href="#"
                  onClick={() =>
                    !window.open("tg://resolve?domain=YulianaLegkodumova")
                  }
                >
                  Telegram
                </a>
              </span>

              <span>
                <a
                  href="#"
                  onClick={() => !window.open("https://vk.com/matreshkaflower")}
                >
                  В контакте
                </a>
              </span>
            </span>
          </address>
        </div>
      </section>
    </motion.div>
  );
}
