import { useState } from "react";
import styles from "@/app/shipping/styles.module.scss";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, cb, suggest, ...inputProps } =
    props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    // <div className="form-group">
    //   <style jsx>{`
    //     .form-input {
    //       display: flex;
    //       flex-direction: column;
    //       font-size: var(--main-fs);
    //       font-family: inherit;
    //       color: inherit;
    //       background-color: none;
    //       border: none;
    //       border-bottom: 1px solid transparent;
    //       width: 100%;
    //       display: block;
    //       transition: all 0.3s;
    //       padding: 1rem 2rem;
    //       margin: 1rem 0 0;
    //       border-radius: 5px;
    //       border: 1px solid gray;
    //     }

    //     .form-input:focus {
    //       outline: none;
    //     }

    //     .form-input:focus:invalid {
    //     }

    //     .form-input::-webkit-input-placeholder {
    //     }
    //     input:invalid[data-focused="true"] {
    //       border: 1px solid red;
    //     }

    //     input:invalid[data-focused="true"] ~ .input-error {
    //       display: block;
    //     }

    //     .input-label {
    //       display: block;
    //       transition: all 0.3s;
    //       padding-left: 20px;
    //       font-size: 16px;
    //       color: gray;
    //     }
    //     .form-input:placeholder-shown + .input-label {
    //       opacity: 0;
    //       visibility: hidden;
    //       transform: translateY(-2rem);
    //     }
    //     .input-error {
    //       font-size: 14px;
    //       padding: 3px;
    //       padding-left: 20px;
    //       color: var(--main-red);
    //       display: none;
    //     }
    //   `}</style>

    //   <input
    //     className="form-input"
    //     {...inputProps}
    //     onChange={onChange}
    //     onBlur={handleFocus}
    //     data-focused={focused.toString()}
    //     id={id}
    //   />
    //   <label className="input-label">{label}</label>

    //   <span className="input-error">{errorMessage}</span>
    // </div>
    <div className={styles.form_group}>
      <input
        className={`${styles.form_input} ${styles.input}`}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused.toString()}
        id={id}
      />
      <label className={styles.label}>{label}</label>

      <span className={styles.input_error}>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
