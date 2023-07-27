"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export default function Index(props) {
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

          .wrapp {
            grid-column: 2/4;
            display: grid;
            grid-row-gap: var(--space-small);
            height: fit-content;
          }
          .address {
            font-style: normal;
            display: grid;
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
          <div className="creds">
            <address className="address">
              <span>Калининград, улица Виктора Гакуна, 5Б</span>
              <a href="tel:+79114939999">+7 911 493-99-99</a>
              <a href="mail:matreshkaflower@bk.ru">matreshkaflower@bk.ru</a>
            </address>
          </div>
          <div className="social">
            <h4>Мы в соцсетях</h4>
            <ul>
              <li>
                <span>
                  <a
                    href="#"
                    onClick={() =>
                      !window.open(
                        "http://instagram.com/_u/yulianalegkodumova/"
                      )
                    }
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </span>
              </li>
              <li>
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
              </li>
              <li>
                <span>
                  <a
                    href="#"
                    onClick={() =>
                      !window.open("https://vk.com/matreshkaflower")
                    }
                  >
                    В контакте
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
