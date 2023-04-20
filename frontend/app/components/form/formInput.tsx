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
          font-size: 1rem;
          font-family: inherit;
          color: inherit;
          border-radius: 10px;
          background-color: none;
          border: none;
          border-bottom: 1px solid transparent;
          width: 100%;
          display: block;
          transition: all 0.3s;
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
        .form-input {
          padding: 1rem;
          margin: 5px 0px;
          border-radius: 5px;
          border: 1px solid gray;
        }
        .input-label {
          margin-top: 5px;
          display: block;
          transition: all 0.3s;
          padding-left: 1rem;
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
          padding-left: 15px;
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
{
  /* <div class="form__group">
<input type="text" class="form__input" placeholder="Full name" id="name" required>
<label for="name" class="form__label">Full name</label>
</div> */
}
