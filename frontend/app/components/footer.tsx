import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Matrehska from "./shared/matryohska";

export default function Footer() {
  return (
    <footer className="footer">
      <style jsx>{`
        .footer {
          padding: var(--space-small) 0;
          margin-top: var(--space-med);
          background: var(--main-dark);
          color: var(--main-light);
          position: relative;
          z-index: 1;
        }
        .matrehska-logo {
          grid-column: 1/2;
        }
        .social,
        .address {
          margin-bottom: 1rem;
        }
        .social,
        .creds {
          grid-column: 3/4;
        }
        .creds {
          grid-row: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: var(--space-small);
        }

        .contacts a {
          display: block;
        }
        span {
          color: var(--main-gray);
        }
        @media all and (max-width: 1024px) {
          .social,
          .creds {
            grid-column: 2/4;
          }
        }
        @media all and (max-width: 768px) and (orientation: portrait) {
          .footer {
            font-size: 16px;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .matrehska-logo {
            grid-row: 5;
            grid-column: 1/4;
            margin-top: 2rem;
          }
          .social,
          .creds {
            grid-column: 1/4;
          }
          .social {
            grid-row: 2;
            margin-bottom: 1rem;
          }

          .address {
            margin-bottom: 0;
          }
          .creds {
            grid-gap: 1rem;
            grid-row: 3;
            grid-template-columns: 1fr;
          }
        }
        @media all and (max-width: 1024px) and (orientation: landscape) {
          .matrehska-logo {
            width: 12rem;
          }
        }
      `}</style>
      <div className="wrapp container">
        <div className="matrehska-logo">
          <Matrehska style={{ fill: "var(--main-light)" }} />
        </div>
        <div className="social">
          <h4>Мы в соцсетях</h4>
          <ul>
            <li>
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
                  onClick={() => !window.open("https://vk.com/matreshkaflower")}
                >
                  В контакте
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="creds">
          <div className="address">
            <h4>Адрес</h4>
            <span>Калининград, улица Виктора Гакуна, 5Б</span>
          </div>
          <div className="contacts">
            <h4>Контакты</h4>
            <span>
              <a href="tel:+79114939999">7 911 493-99-99</a>
              <a href="mail:+79114939999">matreshkaflower@bk.ru</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
