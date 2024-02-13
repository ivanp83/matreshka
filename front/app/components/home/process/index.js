"use client";
import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import {
  useAnimate,
  useInView,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
export default function Process(props) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const container = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const imageTransform = useTransform(scrollYProgress, [0, 1], [4900, 0]);
  const imageTransform2 = useTransform(scrollYProgress, [0, 1], [900, 0]);
  const imageTransform3 = useTransform(scrollYProgress, [0, 1], [900, 0]);
  const imageTransform4 = useTransform(scrollYProgress, [0, 1], [900, 0]);
  const imageTransform5 = useTransform(scrollYProgress, [0.2, 1], [2900, 0]);
  const imageTransform6 = useTransform(scrollYProgress, [0.2, 1], [2900, 0]);
  const imageTransform7 = useTransform(scrollYProgress, [0.2, 1], [2900, 0]);
  const imageTransform8 = useTransform(scrollYProgress, [0.2, 1], [2900, 0]);
  const imageTransform9 = useTransform(scrollYProgress, [0.2, 1], [2900, 0]);
  const imageTransform10 = useTransform(scrollYProgress, [0.2, 1], [3900, 0]);
  const imageTransform11 = useTransform(scrollYProgress, [0.3, 1], [3900, 0]);
  const imageTransform12 = useTransform(scrollYProgress, [0.3, 1], [3900, 0]);
  const imageTransform13 = useTransform(scrollYProgress, [0.3, 1], [3900, 0]);
  const imageTransform14 = useTransform(scrollYProgress, [0.3, 1], [4900, 0]);
  const imageTransform15 = useTransform(scrollYProgress, [0.3, 1], [4900, 0]);
  const imageTransform16 = useTransform(scrollYProgress, [0.3, 1], [4900, 0]);
  const imageTransformX1 = useTransform(scrollYProgress, [0.5, 1], [0, 900]);
  const imageTransformX2 = useTransform(scrollYProgress, [0.5, 1], [0, -900]);

  const imageScale = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  const images = [
    {
      id: 0,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform,
    },
    {
      id: 1,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform2,
    },
    {
      id: 2,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform3,
    },
    {
      id: 3,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform4,
    },
    {
      id: 4,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform10,
    },
    {
      id: 5,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform9,
    },
    {
      id: 6,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform8,
    },
    {
      id: 7,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform7,
    },
    {
      id: 8,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform6,
    },
    {
      id: 9,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform5,
    },
    {
      id: 10,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform2,
    },
    {
      id: 11,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform3,
    },
    {
      id: 12,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform4,
    },
    {
      id: 13,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform10,
    },
    {
      id: 14,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform9,
    },
    {
      id: 15,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform8,
    },
    {
      id: 16,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform7,
    },
    {
      id: 17,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform6,
    },
    {
      id: 18,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform5,
    },
    {
      id: 19,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform11,
    },
    {
      id: 20,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform12,
    },
    {
      id: 22,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform13,
    },
    {
      id: 23,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform14,
    },
    {
      id: 24,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX2,
      velocity: imageTransform15,
    },
    {
      id: 25,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform16,
    },
    {
      id: 26,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform10,
    },
    {
      id: 27,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform12,
    },
    {
      id: 28,
      src: "./images/flower1.png",
      scale: imageScale,
      transformX: imageTransformX1,
      velocity: imageTransform5,
    },
  ];
  //   useEffect(() => {
  //     // const canvas = canvasRef.current;
  //     // const ctx = canvas.getContext("2d");
  //     // canvas.width = window.innerWidth;
  //     // canvas.height = window.innerHeight;
  //     // const image = new Image();
  //     // image.src = "./images/flower1.png";
  //     // class Particle {
  //     //   constructor(effect) {
  //     //     this.effect = effect;
  //     //     this.radius = Math.floor(Math.random() * 70 + 1);
  //     //     this.x =
  //     //       this.radius + Math.random() * (this.effect.width - this.radius * 2);
  //     //     this.y = -this.radius - Math.random() * this.effect.height * 0.5;
  //     //     this.vx = Math.random() * 1 - 0.5;
  //     //     this.vy = 0;
  //     //     this.gravity = this.radius * 0.001;
  //     //     this.angle = Math.random() * 2 * Math.PI;
  //     //     this.angularVelocity = Math.random() * 0.01 - 0.005;

  //     //     this.friction = 0.95;
  //     //   }
  //     //   draw(context) {
  //     //     context.save();
  //     //     context.translate(this.x, this.y); // Перемещаем начало координат в позицию частицы
  //     //     context.rotate(this.angle); // Поворачиваем на угол
  //     //     context.drawImage(image, this.x, this.y, this.radius, this.radius); // Рисуем изображение
  //     //     context.restore();
  //     //   }
  //     //   update() {
  //     //     this.vy += this.gravity * 3;
  //     //     this.x += this.vx;
  //     //     this.y += this.vy * 0.1;
  //     //     this.angle += this.angularVelocity;
  //     //     if (
  //     //       this.y > this.effect.height + this.radius + this.effect.maxDistance ||
  //     //       this.x < -this.radius - this.effect.maxDistance ||
  //     //       this.x > this.effect.width + this.radius + this.effect.maxDistance
  //     //     ) {
  //     //       this.reset();
  //     //     }
  //     //   }
  //     //   reset() {
  //     //     // context.save();
  //     //     // const opacity = 1 - distance / this.maxDistance;
  //     //     // context.globalAlpha = opacity;
  //     //     // context.beginPath();
  //     //     // context.moveTo(this.particles[a].x, this.particles[a].y);
  //     //     // context.lineTo(this.particles[b].x, this.particles[b].y);
  //     //     // context.stroke();
  //     //     // context.restore();

  //     //     this.x =
  //     //       this.radius + Math.random() * (this.effect.width - this.radius * 2);
  //     //     this.y =
  //     //       -this.radius -
  //     //       this.effect.maxDistance -
  //     //       Math.random() * this.effect.height * 0.5;
  //     //     this.vy = 0;
  //     //   }
  //     // }
  //     // class Effect {
  //     //   constructor(canvas, context) {
  //     //     this.canvas = canvas;
  //     //     this.context = context;
  //     //     this.width = this.canvas.width;
  //     //     this.height = this.canvas.height;
  //     //     this.particles = [];
  //     //     this.numberOfParticles = 100;
  //     //     this.createParticles();

  //     //     this.element = titleRef.current.getBoundingClientRect();

  //     //     window.addEventListener("resize", (e) => {
  //     //       this.resize(e.target.window.innerWidth, e.target.window.innerHeight);
  //     //     });
  //     //   }
  //     //   createParticles() {
  //     //     for (let i = 0; i < this.numberOfParticles; i++) {
  //     //       this.particles.push(new Particle(this));
  //     //     }
  //     //   }
  //     //   handleParticles(context) {
  //     //     this.connectParticles(context);
  //     //     this.particles.forEach((particle) => {
  //     //       // Вычислите текущую высоту частицы относительно нижней границы холста
  //     //       const particleHeight = this.height - particle.y;

  //     //       // Настройте прозрачность в зависимости от высоты
  //     //       const opacity = particleHeight / this.height; // Пример: линейное уменьшение

  //     //       // Примените прозрачность к частице
  //     //       context.save();
  //     //       context.globalAlpha = opacity;
  //     //       particle.draw(context);
  //     //       particle.update();
  //     //       context.restore();
  //     //     });
  //     //   }
  //     //   connectParticles(context) {
  //     //     this.maxDistance = 100;
  //     //     for (let a = 0; a < this.particles.length; a++) {
  //     //       for (let b = a; b < this.particles.length; b++) {
  //     //         const dx = this.particles[a].x - this.particles[b].x;
  //     //         const dy = this.particles[a].y - this.particles[b].y;
  //     //         const distance = Math.hypot(dx, dy);
  //     //         // if (distance < this.maxDistance) {
  //     //         //   context.save();
  //     //         //   const opacity = 1 - distance / this.maxDistance;
  //     //         //   context.globalAlpha = opacity;
  //     //         //   context.beginPath();
  //     //         //   context.moveTo(this.particles[a].x, this.particles[a].y);
  //     //         //   context.lineTo(this.particles[b].x, this.particles[b].y);
  //     //         //   context.stroke();
  //     //         //   context.restore();
  //     //         // }
  //     //       }
  //     //     }
  //     //   }
  //     //   resize(width, height) {
  //     //     this.canvas.width = width;
  //     //     this.canvas.height = height;
  //     //     this.width = width;
  //     //     this.height = height;
  //     //     const gradient = this.context.createLinearGradient(0, 0, width, height);
  //     //     gradient.addColorStop(0, "white");
  //     //     gradient.addColorStop(0.5, "gold");
  //     //     gradient.addColorStop(1, "orangered");
  //     //     this.context.fillStyle = gradient;
  //     //     this.context.strokeStyle = "white";
  //     //     this.particles.forEach((particle) => {
  //     //       particle.reset();
  //     //     });
  //     //   }
  //     // }
  //     // const effect = new Effect(canvas, ctx);
  //     function animateCanvas() {
  //       ctx.clearRect(0, 0, canvas.width, canvas.height);
  //       effect.handleParticles(ctx);
  //       requestAnimationFrame(animateCanvas);
  //     }
  //     // image.onload = function () {};
  //     if (isInView) {
  //       //   animateCanvas();
  //       animate(document.querySelector("body"), {
  //         background: "var(--main-dark)",
  //       });
  //     } else
  //       animate(document.querySelector("body"), {
  //         background: "var(--main-light)",
  //       });
  //   }, [isInView]);
  return (
    <section className={styles.process} ref={container}>
      {" "}
      {images.map((im, i) => (
        <motion.img
          key={im.id}
          src={im.src}
          style={{
            width: "200px",
            height: "200px",
            y: im.velocity,
            x: im.transformX,
            rotate: im.velocity,
            scale: im.scale,
            delay: i,
            opacity: im.scale,
            position: "absolute",
            left: "50vw",
          }}
        />
      ))}
      {/* <canvas ref={canvasRef} className={styles.canvas}></canvas> */}
      <div className={styles.process_inner} ref={scope}>
        <h2 className={styles.process_title} ref={titleRef}>
          <span className={styles.process_title__line}>
            Всё начинается с любви&nbsp;
          </span>
          <span className={styles.process_title__line}>
            к себе, дому и цветам
          </span>
        </h2>

        <span className={styles.process_label}>Философия</span>
        <p className={styles.process_mission}>
          <span>
            Каждый человек по своему уникален, как и каждый момент нашей жиtзни
            не повторим. Понимая эти простые истины мы делаем цветочные букеты,
            которые должны соответствовать случаю и людям, которым они
            предназначены. Ведь для нас это не просто цветы; это симфония
            эмоций, стиля, красок и ароматов, объеденённых в потрясающую
            композицию.
          </span>
          <span>
            Мы тщательно подбираем лучшие сочетания цветов и декора, создавая
            прекрасную цветочную композицию . Каждый наш букет будет адатирован
            под ваши индивидуальные пожелания и предпочтения. Вы гарантировано
            получите не только красивый подарок, но и незабываемые впечатления,
            которые пробудят ваши чувства и наполнят радостью ваш день.
          </span>
        </p>
      </div>
    </section>
  );
}
