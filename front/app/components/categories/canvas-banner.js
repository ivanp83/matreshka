import React, { useEffect, useRef } from "react";

export default function CanvasBanner(props) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const contex = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight * 0.15;
    // const image = new Image(); // Create new image element
    // image.src = "https://scientificrussia.ru/images/b/teb-full.jpg";
    // image.addEventListener(
    //   "load",
    //   () => {
    //     contex.drawImage(image, 0, 0, canvasWidth, canvasHeight);
    //   },
    //   false
    // );

    // Загружаем файл изображения

    let numberFlakes = 250;
    let flakes = [];

    function Flake(x, y) {
      var topSize = 4.5,
        topMotion = 2.5;

      this.x = x;
      this.y = y;
      this.spacing = spaceBetween(0, 0.8);
      this.distance = spaceBetween(0, Math.PI);
      this.weight = spaceBetween(2, topSize);
      this.scale = this.weight / topSize;
      this.motion = (this.weight / topSize) * topMotion;

      this.update = function () {
        this.x += Math.cos(this.distance) * this.spacing;
        this.y += this.motion;
      };
    }

    function init() {
      let i = numberFlakes;

      while (i--) {
        let x = spaceBetween(0, canvasWidth, true);
        let y = spaceBetween(0, canvasHeight, true);

        let flake = new Flake(x, y);
        flakes.push(flake);
      }

      scaleCanvas();
      loop();
    }

    function scaleCanvas() {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    function loop() {
      var i = flakes.length;

      contex.save();
      contex.setTransform(1, 0, 0, 1, 0, 0);
      contex.clearRect(0, 0, canvasWidth, canvasWidth);
      contex.restore();

      while (i--) {
        let flakeFront = flakes[i];
        flakeFront.update();
        contex.beginPath();
        contex.arc(
          flakeFront.x,
          flakeFront.y,
          flakeFront.weight,
          0,
          2 * Math.PI,
          false
        );
        contex.fillStyle = "#FFFFFF";
        +flakeFront.scale + ")";
        contex.fill();

        if (flakeFront.y >= canvasHeight) {
          flakeFront.y = -flakeFront.weight;
        }
      }
      requestAnimationFrame(loop);
    }

    function spaceBetween(min, max, round) {
      var number = Math.random() * (max - min + 1) + min;

      if (round) {
        return Math.floor(number);
      } else {
        return number;
      }
    }
    function resize() {
      let canvasWidth = window.innerWidth;
      let canvasHeight = window.innerHeight * 0.15;
    }
    window.addEventListener("resize", resize);
    init();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas style={{ position: "absolute" }} ref={ref}></canvas>;
}
