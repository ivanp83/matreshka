"use client";

import Link from "next/link";
import { useRouter, useSearchParams, useParams } from "next/navigation";
import React, { useCallback } from "react";

import { usePathname } from "next/navigation";

function SubNav({ categories, product }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const route = usePathname();
  const { id } = useParams();
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
          grid-column: 1/2;
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: space-between;
          grid-gap: var(--space-small);
          margin-bottom: var(--space-small);
        }
        .cat-nav {
          display: ${route.includes("product") ? "none" : "grid"};
          margin: 0 auto var(--space-small);
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
          background: var(--main-dark);
          border-radius: 65px;
          color: var(--main-light);
          padding: 3px 28px;
        }

        .sub-nav-link {
          border: none;
          border-bottom: 1px solid transparent;
          outline: none;
          background: transparent;

          color: inherit;
        }
        .sub-nav-link.active {
          color: var(--main-gray);
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
          <li className={`list-item `}>
            <Link href={`/categories`}>
              <span className={`${id == 0 ? "active" : ""} sub-nav-link`}>
                Все категории
              </span>
            </Link>
          </li>
          {categories?.map((cat) => (
            <li key={cat.id} className={`list-item`}>
              <Link href={`/categories/${cat.id}`}>
                <span
                  className={`${id == cat.id ? "active" : ""} sub-nav-link`}
                >
                  {cat.name}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </header>
  );
}
export default React.memo(SubNav);
