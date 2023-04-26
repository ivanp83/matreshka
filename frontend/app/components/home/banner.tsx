import React, { useEffect, useState } from "react";
import Logo from "../shared/matrehska";

export default function Banner() {
  const [state, setState] = useState(true);
  const handleScroll = () => {
    if (window.pageYOffset >= window.innerHeight) {
      setState(false);
    } else {
      setState(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="banner">
      <style jsx>{`
        .banner {
          width: 100%;
          height: 97vh;
          position: fixed;
          top: 0;
          left: 0;
          padding: 0 30px;
          display: grid;
          place-content: center;
          opacity: ${state ? 1 : 0};
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
