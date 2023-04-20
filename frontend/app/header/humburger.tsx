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
            position: absolute;
            right: 0;
            top: 3px;
          }
        } ;
      `}</style>

      {!menuIsOpen ? (
        <AiOutlineMenu
          style={{ width: "27px", height: "27px", fill: "var(--main-dark)" }}
        />
      ) : (
        <GrClose
          style={{ width: "27px", height: "27px", fill: "var(--main-dark)" }}
        />
      )}
    </button>
  );
}
