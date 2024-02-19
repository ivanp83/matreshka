import { useEffect, useState, useRef } from "react";

export default function Tab({ data }) {
  const iconRef = useRef(null);
  const [state, setState] = useState(false);
  useEffect(() => {
    if (state) {
      iconRef.current.classList.add("active");
    } else {
      iconRef.current.classList.remove("active");
    }
  }, [state]);
  return (
    <>
      <style jsx>{`
        .tab {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .expander {
          display: grid;
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: grid-template-rows 0.5s;
          color: var(--light-gray);
          border-bottom: 1px solid var(--light-gray);
          padding-bottom: 1rem;
        }
        dt {
          font-weight: 400;
          cursor: pointer;
          width: 100%;
          display: flex;
          justify-items: end;
          align-items: center;
          justify-content: space-between;
          position: relative;
          margin-top: 1rem;
        }
        dt p {
          max-width: 90%;
          font-size: 26px;
          display: flex;
        }
        .num {
          display: inline-flex;
          margin-right: 10px;
          line-height: 1.7;
          font-size: 12px;
          color: var(--main-dark);
          font-weight: 400;
        }
        .expander-content {
          grid-template-rows: 0fr;
          overflow: hidden;
          transition: grid-template-rows 0.5s;
          min-height: 0;
          transition: opacity 0.5s;
          opacity: 0;
          padding-left: 32px;
        }

        .total-days {
          justify-self: end;
        }

        .expander.expanded {
          grid-template-rows: 1fr;
        }
        .expander.expanded .expander-content {
          opacity: 1;
        }
        .par {
          opacity: 0;
          display: grid;
          grid-gap: var(--space-small);
          grid-gap: 1rem;
        }
        .expander.expanded .par {
          opacity: 1;
        }
        .icon {
          width: 16px;
          height: 16px;
          position: absolute;
          right: 0;
          margin-left: auto;
          cursor: pointer;
          border: 0;
          outline: 0;
          padding: 0;
        }
        .plus,
        .minus {
          display: inline-block;

          text-align: center;
          box-sizing: border-box;
          transition: 0.5s all ease-out;
        }
        .plus {
          opacity: 1;
          transform: rotate(0deg);
        }
        .plus.active {
          opacity: 0;
          transform: rotate(90deg);
        }
        .minus {
          opacity: 0;
          transform: rotate(-90deg);
        }
        .plus.active .minus {
          opacity: 1;
          transform: rotate(0deg);
        }
      `}</style>

      <dt onClick={() => setState(!state)}>
        <p>
          <span className="num">0{data.id + 1}&nbsp;/</span>
          {data.title}
        </p>

        <svg
          ref={iconRef}
          className="plus icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19"
            stroke="var(--main-dark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 5L12 19"
            stroke="var(--main-dark)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="minus icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />

          <g>
            <g>
              <line
                fill="none"
                stroke="var(--main-dark)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="4"
                x2="20"
                y1="12"
                y2="12"
              />
            </g>
          </g>
        </svg>
      </dt>

      <dd className={`expander  ${state ? "expanded" : ""}`}>
        <p className="expander-content">{data.text}</p>
      </dd>
    </>
  );
}
