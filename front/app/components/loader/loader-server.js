"use-client";
import React from "react";
import "./loader.css";
export default function LoaderServer(props) {
  return (
    <div className="loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
