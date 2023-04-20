"use client";
import { useAppContext } from "@/app/context/app.context";
import { useRouter } from "next/navigation";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function WithCartItems({ children }: Props): any {
  const { cartItems } = useAppContext();
  const router = useRouter();

  if (cartItems.length <= 0) {
    return router.push("/");
  }
  return children;
}
