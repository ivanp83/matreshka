import React, { useEffect, useRef } from "react";
// import image from "@/public/images/lora.jpg";
export default function CanvasBanner(props) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const contex = canvas.getContext("2d");
    let cnsWidth = window.innerWidth;
    let cnsHeight = window.innerHeight;
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
      var i = numberFlakes;

      while (i--) {
        let x = spaceBetween(0, cnsWidth, true);
        let y = spaceBetween(0, cnsHeight, true);

        let flake = new Flake(x, y);
        flakes.push(flake);
      }

      scaleCanvas();
      loop();
    }

    function scaleCanvas() {
      canvas.width = cnsWidth;
      canvas.height = cnsHeight;
    }

    function loop() {
      var i = flakes.length;
      //   contex.drawImage(image, 100, 100, cnsWidth, cnsWidth);
      contex.save();
      contex.setTransform(1, 0, 0, 1, 0, 0);
      contex.clearRect(0, 0, cnsWidth, cnsWidth);
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

        if (flakeFront.y >= cnsHeight) {
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

    init();
  }, []);

  return <canvas ref={ref}></canvas>;
}
