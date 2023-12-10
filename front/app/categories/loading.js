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
      <div
        className="circle"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          display: "grid",
          placeContent: "center",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            backgroundSize: "cover",
            backgroundImage: "url(/images/plant.gif)",
          }}
        />
        <span className="lds-ellipsis">загружаю....</span>
      </div>
    </div>
  );
}
