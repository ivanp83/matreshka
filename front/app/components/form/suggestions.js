import React, { useRef, useState } from "react";
const cities = [
  { city: "Багратионовск", cost: 2000 },
  { city: "Балтийск", cost: 3000 },
  { city: "Гвардейск", cost: 1400 },
  { city: "Гурьевск", cost: 4000 },
  { city: "Гусев", cost: 4000 },
  { city: "Зеленоградск", cost: 1000 },
  { city: "Калининград", cost: 2000 },
  { city: "Краснознаменск", cost: 2000 },
  { city: "Ладушкин", cost: 2000 },
  { city: "Мамоново", cost: 2000 },
  { city: "Неман", cost: 2000 },

  // "Нестеров",
  // "Озёрск",
  // "Пионерский",
  // "Полесск",
  // "Правдинск",
  // "Приморск",
  // "Светлогорск",
  // "Светлый",
  // "Славск",

  // "Советск",
  // "Черняховск",
];
export default function Suggestions(props) {
  const {
    label,
    errorMessage,
    onChange,
    onBlur,
    setSuggest,
    id,
    cb,
    suggest,
    ...inputProps
  } = props;
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  console.log({ focused });
  function hand(e) {
    ymaps.suggest(e.target.value).then(function (items) {
      // items - массив поисковых подсказок.
      items.forEach((suggestion) => {
        setSuggest([...suggest, suggestion.value]);
      });
    });
  }
  const handleFocus = (e) => {
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
          padding: 1rem 2rem;
          margin: 1rem 0 0;
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
        data-focused={focused.toString()}
        ref={inputRef}
        onChange={hand}
        list="locations"
        onBlur={(e) => {
          onBlur(e);
          handleFocus(e);
        }}
      />
      <datalist id="locations">
        {suggest.map((s, i) => (
          <option key={i} value={s}>
            {s}
          </option>
        ))}
      </datalist>
      <label className="input-label">{label}</label>
      <span className="input-error">{errorMessage}</span>
    </div>
  );
}
