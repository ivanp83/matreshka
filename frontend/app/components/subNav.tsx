"use client";

import Link from "next/link";
import { Category } from "@/types";
import React, { useEffect, useState } from "react";
import { Api } from "@/api";
import { useAppContext } from "../context/app.context";

type Props = {
  categories?: Array<Category>;
  categoryId?: number;
  handleProducts?: (id: number) => void;
  getAllProducts?: any;
};

function SubNav({
  categoryId,
  categories,
  getAllProducts,
  handleProducts,
}: Props) {
  const { activeCategory, setActiveCategory } = useAppContext();

  const [category, setCategory] = useState<Category | null>(null);

  useEffect(() => {
    (async () => {
      if (categoryId) {
        const data = await Api().category.find(categoryId);
        setCategory(data[0]);
      }
    })();
  }, [categoryId]);

  return (
    <div className="sub-nav">
      <style jsx>{`
        .sub-nav {
          position: sticky;
          top: var(--space-med);
          grid-column: 1/2;
          display: grid;
          grid-gap: var(--space-small);
        }
        .nav ul {
          display: grid;
          grid-auto-flow: column;
          grid-gap: 10px;
          width: fit-content;
        }
        .nav ul li {
          display: grid;
          grid-auto-flow: column;
          align-items: end;
          font-size: 18px;
          color: var(--main-gray);
          display: flex;
          align-items: flex-end;
          line-height: 1;
          width: max-content;
        }

        .nav ul li svg {
          display: block;
          width: 13px;
          height: 13px;
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

        .list-item button {
          border: none;
          border-bottom: 1px solid transparent;
          outline: none;
          background: transparent;
          cursor: pointer;
        }
        .list-item button.active {
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
            font-size: 14px;
            padding: 0;
          }
        }
      `}</style>
      <nav aria-label="Дополнительная навигация по товарам" className="nav">
        <ul>
          <li>
            <Link href="/">
              <span className="sub-nav-link"> Главная</span>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title />
                <g id="Complete">
                  <g id="F-Chevron">
                    <polyline
                      fill="none"
                      id="Right"
                      points="8.5 5 15.5 12 8.5 19"
                      stroke="var(--main-gray)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </g>
              </svg>
            </Link>
          </li>

          {!!category && (
            <li>
              <Link href={`categories`}>
                <span className="sub-nav-link">{category.name}</span>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title />
                  <g id="Complete">
                    <g id="F-Chevron">
                      <polyline
                        fill="none"
                        id="Right"
                        points="8.5 5 15.5 12 8.5 19"
                        stroke="var(--main-gray)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                  </g>
                </svg>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {!!handleProducts && (
        <>
          <ul className="categories-list">
            <li className={`list-item `}>
              <button
                className={`${
                  activeCategory == 0 ? "active" : ""
                } sub-nav-link`}
                onClick={() => {
                  setActiveCategory(0);
                  getAllProducts();
                }}
              >
                Все категории
              </button>
            </li>
            {categories?.map((cat) => (
              <li key={cat.id} className={`list-item`}>
                <button
                  className={`${
                    activeCategory == cat.id ? "active" : ""
                  } sub-nav-link`}
                  onClick={() => {
                    handleProducts(cat.id);
                    setActiveCategory(cat.id);
                  }}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </ul>
          <select
            defaultValue={activeCategory}
            name="categories-list"
            className="select"
            onChange={(e) => handleProducts(Number(e.target.value))}
          >
            <option value={0}>Все категории</option>
            {categories?.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
}
export default React.memo(SubNav);
