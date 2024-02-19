"use client";

import Link from "next/link";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import React, { useCallback } from "react";

import { usePathname } from "next/navigation";

function SubNav({ categories }) {
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");

  return (
    <header className="sub-nav">
      <style jsx>{`
        .sub-nav {
          grid-column: 1/4;
          display: grid;
          justify-content: center;

          width: 100%;

          grid-gap: var(--space-small);
          margin-top: var(--space-med);
          margin-bottom: var(--space-small);
          position: sticky;
          top: 0;
          z-index: 1;
          padding: var(--space-small) 0;
          background-color: var(--main-light);
        }
        .cat-nav {
          display: grid;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .cat-nav::-webkit-scrollbar {
          display: none;
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
          display: flex;
          align-items: center;
          line-height: 1;
          width: max-content;
          margin-right: 10px;
        }

        .categories-list {
          display: grid;
          grid-gap: 10px;
          grid-auto-flow: column;
          width: fit-content;
        }
        .list-item {
          width: -webkit-fit-content;
          width: -moz-fit-content;
          width: fit-content;
          display: grid;
          align-content: center;
          justify-content: center;
          place-content: center;
          border-radius: 65px;
          border: 1px solid;
          padding: 3px 28px;
        }
        .list-item.active {
          color: var(--main-light);
          background-color: var(--main-dark);
        }
        .sub-nav-link {
          border: none;
          border-bottom: 1px solid transparent;
          outline: none;
          background: transparent;
          white-space: nowrap;
          color: inherit;
          font-size: 16px;
        }

        @media all and (max-width: 1024px) and (orientation: portrait) {
          .sub-nav {
            grid-column: 1/4;
            background: var(--main-light);
            z-index: 10;
            flex-direction: row;
            align-items: center;
          }
        }
        @media all and (max-width: 768px) and (orientation: portrait) {
          .categories-list {
            margin-left: var(--space-small);
          }
          .list-item {
            font-size: 14px;
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

      <nav className="cat-nav" aria-label="Основная навигация по категориям">
        <ol className="categories-list">
          <li className={`list-item ${!categoryId ? "active" : ""}`}>
            <Link href={`/categories`} scroll={false}>
              <span className={"sub-nav-link"}>Все категории</span>
            </Link>
          </li>
          {categories?.map((cat) => (
            <li
              key={cat.id}
              className={`list-item ${categoryId == cat.id ? "active" : ""} `}
            >
              <Link href={`?categoryId=${cat.id}`} scroll={false}>
                <span className={"sub-nav-link"}>{cat.name}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
export default React.memo(SubNav);
