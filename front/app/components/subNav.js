"use client";

import Link from "next/link";

import React, { useEffect, useState } from "react";
import { Api } from "@/api";
import { useAppContext } from "../context/app.context";
import { useRouter } from "next/navigation";

function SubNav({ categoryId, categories, getAllProducts, handleProducts }) {
  const { activeCategory, setActiveCategory } = useAppContext();
  const router = useRouter();
  const [category, setCategory] = useState(null);

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
          align-items: baseline;
        }
        .nav ul li {
          display: grid;
          grid-auto-flow: column;
          align-items: end;
          font-size: 14px;
          color: var(--main-gray);
          display: flex;
          align-items: center;
          line-height: 1;
          width: max-content;
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
          font-weight: 600;
          color: inherit;
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
        <ul>
          <li>
            <Link href="/">
              <span className="sub-nav-link"> Главная</span>
            </Link>
          </li>

          {!!category && (
            <>
              <li className={`list-item `}>
                <button
                  className={`${
                    activeCategory == 0 ? "active" : ""
                  } sub-nav-link`}
                  onClick={() => {
                    setActiveCategory(0);
                    router.push("/categories");
                  }}
                >
                  Все категории
                </button>
              </li>
              <li>
                <Link href={`/categories`}>
                  <span className="sub-nav-link">{category.name}</span>
                </Link>
              </li>
            </>
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
