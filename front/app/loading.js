"use-client";
import Image from "next/image";
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
        className="circele"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          display: "grid",
          placeContent: "center",
        }}
      >
        <Image
          width={80}
          height={80}
          alt="Анимированный цветок"
          src="/images/plant.gif"
        />
        <span className="lds-ellipsis">Загружаю....</span>
      </div>
    </div>
  );
}
