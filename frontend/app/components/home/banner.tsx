import React, { useEffect, useState } from "react";
import Logo from "../shared/matryohska";
import CustomImage from "../image";
import LinkTo from "../shared/linkTo";

export default function Banner() {
  const [state, setState] = useState(true);
  const handleScroll = () => {
    if (window.pageYOffset >= window.innerHeight) {
      setState(false);
    } else {
      setState(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="banner container">
      <style jsx>{`
        .banner {
          width: 100%;
          height: 100vh;
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          place-content: center;
          opacity: ${state ? 1 : 0};
          grid-template-rows: min-content min-content;
        }
        .logo-title {
          grid-column: 1/4;
        }
        .button {
          grid-column: 2/3;
        }

        .image {
          width: 400px;
          height: 550px;
          position: absolute;
          z-index: -1;
          right: 16%;
          top: 50%;
          transform: translateY(-50%);
        }

        @media all and (max-width: 1260px) {
          .image {
            width: 300px;
            height: 400px;
          }
        }
        @media all and (max-width: 1024px) and (orientation: portrait) {
          .image {
            width: 30vw;
            height: 40vw;
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .banner {
            place-content: start;
          }
          .image {
            grid-column: 1/4;
            width: calc(80vw - 40px);
            height: calc((80vw - 40px) * 4 / 3);
            position: relative;
            right: -10vw;
          }
          .logo-title {
            grid-column: 1/4;
            margin-top: 5rem;
            width: 93vw;
          }
          .button {
            grid-column: 1/4;
            grid-row: 3;
            margin: 1rem auto;
          }
        }
        @media all and (max-width: 950px) and (orientation: landscape) {
          .image {
            width: 30vw;
            height: 40vw;
          }
        }
      `}</style>
      <div className="logo-title">
        <Logo />
      </div>
      <div className="button">
        <LinkTo
          href="/categories"
          text="Подобрать букет"
          style={{ background: "var(--main-light)" }}
        />
      </div>
      <div className="image">
        <CustomImage
          src="/images/8.jpg"
          direct={true}
          alt="Баннер девушка с букетом цветов"
        />
      </div>
    </section>
  );
}
