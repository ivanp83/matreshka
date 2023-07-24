"use client";
import "./checkbox.css";

const Index = ({ withShipping, title, handleChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleChange} checked={withShipping} />
        <span></span>
        {title}
      </label>
    </div>
  );
};

export default Index;
