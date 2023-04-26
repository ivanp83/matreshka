"use client";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { useAppContext } from "../context/app.context";
import Humburger from "./humburger";
import { FaShoppingBag } from "react-icons/fa";
import Nav from "./nav";

export default function Header() {
  const { cartItems, setMenuIsOpen } = useAppContext();
  const sum = () =>
    cartItems.reduce((partialSum, a) => partialSum + a.quantity, 0);

  return (
    <header>
      <style jsx>{`
        header {
          padding: 20px;
          display: grid;
          position: fixed;
          z-index: 100;
          left: 0;
          top: 0;
          width: 100vw;
          grid-template-columns: 1fr 1fr 1fr;
          align-items: end;
          background: var(--main-light);
        }
        .logo {
          grid-column: 1/2;
          width: 30px;
          grid-row: 1;
          line-height: 1;
        }
        .cart-icon {
          grid-column: 3/4;
          grid-row: 1;
          width: fit-content;
          position: relative;
          justify-self: end;
          display: flex;
          align-items: flex-start;
        }
        .num {
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--main-light);
        }
        .num span {
          font-size: 16px;
        }
        a {
          display: contents;
        }
        @media all and (max-width: 700px) and (orientation: portrait) {
          .cart-icon {
            margin-right: 3rem;
          }
        }
      `}</style>
      <div className="logo" onClick={() => setMenuIsOpen(false)}>
        <Logo />
      </div>
      <Nav />
      <Humburger />

      <div className="cart-icon">
        <Link href="/cart">
          <FaShoppingBag style={{ width: "26px", height: "26px" }} />
          <div className="num">
            <span>{sum()}</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
