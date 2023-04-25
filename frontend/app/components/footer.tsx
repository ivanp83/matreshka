import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import Matrehska from "./shared/matrehska";

export default function Footer() {
  return (
    <footer className="footer container">
      <style jsx>{`
        .footer {
          padding: var(--space-med) 30px var(--space-small);
        }
        .matrehska-logo {
          grid-column: 1/2;
        }
        .social,
        .address {
          margin-bottom: 1rem;
        }
        .social {
          grid-column: 2/3;
        }

        .address {
          grid-column: 3/4;
        }
        .contacts {
          grid-row: 1;
          grid-column: 3/4;
        }
        .contacts a {
          display: block;
        }
        span {
          color: var(--main-gray);
        }
      `}</style>
      <div className="matrehska-logo">
        <Matrehska />
      </div>

      <div className="social">
        <h3>Мы в соцсетях</h3>
        <ul>
          <li>
            <span>
              <a
                href="http://instagram.com/_u/yulianalegkodumova/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="tg://resolve?domain=YulianaLegkodumova"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </span>
          </li>
          <li>
            <span>
              <a
                href="https://vk.com/matreshkaflower"
                target="_blank"
                rel="noopener noreferrer"
              >
                В контакте
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="address">
        <h3>Адрес</h3>
        <span>Калининград, улица Виктора Гакуна, 5Б</span>
      </div>
      <div className="contacts">
        <h3>Контакты</h3>
        <span>
          <a href="tel:+79114939999">7 911 493-99-99</a>
          <a href="mail:+79114939999">matreshkaflower@bk.ru</a>
        </span>
      </div>
    </footer>
  );
}
