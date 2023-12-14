import "./Input.css";
interface Props {
  handleChange: any;
  value: number;
  min: number;
}

export default function InputValue({ handleChange, value, min }: Props) {
  return (
    <>
      <label className="number">
        Мин кол-во.
        <input
          type="number"
          name="minValue"
          min={min}
          defaultValue={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
