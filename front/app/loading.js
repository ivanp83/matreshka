"use-client";
import React from "react";

export default function Loading(props) {
  return (
    <div
      className="loader"
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        background: "var(--main-light)",
      }}
    >
      <span className="lds-ellipsis">Загружаю....</span>
    </div>
  );
}
