import Link from "next/link";

import React, { useEffect, useRef } from "react";

import styles from "@/app/styles/header.module.scss";
import { useAppContext } from "@/app/context/app.context";

export default function CartIcon(props) {
  const cartIconRef = useRef(null);
  const { cartItems, setCartPosition } = useAppContext();
  const sum = () =>
    cartItems.reduce((partialSum, a) => partialSum + a.quantity, 0);

  const calcPosition = () => {
    if (cartIconRef.current) {
      const posEl = cartIconRef.current.getBoundingClientRect();

      setCartPosition({
        x: posEl.left,
        y: posEl.top - posEl.height / 2,
      });
    }
  };
  useEffect(() => {
    calcPosition();
    window.addEventListener("resize", calcPosition);
    return () => window.removeEventListener("resize", calcPosition);
  }, []);

  return (
    <>
      <div className={styles.cart} ref={cartIconRef}>
        <Link href="/cart">
          <svg
            width="22"
            viewBox="0 0 83 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M76.1 24.4004H59.8V28.4004H72.5L78.4 84.2004H4.4L10.3 28.4004H23V24.4004H6.7L0 88.2004H82.8L76.1 24.4004Z"
              fill="black"
            />
            <path d="M51.9 24.4004H31V28.4004H51.9V24.4004Z" fill="black" />
            <path
              d="M29 16.4C29 9.6 34.5 4 41.4 4C48.3 4 53.8 9.6 53.8 16.4V35H57.8V16.4C57.8 7.4 50.5 0 41.4 0C32.3 0 25 7.4 25 16.4V35H29V16.4Z"
              fill="black"
            />
          </svg>

          {/* <svg
            fill="var(--main-dark)"
            width="28px"
            height="28px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M28 9.25h-5.25v-1.117c0.004-0.087 0.006-0.189 0.006-0.292 0-3.643-2.953-6.596-6.596-6.596-0.082 0-0.164 0.002-0.246 0.004l0.012-0c-0.035-0.001-0.076-0.001-0.117-0.001-3.627 0-6.568 2.941-6.568 6.568 0 0.114 0.003 0.226 0.009 0.338l-0.001-0.016v1.111h-5.25c-1.518 0.002-2.748 1.232-2.75 2.75v14c0.003 2.622 2.128 4.747 4.75 4.75h20c2.622-0.003 4.747-2.128 4.75-4.75v-14c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM10.75 8.133c-0.007-0.096-0.010-0.208-0.010-0.322 0-2.797 2.267-5.064 5.064-5.064 0.047 0 0.095 0.001 0.142 0.002l-0.007-0c0.066-0.003 0.143-0.005 0.22-0.005 2.816 0 5.1 2.283 5.1 5.1 0 0.104-0.003 0.207-0.009 0.309l0.001-0.014v1.111h-10.5zM29.25 26c-0.001 1.794-1.456 3.249-3.25 3.25h-20c-1.794-0.002-3.248-1.456-3.25-3.25v-14c0.001-0.69 0.56-1.249 1.25-1.25h5.25v6.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-6.25h10.5v6.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-6.25h5.25c0.69 0.001 1.249 0.56 1.25 1.25v0z"></path>
          </svg> */}

          <span className={styles.num}>{sum()}</span>
        </Link>
      </div>
    </>
  );
}