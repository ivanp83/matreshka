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
          <h1>{data.heaadline}</h1>
          <address className="address">
            <div className="block">
              <h4>Адрес</h4>
              <span>{data.address}</span>
            </div>
            <div className="block">
              <h4>Связаться с нами</h4>
              <a href={`tel:${data.phone}`}>{data.phone}</a>
              <a href={`mail:${data.email}`}>{data.email}</a>
            </div>
            <div className="block">
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
          </address>
        </div>
      </section>
    </motion.div>
  );
}
