import React, { useEffect, useRef, useState } from "react";
import Card from "./card";
import { Category } from "@/types";
import { State } from "./index";

type Props = {
  data: Array<Category>;
  state: State;
  setState: any;
};

export default function Gallery({ data, state, setState }: Props) {
  const wheel = useRef<HTMLDivElement | null>(null);

  const [centerOfTheWheel, setCenterOfTheWheele] = useState({ x: 0, y: 0 });
  const [indicator, setIndicator] = useState(true);

  useEffect(() => {
    setCenterOfTheWheele({
      x: 0,
      y: 0,
    });
  }, []);
  useEffect(() => {
    let handle: ReturnType<typeof setTimeout> | null = null;
    const onScroll = function () {
      setIndicator(false);
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(() => setIndicator(true), 5000);
    };
    window.addEventListener("wheel", onScroll);

    return function () {
      window.removeEventListener("wheel", onScroll);
    };
  }, []);
  const handleScroll = (e: any) => {
    let scrollSpeed = (e.deltaY / 360) * 7;
    setState({ ...state, tmpTheta: (state.tmpTheta += scrollSpeed) });
    if (wheel.current) {
      wheel.current.style.transitionDelay = `0s`;
      wheel.current.style.transitionDuration = `0s`;
      wheel.current.style.transform = `translate(-50%, -50%) rotate(${state.tmpTheta}deg)`;

      for (let i = 0; i < wheel.current.children.length; i++) {
        const element = wheel.current.children[i] as HTMLDivElement;
        element.style.transitionDelay = `0s`;
        element.style.transitionDuration = `0s`;
        element.style.transform = `rotate(${-1 * state.tmpTheta}deg)`;
      }
    }
  };
  return (
    <>
      <style jsx>{`
        .mouse {
          opacity: ${indicator ? 1 : 0};
          transition: opacity 1s;
          width: 28px;
          height: 48px;
          border-radius: 11px 11px 15px 15px;
          border: 2px solid var(--main-dark);
          position: absolute;
          left: 50%;
          z-index: 10;
          bottom: 2rem;
        }

        .mouse span {
          display: block;
          margin: 6px auto;
          width: 4px;
          height: 8px;
          border-radius: 4px;
          background: var(--main-red);
          border: 1px solid transparent;
          animation-duration: 1s;
          animation-fill-mode: both;
          animation-iteration-count: infinite;
          animation-name: scroll;
        }
        .wheel {
          width: 400px;
          height: 400px;
          position: fixed;
          transform: translate(-50%, -50%);
          top: 100%;
          left: 50%;
        }

        @media all and (max-width: 1250px) and (orientation: landscape) {
          .wheel {
            width: 300px;
            height: 300px;
          }
        }
        @media all and (orientation: portrait) {
          h1 {
            position: relative;
            width: 80%;
            font-size: 8vw;
          }
        }

        @keyframes scroll {
          0% {
            opacity: 1;

            transform: translateY(0);
          }
          100% {
            opacity: 0;

            transform: translateY(20px);
          }
        }
      `}</style>
      <div className="mouse">
        <span></span>
      </div>
      <section className="wheel" ref={wheel} onWheel={handleScroll}>
        {data.map((item, i) => (
          <Card
            data={item}
            key={item.id}
            theta={((2 * Math.PI) / data.length) * i}
            radius={state.radius}
            center={centerOfTheWheel}
            index={i}
          />
        ))}
      </section>
    </>
  );
}
