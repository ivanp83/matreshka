import React, { useEffect, useState, useRef } from "react";
import Logo from "../shared/matryohska";
import CustomImage from "../image";
import Link from "next/link";

export default function Banner() {
  const [state, setState] = useState(true);
  const masterRef = useRef(null);
  const imageRef = useRef(null);
  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setState(false);
    } else {
      setState(true);
    }
  };
  useEffect(() => {
    (function () {
      const COUNT = 300;
      const masthead = masterRef.current;
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");
      let width = masthead.clientWidth;
      let height = masthead.clientHeight;
      let i = 0;
      let active = false;

      function onResize() {
        width = masthead.clientWidth;
        height = masthead.clientHeight;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = "#FFF";

        let wasActive = active;
        active = width > 200;

        if (!wasActive && active) requestAnimFrame(update);
      }

      const Snowflake = function () {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.r = 0;

        this.reset();
      };

      Snowflake.prototype.reset = function () {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.vy = 1 + Math.random() * 3;
        this.vx = 0.5 - Math.random();
        this.r = 1 + Math.random() * 2;
        this.o = 0.5 + Math.random() * 0.5;
      };

      canvas.style.position = "absolute";
      canvas.style.left = canvas.style.top = "0";
      canvas.style.zIndex = -1;

      let snowflakes = [],
        snowflake;
      for (i = 0; i < COUNT; i++) {
        snowflake = new Snowflake();
        snowflakes.push(snowflake);
      }

      function update() {
        ctx.clearRect(0, 0, width, height);

        if (!active) return;

        for (i = 0; i < COUNT; i++) {
          snowflake = snowflakes[i];
          snowflake.y += snowflake.vy;
          snowflake.x += snowflake.vx;

          ctx.globalAlpha = snowflake.o;
          ctx.beginPath();
          ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
          ctx.closePath();
          ctx.fill();

          if (snowflake.y > height) {
            snowflake.reset();
          }
        }

        requestAnimFrame(update);
      }

      let requestAnimFrame = (function () {
        return (
          requestAnimationFrame ||
          function (callback) {
            setTimeout(callback, 1000 / 60);
          }
        );
      })();

      onResize();
      window.addEventListener("resize", onResize, false);

      masthead.appendChild(canvas);
    })();
    function handleMouseMove(e) {
      if (/Android|iPhone/i.test(navigator.userAgent)) {
        imageRef.current.style.transform = `translate(0, -50%)`;
        return;
      }
      if (imageRef.current) {
        const x = (window.innerWidth - e.screenX) / 98;
        const y = (window.innerHeight - e.screenY) / 98;

        imageRef.current.style.transform = `translate(-${0 + x}%, -${50 + y}%)`;
      }
    }

    window.addEventListener("resize", handleMouseMove);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleMouseMove);
    };
  }, []);
  return (
    <div className="banner container" ref={masterRef}>
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
          color: var(--main-light);
          background: var(--main-red);
          font-weight: 400;
          text-transform: uppercase;
          font-size: 14px;
          transition: all 0.3s linear 0s;
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
          z-index: -2;
        }

        .image {
          width: 400px;
          height: 550px;
          position: absolute;
          z-index: -1;
          right: 16%;
          top: 50%;
          transform: translateY(-50%);
          mix-blend-mode: hard-light;
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
            font-weight: 500;
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
      <canvas id="canvas" />
      <div className="logo-title">
        <Logo />
      </div>

      <p className="image" ref={imageRef}>
        <CustomImage
          src="/images/8.jpg"
          direct={true}
          alt="С вами команда классного Калининградского цветочного бренда Матрёшка🪆. Мы создаём уникальные WOW букеты💐. Будем рады активному и дружелюбному общению🥰."
          sizes="(max-width: 768px) 80vw, 400px"
        />
      </p>
      <div className="hlink">
        <Link href="/categories">
          <span>Выбери свой букет</span>
        </Link>
      </div>
    </div>
  );
}
