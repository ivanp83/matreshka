"use client";
import React from "react";
import Button from "../buttons/button";
import { useAppContext } from "@/app/context/app.context";

export default function Btns({ data }) {
  const { onIncrement, onDecrement } = useAppContext();

  const handleIncrement = (product) => {
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
          grid-auto-flow: row;
          grid-gap: 10px;
        }
      `}</style>
      <Button
        actionType="add"
        title="+"
        onClick={() => handleIncrement(data)}
      />
      <Button
        actionType="remove"
        title="-"
        onClick={() => handleDecrement(data)}
      />
    </div>
  );
}
