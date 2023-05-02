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
          font-size: 18px;
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
          border-radius: 10px;
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
        @media all and (max-width: 760px) and (orientation: portrait) {
          .form-input {
            font-size: 16px;
          }
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
