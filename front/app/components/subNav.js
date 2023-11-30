"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

import { usePathname } from "next/navigation";

function SubNav({ categories, product }) {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const route = usePathname();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  return (
    <header className="sub-nav">
      <style jsx>{`
        .sub-nav {
          position: sticky;
          top: var(--space-med);
          grid-column: 1/2;
          display: grid;
          grid-gap: var(--space-small);
        }
        .cat-nav {
          display: ${route.includes("product") ? "none" : "block"};
        }
        .nav ol {
          display: flex;

          width: fit-content;
          align-items: baseline;
        }
        .nav ol li {
          display: grid;
          grid-auto-flow: column;
          align-items: end;
          font-size: 14px;
          color: var(--main-gray);
          display: flex;
          align-items: center;
          line-height: 1;
          width: max-content;
          margin-right: 10px;
        }

        .categories-list {
          display: grid;
          grid-gap: 10px;
        }
        .list-item {
          width: fit-content;
          display: grid;
          place-content: center;
        }

        .sub-nav-link {
          border: none;
          border-bottom: 1px solid transparent;
          outline: none;
          background: transparent;

          font-weight: 600;
          color: inherit;
        }
        .sub-nav-link.active {
          color: var(--main-gray);
        }
        .select {
          display: none;
        }
        @media all and (max-width: 1024px) and (orientation: portrait) {
          .sub-nav {
            grid-column: 1/4;
            background: var(--main-light);
            z-index: 10;
            padding: 20px 0;
            top: 3rem;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
            align-items: center;
          }
          .categories-list {
            display: none;
          }
          .select {
            display: block;
            grid-column: 3/4;
            color: var(--main-gray);
            border: 1px solid var(--main-gray);
            border-radius: 2px;
            box-shadow: none;
            color: var(--main-gray);
            font-size: 14px;
            margin: 0;
            overflow: hidden;
            padding-top: 2px;
            padding-bottom: 2px;
            text-overflow: ellipsis;
            white-space: nowrap;
            border: 1px solid var(--main-gray);
            background: var(--main-light);
            border-radius: 5px;
            outline: none !important;
            outline: 0px;
          }
        }

        @media all and (max-width: 600px) and (orientation: portrait) {
          .select {
            grid-column: 2/4;
          }
        }
        @media all and (max-width: 1022px) and (orientation: landscape) {
          .sub-nav {
            grid-gap: 1rem;
          }
          .list-item button {
            border: none;
            font-size: 16px;
            padding: 0;
          }
        }
      `}</style>
      <nav aria-label="Дополнительная навигация по товарам" className="nav">
        <ol>
          <li>
            <Link href="/">
              <span className="sub-nav-link"> Главная</span>
            </Link>
          </li>
          {route.includes("product") && (
            <li className={`list-item list-item--sub`}>
              <Link
                href={{
                  pathname: "/categories",
                  query: { id: 0 },
                }}
              >
                <span className={`${id == 0 ? "active" : ""} sub-nav-link`}>
                  Все категории
                </span>
              </Link>
            </li>
          )}

          <li>
            <span className="sub-nav-link">{product}</span>
          </li>
        </ol>
      </nav>

      <nav className="cat-nav" aria-label="Основная навигация по категориям">
        <ol className="categories-list">
          <li className={`list-item `}>
            <Link
              href={{
                pathname: `categories`,
                query: { id: 0 },
              }}
            >
              <span className={`${id == 0 ? "active" : ""} sub-nav-link`}>
                Все категории
              </span>
            </Link>
          </li>
          {categories?.map((cat) => (
            <li key={cat.id} className={`list-item`}>
              <Link
                href={{
                  pathname: `categories`,
                  query: { id: cat.id },
                }}
              >
                <span
                  className={`${id == cat.id ? "active" : ""} sub-nav-link`}
                >
                  {cat.name}
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <label
          htmlFor="category-select"
          style={{ opacity: 0, fontSize: "1px", position: "absolute" }}
        >
          Выбрать категорию
        </label>

        <select
          defaultValue={id}
          name="categories-list"
          className="select"
          id="category-select"
          onChange={(e) =>
            router.push(
              "categories" + "?" + createQueryString("id", e.target.value)
            )
          }
        >
          <option value={0}>Все категории</option>
          {categories?.map((cat) => (
            <option value={cat.id} key={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
export default React.memo(SubNav);
