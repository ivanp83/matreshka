"use client";
import "./checkbox.css";
type Props = {
  title: string;
  withShipping: boolean;
  handleChange: () => void;
};
const Index = ({ withShipping, title, handleChange }: Props) => {
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
