import { FC } from "react";
import "./button.css";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  actionType: "add" | "remove" | "shop" | "checkout" | "back" | "proceed";
  title?: string;
  disable?: boolean;
}

const Button: FC<ButtonProps> = ({
  actionType,
  title,
  disable,
  onClick,
  children,
}) => {
  return (
    <button
      className={`button ${
        (actionType === "add" && "add") ||
        (actionType === "remove" && "remove") ||
        (actionType === "shop" && "shop") ||
        (actionType === "proceed" && "proceed") ||
        (actionType === "checkout" && "checkout") ||
        (actionType === "back" && "back")
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
