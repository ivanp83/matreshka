import React, { useEffect, useRef } from "react";
import { useAppContext } from "../context/app.context";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

export default function Humburger() {
  const { menuIsOpen, setMenuIsOpen } = useAppContext();

  return (
    <button className="humburger" onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <style jsx>{`
        .humburger {
          border: none;
          outline: none;
          background: transparent;
          width: fit-content;
          height: fit-content;
          grid-column: 3/4;
          grid-row: 1;
          justify-self: end;
          display: none;
        }
        @media all and (max-width: 700px) and (orientation: portrait) {
          .humburger {
            display: inline-flex;
          }
        }
      `}</style>

      {!menuIsOpen ? (
        <svg
          fill="var(--main-dark)"
          width="28px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z"
            fill-rule="evenodd"
          />
        </svg>
      ) : (
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 1024 1024"
          fill="var(--main-dark)"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M176.662 817.173c-8.19 8.471-7.96 21.977 0.51 30.165 8.472 8.19 21.978 7.96 30.166-0.51l618.667-640c8.189-8.472 7.96-21.978-0.511-30.166-8.471-8.19-21.977-7.96-30.166 0.51l-618.666 640z"
            fill=""
          />
          <path
            d="M795.328 846.827c8.19 8.471 21.695 8.7 30.166 0.511 8.471-8.188 8.7-21.694 0.511-30.165l-618.667-640c-8.188-8.471-21.694-8.7-30.165-0.511-8.471 8.188-8.7 21.694-0.511 30.165l618.666 640z"
            fill=""
          />
        </svg>
      )}
    </button>
  );
}
