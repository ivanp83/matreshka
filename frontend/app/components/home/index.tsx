"use client";
import React, { useEffect, useRef, useState, WheelEvent } from "react";
import dynamic from "next/dynamic";
import { Category } from "@/types";
import useWindowSize from "@/app/hooks/useWindowSize";
import useMediaQuery from "@/app/hooks/useMediaQuery";
const Loader = dynamic(() => import("../loader"), { ssr: false });
const GalleryMobile = dynamic(() => import("./galleryMobile"), {
  loading: () => <Loader />,
});
const Gallery = dynamic(() => import("./gallery"), {
  loading: () => <Loader />,
});

type Props = { data: Array<Category> };
export type State = { radius: number; tmpTheta: number; theta: number };

export default function Index({ data }: Props) {
  const wheel = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState<State>({
    radius: 400,
    tmpTheta: 0,
    theta: 0,
  });
  const { isMobile } = useWindowSize();
  const msdSizeScreen = useMediaQuery(
    "(max-width: 1250px) and (orientation: landscape)"
  );
  const handleScroll = (e: WheelEvent) => {
    if (isMobile) return;
    let scrollSpeed = (e.deltaY / 360) * 10;
    if (wheel.current) {
      setState({ ...state, theta: (state.theta += scrollSpeed) });
      wheel.current.style.transitionDelay = "0s";
      wheel.current.style.transform = `translate(-50%, -50%) rotate(${state.theta}deg)`;

      for (let i = 0; i < wheel.current.children.length; i++) {
        const element = wheel.current.children[i] as HTMLDivElement;
        element.style.transform = `rotate(${-1 * state.theta}deg)`;
        element.style.transitionDuration = "0s";
        element.style.transitionDelay = "0s";
      }
    }
  };

  useEffect(() => {
    function handleResize() {
      setState({ ...state, radius: !msdSizeScreen ? 400 : 300 });
    }

    if (msdSizeScreen) handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [msdSizeScreen]);
  return (
    <article onWheel={handleScroll}>
      <style jsx>{`
        article {
          width: 100vw;
          height: 100%;
          overflow: hidden;
          margin-top: var(--space-med);
          padding: 0 20px;
          display: grid;
          grid-gap: 2rem;
        }
        h1 {
          position: relative;
          z-index: 10;
          left: 50%;
          width: 900px;
          transform: translateX(-50%);
          text-align: center;
          margin-top: var(--space-small);
        }
        h1 span:not(:last-of-type) {
          display: block;
        }
        h1 .red {
          color: var(--main-red);
        }

        @media all and (orientation: portrait) {
          h1 {
            position: relative;
            width: 90%;
          }
        }
        @media all and (max-width: 760px) and (orientation: portrait) {
          h1 {
            font-size: 30px;
          }
        }
        @media all and (max-width: 960px) and (orientation: landscape) {
          h1 {
            width: 80%;
            font-size: 6vw;
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

      <h1>
        <span>
          Все начинается с любви к себе, дому и
          <span className="red">&nbsp;цветам</span>
        </span>
      </h1>

      {isMobile ? (
        <GalleryMobile data={data} />
      ) : (
        <Gallery {...{ data, state, setState }} />
      )}
    </article>
  );
}
