import { useAppContext } from "@/app/context/app.context";
import React from "react";

export default function Value({ product, value, min }) {
  const { onIncrement, onDecrement } = useAppContext();
  return (
    <>
      <div className="number">
        <style jsx>{`
          .number {
            display: inline-block;
            position: relative;
            width: 84px;
          }
          .number input[type="number"] {
            display: block;
            height: 24px;
            line-height: 24px;
            width: 100%;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            text-align: center;
            -moz-appearance: textfield;
            -webkit-appearance: textfield;
            appearance: textfield;
          }
          .number input[type="number"]::-webkit-outer-spin-button,
          .number input[type="number"]::-webkit-inner-spin-button {
            display: none;
          }
          .number-minus {
            position: absolute;
            top: 1px;
            left: 1px;
            bottom: 1px;
            width: 20px;
            padding: 0;
            display: block;
            text-align: center;
            border: none;
            border-right: 1px solid #ddd;
            font-size: 16px;
            font-weight: 600;
          }
          .number-plus {
            position: absolute;
            top: 1px;
            right: 1px;
            bottom: 1px;
            width: 20px;
            padding: 0;
            display: block;
            text-align: center;
            border: none;
            border-left: 1px solid #ddd;
            font-size: 16px;
            font-weight: 600;
          }
        `}</style>
        <button
          className="number-minus"
          type="button"
          onClick={() => onDecrement(product)}
        >
          -
        </button>
        <input type="number" min={min} value={value} readonly />
        <button
          className="number-plus"
          type="button"
          onClick={() => onIncrement(product)}
        >
          +
        </button>
      </div>
    </>
  );
}