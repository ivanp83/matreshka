import React, { useEffect, useState } from "react";
import Logo from "../shared/matryohska";
import CustomImage from "../image";
import LinkTo from "../shared/linkTo";
import Link from "next/link";

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
    <div className="banner container">
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
        .hlink {
          display: grid;
          display: inline-block;
          width: fit-content;
          color: var(--main-dark);
          font-weight: 600;
          text-transform: uppercase;

          transition: all 0.3s linear 0s;
          border: 1px solid;
          padding: 0.7rem 2.4rem;
          grid-column: 2/4;
          display: grid;
          justify-content: start;
        }
        h1 {
          font-size: 14px;
        }
        .logo-title {
          grid-column: 1/4;
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
            width: 80vw;
            margin: 5rem auto 0;
          }
          .hlink {
            grid-column: 1/4;
            grid-row: 3;
            margin: 1rem auto;
          }
        }
        @media all and (max-width: 950px) and (orientation: landscape) {
          .logo-title {
            width: 80vw;
          }
          .image {
            width: 30vw;
            height: 40vw;
          }
        }
      `}</style>

      <div className="logo-title">
        <Logo />
      </div>

      <div className="image">
        <CustomImage
          src="/images/8.jpg"
          direct={true}
          alt="Баннер девушка с букетом цветов"
          sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 500px"
        />
      </div>
      <div className="hlink">
        <Link
          href="/categories?id=0"
          style={{ background: "var(--main-light)" }}
        >
          <h1>Выбрать свой букет</h1>
        </Link>
      </div>
    </div>
  );
}
