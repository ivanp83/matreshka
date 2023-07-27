import "./button.css";

const Button = ({ actionType, title, disable, onClick, children }) => {
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
      <span className="btn-text">{title}</span>
      {children}
    </button>
  );
};

export default Button;
