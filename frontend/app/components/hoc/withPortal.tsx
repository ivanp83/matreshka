"use client";
import { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";

const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? ReactDOM.createPortal(
        children,
        document?.getElementById("portal") as Element
      )
    : null;
};

export default Portal;
