import React from "react";
import Logo from "../shared/matrehska";

export default function Banner() {
  return (
    <section className="banner">
      <style jsx>{`
        .banner {
          width: 100%;
          height: 97vh;
          padding: 0 30px;
          display: grid;
          place-content: center;
        }
        .matryoshka {
          width: 95vw;
        }
      `}</style>
      <div className="matryoshka">
        <Logo />
      </div>
    </section>
  );
}
