import { useState } from "react";

const FormTextArea = ({ onChange, label }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="form-group">
      <style jsx>{`
        .textarea {
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

        .textarea:focus {
          outline: none;
        }

        .textarea:focus:invalid {
        }

        .textarea::-webkit-input-placeholder {
        }
        input:invalid[data-focused="true"] {
          border: 1px solid red;
        }

        input:invalid[data-focused="true"] ~ .error {
          display: block;
        }

        .label {
          margin-top: 5px;
          display: block;
          transition: all 0.3s;
          padding-left: 20px;
          font-size: 16px;
          color: gray;
        }
        .textarea:placeholder-shown + .label {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-2rem);
        }
        .error {
          font-size: 14px;
          padding: 3px;
          padding-left: 20px;
          color: var(--main-red);
          display: none;
        }
      `}</style>

      <textarea
        name="message"
        rows={10}
        className="textarea"
        onChange={onChange}
        onBlur={handleFocus}
        data-focused={focused.toString()}
        placeholder={label}
      />

      {/* <span className="input-error">{errorMessage}</span> */}
    </div>
  );
};

export default FormTextArea;
