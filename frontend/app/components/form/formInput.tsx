import { FormEvent, InputHTMLAttributes, useState } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: any) => void;
  errorMessage?: string;
  label: string;
}

const FormInput = (props: IProps) => {
  const [focused, setFocused] = useState<boolean>(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: FormEvent) => {
    setFocused(true);
  };

  return (
    <div className="form-group">
      <style jsx>{`
        .form-input {
          display: flex;
          flex-direction: column;
          font-size: var(--main-fs);
          font-family: inherit;
          color: inherit;
          background-color: none;
          border: none;
          border-bottom: 1px solid transparent;
          width: 100%;
          display: block;
          transition: all 0.3s;
          padding: 10px 20px;
          margin: 5px 0px;
          border-radius: 5px;
          border: 1px solid gray;
        }

        .form-input:focus {
          outline: none;
        }

        .form-input:focus:invalid {
        }

        .form-input::-webkit-input-placeholder {
        }
        input:invalid[data-focused="true"] {
          border: 1px solid red;
        }

        input:invalid[data-focused="true"] ~ .input-error {
          display: block;
        }

        .input-label {
          margin-top: 5px;
          display: block;
          transition: all 0.3s;
          padding-left: 20px;
          font-size: 16px;
          color: gray;
        }
        .form-input:placeholder-shown + .input-label {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-2rem);
        }
        .input-error {
          font-size: 14px;
          padding: 3px;
          padding-left: 20px;
          color: var(--main-red);
          display: none;
        }
      `}</style>

      <input
        className="form-input"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused.toString()}
      />
      <label className="input-label">{label}</label>
      <span className="input-error">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
