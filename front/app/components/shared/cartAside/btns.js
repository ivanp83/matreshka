"use client";
import React from "react";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";

export default function Btns({ data }) {
  const { onIncrement, onDecrement } = useAppContext();

  const handleIncrement = (product) => {
    console.log(product);
    onIncrement(product);
  };
  const handleDecrement = (product) => {
    onDecrement(product);
  };
  return (
    <div className="btns">
      <style jsx>{`
        .btns {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 10px;
          width: fit-content;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}
